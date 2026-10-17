var oM=Object.defineProperty;var aM=(t,e,n)=>e in t?oM(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var wt=(t,e,n)=>aM(t,typeof e!="symbol"?e+"":e,n);function lM(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function fv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var hv={exports:{}},$c={},pv={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pa=Symbol.for("react.element"),cM=Symbol.for("react.portal"),uM=Symbol.for("react.fragment"),dM=Symbol.for("react.strict_mode"),fM=Symbol.for("react.profiler"),hM=Symbol.for("react.provider"),pM=Symbol.for("react.context"),mM=Symbol.for("react.forward_ref"),gM=Symbol.for("react.suspense"),vM=Symbol.for("react.memo"),xM=Symbol.for("react.lazy"),Tm=Symbol.iterator;function _M(t){return t===null||typeof t!="object"?null:(t=Tm&&t[Tm]||t["@@iterator"],typeof t=="function"?t:null)}var mv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gv=Object.assign,vv={};function vo(t,e,n){this.props=t,this.context=e,this.refs=vv,this.updater=n||mv}vo.prototype.isReactComponent={};vo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};vo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function xv(){}xv.prototype=vo.prototype;function Oh(t,e,n){this.props=t,this.context=e,this.refs=vv,this.updater=n||mv}var kh=Oh.prototype=new xv;kh.constructor=Oh;gv(kh,vo.prototype);kh.isPureReactComponent=!0;var Cm=Array.isArray,_v=Object.prototype.hasOwnProperty,Bh={current:null},yv={key:!0,ref:!0,__self:!0,__source:!0};function Sv(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)_v.call(e,i)&&!yv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Pa,type:t,key:s,ref:o,props:r,_owner:Bh.current}}function yM(t,e){return{$$typeof:Pa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function zh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Pa}function SM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Am=/\/+/g;function Mu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?SM(""+t.key):e.toString(36)}function zl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Pa:case cM:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Mu(o,0):i,Cm(r)?(n="",t!=null&&(n=t.replace(Am,"$&/")+"/"),zl(r,e,n,"",function(c){return c})):r!=null&&(zh(r)&&(r=yM(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Am,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Cm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Mu(s,a);o+=zl(s,e,n,l,r)}else if(l=_M(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Mu(s,a++),o+=zl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Wa(t,e,n){if(t==null)return t;var i=[],r=0;return zl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function MM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Mn={current:null},Vl={transition:null},wM={ReactCurrentDispatcher:Mn,ReactCurrentBatchConfig:Vl,ReactCurrentOwner:Bh};function Mv(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:Wa,forEach:function(t,e,n){Wa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Wa(t,function(){e++}),e},toArray:function(t){return Wa(t,function(e){return e})||[]},only:function(t){if(!zh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=vo;qe.Fragment=uM;qe.Profiler=fM;qe.PureComponent=Oh;qe.StrictMode=dM;qe.Suspense=gM;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wM;qe.act=Mv;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=gv({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Bh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)_v.call(e,l)&&!yv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Pa,type:t.type,key:r,ref:s,props:i,_owner:o}};qe.createContext=function(t){return t={$$typeof:pM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:hM,_context:t},t.Consumer=t};qe.createElement=Sv;qe.createFactory=function(t){var e=Sv.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:mM,render:t}};qe.isValidElement=zh;qe.lazy=function(t){return{$$typeof:xM,_payload:{_status:-1,_result:t},_init:MM}};qe.memo=function(t,e){return{$$typeof:vM,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=Vl.transition;Vl.transition={};try{t()}finally{Vl.transition=e}};qe.unstable_act=Mv;qe.useCallback=function(t,e){return Mn.current.useCallback(t,e)};qe.useContext=function(t){return Mn.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return Mn.current.useDeferredValue(t)};qe.useEffect=function(t,e){return Mn.current.useEffect(t,e)};qe.useId=function(){return Mn.current.useId()};qe.useImperativeHandle=function(t,e,n){return Mn.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return Mn.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return Mn.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return Mn.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return Mn.current.useReducer(t,e,n)};qe.useRef=function(t){return Mn.current.useRef(t)};qe.useState=function(t){return Mn.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return Mn.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return Mn.current.useTransition()};qe.version="18.3.1";pv.exports=qe;var N=pv.exports;const pr=fv(N),Vh=lM({__proto__:null,default:pr},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var EM=N,bM=Symbol.for("react.element"),TM=Symbol.for("react.fragment"),CM=Object.prototype.hasOwnProperty,AM=EM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,RM={key:!0,ref:!0,__self:!0,__source:!0};function wv(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)CM.call(e,i)&&!RM.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:bM,type:t,key:s,ref:o,props:r,_owner:AM.current}}$c.Fragment=TM;$c.jsx=wv;$c.jsxs=wv;hv.exports=$c;var S=hv.exports,Ev={exports:{}},Gn={},bv={exports:{}},Tv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(V,B){var X=V.length;V.push(B);e:for(;0<X;){var Z=X-1>>>1,ce=V[Z];if(0<r(ce,B))V[Z]=B,V[X]=ce,X=Z;else break e}}function n(V){return V.length===0?null:V[0]}function i(V){if(V.length===0)return null;var B=V[0],X=V.pop();if(X!==B){V[0]=X;e:for(var Z=0,ce=V.length,ve=ce>>>1;Z<ve;){var Xe=2*(Z+1)-1,ze=V[Xe],ke=Xe+1,Q=V[ke];if(0>r(ze,X))ke<ce&&0>r(Q,ze)?(V[Z]=Q,V[ke]=X,Z=ke):(V[Z]=ze,V[Xe]=X,Z=Xe);else if(ke<ce&&0>r(Q,X))V[Z]=Q,V[ke]=X,Z=ke;else break e}}return B}function r(V,B){var X=V.sortIndex-B.sortIndex;return X!==0?X:V.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,h=null,d=3,m=!1,x=!1,v=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(V){for(var B=n(c);B!==null;){if(B.callback===null)i(c);else if(B.startTime<=V)i(c),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(c)}}function _(V){if(v=!1,M(V),!x)if(n(l)!==null)x=!0,K(E);else{var B=n(c);B!==null&&$(_,B.startTime-V)}}function E(V,B){x=!1,v&&(v=!1,u(y),y=-1),m=!0;var X=d;try{for(M(B),h=n(l);h!==null&&(!(h.expirationTime>B)||V&&!I());){var Z=h.callback;if(typeof Z=="function"){h.callback=null,d=h.priorityLevel;var ce=Z(h.expirationTime<=B);B=t.unstable_now(),typeof ce=="function"?h.callback=ce:h===n(l)&&i(l),M(B)}else i(l);h=n(l)}if(h!==null)var ve=!0;else{var Xe=n(c);Xe!==null&&$(_,Xe.startTime-B),ve=!1}return ve}finally{h=null,d=X,m=!1}}var b=!1,C=null,y=-1,A=5,P=-1;function I(){return!(t.unstable_now()-P<A)}function D(){if(C!==null){var V=t.unstable_now();P=V;var B=!0;try{B=C(!0,V)}finally{B?G():(b=!1,C=null)}}else b=!1}var G;if(typeof g=="function")G=function(){g(D)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,z=L.port2;L.port1.onmessage=D,G=function(){z.postMessage(null)}}else G=function(){p(D,0)};function K(V){C=V,b||(b=!0,G())}function $(V,B){y=p(function(){V(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(V){V.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,K(E))},t.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<V?Math.floor(1e3/V):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(V){switch(d){case 1:case 2:case 3:var B=3;break;default:B=d}var X=d;d=B;try{return V()}finally{d=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(V,B){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var X=d;d=V;try{return B()}finally{d=X}},t.unstable_scheduleCallback=function(V,B,X){var Z=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?Z+X:Z):X=Z,V){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=X+ce,V={id:f++,callback:B,priorityLevel:V,startTime:X,expirationTime:ce,sortIndex:-1},X>Z?(V.sortIndex=X,e(c,V),n(l)===null&&V===n(c)&&(v?(u(y),y=-1):v=!0,$(_,X-Z))):(V.sortIndex=ce,e(l,V),x||m||(x=!0,K(E))),V},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(V){var B=d;return function(){var X=d;d=B;try{return V.apply(this,arguments)}finally{d=X}}}})(Tv);bv.exports=Tv;var PM=bv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NM=N,Hn=PM;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cv=new Set,oa={};function us(t,e){so(t,e),so(t+"Capture",e)}function so(t,e){for(oa[t]=e,t=0;t<e.length;t++)Cv.add(e[t])}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hd=Object.prototype.hasOwnProperty,LM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rm={},Pm={};function DM(t){return Hd.call(Pm,t)?!0:Hd.call(Rm,t)?!1:LM.test(t)?Pm[t]=!0:(Rm[t]=!0,!1)}function IM(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function UM(t,e,n,i){if(e===null||typeof e>"u"||IM(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function wn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var sn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){sn[t]=new wn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];sn[e]=new wn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){sn[t]=new wn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){sn[t]=new wn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){sn[t]=new wn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){sn[t]=new wn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){sn[t]=new wn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){sn[t]=new wn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){sn[t]=new wn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Hh=/[\-:]([a-z])/g;function Gh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Hh,Gh);sn[e]=new wn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Hh,Gh);sn[e]=new wn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Hh,Gh);sn[e]=new wn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){sn[t]=new wn(t,1,!1,t.toLowerCase(),null,!1,!1)});sn.xlinkHref=new wn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){sn[t]=new wn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Wh(t,e,n,i){var r=sn.hasOwnProperty(e)?sn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(UM(e,n,r,i)&&(n=null),i||r===null?DM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var er=NM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ja=Symbol.for("react.element"),Us=Symbol.for("react.portal"),Fs=Symbol.for("react.fragment"),jh=Symbol.for("react.strict_mode"),Gd=Symbol.for("react.profiler"),Av=Symbol.for("react.provider"),Rv=Symbol.for("react.context"),Xh=Symbol.for("react.forward_ref"),Wd=Symbol.for("react.suspense"),jd=Symbol.for("react.suspense_list"),$h=Symbol.for("react.memo"),gr=Symbol.for("react.lazy"),Pv=Symbol.for("react.offscreen"),Nm=Symbol.iterator;function bo(t){return t===null||typeof t!="object"?null:(t=Nm&&t[Nm]||t["@@iterator"],typeof t=="function"?t:null)}var Pt=Object.assign,wu;function Go(t){if(wu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);wu=e&&e[1]||""}return`
`+wu+t}var Eu=!1;function bu(t,e){if(!t||Eu)return"";Eu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Eu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Go(t):""}function FM(t){switch(t.tag){case 5:return Go(t.type);case 16:return Go("Lazy");case 13:return Go("Suspense");case 19:return Go("SuspenseList");case 0:case 2:case 15:return t=bu(t.type,!1),t;case 11:return t=bu(t.type.render,!1),t;case 1:return t=bu(t.type,!0),t;default:return""}}function Xd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Fs:return"Fragment";case Us:return"Portal";case Gd:return"Profiler";case jh:return"StrictMode";case Wd:return"Suspense";case jd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Rv:return(t.displayName||"Context")+".Consumer";case Av:return(t._context.displayName||"Context")+".Provider";case Xh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $h:return e=t.displayName||null,e!==null?e:Xd(t.type)||"Memo";case gr:e=t._payload,t=t._init;try{return Xd(t(e))}catch{}}return null}function OM(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xd(e);case 8:return e===jh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Nv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function kM(t){var e=Nv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Xa(t){t._valueTracker||(t._valueTracker=kM(t))}function Lv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Nv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function cc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $d(t,e){var n=e.checked;return Pt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Lm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Dv(t,e){e=e.checked,e!=null&&Wh(t,"checked",e,!1)}function Yd(t,e){Dv(t,e);var n=Dr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?qd(t,e.type,n):e.hasOwnProperty("defaultValue")&&qd(t,e.type,Dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Dm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function qd(t,e,n){(e!=="number"||cc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Wo=Array.isArray;function Ys(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Dr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Kd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return Pt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Im(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(Wo(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Dr(n)}}function Iv(t,e){var n=Dr(e.value),i=Dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Um(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Uv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Uv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $a,Fv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for($a=$a||document.createElement("div"),$a.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=$a.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function aa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var qo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},BM=["Webkit","ms","Moz","O"];Object.keys(qo).forEach(function(t){BM.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),qo[e]=qo[t]})});function Ov(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||qo.hasOwnProperty(t)&&qo[t]?(""+e).trim():e+"px"}function kv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Ov(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var zM=Pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qd(t,e){if(e){if(zM[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function Jd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ef=null;function Yh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var tf=null,qs=null,Ks=null;function Fm(t){if(t=Da(t)){if(typeof tf!="function")throw Error(se(280));var e=t.stateNode;e&&(e=Qc(e),tf(t.stateNode,t.type,e))}}function Bv(t){qs?Ks?Ks.push(t):Ks=[t]:qs=t}function zv(){if(qs){var t=qs,e=Ks;if(Ks=qs=null,Fm(t),e)for(t=0;t<e.length;t++)Fm(e[t])}}function Vv(t,e){return t(e)}function Hv(){}var Tu=!1;function Gv(t,e,n){if(Tu)return t(e,n);Tu=!0;try{return Vv(t,e,n)}finally{Tu=!1,(qs!==null||Ks!==null)&&(Hv(),zv())}}function la(t,e){var n=t.stateNode;if(n===null)return null;var i=Qc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var nf=!1;if(Yi)try{var To={};Object.defineProperty(To,"passive",{get:function(){nf=!0}}),window.addEventListener("test",To,To),window.removeEventListener("test",To,To)}catch{nf=!1}function VM(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Ko=!1,uc=null,dc=!1,rf=null,HM={onError:function(t){Ko=!0,uc=t}};function GM(t,e,n,i,r,s,o,a,l){Ko=!1,uc=null,VM.apply(HM,arguments)}function WM(t,e,n,i,r,s,o,a,l){if(GM.apply(this,arguments),Ko){if(Ko){var c=uc;Ko=!1,uc=null}else throw Error(se(198));dc||(dc=!0,rf=c)}}function ds(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Wv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Om(t){if(ds(t)!==t)throw Error(se(188))}function jM(t){var e=t.alternate;if(!e){if(e=ds(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Om(r),t;if(s===i)return Om(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function jv(t){return t=jM(t),t!==null?Xv(t):null}function Xv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Xv(t);if(e!==null)return e;t=t.sibling}return null}var $v=Hn.unstable_scheduleCallback,km=Hn.unstable_cancelCallback,XM=Hn.unstable_shouldYield,$M=Hn.unstable_requestPaint,It=Hn.unstable_now,YM=Hn.unstable_getCurrentPriorityLevel,qh=Hn.unstable_ImmediatePriority,Yv=Hn.unstable_UserBlockingPriority,fc=Hn.unstable_NormalPriority,qM=Hn.unstable_LowPriority,qv=Hn.unstable_IdlePriority,Yc=null,Ci=null;function KM(t){if(Ci&&typeof Ci.onCommitFiberRoot=="function")try{Ci.onCommitFiberRoot(Yc,t,void 0,(t.current.flags&128)===128)}catch{}}var ci=Math.clz32?Math.clz32:JM,ZM=Math.log,QM=Math.LN2;function JM(t){return t>>>=0,t===0?32:31-(ZM(t)/QM|0)|0}var Ya=64,qa=4194304;function jo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function hc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=jo(a):(s&=o,s!==0&&(i=jo(s)))}else o=n&~r,o!==0?i=jo(o):s!==0&&(i=jo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ci(e),r=1<<n,i|=t[n],e&=~r;return i}function ew(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tw(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ci(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=ew(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function sf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Kv(){var t=Ya;return Ya<<=1,!(Ya&4194240)&&(Ya=64),t}function Cu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Na(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ci(e),t[e]=n}function nw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ci(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Kh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ci(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var lt=0;function Zv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Qv,Zh,Jv,ex,tx,of=!1,Ka=[],br=null,Tr=null,Cr=null,ca=new Map,ua=new Map,_r=[],iw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bm(t,e){switch(t){case"focusin":case"focusout":br=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":Cr=null;break;case"pointerover":case"pointerout":ca.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ua.delete(e.pointerId)}}function Co(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Da(e),e!==null&&Zh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function rw(t,e,n,i,r){switch(e){case"focusin":return br=Co(br,t,e,n,i,r),!0;case"dragenter":return Tr=Co(Tr,t,e,n,i,r),!0;case"mouseover":return Cr=Co(Cr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ca.set(s,Co(ca.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ua.set(s,Co(ua.get(s)||null,t,e,n,i,r)),!0}return!1}function nx(t){var e=$r(t.target);if(e!==null){var n=ds(e);if(n!==null){if(e=n.tag,e===13){if(e=Wv(n),e!==null){t.blockedOn=e,tx(t.priority,function(){Jv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=af(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ef=i,n.target.dispatchEvent(i),ef=null}else return e=Da(n),e!==null&&Zh(e),t.blockedOn=n,!1;e.shift()}return!0}function zm(t,e,n){Hl(t)&&n.delete(e)}function sw(){of=!1,br!==null&&Hl(br)&&(br=null),Tr!==null&&Hl(Tr)&&(Tr=null),Cr!==null&&Hl(Cr)&&(Cr=null),ca.forEach(zm),ua.forEach(zm)}function Ao(t,e){t.blockedOn===e&&(t.blockedOn=null,of||(of=!0,Hn.unstable_scheduleCallback(Hn.unstable_NormalPriority,sw)))}function da(t){function e(r){return Ao(r,t)}if(0<Ka.length){Ao(Ka[0],t);for(var n=1;n<Ka.length;n++){var i=Ka[n];i.blockedOn===t&&(i.blockedOn=null)}}for(br!==null&&Ao(br,t),Tr!==null&&Ao(Tr,t),Cr!==null&&Ao(Cr,t),ca.forEach(e),ua.forEach(e),n=0;n<_r.length;n++)i=_r[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<_r.length&&(n=_r[0],n.blockedOn===null);)nx(n),n.blockedOn===null&&_r.shift()}var Zs=er.ReactCurrentBatchConfig,pc=!0;function ow(t,e,n,i){var r=lt,s=Zs.transition;Zs.transition=null;try{lt=1,Qh(t,e,n,i)}finally{lt=r,Zs.transition=s}}function aw(t,e,n,i){var r=lt,s=Zs.transition;Zs.transition=null;try{lt=4,Qh(t,e,n,i)}finally{lt=r,Zs.transition=s}}function Qh(t,e,n,i){if(pc){var r=af(t,e,n,i);if(r===null)Ou(t,e,i,mc,n),Bm(t,i);else if(rw(r,t,e,n,i))i.stopPropagation();else if(Bm(t,i),e&4&&-1<iw.indexOf(t)){for(;r!==null;){var s=Da(r);if(s!==null&&Qv(s),s=af(t,e,n,i),s===null&&Ou(t,e,i,mc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ou(t,e,i,null,n)}}var mc=null;function af(t,e,n,i){if(mc=null,t=Yh(i),t=$r(t),t!==null)if(e=ds(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Wv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return mc=t,null}function ix(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(YM()){case qh:return 1;case Yv:return 4;case fc:case qM:return 16;case qv:return 536870912;default:return 16}default:return 16}}var Mr=null,Jh=null,Gl=null;function rx(){if(Gl)return Gl;var t,e=Jh,n=e.length,i,r="value"in Mr?Mr.value:Mr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Gl=r.slice(t,1<i?1-i:void 0)}function Wl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Za(){return!0}function Vm(){return!1}function Wn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Za:Vm,this.isPropagationStopped=Vm,this}return Pt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Za)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Za)},persist:function(){},isPersistent:Za}),e}var xo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ep=Wn(xo),La=Pt({},xo,{view:0,detail:0}),lw=Wn(La),Au,Ru,Ro,qc=Pt({},La,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ro&&(Ro&&t.type==="mousemove"?(Au=t.screenX-Ro.screenX,Ru=t.screenY-Ro.screenY):Ru=Au=0,Ro=t),Au)},movementY:function(t){return"movementY"in t?t.movementY:Ru}}),Hm=Wn(qc),cw=Pt({},qc,{dataTransfer:0}),uw=Wn(cw),dw=Pt({},La,{relatedTarget:0}),Pu=Wn(dw),fw=Pt({},xo,{animationName:0,elapsedTime:0,pseudoElement:0}),hw=Wn(fw),pw=Pt({},xo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),mw=Wn(pw),gw=Pt({},xo,{data:0}),Gm=Wn(gw),vw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_w={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_w[t])?!!e[t]:!1}function tp(){return yw}var Sw=Pt({},La,{key:function(t){if(t.key){var e=vw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Wl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tp,charCode:function(t){return t.type==="keypress"?Wl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Mw=Wn(Sw),ww=Pt({},qc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wm=Wn(ww),Ew=Pt({},La,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tp}),bw=Wn(Ew),Tw=Pt({},xo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cw=Wn(Tw),Aw=Pt({},qc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Rw=Wn(Aw),Pw=[9,13,27,32],np=Yi&&"CompositionEvent"in window,Zo=null;Yi&&"documentMode"in document&&(Zo=document.documentMode);var Nw=Yi&&"TextEvent"in window&&!Zo,sx=Yi&&(!np||Zo&&8<Zo&&11>=Zo),jm=" ",Xm=!1;function ox(t,e){switch(t){case"keyup":return Pw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ax(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Os=!1;function Lw(t,e){switch(t){case"compositionend":return ax(e);case"keypress":return e.which!==32?null:(Xm=!0,jm);case"textInput":return t=e.data,t===jm&&Xm?null:t;default:return null}}function Dw(t,e){if(Os)return t==="compositionend"||!np&&ox(t,e)?(t=rx(),Gl=Jh=Mr=null,Os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return sx&&e.locale!=="ko"?null:e.data;default:return null}}var Iw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $m(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Iw[t.type]:e==="textarea"}function lx(t,e,n,i){Bv(i),e=gc(e,"onChange"),0<e.length&&(n=new ep("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Qo=null,fa=null;function Uw(t){_x(t,0)}function Kc(t){var e=zs(t);if(Lv(e))return t}function Fw(t,e){if(t==="change")return e}var cx=!1;if(Yi){var Nu;if(Yi){var Lu="oninput"in document;if(!Lu){var Ym=document.createElement("div");Ym.setAttribute("oninput","return;"),Lu=typeof Ym.oninput=="function"}Nu=Lu}else Nu=!1;cx=Nu&&(!document.documentMode||9<document.documentMode)}function qm(){Qo&&(Qo.detachEvent("onpropertychange",ux),fa=Qo=null)}function ux(t){if(t.propertyName==="value"&&Kc(fa)){var e=[];lx(e,fa,t,Yh(t)),Gv(Uw,e)}}function Ow(t,e,n){t==="focusin"?(qm(),Qo=e,fa=n,Qo.attachEvent("onpropertychange",ux)):t==="focusout"&&qm()}function kw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Kc(fa)}function Bw(t,e){if(t==="click")return Kc(e)}function zw(t,e){if(t==="input"||t==="change")return Kc(e)}function Vw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var di=typeof Object.is=="function"?Object.is:Vw;function ha(t,e){if(di(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Hd.call(e,r)||!di(t[r],e[r]))return!1}return!0}function Km(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zm(t,e){var n=Km(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Km(n)}}function dx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?dx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function fx(){for(var t=window,e=cc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=cc(t.document)}return e}function ip(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Hw(t){var e=fx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&dx(n.ownerDocument.documentElement,n)){if(i!==null&&ip(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Zm(n,s);var o=Zm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Gw=Yi&&"documentMode"in document&&11>=document.documentMode,ks=null,lf=null,Jo=null,cf=!1;function Qm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cf||ks==null||ks!==cc(i)||(i=ks,"selectionStart"in i&&ip(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Jo&&ha(Jo,i)||(Jo=i,i=gc(lf,"onSelect"),0<i.length&&(e=new ep("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ks)))}function Qa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Bs={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionend:Qa("Transition","TransitionEnd")},Du={},hx={};Yi&&(hx=document.createElement("div").style,"AnimationEvent"in window||(delete Bs.animationend.animation,delete Bs.animationiteration.animation,delete Bs.animationstart.animation),"TransitionEvent"in window||delete Bs.transitionend.transition);function Zc(t){if(Du[t])return Du[t];if(!Bs[t])return t;var e=Bs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in hx)return Du[t]=e[n];return t}var px=Zc("animationend"),mx=Zc("animationiteration"),gx=Zc("animationstart"),vx=Zc("transitionend"),xx=new Map,Jm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fr(t,e){xx.set(t,e),us(e,[t])}for(var Iu=0;Iu<Jm.length;Iu++){var Uu=Jm[Iu],Ww=Uu.toLowerCase(),jw=Uu[0].toUpperCase()+Uu.slice(1);Fr(Ww,"on"+jw)}Fr(px,"onAnimationEnd");Fr(mx,"onAnimationIteration");Fr(gx,"onAnimationStart");Fr("dblclick","onDoubleClick");Fr("focusin","onFocus");Fr("focusout","onBlur");Fr(vx,"onTransitionEnd");so("onMouseEnter",["mouseout","mouseover"]);so("onMouseLeave",["mouseout","mouseover"]);so("onPointerEnter",["pointerout","pointerover"]);so("onPointerLeave",["pointerout","pointerover"]);us("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));us("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));us("onBeforeInput",["compositionend","keypress","textInput","paste"]);us("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));us("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));us("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xo));function eg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,WM(i,e,void 0,t),t.currentTarget=null}function _x(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;eg(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;eg(r,a,c),s=l}}}if(dc)throw t=rf,dc=!1,rf=null,t}function St(t,e){var n=e[pf];n===void 0&&(n=e[pf]=new Set);var i=t+"__bubble";n.has(i)||(yx(e,t,2,!1),n.add(i))}function Fu(t,e,n){var i=0;e&&(i|=4),yx(n,t,i,e)}var Ja="_reactListening"+Math.random().toString(36).slice(2);function pa(t){if(!t[Ja]){t[Ja]=!0,Cv.forEach(function(n){n!=="selectionchange"&&(Xw.has(n)||Fu(n,!1,t),Fu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ja]||(e[Ja]=!0,Fu("selectionchange",!1,e))}}function yx(t,e,n,i){switch(ix(e)){case 1:var r=ow;break;case 4:r=aw;break;default:r=Qh}n=r.bind(null,e,n,t),r=void 0,!nf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ou(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=$r(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Gv(function(){var c=s,f=Yh(n),h=[];e:{var d=xx.get(t);if(d!==void 0){var m=ep,x=t;switch(t){case"keypress":if(Wl(n)===0)break e;case"keydown":case"keyup":m=Mw;break;case"focusin":x="focus",m=Pu;break;case"focusout":x="blur",m=Pu;break;case"beforeblur":case"afterblur":m=Pu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Hm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=uw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=bw;break;case px:case mx:case gx:m=hw;break;case vx:m=Cw;break;case"scroll":m=lw;break;case"wheel":m=Rw;break;case"copy":case"cut":case"paste":m=mw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Wm}var v=(e&4)!==0,p=!v&&t==="scroll",u=v?d!==null?d+"Capture":null:d;v=[];for(var g=c,M;g!==null;){M=g;var _=M.stateNode;if(M.tag===5&&_!==null&&(M=_,u!==null&&(_=la(g,u),_!=null&&v.push(ma(g,_,M)))),p)break;g=g.return}0<v.length&&(d=new m(d,x,null,n,f),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==ef&&(x=n.relatedTarget||n.fromElement)&&($r(x)||x[qi]))break e;if((m||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=c,x=x?$r(x):null,x!==null&&(p=ds(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=c),m!==x)){if(v=Hm,_="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(v=Wm,_="onPointerLeave",u="onPointerEnter",g="pointer"),p=m==null?d:zs(m),M=x==null?d:zs(x),d=new v(_,g+"leave",m,n,f),d.target=p,d.relatedTarget=M,_=null,$r(f)===c&&(v=new v(u,g+"enter",x,n,f),v.target=M,v.relatedTarget=p,_=v),p=_,m&&x)t:{for(v=m,u=x,g=0,M=v;M;M=vs(M))g++;for(M=0,_=u;_;_=vs(_))M++;for(;0<g-M;)v=vs(v),g--;for(;0<M-g;)u=vs(u),M--;for(;g--;){if(v===u||u!==null&&v===u.alternate)break t;v=vs(v),u=vs(u)}v=null}else v=null;m!==null&&tg(h,d,m,v,!1),x!==null&&p!==null&&tg(h,p,x,v,!0)}}e:{if(d=c?zs(c):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var E=Fw;else if($m(d))if(cx)E=zw;else{E=kw;var b=Ow}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(E=Bw);if(E&&(E=E(t,c))){lx(h,E,n,f);break e}b&&b(t,d,c),t==="focusout"&&(b=d._wrapperState)&&b.controlled&&d.type==="number"&&qd(d,"number",d.value)}switch(b=c?zs(c):window,t){case"focusin":($m(b)||b.contentEditable==="true")&&(ks=b,lf=c,Jo=null);break;case"focusout":Jo=lf=ks=null;break;case"mousedown":cf=!0;break;case"contextmenu":case"mouseup":case"dragend":cf=!1,Qm(h,n,f);break;case"selectionchange":if(Gw)break;case"keydown":case"keyup":Qm(h,n,f)}var C;if(np)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Os?ox(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(sx&&n.locale!=="ko"&&(Os||y!=="onCompositionStart"?y==="onCompositionEnd"&&Os&&(C=rx()):(Mr=f,Jh="value"in Mr?Mr.value:Mr.textContent,Os=!0)),b=gc(c,y),0<b.length&&(y=new Gm(y,t,null,n,f),h.push({event:y,listeners:b}),C?y.data=C:(C=ax(n),C!==null&&(y.data=C)))),(C=Nw?Lw(t,n):Dw(t,n))&&(c=gc(c,"onBeforeInput"),0<c.length&&(f=new Gm("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=C))}_x(h,e)})}function ma(t,e,n){return{instance:t,listener:e,currentTarget:n}}function gc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=la(t,n),s!=null&&i.unshift(ma(t,s,r)),s=la(t,e),s!=null&&i.push(ma(t,s,r))),t=t.return}return i}function vs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function tg(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=la(n,s),l!=null&&o.unshift(ma(n,l,a))):r||(l=la(n,s),l!=null&&o.push(ma(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var $w=/\r\n?/g,Yw=/\u0000|\uFFFD/g;function ng(t){return(typeof t=="string"?t:""+t).replace($w,`
`).replace(Yw,"")}function el(t,e,n){if(e=ng(e),ng(t)!==e&&n)throw Error(se(425))}function vc(){}var uf=null,df=null;function ff(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var hf=typeof setTimeout=="function"?setTimeout:void 0,qw=typeof clearTimeout=="function"?clearTimeout:void 0,ig=typeof Promise=="function"?Promise:void 0,Kw=typeof queueMicrotask=="function"?queueMicrotask:typeof ig<"u"?function(t){return ig.resolve(null).then(t).catch(Zw)}:hf;function Zw(t){setTimeout(function(){throw t})}function ku(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),da(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);da(e)}function Ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function rg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var _o=Math.random().toString(36).slice(2),Mi="__reactFiber$"+_o,ga="__reactProps$"+_o,qi="__reactContainer$"+_o,pf="__reactEvents$"+_o,Qw="__reactListeners$"+_o,Jw="__reactHandles$"+_o;function $r(t){var e=t[Mi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[qi]||n[Mi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=rg(t);t!==null;){if(n=t[Mi])return n;t=rg(t)}return e}t=n,n=t.parentNode}return null}function Da(t){return t=t[Mi]||t[qi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function zs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function Qc(t){return t[ga]||null}var mf=[],Vs=-1;function Or(t){return{current:t}}function Mt(t){0>Vs||(t.current=mf[Vs],mf[Vs]=null,Vs--)}function xt(t,e){Vs++,mf[Vs]=t.current,t.current=e}var Ir={},mn=Or(Ir),Cn=Or(!1),es=Ir;function oo(t,e){var n=t.type.contextTypes;if(!n)return Ir;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function An(t){return t=t.childContextTypes,t!=null}function xc(){Mt(Cn),Mt(mn)}function sg(t,e,n){if(mn.current!==Ir)throw Error(se(168));xt(mn,e),xt(Cn,n)}function Sx(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,OM(t)||"Unknown",r));return Pt({},n,i)}function _c(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ir,es=mn.current,xt(mn,t),xt(Cn,Cn.current),!0}function og(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=Sx(t,e,es),i.__reactInternalMemoizedMergedChildContext=t,Mt(Cn),Mt(mn),xt(mn,t)):Mt(Cn),xt(Cn,n)}var Hi=null,Jc=!1,Bu=!1;function Mx(t){Hi===null?Hi=[t]:Hi.push(t)}function e1(t){Jc=!0,Mx(t)}function kr(){if(!Bu&&Hi!==null){Bu=!0;var t=0,e=lt;try{var n=Hi;for(lt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Hi=null,Jc=!1}catch(r){throw Hi!==null&&(Hi=Hi.slice(t+1)),$v(qh,kr),r}finally{lt=e,Bu=!1}}return null}var Hs=[],Gs=0,yc=null,Sc=0,Yn=[],qn=0,ts=null,Gi=1,Wi="";function jr(t,e){Hs[Gs++]=Sc,Hs[Gs++]=yc,yc=t,Sc=e}function wx(t,e,n){Yn[qn++]=Gi,Yn[qn++]=Wi,Yn[qn++]=ts,ts=t;var i=Gi;t=Wi;var r=32-ci(i)-1;i&=~(1<<r),n+=1;var s=32-ci(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Gi=1<<32-ci(e)+r|n<<r|i,Wi=s+t}else Gi=1<<s|n<<r|i,Wi=t}function rp(t){t.return!==null&&(jr(t,1),wx(t,1,0))}function sp(t){for(;t===yc;)yc=Hs[--Gs],Hs[Gs]=null,Sc=Hs[--Gs],Hs[Gs]=null;for(;t===ts;)ts=Yn[--qn],Yn[qn]=null,Wi=Yn[--qn],Yn[qn]=null,Gi=Yn[--qn],Yn[qn]=null}var Vn=null,zn=null,Et=!1,oi=null;function Ex(t,e){var n=Kn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ag(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Vn=t,zn=Ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Vn=t,zn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ts!==null?{id:Gi,overflow:Wi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Kn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Vn=t,zn=null,!0):!1;default:return!1}}function gf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vf(t){if(Et){var e=zn;if(e){var n=e;if(!ag(t,e)){if(gf(t))throw Error(se(418));e=Ar(n.nextSibling);var i=Vn;e&&ag(t,e)?Ex(i,n):(t.flags=t.flags&-4097|2,Et=!1,Vn=t)}}else{if(gf(t))throw Error(se(418));t.flags=t.flags&-4097|2,Et=!1,Vn=t}}}function lg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Vn=t}function tl(t){if(t!==Vn)return!1;if(!Et)return lg(t),Et=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ff(t.type,t.memoizedProps)),e&&(e=zn)){if(gf(t))throw bx(),Error(se(418));for(;e;)Ex(t,e),e=Ar(e.nextSibling)}if(lg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){zn=Ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}zn=null}}else zn=Vn?Ar(t.stateNode.nextSibling):null;return!0}function bx(){for(var t=zn;t;)t=Ar(t.nextSibling)}function ao(){zn=Vn=null,Et=!1}function op(t){oi===null?oi=[t]:oi.push(t)}var t1=er.ReactCurrentBatchConfig;function Po(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function nl(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function cg(t){var e=t._init;return e(t._payload)}function Tx(t){function e(u,g){if(t){var M=u.deletions;M===null?(u.deletions=[g],u.flags|=16):M.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=Lr(u,g),u.index=0,u.sibling=null,u}function s(u,g,M){return u.index=M,t?(M=u.alternate,M!==null?(M=M.index,M<g?(u.flags|=2,g):M):(u.flags|=2,g)):(u.flags|=1048576,g)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,g,M,_){return g===null||g.tag!==6?(g=Xu(M,u.mode,_),g.return=u,g):(g=r(g,M),g.return=u,g)}function l(u,g,M,_){var E=M.type;return E===Fs?f(u,g,M.props.children,_,M.key):g!==null&&(g.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===gr&&cg(E)===g.type)?(_=r(g,M.props),_.ref=Po(u,g,M),_.return=u,_):(_=Zl(M.type,M.key,M.props,null,u.mode,_),_.ref=Po(u,g,M),_.return=u,_)}function c(u,g,M,_){return g===null||g.tag!==4||g.stateNode.containerInfo!==M.containerInfo||g.stateNode.implementation!==M.implementation?(g=$u(M,u.mode,_),g.return=u,g):(g=r(g,M.children||[]),g.return=u,g)}function f(u,g,M,_,E){return g===null||g.tag!==7?(g=Jr(M,u.mode,_,E),g.return=u,g):(g=r(g,M),g.return=u,g)}function h(u,g,M){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Xu(""+g,u.mode,M),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ja:return M=Zl(g.type,g.key,g.props,null,u.mode,M),M.ref=Po(u,null,g),M.return=u,M;case Us:return g=$u(g,u.mode,M),g.return=u,g;case gr:var _=g._init;return h(u,_(g._payload),M)}if(Wo(g)||bo(g))return g=Jr(g,u.mode,M,null),g.return=u,g;nl(u,g)}return null}function d(u,g,M,_){var E=g!==null?g.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return E!==null?null:a(u,g,""+M,_);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ja:return M.key===E?l(u,g,M,_):null;case Us:return M.key===E?c(u,g,M,_):null;case gr:return E=M._init,d(u,g,E(M._payload),_)}if(Wo(M)||bo(M))return E!==null?null:f(u,g,M,_,null);nl(u,M)}return null}function m(u,g,M,_,E){if(typeof _=="string"&&_!==""||typeof _=="number")return u=u.get(M)||null,a(g,u,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ja:return u=u.get(_.key===null?M:_.key)||null,l(g,u,_,E);case Us:return u=u.get(_.key===null?M:_.key)||null,c(g,u,_,E);case gr:var b=_._init;return m(u,g,M,b(_._payload),E)}if(Wo(_)||bo(_))return u=u.get(M)||null,f(g,u,_,E,null);nl(g,_)}return null}function x(u,g,M,_){for(var E=null,b=null,C=g,y=g=0,A=null;C!==null&&y<M.length;y++){C.index>y?(A=C,C=null):A=C.sibling;var P=d(u,C,M[y],_);if(P===null){C===null&&(C=A);break}t&&C&&P.alternate===null&&e(u,C),g=s(P,g,y),b===null?E=P:b.sibling=P,b=P,C=A}if(y===M.length)return n(u,C),Et&&jr(u,y),E;if(C===null){for(;y<M.length;y++)C=h(u,M[y],_),C!==null&&(g=s(C,g,y),b===null?E=C:b.sibling=C,b=C);return Et&&jr(u,y),E}for(C=i(u,C);y<M.length;y++)A=m(C,u,y,M[y],_),A!==null&&(t&&A.alternate!==null&&C.delete(A.key===null?y:A.key),g=s(A,g,y),b===null?E=A:b.sibling=A,b=A);return t&&C.forEach(function(I){return e(u,I)}),Et&&jr(u,y),E}function v(u,g,M,_){var E=bo(M);if(typeof E!="function")throw Error(se(150));if(M=E.call(M),M==null)throw Error(se(151));for(var b=E=null,C=g,y=g=0,A=null,P=M.next();C!==null&&!P.done;y++,P=M.next()){C.index>y?(A=C,C=null):A=C.sibling;var I=d(u,C,P.value,_);if(I===null){C===null&&(C=A);break}t&&C&&I.alternate===null&&e(u,C),g=s(I,g,y),b===null?E=I:b.sibling=I,b=I,C=A}if(P.done)return n(u,C),Et&&jr(u,y),E;if(C===null){for(;!P.done;y++,P=M.next())P=h(u,P.value,_),P!==null&&(g=s(P,g,y),b===null?E=P:b.sibling=P,b=P);return Et&&jr(u,y),E}for(C=i(u,C);!P.done;y++,P=M.next())P=m(C,u,y,P.value,_),P!==null&&(t&&P.alternate!==null&&C.delete(P.key===null?y:P.key),g=s(P,g,y),b===null?E=P:b.sibling=P,b=P);return t&&C.forEach(function(D){return e(u,D)}),Et&&jr(u,y),E}function p(u,g,M,_){if(typeof M=="object"&&M!==null&&M.type===Fs&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case ja:e:{for(var E=M.key,b=g;b!==null;){if(b.key===E){if(E=M.type,E===Fs){if(b.tag===7){n(u,b.sibling),g=r(b,M.props.children),g.return=u,u=g;break e}}else if(b.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===gr&&cg(E)===b.type){n(u,b.sibling),g=r(b,M.props),g.ref=Po(u,b,M),g.return=u,u=g;break e}n(u,b);break}else e(u,b);b=b.sibling}M.type===Fs?(g=Jr(M.props.children,u.mode,_,M.key),g.return=u,u=g):(_=Zl(M.type,M.key,M.props,null,u.mode,_),_.ref=Po(u,g,M),_.return=u,u=_)}return o(u);case Us:e:{for(b=M.key;g!==null;){if(g.key===b)if(g.tag===4&&g.stateNode.containerInfo===M.containerInfo&&g.stateNode.implementation===M.implementation){n(u,g.sibling),g=r(g,M.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=$u(M,u.mode,_),g.return=u,u=g}return o(u);case gr:return b=M._init,p(u,g,b(M._payload),_)}if(Wo(M))return x(u,g,M,_);if(bo(M))return v(u,g,M,_);nl(u,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,M),g.return=u,u=g):(n(u,g),g=Xu(M,u.mode,_),g.return=u,u=g),o(u)):n(u,g)}return p}var lo=Tx(!0),Cx=Tx(!1),Mc=Or(null),wc=null,Ws=null,ap=null;function lp(){ap=Ws=wc=null}function cp(t){var e=Mc.current;Mt(Mc),t._currentValue=e}function xf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Qs(t,e){wc=t,ap=Ws=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Tn=!0),t.firstContext=null)}function Qn(t){var e=t._currentValue;if(ap!==t)if(t={context:t,memoizedValue:e,next:null},Ws===null){if(wc===null)throw Error(se(308));Ws=t,wc.dependencies={lanes:0,firstContext:t}}else Ws=Ws.next=t;return e}var Yr=null;function up(t){Yr===null?Yr=[t]:Yr.push(t)}function Ax(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,up(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ki(t,i)}function Ki(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var vr=!1;function dp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Xi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Rr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ki(t,n)}return r=i.interleaved,r===null?(e.next=e,up(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ki(t,n)}function jl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Kh(t,n)}}function ug(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ec(t,e,n,i){var r=t.updateQueue;vr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=c=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,v=a;switch(d=e,m=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){h=x.call(m,h,d);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,d=typeof x=="function"?x.call(m,h,d):x,d==null)break e;h=Pt({},h,d);break e;case 2:vr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=m,l=h):f=f.next=m,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);is|=o,t.lanes=o,t.memoizedState=h}}function dg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var Ia={},Ai=Or(Ia),va=Or(Ia),xa=Or(Ia);function qr(t){if(t===Ia)throw Error(se(174));return t}function fp(t,e){switch(xt(xa,e),xt(va,t),xt(Ai,Ia),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Zd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Zd(e,t)}Mt(Ai),xt(Ai,e)}function co(){Mt(Ai),Mt(va),Mt(xa)}function Px(t){qr(xa.current);var e=qr(Ai.current),n=Zd(e,t.type);e!==n&&(xt(va,t),xt(Ai,n))}function hp(t){va.current===t&&(Mt(Ai),Mt(va))}var Ct=Or(0);function bc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var zu=[];function pp(){for(var t=0;t<zu.length;t++)zu[t]._workInProgressVersionPrimary=null;zu.length=0}var Xl=er.ReactCurrentDispatcher,Vu=er.ReactCurrentBatchConfig,ns=0,Rt=null,zt=null,$t=null,Tc=!1,ea=!1,_a=0,n1=0;function ln(){throw Error(se(321))}function mp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!di(t[n],e[n]))return!1;return!0}function gp(t,e,n,i,r,s){if(ns=s,Rt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Xl.current=t===null||t.memoizedState===null?o1:a1,t=n(i,r),ea){s=0;do{if(ea=!1,_a=0,25<=s)throw Error(se(301));s+=1,$t=zt=null,e.updateQueue=null,Xl.current=l1,t=n(i,r)}while(ea)}if(Xl.current=Cc,e=zt!==null&&zt.next!==null,ns=0,$t=zt=Rt=null,Tc=!1,e)throw Error(se(300));return t}function vp(){var t=_a!==0;return _a=0,t}function _i(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $t===null?Rt.memoizedState=$t=t:$t=$t.next=t,$t}function Jn(){if(zt===null){var t=Rt.alternate;t=t!==null?t.memoizedState:null}else t=zt.next;var e=$t===null?Rt.memoizedState:$t.next;if(e!==null)$t=e,zt=t;else{if(t===null)throw Error(se(310));zt=t,t={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},$t===null?Rt.memoizedState=$t=t:$t=$t.next=t}return $t}function ya(t,e){return typeof e=="function"?e(t):e}function Hu(t){var e=Jn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=zt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((ns&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Rt.lanes|=f,is|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,di(i,e.memoizedState)||(Tn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Rt.lanes|=s,is|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gu(t){var e=Jn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);di(s,e.memoizedState)||(Tn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Nx(){}function Lx(t,e){var n=Rt,i=Jn(),r=e(),s=!di(i.memoizedState,r);if(s&&(i.memoizedState=r,Tn=!0),i=i.queue,xp(Ux.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||$t!==null&&$t.memoizedState.tag&1){if(n.flags|=2048,Sa(9,Ix.bind(null,n,i,r,e),void 0,null),qt===null)throw Error(se(349));ns&30||Dx(n,e,r)}return r}function Dx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Rt.updateQueue,e===null?(e={lastEffect:null,stores:null},Rt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ix(t,e,n,i){e.value=n,e.getSnapshot=i,Fx(e)&&Ox(t)}function Ux(t,e,n){return n(function(){Fx(e)&&Ox(t)})}function Fx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!di(t,n)}catch{return!0}}function Ox(t){var e=Ki(t,1);e!==null&&ui(e,t,1,-1)}function fg(t){var e=_i();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:t},e.queue=t,t=t.dispatch=s1.bind(null,Rt,t),[e.memoizedState,t]}function Sa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Rt.updateQueue,e===null?(e={lastEffect:null,stores:null},Rt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function kx(){return Jn().memoizedState}function $l(t,e,n,i){var r=_i();Rt.flags|=t,r.memoizedState=Sa(1|e,n,void 0,i===void 0?null:i)}function eu(t,e,n,i){var r=Jn();i=i===void 0?null:i;var s=void 0;if(zt!==null){var o=zt.memoizedState;if(s=o.destroy,i!==null&&mp(i,o.deps)){r.memoizedState=Sa(e,n,s,i);return}}Rt.flags|=t,r.memoizedState=Sa(1|e,n,s,i)}function hg(t,e){return $l(8390656,8,t,e)}function xp(t,e){return eu(2048,8,t,e)}function Bx(t,e){return eu(4,2,t,e)}function zx(t,e){return eu(4,4,t,e)}function Vx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Hx(t,e,n){return n=n!=null?n.concat([t]):null,eu(4,4,Vx.bind(null,e,t),n)}function _p(){}function Gx(t,e){var n=Jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&mp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Wx(t,e){var n=Jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&mp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function jx(t,e,n){return ns&21?(di(n,e)||(n=Kv(),Rt.lanes|=n,is|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Tn=!0),t.memoizedState=n)}function i1(t,e){var n=lt;lt=n!==0&&4>n?n:4,t(!0);var i=Vu.transition;Vu.transition={};try{t(!1),e()}finally{lt=n,Vu.transition=i}}function Xx(){return Jn().memoizedState}function r1(t,e,n){var i=Nr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},$x(t))Yx(e,n);else if(n=Ax(t,e,n,i),n!==null){var r=yn();ui(n,t,i,r),qx(n,e,i)}}function s1(t,e,n){var i=Nr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if($x(t))Yx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,di(a,o)){var l=e.interleaved;l===null?(r.next=r,up(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Ax(t,e,r,i),n!==null&&(r=yn(),ui(n,t,i,r),qx(n,e,i))}}function $x(t){var e=t.alternate;return t===Rt||e!==null&&e===Rt}function Yx(t,e){ea=Tc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function qx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Kh(t,n)}}var Cc={readContext:Qn,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useInsertionEffect:ln,useLayoutEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useMutableSource:ln,useSyncExternalStore:ln,useId:ln,unstable_isNewReconciler:!1},o1={readContext:Qn,useCallback:function(t,e){return _i().memoizedState=[t,e===void 0?null:e],t},useContext:Qn,useEffect:hg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,$l(4194308,4,Vx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return $l(4194308,4,t,e)},useInsertionEffect:function(t,e){return $l(4,2,t,e)},useMemo:function(t,e){var n=_i();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=_i();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=r1.bind(null,Rt,t),[i.memoizedState,t]},useRef:function(t){var e=_i();return t={current:t},e.memoizedState=t},useState:fg,useDebugValue:_p,useDeferredValue:function(t){return _i().memoizedState=t},useTransition:function(){var t=fg(!1),e=t[0];return t=i1.bind(null,t[1]),_i().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Rt,r=_i();if(Et){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),qt===null)throw Error(se(349));ns&30||Dx(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,hg(Ux.bind(null,i,s,t),[t]),i.flags|=2048,Sa(9,Ix.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=_i(),e=qt.identifierPrefix;if(Et){var n=Wi,i=Gi;n=(i&~(1<<32-ci(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=_a++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=n1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},a1={readContext:Qn,useCallback:Gx,useContext:Qn,useEffect:xp,useImperativeHandle:Hx,useInsertionEffect:Bx,useLayoutEffect:zx,useMemo:Wx,useReducer:Hu,useRef:kx,useState:function(){return Hu(ya)},useDebugValue:_p,useDeferredValue:function(t){var e=Jn();return jx(e,zt.memoizedState,t)},useTransition:function(){var t=Hu(ya)[0],e=Jn().memoizedState;return[t,e]},useMutableSource:Nx,useSyncExternalStore:Lx,useId:Xx,unstable_isNewReconciler:!1},l1={readContext:Qn,useCallback:Gx,useContext:Qn,useEffect:xp,useImperativeHandle:Hx,useInsertionEffect:Bx,useLayoutEffect:zx,useMemo:Wx,useReducer:Gu,useRef:kx,useState:function(){return Gu(ya)},useDebugValue:_p,useDeferredValue:function(t){var e=Jn();return zt===null?e.memoizedState=t:jx(e,zt.memoizedState,t)},useTransition:function(){var t=Gu(ya)[0],e=Jn().memoizedState;return[t,e]},useMutableSource:Nx,useSyncExternalStore:Lx,useId:Xx,unstable_isNewReconciler:!1};function ri(t,e){if(t&&t.defaultProps){e=Pt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function _f(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Pt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var tu={isMounted:function(t){return(t=t._reactInternals)?ds(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=yn(),r=Nr(t),s=Xi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Rr(t,s,r),e!==null&&(ui(e,t,r,i),jl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=yn(),r=Nr(t),s=Xi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Rr(t,s,r),e!==null&&(ui(e,t,r,i),jl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=yn(),i=Nr(t),r=Xi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Rr(t,r,i),e!==null&&(ui(e,t,i,n),jl(e,t,i))}};function pg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ha(n,i)||!ha(r,s):!0}function Kx(t,e,n){var i=!1,r=Ir,s=e.contextType;return typeof s=="object"&&s!==null?s=Qn(s):(r=An(e)?es:mn.current,i=e.contextTypes,s=(i=i!=null)?oo(t,r):Ir),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=tu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function mg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&tu.enqueueReplaceState(e,e.state,null)}function yf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},dp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Qn(s):(s=An(e)?es:mn.current,r.context=oo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(_f(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&tu.enqueueReplaceState(r,r.state,null),Ec(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function uo(t,e){try{var n="",i=e;do n+=FM(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Wu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Sf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var c1=typeof WeakMap=="function"?WeakMap:Map;function Zx(t,e,n){n=Xi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Rc||(Rc=!0,Nf=i),Sf(t,e)},n}function Qx(t,e,n){n=Xi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Sf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Sf(t,e),typeof i!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function gg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new c1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=w1.bind(null,t,e,n),e.then(t,t))}function vg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function xg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Xi(-1,1),e.tag=2,Rr(n,e,1))),n.lanes|=1),t)}var u1=er.ReactCurrentOwner,Tn=!1;function _n(t,e,n,i){e.child=t===null?Cx(e,null,n,i):lo(e,t.child,n,i)}function _g(t,e,n,i,r){n=n.render;var s=e.ref;return Qs(e,r),i=gp(t,e,n,i,s,r),n=vp(),t!==null&&!Tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Zi(t,e,r)):(Et&&n&&rp(e),e.flags|=1,_n(t,e,i,r),e.child)}function yg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Cp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Jx(t,e,s,i,r)):(t=Zl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ha,n(o,i)&&t.ref===e.ref)return Zi(t,e,r)}return e.flags|=1,t=Lr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Jx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ha(s,i)&&t.ref===e.ref)if(Tn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Tn=!0);else return e.lanes=t.lanes,Zi(t,e,r)}return Mf(t,e,n,i,r)}function e_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},xt(Xs,Fn),Fn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,xt(Xs,Fn),Fn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,xt(Xs,Fn),Fn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,xt(Xs,Fn),Fn|=i;return _n(t,e,r,n),e.child}function t_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Mf(t,e,n,i,r){var s=An(n)?es:mn.current;return s=oo(e,s),Qs(e,r),n=gp(t,e,n,i,s,r),i=vp(),t!==null&&!Tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Zi(t,e,r)):(Et&&i&&rp(e),e.flags|=1,_n(t,e,n,r),e.child)}function Sg(t,e,n,i,r){if(An(n)){var s=!0;_c(e)}else s=!1;if(Qs(e,r),e.stateNode===null)Yl(t,e),Kx(e,n,i),yf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Qn(c):(c=An(n)?es:mn.current,c=oo(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&mg(e,o,i,c),vr=!1;var d=e.memoizedState;o.state=d,Ec(e,i,o,r),l=e.memoizedState,a!==i||d!==l||Cn.current||vr?(typeof f=="function"&&(_f(e,n,f,i),l=e.memoizedState),(a=vr||pg(e,n,a,i,d,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Rx(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ri(e.type,a),o.props=c,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Qn(l):(l=An(n)?es:mn.current,l=oo(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&mg(e,o,i,l),vr=!1,d=e.memoizedState,o.state=d,Ec(e,i,o,r);var x=e.memoizedState;a!==h||d!==x||Cn.current||vr?(typeof m=="function"&&(_f(e,n,m,i),x=e.memoizedState),(c=vr||pg(e,n,c,i,d,x,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return wf(t,e,n,i,s,r)}function wf(t,e,n,i,r,s){t_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&og(e,n,!1),Zi(t,e,s);i=e.stateNode,u1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=lo(e,t.child,null,s),e.child=lo(e,null,a,s)):_n(t,e,a,s),e.memoizedState=i.state,r&&og(e,n,!0),e.child}function n_(t){var e=t.stateNode;e.pendingContext?sg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&sg(t,e.context,!1),fp(t,e.containerInfo)}function Mg(t,e,n,i,r){return ao(),op(r),e.flags|=256,_n(t,e,n,i),e.child}var Ef={dehydrated:null,treeContext:null,retryLane:0};function bf(t){return{baseLanes:t,cachePool:null,transitions:null}}function i_(t,e,n){var i=e.pendingProps,r=Ct.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),xt(Ct,r&1),t===null)return vf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ru(o,i,0,null),t=Jr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=bf(n),e.memoizedState=Ef,t):yp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return d1(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Lr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Lr(a,s):(s=Jr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?bf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ef,i}return s=t.child,t=s.sibling,i=Lr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function yp(t,e){return e=ru({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function il(t,e,n,i){return i!==null&&op(i),lo(e,t.child,null,n),t=yp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function d1(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Wu(Error(se(422))),il(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ru({mode:"visible",children:i.children},r,0,null),s=Jr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&lo(e,t.child,null,o),e.child.memoizedState=bf(o),e.memoizedState=Ef,s);if(!(e.mode&1))return il(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=Wu(s,i,void 0),il(t,e,o,i)}if(a=(o&t.childLanes)!==0,Tn||a){if(i=qt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ki(t,r),ui(i,t,r,-1))}return Tp(),i=Wu(Error(se(421))),il(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=E1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,zn=Ar(r.nextSibling),Vn=e,Et=!0,oi=null,t!==null&&(Yn[qn++]=Gi,Yn[qn++]=Wi,Yn[qn++]=ts,Gi=t.id,Wi=t.overflow,ts=e),e=yp(e,i.children),e.flags|=4096,e)}function wg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),xf(t.return,e,n)}function ju(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function r_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(_n(t,e,i.children,n),i=Ct.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wg(t,n,e);else if(t.tag===19)wg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(xt(Ct,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&bc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),ju(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&bc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}ju(e,!0,n,null,s);break;case"together":ju(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Yl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Zi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),is|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=Lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function f1(t,e,n){switch(e.tag){case 3:n_(e),ao();break;case 5:Px(e);break;case 1:An(e.type)&&_c(e);break;case 4:fp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;xt(Mc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(xt(Ct,Ct.current&1),e.flags|=128,null):n&e.child.childLanes?i_(t,e,n):(xt(Ct,Ct.current&1),t=Zi(t,e,n),t!==null?t.sibling:null);xt(Ct,Ct.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return r_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),xt(Ct,Ct.current),i)break;return null;case 22:case 23:return e.lanes=0,e_(t,e,n)}return Zi(t,e,n)}var s_,Tf,o_,a_;s_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Tf=function(){};o_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,qr(Ai.current);var s=null;switch(n){case"input":r=$d(t,r),i=$d(t,i),s=[];break;case"select":r=Pt({},r,{value:void 0}),i=Pt({},i,{value:void 0}),s=[];break;case"textarea":r=Kd(t,r),i=Kd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=vc)}Qd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(oa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(oa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&St("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};a_=function(t,e,n,i){n!==i&&(e.flags|=4)};function No(t,e){if(!Et)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function cn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function h1(t,e,n){var i=e.pendingProps;switch(sp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(e),null;case 1:return An(e.type)&&xc(),cn(e),null;case 3:return i=e.stateNode,co(),Mt(Cn),Mt(mn),pp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(tl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,oi!==null&&(If(oi),oi=null))),Tf(t,e),cn(e),null;case 5:hp(e);var r=qr(xa.current);if(n=e.type,t!==null&&e.stateNode!=null)o_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return cn(e),null}if(t=qr(Ai.current),tl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Mi]=e,i[ga]=s,t=(e.mode&1)!==0,n){case"dialog":St("cancel",i),St("close",i);break;case"iframe":case"object":case"embed":St("load",i);break;case"video":case"audio":for(r=0;r<Xo.length;r++)St(Xo[r],i);break;case"source":St("error",i);break;case"img":case"image":case"link":St("error",i),St("load",i);break;case"details":St("toggle",i);break;case"input":Lm(i,s),St("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},St("invalid",i);break;case"textarea":Im(i,s),St("invalid",i)}Qd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&el(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&el(i.textContent,a,t),r=["children",""+a]):oa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&St("scroll",i)}switch(n){case"input":Xa(i),Dm(i,s,!0);break;case"textarea":Xa(i),Um(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=vc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Uv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Mi]=e,t[ga]=i,s_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Jd(n,i),n){case"dialog":St("cancel",t),St("close",t),r=i;break;case"iframe":case"object":case"embed":St("load",t),r=i;break;case"video":case"audio":for(r=0;r<Xo.length;r++)St(Xo[r],t);r=i;break;case"source":St("error",t),r=i;break;case"img":case"image":case"link":St("error",t),St("load",t),r=i;break;case"details":St("toggle",t),r=i;break;case"input":Lm(t,i),r=$d(t,i),St("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Pt({},i,{value:void 0}),St("invalid",t);break;case"textarea":Im(t,i),r=Kd(t,i),St("invalid",t);break;default:r=i}Qd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?kv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Fv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&aa(t,l):typeof l=="number"&&aa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(oa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&St("scroll",t):l!=null&&Wh(t,s,l,o))}switch(n){case"input":Xa(t),Dm(t,i,!1);break;case"textarea":Xa(t),Um(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Dr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ys(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ys(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=vc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return cn(e),null;case 6:if(t&&e.stateNode!=null)a_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=qr(xa.current),qr(Ai.current),tl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Mi]=e,(s=i.nodeValue!==n)&&(t=Vn,t!==null))switch(t.tag){case 3:el(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&el(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Mi]=e,e.stateNode=i}return cn(e),null;case 13:if(Mt(Ct),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Et&&zn!==null&&e.mode&1&&!(e.flags&128))bx(),ao(),e.flags|=98560,s=!1;else if(s=tl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[Mi]=e}else ao(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;cn(e),s=!1}else oi!==null&&(If(oi),oi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Ct.current&1?Vt===0&&(Vt=3):Tp())),e.updateQueue!==null&&(e.flags|=4),cn(e),null);case 4:return co(),Tf(t,e),t===null&&pa(e.stateNode.containerInfo),cn(e),null;case 10:return cp(e.type._context),cn(e),null;case 17:return An(e.type)&&xc(),cn(e),null;case 19:if(Mt(Ct),s=e.memoizedState,s===null)return cn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)No(s,!1);else{if(Vt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=bc(t),o!==null){for(e.flags|=128,No(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return xt(Ct,Ct.current&1|2),e.child}t=t.sibling}s.tail!==null&&It()>fo&&(e.flags|=128,i=!0,No(s,!1),e.lanes=4194304)}else{if(!i)if(t=bc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),No(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Et)return cn(e),null}else 2*It()-s.renderingStartTime>fo&&n!==1073741824&&(e.flags|=128,i=!0,No(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=It(),e.sibling=null,n=Ct.current,xt(Ct,i?n&1|2:n&1),e):(cn(e),null);case 22:case 23:return bp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Fn&1073741824&&(cn(e),e.subtreeFlags&6&&(e.flags|=8192)):cn(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function p1(t,e){switch(sp(e),e.tag){case 1:return An(e.type)&&xc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return co(),Mt(Cn),Mt(mn),pp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hp(e),null;case 13:if(Mt(Ct),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));ao()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Mt(Ct),null;case 4:return co(),null;case 10:return cp(e.type._context),null;case 22:case 23:return bp(),null;case 24:return null;default:return null}}var rl=!1,fn=!1,m1=typeof WeakSet=="function"?WeakSet:Set,we=null;function js(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Nt(t,e,i)}else n.current=null}function Cf(t,e,n){try{n()}catch(i){Nt(t,e,i)}}var Eg=!1;function g1(t,e){if(uf=pc,t=fx(),ip(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,h=t,d=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++f===i&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(df={focusedElem:t,selectionRange:n},pc=!1,we=e;we!==null;)if(e=we,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,we=t;else for(;we!==null;){e=we;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,p=x.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?v:ri(e.type,v),p);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var M=e.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(_){Nt(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,we=t;break}we=e.return}return x=Eg,Eg=!1,x}function ta(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Cf(e,n,s)}r=r.next}while(r!==i)}}function nu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Af(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function l_(t){var e=t.alternate;e!==null&&(t.alternate=null,l_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Mi],delete e[ga],delete e[pf],delete e[Qw],delete e[Jw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function c_(t){return t.tag===5||t.tag===3||t.tag===4}function bg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||c_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=vc));else if(i!==4&&(t=t.child,t!==null))for(Rf(t,e,n),t=t.sibling;t!==null;)Rf(t,e,n),t=t.sibling}function Pf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Pf(t,e,n),t=t.sibling;t!==null;)Pf(t,e,n),t=t.sibling}var Qt=null,si=!1;function or(t,e,n){for(n=n.child;n!==null;)u_(t,e,n),n=n.sibling}function u_(t,e,n){if(Ci&&typeof Ci.onCommitFiberUnmount=="function")try{Ci.onCommitFiberUnmount(Yc,n)}catch{}switch(n.tag){case 5:fn||js(n,e);case 6:var i=Qt,r=si;Qt=null,or(t,e,n),Qt=i,si=r,Qt!==null&&(si?(t=Qt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Qt.removeChild(n.stateNode));break;case 18:Qt!==null&&(si?(t=Qt,n=n.stateNode,t.nodeType===8?ku(t.parentNode,n):t.nodeType===1&&ku(t,n),da(t)):ku(Qt,n.stateNode));break;case 4:i=Qt,r=si,Qt=n.stateNode.containerInfo,si=!0,or(t,e,n),Qt=i,si=r;break;case 0:case 11:case 14:case 15:if(!fn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Cf(n,e,o),r=r.next}while(r!==i)}or(t,e,n);break;case 1:if(!fn&&(js(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Nt(n,e,a)}or(t,e,n);break;case 21:or(t,e,n);break;case 22:n.mode&1?(fn=(i=fn)||n.memoizedState!==null,or(t,e,n),fn=i):or(t,e,n);break;default:or(t,e,n)}}function Tg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new m1),e.forEach(function(i){var r=b1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ei(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Qt=a.stateNode,si=!1;break e;case 3:Qt=a.stateNode.containerInfo,si=!0;break e;case 4:Qt=a.stateNode.containerInfo,si=!0;break e}a=a.return}if(Qt===null)throw Error(se(160));u_(s,o,r),Qt=null,si=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Nt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)d_(e,t),e=e.sibling}function d_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ei(e,t),gi(t),i&4){try{ta(3,t,t.return),nu(3,t)}catch(v){Nt(t,t.return,v)}try{ta(5,t,t.return)}catch(v){Nt(t,t.return,v)}}break;case 1:ei(e,t),gi(t),i&512&&n!==null&&js(n,n.return);break;case 5:if(ei(e,t),gi(t),i&512&&n!==null&&js(n,n.return),t.flags&32){var r=t.stateNode;try{aa(r,"")}catch(v){Nt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Dv(r,s),Jd(a,o);var c=Jd(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?kv(r,h):f==="dangerouslySetInnerHTML"?Fv(r,h):f==="children"?aa(r,h):Wh(r,f,h,c)}switch(a){case"input":Yd(r,s);break;case"textarea":Iv(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ys(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ys(r,!!s.multiple,s.defaultValue,!0):Ys(r,!!s.multiple,s.multiple?[]:"",!1))}r[ga]=s}catch(v){Nt(t,t.return,v)}}break;case 6:if(ei(e,t),gi(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){Nt(t,t.return,v)}}break;case 3:if(ei(e,t),gi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{da(e.containerInfo)}catch(v){Nt(t,t.return,v)}break;case 4:ei(e,t),gi(t);break;case 13:ei(e,t),gi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(wp=It())),i&4&&Tg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(fn=(c=fn)||f,ei(e,t),fn=c):ei(e,t),gi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(we=t,f=t.child;f!==null;){for(h=we=f;we!==null;){switch(d=we,m=d.child,d.tag){case 0:case 11:case 14:case 15:ta(4,d,d.return);break;case 1:js(d,d.return);var x=d.stateNode;if(typeof x.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(v){Nt(i,n,v)}}break;case 5:js(d,d.return);break;case 22:if(d.memoizedState!==null){Ag(h);continue}}m!==null?(m.return=d,we=m):Ag(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ov("display",o))}catch(v){Nt(t,t.return,v)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(v){Nt(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ei(e,t),gi(t),i&4&&Tg(t);break;case 21:break;default:ei(e,t),gi(t)}}function gi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(c_(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(aa(r,""),i.flags&=-33);var s=bg(t);Pf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=bg(t);Rf(t,a,o);break;default:throw Error(se(161))}}catch(l){Nt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function v1(t,e,n){we=t,f_(t)}function f_(t,e,n){for(var i=(t.mode&1)!==0;we!==null;){var r=we,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||rl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||fn;a=rl;var c=fn;if(rl=o,(fn=l)&&!c)for(we=r;we!==null;)o=we,l=o.child,o.tag===22&&o.memoizedState!==null?Rg(r):l!==null?(l.return=o,we=l):Rg(r);for(;s!==null;)we=s,f_(s),s=s.sibling;we=r,rl=a,fn=c}Cg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,we=s):Cg(t)}}function Cg(t){for(;we!==null;){var e=we;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:fn||nu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!fn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ri(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&dg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}dg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&da(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}fn||e.flags&512&&Af(e)}catch(d){Nt(e,e.return,d)}}if(e===t){we=null;break}if(n=e.sibling,n!==null){n.return=e.return,we=n;break}we=e.return}}function Ag(t){for(;we!==null;){var e=we;if(e===t){we=null;break}var n=e.sibling;if(n!==null){n.return=e.return,we=n;break}we=e.return}}function Rg(t){for(;we!==null;){var e=we;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{nu(4,e)}catch(l){Nt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Nt(e,r,l)}}var s=e.return;try{Af(e)}catch(l){Nt(e,s,l)}break;case 5:var o=e.return;try{Af(e)}catch(l){Nt(e,o,l)}}}catch(l){Nt(e,e.return,l)}if(e===t){we=null;break}var a=e.sibling;if(a!==null){a.return=e.return,we=a;break}we=e.return}}var x1=Math.ceil,Ac=er.ReactCurrentDispatcher,Sp=er.ReactCurrentOwner,Zn=er.ReactCurrentBatchConfig,et=0,qt=null,Bt=null,rn=0,Fn=0,Xs=Or(0),Vt=0,Ma=null,is=0,iu=0,Mp=0,na=null,bn=null,wp=0,fo=1/0,Vi=null,Rc=!1,Nf=null,Pr=null,sl=!1,wr=null,Pc=0,ia=0,Lf=null,ql=-1,Kl=0;function yn(){return et&6?It():ql!==-1?ql:ql=It()}function Nr(t){return t.mode&1?et&2&&rn!==0?rn&-rn:t1.transition!==null?(Kl===0&&(Kl=Kv()),Kl):(t=lt,t!==0||(t=window.event,t=t===void 0?16:ix(t.type)),t):1}function ui(t,e,n,i){if(50<ia)throw ia=0,Lf=null,Error(se(185));Na(t,n,i),(!(et&2)||t!==qt)&&(t===qt&&(!(et&2)&&(iu|=n),Vt===4&&yr(t,rn)),Rn(t,i),n===1&&et===0&&!(e.mode&1)&&(fo=It()+500,Jc&&kr()))}function Rn(t,e){var n=t.callbackNode;tw(t,e);var i=hc(t,t===qt?rn:0);if(i===0)n!==null&&km(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&km(n),e===1)t.tag===0?e1(Pg.bind(null,t)):Mx(Pg.bind(null,t)),Kw(function(){!(et&6)&&kr()}),n=null;else{switch(Zv(i)){case 1:n=qh;break;case 4:n=Yv;break;case 16:n=fc;break;case 536870912:n=qv;break;default:n=fc}n=y_(n,h_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function h_(t,e){if(ql=-1,Kl=0,et&6)throw Error(se(327));var n=t.callbackNode;if(Js()&&t.callbackNode!==n)return null;var i=hc(t,t===qt?rn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Nc(t,i);else{e=i;var r=et;et|=2;var s=m_();(qt!==t||rn!==e)&&(Vi=null,fo=It()+500,Qr(t,e));do try{S1();break}catch(a){p_(t,a)}while(!0);lp(),Ac.current=s,et=r,Bt!==null?e=0:(qt=null,rn=0,e=Vt)}if(e!==0){if(e===2&&(r=sf(t),r!==0&&(i=r,e=Df(t,r))),e===1)throw n=Ma,Qr(t,0),yr(t,i),Rn(t,It()),n;if(e===6)yr(t,i);else{if(r=t.current.alternate,!(i&30)&&!_1(r)&&(e=Nc(t,i),e===2&&(s=sf(t),s!==0&&(i=s,e=Df(t,s))),e===1))throw n=Ma,Qr(t,0),yr(t,i),Rn(t,It()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:Xr(t,bn,Vi);break;case 3:if(yr(t,i),(i&130023424)===i&&(e=wp+500-It(),10<e)){if(hc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){yn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=hf(Xr.bind(null,t,bn,Vi),e);break}Xr(t,bn,Vi);break;case 4:if(yr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ci(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=It()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*x1(i/1960))-i,10<i){t.timeoutHandle=hf(Xr.bind(null,t,bn,Vi),i);break}Xr(t,bn,Vi);break;case 5:Xr(t,bn,Vi);break;default:throw Error(se(329))}}}return Rn(t,It()),t.callbackNode===n?h_.bind(null,t):null}function Df(t,e){var n=na;return t.current.memoizedState.isDehydrated&&(Qr(t,e).flags|=256),t=Nc(t,e),t!==2&&(e=bn,bn=n,e!==null&&If(e)),t}function If(t){bn===null?bn=t:bn.push.apply(bn,t)}function _1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!di(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function yr(t,e){for(e&=~Mp,e&=~iu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ci(e),i=1<<n;t[n]=-1,e&=~i}}function Pg(t){if(et&6)throw Error(se(327));Js();var e=hc(t,0);if(!(e&1))return Rn(t,It()),null;var n=Nc(t,e);if(t.tag!==0&&n===2){var i=sf(t);i!==0&&(e=i,n=Df(t,i))}if(n===1)throw n=Ma,Qr(t,0),yr(t,e),Rn(t,It()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Xr(t,bn,Vi),Rn(t,It()),null}function Ep(t,e){var n=et;et|=1;try{return t(e)}finally{et=n,et===0&&(fo=It()+500,Jc&&kr())}}function rs(t){wr!==null&&wr.tag===0&&!(et&6)&&Js();var e=et;et|=1;var n=Zn.transition,i=lt;try{if(Zn.transition=null,lt=1,t)return t()}finally{lt=i,Zn.transition=n,et=e,!(et&6)&&kr()}}function bp(){Fn=Xs.current,Mt(Xs)}function Qr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,qw(n)),Bt!==null)for(n=Bt.return;n!==null;){var i=n;switch(sp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&xc();break;case 3:co(),Mt(Cn),Mt(mn),pp();break;case 5:hp(i);break;case 4:co();break;case 13:Mt(Ct);break;case 19:Mt(Ct);break;case 10:cp(i.type._context);break;case 22:case 23:bp()}n=n.return}if(qt=t,Bt=t=Lr(t.current,null),rn=Fn=e,Vt=0,Ma=null,Mp=iu=is=0,bn=na=null,Yr!==null){for(e=0;e<Yr.length;e++)if(n=Yr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Yr=null}return t}function p_(t,e){do{var n=Bt;try{if(lp(),Xl.current=Cc,Tc){for(var i=Rt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Tc=!1}if(ns=0,$t=zt=Rt=null,ea=!1,_a=0,Sp.current=null,n===null||n.return===null){Vt=1,Ma=e,Bt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=rn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=vg(o);if(m!==null){m.flags&=-257,xg(m,o,a,s,e),m.mode&1&&gg(s,c,e),e=m,l=c;var x=e.updateQueue;if(x===null){var v=new Set;v.add(l),e.updateQueue=v}else x.add(l);break e}else{if(!(e&1)){gg(s,c,e),Tp();break e}l=Error(se(426))}}else if(Et&&a.mode&1){var p=vg(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),xg(p,o,a,s,e),op(uo(l,a));break e}}s=l=uo(l,a),Vt!==4&&(Vt=2),na===null?na=[s]:na.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Zx(s,l,e);ug(s,u);break e;case 1:a=l;var g=s.type,M=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(Pr===null||!Pr.has(M)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=Qx(s,a,e);ug(s,_);break e}}s=s.return}while(s!==null)}v_(n)}catch(E){e=E,Bt===n&&n!==null&&(Bt=n=n.return);continue}break}while(!0)}function m_(){var t=Ac.current;return Ac.current=Cc,t===null?Cc:t}function Tp(){(Vt===0||Vt===3||Vt===2)&&(Vt=4),qt===null||!(is&268435455)&&!(iu&268435455)||yr(qt,rn)}function Nc(t,e){var n=et;et|=2;var i=m_();(qt!==t||rn!==e)&&(Vi=null,Qr(t,e));do try{y1();break}catch(r){p_(t,r)}while(!0);if(lp(),et=n,Ac.current=i,Bt!==null)throw Error(se(261));return qt=null,rn=0,Vt}function y1(){for(;Bt!==null;)g_(Bt)}function S1(){for(;Bt!==null&&!XM();)g_(Bt)}function g_(t){var e=__(t.alternate,t,Fn);t.memoizedProps=t.pendingProps,e===null?v_(t):Bt=e,Sp.current=null}function v_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=p1(n,e),n!==null){n.flags&=32767,Bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Vt=6,Bt=null;return}}else if(n=h1(n,e,Fn),n!==null){Bt=n;return}if(e=e.sibling,e!==null){Bt=e;return}Bt=e=t}while(e!==null);Vt===0&&(Vt=5)}function Xr(t,e,n){var i=lt,r=Zn.transition;try{Zn.transition=null,lt=1,M1(t,e,n,i)}finally{Zn.transition=r,lt=i}return null}function M1(t,e,n,i){do Js();while(wr!==null);if(et&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(nw(t,s),t===qt&&(Bt=qt=null,rn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||sl||(sl=!0,y_(fc,function(){return Js(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Zn.transition,Zn.transition=null;var o=lt;lt=1;var a=et;et|=4,Sp.current=null,g1(t,n),d_(n,t),Hw(df),pc=!!uf,df=uf=null,t.current=n,v1(n),$M(),et=a,lt=o,Zn.transition=s}else t.current=n;if(sl&&(sl=!1,wr=t,Pc=r),s=t.pendingLanes,s===0&&(Pr=null),KM(n.stateNode),Rn(t,It()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Rc)throw Rc=!1,t=Nf,Nf=null,t;return Pc&1&&t.tag!==0&&Js(),s=t.pendingLanes,s&1?t===Lf?ia++:(ia=0,Lf=t):ia=0,kr(),null}function Js(){if(wr!==null){var t=Zv(Pc),e=Zn.transition,n=lt;try{if(Zn.transition=null,lt=16>t?16:t,wr===null)var i=!1;else{if(t=wr,wr=null,Pc=0,et&6)throw Error(se(331));var r=et;for(et|=4,we=t.current;we!==null;){var s=we,o=s.child;if(we.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(we=c;we!==null;){var f=we;switch(f.tag){case 0:case 11:case 15:ta(8,f,s)}var h=f.child;if(h!==null)h.return=f,we=h;else for(;we!==null;){f=we;var d=f.sibling,m=f.return;if(l_(f),f===c){we=null;break}if(d!==null){d.return=m,we=d;break}we=m}}}var x=s.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var p=v.sibling;v.sibling=null,v=p}while(v!==null)}}we=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,we=o;else e:for(;we!==null;){if(s=we,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ta(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,we=u;break e}we=s.return}}var g=t.current;for(we=g;we!==null;){o=we;var M=o.child;if(o.subtreeFlags&2064&&M!==null)M.return=o,we=M;else e:for(o=g;we!==null;){if(a=we,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:nu(9,a)}}catch(E){Nt(a,a.return,E)}if(a===o){we=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,we=_;break e}we=a.return}}if(et=r,kr(),Ci&&typeof Ci.onPostCommitFiberRoot=="function")try{Ci.onPostCommitFiberRoot(Yc,t)}catch{}i=!0}return i}finally{lt=n,Zn.transition=e}}return!1}function Ng(t,e,n){e=uo(n,e),e=Zx(t,e,1),t=Rr(t,e,1),e=yn(),t!==null&&(Na(t,1,e),Rn(t,e))}function Nt(t,e,n){if(t.tag===3)Ng(t,t,n);else for(;e!==null;){if(e.tag===3){Ng(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Pr===null||!Pr.has(i))){t=uo(n,t),t=Qx(e,t,1),e=Rr(e,t,1),t=yn(),e!==null&&(Na(e,1,t),Rn(e,t));break}}e=e.return}}function w1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=yn(),t.pingedLanes|=t.suspendedLanes&n,qt===t&&(rn&n)===n&&(Vt===4||Vt===3&&(rn&130023424)===rn&&500>It()-wp?Qr(t,0):Mp|=n),Rn(t,e)}function x_(t,e){e===0&&(t.mode&1?(e=qa,qa<<=1,!(qa&130023424)&&(qa=4194304)):e=1);var n=yn();t=Ki(t,e),t!==null&&(Na(t,e,n),Rn(t,n))}function E1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),x_(t,n)}function b1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),x_(t,n)}var __;__=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Cn.current)Tn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Tn=!1,f1(t,e,n);Tn=!!(t.flags&131072)}else Tn=!1,Et&&e.flags&1048576&&wx(e,Sc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Yl(t,e),t=e.pendingProps;var r=oo(e,mn.current);Qs(e,n),r=gp(null,e,i,t,r,n);var s=vp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,An(i)?(s=!0,_c(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,dp(e),r.updater=tu,e.stateNode=r,r._reactInternals=e,yf(e,i,t,n),e=wf(null,e,i,!0,s,n)):(e.tag=0,Et&&s&&rp(e),_n(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Yl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=C1(i),t=ri(i,t),r){case 0:e=Mf(null,e,i,t,n);break e;case 1:e=Sg(null,e,i,t,n);break e;case 11:e=_g(null,e,i,t,n);break e;case 14:e=yg(null,e,i,ri(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),Mf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),Sg(t,e,i,r,n);case 3:e:{if(n_(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Rx(t,e),Ec(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=uo(Error(se(423)),e),e=Mg(t,e,i,n,r);break e}else if(i!==r){r=uo(Error(se(424)),e),e=Mg(t,e,i,n,r);break e}else for(zn=Ar(e.stateNode.containerInfo.firstChild),Vn=e,Et=!0,oi=null,n=Cx(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ao(),i===r){e=Zi(t,e,n);break e}_n(t,e,i,n)}e=e.child}return e;case 5:return Px(e),t===null&&vf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,ff(i,r)?o=null:s!==null&&ff(i,s)&&(e.flags|=32),t_(t,e),_n(t,e,o,n),e.child;case 6:return t===null&&vf(e),null;case 13:return i_(t,e,n);case 4:return fp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=lo(e,null,i,n):_n(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),_g(t,e,i,r,n);case 7:return _n(t,e,e.pendingProps,n),e.child;case 8:return _n(t,e,e.pendingProps.children,n),e.child;case 12:return _n(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,xt(Mc,i._currentValue),i._currentValue=o,s!==null)if(di(s.value,o)){if(s.children===r.children&&!Cn.current){e=Zi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Xi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),xf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),xf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}_n(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Qs(e,n),r=Qn(r),i=i(r),e.flags|=1,_n(t,e,i,n),e.child;case 14:return i=e.type,r=ri(i,e.pendingProps),r=ri(i.type,r),yg(t,e,i,r,n);case 15:return Jx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),Yl(t,e),e.tag=1,An(i)?(t=!0,_c(e)):t=!1,Qs(e,n),Kx(e,i,r),yf(e,i,r,n),wf(null,e,i,!0,t,n);case 19:return r_(t,e,n);case 22:return e_(t,e,n)}throw Error(se(156,e.tag))};function y_(t,e){return $v(t,e)}function T1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,e,n,i){return new T1(t,e,n,i)}function Cp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function C1(t){if(typeof t=="function")return Cp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Xh)return 11;if(t===$h)return 14}return 2}function Lr(t,e){var n=t.alternate;return n===null?(n=Kn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Zl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Cp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Fs:return Jr(n.children,r,s,e);case jh:o=8,r|=8;break;case Gd:return t=Kn(12,n,e,r|2),t.elementType=Gd,t.lanes=s,t;case Wd:return t=Kn(13,n,e,r),t.elementType=Wd,t.lanes=s,t;case jd:return t=Kn(19,n,e,r),t.elementType=jd,t.lanes=s,t;case Pv:return ru(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Av:o=10;break e;case Rv:o=9;break e;case Xh:o=11;break e;case $h:o=14;break e;case gr:o=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=Kn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Jr(t,e,n,i){return t=Kn(7,t,i,e),t.lanes=n,t}function ru(t,e,n,i){return t=Kn(22,t,i,e),t.elementType=Pv,t.lanes=n,t.stateNode={isHidden:!1},t}function Xu(t,e,n){return t=Kn(6,t,null,e),t.lanes=n,t}function $u(t,e,n){return e=Kn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function A1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cu(0),this.expirationTimes=Cu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ap(t,e,n,i,r,s,o,a,l){return t=new A1(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Kn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},dp(s),t}function R1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Us,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function S_(t){if(!t)return Ir;t=t._reactInternals;e:{if(ds(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(An(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(An(n))return Sx(t,n,e)}return e}function M_(t,e,n,i,r,s,o,a,l){return t=Ap(n,i,!0,t,r,s,o,a,l),t.context=S_(null),n=t.current,i=yn(),r=Nr(n),s=Xi(i,r),s.callback=e??null,Rr(n,s,r),t.current.lanes=r,Na(t,r,i),Rn(t,i),t}function su(t,e,n,i){var r=e.current,s=yn(),o=Nr(r);return n=S_(n),e.context===null?e.context=n:e.pendingContext=n,e=Xi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Rr(r,e,o),t!==null&&(ui(t,r,o,s),jl(t,r,o)),o}function Lc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Rp(t,e){Lg(t,e),(t=t.alternate)&&Lg(t,e)}function P1(){return null}var w_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Pp(t){this._internalRoot=t}ou.prototype.render=Pp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));su(t,e,null,null)};ou.prototype.unmount=Pp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;rs(function(){su(null,t,null,null)}),e[qi]=null}};function ou(t){this._internalRoot=t}ou.prototype.unstable_scheduleHydration=function(t){if(t){var e=ex();t={blockedOn:null,target:t,priority:e};for(var n=0;n<_r.length&&e!==0&&e<_r[n].priority;n++);_r.splice(n,0,t),n===0&&nx(t)}};function Np(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function au(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Dg(){}function N1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Lc(o);s.call(c)}}var o=M_(e,i,t,0,null,!1,!1,"",Dg);return t._reactRootContainer=o,t[qi]=o.current,pa(t.nodeType===8?t.parentNode:t),rs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Lc(l);a.call(c)}}var l=Ap(t,0,!1,null,null,!1,!1,"",Dg);return t._reactRootContainer=l,t[qi]=l.current,pa(t.nodeType===8?t.parentNode:t),rs(function(){su(e,l,n,i)}),l}function lu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Lc(o);a.call(l)}}su(e,o,t,r)}else o=N1(n,e,t,r,i);return Lc(o)}Qv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=jo(e.pendingLanes);n!==0&&(Kh(e,n|1),Rn(e,It()),!(et&6)&&(fo=It()+500,kr()))}break;case 13:rs(function(){var i=Ki(t,1);if(i!==null){var r=yn();ui(i,t,1,r)}}),Rp(t,1)}};Zh=function(t){if(t.tag===13){var e=Ki(t,134217728);if(e!==null){var n=yn();ui(e,t,134217728,n)}Rp(t,134217728)}};Jv=function(t){if(t.tag===13){var e=Nr(t),n=Ki(t,e);if(n!==null){var i=yn();ui(n,t,e,i)}Rp(t,e)}};ex=function(){return lt};tx=function(t,e){var n=lt;try{return lt=t,e()}finally{lt=n}};tf=function(t,e,n){switch(e){case"input":if(Yd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Qc(i);if(!r)throw Error(se(90));Lv(i),Yd(i,r)}}}break;case"textarea":Iv(t,n);break;case"select":e=n.value,e!=null&&Ys(t,!!n.multiple,e,!1)}};Vv=Ep;Hv=rs;var L1={usingClientEntryPoint:!1,Events:[Da,zs,Qc,Bv,zv,Ep]},Lo={findFiberByHostInstance:$r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},D1={bundleType:Lo.bundleType,version:Lo.version,rendererPackageName:Lo.rendererPackageName,rendererConfig:Lo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:er.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=jv(t),t===null?null:t.stateNode},findFiberByHostInstance:Lo.findFiberByHostInstance||P1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ol.isDisabled&&ol.supportsFiber)try{Yc=ol.inject(D1),Ci=ol}catch{}}Gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L1;Gn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Np(e))throw Error(se(200));return R1(t,e,null,n)};Gn.createRoot=function(t,e){if(!Np(t))throw Error(se(299));var n=!1,i="",r=w_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ap(t,1,!1,null,null,n,!1,i,r),t[qi]=e.current,pa(t.nodeType===8?t.parentNode:t),new Pp(e)};Gn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=jv(e),t=t===null?null:t.stateNode,t};Gn.flushSync=function(t){return rs(t)};Gn.hydrate=function(t,e,n){if(!au(e))throw Error(se(200));return lu(null,t,e,!0,n)};Gn.hydrateRoot=function(t,e,n){if(!Np(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=w_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=M_(e,null,t,1,n??null,r,!1,s,o),t[qi]=e.current,pa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ou(e)};Gn.render=function(t,e,n){if(!au(e))throw Error(se(200));return lu(null,t,e,!1,n)};Gn.unmountComponentAtNode=function(t){if(!au(t))throw Error(se(40));return t._reactRootContainer?(rs(function(){lu(null,null,t,!1,function(){t._reactRootContainer=null,t[qi]=null})}),!0):!1};Gn.unstable_batchedUpdates=Ep;Gn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!au(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return lu(t,e,n,!1,i)};Gn.version="18.3.1-next-f1338f8080-20240426";function E_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E_)}catch(t){console.error(t)}}E_(),Ev.exports=Gn;var cu=Ev.exports;const I1=fv(cu);var b_,Ig=cu;b_=Ig.createRoot,Ig.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dc(){return Dc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Dc.apply(this,arguments)}var Er;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Er||(Er={}));const Ug="popstate";function U1(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return Uf("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:C_(r)}return O1(e,n,null,t)}function Ln(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function T_(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function F1(){return Math.random().toString(36).substr(2,8)}function Fg(t,e){return{usr:t.state,key:t.key,idx:e}}function Uf(t,e,n,i){return n===void 0&&(n=null),Dc({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?uu(e):e,{state:n,key:e&&e.key||i||F1()})}function C_(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function uu(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function O1(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=Er.Pop,l=null,c=f();c==null&&(c=0,o.replaceState(Dc({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function h(){a=Er.Pop;let p=f(),u=p==null?null:p-c;c=p,l&&l({action:a,location:v.location,delta:u})}function d(p,u){a=Er.Push;let g=Uf(v.location,p,u);c=f()+1;let M=Fg(g,c),_=v.createHref(g);try{o.pushState(M,"",_)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;r.location.assign(_)}s&&l&&l({action:a,location:v.location,delta:1})}function m(p,u){a=Er.Replace;let g=Uf(v.location,p,u);c=f();let M=Fg(g,c),_=v.createHref(g);o.replaceState(M,"",_),s&&l&&l({action:a,location:v.location,delta:0})}function x(p){let u=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof p=="string"?p:C_(p);return g=g.replace(/ $/,"%20"),Ln(u,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,u)}let v={get action(){return a},get location(){return t(r,o)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Ug,h),l=p,()=>{r.removeEventListener(Ug,h),l=null}},createHref(p){return e(r,p)},createURL:x,encodeLocation(p){let u=x(p);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:d,replace:m,go(p){return o.go(p)}};return v}var Og;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Og||(Og={}));function k1(t,e,n){return n===void 0&&(n="/"),B1(t,e,n,!1)}function B1(t,e,n,i){let r=typeof e=="string"?uu(e):e,s=P_(r.pathname||"/",n);if(s==null)return null;let o=A_(t);z1(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=Z1(s);a=q1(o[l],c,i)}return a}function A_(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ln(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=eo([i,l.relativePath]),f=n.concat(l);s.children&&s.children.length>0&&(Ln(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),A_(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:$1(c,s.index),routesMeta:f})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of R_(s.path))r(s,o,l)}),e}function R_(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=R_(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function z1(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Y1(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const V1=/^:[\w-]+$/,H1=3,G1=2,W1=1,j1=10,X1=-2,kg=t=>t==="*";function $1(t,e){let n=t.split("/"),i=n.length;return n.some(kg)&&(i+=X1),e&&(i+=G1),n.filter(r=>!kg(r)).reduce((r,s)=>r+(V1.test(s)?H1:s===""?W1:j1),i)}function Y1(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function q1(t,e,n){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,f=s==="/"?e:e.slice(s.length)||"/",h=Bg({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},f),d=l.route;if(!h&&c&&n&&!i[i.length-1].route.index&&(h=Bg({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},f)),!h)return null;Object.assign(r,h.params),o.push({params:r,pathname:eo([s,h.pathname]),pathnameBase:Q1(eo([s,h.pathnameBase])),route:d}),h.pathnameBase!=="/"&&(s=eo([s,h.pathnameBase]))}return o}function Bg(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=K1(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,f,h)=>{let{paramName:d,isOptional:m}=f;if(d==="*"){let v=a[h]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const x=a[h];return m&&!x?c[d]=void 0:c[d]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function K1(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),T_(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function Z1(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return T_(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function P_(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const eo=t=>t.join("/").replace(/\/\/+/g,"/"),Q1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/");function J1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const N_=["post","put","patch","delete"];new Set(N_);const eE=["get",...N_];new Set(eE);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ic(){return Ic=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ic.apply(this,arguments)}const tE=N.createContext(null),nE=N.createContext(null),L_=N.createContext(null),du=N.createContext(null),fu=N.createContext({outlet:null,matches:[],isDataRoute:!1}),D_=N.createContext(null);function Lp(){return N.useContext(du)!=null}function I_(){return Lp()||Ln(!1),N.useContext(du).location}function iE(t,e){return rE(t,e)}function rE(t,e,n,i){Lp()||Ln(!1);let{navigator:r}=N.useContext(L_),{matches:s}=N.useContext(fu),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=I_(),f;if(e){var h;let p=typeof e=="string"?uu(e):e;l==="/"||(h=p.pathname)!=null&&h.startsWith(l)||Ln(!1),f=p}else f=c;let d=f.pathname||"/",m=d;if(l!=="/"){let p=l.replace(/^\//,"").split("/");m="/"+d.replace(/^\//,"").split("/").slice(p.length).join("/")}let x=k1(t,{pathname:m}),v=cE(x&&x.map(p=>Object.assign({},p,{params:Object.assign({},a,p.params),pathname:eo([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:eo([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),s,n,i);return e&&v?N.createElement(du.Provider,{value:{location:Ic({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Er.Pop}},v):v}function sE(){let t=hE(),e=J1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},e),n?N.createElement("pre",{style:r},n):null,null)}const oE=N.createElement(sE,null);class aE extends N.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?N.createElement(fu.Provider,{value:this.props.routeContext},N.createElement(D_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function lE(t){let{routeContext:e,match:n,children:i}=t,r=N.useContext(tE);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(fu.Provider,{value:e},i)}function cE(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let f=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);f>=0||Ln(!1),o=o.slice(0,Math.min(o.length,f+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let f=0;f<o.length;f++){let h=o[f];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=f),h.route.id){let{loaderData:d,errors:m}=n,x=h.route.loader&&d[h.route.id]===void 0&&(!m||m[h.route.id]===void 0);if(h.route.lazy||x){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,h,d)=>{let m,x=!1,v=null,p=null;n&&(m=a&&h.route.id?a[h.route.id]:void 0,v=h.route.errorElement||oE,l&&(c<0&&d===0?(x=!0,p=null):c===d&&(x=!0,p=h.route.hydrateFallbackElement||null)));let u=e.concat(o.slice(0,d+1)),g=()=>{let M;return m?M=v:x?M=p:h.route.Component?M=N.createElement(h.route.Component,null):h.route.element?M=h.route.element:M=f,N.createElement(lE,{match:h,routeContext:{outlet:f,matches:u,isDataRoute:n!=null},children:M})};return n&&(h.route.ErrorBoundary||h.route.errorElement||d===0)?N.createElement(aE,{location:n.location,revalidation:n.revalidation,component:v,error:m,children:g(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):g()},null)}var Ff=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Ff||{});function uE(t){let e=N.useContext(nE);return e||Ln(!1),e}function dE(t){let e=N.useContext(fu);return e||Ln(!1),e}function fE(t){let e=dE(),n=e.matches[e.matches.length-1];return n.route.id||Ln(!1),n.route.id}function hE(){var t;let e=N.useContext(D_),n=uE(Ff.UseRouteError),i=fE(Ff.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function pE(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Of(t){Ln(!1)}function mE(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Er.Pop,navigator:s,static:o=!1,future:a}=t;Lp()&&Ln(!1);let l=e.replace(/^\/*/,"/"),c=N.useMemo(()=>({basename:l,navigator:s,static:o,future:Ic({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=uu(i));let{pathname:f="/",search:h="",hash:d="",state:m=null,key:x="default"}=i,v=N.useMemo(()=>{let p=P_(f,l);return p==null?null:{location:{pathname:p,search:h,hash:d,state:m,key:x},navigationType:r}},[l,f,h,d,m,x,r]);return v==null?null:N.createElement(L_.Provider,{value:c},N.createElement(du.Provider,{children:n,value:v}))}function gE(t){let{children:e,location:n}=t;return iE(kf(e),n)}new Promise(()=>{});function kf(t,e){e===void 0&&(e=[]);let n=[];return N.Children.forEach(t,(i,r)=>{if(!N.isValidElement(i))return;let s=[...e,r];if(i.type===N.Fragment){n.push.apply(n,kf(i.props.children,s));return}i.type!==Of&&Ln(!1),!i.props.index||!i.props.children||Ln(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=kf(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const vE="6";try{window.__reactRouterVersion=vE}catch{}const xE="startTransition",zg=Vh[xE];function _E(t){let{basename:e,children:n,future:i,window:r}=t,s=N.useRef();s.current==null&&(s.current=U1({window:r,v5Compat:!0}));let o=s.current,[a,l]=N.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},f=N.useCallback(h=>{c&&zg?zg(()=>l(h)):l(h)},[l,c]);return N.useLayoutEffect(()=>o.listen(f),[o,f]),N.useEffect(()=>pE(i),[i]),N.createElement(mE,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}var Vg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Vg||(Vg={}));var Hg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Hg||(Hg={}));function Gg(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function U_(...t){return e=>{let n=!1;const i=t.map(r=>{const s=Gg(r,e);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let r=0;r<i.length;r++){const s=i[r];typeof s=="function"?s():Gg(t[r],null)}}}}function fi(...t){return N.useCallback(U_(...t),t)}function wa(t){const e=SE(t),n=N.forwardRef((i,r)=>{const{children:s,...o}=i,a=N.Children.toArray(s),l=a.find(wE);if(l){const c=l.props.children,f=a.map(h=>h===l?N.Children.count(c)>1?N.Children.only(null):N.isValidElement(c)?c.props.children:null:h);return S.jsx(e,{...o,ref:r,children:N.isValidElement(c)?N.cloneElement(c,void 0,f):null})}return S.jsx(e,{...o,ref:r,children:s})});return n.displayName=`${t}.Slot`,n}var yE=wa("Slot");function SE(t){const e=N.forwardRef((n,i)=>{const{children:r,...s}=n;if(N.isValidElement(r)){const o=bE(r),a=EE(s,r.props);return r.type!==N.Fragment&&(a.ref=i?U_(i,o):o),N.cloneElement(r,a)}return N.Children.count(r)>1?N.Children.only(null):null});return e.displayName=`${t}.SlotClone`,e}var ME=Symbol("radix.slottable");function wE(t){return N.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===ME}function EE(t,e){const n={...e};for(const i in e){const r=t[i],s=e[i];/^on[A-Z]/.test(i)?r&&s?n[i]=(...a)=>{const l=s(...a);return r(...a),l}:r&&(n[i]=r):i==="style"?n[i]={...r,...s}:i==="className"&&(n[i]=[r,s].filter(Boolean).join(" "))}return{...t,...n}}function bE(t){var i,r;let e=(i=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(r=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}function F_(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=F_(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function O_(){for(var t,e,n=0,i="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=F_(t))&&(i&&(i+=" "),i+=e);return i}const Wg=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,jg=O_,Dp=(t,e)=>n=>{var i;if((e==null?void 0:e.variants)==null)return jg(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:r,defaultVariants:s}=e,o=Object.keys(r).map(c=>{const f=n==null?void 0:n[c],h=s==null?void 0:s[c];if(f===null)return null;const d=Wg(f)||Wg(h);return r[c][d]}),a=n&&Object.entries(n).reduce((c,f)=>{let[h,d]=f;return d===void 0||(c[h]=d),c},{}),l=e==null||(i=e.compoundVariants)===null||i===void 0?void 0:i.reduce((c,f)=>{let{class:h,className:d,...m}=f;return Object.entries(m).every(x=>{let[v,p]=x;return Array.isArray(p)?p.includes({...s,...a}[v]):{...s,...a}[v]===p})?[...c,h,d]:c},[]);return jg(t,o,l,n==null?void 0:n.class,n==null?void 0:n.className)},Ip="-",TE=t=>{const e=AE(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:i}=t;return{getClassGroupId:o=>{const a=o.split(Ip);return a[0]===""&&a.length!==1&&a.shift(),k_(a,e)||CE(o)},getConflictingClassGroupIds:(o,a)=>{const l=n[o]||[];return a&&i[o]?[...l,...i[o]]:l}}},k_=(t,e)=>{var o;if(t.length===0)return e.classGroupId;const n=t[0],i=e.nextPart.get(n),r=i?k_(t.slice(1),i):void 0;if(r)return r;if(e.validators.length===0)return;const s=t.join(Ip);return(o=e.validators.find(({validator:a})=>a(s)))==null?void 0:o.classGroupId},Xg=/^\[(.+)\]$/,CE=t=>{if(Xg.test(t)){const e=Xg.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},AE=t=>{const{theme:e,prefix:n}=t,i={nextPart:new Map,validators:[]};return PE(Object.entries(t.classGroups),n).forEach(([s,o])=>{Bf(o,i,s,e)}),i},Bf=(t,e,n,i)=>{t.forEach(r=>{if(typeof r=="string"){const s=r===""?e:$g(e,r);s.classGroupId=n;return}if(typeof r=="function"){if(RE(r)){Bf(r(i),e,n,i);return}e.validators.push({validator:r,classGroupId:n});return}Object.entries(r).forEach(([s,o])=>{Bf(o,$g(e,s),n,i)})})},$g=(t,e)=>{let n=t;return e.split(Ip).forEach(i=>{n.nextPart.has(i)||n.nextPart.set(i,{nextPart:new Map,validators:[]}),n=n.nextPart.get(i)}),n},RE=t=>t.isThemeGetter,PE=(t,e)=>e?t.map(([n,i])=>{const r=i.map(s=>typeof s=="string"?e+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([o,a])=>[e+o,a])):s);return[n,r]}):t,NE=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,i=new Map;const r=(s,o)=>{n.set(s,o),e++,e>t&&(e=0,i=n,n=new Map)};return{get(s){let o=n.get(s);if(o!==void 0)return o;if((o=i.get(s))!==void 0)return r(s,o),o},set(s,o){n.has(s)?n.set(s,o):r(s,o)}}},B_="!",LE=t=>{const{separator:e,experimentalParseClassName:n}=t,i=e.length===1,r=e[0],s=e.length,o=a=>{const l=[];let c=0,f=0,h;for(let p=0;p<a.length;p++){let u=a[p];if(c===0){if(u===r&&(i||a.slice(p,p+s)===e)){l.push(a.slice(f,p)),f=p+s;continue}if(u==="/"){h=p;continue}}u==="["?c++:u==="]"&&c--}const d=l.length===0?a:a.substring(f),m=d.startsWith(B_),x=m?d.substring(1):d,v=h&&h>f?h-f:void 0;return{modifiers:l,hasImportantModifier:m,baseClassName:x,maybePostfixModifierPosition:v}};return n?a=>n({className:a,parseClassName:o}):o},DE=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(i=>{i[0]==="["?(e.push(...n.sort(),i),n=[]):n.push(i)}),e.push(...n.sort()),e},IE=t=>({cache:NE(t.cacheSize),parseClassName:LE(t),...TE(t)}),UE=/\s+/,FE=(t,e)=>{const{parseClassName:n,getClassGroupId:i,getConflictingClassGroupIds:r}=e,s=[],o=t.trim().split(UE);let a="";for(let l=o.length-1;l>=0;l-=1){const c=o[l],{modifiers:f,hasImportantModifier:h,baseClassName:d,maybePostfixModifierPosition:m}=n(c);let x=!!m,v=i(x?d.substring(0,m):d);if(!v){if(!x){a=c+(a.length>0?" "+a:a);continue}if(v=i(d),!v){a=c+(a.length>0?" "+a:a);continue}x=!1}const p=DE(f).join(":"),u=h?p+B_:p,g=u+v;if(s.includes(g))continue;s.push(g);const M=r(v,x);for(let _=0;_<M.length;++_){const E=M[_];s.push(u+E)}a=c+(a.length>0?" "+a:a)}return a};function OE(){let t=0,e,n,i="";for(;t<arguments.length;)(e=arguments[t++])&&(n=z_(e))&&(i&&(i+=" "),i+=n);return i}const z_=t=>{if(typeof t=="string")return t;let e,n="";for(let i=0;i<t.length;i++)t[i]&&(e=z_(t[i]))&&(n&&(n+=" "),n+=e);return n};function kE(t,...e){let n,i,r,s=o;function o(l){const c=e.reduce((f,h)=>h(f),t());return n=IE(c),i=n.cache.get,r=n.cache.set,s=a,a(l)}function a(l){const c=i(l);if(c)return c;const f=FE(l,n);return r(l,f),f}return function(){return s(OE.apply(null,arguments))}}const yt=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},V_=/^\[(?:([a-z-]+):)?(.+)\]$/i,BE=/^\d+\/\d+$/,zE=new Set(["px","full","screen"]),VE=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,HE=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,GE=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,WE=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,jE=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ui=t=>to(t)||zE.has(t)||BE.test(t),ar=t=>yo(t,"length",JE),to=t=>!!t&&!Number.isNaN(Number(t)),Yu=t=>yo(t,"number",to),Do=t=>!!t&&Number.isInteger(Number(t)),XE=t=>t.endsWith("%")&&to(t.slice(0,-1)),Be=t=>V_.test(t),lr=t=>VE.test(t),$E=new Set(["length","size","percentage"]),YE=t=>yo(t,$E,H_),qE=t=>yo(t,"position",H_),KE=new Set(["image","url"]),ZE=t=>yo(t,KE,tb),QE=t=>yo(t,"",eb),Io=()=>!0,yo=(t,e,n)=>{const i=V_.exec(t);return i?i[1]?typeof e=="string"?i[1]===e:e.has(i[1]):n(i[2]):!1},JE=t=>HE.test(t)&&!GE.test(t),H_=()=>!1,eb=t=>WE.test(t),tb=t=>jE.test(t),nb=()=>{const t=yt("colors"),e=yt("spacing"),n=yt("blur"),i=yt("brightness"),r=yt("borderColor"),s=yt("borderRadius"),o=yt("borderSpacing"),a=yt("borderWidth"),l=yt("contrast"),c=yt("grayscale"),f=yt("hueRotate"),h=yt("invert"),d=yt("gap"),m=yt("gradientColorStops"),x=yt("gradientColorStopPositions"),v=yt("inset"),p=yt("margin"),u=yt("opacity"),g=yt("padding"),M=yt("saturate"),_=yt("scale"),E=yt("sepia"),b=yt("skew"),C=yt("space"),y=yt("translate"),A=()=>["auto","contain","none"],P=()=>["auto","hidden","clip","visible","scroll"],I=()=>["auto",Be,e],D=()=>[Be,e],G=()=>["",Ui,ar],L=()=>["auto",to,Be],z=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],K=()=>["solid","dashed","dotted","double","none"],$=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],V=()=>["start","end","center","between","around","evenly","stretch"],B=()=>["","0",Be],X=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Z=()=>[to,Be];return{cacheSize:500,separator:":",theme:{colors:[Io],spacing:[Ui,ar],blur:["none","",lr,Be],brightness:Z(),borderColor:[t],borderRadius:["none","","full",lr,Be],borderSpacing:D(),borderWidth:G(),contrast:Z(),grayscale:B(),hueRotate:Z(),invert:B(),gap:D(),gradientColorStops:[t],gradientColorStopPositions:[XE,ar],inset:I(),margin:I(),opacity:Z(),padding:D(),saturate:Z(),scale:Z(),sepia:B(),skew:Z(),space:D(),translate:D()},classGroups:{aspect:[{aspect:["auto","square","video",Be]}],container:["container"],columns:[{columns:[lr]}],"break-after":[{"break-after":X()}],"break-before":[{"break-before":X()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...z(),Be]}],overflow:[{overflow:P()}],"overflow-x":[{"overflow-x":P()}],"overflow-y":[{"overflow-y":P()}],overscroll:[{overscroll:A()}],"overscroll-x":[{"overscroll-x":A()}],"overscroll-y":[{"overscroll-y":A()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[v]}],"inset-x":[{"inset-x":[v]}],"inset-y":[{"inset-y":[v]}],start:[{start:[v]}],end:[{end:[v]}],top:[{top:[v]}],right:[{right:[v]}],bottom:[{bottom:[v]}],left:[{left:[v]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Do,Be]}],basis:[{basis:I()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Be]}],grow:[{grow:B()}],shrink:[{shrink:B()}],order:[{order:["first","last","none",Do,Be]}],"grid-cols":[{"grid-cols":[Io]}],"col-start-end":[{col:["auto",{span:["full",Do,Be]},Be]}],"col-start":[{"col-start":L()}],"col-end":[{"col-end":L()}],"grid-rows":[{"grid-rows":[Io]}],"row-start-end":[{row:["auto",{span:[Do,Be]},Be]}],"row-start":[{"row-start":L()}],"row-end":[{"row-end":L()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Be]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Be]}],gap:[{gap:[d]}],"gap-x":[{"gap-x":[d]}],"gap-y":[{"gap-y":[d]}],"justify-content":[{justify:["normal",...V()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...V(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...V(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[g]}],px:[{px:[g]}],py:[{py:[g]}],ps:[{ps:[g]}],pe:[{pe:[g]}],pt:[{pt:[g]}],pr:[{pr:[g]}],pb:[{pb:[g]}],pl:[{pl:[g]}],m:[{m:[p]}],mx:[{mx:[p]}],my:[{my:[p]}],ms:[{ms:[p]}],me:[{me:[p]}],mt:[{mt:[p]}],mr:[{mr:[p]}],mb:[{mb:[p]}],ml:[{ml:[p]}],"space-x":[{"space-x":[C]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[C]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Be,e]}],"min-w":[{"min-w":[Be,e,"min","max","fit"]}],"max-w":[{"max-w":[Be,e,"none","full","min","max","fit","prose",{screen:[lr]},lr]}],h:[{h:[Be,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Be,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Be,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Be,e,"auto","min","max","fit"]}],"font-size":[{text:["base",lr,ar]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Yu]}],"font-family":[{font:[Io]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Be]}],"line-clamp":[{"line-clamp":["none",to,Yu]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Ui,Be]}],"list-image":[{"list-image":["none",Be]}],"list-style-type":[{list:["none","disc","decimal",Be]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[u]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[u]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...K(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Ui,ar]}],"underline-offset":[{"underline-offset":["auto",Ui,Be]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:D()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Be]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Be]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[u]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...z(),qE]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",YE]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},ZE]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[x]}],"gradient-via-pos":[{via:[x]}],"gradient-to-pos":[{to:[x]}],"gradient-from":[{from:[m]}],"gradient-via":[{via:[m]}],"gradient-to":[{to:[m]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[u]}],"border-style":[{border:[...K(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[u]}],"divide-style":[{divide:K()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-s":[{"border-s":[r]}],"border-color-e":[{"border-e":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...K()]}],"outline-offset":[{"outline-offset":[Ui,Be]}],"outline-w":[{outline:[Ui,ar]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:G()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[u]}],"ring-offset-w":[{"ring-offset":[Ui,ar]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",lr,QE]}],"shadow-color":[{shadow:[Io]}],opacity:[{opacity:[u]}],"mix-blend":[{"mix-blend":[...$(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":$()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[i]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",lr,Be]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[h]}],saturate:[{saturate:[M]}],sepia:[{sepia:[E]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[h]}],"backdrop-opacity":[{"backdrop-opacity":[u]}],"backdrop-saturate":[{"backdrop-saturate":[M]}],"backdrop-sepia":[{"backdrop-sepia":[E]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Be]}],duration:[{duration:Z()}],ease:[{ease:["linear","in","out","in-out",Be]}],delay:[{delay:Z()}],animate:[{animate:["none","spin","ping","pulse","bounce",Be]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[_]}],"scale-x":[{"scale-x":[_]}],"scale-y":[{"scale-y":[_]}],rotate:[{rotate:[Do,Be]}],"translate-x":[{"translate-x":[y]}],"translate-y":[{"translate-y":[y]}],"skew-x":[{"skew-x":[b]}],"skew-y":[{"skew-y":[b]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Be]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Be]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":D()}],"scroll-mx":[{"scroll-mx":D()}],"scroll-my":[{"scroll-my":D()}],"scroll-ms":[{"scroll-ms":D()}],"scroll-me":[{"scroll-me":D()}],"scroll-mt":[{"scroll-mt":D()}],"scroll-mr":[{"scroll-mr":D()}],"scroll-mb":[{"scroll-mb":D()}],"scroll-ml":[{"scroll-ml":D()}],"scroll-p":[{"scroll-p":D()}],"scroll-px":[{"scroll-px":D()}],"scroll-py":[{"scroll-py":D()}],"scroll-ps":[{"scroll-ps":D()}],"scroll-pe":[{"scroll-pe":D()}],"scroll-pt":[{"scroll-pt":D()}],"scroll-pr":[{"scroll-pr":D()}],"scroll-pb":[{"scroll-pb":D()}],"scroll-pl":[{"scroll-pl":D()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Be]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[Ui,ar,Yu]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},ib=kE(nb);function Ut(...t){return ib(O_(t))}const rb=Dp("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),ss=N.forwardRef(({className:t,variant:e,size:n,asChild:i=!1,...r},s)=>{const o=i?yE:"button";return S.jsx(o,{className:Ut(rb({variant:e,size:n,className:t})),ref:s,...r})});ss.displayName="Button";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),G_=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ob={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=N.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>N.createElement("svg",{ref:l,...ob,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:G_("lucide",r),...a},[...o.map(([c,f])=>N.createElement(c,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=(t,e)=>{const n=N.forwardRef(({className:i,...r},s)=>N.createElement(ab,{ref:s,iconNode:e,className:G_(`lucide-${sb(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=ct("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=ct("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=ct("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=ct("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=ct("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=ct("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=ct("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=ct("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=ct("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=ct("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=ct("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=ct("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=ct("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=ct("Glasses",[["circle",{cx:"6",cy:"15",r:"4",key:"vux9w4"}],["circle",{cx:"18",cy:"15",r:"4",key:"18o8ve"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2",key:"1ag4bs"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2",key:"1hm1gs"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2",key:"1r31ai"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=ct("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=ct("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=ct("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=ct("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=ct("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=ct("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=ct("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=ct("MonitorCheck",[["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=ct("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=ct("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=ct("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=ct("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=ct("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=ct("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=ct("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),bb=({is3DEnabled:t=!0,onToggle3D:e})=>{const[n,i]=N.useState(!1),[r,s]=N.useState(!1);N.useEffect(()=>{const l=()=>{i(window.scrollY>40)};return window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[]);const o=l=>{s(!1);const c=document.getElementById(l);c==null||c.scrollIntoView({behavior:"smooth"})},a=[{label:"Home",id:"home"},{label:"About",id:"about"},{label:"Experience",id:"experience"},{label:"Education",id:"education"},{label:"Skills",id:"skills"},{label:"Projects",id:"projects"},{label:"Services",id:"services"},{label:"Contact",id:"contact"}];return S.jsx("nav",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${n?"bg-navy-dark/95 backdrop-blur-xl shadow-lg border-b border-border/40 py-3":"bg-transparent py-5"}`,children:S.jsxs("div",{className:"container mx-auto px-6",children:[S.jsxs("div",{className:"flex items-center justify-between",children:[S.jsx("button",{onClick:()=>o("home"),className:"text-2xl font-black gradient-text hover:scale-105 transition-transform tracking-wider",children:"RP"}),S.jsx("div",{className:"hidden lg:flex items-center gap-6",children:a.map(l=>S.jsx("button",{onClick:()=>o(l.id),className:"text-foreground/80 hover:text-primary transition-colors text-xs font-semibold tracking-wide uppercase",children:l.label},l.id))}),S.jsxs("div",{className:"flex items-center gap-3",children:[e&&S.jsxs("button",{type:"button",onClick:e,title:t?"Turn off 3D background canvas":"Turn on 3D background canvas",className:`hidden sm:flex items-center gap-2 px-3 h-9 rounded-xl border text-xs font-mono font-semibold transition-all ${t?"bg-cyan-500/15 border-cyan-500/40 text-cyan-400 shadow-sm shadow-cyan-500/20":"bg-card/40 border-border/40 text-muted-foreground hover:text-foreground"}`,children:[S.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${t?"bg-cyan-400 animate-pulse":"bg-slate-500"}`}),"3D LAB ",t?"ON":"OFF"]}),S.jsx("a",{href:"Ravi_Patel_Resume.pdf",download:"Ravi_Patel_Resume.pdf",className:"no-underline hidden sm:inline-block",children:S.jsxs(ss,{size:"sm",className:"bg-primary text-primary-foreground hover:shadow-glow transition-all font-semibold gap-2 h-9 px-4",children:[S.jsx(zf,{className:"w-4 h-4"}),"Resume"]})}),S.jsx("button",{onClick:()=>s(!r),className:"lg:hidden p-2 rounded-lg bg-card/50 border border-border/50 text-foreground","aria-label":"Toggle menu",children:r?S.jsx(Op,{className:"w-5 h-5"}):S.jsx(yb,{className:"w-5 h-5"})})]})]}),r&&S.jsxs("div",{className:"lg:hidden mt-4 p-5 rounded-2xl bg-card/95 backdrop-blur-2xl border border-border/50 shadow-2xl flex flex-col gap-3 animate-in fade-in-0 slide-in-from-top-2",children:[a.map(l=>S.jsx("button",{onClick:()=>o(l.id),className:"text-left py-2 px-3 rounded-lg text-sm font-semibold text-foreground/80 hover:text-primary hover:bg-muted/40 transition-colors",children:l.label},l.id)),S.jsxs("div",{className:"pt-3 border-t border-border/40 flex flex-col gap-3",children:[e&&S.jsxs("button",{type:"button",onClick:e,className:`flex items-center justify-center gap-2 py-2 px-3 rounded-xl border text-xs font-mono font-semibold transition-all ${t?"bg-cyan-500/15 border-cyan-500/40 text-cyan-400":"bg-card/40 border-border/40 text-muted-foreground"}`,children:[S.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${t?"bg-cyan-400 animate-pulse":"bg-slate-500"}`}),"3D SPATIAL LAB: ",t?"ENABLED":"DISABLED"]}),S.jsx("a",{href:"Ravi_Patel_Resume.pdf",download:"Ravi_Patel_Resume.pdf",className:"no-underline block",children:S.jsxs(ss,{className:"w-full bg-primary text-primary-foreground gap-2",children:[S.jsx(zf,{className:"w-4 h-4"}),"Download Resume"]})})]})]})]})})},Tb=()=>{const t=e=>{const n=document.getElementById(e);n==null||n.scrollIntoView({behavior:"smooth"})};return S.jsxs("section",{id:"home",className:"min-h-screen flex items-center justify-center relative overflow-hidden pt-28 pb-20",children:[S.jsx("div",{className:"absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-indigo-500/15 to-purple-500/10 blur-[130px] rounded-full pointer-events-none"}),S.jsx("div",{className:"absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl animate-float pointer-events-none"}),S.jsx("div",{className:"absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl animate-float-delayed pointer-events-none"}),S.jsx("div",{className:"container mx-auto px-6 relative z-10",children:S.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[S.jsxs("div",{className:"mb-8 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-xl shadow-lg hover:border-cyan-400/40 transition-colors",children:[S.jsxs("span",{className:"relative flex h-2.5 w-2.5",children:[S.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),S.jsx("span",{className:"relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"})]}),S.jsxs("span",{className:"text-xs md:text-sm font-medium tracking-wide text-zinc-300",children:["Software & Game Developer • ",S.jsx("span",{className:"text-cyan-400 font-semibold",children:"Unity"})," • ",S.jsx("span",{className:"text-indigo-400 font-semibold",children:"Unreal Engine 5"})," • ",S.jsx("span",{className:"text-purple-400 font-semibold",children:"Three.js"})]})]}),S.jsxs("h1",{className:"text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tight",children:[S.jsx("span",{className:"metallic-text",children:"Ravi "}),S.jsx("span",{className:"gradient-text",children:"Patel"})]}),S.jsx("p",{className:"text-lg md:text-2xl text-zinc-400 mb-10 max-w-2xl mx-auto font-normal leading-relaxed",children:"Architecting real-time 3D applications, medical spatial computing (XR), and hardware-integrated interactive systems."}),S.jsxs("div",{className:"flex gap-4 justify-center flex-wrap items-center",children:[S.jsxs(ss,{onClick:()=>t("projects"),size:"lg",className:"bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold px-8 h-12 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all group rounded-xl",children:["Explore Projects",S.jsx(lb,{className:"ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"})]}),S.jsx("a",{href:"Ravi_Patel_Resume.pdf",download:"Ravi_Patel_Resume.pdf",className:"no-underline",children:S.jsxs(ss,{size:"lg",variant:"outline",className:"bg-white/[0.03] hover:bg-white/[0.08] border-white/15 text-zinc-200 hover:text-white font-semibold px-7 h-12 rounded-xl backdrop-blur-xl gap-2 transition-all hover:border-white/30",children:[S.jsx(zf,{className:"w-4 h-4 text-cyan-400"}),"Download Resume"]})})]}),S.jsxs("div",{className:"mt-16 grid grid-cols-2 md:grid-cols-3 gap-5 max-w-3xl mx-auto",children:[S.jsxs("div",{className:"relative group p-6 rounded-2xl bg-[#0D0F1A]/80 border border-white/[0.08] hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-xl shadow-xl hover:-translate-y-1",children:[S.jsx("div",{className:"absolute -top-[1px] left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80"}),S.jsx("div",{className:"text-4xl md:text-5xl font-black gradient-text mb-1",children:"3+"}),S.jsx("div",{className:"text-sm font-semibold text-zinc-200",children:"Years Experience"}),S.jsx("div",{className:"text-xs text-zinc-500 mt-1",children:"XR, UE5 & Web3D Systems"})]}),S.jsxs("div",{className:"relative group p-6 rounded-2xl bg-[#0D0F1A]/80 border border-white/[0.08] hover:border-indigo-500/50 transition-all duration-300 backdrop-blur-xl shadow-xl hover:-translate-y-1",children:[S.jsx("div",{className:"absolute -top-[1px] left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-80"}),S.jsx("div",{className:"text-4xl md:text-5xl font-black gradient-text mb-1",children:"15+"}),S.jsx("div",{className:"text-sm font-semibold text-zinc-200",children:"Systems & Projects"}),S.jsx("div",{className:"text-xs text-zinc-500 mt-1",children:"Production Architecture"})]}),S.jsxs("div",{className:"relative group p-6 rounded-2xl bg-[#0D0F1A]/80 border border-white/[0.08] hover:border-purple-500/50 transition-all duration-300 backdrop-blur-xl shadow-xl hover:-translate-y-1 col-span-2 md:col-span-1",children:[S.jsx("div",{className:"absolute -top-[1px] left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-80"}),S.jsx("div",{className:"text-4xl md:text-5xl font-black gradient-text mb-1",children:"XR & C++"}),S.jsx("div",{className:"text-sm font-semibold text-zinc-200",children:"Spatial Computing"}),S.jsx("div",{className:"text-xs text-zinc-500 mt-1",children:"Procedural 3D & Vision"})]})]})]})})]})},Li=N.forwardRef(({className:t,...e},n)=>S.jsx("div",{ref:n,className:Ut("rounded-lg border bg-card text-card-foreground shadow-sm",t),...e}));Li.displayName="Card";const Cb=N.forwardRef(({className:t,...e},n)=>S.jsx("div",{ref:n,className:Ut("flex flex-col space-y-1.5 p-6",t),...e}));Cb.displayName="CardHeader";const Ab=N.forwardRef(({className:t,...e},n)=>S.jsx("h3",{ref:n,className:Ut("text-2xl font-semibold leading-none tracking-tight",t),...e}));Ab.displayName="CardTitle";const Rb=N.forwardRef(({className:t,...e},n)=>S.jsx("p",{ref:n,className:Ut("text-sm text-muted-foreground",t),...e}));Rb.displayName="CardDescription";const Pb=N.forwardRef(({className:t,...e},n)=>S.jsx("div",{ref:n,className:Ut("p-6 pt-0",t),...e}));Pb.displayName="CardContent";const Nb=N.forwardRef(({className:t,...e},n)=>S.jsx("div",{ref:n,className:Ut("flex items-center p-6 pt-0",t),...e}));Nb.displayName="CardFooter";const Lb=()=>{const t=[{icon:Up,title:"Procedural 3D & C++ Systems",description:"Automated CAD-to-3D mesh generation, polygon room clipping math, and custom runtime tools in Unreal Engine 5."},{icon:Mb,title:"Low-Latency XR Video Pipelines",description:"Sub-100ms real-time camera streaming to XREAL glasses & HoloLens 2 with 3D volumetric CT/MRI overlays."},{icon:$_,title:"Kiosk Hardening & Zero-Trust E2EE",description:"Commercial Linux/Ubuntu kiosk deployments with X25519, HKDF-SHA256, AES-256-GCM, and offline-first telemetry queues."},{icon:Fp,title:"Computer Vision & Edge AI",description:"DirectShow buffer-free camera processing, YOLO + ONNX models, and MediaPipe full-body tracking for controller-free gameplay."}];return S.jsx("section",{id:"about",className:"py-28 relative",children:S.jsx("div",{className:"container mx-auto px-6",children:S.jsxs("div",{className:"max-w-5xl mx-auto",children:[S.jsxs("div",{className:"text-center mb-14",children:[S.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4",children:[S.jsx(Y_,{className:"w-3.5 h-3.5"})," Engineering Profile"]}),S.jsxs("h2",{className:"text-4xl md:text-6xl font-black mb-4 tracking-tight",children:["About ",S.jsx("span",{className:"gradient-text",children:"Me"})]}),S.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto mb-6 rounded-full"})]}),S.jsxs(Li,{className:"p-8 md:p-12 rounded-3xl bg-[#0D0F1A]/85 backdrop-blur-xl border border-white/[0.08] shadow-2xl relative overflow-hidden",children:[S.jsx("div",{className:"absolute top-0 left-1/3 right-1/3 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70"}),S.jsxs("p",{className:"text-lg md:text-xl text-zinc-100 leading-relaxed mb-6 font-normal",children:["I am a ",S.jsx("strong",{className:"text-cyan-400 font-semibold",children:"Software and Game Developer"})," with 3+ years of production experience building high-performance 3D applications, spatial computing (XR) platforms, and edge computer-vision systems across ",S.jsx("strong",{className:"text-white",children:"Unity (C#)"}),", ",S.jsx("strong",{className:"text-white",children:"Unreal Engine 5 (C++)"}),", and ",S.jsx("strong",{className:"text-white",children:"Three.js / WebGL"}),"."]}),S.jsxs("p",{className:"text-base md:text-lg text-zinc-400 leading-relaxed mb-10",children:["My engineering work spans mission-critical medical technology — such as solo-building ",S.jsx("strong",{className:"text-zinc-200",children:"SmartScopy"})," to stream live surgical endoscopy feeds into XR headsets with 3D anatomical overlays — to clinical healthcare platforms like ",S.jsx("strong",{className:"text-zinc-200",children:"NoPainHeals"})," (12+ interactive floor-projection games, zero-trust E2EE telemetry, and hardened Linux kiosks), and ",S.jsx("strong",{className:"text-zinc-200",children:"MimadimPlus"})," (automated procedural CAD-to-3D architectural generation in UE5)."]}),S.jsx("div",{className:"grid md:grid-cols-2 gap-5 pt-6 border-t border-white/[0.08]",children:t.map((e,n)=>{const i=e.icon;return S.jsxs("div",{className:"p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/40 transition-all hover:bg-white/[0.04]",children:[S.jsxs("div",{className:"flex items-center gap-3.5 mb-2.5",children:[S.jsx("div",{className:"w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0",children:S.jsx(i,{className:"w-5 h-5 text-cyan-400"})}),S.jsx("h3",{className:"text-base font-bold text-white",children:e.title})]}),S.jsx("p",{className:"text-sm text-zinc-400 leading-relaxed pl-13",children:e.description})]},n)})})]})]})})})},Db=()=>{const t=[{issuer:"Anthropic",title:"Claude Foundation & Engineering Suite",credentials:["Claude 101","Claude Code 101","Claude Platform 101"],year:"2024"},{issuer:"Edunet Foundation / SAP CSR",title:"Emerging Technologies: AI, IoT & ERP",credentials:["Code Unnati Certification","Machine Learning & IoT Systems"],year:"2022–2023"},{issuer:"SAP",title:"ABAP Programming & Enterprise Systems",credentials:["Learn the ABCs of ABAP Programming on SAP BTP"],year:"2023"}];return S.jsx("section",{id:"education",className:"py-28 relative",children:S.jsx("div",{className:"container mx-auto px-6",children:S.jsxs("div",{className:"max-w-5xl mx-auto",children:[S.jsxs("div",{className:"text-center mb-14",children:[S.jsxs("h2",{className:"text-4xl md:text-6xl font-black mb-4 tracking-tight",children:["Education & ",S.jsx("span",{className:"gradient-text",children:"Certifications"})]}),S.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto mb-6 rounded-full"}),S.jsx("p",{className:"text-zinc-400 text-base md:text-lg max-w-2xl mx-auto",children:"Academic foundation in Computer Engineering paired with verified industry credentials in AI, spatial computing, and enterprise architecture."})]}),S.jsxs("div",{className:"grid md:grid-cols-2 gap-8 items-start",children:[S.jsxs("div",{className:"space-y-4",children:[S.jsxs("h3",{className:"text-sm font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2",children:[S.jsx(qg,{className:"w-4 h-4"}),"Formal Education"]}),S.jsx(Li,{className:"p-8 rounded-3xl bg-[#0D0F1A]/85 backdrop-blur-xl border border-white/[0.08] hover:border-cyan-500/40 transition-all shadow-xl",children:S.jsxs("div",{className:"flex items-start gap-4",children:[S.jsx("div",{className:"w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0",children:S.jsx(qg,{className:"w-6 h-6 text-cyan-400"})}),S.jsxs("div",{className:"flex-1",children:[S.jsxs("div",{className:"flex justify-between items-start gap-2 mb-1",children:[S.jsx("h4",{className:"text-xl font-bold text-white",children:"Bachelor of Engineering (B.E.)"}),S.jsx("span",{className:"text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-semibold font-mono whitespace-nowrap",children:"2019 – 2023"})]}),S.jsx("p",{className:"text-cyan-400 font-medium text-sm mb-2",children:"Computer Engineering"}),S.jsx("p",{className:"text-zinc-400 text-sm mb-5",children:"Ipcowala Institute of Engineering & Technology, Anand, Gujarat"}),S.jsxs("div",{className:"p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between text-xs font-semibold",children:[S.jsx("span",{className:"text-zinc-400",children:"Cumulative Grade:"}),S.jsx("span",{className:"text-cyan-400 font-mono text-sm",children:"CGPA: 8.30 / 10.0"})]})]})]})})]}),S.jsxs("div",{className:"space-y-4",children:[S.jsxs("h3",{className:"text-sm font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-2",children:[S.jsx(cb,{className:"w-4 h-4"}),"Industry Certifications"]}),S.jsx("div",{className:"space-y-4",children:t.map((e,n)=>S.jsxs(Li,{className:"p-6 rounded-2xl bg-[#0D0F1A]/85 backdrop-blur-xl border border-white/[0.08] hover:border-indigo-500/40 transition-all shadow-lg",children:[S.jsxs("div",{className:"flex justify-between items-start gap-2 mb-1",children:[S.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-indigo-400",children:e.issuer}),S.jsx("span",{className:"text-xs text-zinc-500 font-mono",children:e.year})]}),S.jsx("h4",{className:"text-base font-bold text-white mb-3",children:e.title}),S.jsx("div",{className:"space-y-1.5",children:e.credentials.map((i,r)=>S.jsxs("div",{className:"flex items-center gap-2 text-xs text-zinc-300",children:[S.jsx(hu,{className:"w-3.5 h-3.5 text-cyan-400 flex-shrink-0"}),S.jsx("span",{children:i})]},r))})]},n))})]})]})]})})})},Ib=()=>{const t=[{title:"Software & Game Developer",company:"Invisible Fiction",location:"Anand, Gujarat, India",period:"May 2023 – Present",type:"Full-Time",description:"Lead engineer architecting real-time 3D, spatial computing (XR), and edge computer-vision platforms across Unity, Unreal Engine 5, and Three.js.",highlights:["Solo-built SmartScopy: ultra-low latency live video pipeline streaming endoscopic surgery to XREAL glasses & HoloLens 2 with 3D anatomical overlays.","Core contributor to NoPainHeals clinical therapy platform: delivered 12+ interactive floor-projection games and hardened Linux kiosk deployment.","Engineered zero-trust E2EE crypto tunnel (X25519, HKDF-SHA256, AES-256-GCM) and offline-first IndexedDB telemetry queue with automatic retry.","Built MimadimPlus automated CAD-to-3D engine in UE5: C++ procedural generation for walls, doors, windows, and arbitrary polygon floor tile clipping math.","Engineered camera-based edge AI motion tracking with custom YOLO & ONNX models, eliminating video buffer latency via DirectShow."]},{title:"Computer Engineering Intern",company:"Invisible Fiction",location:"Anand, Gujarat, India",period:"January 2023 – May 2023",type:"Internship",description:"Researched and built computer-vision prototypes combining image processing algorithms with interactive application logic.",highlights:["Engineered an Iris Recognition and Distance Detection prototype in Python & OpenCV for user screen fatigue monitoring.","Developed geometric distance calculation from optical camera matrices and pupil contour isolation.","Integrated Python biometric tracking scripts with Unity and C# runtime applications.","Researched algorithmic optimizations for lightweight real-time webcam inference."]}];return S.jsx("section",{id:"experience",className:"py-28 relative",children:S.jsx("div",{className:"container mx-auto px-6",children:S.jsxs("div",{className:"max-w-5xl mx-auto",children:[S.jsxs("div",{className:"text-center mb-14",children:[S.jsxs("h2",{className:"text-4xl md:text-6xl font-black mb-4 tracking-tight",children:["Work ",S.jsx("span",{className:"gradient-text",children:"Experience"})]}),S.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto mb-6 rounded-full"}),S.jsx("p",{className:"text-zinc-400 text-base md:text-lg max-w-2xl mx-auto",children:"Production engineering career building mission-critical medical XR, automated procedural 3D engines, and clinical healthcare platforms."})]}),S.jsx("div",{className:"space-y-8",children:t.map((e,n)=>S.jsxs(Li,{className:"p-8 md:p-10 rounded-3xl bg-[#0D0F1A]/85 backdrop-blur-xl border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 shadow-2xl relative overflow-hidden",children:[S.jsx("div",{className:"absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"}),S.jsxs("div",{className:"flex flex-col md:flex-row gap-6 items-start",children:[S.jsx("div",{className:"flex-shrink-0",children:S.jsx("div",{className:"w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center",children:S.jsx(ub,{className:"w-7 h-7 text-cyan-400"})})}),S.jsxs("div",{className:"flex-1 w-full",children:[S.jsxs("div",{className:"flex flex-wrap justify-between items-start mb-3 gap-3",children:[S.jsxs("div",{children:[S.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-white mb-1",children:e.title}),S.jsxs("div",{className:"flex flex-wrap items-center gap-3 text-sm text-zinc-400 font-medium",children:[S.jsxs("span",{className:"flex items-center gap-1.5 text-zinc-200",children:[S.jsx(db,{className:"w-4 h-4 text-cyan-400"}),e.company]}),S.jsx("span",{children:"•"}),S.jsx("span",{children:e.location})]})]}),S.jsxs("span",{className:"px-3.5 py-1 bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 rounded-full text-xs font-semibold flex items-center gap-1.5 font-mono",children:[S.jsx(fb,{className:"w-3.5 h-3.5"}),e.period]})]}),S.jsx("p",{className:"text-zinc-200 text-sm md:text-base leading-relaxed mb-6 font-normal",children:e.description}),S.jsxs("div",{className:"space-y-3 pt-5 border-t border-white/[0.08]",children:[S.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3",children:"Key Engineering Feats & Contributions"}),e.highlights.map((i,r)=>S.jsxs("div",{className:"flex items-start gap-3",children:[S.jsx(hu,{className:"w-4 h-4 text-cyan-400 flex-shrink-0 mt-1"}),S.jsx("span",{className:"text-sm text-zinc-300 leading-relaxed",children:i})]},r))]})]})]})]},n))})]})})})},Ub=()=>{const t=[{icon:Up,title:"Engines & 3D Systems",skills:["Unreal Engine 5 (C++)","Unity 3D (C#)","Three.js","WebGL","UProceduralMeshComponent","HLSL/GLSL Shaders","Blueprints","Skeletal Animation","Physics & Collision"]},{icon:W_,title:"Spatial Computing & XR",skills:["Microsoft HoloLens 2","MRTK","OpenXR","XREAL Glasses","Meta Quest / PCVR","3D Volumetric CT/MRI Viz","Spatial Hand Tracking","Vuforia"]},{icon:hb,title:"Programming Languages",skills:["C++","C#","Python","JavaScript (ES6+)","TypeScript","HLSL / GLSL","Bash / Shell","HTML5 / CSS3"]},{icon:Fp,title:"Computer Vision & Edge AI",skills:["Ultralytics YOLO","ONNX Runtime","MediaPipe Pose & Hand","OpenCV","DirectShow (cv2.CAP_DSHOW)","Iris Biometric Tracking","Gesture Recognition"]},{icon:X_,title:"Interactive Kiosks & Web",skills:["Electron Kiosk Lockdown","Node.js","Linux / Ubuntu Kiosk","WebSockets (Pusher v7)","IndexedDB Offline Queue","Vite","REST APIs","Web Audio API"]},{icon:$_,title:"Security & Cryptography",skills:["End-to-End Encryption (E2EE)","X25519 Key Exchange","HKDF-SHA256 Derivation","AES-256-GCM Cipher","Hardware Fingerprinting","Zero-Trust Telemetry"]}];return S.jsx("section",{id:"skills",className:"py-28 relative",children:S.jsx("div",{className:"container mx-auto px-6",children:S.jsxs("div",{className:"max-w-6xl mx-auto",children:[S.jsxs("div",{className:"text-center mb-14",children:[S.jsxs("h2",{className:"text-4xl md:text-6xl font-black mb-4 tracking-tight",children:["Skills & ",S.jsx("span",{className:"gradient-text",children:"Core Technologies"})]}),S.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto mb-6 rounded-full"}),S.jsx("p",{className:"text-zinc-400 text-base md:text-lg max-w-2xl mx-auto",children:"Production-tested toolkit spanning real-time 3D simulation, spatial computing, low-latency video streaming, and hardened cryptographic infrastructure."})]}),S.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:t.map((e,n)=>{const i=e.icon;return S.jsx(Li,{className:"p-7 rounded-2xl bg-[#0D0F1A]/85 backdrop-blur-xl border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1",children:S.jsxs("div",{children:[S.jsxs("div",{className:"flex items-center gap-3.5 mb-5",children:[S.jsx("div",{className:"w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors",children:S.jsx(i,{className:"w-5 h-5 text-cyan-400"})}),S.jsx("h3",{className:"text-lg font-bold text-white",children:e.title})]}),S.jsx("div",{className:"flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.08]",children:e.skills.map((r,s)=>S.jsx("span",{className:"px-2.5 py-1 bg-white/[0.04] text-zinc-300 rounded-md text-xs border border-white/[0.08] font-medium group-hover:border-white/15 transition-colors",children:r},s))})]})},n)})})]})})})},Fb=Dp("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function q_({className:t,variant:e,...n}){return S.jsx("div",{className:Ut(Fb({variant:e}),t),...n})}const Ob=["All","Medical XR","Unreal Engine 5","Healthcare & Web3D","AI & Vision","Games & VR"],al=[{id:"smartscopy",title:"SmartScopy",subtitle:"Live Operating Theatre XR & Low-Latency Video Pipeline",category:"Medical XR",role:"Lead XR & Video Pipeline Engineer",shortDescription:"Solo-built XR platform streaming live endoscopic surgical camera feeds in real time to XREAL glasses and HoloLens 2, integrated with 3D anatomical overlays.",fullDescription:"SmartScopy is an operating theatre mixed-reality platform engineered to give surgical teams direct, hands-free visualization of endoscopic feeds and patient anatomy inside XR headsets. Built with a low-latency video streaming pipeline in Unity (C#) and Python, it allows surgeons to view live surgical feeds alongside interactive 3D anatomical models reconstructed from patient CT, MRI, and X-ray imaging.",tech:["Unity3D","C#","XREAL Air","HoloLens 2","MRTK","OpenXR","Python","OpenCV"],keyWork:["Ultra-low latency live video pipeline in Unity (C#) for real-time surgical camera feeds","Stereoscopic XR rendering for XREAL glasses and Microsoft HoloLens 2 via OpenXR","Interactive 3D anatomical reconstructions from CT/MRI/X-ray data viewable alongside live video","Modular Python video capture architecture with DirectShow buffer elimination"],architecturalHighlights:["Threaded video capture and processing pipeline separating capture and render loops","Sub-100ms camera-to-headset latency for precision surgical assistance","Dual-headset target support with MRTK gesture control and spatial head-anchoring"],featured:!0},{id:"mimadimplus",title:"MimadimPlus",subtitle:"Automated CAD-to-3D Procedural Architectural Engine",category:"Unreal Engine 5",role:"Lead Pipeline & C++ Developer",shortDescription:"Automated 2D-to-3D engine that converts raw CAD/DXF blueprints into realistic, real-time 3D building environments with procedural mesh generation.",fullDescription:"MimadimPlus is an automated architectural generation engine in Unreal Engine 5 that eliminates manual 3D modeling by compiling raw 2D CAD/DXF blueprints into procedural 3D environments. Built with custom C++ classes and UProceduralMeshComponent, it handles coordinate conversion, room-footprint extraction, wall-partner raycast snapping, and includes a custom procedural floor tile generator with polygon clipping math.",tech:["Unreal Engine 5","C++","UProceduralMeshComponent","Python","Blueprints","Meta Quest"],keyWork:["Automated DXF/CAD blueprint parser converting 2D architectural entities into 3D geometry","Custom C++ procedural mesh generation for walls, floors, doors, and windows with auto-calculated UVs and tangents","Integrated Procedural Floor Tile Generator & Geometric Clipper (TileManagerActor.h) for arbitrary polygon room boundaries","Companion Python desktop application for blueprint inspection, tag extraction, and Meta Quest VR walkthroughs"],architecturalHighlights:["Mathematical coordinate space conversion from 2D CAD (Y-inversion, normalization) to Unreal 3D world coordinates","Geometric clipping algorithm that slices tile meshes against complex L-shaped room contours with uniform grout spacing","Real-time dynamic lighting and material instancing for multi-room layout previews"],featured:!0},{id:"nopainheals",title:"NoPainHeals",subtitle:"Clinical Floor Projection Rehabilitation Platform",category:"Healthcare & Web3D",role:"Interactive Systems & Security Engineer",shortDescription:"Multi-modal interactive therapy platform featuring 12+ floor-projection games, zero-trust E2EE crypto, and a hardened Linux kiosk architecture.",fullDescription:"NoPainHeals is an enterprise clinical rehabilitation station used for motor skills therapy, balance training, and pediatric physical therapy. The system runs on a locked-down Linux/Ubuntu kiosk, featuring a suite of 12+ motion-tracked games, a zero-trust end-to-end encrypted telemetry tunnel using X25519 and AES-256-GCM, and an offline-first IndexedDB queue that prevents metric loss during clinic network dropouts.",tech:["Electron","Three.js","WebGL","WebSockets (Pusher v7)","Linux Kiosk","node:crypto (X25519, AES-256-GCM)","IndexedDB"],keyWork:["Delivered 12+ interactive floor-projection rehabilitation games (hopscotch, balance paths, reaction games)","Engineered zero-trust E2EE tunnel using node:crypto (X25519 key exchange, HKDF-SHA256, AES-256-GCM)","Hardened Linux/Ubuntu kiosk deployment with window escape guards and auto-launch controls","Built resilient offline-first IndexedDB queue with exponential backoff and retry caps"],architecturalHighlights:["Encrypted patient telemetry stream via custom secure headers (X-Encrypted-Payload, X-Hardware-Id)","Station hardware ID fingerprinting cached in Electron main process","Real-time WebSocket communication for remote therapist controls and QR station pairing"],featured:!0},{id:"motion-tracking-ai",title:"Camera-Based Motion Tracking & Edge AI",subtitle:"Real-Time Body Pose, Gesture & Object Detection Suite",category:"AI & Vision",role:"Computer Vision & Gameplay Engineer",shortDescription:"Custom motion and object-tracking models on live camera feeds powering controller-free full-body games.",fullDescription:"A high-performance edge AI computer vision pipeline developed in Python and Unity that processes live camera streams with zero buffer latency. Combines custom-trained YOLO object-tracking models running on ONNX Runtime with MediaPipe body pose and hand tracking to power controller-free games where physical movements control the gameplay.",tech:["Python","OpenCV","MediaPipe","YOLO","ONNX Runtime","DirectShow","Unity3D"],keyWork:["DirectShow video capture integration (cv2.CAP_DSHOW) eliminating internal frame buffer latency","Hybrid ML pipeline combining MediaPipe skeletal landmarks with custom ONNX models","Controller-free games suite: Fruit Samurai, Alien Runner, Enter If You Dare, and Football Cup","Real-time inference optimized for 60+ FPS on consumer hardware"],architecturalHighlights:["Multi-threaded frame acquisition and ML tensor inference to prevent UI stutter","Normalized gesture recognition coordinates mapped directly to in-game physics colliders"],featured:!0},{id:"3d-bone-visualizer",title:"3D Bone Visualizer",subtitle:"Interactive Orthopedic Mixed Reality Suite",category:"Medical XR",role:"XR Developer",shortDescription:"Interactive HoloLens 2 mixed-reality application enabling surgeons to inspect, slice, and manipulate 3D bone models from CT/MRI data.",fullDescription:"A specialized spatial computing application developed for Microsoft HoloLens 2 using MRTK and OpenXR. Surgeons can visualize volumetric patient bone structures in 3D space, rotate and inspect fractures, slice anatomical models along cross-sectional planes, and interact using natural hand tracking.",tech:["Unity3D","Microsoft HoloLens 2","MRTK","OpenXR","C#"],keyWork:["Volumetric bone model reconstruction and rendering from CT and MRI scans","Spatial hand-tracking gesture controls for 3D model rotation, zoom, and translation","Cross-sectional planar slicing tool for internal anatomical examination"],architecturalHighlights:["MRTK solver pipelines for ergonomic spatial anchoring in sterile operating room environments","Optimized polygon meshes for smooth 60 FPS rendering on mobile XR hardware"]},{id:"mimadim-homestudio",title:"MimadimHomeStudio",subtitle:"Real-Time Interior Customization & Furniture Swapping",category:"Unreal Engine 5",role:"Unreal Engine Developer",shortDescription:"Real-time interior design and customization engine in Unreal Engine 5 with dynamic asset swapping and instant lighting adjustments.",fullDescription:"An interactive architectural visualization tool built in UE5 using C++, Blueprints, and Data Assets. Users can customize room finishes, wall colors, lighting configurations, and dynamically swap furniture pieces while maintaining accurate world coordinates, pivot rotations, and collision bounds.",tech:["Unreal Engine 5","C++","Blueprints","Data Assets","Lumen Lighting"],keyWork:["Dynamic furniture swapping system preserving world position, rotation, and dimensions","Runtime material and color switching pipeline using Blueprint dynamic material instances","Real-time architectural lighting preview powered by UE5 Lumen"],architecturalHighlights:["Data Asset-driven catalog system decoupling furniture definitions from gameplay code","Collision checking preventing overlapping placements during item swaps"]},{id:"speech-therapy",title:"Speech Therapy Station (Speak & Rise)",subtitle:"Pediatric Articulation & Web3D Voice Platform",category:"Healthcare & Web3D",role:"Web3D & Systems Architect",shortDescription:"Interactive 3D web platform for pediatric speech therapy featuring real-time AI voice recognition and articulation scoring.",fullDescription:"An interactive pediatric speech rehabilitation platform built in Three.js and WebGL. Ravi refactored a 2,000+ line legacy monolith into clean decoupled modules (GameStateMachine, Classroom3D, GameRegistry) and integrated Sarvam AI voice activity detection and speech-to-text for real-time gamified pronunciation feedback.",tech:["Three.js","JavaScript","Web Audio API","Sarvam AI (VAD & STT)","Electron"],keyWork:["Architectural refactoring into decoupled GameStateMachine and Classroom3D modules","Integration of Sarvam AI Voice Activity Detection (VAD) and Speech-to-Text for pronunciation scoring","Interactive 3D character animation blending and gamified audio reward feedback"],architecturalHighlights:["Dynamic GameRegistry enabling plug-and-play addition of new therapy exercises without changing core logic","Low-latency Web Audio API synthesizers for instant child audio reinforcement"]},{id:"vr-boat-simulation",title:"VR Boat Simulation",subtitle:"Maritime Pilot Training Simulator",category:"Games & VR",role:"Unity Simulation Developer",shortDescription:"Virtual reality maritime simulator training pilots in transitioning from small vessels to large commercial cargo ships.",fullDescription:"A high-fidelity maritime training simulation in Unity for VR headsets. Focused on realistic open-water navigation, vessel handling characteristics, helm controls, realistic wave simulation, and custom buoyant water physics.",tech:["Unity3D","C#","VR SDK","HLSL Water Shaders","Physics Engine"],keyWork:["Developed realistic buoyant water physics and wave interaction models","Engineered ship helm controls and vessel inertia mechanics","Created dynamic weather and water shader effects"],architecturalHighlights:["Buoyancy force calculation sampling water height in real time to simulate realistic vessel heave and pitch","Comfort-tuned VR camera motion damping to minimize motion sickness during heavy waves"]},{id:"vr-zombie-shooter",title:"VR Zombie Shooter",subtitle:"First-Person 6DOF Immersive VR Game",category:"Games & VR",role:"Unity Gameplay Developer",shortDescription:"Action-packed first-person VR shooter featuring wave survival, spatial audio mapping, and realistic 6DOF weapon handling.",fullDescription:"An immersive virtual reality first-person game developed in Unity. Features realistic physics-based weapon reloading, tactile 6DOF controller feedback, spatial 3D audio, and intelligent enemy pathfinding algorithms.",tech:["Unity3D","C#","OpenXR","VR 6DOF","Spatial Audio","NavMesh AI"],keyWork:["Implemented 6DOF physical weapon grab, aim, and reload mechanics","Constructed multi-tiered enemy wave spawner with dynamic NavMesh routing","Configured 3D spatial soundscapes for audio-guided positional awareness"],architecturalHighlights:["Object pooling pipeline for projectiles, particle impacts, and enemy ragdolls to maintain a steady 90 FPS","Inverse kinematics (IK) player hand tracking"]},{id:"system-guard",title:"System Guard",subtitle:"Universal Kiosk Telemetry, Standby Tracker & Remote Kill-Switch",category:"Healthcare & Web3D",role:"Systems & Security Engineer",shortDescription:"Drop-in Electron kiosk monitoring module with hardware UUID fingerprinting, standby telemetry, and remote kill switch.",fullDescription:"A security and telemetry module designed for commercial medical kiosks. Auto-registers with a private Cloudflare Worker, generates tamper-resistant hardware UUID fingerprints, tracks active vs. standby operating time, and supports instant remote station locking.",tech:["Electron","Node.js crypto","Cloudflare Workers","Linux/Windows","Bash"],keyWork:["Hardware station fingerprinting via DMI product UUID and Linux machine ID","Inactivity detection transitioning kiosks cleanly between Active and Standby modes","Remote kill-switch protocol enabling instantaneous lockdown during security breaches"],architecturalHighlights:["Zero-dependency drop-in module requiring zero modification to existing game runtimes","Heartbeat ping architecture reporting kiosk health every 60 seconds with offline resilience"]},{id:"clean-the-city",title:"Clean the City",subtitle:"Mobile Physics Cleanup Game",category:"Games & VR",role:"Unity Mobile Developer",shortDescription:"Mobile casual game featuring black-hole gravitational physics to collect and absorb city debris.",fullDescription:"A mobile arcade game where players navigate an expanding black hole through urban environments, consuming city debris and buildings. Optimized for silky-smooth touch controls and high frame rates on both iOS and Android.",tech:["Unity3D","C#","Mobile (iOS/Android)","Physics2D/3D","Shader Graph"],keyWork:["Implemented gravitational suction physics and scalable mesh deformation","Optimized lighting, dynamic shadows, and draw-call batching for mobile performance","Integrated monetization SDKs and responsive touch controls"],architecturalHighlights:["Dynamic object scaling and collision culling to support hundreds of simultaneous physics bodies on mobile devices"]},{id:"iris-recognition",title:"Iris Recognition & Distance Detection",subtitle:"Biometric Identification & User Distance Prototype",category:"AI & Vision",role:"Computer Engineering Intern",shortDescription:"Image processing pipeline in Python and OpenCV calculating user distance from screen and biometric iris tracking.",fullDescription:"Developed during Ravi's engineering internship at Invisible Fiction. Built an image processing pipeline in Python and OpenCV that continuously tracks user eye position, computes user-to-screen distance to mitigate ocular fatigue, and evaluates iris features for biometric identification.",tech:["Python","OpenCV","NumPy","Image Processing"],keyWork:["Engineered user-to-screen geometric distance calculation using camera optical parameters","Constructed pupil and iris localization and contour isolation algorithms","Designed biometric distance warning thresholds to promote ergonomic computer usage"],architecturalHighlights:["Lightweight algorithmic pipeline running efficiently on standard webcam hardware without dedicated depth sensors"]},{id:"creative-spaces",title:"Creative Spaces Website",subtitle:"Interactive Architectural Showcase",category:"Healthcare & Web3D",role:"Freelance Web Developer",shortDescription:"Clean, responsive portfolio website built for an interior design and architectural client.",fullDescription:"A responsive website built for an interior design studio showcasing architectural design projects, interactive project galleries, and modern typography.",tech:["HTML5","CSS3","JavaScript","Responsive Web"],keyWork:["Constructed responsive image galleries and smooth scroll navigation","Optimized asset loading and mobile layout fidelity"],architecturalHighlights:["Clean semantic HTML structure with high Google Lighthouse performance scores"]}];function Yt(t,e,{checkForDefaultPrevented:n=!0}={}){return function(r){if(t==null||t(r),n===!1||!r.defaultPrevented)return e==null?void 0:e(r)}}function kb(t,e){const n=N.createContext(e),i=s=>{const{children:o,...a}=s,l=N.useMemo(()=>a,Object.values(a));return S.jsx(n.Provider,{value:l,children:o})};i.displayName=t+"Provider";function r(s){const o=N.useContext(n);if(o)return o;if(e!==void 0)return e;throw new Error(`\`${s}\` must be used within \`${t}\``)}return[i,r]}function kp(t,e=[]){let n=[];function i(s,o){const a=N.createContext(o),l=n.length;n=[...n,o];const c=h=>{var u;const{scope:d,children:m,...x}=h,v=((u=d==null?void 0:d[t])==null?void 0:u[l])||a,p=N.useMemo(()=>x,Object.values(x));return S.jsx(v.Provider,{value:p,children:m})};c.displayName=s+"Provider";function f(h,d){var v;const m=((v=d==null?void 0:d[t])==null?void 0:v[l])||a,x=N.useContext(m);if(x)return x;if(o!==void 0)return o;throw new Error(`\`${h}\` must be used within \`${s}\``)}return[c,f]}const r=()=>{const s=n.map(o=>N.createContext(o));return function(a){const l=(a==null?void 0:a[t])||s;return N.useMemo(()=>({[`__scope${t}`]:{...a,[t]:l}}),[a,l])}};return r.scopeName=t,[i,Bb(r,...e)]}function Bb(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const i=t.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(s){const o=i.reduce((a,{useScope:l,scopeName:c})=>{const h=l(s)[`__scope${c}`];return{...a,...h}},{});return N.useMemo(()=>({[`__scope${e.scopeName}`]:o}),[o])}};return n.scopeName=e.scopeName,n}var ho=globalThis!=null&&globalThis.document?N.useLayoutEffect:()=>{},zb=Vh[" useId ".trim().toString()]||(()=>{}),Vb=0;function qu(t){const[e,n]=N.useState(zb());return ho(()=>{t||n(i=>i??String(Vb++))},[t]),t||(e?`radix-${e}`:"")}var Hb=Vh[" useInsertionEffect ".trim().toString()]||ho;function K_({prop:t,defaultProp:e,onChange:n=()=>{},caller:i}){const[r,s,o]=Gb({defaultProp:e,onChange:n}),a=t!==void 0,l=a?t:r;{const f=N.useRef(t!==void 0);N.useEffect(()=>{const h=f.current;h!==a&&console.warn(`${i} is changing from ${h?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),f.current=a},[a,i])}const c=N.useCallback(f=>{var h;if(a){const d=Wb(f)?f(t):f;d!==t&&((h=o.current)==null||h.call(o,d))}else s(f)},[a,t,s,o]);return[l,c]}function Gb({defaultProp:t,onChange:e}){const[n,i]=N.useState(t),r=N.useRef(n),s=N.useRef(e);return Hb(()=>{s.current=e},[e]),N.useEffect(()=>{var o;r.current!==n&&((o=s.current)==null||o.call(s,n),r.current=n)},[n,r]),[n,i,s]}function Wb(t){return typeof t=="function"}var jb=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],gn=jb.reduce((t,e)=>{const n=wa(`Primitive.${e}`),i=N.forwardRef((r,s)=>{const{asChild:o,...a}=r,l=o?n:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),S.jsx(l,{...a,ref:s})});return i.displayName=`Primitive.${e}`,{...t,[e]:i}},{});function Z_(t,e){t&&cu.flushSync(()=>t.dispatchEvent(e))}function Qi(t){const e=N.useRef(t);return N.useEffect(()=>{e.current=t}),N.useMemo(()=>(...n)=>{var i;return(i=e.current)==null?void 0:i.call(e,...n)},[])}function Xb(t,e=globalThis==null?void 0:globalThis.document){const n=Qi(t);N.useEffect(()=>{const i=r=>{r.key==="Escape"&&n(r)};return e.addEventListener("keydown",i,{capture:!0}),()=>e.removeEventListener("keydown",i,{capture:!0})},[n,e])}var $b="DismissableLayer",Vf="dismissableLayer.update",Yb="dismissableLayer.pointerDownOutside",qb="dismissableLayer.focusOutside",Kg,Q_=N.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Bp=N.forwardRef((t,e)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:i,onPointerDownOutside:r,onFocusOutside:s,onInteractOutside:o,onDismiss:a,...l}=t,c=N.useContext(Q_),[f,h]=N.useState(null),d=(f==null?void 0:f.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,m]=N.useState({}),x=fi(e,C=>h(C)),v=Array.from(c.layers),[p]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),u=v.indexOf(p),g=f?v.indexOf(f):-1,M=c.layersWithOutsidePointerEventsDisabled.size>0,_=g>=u,E=Zb(C=>{const y=C.target,A=[...c.branches].some(P=>P.contains(y));!_||A||(r==null||r(C),o==null||o(C),C.defaultPrevented||a==null||a())},d),b=Qb(C=>{const y=C.target;[...c.branches].some(P=>P.contains(y))||(s==null||s(C),o==null||o(C),C.defaultPrevented||a==null||a())},d);return Xb(C=>{g===c.layers.size-1&&(i==null||i(C),!C.defaultPrevented&&a&&(C.preventDefault(),a()))},d),N.useEffect(()=>{if(f)return n&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(Kg=d.body.style.pointerEvents,d.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(f)),c.layers.add(f),Zg(),()=>{n&&c.layersWithOutsidePointerEventsDisabled.size===1&&(d.body.style.pointerEvents=Kg)}},[f,d,n,c]),N.useEffect(()=>()=>{f&&(c.layers.delete(f),c.layersWithOutsidePointerEventsDisabled.delete(f),Zg())},[f,c]),N.useEffect(()=>{const C=()=>m({});return document.addEventListener(Vf,C),()=>document.removeEventListener(Vf,C)},[]),S.jsx(gn.div,{...l,ref:x,style:{pointerEvents:M?_?"auto":"none":void 0,...t.style},onFocusCapture:Yt(t.onFocusCapture,b.onFocusCapture),onBlurCapture:Yt(t.onBlurCapture,b.onBlurCapture),onPointerDownCapture:Yt(t.onPointerDownCapture,E.onPointerDownCapture)})});Bp.displayName=$b;var Kb="DismissableLayerBranch",J_=N.forwardRef((t,e)=>{const n=N.useContext(Q_),i=N.useRef(null),r=fi(e,i);return N.useEffect(()=>{const s=i.current;if(s)return n.branches.add(s),()=>{n.branches.delete(s)}},[n.branches]),S.jsx(gn.div,{...t,ref:r})});J_.displayName=Kb;function Zb(t,e=globalThis==null?void 0:globalThis.document){const n=Qi(t),i=N.useRef(!1),r=N.useRef(()=>{});return N.useEffect(()=>{const s=a=>{if(a.target&&!i.current){let l=function(){ey(Yb,n,c,{discrete:!0})};const c={originalEvent:a};a.pointerType==="touch"?(e.removeEventListener("click",r.current),r.current=l,e.addEventListener("click",r.current,{once:!0})):l()}else e.removeEventListener("click",r.current);i.current=!1},o=window.setTimeout(()=>{e.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(o),e.removeEventListener("pointerdown",s),e.removeEventListener("click",r.current)}},[e,n]),{onPointerDownCapture:()=>i.current=!0}}function Qb(t,e=globalThis==null?void 0:globalThis.document){const n=Qi(t),i=N.useRef(!1);return N.useEffect(()=>{const r=s=>{s.target&&!i.current&&ey(qb,n,{originalEvent:s},{discrete:!1})};return e.addEventListener("focusin",r),()=>e.removeEventListener("focusin",r)},[e,n]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}function Zg(){const t=new CustomEvent(Vf);document.dispatchEvent(t)}function ey(t,e,n,{discrete:i}){const r=n.originalEvent.target,s=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:n});e&&r.addEventListener(t,e,{once:!0}),i?Z_(r,s):r.dispatchEvent(s)}var Jb=Bp,eT=J_,Ku="focusScope.autoFocusOnMount",Zu="focusScope.autoFocusOnUnmount",Qg={bubbles:!1,cancelable:!0},tT="FocusScope",ty=N.forwardRef((t,e)=>{const{loop:n=!1,trapped:i=!1,onMountAutoFocus:r,onUnmountAutoFocus:s,...o}=t,[a,l]=N.useState(null),c=Qi(r),f=Qi(s),h=N.useRef(null),d=fi(e,v=>l(v)),m=N.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;N.useEffect(()=>{if(i){let v=function(M){if(m.paused||!a)return;const _=M.target;a.contains(_)?h.current=_:mr(h.current,{select:!0})},p=function(M){if(m.paused||!a)return;const _=M.relatedTarget;_!==null&&(a.contains(_)||mr(h.current,{select:!0}))},u=function(M){if(document.activeElement===document.body)for(const E of M)E.removedNodes.length>0&&mr(a)};document.addEventListener("focusin",v),document.addEventListener("focusout",p);const g=new MutationObserver(u);return a&&g.observe(a,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",v),document.removeEventListener("focusout",p),g.disconnect()}}},[i,a,m.paused]),N.useEffect(()=>{if(a){e0.add(m);const v=document.activeElement;if(!a.contains(v)){const u=new CustomEvent(Ku,Qg);a.addEventListener(Ku,c),a.dispatchEvent(u),u.defaultPrevented||(nT(aT(ny(a)),{select:!0}),document.activeElement===v&&mr(a))}return()=>{a.removeEventListener(Ku,c),setTimeout(()=>{const u=new CustomEvent(Zu,Qg);a.addEventListener(Zu,f),a.dispatchEvent(u),u.defaultPrevented||mr(v??document.body,{select:!0}),a.removeEventListener(Zu,f),e0.remove(m)},0)}}},[a,c,f,m]);const x=N.useCallback(v=>{if(!n&&!i||m.paused)return;const p=v.key==="Tab"&&!v.altKey&&!v.ctrlKey&&!v.metaKey,u=document.activeElement;if(p&&u){const g=v.currentTarget,[M,_]=iT(g);M&&_?!v.shiftKey&&u===_?(v.preventDefault(),n&&mr(M,{select:!0})):v.shiftKey&&u===M&&(v.preventDefault(),n&&mr(_,{select:!0})):u===g&&v.preventDefault()}},[n,i,m.paused]);return S.jsx(gn.div,{tabIndex:-1,...o,ref:d,onKeyDown:x})});ty.displayName=tT;function nT(t,{select:e=!1}={}){const n=document.activeElement;for(const i of t)if(mr(i,{select:e}),document.activeElement!==n)return}function iT(t){const e=ny(t),n=Jg(e,t),i=Jg(e.reverse(),t);return[n,i]}function ny(t){const e=[],n=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>{const r=i.tagName==="INPUT"&&i.type==="hidden";return i.disabled||i.hidden||r?NodeFilter.FILTER_SKIP:i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)e.push(n.currentNode);return e}function Jg(t,e){for(const n of t)if(!rT(n,{upTo:e}))return n}function rT(t,{upTo:e}){if(getComputedStyle(t).visibility==="hidden")return!0;for(;t;){if(e!==void 0&&t===e)return!1;if(getComputedStyle(t).display==="none")return!0;t=t.parentElement}return!1}function sT(t){return t instanceof HTMLInputElement&&"select"in t}function mr(t,{select:e=!1}={}){if(t&&t.focus){const n=document.activeElement;t.focus({preventScroll:!0}),t!==n&&sT(t)&&e&&t.select()}}var e0=oT();function oT(){let t=[];return{add(e){const n=t[0];e!==n&&(n==null||n.pause()),t=t0(t,e),t.unshift(e)},remove(e){var n;t=t0(t,e),(n=t[0])==null||n.resume()}}}function t0(t,e){const n=[...t],i=n.indexOf(e);return i!==-1&&n.splice(i,1),n}function aT(t){return t.filter(e=>e.tagName!=="A")}var lT="Portal",zp=N.forwardRef((t,e)=>{var a;const{container:n,...i}=t,[r,s]=N.useState(!1);ho(()=>s(!0),[]);const o=n||r&&((a=globalThis==null?void 0:globalThis.document)==null?void 0:a.body);return o?I1.createPortal(S.jsx(gn.div,{...i,ref:e}),o):null});zp.displayName=lT;function cT(t,e){return N.useReducer((n,i)=>e[n][i]??n,t)}var Ua=t=>{const{present:e,children:n}=t,i=uT(e),r=typeof n=="function"?n({present:i.isPresent}):N.Children.only(n),s=fi(i.ref,dT(r));return typeof n=="function"||i.isPresent?N.cloneElement(r,{ref:s}):null};Ua.displayName="Presence";function uT(t){const[e,n]=N.useState(),i=N.useRef(null),r=N.useRef(t),s=N.useRef("none"),o=t?"mounted":"unmounted",[a,l]=cT(o,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return N.useEffect(()=>{const c=ll(i.current);s.current=a==="mounted"?c:"none"},[a]),ho(()=>{const c=i.current,f=r.current;if(f!==t){const d=s.current,m=ll(c);t?l("MOUNT"):m==="none"||(c==null?void 0:c.display)==="none"?l("UNMOUNT"):l(f&&d!==m?"ANIMATION_OUT":"UNMOUNT"),r.current=t}},[t,l]),ho(()=>{if(e){let c;const f=e.ownerDocument.defaultView??window,h=m=>{const v=ll(i.current).includes(m.animationName);if(m.target===e&&v&&(l("ANIMATION_END"),!r.current)){const p=e.style.animationFillMode;e.style.animationFillMode="forwards",c=f.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=p)})}},d=m=>{m.target===e&&(s.current=ll(i.current))};return e.addEventListener("animationstart",d),e.addEventListener("animationcancel",h),e.addEventListener("animationend",h),()=>{f.clearTimeout(c),e.removeEventListener("animationstart",d),e.removeEventListener("animationcancel",h),e.removeEventListener("animationend",h)}}else l("ANIMATION_END")},[e,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:N.useCallback(c=>{i.current=c?getComputedStyle(c):null,n(c)},[])}}function ll(t){return(t==null?void 0:t.animationName)||"none"}function dT(t){var i,r;let e=(i=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(r=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}var Qu=0;function fT(){N.useEffect(()=>{const t=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",t[0]??n0()),document.body.insertAdjacentElement("beforeend",t[1]??n0()),Qu++,()=>{Qu===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),Qu--}},[])}function n0(){const t=document.createElement("span");return t.setAttribute("data-radix-focus-guard",""),t.tabIndex=0,t.style.outline="none",t.style.opacity="0",t.style.position="fixed",t.style.pointerEvents="none",t}var wi=function(){return wi=Object.assign||function(e){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},wi.apply(this,arguments)};function iy(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function hT(t,e,n){if(n||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return t.concat(s||Array.prototype.slice.call(e))}var Ql="right-scroll-bar-position",Jl="width-before-scroll-bar",pT="with-scroll-bars-hidden",mT="--removed-body-scroll-bar-size";function Ju(t,e){return typeof t=="function"?t(e):t&&(t.current=e),t}function gT(t,e){var n=N.useState(function(){return{value:t,callback:e,facade:{get current(){return n.value},set current(i){var r=n.value;r!==i&&(n.value=i,n.callback(i,r))}}}})[0];return n.callback=e,n.facade}var vT=typeof window<"u"?N.useLayoutEffect:N.useEffect,i0=new WeakMap;function xT(t,e){var n=gT(null,function(i){return t.forEach(function(r){return Ju(r,i)})});return vT(function(){var i=i0.get(n);if(i){var r=new Set(i),s=new Set(t),o=n.current;r.forEach(function(a){s.has(a)||Ju(a,null)}),s.forEach(function(a){r.has(a)||Ju(a,o)})}i0.set(n,t)},[t]),n}function _T(t){return t}function yT(t,e){e===void 0&&(e=_T);var n=[],i=!1,r={read:function(){if(i)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:t},useMedium:function(s){var o=e(s,i);return n.push(o),function(){n=n.filter(function(a){return a!==o})}},assignSyncMedium:function(s){for(i=!0;n.length;){var o=n;n=[],o.forEach(s)}n={push:function(a){return s(a)},filter:function(){return n}}},assignMedium:function(s){i=!0;var o=[];if(n.length){var a=n;n=[],a.forEach(s),o=n}var l=function(){var f=o;o=[],f.forEach(s)},c=function(){return Promise.resolve().then(l)};c(),n={push:function(f){o.push(f),c()},filter:function(f){return o=o.filter(f),n}}}};return r}function ST(t){t===void 0&&(t={});var e=yT(null);return e.options=wi({async:!0,ssr:!1},t),e}var ry=function(t){var e=t.sideCar,n=iy(t,["sideCar"]);if(!e)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var i=e.read();if(!i)throw new Error("Sidecar medium not found");return N.createElement(i,wi({},n))};ry.isSideCarExport=!0;function MT(t,e){return t.useMedium(e),ry}var sy=ST(),ed=function(){},pu=N.forwardRef(function(t,e){var n=N.useRef(null),i=N.useState({onScrollCapture:ed,onWheelCapture:ed,onTouchMoveCapture:ed}),r=i[0],s=i[1],o=t.forwardProps,a=t.children,l=t.className,c=t.removeScrollBar,f=t.enabled,h=t.shards,d=t.sideCar,m=t.noRelative,x=t.noIsolation,v=t.inert,p=t.allowPinchZoom,u=t.as,g=u===void 0?"div":u,M=t.gapMode,_=iy(t,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),E=d,b=xT([n,e]),C=wi(wi({},_),r);return N.createElement(N.Fragment,null,f&&N.createElement(E,{sideCar:sy,removeScrollBar:c,shards:h,noRelative:m,noIsolation:x,inert:v,setCallbacks:s,allowPinchZoom:!!p,lockRef:n,gapMode:M}),o?N.cloneElement(N.Children.only(a),wi(wi({},C),{ref:b})):N.createElement(g,wi({},C,{className:l,ref:b}),a))});pu.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};pu.classNames={fullWidth:Jl,zeroRight:Ql};var wT=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function ET(){if(!document)return null;var t=document.createElement("style");t.type="text/css";var e=wT();return e&&t.setAttribute("nonce",e),t}function bT(t,e){t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}function TT(t){var e=document.head||document.getElementsByTagName("head")[0];e.appendChild(t)}var CT=function(){var t=0,e=null;return{add:function(n){t==0&&(e=ET())&&(bT(e,n),TT(e)),t++},remove:function(){t--,!t&&e&&(e.parentNode&&e.parentNode.removeChild(e),e=null)}}},AT=function(){var t=CT();return function(e,n){N.useEffect(function(){return t.add(e),function(){t.remove()}},[e&&n])}},oy=function(){var t=AT(),e=function(n){var i=n.styles,r=n.dynamic;return t(i,r),null};return e},RT={left:0,top:0,right:0,gap:0},td=function(t){return parseInt(t||"",10)||0},PT=function(t){var e=window.getComputedStyle(document.body),n=e[t==="padding"?"paddingLeft":"marginLeft"],i=e[t==="padding"?"paddingTop":"marginTop"],r=e[t==="padding"?"paddingRight":"marginRight"];return[td(n),td(i),td(r)]},NT=function(t){if(t===void 0&&(t="margin"),typeof window>"u")return RT;var e=PT(t),n=document.documentElement.clientWidth,i=window.innerWidth;return{left:e[0],top:e[1],right:e[2],gap:Math.max(0,i-n+e[2]-e[0])}},LT=oy(),no="data-scroll-locked",DT=function(t,e,n,i){var r=t.left,s=t.top,o=t.right,a=t.gap;return n===void 0&&(n="margin"),`
  .`.concat(pT,` {
   overflow: hidden `).concat(i,`;
   padding-right: `).concat(a,"px ").concat(i,`;
  }
  body[`).concat(no,`] {
    overflow: hidden `).concat(i,`;
    overscroll-behavior: contain;
    `).concat([e&&"position: relative ".concat(i,";"),n==="margin"&&`
    padding-left: `.concat(r,`px;
    padding-top: `).concat(s,`px;
    padding-right: `).concat(o,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a,"px ").concat(i,`;
    `),n==="padding"&&"padding-right: ".concat(a,"px ").concat(i,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Ql,` {
    right: `).concat(a,"px ").concat(i,`;
  }
  
  .`).concat(Jl,` {
    margin-right: `).concat(a,"px ").concat(i,`;
  }
  
  .`).concat(Ql," .").concat(Ql,` {
    right: 0 `).concat(i,`;
  }
  
  .`).concat(Jl," .").concat(Jl,` {
    margin-right: 0 `).concat(i,`;
  }
  
  body[`).concat(no,`] {
    `).concat(mT,": ").concat(a,`px;
  }
`)},r0=function(){var t=parseInt(document.body.getAttribute(no)||"0",10);return isFinite(t)?t:0},IT=function(){N.useEffect(function(){return document.body.setAttribute(no,(r0()+1).toString()),function(){var t=r0()-1;t<=0?document.body.removeAttribute(no):document.body.setAttribute(no,t.toString())}},[])},UT=function(t){var e=t.noRelative,n=t.noImportant,i=t.gapMode,r=i===void 0?"margin":i;IT();var s=N.useMemo(function(){return NT(r)},[r]);return N.createElement(LT,{styles:DT(s,!e,r,n?"":"!important")})},Hf=!1;if(typeof window<"u")try{var cl=Object.defineProperty({},"passive",{get:function(){return Hf=!0,!0}});window.addEventListener("test",cl,cl),window.removeEventListener("test",cl,cl)}catch{Hf=!1}var xs=Hf?{passive:!1}:!1,FT=function(t){return t.tagName==="TEXTAREA"},ay=function(t,e){if(!(t instanceof Element))return!1;var n=window.getComputedStyle(t);return n[e]!=="hidden"&&!(n.overflowY===n.overflowX&&!FT(t)&&n[e]==="visible")},OT=function(t){return ay(t,"overflowY")},kT=function(t){return ay(t,"overflowX")},s0=function(t,e){var n=e.ownerDocument,i=e;do{typeof ShadowRoot<"u"&&i instanceof ShadowRoot&&(i=i.host);var r=ly(t,i);if(r){var s=cy(t,i),o=s[1],a=s[2];if(o>a)return!0}i=i.parentNode}while(i&&i!==n.body);return!1},BT=function(t){var e=t.scrollTop,n=t.scrollHeight,i=t.clientHeight;return[e,n,i]},zT=function(t){var e=t.scrollLeft,n=t.scrollWidth,i=t.clientWidth;return[e,n,i]},ly=function(t,e){return t==="v"?OT(e):kT(e)},cy=function(t,e){return t==="v"?BT(e):zT(e)},VT=function(t,e){return t==="h"&&e==="rtl"?-1:1},HT=function(t,e,n,i,r){var s=VT(t,window.getComputedStyle(e).direction),o=s*i,a=n.target,l=e.contains(a),c=!1,f=o>0,h=0,d=0;do{if(!a)break;var m=cy(t,a),x=m[0],v=m[1],p=m[2],u=v-p-s*x;(x||u)&&ly(t,a)&&(h+=u,d+=x);var g=a.parentNode;a=g&&g.nodeType===Node.DOCUMENT_FRAGMENT_NODE?g.host:g}while(!l&&a!==document.body||l&&(e.contains(a)||e===a));return(f&&(Math.abs(h)<1||!r)||!f&&(Math.abs(d)<1||!r))&&(c=!0),c},ul=function(t){return"changedTouches"in t?[t.changedTouches[0].clientX,t.changedTouches[0].clientY]:[0,0]},o0=function(t){return[t.deltaX,t.deltaY]},a0=function(t){return t&&"current"in t?t.current:t},GT=function(t,e){return t[0]===e[0]&&t[1]===e[1]},WT=function(t){return`
  .block-interactivity-`.concat(t,` {pointer-events: none;}
  .allow-interactivity-`).concat(t,` {pointer-events: all;}
`)},jT=0,_s=[];function XT(t){var e=N.useRef([]),n=N.useRef([0,0]),i=N.useRef(),r=N.useState(jT++)[0],s=N.useState(oy)[0],o=N.useRef(t);N.useEffect(function(){o.current=t},[t]),N.useEffect(function(){if(t.inert){document.body.classList.add("block-interactivity-".concat(r));var v=hT([t.lockRef.current],(t.shards||[]).map(a0),!0).filter(Boolean);return v.forEach(function(p){return p.classList.add("allow-interactivity-".concat(r))}),function(){document.body.classList.remove("block-interactivity-".concat(r)),v.forEach(function(p){return p.classList.remove("allow-interactivity-".concat(r))})}}},[t.inert,t.lockRef.current,t.shards]);var a=N.useCallback(function(v,p){if("touches"in v&&v.touches.length===2||v.type==="wheel"&&v.ctrlKey)return!o.current.allowPinchZoom;var u=ul(v),g=n.current,M="deltaX"in v?v.deltaX:g[0]-u[0],_="deltaY"in v?v.deltaY:g[1]-u[1],E,b=v.target,C=Math.abs(M)>Math.abs(_)?"h":"v";if("touches"in v&&C==="h"&&b.type==="range")return!1;var y=s0(C,b);if(!y)return!0;if(y?E=C:(E=C==="v"?"h":"v",y=s0(C,b)),!y)return!1;if(!i.current&&"changedTouches"in v&&(M||_)&&(i.current=E),!E)return!0;var A=i.current||E;return HT(A,p,v,A==="h"?M:_,!0)},[]),l=N.useCallback(function(v){var p=v;if(!(!_s.length||_s[_s.length-1]!==s)){var u="deltaY"in p?o0(p):ul(p),g=e.current.filter(function(E){return E.name===p.type&&(E.target===p.target||p.target===E.shadowParent)&&GT(E.delta,u)})[0];if(g&&g.should){p.cancelable&&p.preventDefault();return}if(!g){var M=(o.current.shards||[]).map(a0).filter(Boolean).filter(function(E){return E.contains(p.target)}),_=M.length>0?a(p,M[0]):!o.current.noIsolation;_&&p.cancelable&&p.preventDefault()}}},[]),c=N.useCallback(function(v,p,u,g){var M={name:v,delta:p,target:u,should:g,shadowParent:$T(u)};e.current.push(M),setTimeout(function(){e.current=e.current.filter(function(_){return _!==M})},1)},[]),f=N.useCallback(function(v){n.current=ul(v),i.current=void 0},[]),h=N.useCallback(function(v){c(v.type,o0(v),v.target,a(v,t.lockRef.current))},[]),d=N.useCallback(function(v){c(v.type,ul(v),v.target,a(v,t.lockRef.current))},[]);N.useEffect(function(){return _s.push(s),t.setCallbacks({onScrollCapture:h,onWheelCapture:h,onTouchMoveCapture:d}),document.addEventListener("wheel",l,xs),document.addEventListener("touchmove",l,xs),document.addEventListener("touchstart",f,xs),function(){_s=_s.filter(function(v){return v!==s}),document.removeEventListener("wheel",l,xs),document.removeEventListener("touchmove",l,xs),document.removeEventListener("touchstart",f,xs)}},[]);var m=t.removeScrollBar,x=t.inert;return N.createElement(N.Fragment,null,x?N.createElement(s,{styles:WT(r)}):null,m?N.createElement(UT,{noRelative:t.noRelative,gapMode:t.gapMode}):null)}function $T(t){for(var e=null;t!==null;)t instanceof ShadowRoot&&(e=t.host,t=t.host),t=t.parentNode;return e}const YT=MT(sy,XT);var uy=N.forwardRef(function(t,e){return N.createElement(pu,wi({},t,{ref:e,sideCar:YT}))});uy.classNames=pu.classNames;var qT=function(t){if(typeof document>"u")return null;var e=Array.isArray(t)?t[0]:t;return e.ownerDocument.body},ys=new WeakMap,dl=new WeakMap,fl={},nd=0,dy=function(t){return t&&(t.host||dy(t.parentNode))},KT=function(t,e){return e.map(function(n){if(t.contains(n))return n;var i=dy(n);return i&&t.contains(i)?i:(console.error("aria-hidden",n,"in not contained inside",t,". Doing nothing"),null)}).filter(function(n){return!!n})},ZT=function(t,e,n,i){var r=KT(e,Array.isArray(t)?t:[t]);fl[n]||(fl[n]=new WeakMap);var s=fl[n],o=[],a=new Set,l=new Set(r),c=function(h){!h||a.has(h)||(a.add(h),c(h.parentNode))};r.forEach(c);var f=function(h){!h||l.has(h)||Array.prototype.forEach.call(h.children,function(d){if(a.has(d))f(d);else try{var m=d.getAttribute(i),x=m!==null&&m!=="false",v=(ys.get(d)||0)+1,p=(s.get(d)||0)+1;ys.set(d,v),s.set(d,p),o.push(d),v===1&&x&&dl.set(d,!0),p===1&&d.setAttribute(n,"true"),x||d.setAttribute(i,"true")}catch(u){console.error("aria-hidden: cannot operate on ",d,u)}})};return f(e),a.clear(),nd++,function(){o.forEach(function(h){var d=ys.get(h)-1,m=s.get(h)-1;ys.set(h,d),s.set(h,m),d||(dl.has(h)||h.removeAttribute(i),dl.delete(h)),m||h.removeAttribute(n)}),nd--,nd||(ys=new WeakMap,ys=new WeakMap,dl=new WeakMap,fl={})}},QT=function(t,e,n){n===void 0&&(n="data-aria-hidden");var i=Array.from(Array.isArray(t)?t:[t]),r=qT(t);return r?(i.push.apply(i,Array.from(r.querySelectorAll("[aria-live]"))),ZT(i,r,n,"aria-hidden")):function(){return null}},mu="Dialog",[fy,nD]=kp(mu),[JT,hi]=fy(mu),hy=t=>{const{__scopeDialog:e,children:n,open:i,defaultOpen:r,onOpenChange:s,modal:o=!0}=t,a=N.useRef(null),l=N.useRef(null),[c,f]=K_({prop:i,defaultProp:r??!1,onChange:s,caller:mu});return S.jsx(JT,{scope:e,triggerRef:a,contentRef:l,contentId:qu(),titleId:qu(),descriptionId:qu(),open:c,onOpenChange:f,onOpenToggle:N.useCallback(()=>f(h=>!h),[f]),modal:o,children:n})};hy.displayName=mu;var py="DialogTrigger",eC=N.forwardRef((t,e)=>{const{__scopeDialog:n,...i}=t,r=hi(py,n),s=fi(e,r.triggerRef);return S.jsx(gn.button,{type:"button","aria-haspopup":"dialog","aria-expanded":r.open,"aria-controls":r.contentId,"data-state":Gp(r.open),...i,ref:s,onClick:Yt(t.onClick,r.onOpenToggle)})});eC.displayName=py;var Vp="DialogPortal",[tC,my]=fy(Vp,{forceMount:void 0}),gy=t=>{const{__scopeDialog:e,forceMount:n,children:i,container:r}=t,s=hi(Vp,e);return S.jsx(tC,{scope:e,forceMount:n,children:N.Children.map(i,o=>S.jsx(Ua,{present:n||s.open,children:S.jsx(zp,{asChild:!0,container:r,children:o})}))})};gy.displayName=Vp;var Uc="DialogOverlay",vy=N.forwardRef((t,e)=>{const n=my(Uc,t.__scopeDialog),{forceMount:i=n.forceMount,...r}=t,s=hi(Uc,t.__scopeDialog);return s.modal?S.jsx(Ua,{present:i||s.open,children:S.jsx(iC,{...r,ref:e})}):null});vy.displayName=Uc;var nC=wa("DialogOverlay.RemoveScroll"),iC=N.forwardRef((t,e)=>{const{__scopeDialog:n,...i}=t,r=hi(Uc,n);return S.jsx(uy,{as:nC,allowPinchZoom:!0,shards:[r.contentRef],children:S.jsx(gn.div,{"data-state":Gp(r.open),...i,ref:e,style:{pointerEvents:"auto",...i.style}})})}),os="DialogContent",xy=N.forwardRef((t,e)=>{const n=my(os,t.__scopeDialog),{forceMount:i=n.forceMount,...r}=t,s=hi(os,t.__scopeDialog);return S.jsx(Ua,{present:i||s.open,children:s.modal?S.jsx(rC,{...r,ref:e}):S.jsx(sC,{...r,ref:e})})});xy.displayName=os;var rC=N.forwardRef((t,e)=>{const n=hi(os,t.__scopeDialog),i=N.useRef(null),r=fi(e,n.contentRef,i);return N.useEffect(()=>{const s=i.current;if(s)return QT(s)},[]),S.jsx(_y,{...t,ref:r,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:Yt(t.onCloseAutoFocus,s=>{var o;s.preventDefault(),(o=n.triggerRef.current)==null||o.focus()}),onPointerDownOutside:Yt(t.onPointerDownOutside,s=>{const o=s.detail.originalEvent,a=o.button===0&&o.ctrlKey===!0;(o.button===2||a)&&s.preventDefault()}),onFocusOutside:Yt(t.onFocusOutside,s=>s.preventDefault())})}),sC=N.forwardRef((t,e)=>{const n=hi(os,t.__scopeDialog),i=N.useRef(!1),r=N.useRef(!1);return S.jsx(_y,{...t,ref:e,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:s=>{var o,a;(o=t.onCloseAutoFocus)==null||o.call(t,s),s.defaultPrevented||(i.current||(a=n.triggerRef.current)==null||a.focus(),s.preventDefault()),i.current=!1,r.current=!1},onInteractOutside:s=>{var l,c;(l=t.onInteractOutside)==null||l.call(t,s),s.defaultPrevented||(i.current=!0,s.detail.originalEvent.type==="pointerdown"&&(r.current=!0));const o=s.target;((c=n.triggerRef.current)==null?void 0:c.contains(o))&&s.preventDefault(),s.detail.originalEvent.type==="focusin"&&r.current&&s.preventDefault()}})}),_y=N.forwardRef((t,e)=>{const{__scopeDialog:n,trapFocus:i,onOpenAutoFocus:r,onCloseAutoFocus:s,...o}=t,a=hi(os,n),l=N.useRef(null),c=fi(e,l);return fT(),S.jsxs(S.Fragment,{children:[S.jsx(ty,{asChild:!0,loop:!0,trapped:i,onMountAutoFocus:r,onUnmountAutoFocus:s,children:S.jsx(Bp,{role:"dialog",id:a.contentId,"aria-describedby":a.descriptionId,"aria-labelledby":a.titleId,"data-state":Gp(a.open),...o,ref:c,onDismiss:()=>a.onOpenChange(!1)})}),S.jsxs(S.Fragment,{children:[S.jsx(oC,{titleId:a.titleId}),S.jsx(lC,{contentRef:l,descriptionId:a.descriptionId})]})]})}),Hp="DialogTitle",yy=N.forwardRef((t,e)=>{const{__scopeDialog:n,...i}=t,r=hi(Hp,n);return S.jsx(gn.h2,{id:r.titleId,...i,ref:e})});yy.displayName=Hp;var Sy="DialogDescription",My=N.forwardRef((t,e)=>{const{__scopeDialog:n,...i}=t,r=hi(Sy,n);return S.jsx(gn.p,{id:r.descriptionId,...i,ref:e})});My.displayName=Sy;var wy="DialogClose",Ey=N.forwardRef((t,e)=>{const{__scopeDialog:n,...i}=t,r=hi(wy,n);return S.jsx(gn.button,{type:"button",...i,ref:e,onClick:Yt(t.onClick,()=>r.onOpenChange(!1))})});Ey.displayName=wy;function Gp(t){return t?"open":"closed"}var by="DialogTitleWarning",[iD,Ty]=kb(by,{contentName:os,titleName:Hp,docsSlug:"dialog"}),oC=({titleId:t})=>{const e=Ty(by),n=`\`${e.contentName}\` requires a \`${e.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${e.docsSlug}`;return N.useEffect(()=>{t&&(document.getElementById(t)||console.error(n))},[n,t]),null},aC="DialogDescriptionWarning",lC=({contentRef:t,descriptionId:e})=>{const i=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Ty(aC).contentName}}.`;return N.useEffect(()=>{var s;const r=(s=t.current)==null?void 0:s.getAttribute("aria-describedby");e&&r&&(document.getElementById(e)||console.warn(i))},[i,t,e]),null},cC=hy,uC=gy,Cy=vy,Ay=xy,Ry=yy,Py=My,dC=Ey;const fC=cC,hC=uC,Ny=N.forwardRef(({className:t,...e},n)=>S.jsx(Cy,{ref:n,className:Ut("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...e}));Ny.displayName=Cy.displayName;const Ly=N.forwardRef(({className:t,children:e,...n},i)=>S.jsxs(hC,{children:[S.jsx(Ny,{}),S.jsxs(Ay,{ref:i,className:Ut("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",t),...n,children:[e,S.jsxs(dC,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",children:[S.jsx(Op,{className:"h-4 w-4"}),S.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));Ly.displayName=Ay.displayName;const Dy=({className:t,...e})=>S.jsx("div",{className:Ut("flex flex-col space-y-1.5 text-center sm:text-left",t),...e});Dy.displayName="DialogHeader";const Iy=N.forwardRef(({className:t,...e},n)=>S.jsx(Ry,{ref:n,className:Ut("text-lg font-semibold leading-none tracking-tight",t),...e}));Iy.displayName=Ry.displayName;const Uy=N.forwardRef(({className:t,...e},n)=>S.jsx(Py,{ref:n,className:Ut("text-sm text-muted-foreground",t),...e}));Uy.displayName=Py.displayName;const pC=t=>{switch(t){case"Medical XR":return"bg-cyan-500/10 text-cyan-400 border-cyan-500/30";case"Unreal Engine 5":return"bg-purple-500/10 text-purple-400 border-purple-500/30";case"Healthcare & Web3D":return"bg-emerald-500/10 text-emerald-400 border-emerald-500/30";case"AI & Vision":return"bg-amber-500/10 text-amber-400 border-amber-500/30";case"Games & VR":return"bg-rose-500/10 text-rose-400 border-rose-500/30";default:return"bg-primary/20 text-primary border-primary/30"}},mC=({project:t,isOpen:e,onClose:n})=>t?S.jsx(fC,{open:e,onOpenChange:i=>!i&&n(),children:S.jsxs(Ly,{className:"max-w-3xl max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-xl border border-border/80 p-6 md:p-8 rounded-2xl shadow-2xl",children:[S.jsxs(Dy,{className:"text-left space-y-3",children:[S.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[S.jsx(q_,{className:`border px-3 py-1 font-semibold text-xs tracking-wide uppercase ${pC(t.category)}`,children:t.category}),S.jsxs("span",{className:"text-xs px-2.5 py-1 rounded-md bg-muted/40 text-muted-foreground border border-border/40",children:["Role: ",S.jsx("span",{className:"text-foreground font-medium",children:t.role})]})]}),S.jsx(Iy,{className:"text-2xl md:text-3xl font-bold tracking-tight text-foreground",children:t.title}),S.jsx(Uy,{className:"text-sm md:text-base text-primary/90 font-medium",children:t.subtitle})]}),S.jsxs("div",{className:"space-y-6 pt-2",children:[S.jsx("div",{className:"p-4 rounded-xl bg-muted/20 border border-border/40 text-foreground/90 text-sm md:text-base leading-relaxed",children:t.fullDescription}),S.jsxs("div",{className:"space-y-3",children:[S.jsxs("h4",{className:"text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2",children:[S.jsx(hu,{className:"w-4 h-4 text-primary"}),"Key Engineering Deliverables"]}),S.jsx("div",{className:"grid gap-2.5",children:t.keyWork.map((i,r)=>S.jsxs("div",{className:"flex items-start gap-3 p-3 rounded-lg bg-card/40 border border-border/30 text-xs md:text-sm text-foreground/80",children:[S.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2"}),S.jsx("span",{children:i})]},r))})]}),t.architecturalHighlights&&t.architecturalHighlights.length>0&&S.jsxs("div",{className:"space-y-3",children:[S.jsxs("h4",{className:"text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2",children:[S.jsx(pb,{className:"w-4 h-4 text-primary"}),"Architectural Highlights & Innovations"]}),S.jsx("div",{className:"grid gap-2.5",children:t.architecturalHighlights.map((i,r)=>S.jsxs("div",{className:"flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20 text-xs md:text-sm text-foreground/90",children:[S.jsx(j_,{className:"w-4 h-4 text-primary flex-shrink-0 mt-0.5"}),S.jsx("span",{children:i})]},r))})]}),S.jsxs("div",{className:"space-y-2 pt-2 border-t border-border/40",children:[S.jsxs("h4",{className:"text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2",children:[S.jsx(Eb,{className:"w-3.5 h-3.5 text-muted-foreground"}),"Technologies & Frameworks"]}),S.jsx("div",{className:"flex flex-wrap gap-2 pt-1",children:t.tech.map((i,r)=>S.jsx("span",{className:"px-3 py-1 text-xs rounded-md bg-muted/50 text-foreground/80 border border-border/40 font-mono",children:i},r))})]}),S.jsx("div",{className:"flex justify-end gap-3 pt-4 border-t border-border/40",children:S.jsx(ss,{variant:"outline",onClick:n,className:"border-border/60 hover:bg-muted/40",children:"Close"})})]})]})}):null,gC=t=>{switch(t){case"Medical XR":return"bg-cyan-500/10 text-cyan-300 border-cyan-500/30";case"Unreal Engine 5":return"bg-purple-500/10 text-purple-300 border-purple-500/30";case"Healthcare & Web3D":return"bg-emerald-500/10 text-emerald-300 border-emerald-500/30";case"AI & Vision":return"bg-amber-500/10 text-amber-300 border-amber-500/30";case"Games & VR":return"bg-rose-500/10 text-rose-300 border-rose-500/30";default:return"bg-primary/20 text-primary border-primary/30"}},vC=()=>{const[t,e]=N.useState("All"),[n,i]=N.useState(null),r=t==="All"?al:al.filter(o=>o.category===t),s=o=>o==="All"?al.length:al.filter(a=>a.category===o).length;return S.jsxs("section",{id:"projects",className:"py-28 relative",children:[S.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-cyan-500/5 via-indigo-500/5 to-purple-500/5 blur-[140px] pointer-events-none rounded-full"}),S.jsx("div",{className:"container mx-auto px-6 relative z-10",children:S.jsxs("div",{className:"max-w-7xl mx-auto",children:[S.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-14",children:[S.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4",children:[S.jsx(j_,{className:"w-3.5 h-3.5"})," Production Portfolio"]}),S.jsxs("h2",{className:"text-4xl md:text-6xl font-black mb-4 tracking-tight",children:["Featured ",S.jsx("span",{className:"gradient-text",children:"Projects & Systems"})]}),S.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto mb-6 rounded-full"}),S.jsx("p",{className:"text-zinc-400 text-base md:text-lg",children:"Explore 13 production systems engineered across Medical XR, Unreal Engine 5 procedural pipelines, Web3D healthcare kiosks, and edge AI computer vision."})]}),S.jsx("div",{className:"flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-14",children:Ob.map(o=>{const a=s(o),l=t===o;return S.jsxs("button",{onClick:()=>e(o),className:`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 flex items-center gap-2 border ${l?"bg-gradient-to-r from-cyan-500 to-indigo-600 text-white border-transparent shadow-lg shadow-cyan-500/25 scale-105":"bg-[#0E101A]/80 text-zinc-400 border-white/[0.08] hover:border-white/25 hover:text-white backdrop-blur-md"}`,children:[S.jsx("span",{children:o}),S.jsx("span",{className:`text-[11px] px-2 py-0.5 rounded-full font-semibold ${l?"bg-white/20 text-white":"bg-white/[0.06] text-zinc-400"}`,children:a})]},o)})}),S.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:r.map(o=>S.jsxs(Li,{onClick:()=>i(o),className:`group relative flex flex-col justify-between p-7 rounded-2xl bg-[#0D0F1A]/85 backdrop-blur-xl border border-white/[0.08] hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer overflow-hidden ${o.featured?"ring-1 ring-cyan-500/30":""}`,children:[o.featured&&S.jsx("div",{className:"absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"}),S.jsxs("div",{children:[S.jsxs("div",{className:"flex items-center justify-between gap-2 mb-4",children:[S.jsx(q_,{className:`text-xs px-2.5 py-0.5 border ${gC(o.category)}`,children:o.category}),o.featured&&S.jsxs("span",{className:"text-[11px] font-semibold text-cyan-400 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20",children:[S.jsx(Y_,{className:"w-3 h-3 text-cyan-400"})," Flagship"]})]}),S.jsxs("h3",{className:"text-xl md:text-2xl font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors flex items-center justify-between",children:[S.jsx("span",{children:o.title}),S.jsx(Yg,{className:"w-4 h-4 text-zinc-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 ml-2"})]}),S.jsx("p",{className:"text-xs font-semibold text-cyan-400/90 mb-3 tracking-wide",children:o.subtitle}),S.jsxs("div",{className:"mb-3",children:[S.jsx("span",{className:"text-[11px] uppercase tracking-wider font-semibold text-zinc-500",children:"Role:"}),S.jsx("span",{className:"text-xs text-zinc-300 font-medium ml-1.5",children:o.role})]}),S.jsx("p",{className:"text-sm text-zinc-400 leading-relaxed mb-4",children:o.shortDescription})]}),S.jsxs("div",{className:"pt-4 border-t border-white/[0.08]",children:[S.jsxs("div",{className:"flex flex-wrap gap-1.5 mb-3.5",children:[o.tech.slice(0,4).map((a,l)=>S.jsx("span",{className:"text-[11px] px-2.5 py-0.5 bg-white/[0.04] text-zinc-300 rounded-md border border-white/[0.08] font-mono group-hover:border-white/20 transition-colors",children:a},l)),o.tech.length>4&&S.jsxs("span",{className:"text-[11px] px-2 py-0.5 text-zinc-500 font-mono",children:["+",o.tech.length-4]})]}),S.jsxs("div",{className:"flex items-center text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors",children:[S.jsx("span",{children:"View Architecture & Case Study"}),S.jsx(Yg,{className:"ml-1 w-3.5 h-3.5"})]})]})]},o.id))})]})}),S.jsx(mC,{project:n,isOpen:!!n,onClose:()=>i(null)})]})},xC=()=>{const t=[{icon:W_,title:"Spatial Computing & Medical XR",description:"Mission-critical XR applications with sub-100ms video streaming, surgical endoscope feeds, and volumetric medical data visualization.",features:["Operating theatre live camera & endoscope video pipelines","Targeted headsets: Microsoft HoloLens 2, XREAL Air, Meta Quest","MRTK & OpenXR gesture interaction and spatial anchoring","Interactive 3D anatomical reconstruction from CT, MRI, and X-ray"]},{icon:Up,title:"Unreal Engine 5 & Procedural C++ Systems",description:"High-performance C++ pipelines converting raw architectural drawings into real-time interactive 3D simulations without manual modeling.",features:["Automated 2D CAD/DXF-to-3D procedural building engines","Custom C++ mesh generation via UProceduralMeshComponent","Geometric clipping algorithms for complex polygon room tile contours","Runtime interior customization and dynamic asset swapping"]},{icon:X_,title:"Interactive Kiosks & Web3D Platforms",description:"Commercial rehabilitation stations, multi-modal floor projections, and zero-trust encrypted telemetry for clinical deployments.",features:["Hardened Linux (Ubuntu) & Windows Electron kiosk architectures","Zero-trust E2EE crypto tunnel (X25519, HKDF-SHA256, AES-256-GCM)","Offline-first IndexedDB metric sync queues with automatic retries","Modular Three.js / WebGL architecture and AI voice recognition"]},{icon:Fp,title:"Computer Vision & Edge AI",description:"Real-time vision pipelines that eliminate input latency and transform standard camera feeds into controller-free interactive experiences.",features:["DirectShow camera capture (cv2.CAP_DSHOW) eliminating buffer lag","Hybrid ML models combining MediaPipe skeletal landmarks with YOLO/ONNX","Controller-free full-body games (Fruit Samurai, Alien Runner, etc.)","Biometric distance tracking and iris localization algorithms"]}];return S.jsx("section",{id:"services",className:"py-28 relative",children:S.jsx("div",{className:"container mx-auto px-6",children:S.jsxs("div",{className:"max-w-6xl mx-auto",children:[S.jsxs("div",{className:"text-center mb-14",children:[S.jsxs("h2",{className:"text-4xl md:text-6xl font-black mb-4 tracking-tight",children:["Engineering ",S.jsx("span",{className:"gradient-text",children:"Services & Capabilities"})]}),S.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto mb-6 rounded-full"}),S.jsx("p",{className:"text-zinc-400 text-base md:text-lg max-w-2xl mx-auto",children:"Specialized engineering consulting and end-to-end development for spatial computing, procedural 3D, and clinical kiosk hardware."})]}),S.jsx("div",{className:"grid md:grid-cols-2 gap-8",children:t.map((e,n)=>{const i=e.icon;return S.jsxs(Li,{className:"p-8 md:p-10 rounded-3xl bg-[#0D0F1A]/85 backdrop-blur-xl border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 shadow-2xl flex flex-col justify-between hover:-translate-y-1 relative overflow-hidden",children:[S.jsx("div",{className:"absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"}),S.jsxs("div",{children:[S.jsx("div",{className:"w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-6",children:S.jsx(i,{className:"w-7 h-7 text-cyan-400"})}),S.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-white mb-3",children:e.title}),S.jsx("p",{className:"text-zinc-400 mb-6 text-sm md:text-base leading-relaxed",children:e.description}),S.jsx("ul",{className:"space-y-3 pt-5 border-t border-white/[0.08]",children:e.features.map((r,s)=>S.jsxs("li",{className:"flex items-start gap-3",children:[S.jsx(hu,{className:"w-4 h-4 text-cyan-400 flex-shrink-0 mt-1"}),S.jsx("span",{className:"text-sm text-zinc-300 leading-relaxed",children:r})]},s))})]})]},n)})})]})})})},Gf=N.forwardRef(({className:t,type:e,...n},i)=>S.jsx("input",{type:e,className:Ut("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:i,...n}));Gf.displayName="Input";const Fy=N.forwardRef(({className:t,...e},n)=>S.jsx("textarea",{className:Ut("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:n,...e}));Fy.displayName="Textarea";const _C=1,yC=1e6;let id=0;function SC(){return id=(id+1)%Number.MAX_SAFE_INTEGER,id.toString()}const rd=new Map,l0=t=>{if(rd.has(t))return;const e=setTimeout(()=>{rd.delete(t),ra({type:"REMOVE_TOAST",toastId:t})},yC);rd.set(t,e)},MC=(t,e)=>{switch(e.type){case"ADD_TOAST":return{...t,toasts:[e.toast,...t.toasts].slice(0,_C)};case"UPDATE_TOAST":return{...t,toasts:t.toasts.map(n=>n.id===e.toast.id?{...n,...e.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=e;return n?l0(n):t.toasts.forEach(i=>{l0(i.id)}),{...t,toasts:t.toasts.map(i=>i.id===n||n===void 0?{...i,open:!1}:i)}}case"REMOVE_TOAST":return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(n=>n.id!==e.toastId)}}},ec=[];let tc={toasts:[]};function ra(t){tc=MC(tc,t),ec.forEach(e=>{e(tc)})}function wC({...t}){const e=SC(),n=r=>ra({type:"UPDATE_TOAST",toast:{...r,id:e}}),i=()=>ra({type:"DISMISS_TOAST",toastId:e});return ra({type:"ADD_TOAST",toast:{...t,id:e,open:!0,onOpenChange:r=>{r||i()}}}),{id:e,dismiss:i,update:n}}function Oy(){const[t,e]=N.useState(tc);return N.useEffect(()=>(ec.push(e),()=>{const n=ec.indexOf(e);n>-1&&ec.splice(n,1)}),[t]),{...t,toast:wC,dismiss:n=>ra({type:"DISMISS_TOAST",toastId:n})}}class Fa{constructor(e=0,n="Network Error"){this.status=e,this.text=n}}const EC=()=>{if(!(typeof localStorage>"u"))return{get:t=>Promise.resolve(localStorage.getItem(t)),set:(t,e)=>Promise.resolve(localStorage.setItem(t,e)),remove:t=>Promise.resolve(localStorage.removeItem(t))}},en={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:EC()},Wp=t=>t?typeof t=="string"?{publicKey:t}:t.toString()==="[object Object]"?t:{}:{},bC=(t,e="https://api.emailjs.com")=>{if(!t)return;const n=Wp(t);en.publicKey=n.publicKey,en.blockHeadless=n.blockHeadless,en.storageProvider=n.storageProvider,en.blockList=n.blockList,en.limitRate=n.limitRate,en.origin=n.origin||e},ky=async(t,e,n={})=>{const i=await fetch(en.origin+t,{method:"POST",headers:n,body:e}),r=await i.text(),s=new Fa(i.status,r);if(i.ok)return s;throw s},By=(t,e,n)=>{if(!t||typeof t!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n||typeof n!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},TC=t=>{if(t&&t.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},zy=t=>t.webdriver||!t.languages||t.languages.length===0,Vy=()=>new Fa(451,"Unavailable For Headless Browser"),CC=(t,e)=>{if(!Array.isArray(t))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"},AC=t=>{var e;return!((e=t.list)!=null&&e.length)||!t.watchVariable},RC=(t,e)=>t instanceof FormData?t.get(e):t[e],Hy=(t,e)=>{if(AC(t))return!1;CC(t.list,t.watchVariable);const n=RC(e,t.watchVariable);return typeof n!="string"?!1:t.list.includes(n)},Gy=()=>new Fa(403,"Forbidden"),PC=(t,e)=>{if(typeof t!="number"||t<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a non-empty string"},NC=async(t,e,n)=>{const i=Number(await n.get(t)||0);return e-Date.now()+i},Wy=async(t,e,n)=>{if(!e.throttle||!n)return!1;PC(e.throttle,e.id);const i=e.id||t;return await NC(i,e.throttle,n)>0?!0:(await n.set(i,Date.now().toString()),!1)},jy=()=>new Fa(429,"Too Many Requests"),LC=async(t,e,n,i)=>{const r=Wp(i),s=r.publicKey||en.publicKey,o=r.blockHeadless||en.blockHeadless,a=r.storageProvider||en.storageProvider,l={...en.blockList,...r.blockList},c={...en.limitRate,...r.limitRate};return o&&zy(navigator)?Promise.reject(Vy()):(By(s,t,e),TC(n),n&&Hy(l,n)?Promise.reject(Gy()):await Wy(location.pathname,c,a)?Promise.reject(jy()):ky("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:s,service_id:t,template_id:e,template_params:n}),{"Content-type":"application/json"}))},DC=t=>{if(!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},IC=t=>typeof t=="string"?document.querySelector(t):t,UC=async(t,e,n,i)=>{const r=Wp(i),s=r.publicKey||en.publicKey,o=r.blockHeadless||en.blockHeadless,a=en.storageProvider||r.storageProvider,l={...en.blockList,...r.blockList},c={...en.limitRate,...r.limitRate};if(o&&zy(navigator))return Promise.reject(Vy());const f=IC(n);By(s,t,e),DC(f);const h=new FormData(f);return Hy(l,h)?Promise.reject(Gy()):await Wy(location.pathname,c,a)?Promise.reject(jy()):(h.append("lib_version","4.4.1"),h.append("service_id",t),h.append("template_id",e),h.append("user_id",s),ky("/api/v1.0/email/send-form",h))},FC={init:bC,send:LC,sendForm:UC,EmailJSResponseStatus:Fa},OC=()=>{const{toast:t}=Oy(),[e,n]=N.useState({name:"",email:"",message:""}),[i,r]=N.useState(!1),s=async a=>{a.preventDefault(),r(!0),t({title:"Sending your message...",description:"Please wait a moment."});try{const l={from_name:e.name,from_email:e.email,message:e.message,to_name:"Ravi Patel"},c={to_name:e.name,from_name:e.name,from_email:e.email,to_email:e.email,message:e.message};await FC.send("service_9g0u4yf","template_xoptwyz",c,"kw9uQYqcvZDSGm55g"),t({title:"Message sent!",description:"Thank you for reaching out. I'll get back to you soon."}),n({name:"",email:"",message:""})}catch(l){t({title:"Failed to send message",description:"Please check your internet connection and try again.",variant:"destructive"}),console.error("EmailJS error:",l)}finally{r(!1)}},o=[{icon:xb,label:"Email",value:"rp.ravipatel90@gmail.com",link:"mailto:rp.ravipatel90@gmail.com"},{icon:Sb,label:"Phone",value:"+91 76985 12692",link:"tel:+917698512692"},{icon:gb,label:"LinkedIn",value:"linkedin.com/in/ravi-patel-011839265",link:"https://linkedin.com/in/ravi-patel-011839265"},{icon:mb,label:"GitHub",value:"github.com/raviif",link:"https://github.com/raviif"},{icon:_b,label:"Location",value:"Karamsad, Anand, Gujarat, India",link:"https://maps.google.com/?q=Karamsad,Anand,Gujarat"}];return S.jsx("section",{id:"contact",className:"py-28 relative",children:S.jsx("div",{className:"container mx-auto px-6",children:S.jsxs("div",{className:"max-w-5xl mx-auto",children:[S.jsxs("div",{className:"text-center mb-14",children:[S.jsxs("h2",{className:"text-4xl md:text-6xl font-black mb-4 tracking-tight",children:["Let's ",S.jsx("span",{className:"gradient-text",children:"Connect"})]}),S.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto mb-6 rounded-full"}),S.jsx("p",{className:"text-zinc-400 text-base md:text-lg max-w-2xl mx-auto",children:"I am open to discuss high-impact software engineering roles, XR spatial computing architectures, or specialized contract systems."})]}),S.jsxs("div",{className:"grid md:grid-cols-2 gap-8 items-start",children:[S.jsx("div",{className:"space-y-4",children:o.map((a,l)=>{const c=a.icon;return S.jsx(Li,{className:"p-5 rounded-2xl bg-[#0D0F1A]/85 backdrop-blur-xl border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 shadow-lg group hover:-translate-y-0.5",children:S.jsxs("a",{href:a.link,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-4",children:[S.jsx("div",{className:"w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors flex-shrink-0",children:S.jsx(c,{className:"w-5 h-5 text-cyan-400"})}),S.jsxs("div",{children:[S.jsx("p",{className:"text-xs font-semibold text-zinc-500 uppercase tracking-wider",children:a.label}),S.jsx("p",{className:"text-sm md:text-base text-zinc-200 group-hover:text-cyan-300 transition-colors font-medium",children:a.value})]})]})},l)})}),S.jsxs(Li,{className:"p-8 md:p-10 rounded-3xl bg-[#0D0F1A]/85 backdrop-blur-xl border border-white/[0.08] shadow-2xl relative overflow-hidden",children:[S.jsx("div",{className:"absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"}),S.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Send Direct Message"}),S.jsx("p",{className:"text-xs text-zinc-400 mb-6",children:"Receive an instant auto-confirmation reply upon submission."}),S.jsxs("form",{onSubmit:s,className:"space-y-5",children:[S.jsxs("div",{children:[S.jsx("label",{htmlFor:"name",className:"block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2",children:"Your Name"}),S.jsx(Gf,{id:"name",value:e.name,onChange:a=>n({...e,name:a.target.value}),placeholder:"Enter your name",required:!0,className:"bg-white/[0.03] border-white/[0.1] focus:border-cyan-400 rounded-xl text-white placeholder:text-zinc-600 h-11"})]}),S.jsxs("div",{children:[S.jsx("label",{htmlFor:"email",className:"block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2",children:"Your Email"}),S.jsx(Gf,{id:"email",type:"email",value:e.email,onChange:a=>n({...e,email:a.target.value}),placeholder:"name@company.com",required:!0,className:"bg-white/[0.03] border-white/[0.1] focus:border-cyan-400 rounded-xl text-white placeholder:text-zinc-600 h-11"})]}),S.jsxs("div",{children:[S.jsx("label",{htmlFor:"message",className:"block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2",children:"Project Details / Inquiry"}),S.jsx(Fy,{id:"message",value:e.message,onChange:a=>n({...e,message:a.target.value}),placeholder:"Describe your project, team, or opportunity...",required:!0,rows:4,className:"bg-white/[0.03] border-white/[0.1] focus:border-cyan-400 rounded-xl text-white placeholder:text-zinc-600 resize-none"})]}),S.jsx(ss,{type:"submit",disabled:i,className:"w-full h-11 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all group disabled:opacity-50",children:i?S.jsxs(S.Fragment,{children:["Sending...",S.jsx(vb,{className:"ml-2 w-4 h-4 animate-spin"})]}):S.jsxs(S.Fragment,{children:["Send Message",S.jsx(wb,{className:"ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"})]})})]})]})]})]})})})},kC=()=>S.jsx("footer",{className:"py-12 border-t border-border/40 bg-navy-dark/60 backdrop-blur-md relative overflow-hidden",children:S.jsx("div",{className:"container mx-auto px-6 relative z-10",children:S.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left",children:[S.jsxs("div",{children:[S.jsx("span",{className:"text-lg font-black gradient-text tracking-wider",children:"RAVI PATEL"}),S.jsx("p",{className:"text-xs text-muted-foreground mt-1 font-mono",children:"Software & Game Developer • Spatial Computing & Native Systems"})]}),S.jsxs("div",{className:"flex items-center gap-6 text-xs text-muted-foreground font-mono",children:[S.jsx("span",{children:"Unity (C#)"}),S.jsx("span",{children:"•"}),S.jsx("span",{children:"Unreal Engine 5 (C++)"}),S.jsx("span",{children:"•"}),S.jsx("span",{children:"Three.js / WebGL"})]}),S.jsxs("p",{className:"text-xs text-muted-foreground font-mono",children:["© ",new Date().getFullYear()," Ravi Patel. Crafted for High Performance."]})]})})});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jp="186",BC=0,c0=1,zC=2,nc=1,VC=2,$o=3,as=0,Pn=1,Ei=2,Ri=0,sa=1,Wf=2,u0=3,d0=4,HC=5,Is=100,GC=101,WC=102,jC=103,XC=104,$C=200,YC=201,qC=202,KC=203,Xy=204,$y=205,ZC=206,QC=207,JC=208,eA=209,tA=210,nA=211,iA=212,rA=213,sA=214,jf=0,Xf=1,$f=2,Ea=3,Yf=4,qf=5,Kf=6,Zf=7,Yy=0,oA=1,aA=2,Pi=0,qy=1,Ky=2,Zy=3,Xp=4,Qy=5,Jy=6,eS=7,tS=300,ls=301,po=302,sd=303,od=304,gu=306,ba=1e3,ji=1001,Qf=1002,tn=1003,lA=1004,hl=1005,nn=1006,ad=1007,Kr=1008,Bn=1009,nS=1010,iS=1011,Ta=1012,$p=1013,Di=1014,bi=1015,Nn=1016,Yp=1017,qp=1018,Ca=1020,rS=35902,sS=35899,oS=1021,aS=1022,li=1023,Ji=1026,Zr=1027,lS=1028,Kp=1029,cs=1030,Zp=1031,Qp=1033,ic=33776,rc=33777,sc=33778,oc=33779,Jf=35840,eh=35841,th=35842,nh=35843,ih=36196,rh=37492,sh=37496,oh=37488,ah=37489,Fc=37490,lh=37491,ch=37808,uh=37809,dh=37810,fh=37811,hh=37812,ph=37813,mh=37814,gh=37815,vh=37816,xh=37817,_h=37818,yh=37819,Sh=37820,Mh=37821,wh=36492,Eh=36494,bh=36495,Th=36283,Ch=36284,Oc=36285,Ah=36286,cA=3200,Rh=0,uA=1,Sr="",On="srgb",kc="srgb-linear",Bc="linear",at="srgb",ld=7680,dA=519,fA=512,hA=513,pA=514,Jp=515,mA=516,gA=517,em=518,vA=519,xA=35044,f0="300 es",Ti=2e3,Aa=2001;function _A(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function zc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function yA(){const t=zc("canvas");return t.style.display="block",t}const h0={};function p0(...t){const e="THREE."+t.shift();console.log(e,...t)}function cS(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function De(...t){t=cS(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function nt(...t){t=cS(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function io(...t){const e=t.join(" ");e in h0||(h0[e]=!0,De(...t))}function SA(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const MA={[jf]:Xf,[$f]:Kf,[Yf]:Zf,[Ea]:qf,[Xf]:jf,[Kf]:$f,[Zf]:Yf,[qf]:Ea};class fs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cd=Math.PI/180,Ph=180/Math.PI;function Oa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(un[t&255]+un[t>>8&255]+un[t>>16&255]+un[t>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[n&63|128]+un[n>>8&255]+"-"+un[n>>16&255]+un[n>>24&255]+un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]).toLowerCase()}function Ke(t,e,n){return Math.max(e,Math.min(n,t))}function wA(t,e){return(t%e+e)%e}function ud(t,e,n){return(1-n)*t+n*e}function Uo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function En(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const pm=class pm{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};pm.prototype.isVector2=!0;let Le=pm;class So{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3],d=s[o+0],m=s[o+1],x=s[o+2],v=s[o+3];if(h!==v||l!==d||c!==m||f!==x){let p=l*d+c*m+f*x+h*v;p<0&&(d=-d,m=-m,x=-x,v=-v,p=-p);let u=1-a;if(p<.9995){const g=Math.acos(p),M=Math.sin(g);u=Math.sin(u*g)/M,a=Math.sin(a*g)/M,l=l*u+d*a,c=c*u+m*a,f=f*u+x*a,h=h*u+v*a}else{l=l*u+d*a,c=c*u+m*a,f=f*u+x*a,h=h*u+v*a;const g=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=g,c*=g,f*=g,h*=g}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[o],d=s[o+1],m=s[o+2],x=s[o+3];return e[n]=a*x+f*h+l*m-c*d,e[n+1]=l*x+f*d+c*h-a*m,e[n+2]=c*x+f*m+a*d-l*h,e[n+3]=f*x-a*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),h=a(s/2),d=l(i/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=d*f*h+c*m*x,this._y=c*m*h-d*f*x,this._z=c*f*x+d*m*h,this._w=c*f*h-d*m*x;break;case"YXZ":this._x=d*f*h+c*m*x,this._y=c*m*h-d*f*x,this._z=c*f*x-d*m*h,this._w=c*f*h+d*m*x;break;case"ZXY":this._x=d*f*h-c*m*x,this._y=c*m*h+d*f*x,this._z=c*f*x+d*m*h,this._w=c*f*h-d*m*x;break;case"ZYX":this._x=d*f*h-c*m*x,this._y=c*m*h+d*f*x,this._z=c*f*x-d*m*h,this._w=c*f*h+d*m*x;break;case"YZX":this._x=d*f*h+c*m*x,this._y=c*m*h+d*f*x,this._z=c*f*x-d*m*h,this._w=c*f*h-d*m*x;break;case"XZY":this._x=d*f*h-c*m*x,this._y=c*m*h-d*f*x,this._z=c*f*x+d*m*h,this._w=c*f*h+d*m*x;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const mm=class mm{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(m0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(m0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*f,this.y=i+l*f+a*c-s*h,this.z=r+l*h+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return dd.copy(this).projectOnVector(e),this.sub(dd)}reflect(e){return this.sub(dd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};mm.prototype.isVector3=!0;let O=mm;const dd=new O,m0=new So,gm=class gm{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],h=i[7],d=i[2],m=i[5],x=i[8],v=r[0],p=r[3],u=r[6],g=r[1],M=r[4],_=r[7],E=r[2],b=r[5],C=r[8];return s[0]=o*v+a*g+l*E,s[3]=o*p+a*M+l*b,s[6]=o*u+a*_+l*C,s[1]=c*v+f*g+h*E,s[4]=c*p+f*M+h*b,s[7]=c*u+f*_+h*C,s[2]=d*v+m*g+x*E,s[5]=d*p+m*M+x*b,s[8]=d*u+m*_+x*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=f*o-a*c,d=a*l-f*s,m=c*s-o*l,x=n*h+i*d+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=h*v,e[1]=(r*c-f*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(f*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=m*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return io("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fd.makeScale(e,n)),this}rotate(e){return io("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fd.makeRotation(-e)),this}translate(e,n){return io("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};gm.prototype.isMatrix3=!0;let Fe=gm;const fd=new Fe,g0=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),v0=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function EA(){const t={enabled:!0,workingColorSpace:kc,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===at&&(r.r=$i(r.r),r.g=$i(r.g),r.b=$i(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===at&&(r.r=ro(r.r),r.g=ro(r.g),r.b=ro(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Sr?Bc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return io("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return io("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[kc]:{primaries:e,whitePoint:i,transfer:Bc,toXYZ:g0,fromXYZ:v0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:e,whitePoint:i,transfer:at,toXYZ:g0,fromXYZ:v0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),t}const Ze=EA();function $i(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ro(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ss;class bA{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ss===void 0&&(Ss=zc("canvas")),Ss.width=e.width,Ss.height=e.height;const r=Ss.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ss}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=zc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=$i(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor($i(n[i]/255)*255):n[i]=$i(n[i]);return{data:n,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let TA=0;class tm{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:TA++}),this.uuid=Oa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(hd(r[o].image)):s.push(hd(r[o]))}else s=hd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function hd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?bA.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let CA=0;const pd=new O;class pn extends fs{constructor(e=pn.DEFAULT_IMAGE,n=pn.DEFAULT_MAPPING,i=ji,r=ji,s=nn,o=Kr,a=li,l=Bn,c=pn.DEFAULT_ANISOTROPY,f=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:CA++}),this.uuid=Oa(),this.name="",this.source=new tm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(pd).x}get height(){return this.source.getSize(pd).y}get depth(){return this.source.getSize(pd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){De(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){De(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ba:e.x=e.x-Math.floor(e.x);break;case ji:e.x=e.x<0?0:1;break;case Qf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ba:e.y=e.y-Math.floor(e.y);break;case ji:e.y=e.y<0?0:1;break;case Qf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=tS;pn.DEFAULT_ANISOTROPY=1;const vm=class vm{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],m=l[5],x=l[9],v=l[2],p=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-v)<.01&&Math.abs(x-p)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+v)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(c+1)/2,_=(m+1)/2,E=(u+1)/2,b=(f+d)/4,C=(h+v)/4,y=(x+p)/4;return M>_&&M>E?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=b/i,s=C/i):_>E?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=b/r,s=y/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=C/s,r=y/s),this.set(i,r,s,n),this}let g=Math.sqrt((p-x)*(p-x)+(h-v)*(h-v)+(d-f)*(d-f));return Math.abs(g)<.001&&(g=1),this.x=(p-x)/g,this.y=(h-v)/g,this.z=(d-f)/g,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this.w=Ke(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this.w=Ke(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};vm.prototype.isVector4=!0;let At=vm;class AA extends fs{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new At(0,0,e,n),this.scissorTest=!1,this.viewport=new At(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new pn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new tm(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sn extends AA{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class uS extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class RA extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Xc=class Xc{constructor(e,n,i,r,s,o,a,l,c,f,h,d,m,x,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,h,d,m,x,v,p)}set(e,n,i,r,s,o,a,l,c,f,h,d,m,x,v,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=m,u[7]=x,u[11]=v,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Ms.setFromMatrixColumn(e,0).length(),s=1/Ms.setFromMatrixColumn(e,1).length(),o=1/Ms.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*f,m=o*h,x=a*f,v=a*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=m+x*c,n[5]=d-v*c,n[9]=-a*l,n[2]=v-d*c,n[6]=x+m*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*f,m=l*h,x=c*f,v=c*h;n[0]=d+v*a,n[4]=x*a-m,n[8]=o*c,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=m*a-x,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*f,m=l*h,x=c*f,v=c*h;n[0]=d-v*a,n[4]=-o*h,n[8]=x+m*a,n[1]=m+x*a,n[5]=o*f,n[9]=v-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*f,m=o*h,x=a*f,v=a*h;n[0]=l*f,n[4]=x*c-m,n[8]=d*c+v,n[1]=l*h,n[5]=v*c+d,n[9]=m*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,x=a*l,v=a*c;n[0]=l*f,n[4]=v-d*h,n[8]=x*h+m,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=m*h+x,n[10]=d-v*h}else if(e.order==="XZY"){const d=o*l,m=o*c,x=a*l,v=a*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=d*h+v,n[5]=o*f,n[9]=m*h-x,n[2]=x*h-m,n[6]=a*f,n[10]=v*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(PA,e,NA)}lookAt(e,n,i){const r=this.elements;return Dn.subVectors(e,n),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),cr.crossVectors(i,Dn),cr.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),cr.crossVectors(i,Dn)),cr.normalize(),pl.crossVectors(Dn,cr),r[0]=cr.x,r[4]=pl.x,r[8]=Dn.x,r[1]=cr.y,r[5]=pl.y,r[9]=Dn.y,r[2]=cr.z,r[6]=pl.z,r[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],h=i[5],d=i[9],m=i[13],x=i[2],v=i[6],p=i[10],u=i[14],g=i[3],M=i[7],_=i[11],E=i[15],b=r[0],C=r[4],y=r[8],A=r[12],P=r[1],I=r[5],D=r[9],G=r[13],L=r[2],z=r[6],K=r[10],$=r[14],V=r[3],B=r[7],X=r[11],Z=r[15];return s[0]=o*b+a*P+l*L+c*V,s[4]=o*C+a*I+l*z+c*B,s[8]=o*y+a*D+l*K+c*X,s[12]=o*A+a*G+l*$+c*Z,s[1]=f*b+h*P+d*L+m*V,s[5]=f*C+h*I+d*z+m*B,s[9]=f*y+h*D+d*K+m*X,s[13]=f*A+h*G+d*$+m*Z,s[2]=x*b+v*P+p*L+u*V,s[6]=x*C+v*I+p*z+u*B,s[10]=x*y+v*D+p*K+u*X,s[14]=x*A+v*G+p*$+u*Z,s[3]=g*b+M*P+_*L+E*V,s[7]=g*C+M*I+_*z+E*B,s[11]=g*y+M*D+_*K+E*X,s[15]=g*A+M*G+_*$+E*Z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],m=e[14],x=e[3],v=e[7],p=e[11],u=e[15],g=l*m-c*d,M=a*m-c*h,_=a*d-l*h,E=o*m-c*f,b=o*d-l*f,C=o*h-a*f;return n*(v*g-p*M+u*_)-i*(x*g-p*E+u*b)+r*(x*M-v*E+u*C)-s*(x*_-v*b+p*C)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],f=e[10];return n*(o*f-a*c)-i*(s*f-a*l)+r*(s*c-o*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],m=e[11],x=e[12],v=e[13],p=e[14],u=e[15],g=n*a-i*o,M=n*l-r*o,_=n*c-s*o,E=i*l-r*a,b=i*c-s*a,C=r*c-s*l,y=f*v-h*x,A=f*p-d*x,P=f*u-m*x,I=h*p-d*v,D=h*u-m*v,G=d*u-m*p,L=g*G-M*D+_*I+E*P-b*A+C*y;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/L;return e[0]=(a*G-l*D+c*I)*z,e[1]=(r*D-i*G-s*I)*z,e[2]=(v*C-p*b+u*E)*z,e[3]=(d*b-h*C-m*E)*z,e[4]=(l*P-o*G-c*A)*z,e[5]=(n*G-r*P+s*A)*z,e[6]=(p*_-x*C-u*M)*z,e[7]=(f*C-d*_+m*M)*z,e[8]=(o*D-a*P+c*y)*z,e[9]=(i*P-n*D-s*y)*z,e[10]=(x*b-v*_+u*g)*z,e[11]=(h*_-f*b-m*g)*z,e[12]=(a*A-o*I-l*y)*z,e[13]=(n*I-i*A+r*y)*z,e[14]=(v*M-x*E-p*g)*z,e[15]=(f*E-h*M+d*g)*z,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,h=a+a,d=s*c,m=s*f,x=s*h,v=o*f,p=o*h,u=a*h,g=l*c,M=l*f,_=l*h,E=i.x,b=i.y,C=i.z;return r[0]=(1-(v+u))*E,r[1]=(m+_)*E,r[2]=(x-M)*E,r[3]=0,r[4]=(m-_)*b,r[5]=(1-(d+u))*b,r[6]=(p+g)*b,r[7]=0,r[8]=(x+M)*C,r[9]=(p-g)*C,r[10]=(1-(d+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let o=Ms.set(r[0],r[1],r[2]).length();const a=Ms.set(r[4],r[5],r[6]).length(),l=Ms.set(r[8],r[9],r[10]).length();s<0&&(o=-o),ti.copy(this);const c=1/o,f=1/a,h=1/l;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=f,ti.elements[5]*=f,ti.elements[6]*=f,ti.elements[8]*=h,ti.elements[9]*=h,ti.elements[10]*=h,n.setFromRotationMatrix(ti),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=Ti,l=!1){const c=this.elements,f=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),m=(i+r)/(i-r);let x,v;if(l)x=s/(o-s),v=o*s/(o-s);else if(a===Ti)x=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Aa)x=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ti,l=!1){const c=this.elements,f=2/(n-e),h=2/(i-r),d=-(n+e)/(n-e),m=-(i+r)/(i-r);let x,v;if(l)x=1/(o-s),v=o/(o-s);else if(a===Ti)x=-2/(o-s),v=-(o+s)/(o-s);else if(a===Aa)x=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=x,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Xc.prototype.isMatrix4=!0;let bt=Xc;const Ms=new O,ti=new bt,PA=new O(0,0,0),NA=new O(1,1,1),cr=new O,pl=new O,Dn=new O,x0=new bt,_0=new So;class Ur{constructor(e=0,n=0,i=0,r=Ur.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],h=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return x0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(x0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return _0.setFromEuler(this),this.setFromQuaternion(_0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ur.DEFAULT_ORDER="XYZ";class dS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let LA=0;const y0=new O,ws=new So,Fi=new bt,ml=new O,Fo=new O,DA=new O,IA=new So,S0=new O(1,0,0),M0=new O(0,1,0),w0=new O(0,0,1),E0={type:"added"},UA={type:"removed"},Es={type:"childadded",child:null},md={type:"childremoved",child:null};class Kt extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:LA++}),this.uuid=Oa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new O,n=new Ur,i=new So,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new Fe}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ws.setFromAxisAngle(e,n),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,n){return ws.setFromAxisAngle(e,n),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(S0,e)}rotateY(e){return this.rotateOnAxis(M0,e)}rotateZ(e){return this.rotateOnAxis(w0,e)}translateOnAxis(e,n){return y0.copy(e).applyQuaternion(this.quaternion),this.position.add(y0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(S0,e)}translateY(e){return this.translateOnAxis(M0,e)}translateZ(e){return this.translateOnAxis(w0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ml.copy(e):ml.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(Fo,ml,this.up):Fi.lookAt(ml,Fo,this.up),this.quaternion.setFromRotationMatrix(Fi),r&&(Fi.extractRotation(r.matrixWorld),ws.setFromRotationMatrix(Fi),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(E0),Es.child=e,this.dispatchEvent(Es),Es.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(UA),md.child=e,this.dispatchEvent(md),md.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(E0),Es.child=e,this.dispatchEvent(Es),Es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,e,DA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,IA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Kt.DEFAULT_UP=new O(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $n extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FA={type:"move"};class gd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=n.getJointPose(v,i),u=this._getHandJoint(c,v);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),m=.02,x=.005;c.inputState.pinching&&d>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(FA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new $n;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const fS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},gl={h:0,s:0,l:0};function vd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Oe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=wA(e,1),n=Ke(n,0,1),i=Ke(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=vd(o,s,e+1/3),this.g=vd(o,s,e),this.b=vd(o,s,e-1/3)}return Ze.colorSpaceToWorking(this,r),this}setStyle(e,n=On){function i(s){s!==void 0&&parseFloat(s)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:De("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=On){const i=fS[e.toLowerCase()];return i!==void 0?this.setHex(i,n):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return Ze.workingToColorSpace(dn.copy(this),e),Math.round(Ke(dn.r*255,0,255))*65536+Math.round(Ke(dn.g*255,0,255))*256+Math.round(Ke(dn.b*255,0,255))}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.workingToColorSpace(dn.copy(this),n);const i=dn.r,r=dn.g,s=dn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Ze.workingColorSpace){return Ze.workingToColorSpace(dn.copy(this),n),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=On){Ze.workingToColorSpace(dn.copy(this),e);const n=dn.r,i=dn.g,r=dn.b;return e!==On?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ur),this.setHSL(ur.h+e,ur.s+n,ur.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ur),e.getHSL(gl);const i=ud(ur.h,gl.h,n),r=ud(ur.s,gl.s,n),s=ud(ur.l,gl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new Oe;Oe.NAMES=fS;class nm{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Oe(e),this.density=n}clone(){return new nm(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class OA extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ur,this.environmentIntensity=1,this.environmentRotation=new Ur,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ni=new O,Oi=new O,xd=new O,ki=new O,bs=new O,Ts=new O,b0=new O,_d=new O,yd=new O,Sd=new O,Md=new At,wd=new At,Ed=new At;class ai{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ni.subVectors(e,n),r.cross(ni);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ni.subVectors(r,n),Oi.subVectors(i,n),xd.subVectors(e,n);const o=ni.dot(ni),a=ni.dot(Oi),l=ni.dot(xd),c=Oi.dot(Oi),f=Oi.dot(xd),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,m=(c*l-a*f)*d,x=(o*f-a*l)*d;return s.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ki.x),l.addScaledVector(o,ki.y),l.addScaledVector(a,ki.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Md.setScalar(0),wd.setScalar(0),Ed.setScalar(0),Md.fromBufferAttribute(e,n),wd.fromBufferAttribute(e,i),Ed.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Md,s.x),o.addScaledVector(wd,s.y),o.addScaledVector(Ed,s.z),o}static isFrontFacing(e,n,i,r){return ni.subVectors(i,n),Oi.subVectors(e,n),ni.cross(Oi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),ni.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ai.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ai.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;bs.subVectors(r,i),Ts.subVectors(s,i),_d.subVectors(e,i);const l=bs.dot(_d),c=Ts.dot(_d);if(l<=0&&c<=0)return n.copy(i);yd.subVectors(e,r);const f=bs.dot(yd),h=Ts.dot(yd);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(bs,o);Sd.subVectors(e,s);const m=bs.dot(Sd),x=Ts.dot(Sd);if(x>=0&&m<=x)return n.copy(s);const v=m*c-l*x;if(v<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(Ts,a);const p=f*x-m*h;if(p<=0&&h-f>=0&&m-x>=0)return b0.subVectors(s,r),a=(h-f)/(h-f+(m-x)),n.copy(r).addScaledVector(b0,a);const u=1/(p+v+d);return o=v*u,a=d*u,n.copy(i).addScaledVector(bs,o).addScaledVector(Ts,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ka{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ii.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ii.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ii.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ii):ii.fromBufferAttribute(s,o),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vl.copy(i.boundingBox)),vl.applyMatrix4(e.matrixWorld),this.union(vl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oo),xl.subVectors(this.max,Oo),Cs.subVectors(e.a,Oo),As.subVectors(e.b,Oo),Rs.subVectors(e.c,Oo),dr.subVectors(As,Cs),fr.subVectors(Rs,As),zr.subVectors(Cs,Rs);let n=[0,-dr.z,dr.y,0,-fr.z,fr.y,0,-zr.z,zr.y,dr.z,0,-dr.x,fr.z,0,-fr.x,zr.z,0,-zr.x,-dr.y,dr.x,0,-fr.y,fr.x,0,-zr.y,zr.x,0];return!bd(n,Cs,As,Rs,xl)||(n=[1,0,0,0,1,0,0,0,1],!bd(n,Cs,As,Rs,xl))?!1:(_l.crossVectors(dr,fr),n=[_l.x,_l.y,_l.z],bd(n,Cs,As,Rs,xl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Bi=[new O,new O,new O,new O,new O,new O,new O,new O],ii=new O,vl=new ka,Cs=new O,As=new O,Rs=new O,dr=new O,fr=new O,zr=new O,Oo=new O,xl=new O,_l=new O,Vr=new O;function bd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Vr.fromArray(t,s);const a=r.x*Math.abs(Vr.x)+r.y*Math.abs(Vr.y)+r.z*Math.abs(Vr.z),l=e.dot(Vr),c=n.dot(Vr),f=i.dot(Vr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const kt=new O,yl=new Le;let kA=0;class Ni extends fs{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kA++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=xA,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)yl.fromBufferAttribute(this,n),yl.applyMatrix3(e),this.setXY(n,yl.x,yl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix3(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix4(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyNormalMatrix(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.transformDirection(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Uo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=En(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Uo(n,this.array)),n}setX(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Uo(n,this.array)),n}setY(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Uo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Uo(n,this.array)),n}setW(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),i=En(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),i=En(i,this.array),r=En(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),i=En(i,this.array),r=En(r,this.array),s=En(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class hS extends Ni{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class pS extends Ni{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class st extends Ni{constructor(e,n,i){super(new Float32Array(e),n,i)}}const BA=new ka,ko=new O,Td=new O;class Ba{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):BA.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ko.subVectors(e,this.center);const n=ko.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ko,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Td.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ko.copy(e.center).add(Td)),this.expandByPoint(ko.copy(e.center).sub(Td))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let zA=0;const Xn=new bt,Cd=new Kt,Ps=new O,In=new ka,Bo=new ka,Xt=new O;class Wt extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zA++}),this.uuid=Oa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_A(e)?pS:hS)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,n,i){return Xn.makeTranslation(e,n,i),this.applyMatrix4(Xn),this}scale(e,n,i){return Xn.makeScale(e,n,i),this.applyMatrix4(Xn),this}lookAt(e){return Cd.lookAt(e),Cd.updateMatrix(),this.applyMatrix4(Cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new st(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ka);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];In.setFromBufferAttribute(s),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ba);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(In.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Bo.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(In.min,Bo.min),In.expandByPoint(Xt),Xt.addVectors(In.max,Bo.max),In.expandByPoint(Xt)):(In.expandByPoint(Bo.min),In.expandByPoint(Bo.max))}In.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Xt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Xt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Xt.fromBufferAttribute(a,c),l&&(Ps.fromBufferAttribute(e,c),Xt.add(Ps)),r=Math.max(r,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ni(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let y=0;y<i.count;y++)a[y]=new O,l[y]=new O;const c=new O,f=new O,h=new O,d=new Le,m=new Le,x=new Le,v=new O,p=new O;function u(y,A,P){c.fromBufferAttribute(i,y),f.fromBufferAttribute(i,A),h.fromBufferAttribute(i,P),d.fromBufferAttribute(s,y),m.fromBufferAttribute(s,A),x.fromBufferAttribute(s,P),f.sub(c),h.sub(c),m.sub(d),x.sub(d);const I=1/(m.x*x.y-x.x*m.y);isFinite(I)&&(v.copy(f).multiplyScalar(x.y).addScaledVector(h,-m.y).multiplyScalar(I),p.copy(h).multiplyScalar(m.x).addScaledVector(f,-x.x).multiplyScalar(I),a[y].add(v),a[A].add(v),a[P].add(v),l[y].add(p),l[A].add(p),l[P].add(p))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let y=0,A=g.length;y<A;++y){const P=g[y],I=P.start,D=P.count;for(let G=I,L=I+D;G<L;G+=3)u(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const M=new O,_=new O,E=new O,b=new O;function C(y){E.fromBufferAttribute(r,y),b.copy(E);const A=a[y];M.copy(A),M.sub(E.multiplyScalar(E.dot(A))).normalize(),_.crossVectors(b,A);const I=_.dot(l[y])<0?-1:1;o.setXYZW(y,M.x,M.y,M.z,I)}for(let y=0,A=g.length;y<A;++y){const P=g[y],I=P.start,D=P.count;for(let G=I,L=I+D;G<L;G+=3)C(e.getX(G+0)),C(e.getX(G+1)),C(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Ni(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,f=new O,h=new O;if(e)for(let d=0,m=e.count;d<m;d+=3){const x=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,p),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),a.add(f),l.add(f),c.add(f),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Xt.fromBufferAttribute(e,n),Xt.normalize(),e.setXYZ(n,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,h=a.normalized,d=new c.constructor(l.length*f);let m=0,x=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*f;for(let u=0;u<f;u++)d[x++]=c[m++]}return new Ni(d,f,h)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Wt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,h=c.length;f<h;f++){const d=c[f],m=e(d,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let d=0,m=h.length;d<m;d++)f.push(h[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ad=new O,VA=new O,HA=new Fe;class xr{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ad.subVectors(i,n).cross(VA.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Ad),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||HA.getNormalMatrix(e),r=this.coplanarPoint(Ad).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let GA=0;class hs extends fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:GA++}),this.uuid=Oa(),this.name="",this.type="Material",this.blending=sa,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xy,this.blendDst=$y,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=Ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dA,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ld,this.stencilZFail=ld,this.stencilZPass=ld,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){De(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){De(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Oe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new xr().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Le().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Le().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const zi=new O,Rd=new O,Sl=new O,Ml=new O;class im{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=zi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,n),zi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Rd.copy(e).add(n).multiplyScalar(.5),Sl.copy(n).sub(e).normalize(),Ml.copy(this.origin).sub(Rd);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Sl),a=Ml.dot(this.direction),l=-Ml.dot(Sl),c=Ml.lengthSq(),f=Math.abs(1-o*o);let h,d,m,x;if(f>0)if(h=o*l-a,d=o*a-l,x=s*f,h>=0)if(d>=-x)if(d<=x){const v=1/f;h*=v,d*=v,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d<=-x?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=x?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Rd).addScaledVector(Sl,d),m}intersectSphere(e,n){if(e.radius<0)return null;zi.subVectors(e.center,this.origin);const i=zi.dot(this.direction),r=zi.dot(zi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,n,i,r,s){const o=this.origin,a=this.direction,l=a.x,c=a.y,f=a.z,h=e.x-o.x,d=e.y-o.y,m=e.z-o.z,x=n.x-o.x,v=n.y-o.y,p=n.z-o.z,u=i.x-o.x,g=i.y-o.y,M=i.z-o.z,_=Math.abs(l),E=Math.abs(c),b=Math.abs(f);let C,y,A,P,I,D,G,L,z,K,$,V;if(_>=E&&_>=b?(A=l,D=h,z=x,V=u,l>=0?(C=c,y=f,P=d,I=m,G=v,L=p,K=g,$=M):(C=f,y=c,P=m,I=d,G=p,L=v,K=M,$=g)):E>=b?(A=c,D=d,z=v,V=g,c>=0?(C=f,y=l,P=m,I=h,G=p,L=x,K=M,$=u):(C=l,y=f,P=h,I=m,G=x,L=p,K=u,$=M)):(A=f,D=m,z=p,V=M,f>=0?(C=l,y=c,P=h,I=d,G=x,L=v,K=u,$=g):(C=c,y=l,P=d,I=h,G=v,L=x,K=g,$=u)),A===0)return null;const B=C/A,X=y/A,Z=1/A,ce=P-B*D,ve=I-X*D,Xe=G-B*z,ze=L-X*z,ke=K-B*V,Q=$-X*V,ie=ke*ze-Q*Xe,ye=ce*Q-ve*ke,Ie=Xe*ve-ze*ce;if(r){if(ie<0||ye<0||Ie<0)return null}else if((ie<0||ye<0||Ie<0)&&(ie>0||ye>0||Ie>0))return null;const _e=ie+ye+Ie;if(_e===0)return null;const Ve=Z*(ie*D+ye*z+Ie*V);return(_e>0?Ve<0:Ve>0)?null:this.at(Ve/_e,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt extends hs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ur,this.combine=Yy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const T0=new bt,Hr=new im,wl=new Ba,C0=new O,El=new O,bl=new O,Tl=new O,Pd=new O,Cl=new O,A0=new O,Al=new O;class je extends Kt{constructor(e=new Wt,n=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Cl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],h=s[l];f!==0&&(Pd.fromBufferAttribute(h,e),o?Cl.addScaledVector(Pd,f):Cl.addScaledVector(Pd.sub(n),f))}n.add(Cl)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wl.copy(i.boundingSphere),wl.applyMatrix4(s),Hr.copy(e.ray).recast(e.near),!(wl.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(wl,C0)===null||Hr.origin.distanceToSquared(C0)>(e.far-e.near)**2))&&(T0.copy(s).invert(),Hr.copy(e.ray).applyMatrix4(T0),!(i.boundingBox!==null&&Hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Hr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=d.length;x<v;x++){const p=d[x],u=o[p.materialIndex],g=Math.max(p.start,m.start),M=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let _=g,E=M;_<E;_+=3){const b=a.getX(_),C=a.getX(_+1),y=a.getX(_+2);r=Rl(this,u,e,i,c,f,h,b,C,y),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=x,u=v;p<u;p+=3){const g=a.getX(p),M=a.getX(p+1),_=a.getX(p+2);r=Rl(this,o,e,i,c,f,h,g,M,_),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,v=d.length;x<v;x++){const p=d[x],u=o[p.materialIndex],g=Math.max(p.start,m.start),M=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let _=g,E=M;_<E;_+=3){const b=_,C=_+1,y=_+2;r=Rl(this,u,e,i,c,f,h,b,C,y),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=x,u=v;p<u;p+=3){const g=p,M=p+1,_=p+2;r=Rl(this,o,e,i,c,f,h,g,M,_),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function WA(t,e,n,i,r,s,o,a){let l;if(e.side===Pn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===as,a),l===null)return null;Al.copy(a),Al.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Al);return c<n.near||c>n.far?null:{distance:c,point:Al.clone(),object:t}}function Rl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,El),t.getVertexPosition(l,bl),t.getVertexPosition(c,Tl);const f=WA(t,e,n,i,El,bl,Tl,A0);if(f){const h=new O;ai.getBarycoord(A0,El,bl,Tl,h),r&&(f.uv=ai.getInterpolatedAttribute(r,a,l,c,h,new Le)),s&&(f.uv1=ai.getInterpolatedAttribute(s,a,l,c,h,new Le)),o&&(f.normal=ai.getInterpolatedAttribute(o,a,l,c,h,new O),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new O,materialIndex:0};ai.getNormal(El,bl,Tl,d.normal),f.face=d,f.barycoord=h}return f}class jA extends pn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=tn,f=tn,h,d){super(null,o,a,l,c,f,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gr=new Ba,XA=new Le(.5,.5),Pl=new O;class rm{constructor(e=new xr,n=new xr,i=new xr,r=new xr,s=new xr,o=new xr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ti,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],f=s[4],h=s[5],d=s[6],m=s[7],x=s[8],v=s[9],p=s[10],u=s[11],g=s[12],M=s[13],_=s[14],E=s[15];if(r[0].setComponents(c-o,m-f,u-x,E-g).normalize(),r[1].setComponents(c+o,m+f,u+x,E+g).normalize(),r[2].setComponents(c+a,m+h,u+v,E+M).normalize(),r[3].setComponents(c-a,m-h,u-v,E-M).normalize(),i)r[4].setComponents(l,d,p,_).normalize(),r[5].setComponents(c-l,m-d,u-p,E-_).normalize();else if(r[4].setComponents(c-l,m-d,u-p,E-_).normalize(),n===Ti)r[5].setComponents(c+l,m+d,u+p,E+_).normalize();else if(n===Aa)r[5].setComponents(l,d,p,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){Gr.center.set(0,0,0);const n=XA.distanceTo(e.center);return Gr.radius=.7071067811865476+n,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Pl.x=r.normal.x>0?e.max.x:e.min.x,Pl.y=r.normal.y>0?e.max.y:e.min.y,Pl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Pl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mS extends hs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Vc=new O,Hc=new O,R0=new bt,zo=new im,Nl=new Ba,Nd=new O,P0=new O;class $A extends Kt{constructor(e=new Wt,n=new mS){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Vc.fromBufferAttribute(n,r-1),Hc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Vc.distanceTo(Hc);e.setAttribute("lineDistance",new st(i,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Nl.copy(i.boundingSphere),Nl.applyMatrix4(r),Nl.radius+=s,e.ray.intersectsSphere(Nl)===!1)return;R0.copy(r).invert(),zo.copy(e.ray).applyMatrix4(R0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=i.index,d=i.attributes.position;if(f!==null){const m=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let v=m,p=x-1;v<p;v+=c){const u=f.getX(v),g=f.getX(v+1),M=Ll(this,e,zo,l,u,g,v);M&&n.push(M)}if(this.isLineLoop){const v=f.getX(x-1),p=f.getX(m),u=Ll(this,e,zo,l,v,p,x-1);u&&n.push(u)}}else{const m=Math.max(0,o.start),x=Math.min(d.count,o.start+o.count);for(let v=m,p=x-1;v<p;v+=c){const u=Ll(this,e,zo,l,v,v+1,v);u&&n.push(u)}if(this.isLineLoop){const v=Ll(this,e,zo,l,x-1,m,x-1);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ll(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(Vc.fromBufferAttribute(a,r),Hc.fromBufferAttribute(a,s),n.distanceSqToSegment(Vc,Hc,Nd,P0)>i)return;Nd.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Nd);if(!(c<e.near||c>e.far))return{distance:c,point:P0.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const N0=new O,L0=new O;class YA extends $A{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)N0.fromBufferAttribute(n,r),L0.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+N0.distanceTo(L0);e.setAttribute("lineDistance",new st(i,1))}else De("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gS extends hs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const D0=new bt,Nh=new im,Dl=new Ba,Il=new O;class qA extends Kt{constructor(e=new Wt,n=new gS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Dl.copy(i.boundingSphere),Dl.applyMatrix4(r),Dl.radius+=s,e.ray.intersectsSphere(Dl)===!1)return;D0.copy(r).invert(),Nh.copy(e.ray).applyMatrix4(D0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let x=d,v=m;x<v;x++){const p=c.getX(x);Il.fromBufferAttribute(h,p),I0(Il,p,l,r,e,n,this)}}else{const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=d,v=m;x<v;x++)Il.fromBufferAttribute(h,x),I0(Il,x,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function I0(t,e,n,i,r,s,o){const a=Nh.distanceSqToPoint(t);if(a<n){const l=new O;Nh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class vS extends pn{constructor(e=[],n=ls,i,r,s,o,a,l,c,f){super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xS extends pn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ra extends pn{constructor(e,n,i=Di,r,s,o,a=tn,l=tn,c,f=Ji,h=1){if(f!==Ji&&f!==Zr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:h};super(d,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new tm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class KA extends Ra{constructor(e,n=Di,i=ls,r,s,o=tn,a=tn,l,c=Ji){const f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,n,i,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class _S extends pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Jt extends Wt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],h=[];let d=0,m=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(f,3)),this.setAttribute("uv",new st(h,2));function x(v,p,u,g,M,_,E,b,C,y,A){const P=_/C,I=E/y,D=_/2,G=E/2,L=b/2,z=C+1,K=y+1;let $=0,V=0;const B=new O;for(let X=0;X<K;X++){const Z=X*I-G;for(let ce=0;ce<z;ce++){const ve=ce*P-D;B[v]=ve*g,B[p]=Z*M,B[u]=L,c.push(B.x,B.y,B.z),B[v]=0,B[p]=0,B[u]=b>0?1:-1,f.push(B.x,B.y,B.z),h.push(ce/C),h.push(1-X/y),$+=1}}for(let X=0;X<y;X++)for(let Z=0;Z<C;Z++){const ce=d+Z+z*X,ve=d+Z+z*(X+1),Xe=d+(Z+1)+z*(X+1),ze=d+(Z+1)+z*X;l.push(ce,ve,ze),l.push(ve,Xe,ze),V+=6}a.addGroup(m,V,A),m+=V,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Gc extends Wt{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],h=[],d=[],m=[];let x=0;const v=[],p=i/2;let u=0;g(),o===!1&&(e>0&&M(!0),n>0&&M(!1)),this.setIndex(f),this.setAttribute("position",new st(h,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(m,2));function g(){const _=new O,E=new O;let b=0;const C=(n-e)/i;for(let y=0;y<=s;y++){const A=[],P=y/s,I=P*(n-e)+e;for(let D=0;D<=r;D++){const G=D/r,L=G*l+a,z=Math.sin(L),K=Math.cos(L);E.x=I*z,E.y=-P*i+p,E.z=I*K,h.push(E.x,E.y,E.z),_.set(z,C,K).normalize(),d.push(_.x,_.y,_.z),m.push(G,1-P),A.push(x++)}v.push(A)}for(let y=0;y<r;y++)for(let A=0;A<s;A++){const P=v[A][y],I=v[A+1][y],D=v[A+1][y+1],G=v[A][y+1];(e>0||A!==0)&&(f.push(P,I,G),b+=3),(n>0||A!==s-1)&&(f.push(I,D,G),b+=3)}c.addGroup(u,b,0),u+=b}function M(_){const E=x,b=new Le,C=new O;let y=0;const A=_===!0?e:n,P=_===!0?1:-1;for(let D=1;D<=r;D++)h.push(0,p*P,0),d.push(0,P,0),m.push(.5,.5),x++;const I=x;for(let D=0;D<=r;D++){const L=D/r*l+a,z=Math.cos(L),K=Math.sin(L);C.x=A*K,C.y=p*P,C.z=A*z,h.push(C.x,C.y,C.z),d.push(0,P,0),b.x=z*.5+.5,b.y=K*.5*P+.5,m.push(b.x,b.y),x++}for(let D=0;D<r;D++){const G=E+D,L=I+D;_===!0?f.push(L,L+1,G):f.push(L+1,L,G),y+=3}c.addGroup(u,y,_===!0?1:2),u+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sm extends Wt{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),f(),this.setAttribute("position",new st(s,3)),this.setAttribute("normal",new st(s.slice(),3)),this.setAttribute("uv",new st(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const M=new O,_=new O,E=new O;for(let b=0;b<n.length;b+=3)m(n[b+0],M),m(n[b+1],_),m(n[b+2],E),l(M,_,E,g)}function l(g,M,_,E){const b=E+1,C=[];for(let y=0;y<=b;y++){C[y]=[];const A=g.clone().lerp(_,y/b),P=M.clone().lerp(_,y/b),I=b-y;for(let D=0;D<=I;D++)D===0&&y===b?C[y][D]=A:C[y][D]=A.clone().lerp(P,D/I)}for(let y=0;y<b;y++)for(let A=0;A<2*(b-y)-1;A++){const P=Math.floor(A/2);A%2===0?(d(C[y][P+1]),d(C[y+1][P]),d(C[y][P])):(d(C[y][P+1]),d(C[y+1][P+1]),d(C[y+1][P]))}}function c(g){const M=new O;for(let _=0;_<s.length;_+=3)M.x=s[_+0],M.y=s[_+1],M.z=s[_+2],M.normalize().multiplyScalar(g),s[_+0]=M.x,s[_+1]=M.y,s[_+2]=M.z}function f(){const g=new O;for(let M=0;M<s.length;M+=3){g.x=s[M+0],g.y=s[M+1],g.z=s[M+2];const _=p(g)/2/Math.PI+.5,E=u(g)/Math.PI+.5;o.push(_,1-E)}x(),h()}function h(){for(let g=0;g<o.length;g+=6){const M=o[g+0],_=o[g+2],E=o[g+4],b=Math.max(M,_,E),C=Math.min(M,_,E);b>.9&&C<.1&&(M<.2&&(o[g+0]+=1),_<.2&&(o[g+2]+=1),E<.2&&(o[g+4]+=1))}}function d(g){s.push(g.x,g.y,g.z)}function m(g,M){const _=g*3;M.x=e[_+0],M.y=e[_+1],M.z=e[_+2]}function x(){const g=new O,M=new O,_=new O,E=new O,b=new Le,C=new Le,y=new Le;for(let A=0,P=0;A<s.length;A+=9,P+=6){g.set(s[A+0],s[A+1],s[A+2]),M.set(s[A+3],s[A+4],s[A+5]),_.set(s[A+6],s[A+7],s[A+8]),b.set(o[P+0],o[P+1]),C.set(o[P+2],o[P+3]),y.set(o[P+4],o[P+5]),E.copy(g).add(M).add(_).divideScalar(3);const I=p(E);v(b,P+0,g,I),v(C,P+2,M,I),v(y,P+4,_,I)}}function v(g,M,_,E){E<0&&g.x===1&&(o[M]=g.x-1),_.x===0&&_.z===0&&(o[M]=E/2/Math.PI+.5)}function p(g){return Math.atan2(g.z,-g.x)}function u(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sm(e.vertices,e.indices,e.radius,e.detail)}}class om extends sm{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new om(e.radius,e.detail)}}class yi extends Wt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,h=e/a,d=n/l,m=[],x=[],v=[],p=[];for(let u=0;u<f;u++){const g=u*d-o;for(let M=0;M<c;M++){const _=M*h-s;x.push(_,-g,0),v.push(0,0,1),p.push(M/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<a;g++){const M=g+c*u,_=g+c*(u+1),E=g+1+c*(u+1),b=g+1+c*u;m.push(M,_,b),m.push(_,E,b)}this.setIndex(m),this.setAttribute("position",new st(x,3)),this.setAttribute("normal",new st(v,3)),this.setAttribute("uv",new st(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yi(e.width,e.height,e.widthSegments,e.heightSegments)}}class am extends Wt{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],f=[];let h=e;const d=(n-e)/r,m=new O,x=new Le;for(let v=0;v<=r;v++){for(let p=0;p<=i;p++){const u=s+p/i*o;m.x=h*Math.cos(u),m.y=h*Math.sin(u),l.push(m.x,m.y,m.z),c.push(0,0,1),x.x=(m.x/n+1)/2,x.y=(m.y/n+1)/2,f.push(x.x,x.y)}h+=d}for(let v=0;v<r;v++){const p=v*(i+1);for(let u=0;u<i;u++){const g=u+p,M=g,_=g+i+1,E=g+i+2,b=g+1;a.push(M,_,b),a.push(_,E,b)}}this.setIndex(a),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new am(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Wc extends Wt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],h=new O,d=new O,m=[],x=[],v=[],p=[];for(let u=0;u<=i;u++){const g=[],M=u/i,_=o+M*a,E=e*Math.cos(_),b=Math.sqrt(e*e-E*E);let C=0;u===0&&o===0?C=.5/n:u===i&&l===Math.PI&&(C=-.5/n);for(let y=0;y<=n;y++){const A=y/n,P=r+A*s;h.x=-b*Math.cos(P),h.y=E,h.z=b*Math.sin(P),x.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),p.push(A+C,1-M),g.push(c++)}f.push(g)}for(let u=0;u<i;u++)for(let g=0;g<n;g++){const M=f[u][g+1],_=f[u][g],E=f[u+1][g],b=f[u+1][g+1];(u!==0||o>0)&&m.push(M,_,b),(u!==i-1||l<Math.PI)&&m.push(_,E,b)}this.setIndex(m),this.setAttribute("position",new st(x,3)),this.setAttribute("normal",new st(v,3)),this.setAttribute("uv",new st(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class lm extends Wt{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:o,thetaLength:a},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],f=[],h=[],d=new O,m=new O,x=new O;for(let v=0;v<=i;v++){const p=o+v/i*a;for(let u=0;u<=r;u++){const g=u/r*s;m.x=(e+n*Math.cos(p))*Math.cos(g),m.y=(e+n*Math.cos(p))*Math.sin(g),m.z=n*Math.sin(p),c.push(m.x,m.y,m.z),d.x=e*Math.cos(g),d.y=e*Math.sin(g),x.subVectors(m,d).normalize(),f.push(x.x,x.y,x.z),h.push(u/r),h.push(v/i)}}for(let v=1;v<=i;v++)for(let p=1;p<=r;p++){const u=(r+1)*v+p-1,g=(r+1)*(v-1)+p-1,M=(r+1)*(v-1)+p,_=(r+1)*v+p;l.push(u,g,_),l.push(g,M,_)}this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(f,3)),this.setAttribute("uv",new st(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lm(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function mo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(U0(r))r.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(U0(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function xn(t){const e={};for(let n=0;n<t.length;n++){const i=mo(t[n]);for(const r in i)e[r]=i[r]}return e}function U0(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function ZA(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function yS(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const jc={clone:mo,merge:xn};var QA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,JA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hn extends hs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=QA,this.fragmentShader=JA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mo(e.uniforms),this.uniformsGroups=ZA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Oe().setHex(r.value);break;case"v2":this.uniforms[i].value=new Le().fromArray(r.value);break;case"v3":this.uniforms[i].value=new O().fromArray(r.value);break;case"v4":this.uniforms[i].value=new At().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Fe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new bt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class eR extends hn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Un extends hs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rh,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ur,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tR extends Un{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class nR extends hs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iR extends hs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class cm extends Kt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Ld=new bt,F0=new O,O0=new O;class SS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.mapType=Bn,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rm,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;F0.setFromMatrixPosition(e.matrixWorld),n.position.copy(F0),O0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(O0),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){Ld.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Ld,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===Aa||e.reversedDepth?n.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):n.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),n.multiply(Ld)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ul=new O,Fl=new So,vi=new O;class MS extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=Ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ul,Fl,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ul,Fl,vi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Ul,Fl,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ul,Fl,vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const hr=new O,k0=new Le,B0=new Le;class kn extends MS{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ph*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ph*2*Math.atan(Math.tan(cd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hr.x,hr.y).multiplyScalar(-e/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hr.x,hr.y).multiplyScalar(-e/hr.z)}getViewSize(e,n){return this.getViewBounds(e,k0,B0),n.subVectors(B0,k0)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(cd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class rR extends SS{constructor(){super(new kn(90,1,.5,500)),this.isPointLightShadow=!0}}class Dd extends cm{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new rR}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class vu extends MS{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class sR extends SS{constructor(){super(new vu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class oR extends cm{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new sR}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class aR extends cm{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ns=-90,Ls=1;class lR extends Kt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kn(Ns,Ls,e,n);r.layers=this.layers,this.add(r);const s=new kn(Ns,Ls,e,n);s.layers=this.layers,this.add(s);const o=new kn(Ns,Ls,e,n);o.layers=this.layers,this.add(o);const a=new kn(Ns,Ls,e,n);a.layers=this.layers,this.add(a);const l=new kn(Ns,Ls,e,n);l.layers=this.layers,this.add(l);const c=new kn(Ns,Ls,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Aa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(h,d,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class cR extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class uR{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=dR.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function dR(){this._document.hidden===!1&&this.reset()}class fR{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,De("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const xm=class xm{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};xm.prototype.isMatrix2=!0;let z0=xm;class hR extends YA{constructor(e=1){const n=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Wt;r.setAttribute("position",new st(n,3)),r.setAttribute("color",new st(i,3));const s=new mS({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,n,i){const r=new Oe,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(n),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function V0(t,e,n,i){const r=pR(i);switch(n){case oS:return t*e;case lS:return t*e/r.components*r.byteLength;case Kp:return t*e/r.components*r.byteLength;case cs:return t*e*2/r.components*r.byteLength;case Zp:return t*e*2/r.components*r.byteLength;case aS:return t*e*3/r.components*r.byteLength;case li:return t*e*4/r.components*r.byteLength;case Qp:return t*e*4/r.components*r.byteLength;case ic:case rc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case sc:case oc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case eh:case nh:return Math.max(t,16)*Math.max(e,8)/4;case Jf:case th:return Math.max(t,8)*Math.max(e,8)/2;case ih:case rh:case oh:case ah:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case sh:case Fc:case lh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ch:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case uh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case dh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case fh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case hh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ph:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case mh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case gh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case vh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case xh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case _h:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case yh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Sh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Mh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case wh:case Eh:case bh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Th:case Ch:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Oc:case Ah:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function pR(t){switch(t){case Bn:case nS:return{byteLength:1,components:1};case Ta:case iS:case Nn:return{byteLength:2,components:1};case Yp:case qp:return{byteLength:2,components:4};case Di:case $p:case bi:return{byteLength:4,components:1};case rS:case sS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jp}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wS(){let t=null,e=!1,n=null,i=null;function r(s,o){i=t.requestAnimationFrame(r),n(s,o)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function mR(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,f),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const f=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,f);else{h.sort((m,x)=>m.start-x.start);let d=0;for(let m=1;m<h.length;m++){const x=h[d],v=h[m];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++d,h[d]=v)}h.length=d+1;for(let m=0,x=h.length;m<x;m++){const v=h[m];t.bufferSubData(c,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var gR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vR=`#ifdef USE_ALPHAHASH
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
#endif`,xR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_R=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,SR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,MR=`#ifdef USE_AOMAP
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
#endif`,wR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ER=`#ifdef USE_BATCHING
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
#endif`,bR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,TR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,CR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,AR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,RR=`#ifdef USE_IRIDESCENCE
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
#endif`,PR=`#ifdef USE_BUMPMAP
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
#endif`,NR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,LR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,IR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,UR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,FR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,OR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,kR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,BR=`#define PI 3.141592653589793
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
} // validated`,zR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,VR=`vec3 transformedNormal = objectNormal;
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
#endif`,HR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,GR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,WR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,XR="gl_FragColor = linearToOutputTexel( gl_FragColor );",$R=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,YR=`#ifdef USE_ENVMAP
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
#endif`,qR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,KR=`#ifdef USE_ENVMAP
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
#endif`,ZR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,QR=`#ifdef USE_ENVMAP
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
#endif`,JR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,t2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,n2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,i2=`#ifdef USE_GRADIENTMAP
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
}`,r2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,o2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,a2=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,l2=`#ifdef USE_ENVMAP
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
#endif`,c2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,u2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,d2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,f2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,h2=`PhysicalMaterial material;
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
#endif`,p2=`uniform sampler2D dfgLUT;
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
}`,m2=`
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
#endif`,g2=`#if defined( RE_IndirectDiffuse )
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
#endif`,v2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x2=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,_2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,y2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,w2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,E2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,T2=`#if defined( USE_POINTS_UV )
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
#endif`,C2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,A2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,P2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,N2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L2=`#ifdef USE_MORPHTARGETS
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
#endif`,D2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,U2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,F2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,B2=`#ifdef USE_NORMALMAP
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
#endif`,z2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,H2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,G2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,X2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,q2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Z2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Q2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,J2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tP=`float getShadowMask() {
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
}`,nP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iP=`#ifdef USE_SKINNING
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
#endif`,rP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sP=`#ifdef USE_SKINNING
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
#endif`,oP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cP=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,uP=`#ifdef USE_TRANSMISSION
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
#endif`,dP=`#ifdef USE_TRANSMISSION
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
#endif`,fP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vP=`uniform sampler2D t2D;
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
}`,xP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_P=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MP=`#include <common>
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
}`,wP=`#if DEPTH_PACKING == 3200
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
}`,EP=`#define DISTANCE
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
}`,bP=`#define DISTANCE
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
}`,TP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AP=`uniform float scale;
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
}`,RP=`uniform vec3 diffuse;
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
}`,PP=`#include <common>
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
}`,NP=`uniform vec3 diffuse;
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
}`,LP=`#define LAMBERT
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
}`,DP=`#define LAMBERT
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
}`,IP=`#define MATCAP
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
}`,UP=`#define MATCAP
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
}`,FP=`#define NORMAL
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
}`,OP=`#define NORMAL
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
}`,kP=`#define PHONG
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
}`,BP=`#define PHONG
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
}`,zP=`#define STANDARD
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
}`,VP=`#define STANDARD
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
}`,HP=`#define TOON
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
}`,GP=`#define TOON
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
}`,WP=`uniform float size;
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
}`,jP=`uniform vec3 diffuse;
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
}`,XP=`#include <common>
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
}`,$P=`uniform vec3 color;
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
}`,YP=`uniform float rotation;
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
}`,qP=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:gR,alphahash_pars_fragment:vR,alphamap_fragment:xR,alphamap_pars_fragment:_R,alphatest_fragment:yR,alphatest_pars_fragment:SR,aomap_fragment:MR,aomap_pars_fragment:wR,batching_pars_vertex:ER,batching_vertex:bR,begin_vertex:TR,beginnormal_vertex:CR,bsdfs:AR,iridescence_fragment:RR,bumpmap_pars_fragment:PR,clipping_planes_fragment:NR,clipping_planes_pars_fragment:LR,clipping_planes_pars_vertex:DR,clipping_planes_vertex:IR,color_fragment:UR,color_pars_fragment:FR,color_pars_vertex:OR,color_vertex:kR,common:BR,cube_uv_reflection_fragment:zR,defaultnormal_vertex:VR,displacementmap_pars_vertex:HR,displacementmap_vertex:GR,emissivemap_fragment:WR,emissivemap_pars_fragment:jR,colorspace_fragment:XR,colorspace_pars_fragment:$R,envmap_fragment:YR,envmap_common_pars_fragment:qR,envmap_pars_fragment:KR,envmap_pars_vertex:ZR,envmap_physical_pars_fragment:l2,envmap_vertex:QR,fog_vertex:JR,fog_pars_vertex:e2,fog_fragment:t2,fog_pars_fragment:n2,gradientmap_pars_fragment:i2,lightmap_pars_fragment:r2,lights_lambert_fragment:s2,lights_lambert_pars_fragment:o2,lights_pars_begin:a2,lights_toon_fragment:c2,lights_toon_pars_fragment:u2,lights_phong_fragment:d2,lights_phong_pars_fragment:f2,lights_physical_fragment:h2,lights_physical_pars_fragment:p2,lights_fragment_begin:m2,lights_fragment_maps:g2,lights_fragment_end:v2,lightprobes_pars_fragment:x2,logdepthbuf_fragment:_2,logdepthbuf_pars_fragment:y2,logdepthbuf_pars_vertex:S2,logdepthbuf_vertex:M2,map_fragment:w2,map_pars_fragment:E2,map_particle_fragment:b2,map_particle_pars_fragment:T2,metalnessmap_fragment:C2,metalnessmap_pars_fragment:A2,morphinstance_vertex:R2,morphcolor_vertex:P2,morphnormal_vertex:N2,morphtarget_pars_vertex:L2,morphtarget_vertex:D2,normal_fragment_begin:I2,normal_fragment_maps:U2,normal_pars_fragment:F2,normal_pars_vertex:O2,normal_vertex:k2,normalmap_pars_fragment:B2,clearcoat_normal_fragment_begin:z2,clearcoat_normal_fragment_maps:V2,clearcoat_pars_fragment:H2,iridescence_pars_fragment:G2,opaque_fragment:W2,packing:j2,premultiplied_alpha_fragment:X2,project_vertex:$2,dithering_fragment:Y2,dithering_pars_fragment:q2,roughnessmap_fragment:K2,roughnessmap_pars_fragment:Z2,shadowmap_pars_fragment:Q2,shadowmap_pars_vertex:J2,shadowmap_vertex:eP,shadowmask_pars_fragment:tP,skinbase_vertex:nP,skinning_pars_vertex:iP,skinning_vertex:rP,skinnormal_vertex:sP,specularmap_fragment:oP,specularmap_pars_fragment:aP,tonemapping_fragment:lP,tonemapping_pars_fragment:cP,transmission_fragment:uP,transmission_pars_fragment:dP,uv_pars_fragment:fP,uv_pars_vertex:hP,uv_vertex:pP,worldpos_vertex:mP,background_vert:gP,background_frag:vP,backgroundCube_vert:xP,backgroundCube_frag:_P,cube_vert:yP,cube_frag:SP,depth_vert:MP,depth_frag:wP,distance_vert:EP,distance_frag:bP,equirect_vert:TP,equirect_frag:CP,linedashed_vert:AP,linedashed_frag:RP,meshbasic_vert:PP,meshbasic_frag:NP,meshlambert_vert:LP,meshlambert_frag:DP,meshmatcap_vert:IP,meshmatcap_frag:UP,meshnormal_vert:FP,meshnormal_frag:OP,meshphong_vert:kP,meshphong_frag:BP,meshphysical_vert:zP,meshphysical_frag:VP,meshtoon_vert:HP,meshtoon_frag:GP,points_vert:WP,points_frag:jP,shadow_vert:XP,shadow_frag:$P,sprite_vert:YP,sprite_frag:qP},me={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Si={basic:{uniforms:xn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:xn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Oe(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:xn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:xn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:xn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Oe(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:xn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:xn([me.points,me.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:xn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:xn([me.common,me.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:xn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:xn([me.sprite,me.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:xn([me.common,me.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:xn([me.lights,me.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Si.physical={uniforms:xn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Ol={r:0,b:0,g:0},KP=new bt,ES=new Fe;ES.set(-1,0,0,0,1,0,0,0,1);function ZP(t,e,n,i,r,s){const o=new Oe(0);let a=r===!0?0:1,l,c,f=null,h=0,d=null;function m(g){let M=g.isScene===!0?g.background:null;if(M&&M.isTexture){const _=g.backgroundBlurriness>0;M=e.get(M,_)}return M}function x(g){let M=!1;const _=m(g);_===null?p(o,a):_&&_.isColor&&(p(_,1),M=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(g,M){const _=m(M);_&&(_.isCubeTexture||_.mapping===gu)?(c===void 0&&(c=new je(new Jt(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:mo(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(KP.makeRotationFromEuler(M.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ES),c.material.toneMapped=Ze.getTransfer(_.colorSpace)!==at,(f!==_||h!==_.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,f=_,h=_.version,d=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new je(new yi(2,2),new hn({name:"BackgroundMaterial",uniforms:mo(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(_.colorSpace)!==at,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||h!==_.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,f=_,h=_.version,d=t.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function p(g,M){g.getRGB(Ol,yS(t)),n.buffers.color.setClear(Ol.r,Ol.g,Ol.b,M,s)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(g,M=1){o.set(g),a=M,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(g){a=g,p(o,a)},render:x,addToRenderList:v,dispose:u}}function QP(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(I,D,G,L,z){let K=!1;const $=h(I,L,G,D);s!==$&&(s=$,c(s.object)),K=m(I,L,G,z),K&&x(I,L,G,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,_(I,D,G,L),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return t.createVertexArray()}function c(I){return t.bindVertexArray(I)}function f(I){return t.deleteVertexArray(I)}function h(I,D,G,L){const z=L.wireframe===!0;let K=i[D.id];K===void 0&&(K={},i[D.id]=K);const $=I.isInstancedMesh===!0?I.id:0;let V=K[$];V===void 0&&(V={},K[$]=V);let B=V[G.id];B===void 0&&(B={},V[G.id]=B);let X=B[z];return X===void 0&&(X=d(l()),B[z]=X),X}function d(I){const D=[],G=[],L=[];for(let z=0;z<n;z++)D[z]=0,G[z]=0,L[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:G,attributeDivisors:L,object:I,attributes:{},index:null}}function m(I,D,G,L){const z=s.attributes,K=D.attributes;let $=0;const V=G.getAttributes();for(const B in V)if(V[B].location>=0){const Z=z[B];let ce=K[B];if(ce===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(ce=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(ce=I.instanceColor)),Z===void 0||Z.attribute!==ce||ce&&Z.data!==ce.data)return!0;$++}return s.attributesNum!==$||s.index!==L}function x(I,D,G,L){const z={},K=D.attributes;let $=0;const V=G.getAttributes();for(const B in V)if(V[B].location>=0){let Z=K[B];Z===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor));const ce={};ce.attribute=Z,Z&&Z.data&&(ce.data=Z.data),z[B]=ce,$++}s.attributes=z,s.attributesNum=$,s.index=L}function v(){const I=s.newAttributes;for(let D=0,G=I.length;D<G;D++)I[D]=0}function p(I){u(I,0)}function u(I,D){const G=s.newAttributes,L=s.enabledAttributes,z=s.attributeDivisors;G[I]=1,L[I]===0&&(t.enableVertexAttribArray(I),L[I]=1),z[I]!==D&&(t.vertexAttribDivisor(I,D),z[I]=D)}function g(){const I=s.newAttributes,D=s.enabledAttributes;for(let G=0,L=D.length;G<L;G++)D[G]!==I[G]&&(t.disableVertexAttribArray(G),D[G]=0)}function M(I,D,G,L,z,K,$){$===!0?t.vertexAttribIPointer(I,D,G,z,K):t.vertexAttribPointer(I,D,G,L,z,K)}function _(I,D,G,L){v();const z=L.attributes,K=G.getAttributes(),$=D.defaultAttributeValues;for(const V in K){const B=K[V];if(B.location>=0){let X=z[V];if(X===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(X=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(X=I.instanceColor)),X!==void 0){const Z=X.normalized,ce=X.itemSize,ve=e.get(X);if(ve===void 0)continue;const Xe=ve.buffer,ze=ve.type,ke=ve.bytesPerElement,Q=ze===t.INT||ze===t.UNSIGNED_INT||X.gpuType===$p;if(X.isInterleavedBufferAttribute){const ie=X.data,ye=ie.stride,Ie=X.offset;if(ie.isInstancedInterleavedBuffer){for(let _e=0;_e<B.locationSize;_e++)u(B.location+_e,ie.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let _e=0;_e<B.locationSize;_e++)p(B.location+_e);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let _e=0;_e<B.locationSize;_e++)M(B.location+_e,ce/B.locationSize,ze,Z,ye*ke,(Ie+ce/B.locationSize*_e)*ke,Q)}else{if(X.isInstancedBufferAttribute){for(let ie=0;ie<B.locationSize;ie++)u(B.location+ie,X.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ie=0;ie<B.locationSize;ie++)p(B.location+ie);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let ie=0;ie<B.locationSize;ie++)M(B.location+ie,ce/B.locationSize,ze,Z,ce*ke,ce/B.locationSize*ie*ke,Q)}}else if($!==void 0){const Z=$[V];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(B.location,Z);break;case 3:t.vertexAttrib3fv(B.location,Z);break;case 4:t.vertexAttrib4fv(B.location,Z);break;default:t.vertexAttrib1fv(B.location,Z)}}}}g()}function E(){A();for(const I in i){const D=i[I];for(const G in D){const L=D[G];for(const z in L){const K=L[z];for(const $ in K)f(K[$].object),delete K[$];delete L[z]}}delete i[I]}}function b(I){if(i[I.id]===void 0)return;const D=i[I.id];for(const G in D){const L=D[G];for(const z in L){const K=L[z];for(const $ in K)f(K[$].object),delete K[$];delete L[z]}}delete i[I.id]}function C(I){for(const D in i){const G=i[D];for(const L in G){const z=G[L];if(z[I.id]===void 0)continue;const K=z[I.id];for(const $ in K)f(K[$].object),delete K[$];delete z[I.id]}}}function y(I){for(const D in i){const G=i[D],L=I.isInstancedMesh===!0?I.id:0,z=G[L];if(z!==void 0){for(const K in z){const $=z[K];for(const V in $)f($[V].object),delete $[V];delete z[K]}delete G[L],Object.keys(G).length===0&&delete i[D]}}}function A(){P(),o=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:P,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:p,disableUnusedAttributes:g}}function JP(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,f){f!==0&&(t.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function a(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let d=0;for(let m=0;m<f;m++)d+=c[m];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function e3(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==li&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const y=C===Nn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Bn&&C!==bi&&!y&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(De("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=t.getParameter(t.MAX_SAMPLES),b=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:g,maxVaryings:M,maxFragmentUniforms:_,maxSamples:E,samples:b}}function t3(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new xr,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,m){const x=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,u=t.get(h);if(!r||x===null||x.length===0||s&&!p)s?f(null):c();else{const g=s?0:i,M=g*4;let _=u.clippingState||null;l.value=_,_=f(x,d,M,m);for(let E=0;E!==M;++E)_[E]=n[E];u.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,m,x){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=l.value,x!==!0||p===null){const u=m+v*4,g=d.matrixWorldInverse;a.getNormalMatrix(g),(p===null||p.length<u)&&(p=new Float32Array(u));for(let M=0,_=m;M!==v;++M,_+=4)o.copy(h[M]).applyMatrix4(g,a),o.normal.toArray(p,_),p[_+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}const $s=4,n3=6,i3=20,r3=256,Vo=new vu,H0=new Oe;let Id=null,Ud=0,Fd=0,Od=!1;const s3=new O,Wr=new O;class G0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=s3}=s;Id=this._renderer.getRenderTarget(),Ud=this._renderer.getActiveCubeFace(),Fd=this._renderer.getActiveMipmapLevel(),Od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=X0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=j0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Id,Ud,Fd),this._renderer.xr.enabled=Od,e.scissorTest=!1,Ds(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ls||e.mapping===po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Id=this._renderer.getRenderTarget(),Ud=this._renderer.getActiveCubeFace(),Fd=this._renderer.getActiveMipmapLevel(),Od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Nn,format:li,colorSpace:kc,depthBuffer:!1},r=W0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=W0(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=o3(s)),this._blurMaterial=l3(s,e,n),this._ggxMaterial=a3(s,e,n)}return r}_compileMaterial(e){const n=new je(new Wt,e);this._renderer.compile(n,Vo)}_sceneToCubeUV(e,n,i,r,s){const l=new kn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,m=h.toneMapping;h.getClearColor(H0),h.toneMapping=Pi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new je(new Jt,new Zt({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,p=v.material;let u=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,u=!0):(p.color.copy(H0),u=!0);for(let M=0;M<6;M++){const _=M%3;_===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[M],s.y,s.z)):_===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[M]));const E=this._cubeSize;Ds(r,_*E,M>2?E:0,E,E),h.setRenderTarget(r),u&&h.render(v,l),h.render(e,l)}h.toneMapping=m,h.autoClear=d,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ls||e.mapping===po;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=X0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=j0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ds(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Vo)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),d=c*1.25,m=h*d,{_lodMax:x}=this,v=this._sizeLods[i],p=3*v*(i>x-$s?i-x+$s:0),u=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=x-n,Ds(s,p,u,3*v,2*v),r.setRenderTarget(s),r.render(a,Vo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-i,Ds(e,p,u,3*v,2*v),r.setRenderTarget(e),r.render(a,Vo)}_blur(e,n,i,r){const s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,n,i,o),this._blurPass(s,e,i,i,o)}_blurPass(e,n,i,r,s){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;const c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const f=this._sizeLods[r],h=3*f*(r>this._lodMax-$s?r-this._lodMax+$s:0),d=4*(this._cubeSize-f);Ds(n,h,d,3*f,2*f),o.setRenderTarget(n),o.render(l,Vo)}}function o3(t){const e=[],n=[];let i=t;const r=t-$s+1+n3;for(let s=0;s<r;s++){const o=Math.pow(2,i);e.push(o);const a=1/(o-2),l=-a,c=1+a,f=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,m=3,x=new Float32Array(m*d*h),v=new Float32Array(m*d*h);for(let u=0;u<h;u++){const g=u%3*2/3-1,M=u>2?0:-1,_=[g,M,0,g+2/3,M,0,g+2/3,M+1,0,g,M,0,g+2/3,M+1,0,g,M+1,0];x.set(_,m*d*u);for(let E=0;E<d;E++){const b=f[E*2]*2-1,C=f[E*2+1]*2-1;u===0?Wr.set(1,C,b):u===1?Wr.set(-b,1,-C):u===2?Wr.set(-b,C,1):u===3?Wr.set(-1,C,-b):u===4?Wr.set(-b,-1,C):Wr.set(b,C,-1),Wr.toArray(v,(u*d+E)*m)}}const p=new Wt;p.setAttribute("position",new Ni(x,m)),p.setAttribute("outputDirection",new Ni(v,m)),n.push(new je(p,null)),i>$s&&i--}return{lodMeshes:n,sizeLods:e}}function W0(t,e,n){const i=new Sn(t,e,n);return i.texture.mapping=gu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ds(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function a3(t,e,n){return new hn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:r3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xu(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function l3(t,e,n){return new hn({name:"SphericalGaussianBlur",defines:{SAMPLES:i3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:xu(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function j0(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xu(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function X0(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function xu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class bS extends Sn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new vS(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Jt(5,5,5),s=new hn({name:"CubemapFromEquirect",uniforms:mo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pn,blending:Ri});s.uniforms.tEquirect.value=n;const o=new je(r,s),a=n.minFilter;return n.minFilter===Kr&&(n.minFilter=nn),new lR(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function c3(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,m=!1){return d==null?null:m?o(d):s(d)}function s(d){if(d&&d.isTexture){const m=d.mapping;if(m===sd||m===od)if(e.has(d)){const x=e.get(d).texture;return a(x,d.mapping)}else{const x=d.image;if(x&&x.height>0){const v=new bS(x.height);return v.fromEquirectangularTexture(t,d),e.set(d,v),d.addEventListener("dispose",c),a(v.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const m=d.mapping,x=m===sd||m===od,v=m===ls||m===po;if(x||v){let p=n.get(d);const u=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==u)return i===null&&(i=new G0(t)),p=x?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,n.set(d,p),p.texture;if(p!==void 0)return p.texture;{const g=d.image;return x&&g&&g.height>0||v&&g&&l(g)?(i===null&&(i=new G0(t)),p=x?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,n.set(d,p),d.addEventListener("dispose",f),p.texture):null}}}return d}function a(d,m){return m===sd?d.mapping=ls:m===od&&(d.mapping=po),d}function l(d){let m=0;const x=6;for(let v=0;v<x;v++)d[v]!==void 0&&m++;return m===x}function c(d){const m=d.target;m.removeEventListener("dispose",c);const x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function f(d){const m=d.target;m.removeEventListener("dispose",f);const x=n.get(m);x!==void 0&&(n.delete(m),x.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function u3(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&io("WebGLRenderer: "+i+" extension not supported."),r}}}function d3(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const m in d)e.update(d[m],t.ARRAY_BUFFER)}function c(h){const d=[],m=h.index,x=h.attributes.position;let v=0;if(x===void 0)return;if(m!==null){const g=m.array;v=m.version;for(let M=0,_=g.length;M<_;M+=3){const E=g[M+0],b=g[M+1],C=g[M+2];d.push(E,b,b,C,C,E)}}else{const g=x.array;v=x.version;for(let M=0,_=g.length/3-1;M<_;M+=3){const E=M+0,b=M+1,C=M+2;d.push(E,b,b,C,C,E)}}const p=new(x.count>=65535?pS:hS)(d,1);p.version=v;const u=s.get(h);u&&e.remove(u),s.set(h,p)}function f(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function f3(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){t.drawElements(i,d,s,h*o),n.update(d,i,1)}function c(h,d,m){m!==0&&(t.drawElementsInstanced(i,d,s,h*o,m),n.update(d,i,m))}function f(h,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,m);let v=0;for(let p=0;p<m;p++)v+=d[p];n.update(v,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function h3(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:nt("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function p3(t,e,n){const i=new WeakMap,r=new At;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let P=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",P)};var m=P;d!==void 0&&d.texture.dispose();const x=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let _=0;x===!0&&(_=1),v===!0&&(_=2),p===!0&&(_=3);let E=a.attributes.position.count*_,b=1;E>e.maxTextureSize&&(b=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const C=new Float32Array(E*b*4*h),y=new uS(C,E,b,h);y.type=bi,y.needsUpdate=!0;const A=_*4;for(let I=0;I<h;I++){const D=u[I],G=g[I],L=M[I],z=E*b*4*I;for(let K=0;K<D.count;K++){const $=K*A;x===!0&&(r.fromBufferAttribute(D,K),C[z+$+0]=r.x,C[z+$+1]=r.y,C[z+$+2]=r.z,C[z+$+3]=0),v===!0&&(r.fromBufferAttribute(G,K),C[z+$+4]=r.x,C[z+$+5]=r.y,C[z+$+6]=r.z,C[z+$+7]=0),p===!0&&(r.fromBufferAttribute(L,K),C[z+$+8]=r.x,C[z+$+9]=r.y,C[z+$+10]=r.z,C[z+$+11]=L.itemSize===4?r.w:1)}}d={count:h,texture:y,size:new Le(E,b)},i.set(a,d),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let x=0;for(let p=0;p<c.length;p++)x+=c[p];const v=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function m3(t,e,n,i,r){let s=new WeakMap;function o(c){const f=r.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==f&&(e.update(d),s.set(d,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==f&&(m.update(),s.set(m,f))}return d}function a(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:o,dispose:a}}const g3={[qy]:"LINEAR_TONE_MAPPING",[Ky]:"REINHARD_TONE_MAPPING",[Zy]:"CINEON_TONE_MAPPING",[Xp]:"ACES_FILMIC_TONE_MAPPING",[Jy]:"AGX_TONE_MAPPING",[eS]:"NEUTRAL_TONE_MAPPING",[Qy]:"CUSTOM_TONE_MAPPING"};function v3(t,e,n,i,r,s){const o=new Sn(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new Wt;c.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new st([0,2,0,0,2,0],2));const f=new eR({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new je(c,f),d=new vu(-1,1,1,-1,0,1);let m=null,x=null,v=!1,p,u=null,g=[],M=!1;this.setSize=function(_,E){o.setSize(_,E),a!==null&&a.setSize(_,E),l!==null&&l.setSize(_,E);for(let b=0;b<g.length;b++){const C=g[b];C.setSize&&C.setSize(_,E)}},this.setEffects=function(_){g=_,M=g.length>0&&g[0].isRenderPass===!0;const E=o.width,b=o.height;g.length>0&&a===null&&(a=new Sn(E,b,{type:Nn,depthBuffer:!1,stencilBuffer:!1}),l=new Sn(E,b,{type:Nn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<g.length;C++){const y=g[C];y.setSize&&y.setSize(E,b)}},this.begin=function(_,E){if(v||_.toneMapping===Pi&&g.length===0)return!1;if(u=E,E!==null){const b=E.width,C=E.height;(o.width!==b||o.height!==C)&&this.setSize(b,C)}return M===!1&&_.setRenderTarget(o),p=_.toneMapping,_.toneMapping=Pi,!0},this.hasRenderPass=function(){return M},this.end=function(_,E){_.toneMapping=p,v=!0;let b=o,C=a;for(let y=0;y<g.length;y++){const A=g[y];A.enabled!==!1&&(A.render(_,C,b,E),A.needsSwap!==!1&&(b=C,C=C===a?l:a))}if(m!==_.outputColorSpace||x!==_.toneMapping){m=_.outputColorSpace,x=_.toneMapping,f.defines={},Ze.getTransfer(m)===at&&(f.defines.SRGB_TRANSFER="");const y=g3[x];y&&(f.defines[y]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=b.texture,_.setRenderTarget(u),_.render(h,d),u=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}const TS=new pn,Lh=new Ra(1,1),CS=new uS,AS=new RA,RS=new vS,$0=[],Y0=[],q0=new Float32Array(16),K0=new Float32Array(9),Z0=new Float32Array(4);function Mo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=$0[r];if(s===void 0&&(s=new Float32Array(r),$0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ht(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Gt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function _u(t,e){let n=Y0[e];n===void 0&&(n=new Int32Array(e),Y0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function x3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function _3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2fv(this.addr,e),Gt(n,e)}}function y3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ht(n,e))return;t.uniform3fv(this.addr,e),Gt(n,e)}}function S3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4fv(this.addr,e),Gt(n,e)}}function M3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;Z0.set(i),t.uniformMatrix2fv(this.addr,!1,Z0),Gt(n,i)}}function w3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;K0.set(i),t.uniformMatrix3fv(this.addr,!1,K0),Gt(n,i)}}function E3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;q0.set(i),t.uniformMatrix4fv(this.addr,!1,q0),Gt(n,i)}}function b3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function T3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2iv(this.addr,e),Gt(n,e)}}function C3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3iv(this.addr,e),Gt(n,e)}}function A3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4iv(this.addr,e),Gt(n,e)}}function R3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function P3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2uiv(this.addr,e),Gt(n,e)}}function N3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3uiv(this.addr,e),Gt(n,e)}}function L3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4uiv(this.addr,e),Gt(n,e)}}function D3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Lh.compareFunction=n.isReversedDepthBuffer()?em:Jp,s=Lh):s=TS,n.setTexture2D(e||s,r)}function I3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||AS,r)}function U3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||RS,r)}function F3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||CS,r)}function O3(t){switch(t){case 5126:return x3;case 35664:return _3;case 35665:return y3;case 35666:return S3;case 35674:return M3;case 35675:return w3;case 35676:return E3;case 5124:case 35670:return b3;case 35667:case 35671:return T3;case 35668:case 35672:return C3;case 35669:case 35673:return A3;case 5125:return R3;case 36294:return P3;case 36295:return N3;case 36296:return L3;case 35678:case 36198:case 36298:case 36306:case 35682:return D3;case 35679:case 36299:case 36307:return I3;case 35680:case 36300:case 36308:case 36293:return U3;case 36289:case 36303:case 36311:case 36292:return F3}}function k3(t,e){t.uniform1fv(this.addr,e)}function B3(t,e){const n=Mo(e,this.size,2);t.uniform2fv(this.addr,n)}function z3(t,e){const n=Mo(e,this.size,3);t.uniform3fv(this.addr,n)}function V3(t,e){const n=Mo(e,this.size,4);t.uniform4fv(this.addr,n)}function H3(t,e){const n=Mo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function G3(t,e){const n=Mo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function W3(t,e){const n=Mo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function j3(t,e){t.uniform1iv(this.addr,e)}function X3(t,e){t.uniform2iv(this.addr,e)}function $3(t,e){t.uniform3iv(this.addr,e)}function Y3(t,e){t.uniform4iv(this.addr,e)}function q3(t,e){t.uniform1uiv(this.addr,e)}function K3(t,e){t.uniform2uiv(this.addr,e)}function Z3(t,e){t.uniform3uiv(this.addr,e)}function Q3(t,e){t.uniform4uiv(this.addr,e)}function J3(t,e,n){const i=this.cache,r=e.length,s=_u(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=Lh:o=TS;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function eN(t,e,n){const i=this.cache,r=e.length,s=_u(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||AS,s[o])}function tN(t,e,n){const i=this.cache,r=e.length,s=_u(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||RS,s[o])}function nN(t,e,n){const i=this.cache,r=e.length,s=_u(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||CS,s[o])}function iN(t){switch(t){case 5126:return k3;case 35664:return B3;case 35665:return z3;case 35666:return V3;case 35674:return H3;case 35675:return G3;case 35676:return W3;case 5124:case 35670:return j3;case 35667:case 35671:return X3;case 35668:case 35672:return $3;case 35669:case 35673:return Y3;case 5125:return q3;case 36294:return K3;case 36295:return Z3;case 36296:return Q3;case 35678:case 36198:case 36298:case 36306:case 35682:return J3;case 35679:case 36299:case 36307:return eN;case 35680:case 36300:case 36308:case 36293:return tN;case 36289:case 36303:case 36311:case 36292:return nN}}class rN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=O3(n.type)}}class sN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=iN(n.type)}}class oN{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const kd=/(\w+)(\])?(\[|\.)?/g;function Q0(t,e){t.seq.push(e),t.map[e.id]=e}function aN(t,e,n){const i=t.name,r=i.length;for(kd.lastIndex=0;;){const s=kd.exec(i),o=kd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Q0(n,c===void 0?new rN(a,t,e):new sN(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new oN(a),Q0(n,h)),n=h}}}class ac{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);aN(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function J0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const lN=37297;let cN=0;function uN(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const ev=new Fe;function dN(t){Ze._getMatrix(ev,Ze.workingColorSpace,t);const e=`mat3( ${ev.elements.map(n=>n.toFixed(4))} )`;switch(Ze.getTransfer(t)){case Bc:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function tv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+uN(t.getShaderSource(e),a)}else return s}function fN(t,e){const n=dN(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const hN={[qy]:"Linear",[Ky]:"Reinhard",[Zy]:"Cineon",[Xp]:"ACESFilmic",[Jy]:"AgX",[eS]:"Neutral",[Qy]:"Custom"};function pN(t,e){const n=hN[e];return n===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const kl=new O;function mN(){Ze.getLuminanceCoefficients(kl);const t=kl.x.toFixed(4),e=kl.y.toFixed(4),n=kl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gN(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yo).join(`
`)}function vN(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function xN(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Yo(t){return t!==""}function nv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function iv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _N=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dh(t){return t.replace(_N,SN)}const yN=new Map;function SN(t,e){let n=We[e];if(n===void 0){const i=yN.get(e);if(i!==void 0)n=We[i],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Dh(n)}const MN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rv(t){return t.replace(MN,wN)}function wN(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function sv(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const EN={[nc]:"SHADOWMAP_TYPE_PCF",[$o]:"SHADOWMAP_TYPE_VSM"};function bN(t){return EN[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const TN={[ls]:"ENVMAP_TYPE_CUBE",[po]:"ENVMAP_TYPE_CUBE",[gu]:"ENVMAP_TYPE_CUBE_UV"};function CN(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":TN[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const AN={[po]:"ENVMAP_MODE_REFRACTION"};function RN(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":AN[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const PN={[Yy]:"ENVMAP_BLENDING_MULTIPLY",[oA]:"ENVMAP_BLENDING_MIX",[aA]:"ENVMAP_BLENDING_ADD"};function NN(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":PN[t.combine]||"ENVMAP_BLENDING_NONE"}function LN(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function DN(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=bN(n),c=CN(n),f=RN(n),h=NN(n),d=LN(n),m=gN(n),x=vN(s),v=r.createProgram();let p,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Yo).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Yo).join(`
`),u.length>0&&(u+=`
`)):(p=[sv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yo).join(`
`),u=[sv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Pi?"#define TONE_MAPPING":"",n.toneMapping!==Pi?We.tonemapping_pars_fragment:"",n.toneMapping!==Pi?pN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,fN("linearToOutputTexel",n.outputColorSpace),mN(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Yo).join(`
`)),o=Dh(o),o=nv(o,n),o=iv(o,n),a=Dh(a),a=nv(a,n),a=iv(a,n),o=rv(o),a=rv(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",n.glslVersion===f0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===f0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const M=g+p+o,_=g+u+a,E=J0(r,r.VERTEX_SHADER,M),b=J0(r,r.FRAGMENT_SHADER,_);r.attachShader(v,E),r.attachShader(v,b),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(I){if(t.debug.checkShaderErrors){const D=r.getProgramInfoLog(v)||"",G=r.getShaderInfoLog(E)||"",L=r.getShaderInfoLog(b)||"",z=D.trim(),K=G.trim(),$=L.trim();let V=!0,B=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,E,b);else{const X=tv(r,E,"vertex"),Z=tv(r,b,"fragment");nt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+X+`
`+Z)}else z!==""?De("WebGLProgram: Program Info Log:",z):(K===""||$==="")&&(B=!1);B&&(I.diagnostics={runnable:V,programLog:z,vertexShader:{log:K,prefix:p},fragmentShader:{log:$,prefix:u}})}r.deleteShader(E),r.deleteShader(b),y=new ac(r,v),A=xN(r,v)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(v,lN)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=cN++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=b,this}let IN=0;class UN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new FN(e),n.set(e,i)),i}}class FN{constructor(e){this.id=IN++,this.code=e,this.usedTimes=0}}function ON(t){return t===cs||t===Fc||t===Oc}function kN(t,e,n,i,r,s){const o=new dS,a=new UN,l=new Set,c=[],f=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,A,P,I,D,G){const L=I.fog,z=D.geometry,K=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,$=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,V=e.get(y.envMap||K,$),B=V&&V.mapping===gu?V.image.height:null,X=m[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&De("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const Z=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ce=Z!==void 0?Z.length:0;let ve=0;z.morphAttributes.position!==void 0&&(ve=1),z.morphAttributes.normal!==void 0&&(ve=2),z.morphAttributes.color!==void 0&&(ve=3);let Xe,ze,ke,Q;if(X){const dt=Si[X];Xe=dt.vertexShader,ze=dt.fragmentShader}else{Xe=y.vertexShader,ze=y.fragmentShader;const dt=a.getVertexShaderStage(y),it=a.getFragmentShaderStage(y);a.update(y,dt,it),ke=dt.id,Q=it.id}const ie=t.getRenderTarget(),ye=t.state.buffers.depth.getReversed(),Ie=D.isInstancedMesh===!0,_e=D.isBatchedMesh===!0,Ve=!!y.map,Lt=!!y.matcap,$e=!!V,Qe=!!y.aoMap,ut=!!y.lightMap,He=!!y.bumpMap&&y.wireframe===!1,mt=!!y.normalMap,Ft=!!y.displacementMap,on=!!y.emissiveMap,gt=!!y.metalnessMap,ht=!!y.roughnessMap,k=y.anisotropy>0,jt=y.clearcoat>0,tt=y.dispersion>0,R=y.retroreflectivity>0,w=y.iridescence>0,H=y.sheen>0,Y=y.transmission>0,J=k&&!!y.anisotropyMap,oe=jt&&!!y.clearcoatMap,ae=jt&&!!y.clearcoatNormalMap,ee=jt&&!!y.clearcoatRoughnessMap,ne=w&&!!y.iridescenceMap,ue=w&&!!y.iridescenceThicknessMap,be=H&&!!y.sheenColorMap,he=H&&!!y.sheenRoughnessMap,de=!!y.specularMap,Ae=!!y.specularColorMap,Ne=!!y.specularIntensityMap,Ue=Y&&!!y.transmissionMap,F=Y&&!!y.thicknessMap,fe=!!y.gradientMap,te=!!y.alphaMap,le=y.alphaTest>0,pe=!!y.alphaHash,re=!!y.extensions;let Re=Pi;y.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Re=t.toneMapping);const Ee={shaderID:X,shaderType:y.type,shaderName:y.name,vertexShader:Xe,fragmentShader:ze,defines:y.defines,customVertexShaderID:ke,customFragmentShaderID:Q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:_e,batchingColor:_e&&D._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&D.instanceColor!==null,instancingMorph:Ie&&D.morphTexture!==null,outputColorSpace:ie===null?t.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ve,matcap:Lt,envMap:$e,envMapMode:$e&&V.mapping,envMapCubeUVHeight:B,aoMap:Qe,lightMap:ut,bumpMap:He,normalMap:mt,displacementMap:Ft,emissiveMap:on,normalMapObjectSpace:mt&&y.normalMapType===uA,normalMapTangentSpace:mt&&y.normalMapType===Rh,packedNormalMap:mt&&y.normalMapType===Rh&&ON(y.normalMap.format),metalnessMap:gt,roughnessMap:ht,anisotropy:k,anisotropyMap:J,clearcoat:jt,clearcoatMap:oe,clearcoatNormalMap:ae,clearcoatRoughnessMap:ee,dispersion:tt,retroreflection:R,iridescence:w,iridescenceMap:ne,iridescenceThicknessMap:ue,sheen:H,sheenColorMap:be,sheenRoughnessMap:he,specularMap:de,specularColorMap:Ae,specularIntensityMap:Ne,transmission:Y,transmissionMap:Ue,thicknessMap:F,gradientMap:fe,opaque:y.transparent===!1&&y.blending===sa&&y.alphaToCoverage===!1,alphaMap:te,alphaTest:le,alphaHash:pe,combine:y.combine,mapUv:Ve&&x(y.map.channel),aoMapUv:Qe&&x(y.aoMap.channel),lightMapUv:ut&&x(y.lightMap.channel),bumpMapUv:He&&x(y.bumpMap.channel),normalMapUv:mt&&x(y.normalMap.channel),displacementMapUv:Ft&&x(y.displacementMap.channel),emissiveMapUv:on&&x(y.emissiveMap.channel),metalnessMapUv:gt&&x(y.metalnessMap.channel),roughnessMapUv:ht&&x(y.roughnessMap.channel),anisotropyMapUv:J&&x(y.anisotropyMap.channel),clearcoatMapUv:oe&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:ae&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:be&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:he&&x(y.sheenRoughnessMap.channel),specularMapUv:de&&x(y.specularMap.channel),specularColorMapUv:Ae&&x(y.specularColorMap.channel),specularIntensityMapUv:Ne&&x(y.specularIntensityMap.channel),transmissionMapUv:Ue&&x(y.transmissionMap.channel),thicknessMapUv:F&&x(y.thicknessMap.channel),alphaMapUv:te&&x(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(mt||k),vertexNormals:!!z.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!z.attributes.uv&&(Ve||te),fog:!!L,useFog:y.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||z.attributes.normal===void 0&&mt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ye,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:ve,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:Re,decodeVideoTexture:Ve&&y.map.isVideoTexture===!0&&Ze.getTransfer(y.map.colorSpace)===at,decodeVideoTextureEmissive:on&&y.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(y.emissiveMap.colorSpace)===at,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ei,flipSided:y.side===Pn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:re&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&y.extensions.multiDraw===!0||_e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ee.vertexUv1s=l.has(1),Ee.vertexUv2s=l.has(2),Ee.vertexUv3s=l.has(3),l.clear(),Ee}function p(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)A.push(P),A.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(u(A,y),g(A,y),A.push(t.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function u(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numSunLights),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numSunLightShadows),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function g(y,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.retroreflection&&o.enable(24),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function M(y){const A=m[y.type];let P;if(A){const I=Si[A];P=jc.clone(I.uniforms)}else P=y.uniforms;return P}function _(y,A){let P=f.get(A);return P!==void 0?++P.usedTimes:(P=new DN(t,A,y,r),c.push(P),f.set(A,P)),P}function E(y){if(--y.usedTimes===0){const A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),f.delete(y.cacheKey),y.destroy()}}function b(y){a.remove(y)}function C(){a.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:M,acquireProgram:_,releaseProgram:E,releaseShaderCache:b,programs:c,dispose:C}}function BN(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function zN(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function ov(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function av(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function a(d,m,x,v,p,u){let g=t[e];return g===void 0?(g={id:d.id,object:d,geometry:m,material:x,materialVariant:o(d),groupOrder:v,renderOrder:d.renderOrder,z:p,group:u},t[e]=g):(g.id=d.id,g.object=d,g.geometry=m,g.material=x,g.materialVariant=o(d),g.groupOrder=v,g.renderOrder=d.renderOrder,g.z=p,g.group=u),e++,g}function l(d,m,x,v,p,u,g){g.reversedDepth===!0&&(p=-p);const M=a(d,m,x,v,p,u);x.transmission>0?i.push(M):x.transparent===!0?r.push(M):n.push(M)}function c(d,m,x,v,p,u){const g=a(d,m,x,v,p,u);x.transmission>0?i.unshift(g):x.transparent===!0?r.unshift(g):n.unshift(g)}function f(d,m){n.length>1&&n.sort(d||zN),i.length>1&&i.sort(m||ov),r.length>1&&r.sort(m||ov)}function h(){for(let d=e,m=t.length;d<m;d++){const x=t[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:f}}function VN(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new av,t.set(i,[o])):r>=s.length?(o=new av,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function HN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new O,color:new Oe};break;case"SpotLight":n={position:new O,direction:new O,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":n={color:new Oe,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function GN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let WN=0;function jN(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function XN(t){const e=new HN,n=GN(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const r=new O,s=new bt,o=new bt;function a(c){let f=0,h=0,d=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let m=0,x=0,v=0,p=0,u=0,g=0,M=0,_=0,E=0,b=0,C=0,y=0,A=0,P=0;c.sort(jN);for(let D=0,G=c.length;D<G;D++){const L=c[D],z=L.color,K=L.intensity,$=L.distance;let V=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===cs?V=L.shadow.map.texture:V=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)f+=z.r*K,h+=z.g*K,d+=z.b*K;else if(L.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(L.sh.coefficients[B],K);P++}else if(L.isSunLight){const B=e.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const X=L.shadow,Z=n.get(L);Z.shadowIntensity=X.intensity,Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),i.sunShadow[x]=Z,i.sunShadowMap[x]=V;const ce=X.getViewportCount();for(let ve=0;ve<ce;ve++)i.sunShadowMatrix[v+ve]=X.getMatrix(ve),i.sunShadowCascade[v+ve]=X._cascadeData[ve];v+=ce,x++}i.sun[m]=B,m++}else if(L.isDirectionalLight){const B=e.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const X=L.shadow,Z=n.get(L);Z.shadowIntensity=X.intensity,Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,i.directionalShadow[p]=Z,i.directionalShadowMap[p]=V,i.directionalShadowMatrix[p]=L.shadow.matrix,E++}i.directional[p]=B,p++}else if(L.isSpotLight){const B=e.get(L);B.position.setFromMatrixPosition(L.matrixWorld),B.color.copy(z).multiplyScalar(K),B.distance=$,B.coneCos=Math.cos(L.angle),B.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),B.decay=L.decay,i.spot[g]=B;const X=L.shadow;if(L.map&&(i.spotLightMap[y]=L.map,y++,X.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[g]=X.matrix,L.castShadow){const Z=n.get(L);Z.shadowIntensity=X.intensity,Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,i.spotShadow[g]=Z,i.spotShadowMap[g]=V,C++}g++}else if(L.isRectAreaLight){const B=e.get(L);B.color.copy(z).multiplyScalar(K),B.halfWidth.set(L.width*.5,0,0),B.halfHeight.set(0,L.height*.5,0),i.rectArea[M]=B,M++}else if(L.isPointLight){const B=e.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),B.distance=L.distance,B.decay=L.decay,L.castShadow){const X=L.shadow,Z=n.get(L);Z.shadowIntensity=X.intensity,Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,Z.shadowCameraNear=X.camera.near,Z.shadowCameraFar=X.camera.far,i.pointShadow[u]=Z,i.pointShadowMap[u]=V,i.pointShadowMatrix[u]=L.shadow.matrix,b++}i.point[u]=B,u++}else if(L.isHemisphereLight){const B=e.get(L);B.skyColor.copy(L.color).multiplyScalar(K),B.groundColor.copy(L.groundColor).multiplyScalar(K),i.hemi[_]=B,_++}}M>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const I=i.hash;(I.sunLength!==m||I.directionalLength!==p||I.pointLength!==u||I.spotLength!==g||I.rectAreaLength!==M||I.hemiLength!==_||I.numSunShadows!==x||I.numDirectionalShadows!==E||I.numPointShadows!==b||I.numSpotShadows!==C||I.numSpotMaps!==y||I.numLightProbes!==P)&&(i.sun.length=m,i.directional.length=p,i.spot.length=g,i.rectArea.length=M,i.point.length=u,i.hemi.length=_,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+y-A,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=P,I.sunLength=m,I.directionalLength=p,I.pointLength=u,I.spotLength=g,I.rectAreaLength=M,I.hemiLength=_,I.numSunShadows=x,I.numDirectionalShadows=E,I.numPointShadows=b,I.numSpotShadows=C,I.numSpotMaps=y,I.numLightProbes=P,i.version=WN++)}function l(c,f){let h=0,d=0,m=0,x=0,v=0,p=0;const u=f.matrixWorldInverse;for(let g=0,M=c.length;g<M;g++){const _=c[g];if(_.isSunLight){const E=i.sun[h];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(u),h++}else if(_.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(u),d++}else if(_.isSpotLight){const E=i.spot[x];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(u),E.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(u),x++}else if(_.isRectAreaLight){const E=i.rectArea[v];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(u),o.identity(),s.copy(_.matrixWorld),s.premultiply(u),o.extractRotation(s),E.halfWidth.set(_.width*.5,0,0),E.halfHeight.set(0,_.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){const E=i.point[m];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(u),m++}else if(_.isHemisphereLight){const E=i.hemi[p];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(u),p++}}}return{setup:a,setupView:l,state:i}}function lv(t){const e=new XN(t),n=[],i=[],r=[];function s(d){h.camera=d,n.length=0,i.length=0,r.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){r.push(d)}function c(){e.setup(n)}function f(d){e.setupView(n,d)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:f,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function $N(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new lv(t),e.set(r,[a])):s>=o.length?(a=new lv(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const YN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qN=`uniform sampler2D shadow_pass;
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
}`,KN=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],ZN=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],cv=new bt,Ho=new O,Bd=new O;function QN(t,e,n){let i=new rm;const r=new Le,s=new Le,o=new At,a=new nR,l=new iR,c={},f=n.maxTextureSize,h={[as]:Pn,[Pn]:as,[Ei]:Ei},d=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:YN,fragmentShader:qN}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const x=new Wt;x.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new je(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nc;let u=this.type;this.render=function(b,C,y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===VC&&(De("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=nc);const A=t.getRenderTarget(),P=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),D=t.state;D.setBlending(Ri),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const G=u!==this.type;G&&C.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(z=>z.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,z=b.length;L<z;L++){const K=b[L],$=K.shadow;if($===void 0){De("WebGLShadowMap:",K,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const V=$.getFrameExtents();r.multiply(V),s.copy($.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/V.x),r.x=s.x*V.x,$.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/V.y),r.y=s.y*V.y,$.mapSize.y=s.y));const B=t.state.buffers.depth.getReversed();if($.camera._reversedDepth=B,$.map===null||G===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===$o){if(K.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Sn(r.x,r.y,{format:cs,type:Nn,minFilter:nn,magFilter:nn,generateMipmaps:!1}),$.map.texture.name=K.name+".shadowMap",$.map.depthTexture=new Ra(r.x,r.y,bi),$.map.depthTexture.name=K.name+".shadowMapDepth",$.map.depthTexture.format=Ji,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=tn,$.map.depthTexture.magFilter=tn}else K.isPointLight?($.map=new bS(r.x),$.map.depthTexture=new KA(r.x,Di)):($.map=new Sn(r.x,r.y),$.map.depthTexture=new Ra(r.x,r.y,Di)),$.map.depthTexture.name=K.name+".shadowMap",$.map.depthTexture.format=Ji,this.type===nc?($.map.depthTexture.compareFunction=B?em:Jp,$.map.depthTexture.minFilter=nn,$.map.depthTexture.magFilter=nn):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=tn,$.map.depthTexture.magFilter=tn);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==r.x||$.map.height!==r.y)&&$.map.setSize(r.x,r.y);const X=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();K.isPointLight!==!0&&$.updateMatrices(K,y);for(let Z=0;Z<X;Z++){const ce=$.getCamera(Z);if(K.isPointLight){const ve=$.camera,Xe=$.matrix,ze=K.distance||ve.far;ze!==ve.far&&(ve.far=ze,ve.updateProjectionMatrix()),Ho.setFromMatrixPosition(K.matrixWorld),ve.position.copy(Ho),Bd.copy(ve.position),Bd.add(KN[Z]),ve.up.copy(ZN[Z]),ve.lookAt(Bd),ve.updateMatrixWorld(),Xe.makeTranslation(-Ho.x,-Ho.y,-Ho.z),cv.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),$._frustum.setFromProjectionMatrix(cv,ve.coordinateSystem,ve.reversedDepth)}if($.map.isWebGLCubeRenderTarget)t.setRenderTarget($.map,Z),t.clear();else{Z===0&&(t.setRenderTarget($.map),t.clear());const ve=$.getViewport(Z);o.set(s.x*ve.x,s.y*ve.y,s.x*ve.z,s.y*ve.w),D.viewport(o)}i=$.getFrustum(Z),_(C,y,ce,K,this.type)}$.isPointLightShadow!==!0&&this.type===$o&&g($,y),$.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(A,P,I)};function g(b,C){const y=e.update(v);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null?b.mapPass=new Sn(r.x,r.y,{format:cs,type:Nn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(C,null,y,d,v,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value.set(b.map.width,b.map.height),m.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(C,null,y,m,v,null)}function M(b,C,y,A){let P=null;const I=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)P=I;else if(P=y.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const D=P.uuid,G=C.uuid;let L=c[D];L===void 0&&(L={},c[D]=L);let z=L[G];z===void 0&&(z=P.clone(),L[G]=z,C.addEventListener("dispose",E)),P=z}if(P.visible=C.visible,P.wireframe=C.wireframe,A===$o?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:h[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const D=t.properties.get(P);D.light=y}return P}function _(b,C,y,A,P){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&P===$o)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);const G=e.update(b),L=b.material;if(Array.isArray(L)){const z=G.groups;for(let K=0,$=z.length;K<$;K++){const V=z[K],B=L[V.materialIndex];if(B&&B.visible){const X=M(b,B,A,P);b.onBeforeShadow(t,b,C,y,G,X,V),t.renderBufferDirect(y,null,G,X,b,V),b.onAfterShadow(t,b,C,y,G,X,V)}}}else if(L.visible){const z=M(b,L,A,P);b.onBeforeShadow(t,b,C,y,G,z,null),t.renderBufferDirect(y,null,G,z,b,null),b.onAfterShadow(t,b,C,y,G,z,null)}}const D=b.children;for(let G=0,L=D.length;G<L;G++)_(D[G],C,y,A,P)}function E(b){b.target.removeEventListener("dispose",E);for(const y in c){const A=c[y],P=b.target.uuid;P in A&&(A[P].dispose(),delete A[P])}}}function JN(t,e){function n(){let F=!1;const fe=new At;let te=null;const le=new At(0,0,0,0);return{setMask:function(pe){te!==pe&&!F&&(t.colorMask(pe,pe,pe,pe),te=pe)},setLocked:function(pe){F=pe},setClear:function(pe,re,Re,Ee,dt){dt===!0&&(pe*=Ee,re*=Ee,Re*=Ee),fe.set(pe,re,Re,Ee),le.equals(fe)===!1&&(t.clearColor(pe,re,Re,Ee),le.copy(fe))},reset:function(){F=!1,te=null,le.set(-1,0,0,0)}}}function i(){let F=!1,fe=!1,te=null,le=null,pe=null;return{setReversed:function(re){if(fe!==re){const Re=e.get("EXT_clip_control");re?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),fe=re;const Ee=pe;pe=null,this.setClear(Ee)}},getReversed:function(){return fe},setTest:function(re){re?ie(t.DEPTH_TEST):ye(t.DEPTH_TEST)},setMask:function(re){te!==re&&!F&&(t.depthMask(re),te=re)},setFunc:function(re){if(fe&&(re=MA[re]),le!==re){switch(re){case jf:t.depthFunc(t.NEVER);break;case Xf:t.depthFunc(t.ALWAYS);break;case $f:t.depthFunc(t.LESS);break;case Ea:t.depthFunc(t.LEQUAL);break;case Yf:t.depthFunc(t.EQUAL);break;case qf:t.depthFunc(t.GEQUAL);break;case Kf:t.depthFunc(t.GREATER);break;case Zf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}le=re}},setLocked:function(re){F=re},setClear:function(re){pe!==re&&(pe=re,fe&&(re=1-re),t.clearDepth(re))},reset:function(){F=!1,te=null,le=null,pe=null,fe=!1}}}function r(){let F=!1,fe=null,te=null,le=null,pe=null,re=null,Re=null,Ee=null,dt=null;return{setTest:function(it){F||(it?ie(t.STENCIL_TEST):ye(t.STENCIL_TEST))},setMask:function(it){fe!==it&&!F&&(t.stencilMask(it),fe=it)},setFunc:function(it,ot,Tt){(te!==it||le!==ot||pe!==Tt)&&(t.stencilFunc(it,ot,Tt),te=it,le=ot,pe=Tt)},setOp:function(it,ot,Tt){(re!==it||Re!==ot||Ee!==Tt)&&(t.stencilOp(it,ot,Tt),re=it,Re=ot,Ee=Tt)},setLocked:function(it){F=it},setClear:function(it){dt!==it&&(t.clearStencil(it),dt=it)},reset:function(){F=!1,fe=null,te=null,le=null,pe=null,re=null,Re=null,Ee=null,dt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let f={},h={},d={},m=new WeakMap,x=[],v=null,p=!1,u=null,g=null,M=null,_=null,E=null,b=null,C=null,y=new Oe(0,0,0),A=0,P=!1,I=null,D=null,G=null,L=null,z=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,V=0;const B=t.getParameter(t.VERSION);B.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(B)[1]),$=V>=1):B.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),$=V>=2);let X=null,Z={};const ce=t.getParameter(t.SCISSOR_BOX),ve=t.getParameter(t.VIEWPORT),Xe=new At().fromArray(ce),ze=new At().fromArray(ve);function ke(F,fe,te,le){const pe=new Uint8Array(4),re=t.createTexture();t.bindTexture(F,re),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Re=0;Re<te;Re++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,le,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(fe+Re,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return re}const Q={};Q[t.TEXTURE_2D]=ke(t.TEXTURE_2D,t.TEXTURE_2D,1),Q[t.TEXTURE_CUBE_MAP]=ke(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[t.TEXTURE_2D_ARRAY]=ke(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Q[t.TEXTURE_3D]=ke(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(t.DEPTH_TEST),o.setFunc(Ea),He(!1),mt(c0),ie(t.CULL_FACE),Qe(Ri);function ie(F){f[F]!==!0&&(t.enable(F),f[F]=!0)}function ye(F){f[F]!==!1&&(t.disable(F),f[F]=!1)}function Ie(F,fe){return d[F]!==fe?(t.bindFramebuffer(F,fe),d[F]=fe,F===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=fe),F===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function _e(F,fe){let te=x,le=!1;if(F){te=m.get(fe),te===void 0&&(te=[],m.set(fe,te));const pe=F.textures;if(te.length!==pe.length||te[0]!==t.COLOR_ATTACHMENT0){for(let re=0,Re=pe.length;re<Re;re++)te[re]=t.COLOR_ATTACHMENT0+re;te.length=pe.length,le=!0}}else te[0]!==t.BACK&&(te[0]=t.BACK,le=!0);le&&t.drawBuffers(te)}function Ve(F){return v!==F?(t.useProgram(F),v=F,!0):!1}const Lt={[Is]:t.FUNC_ADD,[GC]:t.FUNC_SUBTRACT,[WC]:t.FUNC_REVERSE_SUBTRACT};Lt[jC]=t.MIN,Lt[XC]=t.MAX;const $e={[$C]:t.ZERO,[YC]:t.ONE,[qC]:t.SRC_COLOR,[Xy]:t.SRC_ALPHA,[tA]:t.SRC_ALPHA_SATURATE,[JC]:t.DST_COLOR,[ZC]:t.DST_ALPHA,[KC]:t.ONE_MINUS_SRC_COLOR,[$y]:t.ONE_MINUS_SRC_ALPHA,[eA]:t.ONE_MINUS_DST_COLOR,[QC]:t.ONE_MINUS_DST_ALPHA,[nA]:t.CONSTANT_COLOR,[iA]:t.ONE_MINUS_CONSTANT_COLOR,[rA]:t.CONSTANT_ALPHA,[sA]:t.ONE_MINUS_CONSTANT_ALPHA};function Qe(F,fe,te,le,pe,re,Re,Ee,dt,it){if(F===Ri){p===!0&&(ye(t.BLEND),p=!1);return}if(p===!1&&(ie(t.BLEND),p=!0),F!==HC){if(F!==u||it!==P){if((g!==Is||E!==Is)&&(t.blendEquation(t.FUNC_ADD),g=Is,E=Is),it)switch(F){case sa:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Wf:t.blendFunc(t.ONE,t.ONE);break;case u0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case d0:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:nt("WebGLState: Invalid blending: ",F);break}else switch(F){case sa:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Wf:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case u0:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case d0:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",F);break}M=null,_=null,b=null,C=null,y.set(0,0,0),A=0,u=F,P=it}return}pe=pe||fe,re=re||te,Re=Re||le,(fe!==g||pe!==E)&&(t.blendEquationSeparate(Lt[fe],Lt[pe]),g=fe,E=pe),(te!==M||le!==_||re!==b||Re!==C)&&(t.blendFuncSeparate($e[te],$e[le],$e[re],$e[Re]),M=te,_=le,b=re,C=Re),(Ee.equals(y)===!1||dt!==A)&&(t.blendColor(Ee.r,Ee.g,Ee.b,dt),y.copy(Ee),A=dt),u=F,P=!1}function ut(F,fe){F.side===Ei?ye(t.CULL_FACE):ie(t.CULL_FACE);let te=F.side===Pn;fe&&(te=!te),He(te),F.blending===sa&&F.transparent===!1?Qe(Ri):Qe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const le=F.stencilWrite;a.setTest(le),le&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),on(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ie(t.SAMPLE_ALPHA_TO_COVERAGE):ye(t.SAMPLE_ALPHA_TO_COVERAGE)}function He(F){I!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),I=F)}function mt(F){F!==BC?(ie(t.CULL_FACE),F!==D&&(F===c0?t.cullFace(t.BACK):F===zC?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ye(t.CULL_FACE),D=F}function Ft(F){F!==G&&($&&t.lineWidth(F),G=F)}function on(F,fe,te){F?(ie(t.POLYGON_OFFSET_FILL),(L!==fe||z!==te)&&(L=fe,z=te,o.getReversed()&&(fe=-fe),t.polygonOffset(fe,te))):ye(t.POLYGON_OFFSET_FILL)}function gt(F){F?ie(t.SCISSOR_TEST):ye(t.SCISSOR_TEST)}function ht(F){F===void 0&&(F=t.TEXTURE0+K-1),X!==F&&(t.activeTexture(F),X=F)}function k(F,fe,te){te===void 0&&(X===null?te=t.TEXTURE0+K-1:te=X);let le=Z[te];le===void 0&&(le={type:void 0,texture:void 0},Z[te]=le),(le.type!==F||le.texture!==fe)&&(X!==te&&(t.activeTexture(te),X=te),t.bindTexture(F,fe||Q[F]),le.type=F,le.texture=fe)}function jt(){const F=Z[X];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function tt(){try{t.compressedTexImage2D(...arguments)}catch(F){nt("WebGLState:",F)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(F){nt("WebGLState:",F)}}function w(){try{t.texSubImage2D(...arguments)}catch(F){nt("WebGLState:",F)}}function H(){try{t.texSubImage3D(...arguments)}catch(F){nt("WebGLState:",F)}}function Y(){try{t.compressedTexSubImage2D(...arguments)}catch(F){nt("WebGLState:",F)}}function J(){try{t.compressedTexSubImage3D(...arguments)}catch(F){nt("WebGLState:",F)}}function oe(){try{t.texStorage2D(...arguments)}catch(F){nt("WebGLState:",F)}}function ae(){try{t.texStorage3D(...arguments)}catch(F){nt("WebGLState:",F)}}function ee(){try{t.texImage2D(...arguments)}catch(F){nt("WebGLState:",F)}}function ne(){try{t.texImage3D(...arguments)}catch(F){nt("WebGLState:",F)}}function ue(F){return h[F]!==void 0?h[F]:t.getParameter(F)}function be(F,fe){h[F]!==fe&&(t.pixelStorei(F,fe),h[F]=fe)}function he(F){Xe.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),Xe.copy(F))}function de(F){ze.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),ze.copy(F))}function Ae(F,fe){let te=c.get(fe);te===void 0&&(te=new WeakMap,c.set(fe,te));let le=te.get(F);le===void 0&&(le=t.getUniformBlockIndex(fe,F.name),te.set(F,le))}function Ne(F,fe){const le=c.get(fe).get(F);l.get(fe)!==le&&(t.uniformBlockBinding(fe,le,F.__bindingPointIndex),l.set(fe,le))}function Ue(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},h={},X=null,Z={},d={},m=new WeakMap,x=[],v=null,p=!1,u=null,g=null,M=null,_=null,E=null,b=null,C=null,y=new Oe(0,0,0),A=0,P=!1,I=null,D=null,G=null,L=null,z=null,Xe.set(0,0,t.canvas.width,t.canvas.height),ze.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ie,disable:ye,bindFramebuffer:Ie,drawBuffers:_e,useProgram:Ve,setBlending:Qe,setMaterial:ut,setFlipSided:He,setCullFace:mt,setLineWidth:Ft,setPolygonOffset:on,setScissorTest:gt,activeTexture:ht,bindTexture:k,unbindTexture:jt,compressedTexImage2D:tt,compressedTexImage3D:R,texImage2D:ee,texImage3D:ne,pixelStorei:be,getParameter:ue,updateUBOMapping:Ae,uniformBlockBinding:Ne,texStorage2D:oe,texStorage3D:ae,texSubImage2D:w,texSubImage3D:H,compressedTexSubImage2D:Y,compressedTexSubImage3D:J,scissor:he,viewport:de,reset:Ue}}function eL(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Le,f=new WeakMap,h=new Set;let d;const m=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,w){return x?new OffscreenCanvas(R,w):zc("canvas")}function p(R,w,H){let Y=1;const J=tt(R);if((J.width>H||J.height>H)&&(Y=H/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const oe=Math.floor(Y*J.width),ae=Math.floor(Y*J.height);d===void 0&&(d=v(oe,ae));const ee=w?v(oe,ae):d;return ee.width=oe,ee.height=ae,ee.getContext("2d").drawImage(R,0,0,oe,ae),De("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+oe+"x"+ae+")."),ee}else return"data"in R&&De("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function u(R){return R.generateMipmaps}function g(R){t.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(R,w,H,Y,J,oe=!1){if(R!==null){if(t[R]!==void 0)return t[R];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ae;Y&&(ae=e.get("EXT_texture_norm16"),ae||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=w;if(w===t.RED&&(H===t.FLOAT&&(ee=t.R32F),H===t.HALF_FLOAT&&(ee=t.R16F),H===t.UNSIGNED_BYTE&&(ee=t.R8),H===t.UNSIGNED_SHORT&&ae&&(ee=ae.R16_EXT),H===t.SHORT&&ae&&(ee=ae.R16_SNORM_EXT)),w===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(ee=t.R8UI),H===t.UNSIGNED_SHORT&&(ee=t.R16UI),H===t.UNSIGNED_INT&&(ee=t.R32UI),H===t.BYTE&&(ee=t.R8I),H===t.SHORT&&(ee=t.R16I),H===t.INT&&(ee=t.R32I)),w===t.RG&&(H===t.FLOAT&&(ee=t.RG32F),H===t.HALF_FLOAT&&(ee=t.RG16F),H===t.UNSIGNED_BYTE&&(ee=t.RG8),H===t.UNSIGNED_SHORT&&ae&&(ee=ae.RG16_EXT),H===t.SHORT&&ae&&(ee=ae.RG16_SNORM_EXT)),w===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(ee=t.RG8UI),H===t.UNSIGNED_SHORT&&(ee=t.RG16UI),H===t.UNSIGNED_INT&&(ee=t.RG32UI),H===t.BYTE&&(ee=t.RG8I),H===t.SHORT&&(ee=t.RG16I),H===t.INT&&(ee=t.RG32I)),w===t.RGB_INTEGER&&(H===t.UNSIGNED_BYTE&&(ee=t.RGB8UI),H===t.UNSIGNED_SHORT&&(ee=t.RGB16UI),H===t.UNSIGNED_INT&&(ee=t.RGB32UI),H===t.BYTE&&(ee=t.RGB8I),H===t.SHORT&&(ee=t.RGB16I),H===t.INT&&(ee=t.RGB32I)),w===t.RGBA_INTEGER&&(H===t.UNSIGNED_BYTE&&(ee=t.RGBA8UI),H===t.UNSIGNED_SHORT&&(ee=t.RGBA16UI),H===t.UNSIGNED_INT&&(ee=t.RGBA32UI),H===t.BYTE&&(ee=t.RGBA8I),H===t.SHORT&&(ee=t.RGBA16I),H===t.INT&&(ee=t.RGBA32I)),w===t.RGB&&(H===t.UNSIGNED_SHORT&&ae&&(ee=ae.RGB16_EXT),H===t.SHORT&&ae&&(ee=ae.RGB16_SNORM_EXT),H===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),H===t.UNSIGNED_INT_10F_11F_11F_REV&&(ee=t.R11F_G11F_B10F)),w===t.RGBA){const ne=oe?Bc:Ze.getTransfer(J);H===t.FLOAT&&(ee=t.RGBA32F),H===t.HALF_FLOAT&&(ee=t.RGBA16F),H===t.UNSIGNED_BYTE&&(ee=ne===at?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT&&ae&&(ee=ae.RGBA16_EXT),H===t.SHORT&&ae&&(ee=ae.RGBA16_SNORM_EXT),H===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function E(R,w){let H;return R?w===null||w===Di||w===Ca?H=t.DEPTH24_STENCIL8:w===bi?H=t.DEPTH32F_STENCIL8:w===Ta&&(H=t.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Di||w===Ca?H=t.DEPTH_COMPONENT24:w===bi?H=t.DEPTH_COMPONENT32F:w===Ta&&(H=t.DEPTH_COMPONENT16),H}function b(R,w){return u(R)===!0||R.isFramebufferTexture&&R.minFilter!==tn&&R.minFilter!==nn?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function C(R){const w=R.target;w.removeEventListener("dispose",C),A(w),w.isVideoTexture&&f.delete(w),w.isHTMLTexture&&h.delete(w)}function y(R){const w=R.target;w.removeEventListener("dispose",y),I(w)}function A(R){const w=i.get(R);if(w.__webglInit===void 0)return;const H=R.source,Y=m.get(H);if(Y){const J=Y[w.__cacheKey];J.usedTimes--,J.usedTimes===0&&P(R),Object.keys(Y).length===0&&m.delete(H)}i.remove(R)}function P(R){const w=i.get(R);t.deleteTexture(w.__webglTexture);const H=R.source,Y=m.get(H);delete Y[w.__cacheKey],o.memory.textures--}function I(R){const w=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(w.__webglFramebuffer[Y]))for(let J=0;J<w.__webglFramebuffer[Y].length;J++)t.deleteFramebuffer(w.__webglFramebuffer[Y][J]);else t.deleteFramebuffer(w.__webglFramebuffer[Y]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[Y])}else{if(Array.isArray(w.__webglFramebuffer))for(let Y=0;Y<w.__webglFramebuffer.length;Y++)t.deleteFramebuffer(w.__webglFramebuffer[Y]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Y=0;Y<w.__webglColorRenderbuffer.length;Y++)w.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[Y]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const H=R.textures;for(let Y=0,J=H.length;Y<J;Y++){const oe=i.get(H[Y]);oe.__webglTexture&&(t.deleteTexture(oe.__webglTexture),o.memory.textures--),i.remove(H[Y])}i.remove(R)}let D=0;function G(){D=0}function L(){return D}function z(R){D=R}function K(){const R=D;return R>=r.maxTextures&&De("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+r.maxTextures),D+=1,R}function $(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function V(R,w){const H=i.get(R);if(R.isVideoTexture&&k(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&H.__version!==R.version){const Y=R.image;if(Y===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(H,R,w);return}}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+w)}function B(R,w){const H=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){ye(H,R,w);return}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+w)}function X(R,w){const H=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){ye(H,R,w);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+w)}function Z(R,w){const H=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&H.__version!==R.version){Ie(H,R,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+w)}const ce={[ba]:t.REPEAT,[ji]:t.CLAMP_TO_EDGE,[Qf]:t.MIRRORED_REPEAT},ve={[tn]:t.NEAREST,[lA]:t.NEAREST_MIPMAP_NEAREST,[hl]:t.NEAREST_MIPMAP_LINEAR,[nn]:t.LINEAR,[ad]:t.LINEAR_MIPMAP_NEAREST,[Kr]:t.LINEAR_MIPMAP_LINEAR},Xe={[fA]:t.NEVER,[vA]:t.ALWAYS,[hA]:t.LESS,[Jp]:t.LEQUAL,[pA]:t.EQUAL,[em]:t.GEQUAL,[mA]:t.GREATER,[gA]:t.NOTEQUAL};function ze(R,w){if(w.type===bi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===nn||w.magFilter===ad||w.magFilter===hl||w.magFilter===Kr||w.minFilter===nn||w.minFilter===ad||w.minFilter===hl||w.minFilter===Kr)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,ce[w.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,ce[w.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,ce[w.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,ve[w.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,ve[w.minFilter]),w.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Xe[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===tn||w.minFilter!==hl&&w.minFilter!==Kr||w.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function ke(R,w){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",C));const Y=w.source;let J=m.get(Y);J===void 0&&(J={},m.set(Y,J));const oe=$(w);if(oe!==R.__cacheKey){J[oe]===void 0&&(J[oe]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),J[oe].usedTimes++;const ae=J[R.__cacheKey];ae!==void 0&&(J[R.__cacheKey].usedTimes--,ae.usedTimes===0&&P(w)),R.__cacheKey=oe,R.__webglTexture=J[oe].texture}return H}function Q(R,w,H){return Math.floor(Math.floor(R/H)/w)}function ie(R,w,H,Y){const oe=R.updateRanges;if(oe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,w.width,w.height,H,Y,w.data);else{oe.sort((be,he)=>be.start-he.start);let ae=0;for(let be=1;be<oe.length;be++){const he=oe[ae],de=oe[be],Ae=he.start+he.count,Ne=Q(de.start,w.width,4),Ue=Q(he.start,w.width,4);de.start<=Ae+1&&Ne===Ue&&Q(de.start+de.count-1,w.width,4)===Ne?he.count=Math.max(he.count,de.start+de.count-he.start):(++ae,oe[ae]=de)}oe.length=ae+1;const ee=n.getParameter(t.UNPACK_ROW_LENGTH),ne=n.getParameter(t.UNPACK_SKIP_PIXELS),ue=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,w.width);for(let be=0,he=oe.length;be<he;be++){const de=oe[be],Ae=Math.floor(de.start/4),Ne=Math.ceil(de.count/4),Ue=Ae%w.width,F=Math.floor(Ae/w.width),fe=Ne,te=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ue),n.pixelStorei(t.UNPACK_SKIP_ROWS,F),n.texSubImage2D(t.TEXTURE_2D,0,Ue,F,fe,te,H,Y,w.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ee),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ne),n.pixelStorei(t.UNPACK_SKIP_ROWS,ue)}}function ye(R,w,H){let Y=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Y=t.TEXTURE_3D);const J=ke(R,w),oe=w.source;n.bindTexture(Y,R.__webglTexture,t.TEXTURE0+H);const ae=i.get(oe);if(oe.version!==ae.__version||J===!0){if(n.activeTexture(t.TEXTURE0+H),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const te=Ze.getPrimaries(Ze.workingColorSpace),le=w.colorSpace===Sr?null:Ze.getPrimaries(w.colorSpace),pe=w.colorSpace===Sr||te===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}n.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment);let ne=p(w.image,!1,r.maxTextureSize);ne=jt(w,ne);const ue=s.convert(w.format,w.colorSpace),be=s.convert(w.type);let he=_(w.internalFormat,ue,be,w.normalized,w.colorSpace,w.isVideoTexture);ze(Y,w);let de;const Ae=w.mipmaps,Ne=w.isVideoTexture!==!0,Ue=ae.__version===void 0||J===!0,F=oe.dataReady,fe=b(w,ne);if(w.isDepthTexture)he=E(w.format===Zr,w.type),Ue&&(Ne?n.texStorage2D(t.TEXTURE_2D,1,he,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,he,ne.width,ne.height,0,ue,be,null));else if(w.isDataTexture)if(Ae.length>0){Ne&&Ue&&n.texStorage2D(t.TEXTURE_2D,fe,he,Ae[0].width,Ae[0].height);for(let te=0,le=Ae.length;te<le;te++)de=Ae[te],Ne?F&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,de.width,de.height,ue,be,de.data):n.texImage2D(t.TEXTURE_2D,te,he,de.width,de.height,0,ue,be,de.data);w.generateMipmaps=!1}else Ne?(Ue&&n.texStorage2D(t.TEXTURE_2D,fe,he,ne.width,ne.height),F&&ie(w,ne,ue,be)):n.texImage2D(t.TEXTURE_2D,0,he,ne.width,ne.height,0,ue,be,ne.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ne&&Ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,he,Ae[0].width,Ae[0].height,ne.depth);for(let te=0,le=Ae.length;te<le;te++)if(de=Ae[te],w.format!==li)if(ue!==null)if(Ne){if(F)if(w.layerUpdates.size>0){const pe=V0(de.width,de.height,w.format,w.type);for(const re of w.layerUpdates){const Re=de.data.subarray(re*pe/de.data.BYTES_PER_ELEMENT,(re+1)*pe/de.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,re,de.width,de.height,1,ue,Re)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,ne.depth,ue,de.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,te,he,de.width,de.height,ne.depth,0,de.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,ne.depth,ue,be,de.data):n.texImage3D(t.TEXTURE_2D_ARRAY,te,he,de.width,de.height,ne.depth,0,ue,be,de.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{Ne&&Ue&&n.texStorage2D(t.TEXTURE_2D,fe,he,Ae[0].width,Ae[0].height);for(let te=0,le=Ae.length;te<le;te++)de=Ae[te],w.format!==li?ue!==null?Ne?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,te,0,0,de.width,de.height,ue,de.data):n.compressedTexImage2D(t.TEXTURE_2D,te,he,de.width,de.height,0,de.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?F&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,de.width,de.height,ue,be,de.data):n.texImage2D(t.TEXTURE_2D,te,he,de.width,de.height,0,ue,be,de.data)}else if(w.isDataArrayTexture)if(Ne){if(Ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,he,ne.width,ne.height,ne.depth),F)if(w.layerUpdates.size>0){const te=V0(ne.width,ne.height,w.format,w.type);for(const le of w.layerUpdates){const pe=ne.data.subarray(le*te/ne.data.BYTES_PER_ELEMENT,(le+1)*te/ne.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,le,ne.width,ne.height,1,ue,be,pe)}w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ue,be,ne.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,he,ne.width,ne.height,ne.depth,0,ue,be,ne.data);else if(w.isData3DTexture)Ne?(Ue&&n.texStorage3D(t.TEXTURE_3D,fe,he,ne.width,ne.height,ne.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ue,be,ne.data)):n.texImage3D(t.TEXTURE_3D,0,he,ne.width,ne.height,ne.depth,0,ue,be,ne.data);else if(w.isFramebufferTexture){if(Ue)if(Ne)n.texStorage2D(t.TEXTURE_2D,fe,he,ne.width,ne.height);else{let te=ne.width,le=ne.height;for(let pe=0;pe<fe;pe++)n.texImage2D(t.TEXTURE_2D,pe,he,te,le,0,ue,be,null),te>>=1,le>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in t){const te=t.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ne.parentNode!==te){te.appendChild(ne),h.add(w),te.onpaint=le=>{const pe=le.changedElements;for(const re of h)pe.includes(re.image)&&(re.needsUpdate=!0)},te.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ne);else{const pe=t.RGBA,re=t.RGBA,Re=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,pe,re,Re,ne)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(Ne&&Ue){const te=tt(Ae[0]);n.texStorage2D(t.TEXTURE_2D,fe,he,te.width,te.height)}for(let te=0,le=Ae.length;te<le;te++)de=Ae[te],Ne?F&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,ue,be,de):n.texImage2D(t.TEXTURE_2D,te,he,ue,be,de);w.generateMipmaps=!1}else if(Ne){if(Ue){const te=tt(ne);n.texStorage2D(t.TEXTURE_2D,fe,he,te.width,te.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue,be,ne)}else n.texImage2D(t.TEXTURE_2D,0,he,ue,be,ne);u(w)&&g(Y),ae.__version=oe.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function Ie(R,w,H){if(w.image.length!==6)return;const Y=ke(R,w),J=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+H);const oe=i.get(J);if(J.version!==oe.__version||Y===!0){n.activeTexture(t.TEXTURE0+H);const ae=Ze.getPrimaries(Ze.workingColorSpace),ee=w.colorSpace===Sr?null:Ze.getPrimaries(w.colorSpace),ne=w.colorSpace===Sr||ae===ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const ue=w.isCompressedTexture||w.image[0].isCompressedTexture,be=w.image[0]&&w.image[0].isDataTexture,he=[];for(let re=0;re<6;re++)!ue&&!be?he[re]=p(w.image[re],!0,r.maxCubemapSize):he[re]=be?w.image[re].image:w.image[re],he[re]=jt(w,he[re]);const de=he[0],Ae=s.convert(w.format,w.colorSpace),Ne=s.convert(w.type),Ue=_(w.internalFormat,Ae,Ne,w.normalized,w.colorSpace),F=w.isVideoTexture!==!0,fe=oe.__version===void 0||Y===!0,te=J.dataReady;let le=b(w,de);ze(t.TEXTURE_CUBE_MAP,w);let pe;if(ue){F&&fe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,le,Ue,de.width,de.height);for(let re=0;re<6;re++){pe=he[re].mipmaps;for(let Re=0;Re<pe.length;Re++){const Ee=pe[Re];w.format!==li?Ae!==null?F?te&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re,0,0,Ee.width,Ee.height,Ae,Ee.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re,Ue,Ee.width,Ee.height,0,Ee.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re,0,0,Ee.width,Ee.height,Ae,Ne,Ee.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re,Ue,Ee.width,Ee.height,0,Ae,Ne,Ee.data)}}}else{if(pe=w.mipmaps,F&&fe){pe.length>0&&le++;const re=tt(he[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,le,Ue,re.width,re.height)}for(let re=0;re<6;re++)if(be){F?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,he[re].width,he[re].height,Ae,Ne,he[re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ue,he[re].width,he[re].height,0,Ae,Ne,he[re].data);for(let Re=0;Re<pe.length;Re++){const dt=pe[Re].image[re].image;F?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re+1,0,0,dt.width,dt.height,Ae,Ne,dt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re+1,Ue,dt.width,dt.height,0,Ae,Ne,dt.data)}}else{F?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ae,Ne,he[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ue,Ae,Ne,he[re]);for(let Re=0;Re<pe.length;Re++){const Ee=pe[Re];F?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re+1,0,0,Ae,Ne,Ee.image[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re+1,Ue,Ae,Ne,Ee.image[re])}}}u(w)&&g(t.TEXTURE_CUBE_MAP),oe.__version=J.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function _e(R,w,H,Y,J,oe){const ae=s.convert(H.format,H.colorSpace),ee=s.convert(H.type),ne=_(H.internalFormat,ae,ee,H.normalized,H.colorSpace),ue=i.get(w),be=i.get(H);if(be.__renderTarget=w,!ue.__hasExternalTextures){const he=Math.max(1,w.width>>oe),de=Math.max(1,w.height>>oe);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,oe,ne,he,de,w.depth,0,ae,ee,null):n.texImage2D(J,oe,ne,he,de,0,ae,ee,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),ht(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,J,be.__webglTexture,0,gt(w)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,J,be.__webglTexture,oe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ve(R,w,H){if(t.bindRenderbuffer(t.RENDERBUFFER,R),w.depthBuffer){const Y=w.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,oe=E(w.stencilBuffer,J),ae=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;ht(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,gt(w),oe,w.width,w.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,gt(w),oe,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,oe,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,R)}else{const Y=w.textures;for(let J=0;J<Y.length;J++){const oe=Y[J],ae=s.convert(oe.format,oe.colorSpace),ee=s.convert(oe.type),ne=_(oe.internalFormat,ae,ee,oe.normalized,oe.colorSpace);ht(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,gt(w),ne,w.width,w.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,gt(w),ne,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,ne,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Lt(R,w,H){const Y=w.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=i.get(w.depthTexture);if(J.__renderTarget=w,(!J.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Y){if(J.__webglInit===void 0&&(J.__webglInit=!0,w.depthTexture.addEventListener("dispose",C)),J.__webglTexture===void 0){J.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),ze(t.TEXTURE_CUBE_MAP,w.depthTexture);const ue=s.convert(w.depthTexture.format),be=s.convert(w.depthTexture.type);let he;w.depthTexture.format===Ji?he=t.DEPTH_COMPONENT24:w.depthTexture.format===Zr&&(he=t.DEPTH24_STENCIL8);for(let de=0;de<6;de++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,he,w.width,w.height,0,ue,be,null)}}else V(w.depthTexture,0);const oe=J.__webglTexture,ae=gt(w),ee=Y?t.TEXTURE_CUBE_MAP_POSITIVE_X+H:t.TEXTURE_2D,ne=w.depthTexture.format===Zr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(w.depthTexture.format===Ji)ht(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,ee,oe,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,ne,ee,oe,0);else if(w.depthTexture.format===Zr)ht(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,ee,oe,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,ne,ee,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $e(R){const w=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){const Y=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Y){const J=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),w.__depthDisposeCallback=J}w.__boundDepthTexture=Y}if(R.depthTexture&&!w.__autoAllocateDepthBuffer)if(H)for(let Y=0;Y<6;Y++)Lt(w.__webglFramebuffer[Y],R,Y);else{const Y=R.texture.mipmaps;Y&&Y.length>0?Lt(w.__webglFramebuffer[0],R,0):Lt(w.__webglFramebuffer,R,0)}else if(H){w.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[Y]),w.__webglDepthbuffer[Y]===void 0)w.__webglDepthbuffer[Y]=t.createRenderbuffer(),Ve(w.__webglDepthbuffer[Y],R,!1);else{const J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=w.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,oe)}}else{const Y=R.texture.mipmaps;if(Y&&Y.length>0?n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=t.createRenderbuffer(),Ve(w.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=w.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,oe)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Qe(R,w,H){const Y=i.get(R);w!==void 0&&_e(Y.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&$e(R)}function ut(R){const w=R.texture,H=i.get(R),Y=i.get(w);R.addEventListener("dispose",y);const J=R.textures,oe=R.isWebGLCubeRenderTarget===!0,ae=J.length>1;if(ae||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=w.version,o.memory.textures++),oe){H.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[ee]=[];for(let ne=0;ne<w.mipmaps.length;ne++)H.__webglFramebuffer[ee][ne]=t.createFramebuffer()}else H.__webglFramebuffer[ee]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let ee=0;ee<w.mipmaps.length;ee++)H.__webglFramebuffer[ee]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(ae)for(let ee=0,ne=J.length;ee<ne;ee++){const ue=i.get(J[ee]);ue.__webglTexture===void 0&&(ue.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&ht(R)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ee=0;ee<J.length;ee++){const ne=J[ee];H.__webglColorRenderbuffer[ee]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[ee]);const ue=s.convert(ne.format,ne.colorSpace),be=s.convert(ne.type),he=_(ne.internalFormat,ue,be,ne.normalized,ne.colorSpace,R.isXRRenderTarget===!0),de=gt(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,de,he,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ee,t.RENDERBUFFER,H.__webglColorRenderbuffer[ee])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),Ve(H.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(oe){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),ze(t.TEXTURE_CUBE_MAP,w);for(let ee=0;ee<6;ee++)if(w.mipmaps&&w.mipmaps.length>0)for(let ne=0;ne<w.mipmaps.length;ne++)_e(H.__webglFramebuffer[ee][ne],R,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ne);else _e(H.__webglFramebuffer[ee],R,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);u(w)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ae){for(let ee=0,ne=J.length;ee<ne;ee++){const ue=J[ee],be=i.get(ue);let he=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(he=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,be.__webglTexture),ze(he,ue),_e(H.__webglFramebuffer,R,ue,t.COLOR_ATTACHMENT0+ee,he,0),u(ue)&&g(he)}n.unbindTexture()}else{let ee=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ee=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ee,Y.__webglTexture),ze(ee,w),w.mipmaps&&w.mipmaps.length>0)for(let ne=0;ne<w.mipmaps.length;ne++)_e(H.__webglFramebuffer[ne],R,w,t.COLOR_ATTACHMENT0,ee,ne);else _e(H.__webglFramebuffer,R,w,t.COLOR_ATTACHMENT0,ee,0);u(w)&&g(ee),n.unbindTexture()}R.depthBuffer&&$e(R)}function He(R){const w=R.textures;for(let H=0,Y=w.length;H<Y;H++){const J=w[H];if(u(J)){const oe=M(R),ae=i.get(J).__webglTexture;n.bindTexture(oe,ae),g(oe),n.unbindTexture()}}}const mt=[],Ft=[];function on(R){if(R.samples>0){if(ht(R)===!1){const w=R.textures,H=R.width,Y=R.height;let J=t.COLOR_BUFFER_BIT;const oe=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=i.get(R),ee=w.length>1;if(ee)for(let ue=0;ue<w.length;ue++)n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const ne=R.texture.mipmaps;ne&&ne.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let ue=0;ue<w.length;ue++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),ee){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ae.__webglColorRenderbuffer[ue]);const be=i.get(w[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,be,0)}t.blitFramebuffer(0,0,H,Y,0,0,H,Y,J,t.NEAREST),l===!0&&(mt.length=0,Ft.length=0,mt.push(t.COLOR_ATTACHMENT0+ue),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(mt.push(oe),Ft.push(oe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ft)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,mt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ee)for(let ue=0;ue<w.length;ue++){n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,ae.__webglColorRenderbuffer[ue]);const be=i.get(w[ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){const w=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function gt(R){return Math.min(r.maxSamples,R.samples)}function ht(R){const w=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function k(R){const w=o.render.frame;f.get(R)!==w&&(f.set(R,w),R.update())}function jt(R,w){const H=R.colorSpace,Y=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==kc&&H!==Sr&&(Ze.getTransfer(H)===at?(Y!==li||J!==Bn)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",H)),w}function tt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=G,this.getTextureUnits=L,this.setTextureUnits=z,this.setTexture2D=V,this.setTexture2DArray=B,this.setTexture3D=X,this.setTextureCube=Z,this.rebindTextures=Qe,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=on,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=ht,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function tL(t,e){function n(i,r=Sr){let s;const o=Ze.getTransfer(r);if(i===Bn)return t.UNSIGNED_BYTE;if(i===Yp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===qp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===rS)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===sS)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===nS)return t.BYTE;if(i===iS)return t.SHORT;if(i===Ta)return t.UNSIGNED_SHORT;if(i===$p)return t.INT;if(i===Di)return t.UNSIGNED_INT;if(i===bi)return t.FLOAT;if(i===Nn)return t.HALF_FLOAT;if(i===oS)return t.ALPHA;if(i===aS)return t.RGB;if(i===li)return t.RGBA;if(i===Ji)return t.DEPTH_COMPONENT;if(i===Zr)return t.DEPTH_STENCIL;if(i===lS)return t.RED;if(i===Kp)return t.RED_INTEGER;if(i===cs)return t.RG;if(i===Zp)return t.RG_INTEGER;if(i===Qp)return t.RGBA_INTEGER;if(i===ic||i===rc||i===sc||i===oc)if(o===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ic)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===oc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ic)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===oc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Jf||i===eh||i===th||i===nh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Jf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===eh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===th)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ih||i===rh||i===sh||i===oh||i===ah||i===Fc||i===lh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ih||i===rh)return o===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===sh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===oh)return s.COMPRESSED_R11_EAC;if(i===ah)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Fc)return s.COMPRESSED_RG11_EAC;if(i===lh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ch||i===uh||i===dh||i===fh||i===hh||i===ph||i===mh||i===gh||i===vh||i===xh||i===_h||i===yh||i===Sh||i===Mh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ch)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===uh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===dh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ph)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_h)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Mh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wh||i===Eh||i===bh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===wh)return o===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Eh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Th||i===Ch||i===Oc||i===Ah)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Th)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ch)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Oc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ah)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ca?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const nL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iL=`
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

}`;class rL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new _S(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new hn({vertexShader:nL,fragmentShader:iL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new je(new yi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sL extends fs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,d=null,m=null,x=null;const v=typeof XRWebGLBinding<"u",p=new rL,u={},g=n.getContextAttributes();let M=null,_=null;const E=[],b=[],C=new Le;let y=null,A=null;const P=new kn;P.viewport=new At;const I=new kn;I.viewport=new At;const D=[P,I],G=new cR;let L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ie=E[Q];return ie===void 0&&(ie=new gd,E[Q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Q){let ie=E[Q];return ie===void 0&&(ie=new gd,E[Q]=ie),ie.getGripSpace()},this.getHand=function(Q){let ie=E[Q];return ie===void 0&&(ie=new gd,E[Q]=ie),ie.getHandSpace()};function K(Q){const ie=b.indexOf(Q.inputSource);if(ie===-1)return;const ye=E[ie];ye!==void 0&&(ye.update(Q.inputSource,Q.frame,c||o),ye.dispatchEvent({type:Q.type,data:Q.inputSource}))}function $(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",V);for(let Q=0;Q<E.length;Q++){const ie=b[Q];ie!==null&&(b[Q]=null,E[Q].disconnect(ie))}L=null,z=null,p.reset();for(const Q in u)delete u[Q];if(e.setRenderTarget(M),m=null,d=null,h=null,r=null,_=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(C.width,C.height,!1),A!==null){const Q=A.camera;Q.fov=A.fov,Q.zoom=A.zoom,Q.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",$),r.addEventListener("inputsourceschange",V),g.xrCompatible!==!0&&await n.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Ie=null,_e=null;g.depth&&(_e=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ye=g.stencil?Zr:Ji,Ie=g.stencil?Ca:Di);const Ve={colorFormat:n.RGBA8,depthFormat:_e,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Ve),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Sn(d.textureWidth,d.textureHeight,{format:li,type:Bn,depthTexture:new Ra(d.textureWidth,d.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const ye={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,ye),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new Sn(m.framebufferWidth,m.framebufferHeight,{format:li,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ke.setContext(r),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function V(Q){for(let ie=0;ie<Q.removed.length;ie++){const ye=Q.removed[ie],Ie=b.indexOf(ye);Ie>=0&&(b[Ie]=null,E[Ie].disconnect(ye))}for(let ie=0;ie<Q.added.length;ie++){const ye=Q.added[ie];let Ie=b.indexOf(ye);if(Ie===-1){for(let Ve=0;Ve<E.length;Ve++)if(Ve>=b.length){b.push(ye),Ie=Ve;break}else if(b[Ve]===null){b[Ve]=ye,Ie=Ve;break}if(Ie===-1)break}const _e=E[Ie];_e&&_e.connect(ye)}}const B=new O,X=new O;function Z(Q,ie,ye){B.setFromMatrixPosition(ie.matrixWorld),X.setFromMatrixPosition(ye.matrixWorld);const Ie=B.distanceTo(X),_e=ie.projectionMatrix.elements,Ve=ye.projectionMatrix.elements,Lt=_e[14]/(_e[10]-1),$e=_e[14]/(_e[10]+1),Qe=(_e[9]+1)/_e[5],ut=(_e[9]-1)/_e[5],He=(_e[8]-1)/_e[0],mt=(Ve[8]+1)/Ve[0],Ft=Lt*He,on=Lt*mt,gt=Ie/(-He+mt),ht=gt*-He;if(ie.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ht),Q.translateZ(gt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),_e[10]===-1)Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const k=Lt+gt,jt=$e+gt,tt=Ft-ht,R=on+(Ie-ht),w=Qe*$e/jt*k,H=ut*$e/jt*k;Q.projectionMatrix.makePerspective(tt,R,w,H,k,jt),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ce(Q,ie){ie===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ie.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ie=Q.near,ye=Q.far;p.texture!==null&&(p.depthNear>0&&(ie=p.depthNear),p.depthFar>0&&(ye=p.depthFar)),G.near=I.near=P.near=ie,G.far=I.far=P.far=ye,(L!==G.near||z!==G.far)&&(r.updateRenderState({depthNear:G.near,depthFar:G.far}),L=G.near,z=G.far),G.layers.mask=Q.layers.mask|6,P.layers.mask=G.layers.mask&-5,I.layers.mask=G.layers.mask&-3;const Ie=Q.parent,_e=G.cameras;ce(G,Ie);for(let Ve=0;Ve<_e.length;Ve++)ce(_e[Ve],Ie);_e.length===2?Z(G,P,I):G.projectionMatrix.copy(P.projectionMatrix),A===null&&Q.isPerspectiveCamera&&(A={camera:Q,fov:Q.fov,zoom:Q.zoom}),ve(Q,G,Ie)};function ve(Q,ie,ye){ye===null?Q.matrix.copy(ie.matrixWorld):(Q.matrix.copy(ye.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ie.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ph*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(G)},this.getCameraTexture=function(Q){return u[Q]};let Xe=null;function ze(Q,ie){if(f=ie.getViewerPose(c||o),x=ie,f!==null){const ye=f.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let Ie=!1;ye.length!==G.cameras.length&&(G.cameras.length=0,Ie=!0);for(let $e=0;$e<ye.length;$e++){const Qe=ye[$e];let ut=null;if(m!==null)ut=m.getViewport(Qe);else{const mt=h.getViewSubImage(d,Qe);ut=mt.viewport,$e===0&&(e.setRenderTargetTextures(_,mt.colorTexture,mt.depthStencilTexture),e.setRenderTarget(_))}let He=D[$e];He===void 0&&(He=new kn,He.layers.enable($e),He.viewport=new At,D[$e]=He),He.matrix.fromArray(Qe.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Qe.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(ut.x,ut.y,ut.width,ut.height),$e===0&&(G.matrix.copy(He.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Ie===!0&&G.cameras.push(He)}const _e=r.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){h=i.getBinding();const $e=h.getDepthInformation(ye[0]);$e&&$e.isValid&&$e.texture&&p.init($e,r.renderState)}if(_e&&_e.includes("camera-access")&&v){e.state.unbindTexture(),h=i.getBinding();for(let $e=0;$e<ye.length;$e++){const Qe=ye[$e].camera;if(Qe){let ut=u[Qe];ut||(ut=new _S,u[Qe]=ut);const He=h.getCameraImage(Qe);ut.sourceTexture=He}}}}for(let ye=0;ye<E.length;ye++){const Ie=b[ye],_e=E[ye];Ie!==null&&_e!==void 0&&_e.update(Ie,ie,c||o)}Xe&&Xe(Q,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),x=null}const ke=new wS;ke.setAnimationLoop(ze),this.setAnimationLoop=function(Q){Xe=Q},this.dispose=function(){}}}const oL=new bt,PS=new Fe;PS.set(-1,0,0,0,1,0,0,0,1);function aL(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,yS(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,g,M,_){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?s(p,u):u.isMeshLambertMaterial?(s(p,u),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(p,u),h(p,u)):u.isMeshPhongMaterial?(s(p,u),f(p,u),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(p,u),d(p,u),u.isMeshPhysicalMaterial&&m(p,u,_)):u.isMeshMatcapMaterial?(s(p,u),x(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),v(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,g,M):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Pn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Pn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const g=e.get(u),M=g.envMap,_=g.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4(oL.makeRotationFromEuler(_)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(PS),p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,g,M){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*g,p.scale.value=M*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function f(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,g){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Pn&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.retroreflectivity>0&&(p.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,u){u.matcap&&(p.matcap.value=u.matcap)}function v(p,u){const g=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function lL(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,E){const b=E.program;i.uniformBlockBinding(_,b)}function c(_,E){let b=r[_.id];b===void 0&&(p(_),b=f(_),r[_.id]=b,_.addEventListener("dispose",g));const C=E.program;i.updateUBOMapping(_,C);const y=e.render.frame;s[_.id]!==y&&(d(_),s[_.id]=y)}function f(_){const E=h();_.__bindingPointIndex=E;const b=t.createBuffer(),C=_.__size,y=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,b),t.bufferData(t.UNIFORM_BUFFER,C,y),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,b),b}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const E=r[_.id],b=_.uniforms,C=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let y=0,A=b.length;y<A;y++){const P=b[y];if(Array.isArray(P))for(let I=0,D=P.length;I<D;I++)m(P[I],y,I,C);else m(P,y,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,E,b,C){if(v(_,E,b,C)===!0){const y=_.__offset,A=_.value;if(Array.isArray(A)){let P=0;for(let I=0;I<A.length;I++){const D=A[I],G=u(D);x(D,_.__data,P),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(P+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(A,_.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,y,_.__data)}}function x(_,E,b){typeof _=="number"||typeof _=="boolean"?E[0]=_:_.isMatrix3?(E[0]=_.elements[0],E[1]=_.elements[1],E[2]=_.elements[2],E[3]=0,E[4]=_.elements[3],E[5]=_.elements[4],E[6]=_.elements[5],E[7]=0,E[8]=_.elements[6],E[9]=_.elements[7],E[10]=_.elements[8],E[11]=0):ArrayBuffer.isView(_)?E.set(new _.constructor(_.buffer,_.byteOffset,E.length)):_.toArray(E,b)}function v(_,E,b,C){const y=_.value,A=E+"_"+b;if(C[A]===void 0)return typeof y=="number"||typeof y=="boolean"?C[A]=y:ArrayBuffer.isView(y)?C[A]=y.slice():C[A]=y.clone(),!0;{const P=C[A];if(typeof y=="number"||typeof y=="boolean"){if(P!==y)return C[A]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(P.equals(y)===!1)return P.copy(y),!0}}return!1}function p(_){const E=_.uniforms;let b=0;const C=16;for(let A=0,P=E.length;A<P;A++){const I=Array.isArray(E[A])?E[A]:[E[A]];for(let D=0,G=I.length;D<G;D++){const L=I[D],z=Array.isArray(L.value)?L.value:[L.value];for(let K=0,$=z.length;K<$;K++){const V=z[K],B=u(V),X=b%C,Z=X%B.boundary,ce=X+Z;b+=Z,ce!==0&&C-ce<B.storage&&(b+=C-ce),L.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=B.storage}}}const y=b%C;return y>0&&(b+=C-y),_.__size=b,_.__cache={},this}function u(_){const E={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(E.boundary=4,E.storage=4):_.isVector2?(E.boundary=8,E.storage=8):_.isVector3||_.isColor?(E.boundary=16,E.storage=12):_.isVector4?(E.boundary=16,E.storage=16):_.isMatrix3?(E.boundary=48,E.storage=48):_.isMatrix4?(E.boundary=64,E.storage=64):_.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(E.boundary=16,E.storage=_.byteLength):De("WebGLRenderer: Unsupported uniform value type.",_),E}function g(_){const E=_.target;E.removeEventListener("dispose",g);const b=o.indexOf(E.__bindingPointIndex);o.splice(b,1),t.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function M(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:M}}const cL=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let xi=null;function uL(){return xi===null&&(xi=new jA(cL,16,16,cs,Nn),xi.name="DFG_LUT",xi.minFilter=nn,xi.magFilter=nn,xi.wrapS=ji,xi.wrapT=ji,xi.generateMipmaps=!1,xi.needsUpdate=!0),xi}class dL{constructor(e={}){const{canvas:n=yA(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:m=Bn}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=o;const v=m,p=new Set([Qp,Zp,Kp]),u=new Set([Bn,Di,Ta,Ca,Yp,qp]),g=new Uint32Array(4),M=new Int32Array(4),_=new O;let E=null,b=null;const C=[],y=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let I=!1,D=null,G=null,L=null,z=null;this._outputColorSpace=On;let K=0,$=0,V=null,B=-1,X=null;const Z=new At,ce=new At;let ve=null;const Xe=new Oe(0);let ze=0,ke=n.width,Q=n.height,ie=1,ye=null,Ie=null;const _e=new At(0,0,ke,Q),Ve=new At(0,0,ke,Q);let Lt=!1;const $e=new rm;let Qe=!1,ut=!1;const He=new bt,mt=new O,Ft=new At,on={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function ht(){return V===null?ie:1}let k=i;function jt(T,U){return n.getContext(T,U)}let tt,R,w,H,Y,J,oe,ae,ee,ne,ue,be,he,de,Ae,Ne,Ue,F,fe,te,le,pe,re;try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${jp}`),n.addEventListener("webglcontextlost",dt,!1),n.addEventListener("webglcontextrestored",it,!1),n.addEventListener("webglcontextcreationerror",ot,!1),k===null){const U="webgl2";if(k=jt(U,T),k===null)throw jt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Re()}catch(T){throw n.removeEventListener("webglcontextlost",dt,!1),n.removeEventListener("webglcontextrestored",it,!1),n.removeEventListener("webglcontextcreationerror",ot,!1),nt("WebGLRenderer: "+T.message),T}function Re(){tt=new u3(k),tt.init(),le=new tL(k,tt),R=new e3(k,tt,e,le),w=new JN(k,tt),R.reversedDepthBuffer&&d&&w.buffers.depth.setReversed(!0),G=k.createFramebuffer(),L=k.createFramebuffer(),z=k.createFramebuffer(),H=new h3(k),Y=new BN,J=new eL(k,tt,w,Y,R,le,H),oe=new c3(P),ae=new mR(k),pe=new QP(k,ae),ee=new d3(k,ae,H,pe),ne=new m3(k,ee,ae,pe,H),F=new p3(k,R,J),Ae=new t3(Y),ue=new kN(P,oe,tt,R,pe,Ae),be=new aL(P,Y),he=new VN,de=new $N(tt),Ue=new ZP(P,oe,w,ne,x,l),Ne=new QN(P,ne,R),re=new lL(k,H,R,w),fe=new JP(k,tt,H),te=new f3(k,tt,H),H.programs=ue.programs,P.capabilities=R,P.extensions=tt,P.properties=Y,P.renderLists=he,P.shadowMap=Ne,P.state=w,P.info=H}v!==Bn&&(A=new v3(v,n.width,n.height,a,r,s));const Ee=new sL(P,k);this.xr=Ee,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const T=tt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=tt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(T){T!==void 0&&(ie=T,this.setSize(ke,Q,!1))},this.getSize=function(T){return T.set(ke,Q)},this.setSize=function(T,U,q=!0){if(Ee.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}ke=T,Q=U,n.width=Math.floor(T*ie),n.height=Math.floor(U*ie),q===!0&&(n.style.width=T+"px",n.style.height=U+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(ke*ie,Q*ie).floor()},this.setDrawingBufferSize=function(T,U,q){ke=T,Q=U,ie=q,n.width=Math.floor(T*q),n.height=Math.floor(U*q),this.setViewport(0,0,T,U)},this.setEffects=function(T){if(v===Bn){nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let U=0;U<T.length;U++)if(T[U].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(Z)},this.getViewport=function(T){return T.copy(_e)},this.setViewport=function(T,U,q,W){T.isVector4?_e.set(T.x,T.y,T.z,T.w):_e.set(T,U,q,W),w.viewport(Z.copy(_e).multiplyScalar(ie).round())},this.getScissor=function(T){return T.copy(Ve)},this.setScissor=function(T,U,q,W){T.isVector4?Ve.set(T.x,T.y,T.z,T.w):Ve.set(T,U,q,W),w.scissor(ce.copy(Ve).multiplyScalar(ie).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(T){w.setScissorTest(Lt=T)},this.setOpaqueSort=function(T){ye=T},this.setTransparentSort=function(T){Ie=T},this.getClearColor=function(T){return T.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,q=!0){let W=0;if(T){let j=!1;if(V!==null){const xe=V.texture.format;j=p.has(xe)}if(j){const xe=V.texture.type,Me=u.has(xe),ge=Ue.getClearColor(),Te=Ue.getClearAlpha(),Pe=ge.r,Ge=ge.g,Ye=ge.b;Me?(g[0]=Pe,g[1]=Ge,g[2]=Ye,g[3]=Te,k.clearBufferuiv(k.COLOR,0,g)):(M[0]=Pe,M[1]=Ge,M[2]=Ye,M[3]=Te,k.clearBufferiv(k.COLOR,0,M))}else W|=k.COLOR_BUFFER_BIT}U&&(W|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(W|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&k.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),D=T},this.dispose=function(){n.removeEventListener("webglcontextlost",dt,!1),n.removeEventListener("webglcontextrestored",it,!1),n.removeEventListener("webglcontextcreationerror",ot,!1),Ue.dispose(),he.dispose(),de.dispose(),Y.dispose(),oe.dispose(),ne.dispose(),pe.dispose(),re.dispose(),ue.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",nr),Ee.removeEventListener("sessionend",Eo),Br.stop()};function dt(T){T.preventDefault(),p0("WebGLRenderer: Context Lost."),I=!0}function it(){p0("WebGLRenderer: Context Restored."),I=!1;const T=H.autoReset,U=Ne.enabled,q=Ne.autoUpdate,W=Ne.needsUpdate,j=Ne.type;Re(),H.autoReset=T,Ne.enabled=U,Ne.autoUpdate=q,Ne.needsUpdate=W,Ne.type=j}function ot(T){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Tt(T){const U=T.target;U.removeEventListener("dispose",Tt),pi(U)}function pi(T){ps(T),Y.remove(T)}function ps(T){const U=Y.get(T).programs;U!==void 0&&(U.forEach(function(q){ue.releaseProgram(q)}),T.isShaderMaterial&&ue.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,q,W,j,xe){U===null&&(U=on);const Me=j.isMesh&&j.matrixWorld.determinantAffine()<0,ge=iM(T,U,q,W,j);w.setMaterial(W,Me);let Te=q.index,Pe=1;if(W.wireframe===!0){if(Te=ee.getWireframeAttribute(q),Te===void 0)return;Pe=2}const Ge=q.drawRange,Ye=q.attributes.position;let Ce=Ge.start*Pe,rt=(Ge.start+Ge.count)*Pe;xe!==null&&(Ce=Math.max(Ce,xe.start*Pe),rt=Math.min(rt,(xe.start+xe.count)*Pe)),Te!==null?(Ce=Math.max(Ce,0),rt=Math.min(rt,Te.count)):Ye!=null&&(Ce=Math.max(Ce,0),rt=Math.min(rt,Ye.count));const Ot=rt-Ce;if(Ot<0||Ot===1/0)return;pe.setup(j,W,ge,q,Te);let _t,pt=fe;if(Te!==null&&(_t=ae.get(Te),pt=te,pt.setIndex(_t)),j.isMesh)W.wireframe===!0?(w.setLineWidth(W.wireframeLinewidth*ht()),pt.setMode(k.LINES)):pt.setMode(k.TRIANGLES);else if(j.isLine){let an=W.linewidth;an===void 0&&(an=1),w.setLineWidth(an*ht()),j.isLineSegments?pt.setMode(k.LINES):j.isLineLoop?pt.setMode(k.LINE_LOOP):pt.setMode(k.LINE_STRIP)}else j.isPoints?pt.setMode(k.POINTS):j.isSprite&&pt.setMode(k.TRIANGLES);if(j.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))pt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const an=j._multiDrawStarts,Se=j._multiDrawCounts,vn=j._multiDrawCount,Je=Te?ae.get(Te).bytesPerElement:1,jn=Y.get(W).currentProgram.getUniforms();for(let mi=0;mi<vn;mi++)jn.setValue(k,"_gl_DrawID",mi),pt.render(an[mi]/Je,Se[mi])}else if(j.isInstancedMesh)pt.renderInstances(Ce,Ot,j.count);else if(q.isInstancedBufferGeometry){const an=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Se=Math.min(q.instanceCount,an);pt.renderInstances(Ce,Ot,Se)}else pt.render(Ce,Ot)};function tr(T,U,q,W){D!==null&&T.isNodeMaterial&&D.setObject(W,T),Qe===!0&&Ae.setState(T,q,!1),T.transparent===!0&&T.side===Ei&&T.forceSinglePass===!1?(T.side=Pn,T.needsUpdate=!0,Ga(T,U,W),T.side=as,T.needsUpdate=!0,Ga(T,U,W),T.side=Ei):Ga(T,U,W)}this.compile=function(T,U,q=null){q===null&&(q=T),D!==null&&D.renderStart(T,U,q),b=de.get(q),b.init(U),y.push(b),q.traverseVisible(function(j){j.isLight&&j.layers.test(U.layers)&&(b.pushLight(j),j.castShadow&&b.pushShadow(j))}),T!==q&&T.traverseVisible(function(j){j.isLight&&j.layers.test(U.layers)&&(b.pushLight(j),j.castShadow&&b.pushShadow(j))}),b.setupLights(),D!==null&&D.updateLights(b.state.lightsArray),ut=this.localClippingEnabled,Qe=Ae.init(this.clippingPlanes,ut),Qe===!0&&Ae.setGlobalState(this.clippingPlanes,U),D!==null&&Ne.render(b.state.shadowsArray,q,U);const W=new Set;return T.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const xe=j.material;if(xe)if(Array.isArray(xe))for(let Me=0;Me<xe.length;Me++){const ge=xe[Me];tr(ge,q,U,j),W.add(ge)}else tr(xe,q,U,j),W.add(xe)}),b=y.pop(),D!==null&&D.renderEnd(),W},this.compileAsync=function(T,U,q=null){const W=this.compile(T,U,q);return new Promise(j=>{function xe(){if(W.forEach(function(Me){const Te=Y.get(Me).currentProgram;(Te===void 0||Te.isReady())&&W.delete(Me)}),W.size===0){j(T);return}setTimeout(xe,10)}tt.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Ii=null;function wo(T){Ii&&Ii(T)}function nr(){Br.stop()}function Eo(){Br.start()}const Br=new wS;Br.setAnimationLoop(wo),typeof self<"u"&&Br.setContext(self),this.setAnimationLoop=function(T){Ii=T,Ee.setAnimationLoop(T),T===null?Br.stop():Br.start()},Ee.addEventListener("sessionstart",nr),Ee.addEventListener("sessionend",Eo),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;D!==null&&D.renderStart(T,U);const q=Ee.enabled===!0&&Ee.isPresenting===!0,W=A!==null&&(V===null||q)&&A.begin(P,V);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(U),U=Ee.getCamera()),T.isScene===!0&&T.onBeforeRender(P,T,U,V),b=de.get(T,y.length),b.init(U),b.state.textureUnits=J.getTextureUnits(),y.push(b),He.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$e.setFromProjectionMatrix(He,Ti,U.reversedDepth),ut=this.localClippingEnabled,Qe=Ae.init(this.clippingPlanes,ut),E=he.get(T,C.length),E.init(),C.push(E),Ee.enabled===!0&&Ee.isPresenting===!0){const Me=P.xr.getDepthSensingMesh();Me!==null&&Su(Me,U,-1/0,P.sortObjects)}Su(T,U,0,P.sortObjects),E.finish(),D!==null&&D.updateLights(b.state.lightsArray),P.sortObjects===!0&&E.sort(ye,Ie),gt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,gt&&Ue.addToRenderList(E,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qe===!0&&Ae.beginShadows();const j=b.state.shadowsArray;if(Ne.render(j,T,U),Qe===!0&&Ae.endShadows(),(W&&A.hasRenderPass())===!1){const Me=E.opaque,ge=E.transmissive;if(b.setupLights(),U.isArrayCamera){const Te=U.cameras;if(ge.length>0)for(let Pe=0,Ge=Te.length;Pe<Ge;Pe++){const Ye=Te[Pe];ym(Me,ge,T,Ye)}gt&&Ue.render(T);for(let Pe=0,Ge=Te.length;Pe<Ge;Pe++){const Ye=Te[Pe];_m(E,T,Ye,Ye.viewport)}}else ge.length>0&&ym(Me,ge,T,U),gt&&Ue.render(T),_m(E,T,U)}V!==null&&$===0&&(J.updateMultisampleRenderTarget(V),J.updateRenderTargetMipmap(V)),W&&A.end(P),T.isScene===!0&&T.onAfterRender(P,T,U),pe.resetDefaultState(),B=-1,X=null,y.pop(),y.length>0?(b=y[y.length-1],J.setTextureUnits(b.state.textureUnits),Qe===!0&&Ae.setGlobalState(P.clippingPlanes,b.state.camera)):b=null,C.pop(),C.length>0?E=C[C.length-1]:E=null,D!==null&&D.renderEnd()};function Su(T,U,q,W){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLightProbeGrid)b.pushLightProbeGrid(T);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum($e)){W&&Ft.setFromMatrixPosition(T.matrixWorld).applyMatrix4(He);const Me=ne.update(T),ge=T.material;ge.visible&&E.push(T,Me,ge,q,Ft.z,null,U)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum($e))){const Me=ne.update(T),ge=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ft.copy(T.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ft.copy(Me.boundingSphere.center)),Ft.applyMatrix4(T.matrixWorld).applyMatrix4(He)),Array.isArray(ge)){const Te=Me.groups;for(let Pe=0,Ge=Te.length;Pe<Ge;Pe++){const Ye=Te[Pe],Ce=ge[Ye.materialIndex];Ce&&Ce.visible&&E.push(T,Me,Ce,q,Ft.z,Ye,U)}}else ge.visible&&E.push(T,Me,ge,q,Ft.z,null,U)}}const xe=T.children;for(let Me=0,ge=xe.length;Me<ge;Me++)Su(xe[Me],U,q,W)}function _m(T,U,q,W){const{opaque:j,transmissive:xe,transparent:Me}=T;b.setupLightsView(q),Qe===!0&&Ae.setGlobalState(P.clippingPlanes,q),W&&w.viewport(Z.copy(W)),j.length>0&&Ha(j,U,q),xe.length>0&&Ha(xe,U,q),Me.length>0&&Ha(Me,U,q),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function ym(T,U,q,W){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[W.id]===void 0){const Ce=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[W.id]=new Sn(1,1,{generateMipmaps:!0,type:Ce?Nn:Bn,minFilter:Kr,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const xe=b.state.transmissionRenderTarget[W.id],Me=W.viewport||Z;xe.setSize(Me.z*P.transmissionResolutionScale,Me.w*P.transmissionResolutionScale);const ge=P.getRenderTarget(),Te=P.getActiveCubeFace(),Pe=P.getActiveMipmapLevel();P.setRenderTarget(xe),P.getClearColor(Xe),ze=P.getClearAlpha(),ze<1&&P.setClearColor(16777215,.5),P.clear(),gt&&Ue.render(q);const Ge=P.toneMapping;P.toneMapping=Pi;const Ye=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),b.setupLightsView(W),Qe===!0&&Ae.setGlobalState(P.clippingPlanes,W),Ha(T,q,W),J.updateMultisampleRenderTarget(xe),J.updateRenderTargetMipmap(xe),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let rt=0,Ot=U.length;rt<Ot;rt++){const _t=U[rt],{object:pt,geometry:an,material:Se,group:vn}=_t;if(Se.side===Ei&&pt.layers.test(W.layers)){const Je=Se.side;Se.side=Pn,Se.needsUpdate=!0,Sm(pt,q,W,an,Se,vn),Se.side=Je,Se.needsUpdate=!0,Ce=!0}}Ce===!0&&(J.updateMultisampleRenderTarget(xe),J.updateRenderTargetMipmap(xe))}P.setRenderTarget(ge,Te,Pe),P.setClearColor(Xe,ze),Ye!==void 0&&(W.viewport=Ye),P.toneMapping=Ge}function Ha(T,U,q){const W=U.isScene===!0?U.overrideMaterial:null;for(let j=0,xe=T.length;j<xe;j++){const Me=T[j],{object:ge,geometry:Te,group:Pe}=Me;let Ge=Me.material;Ge.allowOverride===!0&&W!==null&&(Ge=W),ge.layers.test(q.layers)&&Sm(ge,U,q,Te,Ge,Pe)}}function Sm(T,U,q,W,j,xe){D!==null&&j.isNodeMaterial&&D.setObject(T,j),T.onBeforeRender(P,U,q,W,j,xe),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),j.onBeforeRender(P,U,q,W,T,xe),j.transparent===!0&&j.side===Ei&&j.forceSinglePass===!1?(j.side=Pn,j.needsUpdate=!0,P.renderBufferDirect(q,U,W,j,T,xe),j.side=as,j.needsUpdate=!0,P.renderBufferDirect(q,U,W,j,T,xe),j.side=Ei):P.renderBufferDirect(q,U,W,j,T,xe),T.onAfterRender(P,U,q,W,j,xe)}function Ga(T,U,q){U.isScene!==!0&&(U=on);const W=Y.get(T),j=b.state.lights,xe=b.state.shadowsArray,Me=j.state.version,ge=ue.getParameters(T,j.state,xe,U,q,b.state.lightProbeGridArray),Te=ue.getProgramCacheKey(ge);let Pe=W.programs;W.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?U.environment:null,W.fog=U.fog;const Ge=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;W.envMap=oe.get(T.envMap||W.environment,Ge),W.envMapRotation=W.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Pe===void 0&&(T.addEventListener("dispose",Tt),Pe=new Map,W.programs=Pe);let Ye=Pe.get(Te);if(Ye!==void 0){if(W.currentProgram===Ye&&W.lightsStateVersion===Me)return wm(T,ge),Ye}else ge.uniforms=ue.getUniforms(T),D!==null&&T.isNodeMaterial&&D.build(T,q,ge),T.onBeforeCompile(ge,P),Ye=ue.acquireProgram(ge,Te),Pe.set(Te,Ye),W.uniforms=ge.uniforms;const Ce=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ce.clippingPlanes=Ae.uniform),wm(T,ge),W.needsLights=sM(T),W.lightsStateVersion=Me,W.needsLights&&(Ce.ambientLightColor.value=j.state.ambient,Ce.lightProbe.value=j.state.probe,Ce.sunLights.value=j.state.sun,Ce.sunLightShadows.value=j.state.sunShadow,Ce.directionalLights.value=j.state.directional,Ce.directionalLightShadows.value=j.state.directionalShadow,Ce.spotLights.value=j.state.spot,Ce.spotLightShadows.value=j.state.spotShadow,Ce.rectAreaLights.value=j.state.rectArea,Ce.ltc_1.value=j.state.rectAreaLTC1,Ce.ltc_2.value=j.state.rectAreaLTC2,Ce.pointLights.value=j.state.point,Ce.pointLightShadows.value=j.state.pointShadow,Ce.hemisphereLights.value=j.state.hemi,Ce.sunShadowMatrix.value=j.state.sunShadowMatrix,Ce.sunShadowCascade.value=j.state.sunShadowCascade,Ce.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ce.spotLightMatrix.value=j.state.spotLightMatrix,Ce.spotLightMap.value=j.state.spotLightMap,Ce.pointShadowMatrix.value=j.state.pointShadowMatrix),W.lightProbeGrid=b.state.lightProbeGridArray.length>0,W.currentProgram=Ye,W.uniformsList=null,Ye}function Mm(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=ac.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function wm(T,U){const q=Y.get(T);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function nM(T,U){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;_.setFromMatrixPosition(U.matrixWorld);for(let q=0,W=T.length;q<W;q++){const j=T[q];if(j.texture!==null&&j.boundingBox.containsPoint(_))return j}return null}function iM(T,U,q,W,j){U.isScene!==!0&&(U=on),J.resetTextureUnits();const xe=U.fog,Me=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?U.environment:null,ge=V===null?P.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Ze.workingColorSpace,Te=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Pe=oe.get(W.envMap||Me,Te),Ge=W.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ye=!!q.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ce=!!q.morphAttributes.position,rt=!!q.morphAttributes.normal,Ot=!!q.morphAttributes.color;let _t=Pi;W.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(_t=P.toneMapping);const pt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,an=pt!==void 0?pt.length:0,Se=Y.get(W),vn=b.state.lights;if(Qe===!0&&(ut===!0||T!==X)){const vt=T===X&&W.id===B;Ae.setState(W,T,vt)}let Je=!1;W.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==vn.state.version||Se.outputColorSpace!==ge||j.isBatchedMesh&&Se.batching===!1||!j.isBatchedMesh&&Se.batching===!0||j.isBatchedMesh&&Se.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Se.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Se.instancing===!1||!j.isInstancedMesh&&Se.instancing===!0||j.isSkinnedMesh&&Se.skinning===!1||!j.isSkinnedMesh&&Se.skinning===!0||j.isInstancedMesh&&Se.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Se.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Se.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Se.instancingMorph===!1&&j.morphTexture!==null||Se.envMap!==Pe||W.fog===!0&&Se.fog!==xe||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Ae.numPlanes||Se.numIntersection!==Ae.numIntersection)||Se.vertexAlphas!==Ge||Se.vertexTangents!==Ye||Se.morphTargets!==Ce||Se.morphNormals!==rt||Se.morphColors!==Ot||Se.toneMapping!==_t||Se.morphTargetsCount!==an||!!Se.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Je=!0):(Je=!0,Se.__version=W.version);let jn=Se.currentProgram;Je===!0&&(jn=Ga(W,U,j),D&&W.isNodeMaterial&&D.onUpdateProgram(W,jn,Se));let mi=!1,ir=!1,ms=!1;const ft=jn.getUniforms(),Dt=Se.uniforms;if(w.useProgram(jn.program)&&(mi=!0,ir=!0,ms=!0),W.id!==B&&(B=W.id,ir=!0),Se.needsLights){const vt=nM(b.state.lightProbeGridArray,j);Se.lightProbeGrid!==vt&&(Se.lightProbeGrid=vt,ir=!0)}if(mi||X!==T){w.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ft.setValue(k,"projectionMatrix",T.projectionMatrix),ft.setValue(k,"viewMatrix",T.matrixWorldInverse);const sr=ft.map.cameraPosition;sr!==void 0&&sr.setValue(k,mt.setFromMatrixPosition(T.matrixWorld)),R.logarithmicDepthBuffer&&ft.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ft.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),X!==T&&(X=T,ir=!0,ms=!0)}if(Se.needsLights&&(vn.state.sunShadowMap.length>0&&ft.setValue(k,"sunShadowMap",vn.state.sunShadowMap,J),vn.state.directionalShadowMap.length>0&&ft.setValue(k,"directionalShadowMap",vn.state.directionalShadowMap,J),vn.state.spotShadowMap.length>0&&ft.setValue(k,"spotShadowMap",vn.state.spotShadowMap,J),vn.state.pointShadowMap.length>0&&ft.setValue(k,"pointShadowMap",vn.state.pointShadowMap,J)),j.isSkinnedMesh){ft.setOptional(k,j,"bindMatrix"),ft.setOptional(k,j,"bindMatrixInverse");const vt=j.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),ft.setValue(k,"boneTexture",vt.boneTexture,J))}j.isBatchedMesh&&(ft.setOptional(k,j,"batchingTexture"),ft.setValue(k,"batchingTexture",j._matricesTexture,J),ft.setOptional(k,j,"batchingIdTexture"),ft.setValue(k,"batchingIdTexture",j._indirectTexture,J),ft.setOptional(k,j,"batchingColorTexture"),j._colorsTexture!==null&&ft.setValue(k,"batchingColorTexture",j._colorsTexture,J));const rr=q.morphAttributes;if((rr.position!==void 0||rr.normal!==void 0||rr.color!==void 0)&&F.update(j,q,jn),(ir||Se.receiveShadow!==j.receiveShadow)&&(Se.receiveShadow=j.receiveShadow,ft.setValue(k,"receiveShadow",j.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&U.environment!==null&&(Dt.envMapIntensity.value=U.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=uL()),ir){if(ft.setValue(k,"toneMappingExposure",P.toneMappingExposure),Se.needsLights&&rM(Dt,ms),xe&&W.fog===!0&&be.refreshFogUniforms(Dt,xe),be.refreshMaterialUniforms(Dt,W,ie,Q,b.state.transmissionRenderTarget[T.id]),Se.needsLights&&Se.lightProbeGrid){const vt=Se.lightProbeGrid;Dt.probesSH.value=vt.texture,Dt.probesMin.value.copy(vt.boundingBox.min),Dt.probesMax.value.copy(vt.boundingBox.max),Dt.probesResolution.value.copy(vt.resolution)}ac.upload(k,Mm(Se),Dt,J)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ac.upload(k,Mm(Se),Dt,J),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ft.setValue(k,"center",j.center),ft.setValue(k,"modelViewMatrix",j.modelViewMatrix),ft.setValue(k,"normalMatrix",j.normalMatrix),ft.setValue(k,"modelMatrix",j.matrixWorld),W.uniformsGroups!==void 0){const vt=W.uniformsGroups;for(let sr=0,gs=vt.length;sr<gs;sr++){const bm=vt[sr];re.update(bm,jn),re.bind(bm,jn)}}return jn}function rM(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.sunLights.needsUpdate=U,T.sunLightShadows.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function sM(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(T,U,q){const W=Y.get(T);W.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Y.get(T.texture).__webglTexture=U,Y.get(T.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:q,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){const q=Y.get(T);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,q=0){V=T,K=U,$=q;let W=null,j=!1,xe=!1;if(T){const ge=Y.get(T);if(ge.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(k.FRAMEBUFFER,ge.__webglFramebuffer),Z.copy(T.viewport),ce.copy(T.scissor),ve=T.scissorTest,w.viewport(Z),w.scissor(ce),w.setScissorTest(ve),B=-1;return}else if(ge.__webglFramebuffer===void 0)J.setupRenderTarget(T);else if(ge.__hasExternalTextures)J.rebindTextures(T,Y.get(T.texture).__webglTexture,Y.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ge=T.depthTexture;if(ge.__boundDepthTexture!==Ge){if(Ge!==null&&Y.has(Ge)&&(T.width!==Ge.image.width||T.height!==Ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(T)}}const Te=T.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(xe=!0);const Pe=Y.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Pe[U])?W=Pe[U][q]:W=Pe[U],j=!0):T.samples>0&&J.useMultisampledRTT(T)===!1?W=Y.get(T).__webglMultisampledFramebuffer:Array.isArray(Pe)?W=Pe[q]:W=Pe,Z.copy(T.viewport),ce.copy(T.scissor),ve=T.scissorTest}else Z.copy(_e).multiplyScalar(ie).floor(),ce.copy(Ve).multiplyScalar(ie).floor(),ve=Lt;if(q!==0&&(W=G),w.bindFramebuffer(k.FRAMEBUFFER,W)&&w.drawBuffers(T,W),w.viewport(Z),w.scissor(ce),w.setScissorTest(ve),j){const ge=Y.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+U,ge.__webglTexture,q)}else if(xe){const ge=U;for(let Te=0;Te<T.textures.length;Te++){const Pe=Y.get(T.textures[Te]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Te,Pe.__webglTexture,q,ge)}}else if(T!==null&&q!==0){const ge=Y.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ge.__webglTexture,q)}B=-1};function Em(T){const U=Y.get(T);return(U.__readFormat!==T.format||U.__readType!==T.type)&&(U.__readFormat=T.format,U.__readType=T.type,U.__formatReadable=R.textureFormatReadable(T.format),U.__typeReadable=R.textureTypeReadable(T.type)),U}this.readRenderTargetPixels=function(T,U,q,W,j,xe,Me,ge=0){if(!(T&&T.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Y.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){w.bindFramebuffer(k.FRAMEBUFFER,Te);try{const Pe=T.textures[ge],Ge=Pe.format,Ye=Pe.type;T.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ge);const Ce=Em(Pe);if(Ce.__formatReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-W&&q>=0&&q<=T.height-j&&k.readPixels(U,q,W,j,le.convert(Ge),le.convert(Ye),xe)}finally{const Pe=V!==null?Y.get(V).__webglFramebuffer:null;w.bindFramebuffer(k.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(T,U,q,W,j,xe,Me,ge=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Y.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te)if(U>=0&&U<=T.width-W&&q>=0&&q<=T.height-j){w.bindFramebuffer(k.FRAMEBUFFER,Te);const Pe=T.textures[ge],Ge=Pe.format,Ye=Pe.type;T.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ge);const Ce=Em(Pe);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const rt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,rt),k.bufferData(k.PIXEL_PACK_BUFFER,xe.byteLength,k.STREAM_READ),k.readPixels(U,q,W,j,le.convert(Ge),le.convert(Ye),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);const Ot=V!==null?Y.get(V).__webglFramebuffer:null;w.bindFramebuffer(k.FRAMEBUFFER,Ot);const _t=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await SA(k,_t,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,rt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,xe),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(rt),k.deleteSync(_t),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,q=0){const W=Math.pow(2,-q),j=Math.floor(T.image.width*W),xe=Math.floor(T.image.height*W),Me=U!==null?U.x:0,ge=U!==null?U.y:0;J.setTexture2D(T,0),k.copyTexSubImage2D(k.TEXTURE_2D,q,0,0,Me,ge,j,xe),w.unbindTexture()},this.copyTextureToTexture=function(T,U,q=null,W=null,j=0,xe=0){let Me,ge,Te,Pe,Ge,Ye,Ce,rt,Ot;const _t=T.isCompressedTexture?T.mipmaps[xe]:T.image;if(q!==null)Me=q.max.x-q.min.x,ge=q.max.y-q.min.y,Te=q.isBox3?q.max.z-q.min.z:1,Pe=q.min.x,Ge=q.min.y,Ye=q.isBox3?q.min.z:0;else{const Dt=Math.pow(2,-j);Me=Math.floor(_t.width*Dt),ge=Math.floor(_t.height*Dt),T.isDataArrayTexture?Te=_t.depth:T.isData3DTexture?Te=Math.floor(_t.depth*Dt):Te=1,Pe=0,Ge=0,Ye=0}W!==null?(Ce=W.x,rt=W.y,Ot=W.z):(Ce=0,rt=0,Ot=0);const pt=le.convert(U.format),an=le.convert(U.type);let Se;U.isData3DTexture?(J.setTexture3D(U,0),Se=k.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(J.setTexture2DArray(U,0),Se=k.TEXTURE_2D_ARRAY):(J.setTexture2D(U,0),Se=k.TEXTURE_2D),w.activeTexture(k.TEXTURE0),w.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,U.flipY),w.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),w.pixelStorei(k.UNPACK_ALIGNMENT,U.unpackAlignment);const vn=w.getParameter(k.UNPACK_ROW_LENGTH),Je=w.getParameter(k.UNPACK_IMAGE_HEIGHT),jn=w.getParameter(k.UNPACK_SKIP_PIXELS),mi=w.getParameter(k.UNPACK_SKIP_ROWS),ir=w.getParameter(k.UNPACK_SKIP_IMAGES);w.pixelStorei(k.UNPACK_ROW_LENGTH,_t.width),w.pixelStorei(k.UNPACK_IMAGE_HEIGHT,_t.height),w.pixelStorei(k.UNPACK_SKIP_PIXELS,Pe),w.pixelStorei(k.UNPACK_SKIP_ROWS,Ge),w.pixelStorei(k.UNPACK_SKIP_IMAGES,Ye);const ms=T.isDataArrayTexture||T.isData3DTexture,ft=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){const Dt=Y.get(T),rr=Y.get(U),vt=Y.get(Dt.__renderTarget),sr=Y.get(rr.__renderTarget);w.bindFramebuffer(k.READ_FRAMEBUFFER,vt.__webglFramebuffer),w.bindFramebuffer(k.DRAW_FRAMEBUFFER,sr.__webglFramebuffer);for(let gs=0;gs<Te;gs++)ms&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Y.get(T).__webglTexture,j,Ye+gs),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Y.get(U).__webglTexture,xe,Ot+gs)),k.blitFramebuffer(Pe,Ge,Me,ge,Ce,rt,Me,ge,k.DEPTH_BUFFER_BIT,k.NEAREST);w.bindFramebuffer(k.READ_FRAMEBUFFER,null),w.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(j!==0||T.isRenderTargetTexture||Y.has(T)){const Dt=Y.get(T),rr=Y.get(U);w.bindFramebuffer(k.READ_FRAMEBUFFER,L),w.bindFramebuffer(k.DRAW_FRAMEBUFFER,z);for(let vt=0;vt<Te;vt++)ms?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Dt.__webglTexture,j,Ye+vt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Dt.__webglTexture,j),ft?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,rr.__webglTexture,xe,Ot+vt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,rr.__webglTexture,xe),j!==0?k.blitFramebuffer(Pe,Ge,Me,ge,Ce,rt,Me,ge,k.COLOR_BUFFER_BIT,k.NEAREST):ft?k.copyTexSubImage3D(Se,xe,Ce,rt,Ot+vt,Pe,Ge,Me,ge):k.copyTexSubImage2D(Se,xe,Ce,rt,Pe,Ge,Me,ge);w.bindFramebuffer(k.READ_FRAMEBUFFER,null),w.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else ft?T.isDataTexture||T.isData3DTexture?k.texSubImage3D(Se,xe,Ce,rt,Ot,Me,ge,Te,pt,an,_t.data):U.isCompressedArrayTexture?k.compressedTexSubImage3D(Se,xe,Ce,rt,Ot,Me,ge,Te,pt,_t.data):k.texSubImage3D(Se,xe,Ce,rt,Ot,Me,ge,Te,pt,an,_t):T.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,xe,Ce,rt,Me,ge,pt,an,_t.data):T.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,xe,Ce,rt,_t.width,_t.height,pt,_t.data):k.texSubImage2D(k.TEXTURE_2D,xe,Ce,rt,Me,ge,pt,an,_t);w.pixelStorei(k.UNPACK_ROW_LENGTH,vn),w.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Je),w.pixelStorei(k.UNPACK_SKIP_PIXELS,jn),w.pixelStorei(k.UNPACK_SKIP_ROWS,mi),w.pixelStorei(k.UNPACK_SKIP_IMAGES,ir),xe===0&&U.generateMipmaps&&k.generateMipmap(Se),w.unbindTexture()},this.initRenderTarget=function(T){Y.get(T).__webglFramebuffer===void 0&&J.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?J.setTextureCube(T,0):T.isData3DTexture?J.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?J.setTexture2DArray(T,0):J.setTexture2D(T,0),w.unbindTexture()},this.resetState=function(){K=0,$=0,V=null,w.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ze._getUnpackColorSpace()}}const lc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class za{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const fL=new vu(-1,1,1,-1,0,1);class hL extends Wt{constructor(){super(),this.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new st([0,2,0,0,2,0],2))}}const pL=new hL;class NS{constructor(e){this._mesh=new je(pL,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,fL)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class mL extends za{constructor(e,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,e instanceof hn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=jc.clone(e.uniforms),this.material=new hn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new NS(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class uv extends za{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class gL extends za{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class vL{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new Le);this._width=i.width,this._height=i.height,n=new Sn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Nn}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new mL(lc),this.copyPass.material.blending=Ri,this.timer=new uR}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}uv!==void 0&&(o instanceof uv?i=!0:o instanceof gL&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class xL extends za{constructor(e,n,i=null,r=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Oe}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const _L={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Oe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class go extends za{constructor(e,n=1,i,r){super(),this.strength=n,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Le(e.x,e.y):new Le(256,256),this.clearColor=new Oe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Sn(s,o,{type:Nn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const h=new Sn(s,o,{type:Nn,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+f,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const d=new Sn(s,o,{type:Nn,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+f,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),o=Math.round(o/2)}const a=_L;this.highPassUniforms=jc.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new hn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Le(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=jc.clone(lc.uniforms),this.blendMaterial=new hn({uniforms:this.copyUniforms,vertexShader:lc.vertexShader,fragmentShader:lc.fragmentShader,premultipliedAlpha:!0,blending:Wf,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Oe,this._oldClearAlpha=1,this._basic=new Zt,this._fsQuad=new NS(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),r=Math.round(n/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Le(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,n,i,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=go.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=go.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const n=[],i=e/3;for(let o=0;o<e;o++)n.push(.39894*Math.exp(-.5*o*o/(i*i))/i);const r=[],s=[];for(let o=1;o<e;o+=2){const a=n[o],l=o+1<e?n[o+1]:0,c=a+l;r.push((o*a+(o+1)*l)/c),s.push(c)}return new hn({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new Le(.5,.5)},direction:{value:new Le(.5,.5)},centerWeight:{value:n[0]},gaussianOffsets:{value:r},gaussianWeights:{value:s}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new hn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}go.BlurDirectionX=new Le(1,0);go.BlurDirectionY=new Le(0,1);function zd(t,e){const n=document.createElement("canvas");n.width=512,n.height=288;const i=n.getContext("2d");i.fillStyle="#090d16",i.fillRect(0,0,n.width,n.height),i.strokeStyle="#22d3ee",i.lineWidth=4,i.strokeRect(4,4,n.width-8,n.height-8),i.fillStyle="#1e293b",i.fillRect(4,4,n.width-8,36),i.fillStyle="#22d3ee",i.font="bold 16px monospace",i.fillText(`● ● ●  ${t}`,16,28),i.font="14px monospace",e.forEach((s,o)=>{i.fillStyle=s.startsWith("//")?"#64748b":s.includes("UE5")||s.includes("SmartScopy")?"#38bdf8":s.includes("return")||s.includes("void")?"#c084fc":"#e2e8f0",i.fillText(s,20,68+o*24)});const r=new xS(n);return r.minFilter=nn,r}function yL(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");e.fillStyle="#06070a",e.fillRect(0,0,256,256),e.strokeStyle="rgba(34, 211, 238, 0.15)",e.lineWidth=1;for(let i=0;i<=256;i+=32)e.beginPath(),e.moveTo(i,0),e.lineTo(i,256),e.stroke(),e.beginPath(),e.moveTo(0,i),e.lineTo(256,i),e.stroke();e.fillStyle="rgba(34, 211, 238, 0.4)";for(let i=0;i<=256;i+=32)for(let r=0;r<=256;r+=32)e.fillRect(i-1.5,r-1.5,3,3);const n=new xS(t);return n.wrapS=ba,n.wrapT=ba,n.repeat.set(16,16),n}function SL(){const t=new $n;let e=null,n=null,i=null,r=null,s=[];const o=new yi(32,32),a=new Un({map:yL(),roughness:.2,metalness:.85}),l=new je(o,a);l.rotation.x=-Math.PI/2,l.position.y=0,t.add(l);const c=new yi(32,32),f=new Un({color:460813,roughness:.9,metalness:.2}),h=new je(c,f);h.rotation.x=Math.PI/2,h.position.y=5,t.add(h);const d=new yi(32,5),m=new Un({color:592660,roughness:.8}),x=new je(d,m);x.position.set(0,2.5,-8),t.add(x);const v=new Jt(16,3.2,.1),p=new Un({color:1119781,metalness:.8,roughness:.3}),u=new je(v,p);u.position.set(0,2.5,-7.95),t.add(u);const g=new yi(24,6),M=new Zt({color:330782}),_=new je(g,M);_.position.set(0,2.8,-10),t.add(_);for(let ot=0;ot<28;ot++){const Tt=1.2+Math.random()*3.5,pi=.4+Math.random()*.8,ps=new Jt(pi,Tt,.2),tr=new Zt({color:ot%3===0?726838:462372}),Ii=new je(ps,tr);if(Ii.position.set(-8+ot*.6,Tt/2,-9.8),t.add(Ii),Math.random()>.4){const wo=new Wc(.04,4,4),nr=new Zt({color:ot%2===0?2282478:16007006}),Eo=new je(wo,nr);Eo.position.set(Ii.position.x,Tt+.05,-9.75),t.add(Eo)}}const E=new $n;E.position.set(0,0,0);const b=new Jt(2.4,.08,1.1),C=new Un({color:1119264,roughness:.4,metalness:.7}),y=new je(b,C);y.position.set(0,.76,0),E.add(y);const A=new Jt(.06,.76,.9),P=new Un({color:658452,metalness:.9,roughness:.2}),I=new je(A,P);I.position.set(-1.1,.38,0);const D=new je(A,P);D.position.set(1.1,.38,0),E.add(I,D);const G=new Jt(.88,.52,.02),L=zd("UnrealEngine5 / SpatialCore.cpp",["// Low-Latency Spatial Engine","UCLASS() class ASpatialRig : public AActor {","  void Tick(float DeltaTime) override;","  FVector HeadsetPose = XRDevice->GetPose();","  return RenderStereoPass(HeadsetPose);","};"]),z=new Zt({map:L}),K=new je(G,z);K.position.set(0,1.18,-.2),E.add(K);const $=zd("MimadimPlus / MeshGen.cpp",["// Procedural Tile & DXF Clipper","void GenerateProceduralFloor() {","  PolygonClipper.Clip(DXFPoints);","  TriangulateMesh(FlooringMesh);","}"]),V=new Zt({map:$}),B=new je(G,V);B.position.set(-.9,1.18,-.05),B.rotation.y=Math.PI/8,E.add(B);const X=zd("SmartScopy / DirectShowPipeline.cs",["// Zero-Latency OT Surgical Stream","void OnDirectShowFrame(byte[] buffer) {","  YoloDetector.InferFrame(buffer);","  HoloLensStreamer.TransmitE2EE();","}"]),Z=new Zt({map:X}),ce=new je(G,Z);ce.position.set(.9,1.18,-.05),ce.rotation.y=-Math.PI/8,E.add(ce);const ve=new $n;ve.position.set(.4,.83,.15),ve.rotation.y=-Math.PI/6;const Xe=new Jt(.24,.08,.12),ze=new Un({color:329484,roughness:.1,metalness:.95}),ke=new je(Xe,ze);ve.add(ke);const Q=new Jt(.25,.06,.02),ie=new tR({color:2282478,roughness:.1,transmission:.8,transparent:!0}),ye=new je(Q,ie);ye.position.z=.06,ve.add(ye);const Ie=new Wc(.015,8,8),_e=new Zt({color:1096065});i=new je(Ie,_e),i.position.set(.1,.02,.065),ve.add(i),E.add(ve),t.add(E),n=new $n,n.position.set(3.2,1.1,-1.2);const Ve=new Jt(1.6,1.1,1.6),Lt=new Zt({color:2282478,wireframe:!0,transparent:!0,opacity:.7}),$e=new je(Ve,Lt);n.add($e);const Qe=new yi(1.5,1.5,6,6),ut=new Zt({color:8490232,wireframe:!0,transparent:!0,opacity:.5}),He=new je(Qe,ut);He.rotation.x=-Math.PI/2,He.position.y=-.54,n.add(He);const mt=new hR(.4);n.add(mt);const Ft=new Gc(.8,.9,.6,16),on=new Un({color:1119782,metalness:.8,roughness:.3}),gt=new je(Ft,on);gt.position.set(3.2,.3,-1.2),t.add(gt),t.add(n);const ht=new $n;ht.position.set(-3.5,0,-2.8);const k=new Jt(1.2,.85,.8),jt=new Un({color:1317417,roughness:.3,metalness:.7}),tt=new je(k,jt);tt.position.set(0,.42,0),ht.add(tt);const R=new Gc(.04,.04,.9,12),w=new Un({color:9741240,metalness:.9,roughness:.2}),H=new je(R,w);H.position.set(.45,1.15,0),ht.add(H),e=new $n,e.position.set(0,1.45,0);const Y=new om(.38,2),J=new Zt({color:1096065,wireframe:!0,transparent:!0,opacity:.85}),oe=new je(Y,J);e.add(oe);const ae=new lm(.55,.015,16,48),ee=new Zt({color:2282478,transparent:!0,opacity:.6}),ne=new je(ae,ee);ne.rotation.x=Math.PI/3,e.add(ne);const ue=new je(ae,ee);ue.rotation.y=Math.PI/4,e.add(ue),ht.add(e);const be=new $n;be.position.set(1.7,0,.6);const he=new Jt(.8,1.65,.75),de=new Un({color:856346,metalness:.6,roughness:.4}),Ae=new je(he,de);Ae.position.set(0,.82,0),be.add(Ae);const Ne=new yi(.55,.45),Ue=new Zt({color:2282478,wireframe:!0}),F=new je(Ne,Ue);F.position.set(0,1.15,.38),be.add(F);const fe=new am(.4,.9,32),te=new Zt({color:1096065,side:Ei,transparent:!0,opacity:.45}),le=new je(fe,te);le.rotation.x=-Math.PI/2,le.position.set(0,.02,1.3),be.add(le),ht.add(be),t.add(ht);const pe=new $n;pe.position.set(-1.8,0,-6.2);for(let ot=0;ot<3;ot++){const Tt=new Jt(.9,2.6,.8),pi=new Un({color:527380,metalness:.85,roughness:.25}),ps=new je(Tt,pi);ps.position.set(ot*1.05,1.3,0),pe.add(ps);for(let tr=0;tr<12;tr++){const Ii=new Jt(.03,.02,.01),wo=new Zt({color:Math.random()>.3?2282478:1096065}),nr=new je(Ii,wo);nr.position.set(ot*1.05-.32,.4+tr*.16,.41),pe.add(nr),s.push(nr)}}t.add(pe);const re=280,Re=new Wt,Ee=new Float32Array(re*3);for(let ot=0;ot<re*3;ot+=3)Ee[ot]=(Math.random()-.5)*16,Ee[ot+1]=Math.random()*4.5,Ee[ot+2]=(Math.random()-.5)*16;Re.setAttribute("position",new Ni(Ee,3));const dt=new gS({color:2282478,size:.04,transparent:!0,opacity:.6});return r=new qA(Re,dt),t.add(r),{group:t,update:(ot,Tt)=>{if(e&&(e.rotation.y=Tt*.6,e.position.y=1.45+Math.sin(Tt*2)*.04),n&&(n.rotation.y=-Tt*.35,n.position.y=1.1+Math.cos(Tt*1.5)*.03),i){const pi=.5+Math.sin(Tt*4)*.5;i.material.color.setRGB(.06*pi,.72*pi,.5*pi)}s.length>0&&Math.random()>.88&&s[Math.floor(Math.random()*s.length)].material.color.setHex(Math.random()>.5?2282478:1096065),r&&(r.rotation.y=Tt*.02)}}}const ML=[{sectionId:"home",scrollProgress:0,position:new O(0,1.4,3.2),target:new O(0,1.15,0)},{sectionId:"about",scrollProgress:.2,position:new O(2,1.7,1.8),target:new O(3,1.1,-1.2)},{sectionId:"experience",scrollProgress:.38,position:new O(.8,1.9,1.2),target:new O(0,1,-2.5)},{sectionId:"projects",scrollProgress:.62,position:new O(-2.2,1.6,-.5),target:new O(-3.2,1.3,-2.8)},{sectionId:"skills",scrollProgress:.82,position:new O(-.6,1.4,-3.6),target:new O(-1.6,1.3,-6)},{sectionId:"contact",scrollProgress:1,position:new O(0,3,4.2),target:new O(0,1.1,-2)}];class wL{constructor(e,n=ML){wt(this,"camera");wt(this,"waypoints");wt(this,"currentPosition",new O);wt(this,"currentTarget",new O);wt(this,"targetPosition",new O);wt(this,"targetLookAt",new O);wt(this,"mouseOffset",new Le(0,0));wt(this,"currentMouseOffset",new Le(0,0));this.camera=e,this.waypoints=n,n.length>0&&(this.currentPosition.copy(n[0].position),this.currentTarget.copy(n[0].target),this.targetPosition.copy(n[0].position),this.targetLookAt.copy(n[0].target))}setMouseOffset(e,n){this.mouseOffset.set(e*.25,n*.15)}update(e,n){const i=Math.max(0,Math.min(1,e));let r=0;for(let m=0;m<this.waypoints.length-1;m++)if(i>=this.waypoints[m].scrollProgress&&i<=this.waypoints[m+1].scrollProgress){r=m;break}const s=Math.min(r+1,this.waypoints.length-1),o=this.waypoints[r],a=this.waypoints[s],l=a.scrollProgress-o.scrollProgress,c=l>0?(i-o.scrollProgress)/l:0,f=.5-.5*Math.cos(c*Math.PI);this.targetPosition.lerpVectors(o.position,a.position,f),this.targetLookAt.lerpVectors(o.target,a.target,f);const h=Math.min(1,n*3.5);this.currentMouseOffset.lerp(this.mouseOffset,h);const d=Math.min(1,n*4);this.currentPosition.lerp(this.targetPosition,d),this.currentTarget.lerp(this.targetLookAt,d),this.camera.position.set(this.currentPosition.x+this.currentMouseOffset.x,this.currentPosition.y-this.currentMouseOffset.y,this.currentPosition.z),this.camera.lookAt(this.currentTarget.x,this.currentTarget.y,this.currentTarget.z)}}class EL{constructor(){wt(this,"container",null);wt(this,"scene");wt(this,"camera");wt(this,"cameraController");wt(this,"renderer",null);wt(this,"composer",null);wt(this,"bloomPass",null);wt(this,"environment",null);wt(this,"animationFrameId",null);wt(this,"isDestroyed",!1);wt(this,"isIdle",!1);wt(this,"scrollProgress",0);wt(this,"lastTime",0);wt(this,"clock");wt(this,"onTick");this.scene=new OA,this.scene.fog=new nm(460813,.05),this.camera=new kn(45,1,.1,100),this.camera.position.set(0,1.4,3.2),this.cameraController=new wL(this.camera),this.clock=new fR}init(e,n){this.container=e,this.isDestroyed=!1;try{const i=e.clientWidth||window.innerWidth,r=e.clientHeight||window.innerHeight;this.renderer=new dL({powerPreference:"high-performance",antialias:!0,alpha:!0,stencil:!1,depth:!0}),this.renderer.setSize(i,r);const s=Math.min(window.devicePixelRatio||1,1.75);return this.renderer.setPixelRatio(s),this.renderer.toneMapping=Xp,this.renderer.toneMappingExposure=1.15,this.renderer.outputColorSpace=On,this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.renderer.domElement.style.position="absolute",this.renderer.domElement.style.top="0",this.renderer.domElement.style.left="0",e.appendChild(this.renderer.domElement),this.camera.aspect=i/r,this.camera.updateProjectionMatrix(),this.setupLighting(),this.environment=SL(),this.scene.add(this.environment.group),this.setupPostProcessing(i,r),n!=null&&n.onLoaded&&n.onLoaded(),this.startRenderLoop(),!0}catch(i){return console.warn("StudioScene: WebGL initialization failed, fallback enabled.",i),n!=null&&n.onError&&i instanceof Error&&n.onError(i),!1}}setupLighting(){const e=new aR(791336,.9);this.scene.add(e);const n=new oR(14219519,1.4);n.position.set(5,8,4),this.scene.add(n);const i=new Dd(2282478,2.8,16);i.position.set(-1.5,2.2,.5),this.scene.add(i);const r=new Dd(8490232,2.5,16);r.position.set(2.2,2.5,-1),this.scene.add(r);const s=new Dd(1096065,1.8,12);s.position.set(-2.2,1.8,-2.5),this.scene.add(s)}setupPostProcessing(e,n){if(this.renderer)try{this.composer=new vL(this.renderer);const i=new xL(this.scene,this.camera);this.composer.addPass(i),this.bloomPass=new go(new Le(e,n),.5,.35,.75),this.composer.addPass(this.bloomPass)}catch(i){console.warn("Postprocessing bloom unsupported, using standard renderer.",i),this.composer=null}}resize(){if(!this.container||!this.renderer)return;const e=this.container.clientWidth||window.innerWidth,n=this.container.clientHeight||window.innerHeight;this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n),this.composer&&this.composer.setSize(e,n)}setIdle(e){this.isIdle=e}startRenderLoop(){const e=n=>{if(this.isDestroyed||(this.animationFrameId=requestAnimationFrame(e),this.isIdle&&n-this.lastTime<66))return;this.lastTime=n;const i=this.clock.getDelta(),r=this.clock.getElapsedTime();this.cameraController.update(this.scrollProgress,i),this.environment&&this.environment.update(i,r),this.onTick&&this.onTick(i,r),this.composer?this.composer.render():this.renderer&&this.renderer.render(this.scene,this.camera)};this.animationFrameId=requestAnimationFrame(e)}setScrollProgress(e){this.scrollProgress=e}setMouseOffset(e,n){this.cameraController.setMouseOffset(e,n)}destroy(){this.isDestroyed=!0,this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.renderer&&this.renderer.domElement&&this.renderer.domElement.parentElement&&(this.renderer.domElement.parentElement.removeChild(this.renderer.domElement),this.renderer.dispose(),this.renderer=null),this.composer&&(this.composer.dispose(),this.composer=null),this.scene.traverse(e=>{e instanceof je&&(e.geometry.dispose(),Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material&&e.material.dispose())}),this.environment=null,this.scene.clear()}}const bL=({progress:t,isLoaded:e})=>{const i=2*Math.PI*48,r=i-t/100*i;return S.jsxs("div",{className:`fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#07080d]/90 backdrop-blur-xl transition-all duration-700 ${e?"opacity-0 pointer-events-none":"opacity-100"}`,children:[S.jsxs("div",{className:"relative flex items-center justify-center w-36 h-36",children:[S.jsx("div",{className:"absolute inset-0 rounded-full bg-cyan-500/10 blur-xl animate-pulse"}),S.jsxs("svg",{className:"w-32 h-32 -rotate-90 transform",children:[S.jsx("circle",{cx:"64",cy:"64",r:48,className:"stroke-slate-800",strokeWidth:"3",fill:"transparent"}),S.jsx("circle",{cx:"64",cy:"64",r:48,className:"stroke-cyan-400 transition-all duration-300 ease-out",strokeWidth:"3.5",strokeDasharray:i,strokeDashoffset:r,strokeLinecap:"round",fill:"transparent"})]}),S.jsxs("div",{className:"absolute flex flex-col items-center justify-center",children:[S.jsxs("span",{className:"font-mono text-xl font-bold tracking-tight text-cyan-400",children:[Math.floor(t),"%"]}),S.jsx("span",{className:"font-mono text-[9px] uppercase tracking-widest text-slate-400 mt-0.5",children:"READY"})]})]}),S.jsxs("div",{className:"mt-6 flex flex-col items-center gap-1.5 text-center",children:[S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsxs("span",{className:"relative flex h-2 w-2",children:[S.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"}),S.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-cyan-500"})]}),S.jsx("span",{className:"font-mono text-xs font-semibold tracking-widest text-slate-300 uppercase",children:"Initializing Spatial Lab"})]}),S.jsx("span",{className:"font-mono text-[10px] tracking-wide text-slate-500",children:"Unreal Engine 5 • Three.js • Spatial WebGL"})]})]})},TL=({isEnabled:t=!0})=>{const e=N.useRef(null),n=N.useRef(null),[i,r]=N.useState(0),[s,o]=N.useState(!1),[a,l]=N.useState(!1);return N.useEffect(()=>{if(!t||!e.current){n.current&&(n.current.destroy(),n.current=null);return}const c=new EL;n.current=c;let f=10;r(f);const h=setInterval(()=>{f+=Math.random()*25,f>=95&&(f=95,clearInterval(h)),r(Math.min(95,f))},80);if(!c.init(e.current,{onLoaded:()=>{clearInterval(h),r(100),setTimeout(()=>{o(!0)},350)},onError:g=>{console.warn("StudioCanvas: WebGL fallback activated.",g),clearInterval(h),l(!0),o(!0)}})){clearInterval(h),l(!0),o(!0);return}const m=()=>{const g=document.documentElement.scrollHeight-window.innerHeight,M=g>0?window.scrollY/g:0;c.setScrollProgress(M),p()},x=g=>{const M=g.clientX/window.innerWidth*2-1,_=g.clientY/window.innerHeight*2-1;c.setMouseOffset(M,_),p()};let v=null;const p=()=>{c.setIdle(!1),v&&clearTimeout(v),v=setTimeout(()=>{c.setIdle(!0)},3e3)};p();const u=()=>{c.resize()};return window.addEventListener("scroll",m,{passive:!0}),window.addEventListener("mousemove",x,{passive:!0}),window.addEventListener("resize",u),m(),()=>{clearInterval(h),v&&clearTimeout(v),window.removeEventListener("scroll",m),window.removeEventListener("mousemove",x),window.removeEventListener("resize",u),c.destroy(),n.current=null}},[t]),!t||a?null:S.jsxs(S.Fragment,{children:[S.jsx(bL,{progress:i,isLoaded:s}),S.jsx("div",{ref:e,"aria-hidden":"true",className:"fixed inset-0 z-0 pointer-events-none overflow-hidden transition-opacity duration-1000",style:{opacity:s?1:0}})]})},CL=()=>{const[t,e]=N.useState(()=>{try{const i=localStorage.getItem("ravi_portfolio_3d_enabled");return i!==null?i==="true":!0}catch{return!0}});N.useEffect(()=>{try{localStorage.setItem("ravi_portfolio_3d_enabled",String(t))}catch{}},[t]);const n=()=>{e(i=>!i)};return S.jsxs("div",{className:"min-h-screen relative bg-[#07080d] selection:bg-cyan-500/30 selection:text-cyan-200",children:[S.jsx(TL,{isEnabled:t}),S.jsxs("div",{className:"relative z-10",children:[S.jsx(bb,{is3DEnabled:t,onToggle3D:n}),S.jsxs("main",{children:[S.jsx(Tb,{}),S.jsx(Lb,{}),S.jsx(Db,{}),S.jsx(Ib,{}),S.jsx(Ub,{}),S.jsx(vC,{}),S.jsx(xC,{}),S.jsx(OC,{})]}),S.jsx(kC,{})]})]})},AL=()=>{const t=I_();return N.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",t.pathname)},[t.pathname]),S.jsx("div",{className:"flex min-h-screen items-center justify-center bg-gray-100",children:S.jsxs("div",{className:"text-center",children:[S.jsx("h1",{className:"mb-4 text-4xl font-bold",children:"404"}),S.jsx("p",{className:"mb-4 text-xl text-gray-600",children:"Oops! Page not found"}),S.jsx("a",{href:"/",className:"text-blue-500 underline hover:text-blue-700",children:"Return to Home"})]})})};function RL(t){const e=t+"CollectionProvider",[n,i]=kp(e),[r,s]=n(e,{collectionRef:{current:null},itemMap:new Map}),o=v=>{const{scope:p,children:u}=v,g=pr.useRef(null),M=pr.useRef(new Map).current;return S.jsx(r,{scope:p,itemMap:M,collectionRef:g,children:u})};o.displayName=e;const a=t+"CollectionSlot",l=wa(a),c=pr.forwardRef((v,p)=>{const{scope:u,children:g}=v,M=s(a,u),_=fi(p,M.collectionRef);return S.jsx(l,{ref:_,children:g})});c.displayName=a;const f=t+"CollectionItemSlot",h="data-radix-collection-item",d=wa(f),m=pr.forwardRef((v,p)=>{const{scope:u,children:g,...M}=v,_=pr.useRef(null),E=fi(p,_),b=s(f,u);return pr.useEffect(()=>(b.itemMap.set(_,{ref:_,...M}),()=>void b.itemMap.delete(_))),S.jsx(d,{[h]:"",ref:E,children:g})});m.displayName=f;function x(v){const p=s(t+"CollectionConsumer",v);return pr.useCallback(()=>{const g=p.collectionRef.current;if(!g)return[];const M=Array.from(g.querySelectorAll(`[${h}]`));return Array.from(p.itemMap.values()).sort((b,C)=>M.indexOf(b.ref.current)-M.indexOf(C.ref.current))},[p.collectionRef,p.itemMap])}return[{Provider:o,Slot:c,ItemSlot:m},x,i]}var PL=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),NL="VisuallyHidden",um=N.forwardRef((t,e)=>S.jsx(gn.span,{...t,ref:e,style:{...PL,...t.style}}));um.displayName=NL;var dm="ToastProvider",[fm,LL,DL]=RL("Toast"),[LS,rD]=kp("Toast",[DL]),[IL,yu]=LS(dm),DS=t=>{const{__scopeToast:e,label:n="Notification",duration:i=5e3,swipeDirection:r="right",swipeThreshold:s=50,children:o}=t,[a,l]=N.useState(null),[c,f]=N.useState(0),h=N.useRef(!1),d=N.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${dm}\`. Expected non-empty \`string\`.`),S.jsx(fm.Provider,{scope:e,children:S.jsx(IL,{scope:e,label:n,duration:i,swipeDirection:r,swipeThreshold:s,toastCount:c,viewport:a,onViewportChange:l,onToastAdd:N.useCallback(()=>f(m=>m+1),[]),onToastRemove:N.useCallback(()=>f(m=>m-1),[]),isFocusedToastEscapeKeyDownRef:h,isClosePausedRef:d,children:o})})};DS.displayName=dm;var IS="ToastViewport",UL=["F8"],Ih="toast.viewportPause",Uh="toast.viewportResume",US=N.forwardRef((t,e)=>{const{__scopeToast:n,hotkey:i=UL,label:r="Notifications ({hotkey})",...s}=t,o=yu(IS,n),a=LL(n),l=N.useRef(null),c=N.useRef(null),f=N.useRef(null),h=N.useRef(null),d=fi(e,h,o.onViewportChange),m=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),x=o.toastCount>0;N.useEffect(()=>{const p=u=>{var M;i.length!==0&&i.every(_=>u[_]||u.code===_)&&((M=h.current)==null||M.focus())};return document.addEventListener("keydown",p),()=>document.removeEventListener("keydown",p)},[i]),N.useEffect(()=>{const p=l.current,u=h.current;if(x&&p&&u){const g=()=>{if(!o.isClosePausedRef.current){const b=new CustomEvent(Ih);u.dispatchEvent(b),o.isClosePausedRef.current=!0}},M=()=>{if(o.isClosePausedRef.current){const b=new CustomEvent(Uh);u.dispatchEvent(b),o.isClosePausedRef.current=!1}},_=b=>{!p.contains(b.relatedTarget)&&M()},E=()=>{p.contains(document.activeElement)||M()};return p.addEventListener("focusin",g),p.addEventListener("focusout",_),p.addEventListener("pointermove",g),p.addEventListener("pointerleave",E),window.addEventListener("blur",g),window.addEventListener("focus",M),()=>{p.removeEventListener("focusin",g),p.removeEventListener("focusout",_),p.removeEventListener("pointermove",g),p.removeEventListener("pointerleave",E),window.removeEventListener("blur",g),window.removeEventListener("focus",M)}}},[x,o.isClosePausedRef]);const v=N.useCallback(({tabbingDirection:p})=>{const g=a().map(M=>{const _=M.ref.current,E=[_,...YL(_)];return p==="forwards"?E:E.reverse()});return(p==="forwards"?g.reverse():g).flat()},[a]);return N.useEffect(()=>{const p=h.current;if(p){const u=g=>{var E,b,C;const M=g.altKey||g.ctrlKey||g.metaKey;if(g.key==="Tab"&&!M){const y=document.activeElement,A=g.shiftKey;if(g.target===p&&A){(E=c.current)==null||E.focus();return}const D=v({tabbingDirection:A?"backwards":"forwards"}),G=D.findIndex(L=>L===y);Vd(D.slice(G+1))?g.preventDefault():A?(b=c.current)==null||b.focus():(C=f.current)==null||C.focus()}};return p.addEventListener("keydown",u),()=>p.removeEventListener("keydown",u)}},[a,v]),S.jsxs(eT,{ref:l,role:"region","aria-label":r.replace("{hotkey}",m),tabIndex:-1,style:{pointerEvents:x?void 0:"none"},children:[x&&S.jsx(Fh,{ref:c,onFocusFromOutsideViewport:()=>{const p=v({tabbingDirection:"forwards"});Vd(p)}}),S.jsx(fm.Slot,{scope:n,children:S.jsx(gn.ol,{tabIndex:-1,...s,ref:d})}),x&&S.jsx(Fh,{ref:f,onFocusFromOutsideViewport:()=>{const p=v({tabbingDirection:"backwards"});Vd(p)}})]})});US.displayName=IS;var FS="ToastFocusProxy",Fh=N.forwardRef((t,e)=>{const{__scopeToast:n,onFocusFromOutsideViewport:i,...r}=t,s=yu(FS,n);return S.jsx(um,{"aria-hidden":!0,tabIndex:0,...r,ref:e,style:{position:"fixed"},onFocus:o=>{var c;const a=o.relatedTarget;!((c=s.viewport)!=null&&c.contains(a))&&i()}})});Fh.displayName=FS;var Va="Toast",FL="toast.swipeStart",OL="toast.swipeMove",kL="toast.swipeCancel",BL="toast.swipeEnd",OS=N.forwardRef((t,e)=>{const{forceMount:n,open:i,defaultOpen:r,onOpenChange:s,...o}=t,[a,l]=K_({prop:i,defaultProp:r??!0,onChange:s,caller:Va});return S.jsx(Ua,{present:n||a,children:S.jsx(HL,{open:a,...o,ref:e,onClose:()=>l(!1),onPause:Qi(t.onPause),onResume:Qi(t.onResume),onSwipeStart:Yt(t.onSwipeStart,c=>{c.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:Yt(t.onSwipeMove,c=>{const{x:f,y:h}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","move"),c.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${f}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${h}px`)}),onSwipeCancel:Yt(t.onSwipeCancel,c=>{c.currentTarget.setAttribute("data-swipe","cancel"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:Yt(t.onSwipeEnd,c=>{const{x:f,y:h}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","end"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${f}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${h}px`),l(!1)})})})});OS.displayName=Va;var[zL,VL]=LS(Va,{onClose(){}}),HL=N.forwardRef((t,e)=>{const{__scopeToast:n,type:i="foreground",duration:r,open:s,onClose:o,onEscapeKeyDown:a,onPause:l,onResume:c,onSwipeStart:f,onSwipeMove:h,onSwipeCancel:d,onSwipeEnd:m,...x}=t,v=yu(Va,n),[p,u]=N.useState(null),g=fi(e,L=>u(L)),M=N.useRef(null),_=N.useRef(null),E=r||v.duration,b=N.useRef(0),C=N.useRef(E),y=N.useRef(0),{onToastAdd:A,onToastRemove:P}=v,I=Qi(()=>{var z;(p==null?void 0:p.contains(document.activeElement))&&((z=v.viewport)==null||z.focus()),o()}),D=N.useCallback(L=>{!L||L===1/0||(window.clearTimeout(y.current),b.current=new Date().getTime(),y.current=window.setTimeout(I,L))},[I]);N.useEffect(()=>{const L=v.viewport;if(L){const z=()=>{D(C.current),c==null||c()},K=()=>{const $=new Date().getTime()-b.current;C.current=C.current-$,window.clearTimeout(y.current),l==null||l()};return L.addEventListener(Ih,K),L.addEventListener(Uh,z),()=>{L.removeEventListener(Ih,K),L.removeEventListener(Uh,z)}}},[v.viewport,E,l,c,D]),N.useEffect(()=>{s&&!v.isClosePausedRef.current&&D(E)},[s,E,v.isClosePausedRef,D]),N.useEffect(()=>(A(),()=>P()),[A,P]);const G=N.useMemo(()=>p?WS(p):null,[p]);return v.viewport?S.jsxs(S.Fragment,{children:[G&&S.jsx(GL,{__scopeToast:n,role:"status","aria-live":i==="foreground"?"assertive":"polite","aria-atomic":!0,children:G}),S.jsx(zL,{scope:n,onClose:I,children:cu.createPortal(S.jsx(fm.ItemSlot,{scope:n,children:S.jsx(Jb,{asChild:!0,onEscapeKeyDown:Yt(a,()=>{v.isFocusedToastEscapeKeyDownRef.current||I(),v.isFocusedToastEscapeKeyDownRef.current=!1}),children:S.jsx(gn.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":s?"open":"closed","data-swipe-direction":v.swipeDirection,...x,ref:g,style:{userSelect:"none",touchAction:"none",...t.style},onKeyDown:Yt(t.onKeyDown,L=>{L.key==="Escape"&&(a==null||a(L.nativeEvent),L.nativeEvent.defaultPrevented||(v.isFocusedToastEscapeKeyDownRef.current=!0,I()))}),onPointerDown:Yt(t.onPointerDown,L=>{L.button===0&&(M.current={x:L.clientX,y:L.clientY})}),onPointerMove:Yt(t.onPointerMove,L=>{if(!M.current)return;const z=L.clientX-M.current.x,K=L.clientY-M.current.y,$=!!_.current,V=["left","right"].includes(v.swipeDirection),B=["left","up"].includes(v.swipeDirection)?Math.min:Math.max,X=V?B(0,z):0,Z=V?0:B(0,K),ce=L.pointerType==="touch"?10:2,ve={x:X,y:Z},Xe={originalEvent:L,delta:ve};$?(_.current=ve,Bl(OL,h,Xe,{discrete:!1})):dv(ve,v.swipeDirection,ce)?(_.current=ve,Bl(FL,f,Xe,{discrete:!1}),L.target.setPointerCapture(L.pointerId)):(Math.abs(z)>ce||Math.abs(K)>ce)&&(M.current=null)}),onPointerUp:Yt(t.onPointerUp,L=>{const z=_.current,K=L.target;if(K.hasPointerCapture(L.pointerId)&&K.releasePointerCapture(L.pointerId),_.current=null,M.current=null,z){const $=L.currentTarget,V={originalEvent:L,delta:z};dv(z,v.swipeDirection,v.swipeThreshold)?Bl(BL,m,V,{discrete:!0}):Bl(kL,d,V,{discrete:!0}),$.addEventListener("click",B=>B.preventDefault(),{once:!0})}})})})}),v.viewport)})]}):null}),GL=t=>{const{__scopeToast:e,children:n,...i}=t,r=yu(Va,e),[s,o]=N.useState(!1),[a,l]=N.useState(!1);return XL(()=>o(!0)),N.useEffect(()=>{const c=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(c)},[]),a?null:S.jsx(zp,{asChild:!0,children:S.jsx(um,{...i,children:s&&S.jsxs(S.Fragment,{children:[r.label," ",n]})})})},WL="ToastTitle",kS=N.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t;return S.jsx(gn.div,{...i,ref:e})});kS.displayName=WL;var jL="ToastDescription",BS=N.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t;return S.jsx(gn.div,{...i,ref:e})});BS.displayName=jL;var zS="ToastAction",VS=N.forwardRef((t,e)=>{const{altText:n,...i}=t;return n.trim()?S.jsx(GS,{altText:n,asChild:!0,children:S.jsx(hm,{...i,ref:e})}):(console.error(`Invalid prop \`altText\` supplied to \`${zS}\`. Expected non-empty \`string\`.`),null)});VS.displayName=zS;var HS="ToastClose",hm=N.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t,r=VL(HS,n);return S.jsx(GS,{asChild:!0,children:S.jsx(gn.button,{type:"button",...i,ref:e,onClick:Yt(t.onClick,r.onClose)})})});hm.displayName=HS;var GS=N.forwardRef((t,e)=>{const{__scopeToast:n,altText:i,...r}=t;return S.jsx(gn.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":i||void 0,...r,ref:e})});function WS(t){const e=[];return Array.from(t.childNodes).forEach(i=>{if(i.nodeType===i.TEXT_NODE&&i.textContent&&e.push(i.textContent),$L(i)){const r=i.ariaHidden||i.hidden||i.style.display==="none",s=i.dataset.radixToastAnnounceExclude==="";if(!r)if(s){const o=i.dataset.radixToastAnnounceAlt;o&&e.push(o)}else e.push(...WS(i))}}),e}function Bl(t,e,n,{discrete:i}){const r=n.originalEvent.currentTarget,s=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:n});e&&r.addEventListener(t,e,{once:!0}),i?Z_(r,s):r.dispatchEvent(s)}var dv=(t,e,n=0)=>{const i=Math.abs(t.x),r=Math.abs(t.y),s=i>r;return e==="left"||e==="right"?s&&i>n:!s&&r>n};function XL(t=()=>{}){const e=Qi(t);ho(()=>{let n=0,i=0;return n=window.requestAnimationFrame(()=>i=window.requestAnimationFrame(e)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(i)}},[e])}function $L(t){return t.nodeType===t.ELEMENT_NODE}function YL(t){const e=[],n=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>{const r=i.tagName==="INPUT"&&i.type==="hidden";return i.disabled||i.hidden||r?NodeFilter.FILTER_SKIP:i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)e.push(n.currentNode);return e}function Vd(t){const e=document.activeElement;return t.some(n=>n===e?!0:(n.focus(),document.activeElement!==e))}var qL=DS,jS=US,XS=OS,$S=kS,YS=BS,qS=VS,KS=hm;const KL=qL,ZS=N.forwardRef(({className:t,...e},n)=>S.jsx(jS,{ref:n,className:Ut("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",t),...e}));ZS.displayName=jS.displayName;const ZL=Dp("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),QS=N.forwardRef(({className:t,variant:e,...n},i)=>S.jsx(XS,{ref:i,className:Ut(ZL({variant:e}),t),...n}));QS.displayName=XS.displayName;const QL=N.forwardRef(({className:t,...e},n)=>S.jsx(qS,{ref:n,className:Ut("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",t),...e}));QL.displayName=qS.displayName;const JS=N.forwardRef(({className:t,...e},n)=>S.jsx(KS,{ref:n,className:Ut("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",t),"toast-close":"",...e,children:S.jsx(Op,{className:"h-4 w-4"})}));JS.displayName=KS.displayName;const eM=N.forwardRef(({className:t,...e},n)=>S.jsx($S,{ref:n,className:Ut("text-sm font-semibold",t),...e}));eM.displayName=$S.displayName;const tM=N.forwardRef(({className:t,...e},n)=>S.jsx(YS,{ref:n,className:Ut("text-sm opacity-90",t),...e}));tM.displayName=YS.displayName;function JL(){const{toasts:t}=Oy();return S.jsxs(KL,{children:[t.map(function({id:e,title:n,description:i,action:r,...s}){return S.jsxs(QS,{...s,children:[S.jsxs("div",{className:"grid gap-1",children:[n&&S.jsx(eM,{children:n}),i&&S.jsx(tM,{children:i})]}),r,S.jsx(JS,{})]},e)}),S.jsx(ZS,{})]})}const eD=()=>S.jsx(_E,{basename:"/MyProtfolio",children:S.jsxs(S.Fragment,{children:[S.jsxs(gE,{children:[S.jsx(Of,{path:"/",element:S.jsx(CL,{})}),S.jsx(Of,{path:"*",element:S.jsx(AL,{})})]}),S.jsx(JL,{})]})});b_(document.getElementById("root")).render(S.jsx(eD,{}));
