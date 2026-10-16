(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function Nd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var gs={exports:{}},ul={},vs={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var er=Symbol.for("react.element"),Sd=Symbol.for("react.portal"),bd=Symbol.for("react.fragment"),Cd=Symbol.for("react.strict_mode"),zd=Symbol.for("react.profiler"),Ed=Symbol.for("react.provider"),_d=Symbol.for("react.context"),Pd=Symbol.for("react.forward_ref"),Rd=Symbol.for("react.suspense"),Md=Symbol.for("react.memo"),Dd=Symbol.for("react.lazy"),no=Symbol.iterator;function Ld(e){return e===null||typeof e!="object"?null:(e=no&&e[no]||e["@@iterator"],typeof e=="function"?e:null)}var ys={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xs=Object.assign,ks={};function sn(e,t,n){this.props=e,this.context=t,this.refs=ks,this.updater=n||ys}sn.prototype.isReactComponent={};sn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};sn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ws(){}ws.prototype=sn.prototype;function la(e,t,n){this.props=e,this.context=t,this.refs=ks,this.updater=n||ys}var ia=la.prototype=new ws;ia.constructor=la;xs(ia,sn.prototype);ia.isPureReactComponent=!0;var ro=Array.isArray,js=Object.prototype.hasOwnProperty,aa={current:null},Ns={key:!0,ref:!0,__self:!0,__source:!0};function Ss(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)js.call(t,r)&&!Ns.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var c=Array(s),d=0;d<s;d++)c[d]=arguments[d+2];l.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:er,type:e,key:i,ref:o,props:l,_owner:aa.current}}function Td(e,t){return{$$typeof:er,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function oa(e){return typeof e=="object"&&e!==null&&e.$$typeof===er}function Id(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var lo=/\/+/g;function Rl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Id(""+e.key):t.toString(36)}function br(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case er:case Sd:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Rl(o,0):r,ro(l)?(n="",e!=null&&(n=e.replace(lo,"$&/")+"/"),br(l,t,n,"",function(d){return d})):l!=null&&(oa(l)&&(l=Td(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(lo,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",ro(e))for(var s=0;s<e.length;s++){i=e[s];var c=r+Rl(i,s);o+=br(i,t,n,c,l)}else if(c=Ld(e),typeof c=="function")for(e=c.call(e),s=0;!(i=e.next()).done;)i=i.value,c=r+Rl(i,s++),o+=br(i,t,n,c,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function sr(e,t,n){if(e==null)return e;var r=[],l=0;return br(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Ad(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},Cr={transition:null},Fd={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:Cr,ReactCurrentOwner:aa};function bs(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:sr,forEach:function(e,t,n){sr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return sr(e,function(){t++}),t},toArray:function(e){return sr(e,function(t){return t})||[]},only:function(e){if(!oa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=sn;R.Fragment=bd;R.Profiler=zd;R.PureComponent=la;R.StrictMode=Cd;R.Suspense=Rd;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fd;R.act=bs;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=xs({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=aa.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)js.call(t,c)&&!Ns.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){s=Array(c);for(var d=0;d<c;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:er,type:e.type,key:l,ref:i,props:r,_owner:o}};R.createContext=function(e){return e={$$typeof:_d,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ed,_context:e},e.Consumer=e};R.createElement=Ss;R.createFactory=function(e){var t=Ss.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:Pd,render:e}};R.isValidElement=oa;R.lazy=function(e){return{$$typeof:Dd,_payload:{_status:-1,_result:e},_init:Ad}};R.memo=function(e,t){return{$$typeof:Md,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=Cr.transition;Cr.transition={};try{e()}finally{Cr.transition=t}};R.unstable_act=bs;R.useCallback=function(e,t){return ue.current.useCallback(e,t)};R.useContext=function(e){return ue.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};R.useEffect=function(e,t){return ue.current.useEffect(e,t)};R.useId=function(){return ue.current.useId()};R.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return ue.current.useMemo(e,t)};R.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};R.useRef=function(e){return ue.current.useRef(e)};R.useState=function(e){return ue.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return ue.current.useTransition()};R.version="18.3.1";vs.exports=R;var I=vs.exports;const Cs=Nd(I);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od=I,$d=Symbol.for("react.element"),Bd=Symbol.for("react.fragment"),Hd=Object.prototype.hasOwnProperty,Ud=Od.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vd={key:!0,ref:!0,__self:!0,__source:!0};function zs(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Hd.call(t,r)&&!Vd.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:$d,type:e,key:i,ref:o,props:l,_owner:Ud.current}}ul.Fragment=Bd;ul.jsx=zs;ul.jsxs=zs;gs.exports=ul;var a=gs.exports,ii={},Es={exports:{}},we={},_s={exports:{}},Ps={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(S,_){var P=S.length;S.push(_);e:for(;0<P;){var G=P-1>>>1,J=S[G];if(0<l(J,_))S[G]=_,S[P]=J,P=G;else break e}}function n(S){return S.length===0?null:S[0]}function r(S){if(S.length===0)return null;var _=S[0],P=S.pop();if(P!==_){S[0]=P;e:for(var G=0,J=S.length,ar=J>>>1;G<ar;){var yt=2*(G+1)-1,Pl=S[yt],xt=yt+1,or=S[xt];if(0>l(Pl,P))xt<J&&0>l(or,Pl)?(S[G]=or,S[xt]=P,G=xt):(S[G]=Pl,S[yt]=P,G=yt);else if(xt<J&&0>l(or,P))S[G]=or,S[xt]=P,G=xt;else break e}}return _}function l(S,_){var P=S.sortIndex-_.sortIndex;return P!==0?P:S.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],d=[],g=1,h=null,m=3,k=!1,x=!1,w=!1,D=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(S){for(var _=n(d);_!==null;){if(_.callback===null)r(d);else if(_.startTime<=S)r(d),_.sortIndex=_.expirationTime,t(c,_);else break;_=n(d)}}function v(S){if(w=!1,p(S),!x)if(n(c)!==null)x=!0,El(j);else{var _=n(d);_!==null&&_l(v,_.startTime-S)}}function j(S,_){x=!1,w&&(w=!1,f(z),z=-1),k=!0;var P=m;try{for(p(_),h=n(c);h!==null&&(!(h.expirationTime>_)||S&&!_e());){var G=h.callback;if(typeof G=="function"){h.callback=null,m=h.priorityLevel;var J=G(h.expirationTime<=_);_=e.unstable_now(),typeof J=="function"?h.callback=J:h===n(c)&&r(c),p(_)}else r(c);h=n(c)}if(h!==null)var ar=!0;else{var yt=n(d);yt!==null&&_l(v,yt.startTime-_),ar=!1}return ar}finally{h=null,m=P,k=!1}}var b=!1,C=null,z=-1,Q=5,M=-1;function _e(){return!(e.unstable_now()-M<Q)}function dn(){if(C!==null){var S=e.unstable_now();M=S;var _=!0;try{_=C(!0,S)}finally{_?fn():(b=!1,C=null)}}else b=!1}var fn;if(typeof u=="function")fn=function(){u(dn)};else if(typeof MessageChannel<"u"){var to=new MessageChannel,jd=to.port2;to.port1.onmessage=dn,fn=function(){jd.postMessage(null)}}else fn=function(){D(dn,0)};function El(S){C=S,b||(b=!0,fn())}function _l(S,_){z=D(function(){S(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){x||k||(x=!0,El(j))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(S){switch(m){case 1:case 2:case 3:var _=3;break;default:_=m}var P=m;m=_;try{return S()}finally{m=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,_){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var P=m;m=S;try{return _()}finally{m=P}},e.unstable_scheduleCallback=function(S,_,P){var G=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?G+P:G):P=G,S){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=P+J,S={id:g++,callback:_,priorityLevel:S,startTime:P,expirationTime:J,sortIndex:-1},P>G?(S.sortIndex=P,t(d,S),n(c)===null&&S===n(d)&&(w?(f(z),z=-1):w=!0,_l(v,P-G))):(S.sortIndex=J,t(c,S),x||k||(x=!0,El(j))),S},e.unstable_shouldYield=_e,e.unstable_wrapCallback=function(S){var _=m;return function(){var P=m;m=_;try{return S.apply(this,arguments)}finally{m=P}}}})(Ps);_s.exports=Ps;var Wd=_s.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qd=I,ke=Wd;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rs=new Set,In={};function Dt(e,t){en(e,t),en(e+"Capture",t)}function en(e,t){for(In[e]=t,e=0;e<t.length;e++)Rs.add(t[e])}var Ge=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ai=Object.prototype.hasOwnProperty,Gd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,io={},ao={};function Kd(e){return ai.call(ao,e)?!0:ai.call(io,e)?!1:Gd.test(e)?ao[e]=!0:(io[e]=!0,!1)}function Yd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Xd(e,t,n,r){if(t===null||typeof t>"u"||Yd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var sa=/[\-:]([a-z])/g;function ca(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(sa,ca);re[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(sa,ca);re[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(sa,ca);re[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function ua(e,t,n,r){var l=re.hasOwnProperty(t)?re[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Xd(t,n,l,r)&&(n=null),r||l===null?Kd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var qe=Qd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,cr=Symbol.for("react.element"),It=Symbol.for("react.portal"),At=Symbol.for("react.fragment"),da=Symbol.for("react.strict_mode"),oi=Symbol.for("react.profiler"),Ms=Symbol.for("react.provider"),Ds=Symbol.for("react.context"),fa=Symbol.for("react.forward_ref"),si=Symbol.for("react.suspense"),ci=Symbol.for("react.suspense_list"),pa=Symbol.for("react.memo"),Ze=Symbol.for("react.lazy"),Ls=Symbol.for("react.offscreen"),oo=Symbol.iterator;function pn(e){return e===null||typeof e!="object"?null:(e=oo&&e[oo]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Ml;function wn(e){if(Ml===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ml=t&&t[1]||""}return`
`+Ml+e}var Dl=!1;function Ll(e,t){if(!e||Dl)return"";Dl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,s=i.length-1;1<=o&&0<=s&&l[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||l[o]!==i[s]){var c=`
`+l[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=s);break}}}finally{Dl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?wn(e):""}function qd(e){switch(e.tag){case 5:return wn(e.type);case 16:return wn("Lazy");case 13:return wn("Suspense");case 19:return wn("SuspenseList");case 0:case 2:case 15:return e=Ll(e.type,!1),e;case 11:return e=Ll(e.type.render,!1),e;case 1:return e=Ll(e.type,!0),e;default:return""}}function ui(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case At:return"Fragment";case It:return"Portal";case oi:return"Profiler";case da:return"StrictMode";case si:return"Suspense";case ci:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ds:return(e.displayName||"Context")+".Consumer";case Ms:return(e._context.displayName||"Context")+".Provider";case fa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pa:return t=e.displayName||null,t!==null?t:ui(e.type)||"Memo";case Ze:t=e._payload,e=e._init;try{return ui(e(t))}catch{}}return null}function Jd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ui(t);case 8:return t===da?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ts(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zd(e){var t=Ts(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ur(e){e._valueTracker||(e._valueTracker=Zd(e))}function Is(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ts(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ar(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function di(e,t){var n=t.checked;return V({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function so(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=pt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function As(e,t){t=t.checked,t!=null&&ua(e,"checked",t,!1)}function fi(e,t){As(e,t);var n=pt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?pi(e,t.type,n):t.hasOwnProperty("defaultValue")&&pi(e,t.type,pt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function co(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function pi(e,t,n){(t!=="number"||Ar(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var jn=Array.isArray;function Kt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+pt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function mi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return V({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function uo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(jn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pt(n)}}function Fs(e,t){var n=pt(t.value),r=pt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function fo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Os(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Os(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var dr,$s=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(dr=dr||document.createElement("div"),dr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=dr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function An(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var zn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ef=["Webkit","ms","Moz","O"];Object.keys(zn).forEach(function(e){ef.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),zn[t]=zn[e]})});function Bs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||zn.hasOwnProperty(e)&&zn[e]?(""+t).trim():t+"px"}function Hs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Bs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var tf=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gi(e,t){if(t){if(tf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function vi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yi=null;function ma(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xi=null,Yt=null,Xt=null;function po(e){if(e=rr(e)){if(typeof xi!="function")throw Error(y(280));var t=e.stateNode;t&&(t=hl(t),xi(e.stateNode,e.type,t))}}function Us(e){Yt?Xt?Xt.push(e):Xt=[e]:Yt=e}function Vs(){if(Yt){var e=Yt,t=Xt;if(Xt=Yt=null,po(e),t)for(e=0;e<t.length;e++)po(t[e])}}function Ws(e,t){return e(t)}function Qs(){}var Tl=!1;function Gs(e,t,n){if(Tl)return e(t,n);Tl=!0;try{return Ws(e,t,n)}finally{Tl=!1,(Yt!==null||Xt!==null)&&(Qs(),Vs())}}function Fn(e,t){var n=e.stateNode;if(n===null)return null;var r=hl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var ki=!1;if(Ge)try{var mn={};Object.defineProperty(mn,"passive",{get:function(){ki=!0}}),window.addEventListener("test",mn,mn),window.removeEventListener("test",mn,mn)}catch{ki=!1}function nf(e,t,n,r,l,i,o,s,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(g){this.onError(g)}}var En=!1,Fr=null,Or=!1,wi=null,rf={onError:function(e){En=!0,Fr=e}};function lf(e,t,n,r,l,i,o,s,c){En=!1,Fr=null,nf.apply(rf,arguments)}function af(e,t,n,r,l,i,o,s,c){if(lf.apply(this,arguments),En){if(En){var d=Fr;En=!1,Fr=null}else throw Error(y(198));Or||(Or=!0,wi=d)}}function Lt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ks(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function mo(e){if(Lt(e)!==e)throw Error(y(188))}function of(e){var t=e.alternate;if(!t){if(t=Lt(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return mo(l),e;if(i===r)return mo(l),t;i=i.sibling}throw Error(y(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function Ys(e){return e=of(e),e!==null?Xs(e):null}function Xs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Xs(e);if(t!==null)return t;e=e.sibling}return null}var qs=ke.unstable_scheduleCallback,ho=ke.unstable_cancelCallback,sf=ke.unstable_shouldYield,cf=ke.unstable_requestPaint,K=ke.unstable_now,uf=ke.unstable_getCurrentPriorityLevel,ha=ke.unstable_ImmediatePriority,Js=ke.unstable_UserBlockingPriority,$r=ke.unstable_NormalPriority,df=ke.unstable_LowPriority,Zs=ke.unstable_IdlePriority,dl=null,$e=null;function ff(e){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(dl,e,void 0,(e.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:hf,pf=Math.log,mf=Math.LN2;function hf(e){return e>>>=0,e===0?32:31-(pf(e)/mf|0)|0}var fr=64,pr=4194304;function Nn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Br(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~l;s!==0?r=Nn(s):(i&=o,i!==0&&(r=Nn(i)))}else o=n&~l,o!==0?r=Nn(o):i!==0&&(r=Nn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Le(t),l=1<<n,r|=e[n],t&=~l;return r}function gf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Le(i),s=1<<o,c=l[o];c===-1?(!(s&n)||s&r)&&(l[o]=gf(s,t)):c<=t&&(e.expiredLanes|=s),i&=~s}}function ji(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ec(){var e=fr;return fr<<=1,!(fr&4194240)&&(fr=64),e}function Il(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Le(t),e[t]=n}function yf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Le(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function ga(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Le(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var A=0;function tc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var nc,va,rc,lc,ic,Ni=!1,mr=[],it=null,at=null,ot=null,On=new Map,$n=new Map,tt=[],xf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function go(e,t){switch(e){case"focusin":case"focusout":it=null;break;case"dragenter":case"dragleave":at=null;break;case"mouseover":case"mouseout":ot=null;break;case"pointerover":case"pointerout":On.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$n.delete(t.pointerId)}}function hn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=rr(t),t!==null&&va(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function kf(e,t,n,r,l){switch(t){case"focusin":return it=hn(it,e,t,n,r,l),!0;case"dragenter":return at=hn(at,e,t,n,r,l),!0;case"mouseover":return ot=hn(ot,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return On.set(i,hn(On.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,$n.set(i,hn($n.get(i)||null,e,t,n,r,l)),!0}return!1}function ac(e){var t=Nt(e.target);if(t!==null){var n=Lt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ks(n),t!==null){e.blockedOn=t,ic(e.priority,function(){rc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Si(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);yi=r,n.target.dispatchEvent(r),yi=null}else return t=rr(n),t!==null&&va(t),e.blockedOn=n,!1;t.shift()}return!0}function vo(e,t,n){zr(e)&&n.delete(t)}function wf(){Ni=!1,it!==null&&zr(it)&&(it=null),at!==null&&zr(at)&&(at=null),ot!==null&&zr(ot)&&(ot=null),On.forEach(vo),$n.forEach(vo)}function gn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ni||(Ni=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,wf)))}function Bn(e){function t(l){return gn(l,e)}if(0<mr.length){gn(mr[0],e);for(var n=1;n<mr.length;n++){var r=mr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(it!==null&&gn(it,e),at!==null&&gn(at,e),ot!==null&&gn(ot,e),On.forEach(t),$n.forEach(t),n=0;n<tt.length;n++)r=tt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tt.length&&(n=tt[0],n.blockedOn===null);)ac(n),n.blockedOn===null&&tt.shift()}var qt=qe.ReactCurrentBatchConfig,Hr=!0;function jf(e,t,n,r){var l=A,i=qt.transition;qt.transition=null;try{A=1,ya(e,t,n,r)}finally{A=l,qt.transition=i}}function Nf(e,t,n,r){var l=A,i=qt.transition;qt.transition=null;try{A=4,ya(e,t,n,r)}finally{A=l,qt.transition=i}}function ya(e,t,n,r){if(Hr){var l=Si(e,t,n,r);if(l===null)Ql(e,t,r,Ur,n),go(e,r);else if(kf(l,e,t,n,r))r.stopPropagation();else if(go(e,r),t&4&&-1<xf.indexOf(e)){for(;l!==null;){var i=rr(l);if(i!==null&&nc(i),i=Si(e,t,n,r),i===null&&Ql(e,t,r,Ur,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Ql(e,t,r,null,n)}}var Ur=null;function Si(e,t,n,r){if(Ur=null,e=ma(r),e=Nt(e),e!==null)if(t=Lt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ks(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ur=e,null}function oc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uf()){case ha:return 1;case Js:return 4;case $r:case df:return 16;case Zs:return 536870912;default:return 16}default:return 16}}var rt=null,xa=null,Er=null;function sc(){if(Er)return Er;var e,t=xa,n=t.length,r,l="value"in rt?rt.value:rt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Er=l.slice(e,1<r?1-r:void 0)}function _r(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hr(){return!0}function yo(){return!1}function je(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?hr:yo,this.isPropagationStopped=yo,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hr)},persist:function(){},isPersistent:hr}),t}var cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ka=je(cn),nr=V({},cn,{view:0,detail:0}),Sf=je(nr),Al,Fl,vn,fl=V({},nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vn&&(vn&&e.type==="mousemove"?(Al=e.screenX-vn.screenX,Fl=e.screenY-vn.screenY):Fl=Al=0,vn=e),Al)},movementY:function(e){return"movementY"in e?e.movementY:Fl}}),xo=je(fl),bf=V({},fl,{dataTransfer:0}),Cf=je(bf),zf=V({},nr,{relatedTarget:0}),Ol=je(zf),Ef=V({},cn,{animationName:0,elapsedTime:0,pseudoElement:0}),_f=je(Ef),Pf=V({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rf=je(Pf),Mf=V({},cn,{data:0}),ko=je(Mf),Df={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function If(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Tf[e])?!!t[e]:!1}function wa(){return If}var Af=V({},nr,{key:function(e){if(e.key){var t=Df[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_r(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wa,charCode:function(e){return e.type==="keypress"?_r(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_r(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ff=je(Af),Of=V({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wo=je(Of),$f=V({},nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wa}),Bf=je($f),Hf=V({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uf=je(Hf),Vf=V({},fl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wf=je(Vf),Qf=[9,13,27,32],ja=Ge&&"CompositionEvent"in window,_n=null;Ge&&"documentMode"in document&&(_n=document.documentMode);var Gf=Ge&&"TextEvent"in window&&!_n,cc=Ge&&(!ja||_n&&8<_n&&11>=_n),jo=" ",No=!1;function uc(e,t){switch(e){case"keyup":return Qf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ft=!1;function Kf(e,t){switch(e){case"compositionend":return dc(t);case"keypress":return t.which!==32?null:(No=!0,jo);case"textInput":return e=t.data,e===jo&&No?null:e;default:return null}}function Yf(e,t){if(Ft)return e==="compositionend"||!ja&&uc(e,t)?(e=sc(),Er=xa=rt=null,Ft=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cc&&t.locale!=="ko"?null:t.data;default:return null}}var Xf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function So(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Xf[e.type]:t==="textarea"}function fc(e,t,n,r){Us(r),t=Vr(t,"onChange"),0<t.length&&(n=new ka("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Pn=null,Hn=null;function qf(e){Nc(e,0)}function pl(e){var t=Bt(e);if(Is(t))return e}function Jf(e,t){if(e==="change")return t}var pc=!1;if(Ge){var $l;if(Ge){var Bl="oninput"in document;if(!Bl){var bo=document.createElement("div");bo.setAttribute("oninput","return;"),Bl=typeof bo.oninput=="function"}$l=Bl}else $l=!1;pc=$l&&(!document.documentMode||9<document.documentMode)}function Co(){Pn&&(Pn.detachEvent("onpropertychange",mc),Hn=Pn=null)}function mc(e){if(e.propertyName==="value"&&pl(Hn)){var t=[];fc(t,Hn,e,ma(e)),Gs(qf,t)}}function Zf(e,t,n){e==="focusin"?(Co(),Pn=t,Hn=n,Pn.attachEvent("onpropertychange",mc)):e==="focusout"&&Co()}function ep(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pl(Hn)}function tp(e,t){if(e==="click")return pl(t)}function np(e,t){if(e==="input"||e==="change")return pl(t)}function rp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ie=typeof Object.is=="function"?Object.is:rp;function Un(e,t){if(Ie(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!ai.call(t,l)||!Ie(e[l],t[l]))return!1}return!0}function zo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Eo(e,t){var n=zo(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zo(n)}}function hc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gc(){for(var e=window,t=Ar();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ar(e.document)}return t}function Na(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function lp(e){var t=gc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&hc(n.ownerDocument.documentElement,n)){if(r!==null&&Na(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Eo(n,i);var o=Eo(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ip=Ge&&"documentMode"in document&&11>=document.documentMode,Ot=null,bi=null,Rn=null,Ci=!1;function _o(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ci||Ot==null||Ot!==Ar(r)||(r=Ot,"selectionStart"in r&&Na(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rn&&Un(Rn,r)||(Rn=r,r=Vr(bi,"onSelect"),0<r.length&&(t=new ka("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ot)))}function gr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var $t={animationend:gr("Animation","AnimationEnd"),animationiteration:gr("Animation","AnimationIteration"),animationstart:gr("Animation","AnimationStart"),transitionend:gr("Transition","TransitionEnd")},Hl={},vc={};Ge&&(vc=document.createElement("div").style,"AnimationEvent"in window||(delete $t.animationend.animation,delete $t.animationiteration.animation,delete $t.animationstart.animation),"TransitionEvent"in window||delete $t.transitionend.transition);function ml(e){if(Hl[e])return Hl[e];if(!$t[e])return e;var t=$t[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in vc)return Hl[e]=t[n];return e}var yc=ml("animationend"),xc=ml("animationiteration"),kc=ml("animationstart"),wc=ml("transitionend"),jc=new Map,Po="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ht(e,t){jc.set(e,t),Dt(t,[e])}for(var Ul=0;Ul<Po.length;Ul++){var Vl=Po[Ul],ap=Vl.toLowerCase(),op=Vl[0].toUpperCase()+Vl.slice(1);ht(ap,"on"+op)}ht(yc,"onAnimationEnd");ht(xc,"onAnimationIteration");ht(kc,"onAnimationStart");ht("dblclick","onDoubleClick");ht("focusin","onFocus");ht("focusout","onBlur");ht(wc,"onTransitionEnd");en("onMouseEnter",["mouseout","mouseover"]);en("onMouseLeave",["mouseout","mouseover"]);en("onPointerEnter",["pointerout","pointerover"]);en("onPointerLeave",["pointerout","pointerover"]);Dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sn));function Ro(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,af(r,t,void 0,e),e.currentTarget=null}function Nc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,d=s.currentTarget;if(s=s.listener,c!==i&&l.isPropagationStopped())break e;Ro(l,s,d),i=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,d=s.currentTarget,s=s.listener,c!==i&&l.isPropagationStopped())break e;Ro(l,s,d),i=c}}}if(Or)throw e=wi,Or=!1,wi=null,e}function O(e,t){var n=t[Ri];n===void 0&&(n=t[Ri]=new Set);var r=e+"__bubble";n.has(r)||(Sc(t,e,2,!1),n.add(r))}function Wl(e,t,n){var r=0;t&&(r|=4),Sc(n,e,r,t)}var vr="_reactListening"+Math.random().toString(36).slice(2);function Vn(e){if(!e[vr]){e[vr]=!0,Rs.forEach(function(n){n!=="selectionchange"&&(sp.has(n)||Wl(n,!1,e),Wl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vr]||(t[vr]=!0,Wl("selectionchange",!1,t))}}function Sc(e,t,n,r){switch(oc(t)){case 1:var l=jf;break;case 4:l=Nf;break;default:l=ya}n=l.bind(null,t,n,e),l=void 0,!ki||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ql(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===l||c.nodeType===8&&c.parentNode===l))return;o=o.return}for(;s!==null;){if(o=Nt(s),o===null)return;if(c=o.tag,c===5||c===6){r=i=o;continue e}s=s.parentNode}}r=r.return}Gs(function(){var d=i,g=ma(n),h=[];e:{var m=jc.get(e);if(m!==void 0){var k=ka,x=e;switch(e){case"keypress":if(_r(n)===0)break e;case"keydown":case"keyup":k=Ff;break;case"focusin":x="focus",k=Ol;break;case"focusout":x="blur",k=Ol;break;case"beforeblur":case"afterblur":k=Ol;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=xo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Cf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Bf;break;case yc:case xc:case kc:k=_f;break;case wc:k=Uf;break;case"scroll":k=Sf;break;case"wheel":k=Wf;break;case"copy":case"cut":case"paste":k=Rf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=wo}var w=(t&4)!==0,D=!w&&e==="scroll",f=w?m!==null?m+"Capture":null:m;w=[];for(var u=d,p;u!==null;){p=u;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=Fn(u,f),v!=null&&w.push(Wn(u,v,p)))),D)break;u=u.return}0<w.length&&(m=new k(m,x,null,n,g),h.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",m&&n!==yi&&(x=n.relatedTarget||n.fromElement)&&(Nt(x)||x[Ke]))break e;if((k||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,k?(x=n.relatedTarget||n.toElement,k=d,x=x?Nt(x):null,x!==null&&(D=Lt(x),x!==D||x.tag!==5&&x.tag!==6)&&(x=null)):(k=null,x=d),k!==x)){if(w=xo,v="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(w=wo,v="onPointerLeave",f="onPointerEnter",u="pointer"),D=k==null?m:Bt(k),p=x==null?m:Bt(x),m=new w(v,u+"leave",k,n,g),m.target=D,m.relatedTarget=p,v=null,Nt(g)===d&&(w=new w(f,u+"enter",x,n,g),w.target=p,w.relatedTarget=D,v=w),D=v,k&&x)t:{for(w=k,f=x,u=0,p=w;p;p=Tt(p))u++;for(p=0,v=f;v;v=Tt(v))p++;for(;0<u-p;)w=Tt(w),u--;for(;0<p-u;)f=Tt(f),p--;for(;u--;){if(w===f||f!==null&&w===f.alternate)break t;w=Tt(w),f=Tt(f)}w=null}else w=null;k!==null&&Mo(h,m,k,w,!1),x!==null&&D!==null&&Mo(h,D,x,w,!0)}}e:{if(m=d?Bt(d):window,k=m.nodeName&&m.nodeName.toLowerCase(),k==="select"||k==="input"&&m.type==="file")var j=Jf;else if(So(m))if(pc)j=np;else{j=ep;var b=Zf}else(k=m.nodeName)&&k.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=tp);if(j&&(j=j(e,d))){fc(h,j,n,g);break e}b&&b(e,m,d),e==="focusout"&&(b=m._wrapperState)&&b.controlled&&m.type==="number"&&pi(m,"number",m.value)}switch(b=d?Bt(d):window,e){case"focusin":(So(b)||b.contentEditable==="true")&&(Ot=b,bi=d,Rn=null);break;case"focusout":Rn=bi=Ot=null;break;case"mousedown":Ci=!0;break;case"contextmenu":case"mouseup":case"dragend":Ci=!1,_o(h,n,g);break;case"selectionchange":if(ip)break;case"keydown":case"keyup":_o(h,n,g)}var C;if(ja)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Ft?uc(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(cc&&n.locale!=="ko"&&(Ft||z!=="onCompositionStart"?z==="onCompositionEnd"&&Ft&&(C=sc()):(rt=g,xa="value"in rt?rt.value:rt.textContent,Ft=!0)),b=Vr(d,z),0<b.length&&(z=new ko(z,e,null,n,g),h.push({event:z,listeners:b}),C?z.data=C:(C=dc(n),C!==null&&(z.data=C)))),(C=Gf?Kf(e,n):Yf(e,n))&&(d=Vr(d,"onBeforeInput"),0<d.length&&(g=new ko("onBeforeInput","beforeinput",null,n,g),h.push({event:g,listeners:d}),g.data=C))}Nc(h,t)})}function Wn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Fn(e,n),i!=null&&r.unshift(Wn(e,i,l)),i=Fn(e,t),i!=null&&r.push(Wn(e,i,l))),e=e.return}return r}function Tt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Mo(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,d=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&d!==null&&(s=d,l?(c=Fn(n,i),c!=null&&o.unshift(Wn(n,c,s))):l||(c=Fn(n,i),c!=null&&o.push(Wn(n,c,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var cp=/\r\n?/g,up=/\u0000|\uFFFD/g;function Do(e){return(typeof e=="string"?e:""+e).replace(cp,`
`).replace(up,"")}function yr(e,t,n){if(t=Do(t),Do(e)!==t&&n)throw Error(y(425))}function Wr(){}var zi=null,Ei=null;function _i(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pi=typeof setTimeout=="function"?setTimeout:void 0,dp=typeof clearTimeout=="function"?clearTimeout:void 0,Lo=typeof Promise=="function"?Promise:void 0,fp=typeof queueMicrotask=="function"?queueMicrotask:typeof Lo<"u"?function(e){return Lo.resolve(null).then(e).catch(pp)}:Pi;function pp(e){setTimeout(function(){throw e})}function Gl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Bn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Bn(t)}function st(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function To(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var un=Math.random().toString(36).slice(2),Oe="__reactFiber$"+un,Qn="__reactProps$"+un,Ke="__reactContainer$"+un,Ri="__reactEvents$"+un,mp="__reactListeners$"+un,hp="__reactHandles$"+un;function Nt(e){var t=e[Oe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ke]||n[Oe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=To(e);e!==null;){if(n=e[Oe])return n;e=To(e)}return t}e=n,n=e.parentNode}return null}function rr(e){return e=e[Oe]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Bt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function hl(e){return e[Qn]||null}var Mi=[],Ht=-1;function gt(e){return{current:e}}function $(e){0>Ht||(e.current=Mi[Ht],Mi[Ht]=null,Ht--)}function F(e,t){Ht++,Mi[Ht]=e.current,e.current=t}var mt={},oe=gt(mt),me=gt(!1),Et=mt;function tn(e,t){var n=e.type.contextTypes;if(!n)return mt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function he(e){return e=e.childContextTypes,e!=null}function Qr(){$(me),$(oe)}function Io(e,t,n){if(oe.current!==mt)throw Error(y(168));F(oe,t),F(me,n)}function bc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(y(108,Jd(e)||"Unknown",l));return V({},n,r)}function Gr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mt,Et=oe.current,F(oe,e),F(me,me.current),!0}function Ao(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=bc(e,t,Et),r.__reactInternalMemoizedMergedChildContext=e,$(me),$(oe),F(oe,e)):$(me),F(me,n)}var Ue=null,gl=!1,Kl=!1;function Cc(e){Ue===null?Ue=[e]:Ue.push(e)}function gp(e){gl=!0,Cc(e)}function vt(){if(!Kl&&Ue!==null){Kl=!0;var e=0,t=A;try{var n=Ue;for(A=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ue=null,gl=!1}catch(l){throw Ue!==null&&(Ue=Ue.slice(e+1)),qs(ha,vt),l}finally{A=t,Kl=!1}}return null}var Ut=[],Vt=0,Kr=null,Yr=0,Ne=[],Se=0,_t=null,Ve=1,We="";function wt(e,t){Ut[Vt++]=Yr,Ut[Vt++]=Kr,Kr=e,Yr=t}function zc(e,t,n){Ne[Se++]=Ve,Ne[Se++]=We,Ne[Se++]=_t,_t=e;var r=Ve;e=We;var l=32-Le(r)-1;r&=~(1<<l),n+=1;var i=32-Le(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Ve=1<<32-Le(t)+l|n<<l|r,We=i+e}else Ve=1<<i|n<<l|r,We=e}function Sa(e){e.return!==null&&(wt(e,1),zc(e,1,0))}function ba(e){for(;e===Kr;)Kr=Ut[--Vt],Ut[Vt]=null,Yr=Ut[--Vt],Ut[Vt]=null;for(;e===_t;)_t=Ne[--Se],Ne[Se]=null,We=Ne[--Se],Ne[Se]=null,Ve=Ne[--Se],Ne[Se]=null}var xe=null,ye=null,B=!1,De=null;function Ec(e,t){var n=be(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Fo(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xe=e,ye=st(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xe=e,ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=_t!==null?{id:Ve,overflow:We}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=be(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xe=e,ye=null,!0):!1;default:return!1}}function Di(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Li(e){if(B){var t=ye;if(t){var n=t;if(!Fo(e,t)){if(Di(e))throw Error(y(418));t=st(n.nextSibling);var r=xe;t&&Fo(e,t)?Ec(r,n):(e.flags=e.flags&-4097|2,B=!1,xe=e)}}else{if(Di(e))throw Error(y(418));e.flags=e.flags&-4097|2,B=!1,xe=e}}}function Oo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xe=e}function xr(e){if(e!==xe)return!1;if(!B)return Oo(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_i(e.type,e.memoizedProps)),t&&(t=ye)){if(Di(e))throw _c(),Error(y(418));for(;t;)Ec(e,t),t=st(t.nextSibling)}if(Oo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ye=st(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ye=null}}else ye=xe?st(e.stateNode.nextSibling):null;return!0}function _c(){for(var e=ye;e;)e=st(e.nextSibling)}function nn(){ye=xe=null,B=!1}function Ca(e){De===null?De=[e]:De.push(e)}var vp=qe.ReactCurrentBatchConfig;function yn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=l.refs;o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function kr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function $o(e){var t=e._init;return t(e._payload)}function Pc(e){function t(f,u){if(e){var p=f.deletions;p===null?(f.deletions=[u],f.flags|=16):p.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function l(f,u){return f=ft(f,u),f.index=0,f.sibling=null,f}function i(f,u,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<u?(f.flags|=2,u):p):(f.flags|=2,u)):(f.flags|=1048576,u)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,u,p,v){return u===null||u.tag!==6?(u=ti(p,f.mode,v),u.return=f,u):(u=l(u,p),u.return=f,u)}function c(f,u,p,v){var j=p.type;return j===At?g(f,u,p.props.children,v,p.key):u!==null&&(u.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Ze&&$o(j)===u.type)?(v=l(u,p.props),v.ref=yn(f,u,p),v.return=f,v):(v=Ir(p.type,p.key,p.props,null,f.mode,v),v.ref=yn(f,u,p),v.return=f,v)}function d(f,u,p,v){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=ni(p,f.mode,v),u.return=f,u):(u=l(u,p.children||[]),u.return=f,u)}function g(f,u,p,v,j){return u===null||u.tag!==7?(u=zt(p,f.mode,v,j),u.return=f,u):(u=l(u,p),u.return=f,u)}function h(f,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=ti(""+u,f.mode,p),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case cr:return p=Ir(u.type,u.key,u.props,null,f.mode,p),p.ref=yn(f,null,u),p.return=f,p;case It:return u=ni(u,f.mode,p),u.return=f,u;case Ze:var v=u._init;return h(f,v(u._payload),p)}if(jn(u)||pn(u))return u=zt(u,f.mode,p,null),u.return=f,u;kr(f,u)}return null}function m(f,u,p,v){var j=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return j!==null?null:s(f,u,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case cr:return p.key===j?c(f,u,p,v):null;case It:return p.key===j?d(f,u,p,v):null;case Ze:return j=p._init,m(f,u,j(p._payload),v)}if(jn(p)||pn(p))return j!==null?null:g(f,u,p,v,null);kr(f,p)}return null}function k(f,u,p,v,j){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,s(u,f,""+v,j);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case cr:return f=f.get(v.key===null?p:v.key)||null,c(u,f,v,j);case It:return f=f.get(v.key===null?p:v.key)||null,d(u,f,v,j);case Ze:var b=v._init;return k(f,u,p,b(v._payload),j)}if(jn(v)||pn(v))return f=f.get(p)||null,g(u,f,v,j,null);kr(u,v)}return null}function x(f,u,p,v){for(var j=null,b=null,C=u,z=u=0,Q=null;C!==null&&z<p.length;z++){C.index>z?(Q=C,C=null):Q=C.sibling;var M=m(f,C,p[z],v);if(M===null){C===null&&(C=Q);break}e&&C&&M.alternate===null&&t(f,C),u=i(M,u,z),b===null?j=M:b.sibling=M,b=M,C=Q}if(z===p.length)return n(f,C),B&&wt(f,z),j;if(C===null){for(;z<p.length;z++)C=h(f,p[z],v),C!==null&&(u=i(C,u,z),b===null?j=C:b.sibling=C,b=C);return B&&wt(f,z),j}for(C=r(f,C);z<p.length;z++)Q=k(C,f,z,p[z],v),Q!==null&&(e&&Q.alternate!==null&&C.delete(Q.key===null?z:Q.key),u=i(Q,u,z),b===null?j=Q:b.sibling=Q,b=Q);return e&&C.forEach(function(_e){return t(f,_e)}),B&&wt(f,z),j}function w(f,u,p,v){var j=pn(p);if(typeof j!="function")throw Error(y(150));if(p=j.call(p),p==null)throw Error(y(151));for(var b=j=null,C=u,z=u=0,Q=null,M=p.next();C!==null&&!M.done;z++,M=p.next()){C.index>z?(Q=C,C=null):Q=C.sibling;var _e=m(f,C,M.value,v);if(_e===null){C===null&&(C=Q);break}e&&C&&_e.alternate===null&&t(f,C),u=i(_e,u,z),b===null?j=_e:b.sibling=_e,b=_e,C=Q}if(M.done)return n(f,C),B&&wt(f,z),j;if(C===null){for(;!M.done;z++,M=p.next())M=h(f,M.value,v),M!==null&&(u=i(M,u,z),b===null?j=M:b.sibling=M,b=M);return B&&wt(f,z),j}for(C=r(f,C);!M.done;z++,M=p.next())M=k(C,f,z,M.value,v),M!==null&&(e&&M.alternate!==null&&C.delete(M.key===null?z:M.key),u=i(M,u,z),b===null?j=M:b.sibling=M,b=M);return e&&C.forEach(function(dn){return t(f,dn)}),B&&wt(f,z),j}function D(f,u,p,v){if(typeof p=="object"&&p!==null&&p.type===At&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case cr:e:{for(var j=p.key,b=u;b!==null;){if(b.key===j){if(j=p.type,j===At){if(b.tag===7){n(f,b.sibling),u=l(b,p.props.children),u.return=f,f=u;break e}}else if(b.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Ze&&$o(j)===b.type){n(f,b.sibling),u=l(b,p.props),u.ref=yn(f,b,p),u.return=f,f=u;break e}n(f,b);break}else t(f,b);b=b.sibling}p.type===At?(u=zt(p.props.children,f.mode,v,p.key),u.return=f,f=u):(v=Ir(p.type,p.key,p.props,null,f.mode,v),v.ref=yn(f,u,p),v.return=f,f=v)}return o(f);case It:e:{for(b=p.key;u!==null;){if(u.key===b)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(f,u.sibling),u=l(u,p.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=ni(p,f.mode,v),u.return=f,f=u}return o(f);case Ze:return b=p._init,D(f,u,b(p._payload),v)}if(jn(p))return x(f,u,p,v);if(pn(p))return w(f,u,p,v);kr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(n(f,u.sibling),u=l(u,p),u.return=f,f=u):(n(f,u),u=ti(p,f.mode,v),u.return=f,f=u),o(f)):n(f,u)}return D}var rn=Pc(!0),Rc=Pc(!1),Xr=gt(null),qr=null,Wt=null,za=null;function Ea(){za=Wt=qr=null}function _a(e){var t=Xr.current;$(Xr),e._currentValue=t}function Ti(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Jt(e,t){qr=e,za=Wt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function ze(e){var t=e._currentValue;if(za!==e)if(e={context:e,memoizedValue:t,next:null},Wt===null){if(qr===null)throw Error(y(308));Wt=e,qr.dependencies={lanes:0,firstContext:e}}else Wt=Wt.next=e;return t}var St=null;function Pa(e){St===null?St=[e]:St.push(e)}function Mc(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Pa(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ye(e,r)}function Ye(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var et=!1;function Ra(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ct(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ye(e,n)}return l=r.interleaved,l===null?(t.next=t,Pa(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ye(e,n)}function Pr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ga(e,n)}}function Bo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Jr(e,t,n,r){var l=e.updateQueue;et=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var c=s,d=c.next;c.next=null,o===null?i=d:o.next=d,o=c;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==o&&(s===null?g.firstBaseUpdate=d:s.next=d,g.lastBaseUpdate=c))}if(i!==null){var h=l.baseState;o=0,g=d=c=null,s=i;do{var m=s.lane,k=s.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:k,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,w=s;switch(m=t,k=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){h=x.call(k,h,m);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,m=typeof x=="function"?x.call(k,h,m):x,m==null)break e;h=V({},h,m);break e;case 2:et=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[s]:m.push(s))}else k={eventTime:k,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(d=g=k,c=h):g=g.next=k,o|=m;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;m=s,s=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(g===null&&(c=h),l.baseState=c,l.firstBaseUpdate=d,l.lastBaseUpdate=g,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Rt|=o,e.lanes=o,e.memoizedState=h}}function Ho(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(y(191,l));l.call(r)}}}var lr={},Be=gt(lr),Gn=gt(lr),Kn=gt(lr);function bt(e){if(e===lr)throw Error(y(174));return e}function Ma(e,t){switch(F(Kn,t),F(Gn,e),F(Be,lr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:hi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=hi(t,e)}$(Be),F(Be,t)}function ln(){$(Be),$(Gn),$(Kn)}function Lc(e){bt(Kn.current);var t=bt(Be.current),n=hi(t,e.type);t!==n&&(F(Gn,e),F(Be,n))}function Da(e){Gn.current===e&&($(Be),$(Gn))}var H=gt(0);function Zr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Yl=[];function La(){for(var e=0;e<Yl.length;e++)Yl[e]._workInProgressVersionPrimary=null;Yl.length=0}var Rr=qe.ReactCurrentDispatcher,Xl=qe.ReactCurrentBatchConfig,Pt=0,U=null,X=null,Z=null,el=!1,Mn=!1,Yn=0,yp=0;function le(){throw Error(y(321))}function Ta(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ie(e[n],t[n]))return!1;return!0}function Ia(e,t,n,r,l,i){if(Pt=i,U=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Rr.current=e===null||e.memoizedState===null?jp:Np,e=n(r,l),Mn){i=0;do{if(Mn=!1,Yn=0,25<=i)throw Error(y(301));i+=1,Z=X=null,t.updateQueue=null,Rr.current=Sp,e=n(r,l)}while(Mn)}if(Rr.current=tl,t=X!==null&&X.next!==null,Pt=0,Z=X=U=null,el=!1,t)throw Error(y(300));return e}function Aa(){var e=Yn!==0;return Yn=0,e}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?U.memoizedState=Z=e:Z=Z.next=e,Z}function Ee(){if(X===null){var e=U.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=Z===null?U.memoizedState:Z.next;if(t!==null)Z=t,X=e;else{if(e===null)throw Error(y(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},Z===null?U.memoizedState=Z=e:Z=Z.next=e}return Z}function Xn(e,t){return typeof t=="function"?t(e):t}function ql(e){var t=Ee(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=X,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=o=null,c=null,d=i;do{var g=d.lane;if((Pt&g)===g)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(s=c=h,o=r):c=c.next=h,U.lanes|=g,Rt|=g}d=d.next}while(d!==null&&d!==i);c===null?o=r:c.next=s,Ie(r,t.memoizedState)||(pe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,U.lanes|=i,Rt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Jl(e){var t=Ee(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Ie(i,t.memoizedState)||(pe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Tc(){}function Ic(e,t){var n=U,r=Ee(),l=t(),i=!Ie(r.memoizedState,l);if(i&&(r.memoizedState=l,pe=!0),r=r.queue,Fa(Oc.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,qn(9,Fc.bind(null,n,r,l,t),void 0,null),ee===null)throw Error(y(349));Pt&30||Ac(n,t,l)}return l}function Ac(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Fc(e,t,n,r){t.value=n,t.getSnapshot=r,$c(t)&&Bc(e)}function Oc(e,t,n){return n(function(){$c(t)&&Bc(e)})}function $c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ie(e,n)}catch{return!0}}function Bc(e){var t=Ye(e,1);t!==null&&Te(t,e,1,-1)}function Uo(e){var t=Fe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xn,lastRenderedState:e},t.queue=e,e=e.dispatch=wp.bind(null,U,e),[t.memoizedState,e]}function qn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Hc(){return Ee().memoizedState}function Mr(e,t,n,r){var l=Fe();U.flags|=e,l.memoizedState=qn(1|t,n,void 0,r===void 0?null:r)}function vl(e,t,n,r){var l=Ee();r=r===void 0?null:r;var i=void 0;if(X!==null){var o=X.memoizedState;if(i=o.destroy,r!==null&&Ta(r,o.deps)){l.memoizedState=qn(t,n,i,r);return}}U.flags|=e,l.memoizedState=qn(1|t,n,i,r)}function Vo(e,t){return Mr(8390656,8,e,t)}function Fa(e,t){return vl(2048,8,e,t)}function Uc(e,t){return vl(4,2,e,t)}function Vc(e,t){return vl(4,4,e,t)}function Wc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qc(e,t,n){return n=n!=null?n.concat([e]):null,vl(4,4,Wc.bind(null,t,e),n)}function Oa(){}function Gc(e,t){var n=Ee();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ta(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Kc(e,t){var n=Ee();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ta(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Yc(e,t,n){return Pt&21?(Ie(n,t)||(n=ec(),U.lanes|=n,Rt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=n)}function xp(e,t){var n=A;A=n!==0&&4>n?n:4,e(!0);var r=Xl.transition;Xl.transition={};try{e(!1),t()}finally{A=n,Xl.transition=r}}function Xc(){return Ee().memoizedState}function kp(e,t,n){var r=dt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qc(e))Jc(t,n);else if(n=Mc(e,t,n,r),n!==null){var l=ce();Te(n,e,r,l),Zc(n,t,r)}}function wp(e,t,n){var r=dt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qc(e))Jc(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,n);if(l.hasEagerState=!0,l.eagerState=s,Ie(s,o)){var c=t.interleaved;c===null?(l.next=l,Pa(t)):(l.next=c.next,c.next=l),t.interleaved=l;return}}catch{}finally{}n=Mc(e,t,l,r),n!==null&&(l=ce(),Te(n,e,r,l),Zc(n,t,r))}}function qc(e){var t=e.alternate;return e===U||t!==null&&t===U}function Jc(e,t){Mn=el=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Zc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ga(e,n)}}var tl={readContext:ze,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},jp={readContext:ze,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:ze,useEffect:Vo,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Mr(4194308,4,Wc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Mr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Mr(4,2,e,t)},useMemo:function(e,t){var n=Fe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Fe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=kp.bind(null,U,e),[r.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:Uo,useDebugValue:Oa,useDeferredValue:function(e){return Fe().memoizedState=e},useTransition:function(){var e=Uo(!1),t=e[0];return e=xp.bind(null,e[1]),Fe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=U,l=Fe();if(B){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),ee===null)throw Error(y(349));Pt&30||Ac(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Vo(Oc.bind(null,r,i,e),[e]),r.flags|=2048,qn(9,Fc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Fe(),t=ee.identifierPrefix;if(B){var n=We,r=Ve;n=(r&~(1<<32-Le(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Yn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=yp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Np={readContext:ze,useCallback:Gc,useContext:ze,useEffect:Fa,useImperativeHandle:Qc,useInsertionEffect:Uc,useLayoutEffect:Vc,useMemo:Kc,useReducer:ql,useRef:Hc,useState:function(){return ql(Xn)},useDebugValue:Oa,useDeferredValue:function(e){var t=Ee();return Yc(t,X.memoizedState,e)},useTransition:function(){var e=ql(Xn)[0],t=Ee().memoizedState;return[e,t]},useMutableSource:Tc,useSyncExternalStore:Ic,useId:Xc,unstable_isNewReconciler:!1},Sp={readContext:ze,useCallback:Gc,useContext:ze,useEffect:Fa,useImperativeHandle:Qc,useInsertionEffect:Uc,useLayoutEffect:Vc,useMemo:Kc,useReducer:Jl,useRef:Hc,useState:function(){return Jl(Xn)},useDebugValue:Oa,useDeferredValue:function(e){var t=Ee();return X===null?t.memoizedState=e:Yc(t,X.memoizedState,e)},useTransition:function(){var e=Jl(Xn)[0],t=Ee().memoizedState;return[e,t]},useMutableSource:Tc,useSyncExternalStore:Ic,useId:Xc,unstable_isNewReconciler:!1};function Re(e,t){if(e&&e.defaultProps){t=V({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ii(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:V({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var yl={isMounted:function(e){return(e=e._reactInternals)?Lt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ce(),l=dt(e),i=Qe(r,l);i.payload=t,n!=null&&(i.callback=n),t=ct(e,i,l),t!==null&&(Te(t,e,l,r),Pr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ce(),l=dt(e),i=Qe(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=ct(e,i,l),t!==null&&(Te(t,e,l,r),Pr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),r=dt(e),l=Qe(n,r);l.tag=2,t!=null&&(l.callback=t),t=ct(e,l,r),t!==null&&(Te(t,e,r,n),Pr(t,e,r))}};function Wo(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Un(n,r)||!Un(l,i):!0}function eu(e,t,n){var r=!1,l=mt,i=t.contextType;return typeof i=="object"&&i!==null?i=ze(i):(l=he(t)?Et:oe.current,r=t.contextTypes,i=(r=r!=null)?tn(e,l):mt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=yl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Qo(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&yl.enqueueReplaceState(t,t.state,null)}function Ai(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Ra(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=ze(i):(i=he(t)?Et:oe.current,l.context=tn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ii(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&yl.enqueueReplaceState(l,l.state,null),Jr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function an(e,t){try{var n="",r=t;do n+=qd(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Zl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Fi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var bp=typeof WeakMap=="function"?WeakMap:Map;function tu(e,t,n){n=Qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){rl||(rl=!0,Ki=r),Fi(e,t)},n}function nu(e,t,n){n=Qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Fi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Fi(e,t),typeof r!="function"&&(ut===null?ut=new Set([this]):ut.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Go(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new bp;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Op.bind(null,e,t,n),t.then(e,e))}function Ko(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Yo(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qe(-1,1),t.tag=2,ct(n,t,1))),n.lanes|=1),e)}var Cp=qe.ReactCurrentOwner,pe=!1;function se(e,t,n,r){t.child=e===null?Rc(t,null,n,r):rn(t,e.child,n,r)}function Xo(e,t,n,r,l){n=n.render;var i=t.ref;return Jt(t,l),r=Ia(e,t,n,r,i,l),n=Aa(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xe(e,t,l)):(B&&n&&Sa(t),t.flags|=1,se(e,t,r,l),t.child)}function qo(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Ga(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,ru(e,t,i,r,l)):(e=Ir(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Un,n(o,r)&&e.ref===t.ref)return Xe(e,t,l)}return t.flags|=1,e=ft(i,r),e.ref=t.ref,e.return=t,t.child=e}function ru(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Un(i,r)&&e.ref===t.ref)if(pe=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,Xe(e,t,l)}return Oi(e,t,n,r,l)}function lu(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(Gt,ve),ve|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,F(Gt,ve),ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,F(Gt,ve),ve|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,F(Gt,ve),ve|=r;return se(e,t,l,n),t.child}function iu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Oi(e,t,n,r,l){var i=he(n)?Et:oe.current;return i=tn(t,i),Jt(t,l),n=Ia(e,t,n,r,i,l),r=Aa(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xe(e,t,l)):(B&&r&&Sa(t),t.flags|=1,se(e,t,n,l),t.child)}function Jo(e,t,n,r,l){if(he(n)){var i=!0;Gr(t)}else i=!1;if(Jt(t,l),t.stateNode===null)Dr(e,t),eu(t,n,r),Ai(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=ze(d):(d=he(n)?Et:oe.current,d=tn(t,d));var g=n.getDerivedStateFromProps,h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||c!==d)&&Qo(t,o,r,d),et=!1;var m=t.memoizedState;o.state=m,Jr(t,r,o,l),c=t.memoizedState,s!==r||m!==c||me.current||et?(typeof g=="function"&&(Ii(t,n,g,r),c=t.memoizedState),(s=et||Wo(t,n,s,r,m,c,d))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=d,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Dc(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Re(t.type,s),o.props=d,h=t.pendingProps,m=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=ze(c):(c=he(n)?Et:oe.current,c=tn(t,c));var k=n.getDerivedStateFromProps;(g=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==h||m!==c)&&Qo(t,o,r,c),et=!1,m=t.memoizedState,o.state=m,Jr(t,r,o,l);var x=t.memoizedState;s!==h||m!==x||me.current||et?(typeof k=="function"&&(Ii(t,n,k,r),x=t.memoizedState),(d=et||Wo(t,n,d,r,m,x,c)||!1)?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),o.props=r,o.state=x,o.context=c,r=d):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return $i(e,t,n,r,i,l)}function $i(e,t,n,r,l,i){iu(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&Ao(t,n,!1),Xe(e,t,i);r=t.stateNode,Cp.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=rn(t,e.child,null,i),t.child=rn(t,null,s,i)):se(e,t,s,i),t.memoizedState=r.state,l&&Ao(t,n,!0),t.child}function au(e){var t=e.stateNode;t.pendingContext?Io(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Io(e,t.context,!1),Ma(e,t.containerInfo)}function Zo(e,t,n,r,l){return nn(),Ca(l),t.flags|=256,se(e,t,n,r),t.child}var Bi={dehydrated:null,treeContext:null,retryLane:0};function Hi(e){return{baseLanes:e,cachePool:null,transitions:null}}function ou(e,t,n){var r=t.pendingProps,l=H.current,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),F(H,l&1),e===null)return Li(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=wl(o,r,0,null),e=zt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Hi(n),t.memoizedState=Bi,e):$a(t,o));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return zp(e,t,o,r,s,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,s=l.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=ft(l,c),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=ft(s,i):(i=zt(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Hi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Bi,r}return i=e.child,e=i.sibling,r=ft(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function $a(e,t){return t=wl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wr(e,t,n,r){return r!==null&&Ca(r),rn(t,e.child,null,n),e=$a(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function zp(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Zl(Error(y(422))),wr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=wl({mode:"visible",children:r.children},l,0,null),i=zt(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&rn(t,e.child,null,o),t.child.memoizedState=Hi(o),t.memoizedState=Bi,i);if(!(t.mode&1))return wr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(y(419)),r=Zl(i,r,void 0),wr(e,t,o,r)}if(s=(o&e.childLanes)!==0,pe||s){if(r=ee,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ye(e,l),Te(r,e,l,-1))}return Qa(),r=Zl(Error(y(421))),wr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=$p.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,ye=st(l.nextSibling),xe=t,B=!0,De=null,e!==null&&(Ne[Se++]=Ve,Ne[Se++]=We,Ne[Se++]=_t,Ve=e.id,We=e.overflow,_t=t),t=$a(t,r.children),t.flags|=4096,t)}function es(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ti(e.return,t,n)}function ei(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function su(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(se(e,t,r.children,n),r=H.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&es(e,n,t);else if(e.tag===19)es(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(H,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Zr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ei(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Zr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ei(t,!0,n,null,i);break;case"together":ei(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Dr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=ft(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ft(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ep(e,t,n){switch(t.tag){case 3:au(t),nn();break;case 5:Lc(t);break;case 1:he(t.type)&&Gr(t);break;case 4:Ma(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;F(Xr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(F(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?ou(e,t,n):(F(H,H.current&1),e=Xe(e,t,n),e!==null?e.sibling:null);F(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return su(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),F(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,lu(e,t,n)}return Xe(e,t,n)}var cu,Ui,uu,du;cu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ui=function(){};uu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,bt(Be.current);var i=null;switch(n){case"input":l=di(e,l),r=di(e,r),i=[];break;case"select":l=V({},l,{value:void 0}),r=V({},r,{value:void 0}),i=[];break;case"textarea":l=mi(e,l),r=mi(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Wr)}gi(n,r);var o;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var s=l[d];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(In.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var c=r[d];if(s=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&c!==s&&(c!=null||s!=null))if(d==="style")if(s){for(o in s)!s.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&s[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(i||(i=[]),i.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(i=i||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(In.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&O("scroll",e),i||s===c||(i=[])):(i=i||[]).push(d,c))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};du=function(e,t,n,r){n!==r&&(t.flags|=4)};function xn(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function _p(e,t,n){var r=t.pendingProps;switch(ba(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return he(t.type)&&Qr(),ie(t),null;case 3:return r=t.stateNode,ln(),$(me),$(oe),La(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,De!==null&&(qi(De),De=null))),Ui(e,t),ie(t),null;case 5:Da(t);var l=bt(Kn.current);if(n=t.type,e!==null&&t.stateNode!=null)uu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return ie(t),null}if(e=bt(Be.current),xr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Oe]=t,r[Qn]=i,e=(t.mode&1)!==0,n){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(l=0;l<Sn.length;l++)O(Sn[l],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":so(r,i),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},O("invalid",r);break;case"textarea":uo(r,i),O("invalid",r)}gi(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&yr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&yr(r.textContent,s,e),l=["children",""+s]):In.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&O("scroll",r)}switch(n){case"input":ur(r),co(r,i,!0);break;case"textarea":ur(r),fo(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Wr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Os(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Oe]=t,e[Qn]=r,cu(e,t,!1,!1),t.stateNode=e;e:{switch(o=vi(n,r),n){case"dialog":O("cancel",e),O("close",e),l=r;break;case"iframe":case"object":case"embed":O("load",e),l=r;break;case"video":case"audio":for(l=0;l<Sn.length;l++)O(Sn[l],e);l=r;break;case"source":O("error",e),l=r;break;case"img":case"image":case"link":O("error",e),O("load",e),l=r;break;case"details":O("toggle",e),l=r;break;case"input":so(e,r),l=di(e,r),O("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=V({},r,{value:void 0}),O("invalid",e);break;case"textarea":uo(e,r),l=mi(e,r),O("invalid",e);break;default:l=r}gi(n,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var c=s[i];i==="style"?Hs(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&$s(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&An(e,c):typeof c=="number"&&An(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(In.hasOwnProperty(i)?c!=null&&i==="onScroll"&&O("scroll",e):c!=null&&ua(e,i,c,o))}switch(n){case"input":ur(e),co(e,r,!1);break;case"textarea":ur(e),fo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Kt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Kt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Wr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ie(t),null;case 6:if(e&&t.stateNode!=null)du(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=bt(Kn.current),bt(Be.current),xr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Oe]=t,(i=r.nodeValue!==n)&&(e=xe,e!==null))switch(e.tag){case 3:yr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&yr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Oe]=t,t.stateNode=r}return ie(t),null;case 13:if($(H),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&ye!==null&&t.mode&1&&!(t.flags&128))_c(),nn(),t.flags|=98560,i=!1;else if(i=xr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(y(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(y(317));i[Oe]=t}else nn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),i=!1}else De!==null&&(qi(De),De=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?q===0&&(q=3):Qa())),t.updateQueue!==null&&(t.flags|=4),ie(t),null);case 4:return ln(),Ui(e,t),e===null&&Vn(t.stateNode.containerInfo),ie(t),null;case 10:return _a(t.type._context),ie(t),null;case 17:return he(t.type)&&Qr(),ie(t),null;case 19:if($(H),i=t.memoizedState,i===null)return ie(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)xn(i,!1);else{if(q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Zr(e),o!==null){for(t.flags|=128,xn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return F(H,H.current&1|2),t.child}e=e.sibling}i.tail!==null&&K()>on&&(t.flags|=128,r=!0,xn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Zr(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!B)return ie(t),null}else 2*K()-i.renderingStartTime>on&&n!==1073741824&&(t.flags|=128,r=!0,xn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=K(),t.sibling=null,n=H.current,F(H,r?n&1|2:n&1),t):(ie(t),null);case 22:case 23:return Wa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ve&1073741824&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function Pp(e,t){switch(ba(t),t.tag){case 1:return he(t.type)&&Qr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ln(),$(me),$(oe),La(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Da(t),null;case 13:if($(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));nn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(H),null;case 4:return ln(),null;case 10:return _a(t.type._context),null;case 22:case 23:return Wa(),null;case 24:return null;default:return null}}var jr=!1,ae=!1,Rp=typeof WeakSet=="function"?WeakSet:Set,N=null;function Qt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){W(e,t,r)}else n.current=null}function Vi(e,t,n){try{n()}catch(r){W(e,t,r)}}var ts=!1;function Mp(e,t){if(zi=Hr,e=gc(),Na(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,s=-1,c=-1,d=0,g=0,h=e,m=null;t:for(;;){for(var k;h!==n||l!==0&&h.nodeType!==3||(s=o+l),h!==i||r!==0&&h.nodeType!==3||(c=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(k=h.firstChild)!==null;)m=h,h=k;for(;;){if(h===e)break t;if(m===n&&++d===l&&(s=o),m===i&&++g===r&&(c=o),(k=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=k}n=s===-1||c===-1?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ei={focusedElem:e,selectionRange:n},Hr=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,D=x.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:Re(t.type,w),D);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(v){W(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return x=ts,ts=!1,x}function Dn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Vi(t,n,i)}l=l.next}while(l!==r)}}function xl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Wi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function fu(e){var t=e.alternate;t!==null&&(e.alternate=null,fu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Oe],delete t[Qn],delete t[Ri],delete t[mp],delete t[hp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function pu(e){return e.tag===5||e.tag===3||e.tag===4}function ns(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wr));else if(r!==4&&(e=e.child,e!==null))for(Qi(e,t,n),e=e.sibling;e!==null;)Qi(e,t,n),e=e.sibling}function Gi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Gi(e,t,n),e=e.sibling;e!==null;)Gi(e,t,n),e=e.sibling}var te=null,Me=!1;function Je(e,t,n){for(n=n.child;n!==null;)mu(e,t,n),n=n.sibling}function mu(e,t,n){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(dl,n)}catch{}switch(n.tag){case 5:ae||Qt(n,t);case 6:var r=te,l=Me;te=null,Je(e,t,n),te=r,Me=l,te!==null&&(Me?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Me?(e=te,n=n.stateNode,e.nodeType===8?Gl(e.parentNode,n):e.nodeType===1&&Gl(e,n),Bn(e)):Gl(te,n.stateNode));break;case 4:r=te,l=Me,te=n.stateNode.containerInfo,Me=!0,Je(e,t,n),te=r,Me=l;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Vi(n,t,o),l=l.next}while(l!==r)}Je(e,t,n);break;case 1:if(!ae&&(Qt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){W(n,t,s)}Je(e,t,n);break;case 21:Je(e,t,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,Je(e,t,n),ae=r):Je(e,t,n);break;default:Je(e,t,n)}}function rs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Rp),t.forEach(function(r){var l=Bp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Pe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:te=s.stateNode,Me=!1;break e;case 3:te=s.stateNode.containerInfo,Me=!0;break e;case 4:te=s.stateNode.containerInfo,Me=!0;break e}s=s.return}if(te===null)throw Error(y(160));mu(i,o,l),te=null,Me=!1;var c=l.alternate;c!==null&&(c.return=null),l.return=null}catch(d){W(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)hu(t,e),t=t.sibling}function hu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(t,e),Ae(e),r&4){try{Dn(3,e,e.return),xl(3,e)}catch(w){W(e,e.return,w)}try{Dn(5,e,e.return)}catch(w){W(e,e.return,w)}}break;case 1:Pe(t,e),Ae(e),r&512&&n!==null&&Qt(n,n.return);break;case 5:if(Pe(t,e),Ae(e),r&512&&n!==null&&Qt(n,n.return),e.flags&32){var l=e.stateNode;try{An(l,"")}catch(w){W(e,e.return,w)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&As(l,i),vi(s,o);var d=vi(s,i);for(o=0;o<c.length;o+=2){var g=c[o],h=c[o+1];g==="style"?Hs(l,h):g==="dangerouslySetInnerHTML"?$s(l,h):g==="children"?An(l,h):ua(l,g,h,d)}switch(s){case"input":fi(l,i);break;case"textarea":Fs(l,i);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?Kt(l,!!i.multiple,k,!1):m!==!!i.multiple&&(i.defaultValue!=null?Kt(l,!!i.multiple,i.defaultValue,!0):Kt(l,!!i.multiple,i.multiple?[]:"",!1))}l[Qn]=i}catch(w){W(e,e.return,w)}}break;case 6:if(Pe(t,e),Ae(e),r&4){if(e.stateNode===null)throw Error(y(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(w){W(e,e.return,w)}}break;case 3:if(Pe(t,e),Ae(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Bn(t.containerInfo)}catch(w){W(e,e.return,w)}break;case 4:Pe(t,e),Ae(e);break;case 13:Pe(t,e),Ae(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Ua=K())),r&4&&rs(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(d=ae)||g,Pe(t,e),ae=d):Pe(t,e),Ae(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(N=e,g=e.child;g!==null;){for(h=N=g;N!==null;){switch(m=N,k=m.child,m.tag){case 0:case 11:case 14:case 15:Dn(4,m,m.return);break;case 1:Qt(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){W(r,n,w)}}break;case 5:Qt(m,m.return);break;case 22:if(m.memoizedState!==null){is(h);continue}}k!==null?(k.return=m,N=k):is(h)}g=g.sibling}e:for(g=null,h=e;;){if(h.tag===5){if(g===null){g=h;try{l=h.stateNode,d?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=h.stateNode,c=h.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=Bs("display",o))}catch(w){W(e,e.return,w)}}}else if(h.tag===6){if(g===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(w){W(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;g===h&&(g=null),h=h.return}g===h&&(g=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Pe(t,e),Ae(e),r&4&&rs(e);break;case 21:break;default:Pe(t,e),Ae(e)}}function Ae(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(pu(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(An(l,""),r.flags&=-33);var i=ns(e);Gi(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,s=ns(e);Qi(e,s,o);break;default:throw Error(y(161))}}catch(c){W(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Dp(e,t,n){N=e,gu(e)}function gu(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var l=N,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||jr;if(!o){var s=l.alternate,c=s!==null&&s.memoizedState!==null||ae;s=jr;var d=ae;if(jr=o,(ae=c)&&!d)for(N=l;N!==null;)o=N,c=o.child,o.tag===22&&o.memoizedState!==null?as(l):c!==null?(c.return=o,N=c):as(l);for(;i!==null;)N=i,gu(i),i=i.sibling;N=l,jr=s,ae=d}ls(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,N=i):ls(e)}}function ls(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||xl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ae)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Re(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ho(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ho(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var h=g.dehydrated;h!==null&&Bn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}ae||t.flags&512&&Wi(t)}catch(m){W(t,t.return,m)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function is(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function as(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{xl(4,t)}catch(c){W(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(c){W(t,l,c)}}var i=t.return;try{Wi(t)}catch(c){W(t,i,c)}break;case 5:var o=t.return;try{Wi(t)}catch(c){W(t,o,c)}}}catch(c){W(t,t.return,c)}if(t===e){N=null;break}var s=t.sibling;if(s!==null){s.return=t.return,N=s;break}N=t.return}}var Lp=Math.ceil,nl=qe.ReactCurrentDispatcher,Ba=qe.ReactCurrentOwner,Ce=qe.ReactCurrentBatchConfig,L=0,ee=null,Y=null,ne=0,ve=0,Gt=gt(0),q=0,Jn=null,Rt=0,kl=0,Ha=0,Ln=null,fe=null,Ua=0,on=1/0,He=null,rl=!1,Ki=null,ut=null,Nr=!1,lt=null,ll=0,Tn=0,Yi=null,Lr=-1,Tr=0;function ce(){return L&6?K():Lr!==-1?Lr:Lr=K()}function dt(e){return e.mode&1?L&2&&ne!==0?ne&-ne:vp.transition!==null?(Tr===0&&(Tr=ec()),Tr):(e=A,e!==0||(e=window.event,e=e===void 0?16:oc(e.type)),e):1}function Te(e,t,n,r){if(50<Tn)throw Tn=0,Yi=null,Error(y(185));tr(e,n,r),(!(L&2)||e!==ee)&&(e===ee&&(!(L&2)&&(kl|=n),q===4&&nt(e,ne)),ge(e,r),n===1&&L===0&&!(t.mode&1)&&(on=K()+500,gl&&vt()))}function ge(e,t){var n=e.callbackNode;vf(e,t);var r=Br(e,e===ee?ne:0);if(r===0)n!==null&&ho(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ho(n),t===1)e.tag===0?gp(os.bind(null,e)):Cc(os.bind(null,e)),fp(function(){!(L&6)&&vt()}),n=null;else{switch(tc(r)){case 1:n=ha;break;case 4:n=Js;break;case 16:n=$r;break;case 536870912:n=Zs;break;default:n=$r}n=Su(n,vu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function vu(e,t){if(Lr=-1,Tr=0,L&6)throw Error(y(327));var n=e.callbackNode;if(Zt()&&e.callbackNode!==n)return null;var r=Br(e,e===ee?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=il(e,r);else{t=r;var l=L;L|=2;var i=xu();(ee!==e||ne!==t)&&(He=null,on=K()+500,Ct(e,t));do try{Ap();break}catch(s){yu(e,s)}while(!0);Ea(),nl.current=i,L=l,Y!==null?t=0:(ee=null,ne=0,t=q)}if(t!==0){if(t===2&&(l=ji(e),l!==0&&(r=l,t=Xi(e,l))),t===1)throw n=Jn,Ct(e,0),nt(e,r),ge(e,K()),n;if(t===6)nt(e,r);else{if(l=e.current.alternate,!(r&30)&&!Tp(l)&&(t=il(e,r),t===2&&(i=ji(e),i!==0&&(r=i,t=Xi(e,i))),t===1))throw n=Jn,Ct(e,0),nt(e,r),ge(e,K()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:jt(e,fe,He);break;case 3:if(nt(e,r),(r&130023424)===r&&(t=Ua+500-K(),10<t)){if(Br(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Pi(jt.bind(null,e,fe,He),t);break}jt(e,fe,He);break;case 4:if(nt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Le(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Lp(r/1960))-r,10<r){e.timeoutHandle=Pi(jt.bind(null,e,fe,He),r);break}jt(e,fe,He);break;case 5:jt(e,fe,He);break;default:throw Error(y(329))}}}return ge(e,K()),e.callbackNode===n?vu.bind(null,e):null}function Xi(e,t){var n=Ln;return e.current.memoizedState.isDehydrated&&(Ct(e,t).flags|=256),e=il(e,t),e!==2&&(t=fe,fe=n,t!==null&&qi(t)),e}function qi(e){fe===null?fe=e:fe.push.apply(fe,e)}function Tp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Ie(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nt(e,t){for(t&=~Ha,t&=~kl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Le(t),r=1<<n;e[n]=-1,t&=~r}}function os(e){if(L&6)throw Error(y(327));Zt();var t=Br(e,0);if(!(t&1))return ge(e,K()),null;var n=il(e,t);if(e.tag!==0&&n===2){var r=ji(e);r!==0&&(t=r,n=Xi(e,r))}if(n===1)throw n=Jn,Ct(e,0),nt(e,t),ge(e,K()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,jt(e,fe,He),ge(e,K()),null}function Va(e,t){var n=L;L|=1;try{return e(t)}finally{L=n,L===0&&(on=K()+500,gl&&vt())}}function Mt(e){lt!==null&&lt.tag===0&&!(L&6)&&Zt();var t=L;L|=1;var n=Ce.transition,r=A;try{if(Ce.transition=null,A=1,e)return e()}finally{A=r,Ce.transition=n,L=t,!(L&6)&&vt()}}function Wa(){ve=Gt.current,$(Gt)}function Ct(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,dp(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(ba(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qr();break;case 3:ln(),$(me),$(oe),La();break;case 5:Da(r);break;case 4:ln();break;case 13:$(H);break;case 19:$(H);break;case 10:_a(r.type._context);break;case 22:case 23:Wa()}n=n.return}if(ee=e,Y=e=ft(e.current,null),ne=ve=t,q=0,Jn=null,Ha=kl=Rt=0,fe=Ln=null,St!==null){for(t=0;t<St.length;t++)if(n=St[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}St=null}return e}function yu(e,t){do{var n=Y;try{if(Ea(),Rr.current=tl,el){for(var r=U.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}el=!1}if(Pt=0,Z=X=U=null,Mn=!1,Yn=0,Ba.current=null,n===null||n.return===null){q=1,Jn=t,Y=null;break}e:{var i=e,o=n.return,s=n,c=t;if(t=ne,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,g=s,h=g.tag;if(!(g.mode&1)&&(h===0||h===11||h===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var k=Ko(o);if(k!==null){k.flags&=-257,Yo(k,o,s,i,t),k.mode&1&&Go(i,d,t),t=k,c=d;var x=t.updateQueue;if(x===null){var w=new Set;w.add(c),t.updateQueue=w}else x.add(c);break e}else{if(!(t&1)){Go(i,d,t),Qa();break e}c=Error(y(426))}}else if(B&&s.mode&1){var D=Ko(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Yo(D,o,s,i,t),Ca(an(c,s));break e}}i=c=an(c,s),q!==4&&(q=2),Ln===null?Ln=[i]:Ln.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=tu(i,c,t);Bo(i,f);break e;case 1:s=c;var u=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ut===null||!ut.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=nu(i,s,t);Bo(i,v);break e}}i=i.return}while(i!==null)}wu(n)}catch(j){t=j,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(!0)}function xu(){var e=nl.current;return nl.current=tl,e===null?tl:e}function Qa(){(q===0||q===3||q===2)&&(q=4),ee===null||!(Rt&268435455)&&!(kl&268435455)||nt(ee,ne)}function il(e,t){var n=L;L|=2;var r=xu();(ee!==e||ne!==t)&&(He=null,Ct(e,t));do try{Ip();break}catch(l){yu(e,l)}while(!0);if(Ea(),L=n,nl.current=r,Y!==null)throw Error(y(261));return ee=null,ne=0,q}function Ip(){for(;Y!==null;)ku(Y)}function Ap(){for(;Y!==null&&!sf();)ku(Y)}function ku(e){var t=Nu(e.alternate,e,ve);e.memoizedProps=e.pendingProps,t===null?wu(e):Y=t,Ba.current=null}function wu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Pp(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,Y=null;return}}else if(n=_p(n,t,ve),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);q===0&&(q=5)}function jt(e,t,n){var r=A,l=Ce.transition;try{Ce.transition=null,A=1,Fp(e,t,n,r)}finally{Ce.transition=l,A=r}return null}function Fp(e,t,n,r){do Zt();while(lt!==null);if(L&6)throw Error(y(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(yf(e,i),e===ee&&(Y=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Nr||(Nr=!0,Su($r,function(){return Zt(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ce.transition,Ce.transition=null;var o=A;A=1;var s=L;L|=4,Ba.current=null,Mp(e,n),hu(n,e),lp(Ei),Hr=!!zi,Ei=zi=null,e.current=n,Dp(n),cf(),L=s,A=o,Ce.transition=i}else e.current=n;if(Nr&&(Nr=!1,lt=e,ll=l),i=e.pendingLanes,i===0&&(ut=null),ff(n.stateNode),ge(e,K()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(rl)throw rl=!1,e=Ki,Ki=null,e;return ll&1&&e.tag!==0&&Zt(),i=e.pendingLanes,i&1?e===Yi?Tn++:(Tn=0,Yi=e):Tn=0,vt(),null}function Zt(){if(lt!==null){var e=tc(ll),t=Ce.transition,n=A;try{if(Ce.transition=null,A=16>e?16:e,lt===null)var r=!1;else{if(e=lt,lt=null,ll=0,L&6)throw Error(y(331));var l=L;for(L|=4,N=e.current;N!==null;){var i=N,o=i.child;if(N.flags&16){var s=i.deletions;if(s!==null){for(var c=0;c<s.length;c++){var d=s[c];for(N=d;N!==null;){var g=N;switch(g.tag){case 0:case 11:case 15:Dn(8,g,i)}var h=g.child;if(h!==null)h.return=g,N=h;else for(;N!==null;){g=N;var m=g.sibling,k=g.return;if(fu(g),g===d){N=null;break}if(m!==null){m.return=k,N=m;break}N=k}}}var x=i.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var D=w.sibling;w.sibling=null,w=D}while(w!==null)}}N=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,N=o;else e:for(;N!==null;){if(i=N,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Dn(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,N=f;break e}N=i.return}}var u=e.current;for(N=u;N!==null;){o=N;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,N=p;else e:for(o=u;N!==null;){if(s=N,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:xl(9,s)}}catch(j){W(s,s.return,j)}if(s===o){N=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,N=v;break e}N=s.return}}if(L=l,vt(),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(dl,e)}catch{}r=!0}return r}finally{A=n,Ce.transition=t}}return!1}function ss(e,t,n){t=an(n,t),t=tu(e,t,1),e=ct(e,t,1),t=ce(),e!==null&&(tr(e,1,t),ge(e,t))}function W(e,t,n){if(e.tag===3)ss(e,e,n);else for(;t!==null;){if(t.tag===3){ss(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ut===null||!ut.has(r))){e=an(n,e),e=nu(t,e,1),t=ct(t,e,1),e=ce(),t!==null&&(tr(t,1,e),ge(t,e));break}}t=t.return}}function Op(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ne&n)===n&&(q===4||q===3&&(ne&130023424)===ne&&500>K()-Ua?Ct(e,0):Ha|=n),ge(e,t)}function ju(e,t){t===0&&(e.mode&1?(t=pr,pr<<=1,!(pr&130023424)&&(pr=4194304)):t=1);var n=ce();e=Ye(e,t),e!==null&&(tr(e,t,n),ge(e,n))}function $p(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ju(e,n)}function Bp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),ju(e,n)}var Nu;Nu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||me.current)pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pe=!1,Ep(e,t,n);pe=!!(e.flags&131072)}else pe=!1,B&&t.flags&1048576&&zc(t,Yr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Dr(e,t),e=t.pendingProps;var l=tn(t,oe.current);Jt(t,n),l=Ia(null,t,r,e,l,n);var i=Aa();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,he(r)?(i=!0,Gr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ra(t),l.updater=yl,t.stateNode=l,l._reactInternals=t,Ai(t,r,e,n),t=$i(null,t,r,!0,i,n)):(t.tag=0,B&&i&&Sa(t),se(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Dr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Up(r),e=Re(r,e),l){case 0:t=Oi(null,t,r,e,n);break e;case 1:t=Jo(null,t,r,e,n);break e;case 11:t=Xo(null,t,r,e,n);break e;case 14:t=qo(null,t,r,Re(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),Oi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),Jo(e,t,r,l,n);case 3:e:{if(au(t),e===null)throw Error(y(387));r=t.pendingProps,i=t.memoizedState,l=i.element,Dc(e,t),Jr(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=an(Error(y(423)),t),t=Zo(e,t,r,n,l);break e}else if(r!==l){l=an(Error(y(424)),t),t=Zo(e,t,r,n,l);break e}else for(ye=st(t.stateNode.containerInfo.firstChild),xe=t,B=!0,De=null,n=Rc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(nn(),r===l){t=Xe(e,t,n);break e}se(e,t,r,n)}t=t.child}return t;case 5:return Lc(t),e===null&&Li(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,_i(r,l)?o=null:i!==null&&_i(r,i)&&(t.flags|=32),iu(e,t),se(e,t,o,n),t.child;case 6:return e===null&&Li(t),null;case 13:return ou(e,t,n);case 4:return Ma(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=rn(t,null,r,n):se(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),Xo(e,t,r,l,n);case 7:return se(e,t,t.pendingProps,n),t.child;case 8:return se(e,t,t.pendingProps.children,n),t.child;case 12:return se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,F(Xr,r._currentValue),r._currentValue=o,i!==null)if(Ie(i.value,o)){if(i.children===l.children&&!me.current){t=Xe(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var c=s.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=Qe(-1,n&-n),c.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?c.next=c:(c.next=g.next,g.next=c),d.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Ti(i.return,n,t),s.lanes|=n;break}c=c.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(y(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Ti(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}se(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Jt(t,n),l=ze(l),r=r(l),t.flags|=1,se(e,t,r,n),t.child;case 14:return r=t.type,l=Re(r,t.pendingProps),l=Re(r.type,l),qo(e,t,r,l,n);case 15:return ru(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),Dr(e,t),t.tag=1,he(r)?(e=!0,Gr(t)):e=!1,Jt(t,n),eu(t,r,l),Ai(t,r,l,n),$i(null,t,r,!0,e,n);case 19:return su(e,t,n);case 22:return lu(e,t,n)}throw Error(y(156,t.tag))};function Su(e,t){return qs(e,t)}function Hp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function be(e,t,n,r){return new Hp(e,t,n,r)}function Ga(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Up(e){if(typeof e=="function")return Ga(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fa)return 11;if(e===pa)return 14}return 2}function ft(e,t){var n=e.alternate;return n===null?(n=be(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ir(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")Ga(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case At:return zt(n.children,l,i,t);case da:o=8,l|=8;break;case oi:return e=be(12,n,t,l|2),e.elementType=oi,e.lanes=i,e;case si:return e=be(13,n,t,l),e.elementType=si,e.lanes=i,e;case ci:return e=be(19,n,t,l),e.elementType=ci,e.lanes=i,e;case Ls:return wl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ms:o=10;break e;case Ds:o=9;break e;case fa:o=11;break e;case pa:o=14;break e;case Ze:o=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=be(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function zt(e,t,n,r){return e=be(7,e,r,t),e.lanes=n,e}function wl(e,t,n,r){return e=be(22,e,r,t),e.elementType=Ls,e.lanes=n,e.stateNode={isHidden:!1},e}function ti(e,t,n){return e=be(6,e,null,t),e.lanes=n,e}function ni(e,t,n){return t=be(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Vp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Il(0),this.expirationTimes=Il(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Il(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ka(e,t,n,r,l,i,o,s,c){return e=new Vp(e,t,n,s,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=be(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ra(i),e}function Wp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:It,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function bu(e){if(!e)return mt;e=e._reactInternals;e:{if(Lt(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(he(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(he(n))return bc(e,n,t)}return t}function Cu(e,t,n,r,l,i,o,s,c){return e=Ka(n,r,!0,e,l,i,o,s,c),e.context=bu(null),n=e.current,r=ce(),l=dt(n),i=Qe(r,l),i.callback=t??null,ct(n,i,l),e.current.lanes=l,tr(e,l,r),ge(e,r),e}function jl(e,t,n,r){var l=t.current,i=ce(),o=dt(l);return n=bu(n),t.context===null?t.context=n:t.pendingContext=n,t=Qe(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ct(l,t,o),e!==null&&(Te(e,l,o,i),Pr(e,l,o)),o}function al(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ya(e,t){cs(e,t),(e=e.alternate)&&cs(e,t)}function Qp(){return null}var zu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xa(e){this._internalRoot=e}Nl.prototype.render=Xa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));jl(e,t,null,null)};Nl.prototype.unmount=Xa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mt(function(){jl(null,e,null,null)}),t[Ke]=null}};function Nl(e){this._internalRoot=e}Nl.prototype.unstable_scheduleHydration=function(e){if(e){var t=lc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tt.length&&t!==0&&t<tt[n].priority;n++);tt.splice(n,0,e),n===0&&ac(e)}};function qa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Sl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function us(){}function Gp(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var d=al(o);i.call(d)}}var o=Cu(t,r,e,0,null,!1,!1,"",us);return e._reactRootContainer=o,e[Ke]=o.current,Vn(e.nodeType===8?e.parentNode:e),Mt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var d=al(c);s.call(d)}}var c=Ka(e,0,!1,null,null,!1,!1,"",us);return e._reactRootContainer=c,e[Ke]=c.current,Vn(e.nodeType===8?e.parentNode:e),Mt(function(){jl(t,c,n,r)}),c}function bl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var s=l;l=function(){var c=al(o);s.call(c)}}jl(t,o,e,l)}else o=Gp(n,t,e,l,r);return al(o)}nc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nn(t.pendingLanes);n!==0&&(ga(t,n|1),ge(t,K()),!(L&6)&&(on=K()+500,vt()))}break;case 13:Mt(function(){var r=Ye(e,1);if(r!==null){var l=ce();Te(r,e,1,l)}}),Ya(e,1)}};va=function(e){if(e.tag===13){var t=Ye(e,134217728);if(t!==null){var n=ce();Te(t,e,134217728,n)}Ya(e,134217728)}};rc=function(e){if(e.tag===13){var t=dt(e),n=Ye(e,t);if(n!==null){var r=ce();Te(n,e,t,r)}Ya(e,t)}};lc=function(){return A};ic=function(e,t){var n=A;try{return A=e,t()}finally{A=n}};xi=function(e,t,n){switch(t){case"input":if(fi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=hl(r);if(!l)throw Error(y(90));Is(r),fi(r,l)}}}break;case"textarea":Fs(e,n);break;case"select":t=n.value,t!=null&&Kt(e,!!n.multiple,t,!1)}};Ws=Va;Qs=Mt;var Kp={usingClientEntryPoint:!1,Events:[rr,Bt,hl,Us,Vs,Va]},kn={findFiberByHostInstance:Nt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Yp={bundleType:kn.bundleType,version:kn.version,rendererPackageName:kn.rendererPackageName,rendererConfig:kn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ys(e),e===null?null:e.stateNode},findFiberByHostInstance:kn.findFiberByHostInstance||Qp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sr.isDisabled&&Sr.supportsFiber)try{dl=Sr.inject(Yp),$e=Sr}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kp;we.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qa(t))throw Error(y(200));return Wp(e,t,null,n)};we.createRoot=function(e,t){if(!qa(e))throw Error(y(299));var n=!1,r="",l=zu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ka(e,1,!1,null,null,n,!1,r,l),e[Ke]=t.current,Vn(e.nodeType===8?e.parentNode:e),new Xa(t)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Ys(t),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return Mt(e)};we.hydrate=function(e,t,n){if(!Sl(t))throw Error(y(200));return bl(null,e,t,!0,n)};we.hydrateRoot=function(e,t,n){if(!qa(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=zu;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Cu(t,null,e,1,n??null,l,!1,i,o),e[Ke]=t.current,Vn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Nl(t)};we.render=function(e,t,n){if(!Sl(t))throw Error(y(200));return bl(null,e,t,!1,n)};we.unmountComponentAtNode=function(e){if(!Sl(e))throw Error(y(40));return e._reactRootContainer?(Mt(function(){bl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};we.unstable_batchedUpdates=Va;we.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Sl(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return bl(e,t,n,!1,r)};we.version="18.3.1-next-f1338f8080-20240426";function Eu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Eu)}catch(e){console.error(e)}}Eu(),Es.exports=we;var Xp=Es.exports,ds=Xp;ii.createRoot=ds.createRoot,ii.hydrateRoot=ds.hydrateRoot;/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=e=>e==null?void 0:e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Jp(e,t,n=[]){if(t==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:qp(e),size:24,node:t,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=e=>{let t="",n=!1;for(const r of e){if(r==="-"||r==="_"||r<=" "){n=t.length>0;continue}t.length===0?t+=r.toLowerCase():t+=n?r.toUpperCase():r,n=!1}return t};/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=e=>{const t=Zp(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function ri(e){return e!=null}function tm(e,t={}){var m,k;const n=t.attributeNames??{},r=x=>n[x]??x,l=e.size??e.width??kt.width,i=e.size??e.height??kt.height,o=((m=e.aliases)==null?void 0:m.filter(x=>typeof x=="string"&&x.trim()!=="").map(x=>`lucide-${x}`))??[],s=[...e.name?[`lucide-${e.name}`]:[],...o],c=((k=t.className)==null?void 0:k.split(" ").filter(Boolean))??[],d=t.includeDefaultClasses===!1?Ji(...c):Ji("lucide",...s,...c),g=t.absoluteStrokeWidth?Number(t.strokeWidth??kt["stroke-width"])*Number(e.size??e.width??kt.width)/Number(t.size??t.width??kt.width):t.strokeWidth??kt["stroke-width"];return["svg",{...Object.entries(kt).reduce((x,[w,D])=>(x[r(w)]=D,x),{}),..."color"in t&&t.color&&{[r("stroke")]:t.color},..."size"in t&&ri(t.size)&&{[r("width")]:t.size,[r("height")]:t.size},..."width"in t&&ri(t.width)&&{[r("width")]:t.width},..."height"in t&&ri(t.height)&&{[r("height")]:t.height},[r("stroke-width")]:g,...d&&{[r("class")]:d},[r("viewBox")]:`0 0 ${l} ${i}`,...t.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in t&&t.attributes},e.node.map(x=>{const[w,D,f]=x,u=t.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...D}:D;return f?[w,u,f]:[w,u]})]}/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function nm(e,t={}){return tm(e,{...t,attributeNames:{...t.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},lm=I.createContext({}),im=()=>I.useContext(lm),am=I.forwardRef(({color:e,size:t,width:n,height:r,strokeWidth:l,absoluteStrokeWidth:i,nonScalingStroke:o,className:s="",children:c,iconNode:d=[],icon:g={node:d,aliases:[],size:24},...h},m)=>{const{size:k=24,strokeWidth:x=2,absoluteStrokeWidth:w=!1,nonScalingStroke:D=!1,color:f="currentColor",className:u=""}=im()??{},p=!!c||rm(h),[v,j,b=[]]=nm(g,{color:e??f,width:n??t??k,height:r??t??k,strokeWidth:l??x,absoluteStrokeWidth:i??w,nonScalingStroke:o??D,className:Ji(u,s),hasA11yProp:p,attributes:h});return I.createElement(v,{ref:m,...j},[...b.map(([C,z])=>I.createElement(C,z)),...Array.isArray(c)?c:[c]])});/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function E(e,t=[],n=[]){const r=typeof e=="string"?Jp(e,t,n):e,l=I.forwardRef(({className:i,...o},s)=>I.createElement(am,{ref:s,icon:r,className:i,...o}));return r.name&&(l.displayName=em(r.name)),l}/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u={name:"activity",size:24,node:[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]};_u.node;const om=E(_u);/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};Pu.node;const Ru=E(Pu);/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu={name:"arrow-up",size:24,node:[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]};Mu.node;const sm=E(Mu);/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du={name:"book-open",size:24,node:[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]]};Du.node;const cm=E(Du);/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu={name:"bot",size:24,node:[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]};Lu.node;const um=E(Lu);/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu={name:"briefcase",size:24,node:[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]};Tu.node;const Iu=E(Tu);/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au={name:"calendar",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]]};Au.node;const Zi=E(Au);/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};Fu.node;const li=E(Fu);/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou={name:"circle-check-big",size:24,node:[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],aliases:["check-circle"]};Ou.node;const bn=E(Ou);/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};$u.node;const Cl=E($u);/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};Bu.node;const dm=E(Bu);/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu={name:"cloud",size:24,node:[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]};Hu.node;const fm=E(Hu);/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu={name:"code-xml",size:24,node:[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],aliases:["code-2"]};Uu.node;const pm=E(Uu);/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu={name:"code",size:24,node:[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]]};Vu.node;const mm=E(Vu);/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};Wu.node;const fs=E(Wu);/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu={name:"cpu",size:24,node:[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]};Qu.node;const ea=E(Qu);/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu={name:"database",size:24,node:[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]};Gu.node;const zl=E(Gu);/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku={name:"download",size:24,node:[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]};Ku.node;const ol=E(Ku);/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu={name:"external-link",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]};Yu.node;const sl=E(Yu);/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu={name:"file-text",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]};Xu.node;const Zn=E(Xu);/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu={name:"folder-git-2",size:24,node:[["path",{d:"M18 19a5 5 0 0 1-5-5v8",key:"sz5oeg"}],["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]]};qu.node;const hm=E(qu);/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju={name:"git-branch",size:24,node:[["path",{d:"M15 6a9 9 0 0 0-9 9V3",key:"1cii5b"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}]]};Ju.node;const gm=E(Ju);/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zu={name:"graduation-cap",size:24,node:[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]};Zu.node;const ta=E(Zu);/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};ed.node;const vm=E(ed);/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td={name:"mail",size:24,node:[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]};td.node;const cl=E(td);/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd={name:"map-pin",size:24,node:[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]};nd.node;const ir=E(nd);/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd={name:"menu",size:24,node:[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]};rd.node;const ym=E(rd);/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld={name:"monitor",size:24,node:[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]};ld.node;const xm=E(ld);/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]};id.node;const km=E(id);/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad={name:"network",size:24,node:[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]};ad.node;const wm=E(ad);/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od={name:"phone",size:24,node:[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]};od.node;const Ja=E(od);/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};sd.node;const ps=E(sd);/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};cd.node;const jm=E(cd);/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud={name:"server",size:24,node:[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]};ud.node;const Nm=E(ud);/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};dd.node;const fd=E(dd);/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};pd.node;const Sm=E(pd);/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]};md.node;const bm=E(md);/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd={name:"terminal",size:24,node:[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]]};hd.node;const ms=E(hd);/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd={name:"trending-up",size:24,node:[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]]};gd.node;const Cm=E(gd);/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd={name:"workflow",size:24,node:[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]};vd.node;const zm=E(vd);/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};yd.node;const na=E(yd);/**
 * @license lucide-react v1.58.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};xd.node;const Em=E(xd);function _m({theme:e,toggleTheme:t,onOpenResume:n}){const[r,l]=I.useState(!1),[i,o]=I.useState(!1),[s,c]=I.useState("hero");I.useEffect(()=>{const g=()=>{l(window.scrollY>20);const h=["hero","about","skills","experience","projects","architecture","education","contact"],m=window.scrollY+180;for(const k of h){const x=document.getElementById(k);if(x){const w=x.offsetTop,D=x.offsetHeight;if(m>=w&&m<w+D){c(k);break}}}};return window.addEventListener("scroll",g),()=>window.removeEventListener("scroll",g)},[]);const d=[{name:"About",href:"#about"},{name:"Skills",href:"#skills"},{name:"Experience",href:"#experience"},{name:"Projects",href:"#projects"},{name:"Architecture",href:"#architecture"},{name:"Education",href:"#education"},{name:"Contact",href:"#contact"}];return a.jsxs(a.Fragment,{children:[a.jsx("header",{className:`navbar-header ${r?"navbar-scrolled":""}`,children:a.jsxs("div",{className:"container navbar-container",children:[a.jsx("a",{href:"#hero",className:"navbar-logo","aria-label":"Rahul Chaurasia Home",children:a.jsx("img",{src:"/rahul-logo.png",alt:"Rahul - Software Engineer",className:"site-logo-img"})}),a.jsx("nav",{className:"desktop-nav","aria-label":"Main Navigation",children:d.map(g=>a.jsx("a",{href:g.href,className:`nav-link ${s===g.href.substring(1)?"active":""}`,children:g.name},g.name))}),a.jsxs("div",{className:"navbar-actions",children:[a.jsx("button",{onClick:t,className:"theme-toggle-btn","aria-label":"Toggle Dark/Light Mode",title:e==="dark"?"Switch to Light Mode":"Switch to Dark Mode",children:e==="dark"?a.jsx(bm,{size:18}):a.jsx(km,{size:18})}),a.jsxs("button",{onClick:n,className:"btn btn-secondary btn-sm resume-nav-btn",title:"Preview / Download Resume",children:[a.jsx(Zn,{size:15}),a.jsx("span",{children:"Resume"})]}),a.jsxs("a",{href:"/Rahul_Chaurasia_Resume.pdf",download:"Rahul_Chaurasia_Resume.pdf",className:"btn btn-primary btn-sm direct-download-btn",title:"Download Official Resume PDF",children:[a.jsx(ol,{size:14}),a.jsx("span",{className:"download-text",children:"PDF"})]}),a.jsx("button",{className:"mobile-menu-toggle",onClick:()=>o(!i),"aria-label":"Toggle menu",children:i?a.jsx(na,{size:22}):a.jsx(ym,{size:22})})]})]})}),i&&a.jsx("div",{className:"mobile-drawer-overlay",onClick:()=>o(!1),children:a.jsxs("div",{className:"mobile-drawer",onClick:g=>g.stopPropagation(),children:[a.jsxs("div",{className:"mobile-drawer-header",children:[a.jsx("div",{className:"mobile-drawer-title",children:"Navigation"}),a.jsx("button",{className:"close-drawer-btn",onClick:()=>o(!1),"aria-label":"Close menu",children:a.jsx(na,{size:20})})]}),a.jsx("nav",{className:"mobile-nav-links",children:d.map(g=>a.jsx("a",{href:g.href,className:`mobile-nav-item ${s===g.href.substring(1)?"active":""}`,onClick:()=>o(!1),children:g.name},g.name))}),a.jsxs("div",{className:"mobile-drawer-footer",children:[a.jsxs("button",{onClick:()=>{o(!1),n()},className:"btn btn-secondary w-full",children:[a.jsx(Zn,{size:16}),"Preview Full Resume"]}),a.jsxs("a",{href:"/Rahul_Chaurasia_Resume.pdf",download:"Rahul_Chaurasia_Resume.pdf",className:"btn btn-primary w-full",children:[a.jsx(ol,{size:16}),"Download PDF Resume"]})]})]})}),a.jsx("style",{children:`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 1.1rem 0;
          transition: all 0.25s ease;
          background: transparent;
        }

        .navbar-scrolled {
          padding: 0.75rem 0;
          background: var(--bg-glass);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--border-subtle);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .logo-icon {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          background: linear-gradient(135deg, rgba(56, 189, 248, 0.15), rgba(99, 102, 241, 0.15));
          border: 1px solid rgba(56, 189, 248, 0.3);
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-text {
          display: flex;
          flex-direction: column;
        }

        .logo-name {
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--text-primary);
          line-height: 1.2;
        }

        .logo-tag {
          font-size: 0.7rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
          letter-spacing: 0.05em;
        }

        .desktop-nav {
          display: none;
          align-items: center;
          gap: 0.35rem;
          background: var(--bg-card);
          padding: 0.3rem 0.6rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-subtle);
        }

        @media (min-width: 992px) {
          .desktop-nav {
            display: flex;
          }
        }

        .nav-link {
          padding: 0.45rem 0.85rem;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-secondary);
          border-radius: var(--radius-full);
          transition: all var(--transition-fast);
        }

        .nav-link:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.05);
        }

        .nav-link.active {
          color: var(--accent-cyan);
          background: rgba(56, 189, 248, 0.1);
          font-weight: 600;
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .theme-toggle-btn {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }

        .theme-toggle-btn:hover {
          color: var(--accent-cyan);
          border-color: var(--border-hover);
        }

        .resume-nav-btn {
          display: none;
        }

        @media (min-width: 640px) {
          .resume-nav-btn {
            display: inline-flex;
          }
        }

        .direct-download-btn {
          display: inline-flex;
        }

        .mobile-menu-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: var(--radius-md);
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
        }

        @media (min-width: 992px) {
          .mobile-menu-toggle {
            display: none;
          }
        }

        /* Mobile Drawer */
        .mobile-drawer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.65);
          backdrop-filter: blur(4px);
          z-index: 200;
          display: flex;
          justify-content: flex-end;
          animation: fade-in 0.2s ease;
        }

        .mobile-drawer {
          width: 82%;
          max-width: 320px;
          height: 100%;
          background: var(--bg-secondary);
          border-left: 1px solid var(--border-subtle);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          animation: slide-in 0.25s ease;
        }

        @keyframes slide-in {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .mobile-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 1.25rem;
        }

        .mobile-drawer-title {
          font-weight: 700;
          font-size: 1.1rem;
        }

        .close-drawer-btn {
          color: var(--text-secondary);
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex: 1;
        }

        .mobile-nav-item {
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          font-weight: 500;
        }

        .mobile-nav-item:hover,
        .mobile-nav-item.active {
          color: var(--accent-cyan);
          background: rgba(56, 189, 248, 0.1);
        }

        .mobile-drawer-footer {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-subtle);
        }

        .w-full {
          width: 100%;
        }
      `})]})}function Za({size:e=18,className:t=""}){return a.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,children:a.jsx("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})})}function eo({size:e=18,className:t=""}){return a.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,children:[a.jsx("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),a.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),a.jsx("circle",{cx:"4",cy:"4",r:"2"})]})}const T={name:"Rahul Chaurasia",role:"Full Stack Developer | Node.js | Laravel",email:"rahulroot7@gmail.com",phone:"+91 7905256440",avatar:"/rahul-chaurasia.jpg",socials:{github:"https://github.com/rahulroot7",linkedin:"https://linkedin.com/in/rahul-chaurasia-80371a194"},stats:[{label:"Years Experience",value:"4+",detail:"Enterprise & Gov projects"},{label:"API Latency Boost",value:"30%",detail:"Optimized via Redis & indexing"},{label:"DB Query Optimization",value:"40%",detail:"Reduced query execution time"},{label:"Concurrent Users Handled",value:"500+",detail:"Real-time sub-100ms latency"}]},kd="Full Stack Developer with 4+ years of experience designing, developing, and deploying scalable web applications using Node.js, React.js, Laravel (PHP), and JavaScript. Experienced in building responsive user interfaces, RESTful APIs, authentication systems (JWT/OAuth2), microservices, and real-time applications. Proficient in MySQL, PostgreSQL, MongoDB, Redis, Docker, AWS S3, and CI/CD pipelines. Strong background in API integration, database optimization, performance tuning, and delivering secure, high-quality solutions for enterprise and government applications.",hs=[{category:"Languages",skills:["JavaScript (ES6+)","TypeScript","PHP 8","SQL"]},{category:"Backend",skills:["Node.js","Express.js","Fastify","Laravel","RESTful APIs","API Integration","JWT Authentication","OAuth2","Socket.IO","WebSockets"]},{category:"Architecture",skills:["MVC Architecture","Microservices","Asynchronous Processing","Queue Jobs","Cron Jobs","Repository Pattern","Clean Code Practices"]},{category:"Databases",skills:["MySQL","PostgreSQL","MongoDB","Redis","Database Design","Query Optimization","Database Indexing","Schema Design","Transactions & ACID"]},{category:"Cloud & DevOps",skills:["Docker","AWS S3","Git & GitHub","GitLab","CI/CD Pipelines (GitHub Actions)","Linux Server Administration","Nginx","PM2 Process Manager","Apache"]},{category:"Messaging & Tools",skills:["Kafka","RabbitMQ","Swagger / OpenAPI","Postman","Composer","npm"]},{category:"AI & GenAI",skills:["OpenAI API","Codex","Generative AI Integration","Prompt Engineering"]},{category:"Frontend",skills:["React.js","HTML5 (Semantic)","CSS3","Bootstrap","Responsive Web Design","State Management"]}],Cn=[{id:"echt-tech",company:"ECHT TECH Consultancy Pvt. Ltd.",role:"Software Developer (Full Stack Developer)",period:"Sep 2023 – Present",type:"Full-time",location:"India",featuredBadge:"Current Role",highlights:["Designed, developed, and maintained scalable web applications using Node.js, React.js, Express.js, Laravel, and PHP, delivering secure and high-performance solutions for enterprise and government clients.","Developed responsive and reusable user interfaces using React.js, integrated frontend with RESTful APIs, and implemented authentication using JWT and role-based access control (RBAC).","Built and maintained scalable backend services, REST APIs, third-party API integrations, and business workflows following MVC Architecture, Repository Pattern, and clean coding best practices.","Optimized application performance using Redis, database indexing, query optimization, and efficient schema design, improving API response times by 30% and reducing database query execution time by 40%.","Containerized applications using Docker and automated deployments with GitHub Actions CI/CD, reducing deployment time by 50% while improving release reliability.","Collaborated with UI/UX designers, QA engineers, and cross-functional Agile teams to deliver end-to-end features, resolve production issues, and enhance application scalability and user experience."],techStack:["Node.js","React.js","Express.js","Laravel","PHP","Redis","Docker","GitHub Actions","JWT / RBAC","MySQL","PostgreSQL"]},{id:"mariox-software",company:"Mariox Software Pvt. Ltd.",role:"Software Developer",period:"Apr 2023 – Sep 2023",type:"Full-time",location:"India",highlights:["Developed and maintained full-stack web application features using Node.js, React.js, Express.js, and MongoDB, delivering scalable and responsive user experiences.","Engineered a real-time chat application using Node.js, Socket.IO, and WebSockets, supporting 500+ concurrent users and 10K+ daily messages with sub-100ms latency.","Designed asynchronous messaging workflows using RabbitMQ, improving system scalability, fault tolerance, and overall throughput.","Built and optimized NumberDekho, a location-based vendor marketplace, implementing geo-radius search and RESTful APIs to onboard 1,000+ vendors.","Collaborated with cross-functional teams using Agile methodologies, integrated third-party APIs, resolved production issues, and delivered high-quality software releases."],techStack:["Node.js","React.js","Express.js","MongoDB","Socket.IO","WebSockets","RabbitMQ","Elasticsearch","REST APIs"]},{id:"xeam-venture",company:"XEAM Venture Pvt. Ltd.",role:"Software Developer",period:"Feb 2022 – Apr 2023",type:"Full-time",location:"India",highlights:["Developed and maintained an HRMS ERP system using Laravel, PHP, MySQL, HTML5, CSS3, Bootstrap, and JavaScript, automating payroll, attendance, leave, and employee management workflows.","Built responsive and user-friendly interfaces using HTML5, CSS3, Bootstrap, and JavaScript, improving usability across desktop and mobile devices.","Developed secure RESTful APIs, implemented JWT-based authentication, and role-based access control (RBAC) for HR lifecycle management and employee self-service modules.","Optimized MySQL database queries, indexing, and schema design, reducing payroll processing time by 35% and improving overall application performance.","Collaborated with business analysts and QA teams to implement new features, fix production issues, and deliver software enhancements using Agile development practices."],techStack:["Laravel","PHP","MySQL","JavaScript","HTML5","CSS3","Bootstrap","JWT","RBAC","ERP / HRMS"]}],ra=[{id:"vak-chat",title:"VAK – Real-Time Chat Application",subtitle:"High-concurrency chat platform supporting 500+ concurrent users and sub-100ms latency",category:"Real-Time / Full Stack",tagline:"Sub-100ms Real-Time Engine with Socket.IO & MongoDB",technologies:["React.js","Node.js","Express.js","Socket.IO","MongoDB","Firebase Cloud Messaging (FCM)"],featured:!0,points:["Developed a full-stack real-time chat application using React.js, Node.js, Express.js, and Socket.IO with one-to-one/group messaging, online status, read receipts, and file sharing.","Integrated Firebase Cloud Messaging (FCM) for instant push notifications across mobile and web clients.","Architected scalable MongoDB document schemas with optimized compound indexing, handling 10,000+ daily messages reliably.","Engineered room management and automatic reconnect fallbacks to preserve message ordering and connection state under network instability."],metrics:[{label:"Concurrent Users",value:"500+"},{label:"Daily Messages",value:"10K+"},{label:"Latency",value:"<100ms"}]},{id:"number-dekho",title:"NumberDekho – Local Services Marketplace",subtitle:"Location-based vendor discovery & marketplace with geo-radius search",category:"Marketplace / Search",tagline:"Scalable Geo-Radius Marketplace Platform for 1,000+ Vendors",technologies:["React.js","Node.js","Laravel","MySQL","Elasticsearch","REST APIs"],featured:!0,points:["Built a location-based marketplace with responsive user interfaces using React.js and scalable backend services using Node.js, Laravel, and RESTful APIs.","Implemented high-precision geo-radius search and spatial queries to connect customers with nearby verified service providers.","Engineered seamless vendor onboarding workflows, multi-tier subscription management, and automated payment gateways.","Integrated Elasticsearch for fuzzy service lookups and query caching, maintaining high responsiveness during peak traffic spikes."],metrics:[{label:"Vendors Onboarded",value:"1,000+"},{label:"Architecture",value:"Hybrid Node/Laravel"},{label:"Search Engine",value:"Elasticsearch"}]},{id:"government-digital-platforms",title:"Government Digital Platforms (UCC, NIHFW, PM SHRI, UDISE+, HRMS)",subtitle:"Mission-critical public digital governance infrastructure for state and central bodies",category:"Enterprise / GovTech",tagline:"High-Security, Citizen-Scale Public Portals & Government Dashboards",technologies:["React.js","Node.js","Laravel","PostgreSQL","MySQL","REST APIs","JWT / RBAC"],featured:!0,points:["Developed and maintained secure full-stack web applications using React.js, Node.js, and Laravel for enterprise and government platforms (UCC Uttarakhand, NIHFW, PM SHRI, UDISE+, HRMS).","Built responsive analytical dashboards and administrative control panels for tracking institutional metrics and workflows.","Developed secure RESTful APIs with strict Role-Based Access Control (RBAC) and audit trails for compliance.","Optimized large-scale PostgreSQL and MySQL databases, implementing query caching and indexing to handle high-volume civic traffic."],metrics:[{label:"Platforms",value:"5+ Major Portals"},{label:"Compliance",value:"Strict RBAC & Audit"},{label:"Databases",value:"PostgreSQL & MySQL"}]}],wd=[{institution:"Chandigarh University",degree:"Master of Computer Applications (MCA)",duration:"2020 – 2022",location:"Punjab, India",focus:"Advanced Software Engineering, Database Systems, Cloud Computing & Web Technologies"},{institution:"SRMU, Lucknow",degree:"Bachelor of Science in Information Technology",duration:"2017 – 2020",location:"Lucknow, India",focus:"Computer Science Fundamentals, Data Structures, OOP, Web Programming & Relational Databases"}];function Pm({onOpenResume:e,onShowToast:t}){const n=(r,l)=>{navigator.clipboard.writeText(r),t(`Copied ${l} to clipboard: ${r}`)};return a.jsxs("section",{id:"hero",className:"hero-section",children:[a.jsxs("div",{className:"container hero-container",children:[a.jsxs("div",{className:"hero-content",children:[a.jsxs("div",{className:"hero-status-pill",children:[a.jsx("span",{className:"pulse-dot"}),a.jsx("span",{className:"status-text",children:"Available for Senior Full Stack & Backend Roles"})]}),a.jsxs("h1",{className:"hero-title",children:["Hi, I'm ",a.jsx("span",{className:"gradient-text",children:T.name})]}),a.jsxs("div",{className:"hero-roles",children:[a.jsx("span",{className:"role-tag",children:"Full Stack Developer"}),a.jsx("span",{className:"role-sep",children:"•"}),a.jsx("span",{className:"role-tag",children:"Node.js Engineer"}),a.jsx("span",{className:"role-sep",children:"•"}),a.jsx("span",{className:"role-tag",children:"Laravel Architect"})]}),a.jsxs("p",{className:"hero-summary",children:["Full Stack Developer with ",a.jsx("strong",{children:"4+ years of hands-on experience"})," architecting, developing, and deploying high-concurrency web applications, robust RESTful APIs, real-time messaging engines, and citizen-scale government platforms."]}),a.jsxs("div",{className:"hero-contact-chips",children:[a.jsxs("button",{onClick:()=>n(T.email,"Email"),className:"contact-chip",title:"Click to copy email",children:[a.jsx(cl,{size:15}),a.jsx("span",{children:T.email})]}),a.jsxs("button",{onClick:()=>n(T.phone,"Phone number"),className:"contact-chip",title:"Click to copy phone",children:[a.jsx(Ja,{size:15}),a.jsx("span",{children:T.phone})]}),a.jsxs("span",{className:"contact-chip static-chip",children:[a.jsx(ir,{size:15}),a.jsx("span",{children:"India"})]})]}),a.jsxs("div",{className:"hero-actions",children:[a.jsxs("button",{onClick:e,className:"btn btn-primary",children:[a.jsx(Zn,{size:18}),a.jsx("span",{children:"View Full Resume"})]}),a.jsxs("a",{href:"#projects",className:"btn btn-secondary",children:[a.jsx("span",{children:"Explore Projects"}),a.jsx(Ru,{size:16})]}),a.jsxs("a",{href:"/Rahul_Chaurasia_Resume.pdf",download:"Rahul_Chaurasia_Resume.pdf",className:"btn btn-outline",title:"Download Resume PDF file",children:[a.jsx(ol,{size:16}),a.jsx("span",{children:"Download PDF"})]})]}),a.jsxs("div",{className:"hero-social-links",children:[a.jsx("span",{className:"social-label",children:"Connect:"}),a.jsxs("a",{href:T.socials.github,target:"_blank",rel:"noopener noreferrer",className:"social-icon-btn","aria-label":"GitHub Profile",children:[a.jsx(Za,{size:18}),a.jsx("span",{children:"github.com/rahulroot7"})]}),a.jsxs("a",{href:T.socials.linkedin,target:"_blank",rel:"noopener noreferrer",className:"social-icon-btn","aria-label":"LinkedIn Profile",children:[a.jsx(eo,{size:18}),a.jsx("span",{children:"LinkedIn"})]})]})]}),a.jsx("div",{className:"hero-visual",children:a.jsxs("div",{className:"profile-card-wrapper",children:[a.jsx("div",{className:"profile-ambient-glow"}),a.jsxs("div",{className:"profile-card glass-card",children:[a.jsxs("div",{className:"profile-img-container",children:[a.jsx("img",{src:T.avatar,alt:T.name,className:"profile-photo",loading:"eager"}),a.jsx("div",{className:"profile-badge-overlay",children:a.jsxs("span",{className:"badge badge-emerald",children:[a.jsx(Cl,{size:12})," Verified 4+ Yrs"]})})]}),a.jsxs("div",{className:"profile-details",children:[a.jsx("h3",{className:"profile-name",children:T.name}),a.jsx("p",{className:"profile-subtitle",children:"Software Developer (Full Stack)"}),a.jsxs("div",{className:"profile-tech-pills",children:[a.jsx("span",{className:"tech-pill",children:"Node.js"}),a.jsx("span",{className:"tech-pill",children:"Laravel"}),a.jsx("span",{className:"tech-pill",children:"React.js"}),a.jsx("span",{className:"tech-pill",children:"Docker"}),a.jsx("span",{className:"tech-pill",children:"Redis"}),a.jsx("span",{className:"tech-pill",children:"PostgreSQL"})]})]})]}),a.jsxs("div",{className:"floating-stat-badge stat-top-right",children:[a.jsx("div",{className:"stat-badge-icon",children:a.jsx(ea,{size:16})}),a.jsxs("div",{className:"stat-badge-content",children:[a.jsx("span",{className:"stat-badge-number",children:"30% Faster"}),a.jsx("span",{className:"stat-badge-label",children:"API Response via Redis"})]})]}),a.jsxs("div",{className:"floating-stat-badge stat-bottom-left",children:[a.jsx("div",{className:"stat-badge-icon",children:a.jsx(zl,{size:16})}),a.jsxs("div",{className:"stat-badge-content",children:[a.jsx("span",{className:"stat-badge-number",children:"40% Reduced"}),a.jsx("span",{className:"stat-badge-label",children:"DB Query Exec Time"})]})]})]})})]}),a.jsx("div",{className:"container hero-metrics-container",children:a.jsx("div",{className:"metrics-grid glass-card",children:T.stats.map((r,l)=>a.jsxs("div",{className:"metric-box",children:[a.jsx("div",{className:"metric-value-row",children:a.jsx("span",{className:"metric-number gradient-text",children:r.value})}),a.jsx("div",{className:"metric-label",children:r.label}),a.jsx("div",{className:"metric-detail",children:r.detail})]},l))})}),a.jsx("style",{children:`
        .hero-section {
          padding-top: 8rem;
          padding-bottom: 4rem;
          position: relative;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3.5rem;
          align-items: center;
        }

        @media (min-width: 992px) {
          .hero-container {
            grid-template-columns: 1.15fr 0.85fr;
            gap: 4rem;
          }
        }

        .hero-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.25);
          padding: 0.4rem 1rem;
          border-radius: var(--radius-full);
          margin-bottom: 1.25rem;
        }

        .status-text {
          font-size: 0.825rem;
          font-weight: 600;
          color: var(--accent-emerald);
        }

        .hero-title {
          font-size: 2.75rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.15;
          margin-bottom: 0.75rem;
        }

        @media (min-width: 768px) {
          .hero-title {
            font-size: 3.75rem;
          }
        }

        .hero-roles {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .role-tag {
          color: var(--accent-cyan);
        }

        .role-sep {
          color: var(--text-muted);
        }

        .hero-summary {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          max-width: 620px;
        }

        .hero-summary strong {
          color: var(--text-primary);
        }

        .hero-contact-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
          margin-bottom: 2rem;
        }

        .contact-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-subtle);
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-sm);
          font-size: 0.825rem;
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }

        .contact-chip:hover {
          color: var(--accent-cyan);
          border-color: var(--border-hover);
          background: var(--bg-secondary);
        }

        .static-chip {
          cursor: default;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
          margin-bottom: 2rem;
        }

        .hero-social-links {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        .social-label {
          font-weight: 500;
        }

        .social-icon-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          color: var(--text-secondary);
          padding: 0.35rem 0.65rem;
          border-radius: var(--radius-sm);
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          font-size: 0.825rem;
          transition: all var(--transition-fast);
        }

        .social-icon-btn:hover {
          color: var(--accent-cyan);
          border-color: var(--border-hover);
        }

        /* Profile Visual Column */
        .hero-visual {
          display: flex;
          justify-content: center;
          position: relative;
        }

        .profile-card-wrapper {
          position: relative;
          max-width: 380px;
          width: 100%;
        }

        .profile-ambient-glow {
          position: absolute;
          inset: -15px;
          border-radius: var(--radius-lg);
          background: linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(99, 102, 241, 0.2));
          filter: blur(28px);
          z-index: 0;
          opacity: 0.8;
        }

        .profile-card {
          position: relative;
          z-index: 1;
          padding: 1.25rem;
          border-radius: var(--radius-lg);
          background: var(--bg-card);
        }

        .profile-img-container {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
          aspect-ratio: 3/4;
          background: #1e293b;
          border: 1px solid var(--border-subtle);
        }

        .profile-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
          transition: transform 0.4s ease;
        }

        .profile-card:hover .profile-photo {
          transform: scale(1.02);
        }

        .profile-badge-overlay {
          position: absolute;
          bottom: 0.85rem;
          left: 0.85rem;
        }

        .profile-details {
          padding-top: 1rem;
        }

        .profile-name {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .profile-subtitle {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 0.75rem;
        }

        .profile-tech-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }

        .tech-pill {
          font-size: 0.75rem;
          padding: 0.2rem 0.55rem;
          border-radius: var(--radius-sm);
          background: var(--bg-tertiary);
          color: var(--text-secondary);
          font-family: var(--font-mono);
          border: 1px solid var(--border-subtle);
        }

        /* Floating Badges */
        .floating-stat-badge {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: var(--bg-card);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid var(--border-subtle);
          padding: 0.65rem 1rem;
          border-radius: var(--radius-md);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          z-index: 2;
          max-width: 210px;
          animation: float 4s ease-in-out infinite alternate;
        }

        @keyframes float {
          from { transform: translateY(0); }
          to { transform: translateY(-8px); }
        }

        .stat-top-right {
          top: -1.5rem;
          right: -1.5rem;
        }

        .stat-bottom-left {
          bottom: 2rem;
          left: -2rem;
          animation-delay: -2s;
        }

        @media (max-width: 640px) {
          .stat-top-right, .stat-bottom-left {
            display: none;
          }
        }

        .stat-badge-icon {
          width: 34px;
          height: 34px;
          border-radius: var(--radius-sm);
          background: rgba(56, 189, 248, 0.15);
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .stat-badge-content {
          display: flex;
          flex-direction: column;
        }

        .stat-badge-number {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .stat-badge-label {
          font-size: 0.7rem;
          color: var(--text-muted);
          line-height: 1.2;
        }

        /* Metrics Bar */
        .hero-metrics-container {
          margin-top: 3.5rem;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          padding: 1.5rem 1rem;
          border-radius: var(--radius-lg);
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .metrics-grid {
            grid-template-columns: repeat(4, 1fr);
            padding: 2rem;
          }
        }

        .metric-box {
          text-align: center;
          padding: 0.5rem;
        }

        .metric-value-row {
          margin-bottom: 0.35rem;
        }

        .metric-number {
          font-size: 2.25rem;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .metric-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .metric-detail {
          font-size: 0.75rem;
          color: var(--text-muted);
        }
      `})]})}function Rm({onOpenResume:e}){const t=[{icon:a.jsx(Nm,{size:22,className:"pillar-icon-svg"}),title:"Backend & Microservices",desc:"Robust RESTful APIs, microservices, and asynchronous queue processing with Node.js, Express, Fastify, and Laravel (PHP 8). Architecture built on clean code, repository patterns, and strict role-based access control (RBAC/JWT)."},{icon:a.jsx(Em,{size:22,className:"pillar-icon-svg"}),title:"Real-Time & High Concurrency",desc:"Architect of sub-100ms real-time messaging engines using Socket.IO, WebSockets, and RabbitMQ message brokers, successfully supporting 500+ simultaneous connections and 10,000+ daily events."},{icon:a.jsx(zl,{size:22,className:"pillar-icon-svg"}),title:"Database & Query Tuning",desc:"Deep proficiency in PostgreSQL, MySQL, MongoDB, and Redis. Proven track record reducing database query execution times by 40% and boosting API response speeds by 30% through index optimization and schema design."},{icon:a.jsx(fd,{size:22,className:"pillar-icon-svg"}),title:"Enterprise & Government Scale",desc:"Delivering mission-critical platforms for state and national government projects (UCC Uttarakhand, NIHFW, PM SHRI, UDISE+, HRMS). Engineered for audit-grade security, Dockerized CI/CD, and citizen-scale reliability."}];return a.jsxs("section",{id:"about",className:"section-wrapper about-section",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header",children:[a.jsxs("div",{className:"section-tag",children:[a.jsx(pm,{size:14}),a.jsx("span",{children:"Professional Profile"})]}),a.jsxs("h2",{className:"section-title",children:["Engineering for ",a.jsx("span",{className:"gradient-text",children:"Scale & Reliability"})]}),a.jsx("p",{className:"section-description",children:"A comprehensive look at my background, architectural philosophies, and enterprise track record."})]}),a.jsxs("div",{className:"about-grid",children:[a.jsxs("div",{className:"about-summary-card glass-card",children:[a.jsxs("h3",{className:"card-heading",children:[a.jsx(Iu,{size:20,className:"card-heading-icon"}),a.jsx("span",{children:"Professional Summary"})]}),a.jsx("p",{className:"summary-paragraph",children:kd}),a.jsxs("div",{className:"key-attributes-list",children:[a.jsxs("div",{className:"attribute-item",children:[a.jsx(bn,{size:16,className:"attr-check"}),a.jsx("span",{children:"Enterprise & Government Digital Platforms Developer"})]}),a.jsxs("div",{className:"attribute-item",children:[a.jsx(bn,{size:16,className:"attr-check"}),a.jsx("span",{children:"Experienced in MVC, Repository Pattern & Microservices"})]}),a.jsxs("div",{className:"attribute-item",children:[a.jsx(bn,{size:16,className:"attr-check"}),a.jsx("span",{children:"Docker Containerization & GitHub Actions CI/CD Automations"})]}),a.jsxs("div",{className:"attribute-item",children:[a.jsx(bn,{size:16,className:"attr-check"}),a.jsx("span",{children:"Redis In-Memory Caching & Elastic Database Optimization"})]})]}),a.jsx("div",{className:"summary-footer",children:a.jsxs("button",{onClick:e,className:"btn btn-secondary btn-sm",children:[a.jsx(Zn,{size:15}),a.jsx("span",{children:"Inspect Full Credentials"})]})})]}),a.jsxs("div",{className:"about-specs-card glass-card",children:[a.jsxs("h3",{className:"card-heading",children:[a.jsx(ta,{size:20,className:"card-heading-icon"}),a.jsx("span",{children:"Snapshot Details"})]}),a.jsxs("div",{className:"specs-list",children:[a.jsxs("div",{className:"spec-row",children:[a.jsx("span",{className:"spec-title",children:"Full Name"}),a.jsx("span",{className:"spec-value",children:"Rahul Chaurasia"})]}),a.jsxs("div",{className:"spec-row",children:[a.jsx("span",{className:"spec-title",children:"Experience"}),a.jsx("span",{className:"spec-value",children:"4+ Years (2022 – Present)"})]}),a.jsxs("div",{className:"spec-row",children:[a.jsx("span",{className:"spec-title",children:"Current Role"}),a.jsx("span",{className:"spec-value",children:"Full Stack Developer @ ECHT TECH"})]}),a.jsxs("div",{className:"spec-row",children:[a.jsx("span",{className:"spec-title",children:"Primary Focus"}),a.jsx("span",{className:"spec-value",children:"Node.js, Laravel, React.js & DB Tuning"})]}),a.jsxs("div",{className:"spec-row",children:[a.jsx("span",{className:"spec-title",children:"Post Graduate"}),a.jsx("span",{className:"spec-value",children:"MCA (Chandigarh University, 2020–22)"})]}),a.jsxs("div",{className:"spec-row",children:[a.jsx("span",{className:"spec-title",children:"Under Graduate"}),a.jsx("span",{className:"spec-value",children:"B.Sc IT (SRMU, Lucknow, 2017–20)"})]}),a.jsxs("div",{className:"spec-row",children:[a.jsx("span",{className:"spec-title",children:"Location"}),a.jsxs("span",{className:"spec-value",children:[a.jsx(ir,{size:14,className:"inline-icon"})," India (Remote / Onsite)"]})]})]})]})]}),a.jsx("div",{className:"pillars-grid",children:t.map((n,r)=>a.jsxs("div",{className:"pillar-card glass-card",children:[a.jsx("div",{className:"pillar-icon-box",children:n.icon}),a.jsx("h4",{className:"pillar-title",children:n.title}),a.jsx("p",{className:"pillar-desc",children:n.desc})]},r))})]}),a.jsx("style",{children:`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 1.35fr 0.85fr;
          }
        }

        .about-summary-card,
        .about-specs-card {
          padding: 2.25rem;
        }

        .card-heading {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1.25rem;
          padding-bottom: 0.85rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        .card-heading-icon {
          color: var(--accent-cyan);
        }

        .summary-paragraph {
          font-size: 1rem;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .key-attributes-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.75rem;
        }

        .attribute-item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.925rem;
          color: var(--text-primary);
        }

        .attr-check {
          color: var(--accent-emerald);
          flex-shrink: 0;
        }

        .summary-footer {
          padding-top: 1rem;
          border-top: 1px solid var(--border-subtle);
        }

        .specs-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .spec-row {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        @media (min-width: 480px) {
          .spec-row {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }

        .spec-title {
          font-size: 0.825rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .spec-value {
          font-size: 0.925rem;
          font-weight: 600;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .inline-icon {
          color: var(--accent-cyan);
        }

        /* Pillars */
        .pillars-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 640px) {
          .pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .pillars-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .pillar-card {
          padding: 1.75rem 1.5rem;
          display: flex;
          flex-direction: column;
        }

        .pillar-icon-box {
          width: 46px;
          height: 46px;
          border-radius: var(--radius-md);
          background: rgba(56, 189, 248, 0.1);
          border: 1px solid rgba(56, 189, 248, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          margin-bottom: 1.25rem;
        }

        .pillar-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.65rem;
        }

        .pillar-desc {
          font-size: 0.875rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }
      `})]})}function Mm(){const[e,t]=I.useState("All"),[n,r]=I.useState(""),l={Languages:a.jsx(ms,{size:18}),Backend:a.jsx(ea,{size:18}),Architecture:a.jsx(vm,{size:18}),Databases:a.jsx(zl,{size:18}),"Cloud & DevOps":a.jsx(fm,{size:18}),"Messaging & Tools":a.jsx(ms,{size:18}),"AI & GenAI":a.jsx(um,{size:18}),Frontend:a.jsx(xm,{size:18})},i=["All",...hs.map(s=>s.category)],o=hs.map(s=>{if(!(e==="All"||s.category===e))return null;let d=s.skills.filter(g=>g.toLowerCase().includes(n.toLowerCase()));return d.length===0?null:{...s,skills:d}}).filter(Boolean);return a.jsxs("section",{id:"skills",className:"section-wrapper skills-section",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header",children:[a.jsxs("div",{className:"section-tag",children:[a.jsx(ea,{size:14}),a.jsx("span",{children:"Technical Competencies"})]}),a.jsxs("h2",{className:"section-title",children:["Skills & ",a.jsx("span",{className:"gradient-text",children:"Technology Stack"})]}),a.jsx("p",{className:"section-description",children:"Comprehensive skill set aligned exactly with enterprise production demands, microservices, and high-concurrency systems."})]}),a.jsxs("div",{className:"skills-controls",children:[a.jsxs("div",{className:"skills-search-box",children:[a.jsx(ps,{size:16,className:"search-icon"}),a.jsx("input",{type:"text",placeholder:"Search skills (e.g., Redis, Docker, Fastify, Laravel, Kafka)...",value:n,onChange:s=>r(s.target.value),className:"skills-search-input","aria-label":"Filter skills"}),n&&a.jsx("button",{onClick:()=>r(""),className:"search-clear-btn","aria-label":"Clear search",children:"×"})]}),a.jsx("div",{className:"skills-tabs",role:"tablist",children:i.map(s=>a.jsx("button",{onClick:()=>t(s),className:`skill-tab-btn ${e===s?"active":""}`,role:"tab","aria-selected":e===s,children:s},s))})]}),a.jsx("div",{className:"skills-categories-grid",children:o.length>0?o.map(s=>a.jsxs("div",{className:"skill-category-card glass-card",children:[a.jsxs("div",{className:"category-header",children:[a.jsx("div",{className:"category-icon-wrapper",children:l[s.category]||a.jsx(mm,{size:18})}),a.jsxs("div",{className:"category-title-wrap",children:[a.jsx("h3",{className:"category-title",children:s.category}),a.jsxs("span",{className:"category-count",children:[s.skills.length," skills"]})]})]}),a.jsx("div",{className:"skills-pill-wrap",children:s.skills.map(c=>a.jsxs("div",{className:"skill-pill",children:[a.jsx("span",{className:"skill-bullet",children:"•"}),a.jsx("span",{className:"skill-name",children:c})]},c))})]},s.category)):a.jsxs("div",{className:"no-skills-found glass-card",children:[a.jsx(ps,{size:32,className:"no-results-icon"}),a.jsxs("p",{children:['No skills matching "',a.jsx("strong",{children:n}),'" in the selected category.']}),a.jsx("button",{onClick:()=>{r(""),t("All")},className:"btn btn-secondary btn-sm",children:"Reset Filter"})]})}),a.jsxs("div",{className:"skills-summary-banner glass-card",children:[a.jsx("div",{className:"banner-icon",children:a.jsx(Sm,{size:24})}),a.jsxs("div",{className:"banner-text",children:[a.jsx("h4",{children:"Core Production Stack"}),a.jsx("p",{children:"Node.js • Express.js • Laravel 10/11 • React.js • MySQL / PostgreSQL • Redis • Docker • GitHub Actions CI/CD • Socket.IO • RabbitMQ"})]})]})]}),a.jsx("style",{children:`
        .skills-controls {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .skills-search-box {
          position: relative;
          max-width: 500px;
          margin: 0 auto;
          width: 100%;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }

        .skills-search-input {
          width: 100%;
          padding: 0.75rem 2.5rem 0.75rem 2.8rem;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          color: var(--text-primary);
          font-family: inherit;
          font-size: 0.925rem;
          outline: none;
          transition: border-color var(--transition-fast);
        }

        .skills-search-input:focus {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 15px rgba(56, 189, 248, 0.2);
        }

        .search-clear-btn {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
          font-size: 1.25rem;
          line-height: 1;
        }

        .skills-tabs {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
        }

        .skill-tab-btn {
          padding: 0.45rem 0.95rem;
          border-radius: var(--radius-full);
          font-size: 0.825rem;
          font-weight: 600;
          color: var(--text-secondary);
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          transition: all var(--transition-fast);
        }

        .skill-tab-btn:hover {
          color: var(--text-primary);
          border-color: var(--border-hover);
        }

        .skill-tab-btn.active {
          color: #ffffff;
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-indigo));
          border-color: transparent;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .skills-categories-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        @media (min-width: 640px) {
          .skills-categories-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .skills-categories-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .skill-category-card {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        .category-icon-wrapper {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          background: rgba(56, 189, 248, 0.1);
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .category-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.2;
        }

        .category-count {
          font-size: 0.7rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        .skills-pill-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }

        .skill-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.65rem;
          border-radius: var(--radius-sm);
          background: var(--bg-tertiary);
          border: 1px solid var(--border-subtle);
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }

        .skill-pill:hover {
          color: var(--accent-cyan);
          border-color: var(--border-hover);
          background: var(--bg-secondary);
          transform: translateY(-1px);
        }

        .skill-bullet {
          color: var(--accent-cyan);
          font-size: 0.9rem;
          line-height: 1;
        }

        .no-skills-found {
          grid-column: 1 / -1;
          padding: 3rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          color: var(--text-secondary);
        }

        .no-results-icon {
          color: var(--text-muted);
        }

        /* Banner */
        .skills-summary-banner {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem 2rem;
          background: linear-gradient(135deg, rgba(56, 189, 248, 0.08), rgba(99, 102, 241, 0.08));
          border: 1px solid rgba(56, 189, 248, 0.2);
        }

        .banner-icon {
          color: var(--accent-cyan);
          flex-shrink: 0;
        }

        .banner-text h4 {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .banner-text p {
          font-size: 0.875rem;
          color: var(--text-secondary);
          font-family: var(--font-mono);
        }

        @media (max-width: 640px) {
          .skills-summary-banner {
            flex-direction: column;
            text-align: center;
          }
        }
      `})]})}function Dm(){const[e,t]=I.useState(Cn[0].id),n=Cn.find(r=>r.id===e)||Cn[0];return a.jsxs("section",{id:"experience",className:"section-wrapper experience-section",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header",children:[a.jsxs("div",{className:"section-tag",children:[a.jsx(Iu,{size:14}),a.jsx("span",{children:"Employment History"})]}),a.jsxs("h2",{className:"section-title",children:["Professional ",a.jsx("span",{className:"gradient-text",children:"Experience"})]}),a.jsx("p",{className:"section-description",children:"4+ years of driving full-stack engineering, performance optimization, and architectural scalability across enterprise & production systems."})]}),a.jsxs("div",{className:"experience-layout",children:[a.jsxs("div",{className:"experience-nav",children:[Cn.map(r=>{const l=r.id===e;return a.jsxs("button",{onClick:()=>t(r.id),className:`exp-nav-item glass-card ${l?"active":""}`,children:[a.jsx("div",{className:"exp-nav-indicator"}),a.jsxs("div",{className:"exp-nav-body",children:[a.jsx("div",{className:"exp-nav-company",children:r.company}),a.jsx("div",{className:"exp-nav-role",children:r.role}),a.jsxs("div",{className:"exp-nav-period",children:[a.jsx(Zi,{size:12}),a.jsx("span",{children:r.period})]})]}),r.featuredBadge&&a.jsx("span",{className:"badge badge-emerald exp-featured-tag",children:r.featuredBadge})]},r.id)}),a.jsxs("div",{className:"exp-quick-metrics glass-card",children:[a.jsxs("div",{className:"quick-metrics-title",children:[a.jsx(Cm,{size:16,className:"trending-icon"}),a.jsx("span",{children:"Career Impact Milestones"})]}),a.jsxs("ul",{className:"quick-metrics-list",children:[a.jsxs("li",{children:[a.jsx("strong",{children:"30% API boost"})," via Redis & query tuning"]}),a.jsxs("li",{children:[a.jsx("strong",{children:"40% DB latency reduction"})," with index design"]}),a.jsxs("li",{children:[a.jsx("strong",{children:"50% faster deployments"})," via Docker + CI/CD"]}),a.jsxs("li",{children:[a.jsx("strong",{children:"500+ real-time users"})," with sub-100ms latency"]}),a.jsxs("li",{children:[a.jsx("strong",{children:"35% payroll processing speedup"})," at XEAM"]})]})]})]}),a.jsxs("div",{className:"experience-detail-card glass-card",children:[a.jsxs("div",{className:"exp-detail-header",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"exp-company-row",children:[a.jsx("h3",{className:"exp-company-title",children:n.company}),n.featuredBadge&&a.jsx("span",{className:"badge badge-emerald",children:n.featuredBadge})]}),a.jsx("div",{className:"exp-role-title gradient-text",children:n.role})]}),a.jsxs("div",{className:"exp-meta-badge-wrap",children:[a.jsxs("div",{className:"exp-meta-pill",children:[a.jsx(Zi,{size:14}),a.jsx("span",{children:n.period})]}),a.jsxs("div",{className:"exp-meta-pill",children:[a.jsx(ir,{size:14}),a.jsx("span",{children:n.location})]}),a.jsxs("div",{className:"exp-meta-pill",children:[a.jsx(dm,{size:14}),a.jsx("span",{children:n.type})]})]})]}),a.jsx("div",{className:"exp-detail-divider"}),a.jsxs("div",{className:"exp-highlights-list",children:[a.jsx("h4",{className:"highlights-header",children:"Key Responsibilities & Deliverables:"}),n.highlights.map((r,l)=>a.jsxs("div",{className:"highlight-item",children:[a.jsx("div",{className:"highlight-bullet-wrap",children:a.jsx(Cl,{size:16,className:"highlight-bullet-icon"})}),a.jsx("div",{className:"highlight-text",children:r})]},l))]}),a.jsxs("div",{className:"exp-tech-section",children:[a.jsx("h4",{className:"tech-section-header",children:"Technologies & Tools Deployed:"}),a.jsx("div",{className:"exp-tech-tags",children:n.techStack.map(r=>a.jsx("span",{className:"exp-tech-tag",children:r},r))})]})]})]})]}),a.jsx("style",{children:`
        .experience-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 992px) {
          .experience-layout {
            grid-template-columns: 360px 1fr;
            gap: 2.5rem;
          }
        }

        /* Nav list */
        .experience-nav {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .exp-nav-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
          text-align: left;
          position: relative;
          overflow: hidden;
          transition: all var(--transition-fast);
        }

        .exp-nav-item.active {
          border-color: var(--accent-cyan);
          background: var(--bg-card-hover);
        }

        .exp-nav-indicator {
          width: 4px;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          background: transparent;
          transition: background var(--transition-fast);
        }

        .exp-nav-item.active .exp-nav-indicator {
          background: linear-gradient(to bottom, var(--accent-cyan), var(--accent-indigo));
        }

        .exp-nav-body {
          flex: 1;
        }

        .exp-nav-company {
          font-weight: 700;
          font-size: 1rem;
          color: var(--text-primary);
          line-height: 1.3;
          margin-bottom: 0.25rem;
        }

        .exp-nav-role {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 0.45rem;
        }

        .exp-nav-period {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        .exp-featured-tag {
          align-self: flex-start;
          font-size: 0.7rem;
        }

        /* Quick metrics callout */
        .exp-quick-metrics {
          padding: 1.5rem;
          margin-top: 0.5rem;
          background: rgba(16, 185, 129, 0.04);
          border: 1px solid rgba(16, 185, 129, 0.15);
        }

        .quick-metrics-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--accent-emerald);
          margin-bottom: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .trending-icon {
          color: var(--accent-emerald);
        }

        .quick-metrics-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          font-size: 0.825rem;
          color: var(--text-secondary);
        }

        .quick-metrics-list li {
          position: relative;
          padding-left: 1.1rem;
        }

        .quick-metrics-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--accent-emerald);
          font-weight: bold;
        }

        .quick-metrics-list strong {
          color: var(--text-primary);
        }

        /* Detail card */
        .experience-detail-card {
          padding: 2.25rem;
        }

        .exp-detail-header {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        @media (min-width: 640px) {
          .exp-detail-header {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
          }
        }

        .exp-company-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 0.25rem;
        }

        .exp-company-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .exp-role-title {
          font-size: 1.15rem;
          font-weight: 700;
        }

        .exp-meta-badge-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .exp-meta-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-sm);
          background: var(--bg-tertiary);
          border: 1px solid var(--border-subtle);
          font-size: 0.8rem;
          color: var(--text-secondary);
          font-family: var(--font-mono);
        }

        .exp-detail-divider {
          height: 1px;
          background: var(--border-subtle);
          margin: 1.75rem 0;
        }

        .exp-highlights-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .highlights-header,
        .tech-section-header {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          font-size: 0.825rem;
          color: var(--text-muted);
        }

        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .highlight-bullet-wrap {
          margin-top: 0.25rem;
          flex-shrink: 0;
        }

        .highlight-bullet-icon {
          color: var(--accent-cyan);
        }

        .highlight-text {
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--text-secondary);
        }

        .exp-tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .exp-tech-tag {
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-sm);
          background: rgba(56, 189, 248, 0.08);
          border: 1px solid rgba(56, 189, 248, 0.2);
          color: var(--accent-cyan);
          font-family: var(--font-mono);
        }
      `})]})}function Lm({onOpenResume:e}){const[t,n]=I.useState("All"),r=["All","Real-Time / Full Stack","Marketplace / Search","Enterprise / GovTech"],l=t==="All"?ra:ra.filter(i=>i.category===t);return a.jsxs("section",{id:"projects",className:"section-wrapper projects-section",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header",children:[a.jsxs("div",{className:"section-tag",children:[a.jsx(hm,{size:14}),a.jsx("span",{children:"Featured Case Studies"})]}),a.jsxs("h2",{className:"section-title",children:["Key Engineering ",a.jsx("span",{className:"gradient-text",children:"Projects"})]}),a.jsx("p",{className:"section-description",children:"Production-grade systems delivering high throughput, real-time communication, and secure enterprise governance."})]}),a.jsx("div",{className:"projects-filter-bar",children:r.map(i=>a.jsx("button",{onClick:()=>n(i),className:`project-filter-btn ${t===i?"active":""}`,children:i},i))}),a.jsx("div",{className:"projects-grid",children:l.map(i=>a.jsxs("div",{className:"project-card glass-card",children:[a.jsxs("div",{className:"project-card-top",children:[a.jsx("div",{className:"project-category-badge",children:a.jsx("span",{className:"badge badge-cyan",children:i.category})}),a.jsx("div",{className:"project-header-actions",children:a.jsx("span",{className:"project-tagline",children:i.tagline})})]}),a.jsx("h3",{className:"project-title",children:i.title}),a.jsx("p",{className:"project-subtitle",children:i.subtitle}),a.jsx("div",{className:"project-metrics-row",children:i.metrics.map((o,s)=>a.jsxs("div",{className:"project-metric-item",children:[a.jsx("span",{className:"metric-val gradient-text",children:o.value}),a.jsx("span",{className:"metric-lbl",children:o.label})]},s))}),a.jsx("div",{className:"project-points-list",children:i.points.map((o,s)=>a.jsxs("div",{className:"project-point-item",children:[a.jsx(Cl,{size:15,className:"point-icon"}),a.jsx("span",{className:"point-text",children:o})]},s))}),a.jsx("div",{className:"project-tech-footer",children:a.jsx("div",{className:"project-tech-chips",children:i.technologies.map(o=>a.jsx("span",{className:"tech-chip",children:o},o))})})]},i.id))}),a.jsxs("div",{className:"project-note-banner glass-card",children:[a.jsx("div",{className:"note-icon",children:a.jsx(fd,{size:22})}),a.jsxs("div",{className:"note-text",children:[a.jsx("h4",{children:"Enterprise Confidentiality & Compliance"}),a.jsx("p",{children:"Government platforms and proprietary enterprise ERP/marketplaces are deployed within secure on-premise and VPC environments. Architecture patterns, schemas, and live demonstration walk-throughs can be provided during technical discussions."})]}),a.jsx("button",{onClick:e,className:"btn btn-secondary btn-sm",children:"Contact for Details"})]})]}),a.jsx("style",{children:`
        .projects-filter-bar {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.6rem;
          margin-bottom: 2.5rem;
        }

        .project-filter-btn {
          padding: 0.45rem 1rem;
          border-radius: var(--radius-full);
          font-size: 0.825rem;
          font-weight: 600;
          color: var(--text-secondary);
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          transition: all var(--transition-fast);
        }

        .project-filter-btn:hover {
          color: var(--text-primary);
          border-color: var(--border-hover);
        }

        .project-filter-btn.active {
          color: #ffffff;
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-indigo));
          border-color: transparent;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        @media (min-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .project-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .project-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .project-tagline {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
          text-align: right;
        }

        .project-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.3;
          margin-bottom: 0.5rem;
        }

        .project-subtitle {
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        /* Metrics row */
        .project-metrics-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          background: var(--bg-tertiary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 0.85rem 0.5rem;
          text-align: center;
          gap: 0.25rem;
          margin-bottom: 1.5rem;
        }

        .project-metric-item {
          display: flex;
          flex-direction: column;
        }

        .metric-val {
          font-size: 1.15rem;
          font-weight: 800;
          line-height: 1.2;
        }

        .metric-lbl {
          font-size: 0.675rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        /* Points list */
        .project-points-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.75rem;
          flex: 1;
        }

        .project-point-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
        }

        .point-icon {
          color: var(--accent-cyan);
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        .point-text {
          font-size: 0.875rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        /* Tech chips */
        .project-tech-footer {
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-subtle);
        }

        .project-tech-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .tech-chip {
          font-size: 0.75rem;
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-sm);
          background: var(--bg-tertiary);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          font-family: var(--font-mono);
        }

        /* Note banner */
        .project-note-banner {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem 2rem;
          background: rgba(15, 23, 42, 0.4);
          border: 1px dashed var(--border-subtle);
        }

        .note-icon {
          color: var(--accent-emerald);
          flex-shrink: 0;
        }

        .note-text {
          flex: 1;
        }

        .note-text h4 {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .note-text p {
          font-size: 0.85rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .project-note-banner {
            flex-direction: column;
            text-align: center;
          }
        }
      `})]})}function Tm(){const[e,t]=I.useState("realtime"),n=[{id:"realtime",title:"Real-Time Messaging & WebSockets Engine",subtitle:"Engineered for sub-100ms latency across 500+ concurrent users (VAK Chat & Live Notifications)",icon:a.jsx(om,{size:20}),diagram:[{label:"Client (React.js)",role:"Bidirectional WS Handshake",status:"Active"},{label:"Node.js / Socket.IO",role:"Room State & Event Broker",status:"Sub-100ms"},{label:"RabbitMQ / Redis",role:"Pub/Sub & Channel Sync",status:"In-Memory"},{label:"MongoDB / FCM",role:"Compound Indexed Store + Push",status:"Persistent"}],points:["Maintains persistent full-duplex WebSocket connections with automatic fallback polling for erratic network connections.","Separates message broadcast pipelines from persistence writes to avoid I/O blocking on the Node.js event loop.","FCM (Firebase Cloud Messaging) integration ensures mobile & background users receive push alerts when offline.","Supports message read receipts, typing indicators, and user presence with sub-100ms roundtrip latency."]},{id:"caching",title:"Database Indexing & Redis Caching Layer",subtitle:"Achieved 30% faster API responses and 40% reduction in query execution times",icon:a.jsx(zl,{size:20}),diagram:[{label:"API Request",role:"RESTful Call with JWT RBAC",status:"Ingress"},{label:"Redis Cache",role:"Cache-Aside Key-Value Lookup",status:"Cache Hit 30% Boost"},{label:"Query Optimizer",role:"Composite Indexing & Explain Plans",status:"40% Drop"},{label:"MySQL / Postgres",role:"Normalized ACID Storage",status:"Reliable"}],points:["Implemented cache-aside strategy for high-frequency government and marketplace endpoints.","Conducted thorough EXPLAIN ANALYZE reviews on complex multi-table joins, establishing compound B-Tree indexes.","Applied database connection pooling and schema normalizations to prevent thread starvation under peak loads.","Reduced heavy enterprise payroll and reporting query latency by 35-40% at XEAM and ECHT TECH."]},{id:"async",title:"Asynchronous Processing & Message Queues",subtitle:"Decoupling compute-heavy workflows via RabbitMQ and Laravel Queue Workers",icon:a.jsx(zm,{size:20}),diagram:[{label:"Producer Service",role:"Dispatches Event Message",status:"Non-Blocking"},{label:"RabbitMQ Broker",role:"Durable Queues & Dead-Letter Ex",status:"Zero Data Loss"},{label:"Worker Clusters",role:"Asynchronous Background Jobs",status:"Auto-Retry"},{label:"Notification / DB",role:"Event Dispatch & Audit Log",status:"Committed"}],points:["Offloaded vendor notifications, report generation, and third-party SMS/email dispatches to background queues.","Implemented Dead-Letter Exchanges (DLX) and exponential backoff retry policies to handle transient upstream API failures.","Ensures core web application APIs remain lightweight and respond to users in single-digit milliseconds.","Managed background cron jobs and queue workers with fault-tolerant supervisor daemons."]},{id:"devops",title:"Docker Containerization & CI/CD Pipelines",subtitle:"50% reduction in deployment cycle times with GitHub Actions and Nginx reverse proxy",icon:a.jsx(gm,{size:20}),diagram:[{label:"Git Commit",role:"Feature Branch PR Verification",status:"Automated Test"},{label:"GitHub Actions",role:"Multi-Stage Docker Image Build",status:"CI Pipeline"},{label:"Registry / Server",role:"Zero-Downtime Rolling Update",status:"50% Time Saved"},{label:"Nginx + PM2",role:"SSL Termination & Process Cluster",status:"99.9% Uptime"}],points:["Containerized multi-tier Node.js and Laravel applications with multi-stage Dockerfiles for minimal production footprint.","Automated testing, linting, build verification, and deployment using custom GitHub Actions workflows.","Configured Nginx as reverse proxy with SSL termination, Gzip/Brotli compression, and rate limiting headers.","PM2 cluster mode utilized for zero-downtime reloads and automatic core-balanced worker recovery."]}],r=n.find(l=>l.id===e)||n[0];return a.jsxs("section",{id:"architecture",className:"section-wrapper architecture-section",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header",children:[a.jsxs("div",{className:"section-tag",children:[a.jsx(wm,{size:14}),a.jsx("span",{children:"Systems Engineering"})]}),a.jsxs("h2",{className:"section-title",children:["Architecture & ",a.jsx("span",{className:"gradient-text",children:"System Design"})]}),a.jsx("p",{className:"section-description",children:"Hands-on patterns behind 4+ years of building production-grade services that handle real-time traffic and citizen-scale platforms."})]}),a.jsx("div",{className:"arch-tabs-container",children:n.map(l=>a.jsxs("button",{onClick:()=>t(l.id),className:`arch-tab-btn ${e===l.id?"active":""}`,children:[a.jsx("span",{className:"arch-tab-icon",children:l.icon}),a.jsx("span",{className:"arch-tab-text",children:l.title.split("&")[0]})]},l.id))}),a.jsxs("div",{className:"arch-display-card glass-card",children:[a.jsxs("div",{className:"arch-display-header",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"arch-title",children:r.title}),a.jsx("p",{className:"arch-subtitle",children:r.subtitle})]}),a.jsx("span",{className:"badge badge-cyan",children:"Production Proven"})]}),a.jsx("div",{className:"arch-flow-diagram",children:r.diagram.map((l,i)=>a.jsxs(Cs.Fragment,{children:[a.jsxs("div",{className:"diagram-node",children:[a.jsx("div",{className:"node-label",children:l.label}),a.jsx("div",{className:"node-role",children:l.role}),a.jsx("div",{className:"node-status",children:l.status})]}),i<r.diagram.length-1&&a.jsx("div",{className:"diagram-connector",children:a.jsx(Ru,{size:18,className:"connector-arrow"})})]},i))}),a.jsx("div",{className:"arch-points-grid",children:r.points.map((l,i)=>a.jsxs("div",{className:"arch-point-item",children:[a.jsx(bn,{size:16,className:"point-icon"}),a.jsx("span",{className:"point-text",children:l})]},i))})]})]}),a.jsx("style",{children:`
        .arch-tabs-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.65rem;
          margin-bottom: 2.5rem;
        }

        .arch-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.65rem 1.25rem;
          border-radius: var(--radius-md);
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-secondary);
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          transition: all var(--transition-fast);
        }

        .arch-tab-btn:hover {
          color: var(--text-primary);
          border-color: var(--border-hover);
        }

        .arch-tab-btn.active {
          color: #ffffff;
          background: linear-gradient(135deg, #0284c7 0%, #4f46e5 100%);
          border-color: transparent;
          box-shadow: 0 4px 15px rgba(79, 70, 229, 0.35);
        }

        .arch-tab-icon {
          display: flex;
        }

        .arch-display-card {
          padding: 2.5rem;
        }

        .arch-display-header {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        @media (min-width: 640px) {
          .arch-display-header {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
          }
        }

        .arch-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 0.35rem;
        }

        .arch-subtitle {
          font-size: 0.95rem;
          color: var(--accent-cyan);
          font-weight: 500;
        }

        /* Flow Diagram */
        .arch-flow-diagram {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          margin-bottom: 2.25rem;
        }

        @media (min-width: 860px) {
          .arch-flow-diagram {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }

        .diagram-node {
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 1rem 1.25rem;
          flex: 1;
          text-align: center;
          transition: transform var(--transition-fast);
        }

        .diagram-node:hover {
          transform: translateY(-2px);
          border-color: var(--border-hover);
        }

        .node-label {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .node-role {
          font-size: 0.75rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
          line-height: 1.4;
        }

        .node-status {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 600;
          font-family: var(--font-mono);
          color: var(--accent-emerald);
          background: rgba(16, 185, 129, 0.1);
          padding: 0.15rem 0.5rem;
          border-radius: var(--radius-full);
        }

        .diagram-connector {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
        }

        @media (max-width: 859px) {
          .diagram-connector {
            transform: rotate(90deg);
            margin: -0.25rem 0;
          }
        }

        /* Points Grid */
        .arch-points-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        @media (min-width: 768px) {
          .arch-points-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .arch-point-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          background: var(--bg-card);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-subtle);
        }

        .point-icon {
          color: var(--accent-emerald);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .point-text {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }
      `})]})}function Im(){return a.jsxs("section",{id:"education",className:"section-wrapper education-section",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header",children:[a.jsxs("div",{className:"section-tag",children:[a.jsx(ta,{size:14}),a.jsx("span",{children:"Academic Background"})]}),a.jsxs("h2",{className:"section-title",children:["Education & ",a.jsx("span",{className:"gradient-text",children:"Credentials"})]}),a.jsx("p",{className:"section-description",children:"Strong foundational computer science and application engineering qualifications."})]}),a.jsx("div",{className:"education-grid",children:wd.map((e,t)=>a.jsxs("div",{className:"education-card glass-card",children:[a.jsxs("div",{className:"edu-card-header",children:[a.jsx("div",{className:"edu-icon-wrap",children:a.jsx(ta,{size:24})}),a.jsxs("div",{className:"edu-meta-badges",children:[a.jsxs("span",{className:"badge badge-cyan",children:[a.jsx(Zi,{size:12}),e.duration]}),a.jsxs("span",{className:"badge",children:[a.jsx(ir,{size:12}),e.location]})]})]}),a.jsx("h3",{className:"edu-degree",children:e.degree}),a.jsx("h4",{className:"edu-institution",children:e.institution}),a.jsx("div",{className:"edu-divider"}),a.jsxs("div",{className:"edu-focus-box",children:[a.jsxs("div",{className:"focus-header",children:[a.jsx(cm,{size:15}),a.jsx("span",{children:"Curriculum & Specialization"})]}),a.jsx("p",{className:"focus-detail",children:e.focus})]})]},t))})]}),a.jsx("style",{children:`
        .education-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          max-width: 960px;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .education-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .education-card {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
        }

        .edu-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .edu-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: rgba(56, 189, 248, 0.1);
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(56, 189, 248, 0.25);
        }

        .edu-meta-badges {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .edu-degree {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.3;
          margin-bottom: 0.35rem;
        }

        .edu-institution {
          font-size: 1.05rem;
          color: var(--accent-cyan);
          font-weight: 600;
        }

        .edu-divider {
          height: 1px;
          background: var(--border-subtle);
          margin: 1.5rem 0;
        }

        .edu-focus-box {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 1.25rem;
        }

        .focus-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 0.5rem;
        }

        .focus-detail {
          font-size: 0.875rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }
      `})]})}function Am({onShowToast:e}){const[t,n]=I.useState({name:"",email:"",subject:"",message:""}),[r,l]=I.useState(!1),[i,o]=I.useState(!1),[s,c]=I.useState(null),d=(h,m)=>{navigator.clipboard.writeText(h),c(m),e(`Copied ${m} to clipboard!`),setTimeout(()=>c(null),2500)},g=h=>{h.preventDefault(),l(!0),setTimeout(()=>{l(!1),o(!0),e("Message sent successfully! Rahul will get back to you shortly.")},800)};return a.jsxs("section",{id:"contact",className:"section-wrapper contact-section",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header",children:[a.jsxs("div",{className:"section-tag",children:[a.jsx(cl,{size:14}),a.jsx("span",{children:"Get In Touch"})]}),a.jsxs("h2",{className:"section-title",children:["Let's Discuss ",a.jsx("span",{className:"gradient-text",children:"Your Next Project"})]}),a.jsx("p",{className:"section-description",children:"Available for Senior Full Stack Developer, Node.js Engineer, and Laravel Architect roles, as well as high-impact consultancy."})]}),a.jsxs("div",{className:"contact-grid",children:[a.jsxs("div",{className:"contact-info-card glass-card",children:[a.jsx("h3",{className:"contact-card-title",children:"Contact Channels"}),a.jsx("p",{className:"contact-card-desc",children:"Feel free to reach out directly via email, phone, or LinkedIn. I typically respond within 24 business hours."}),a.jsxs("div",{className:"contact-methods-list",children:[a.jsxs("div",{className:"contact-method-item",children:[a.jsx("div",{className:"method-icon-box",children:a.jsx(cl,{size:18})}),a.jsxs("div",{className:"method-content",children:[a.jsx("span",{className:"method-label",children:"Direct Email"}),a.jsx("a",{href:`mailto:${T.email}`,className:"method-link",children:T.email})]}),a.jsx("button",{onClick:()=>d(T.email,"Email"),className:"method-copy-btn",title:"Copy email address","aria-label":"Copy email",children:s==="Email"?a.jsx(li,{size:16,className:"text-emerald"}):a.jsx(fs,{size:16})})]}),a.jsxs("div",{className:"contact-method-item",children:[a.jsx("div",{className:"method-icon-box",children:a.jsx(Ja,{size:18})}),a.jsxs("div",{className:"method-content",children:[a.jsx("span",{className:"method-label",children:"Phone & WhatsApp"}),a.jsx("a",{href:`tel:${T.phone}`,className:"method-link",children:T.phone})]}),a.jsx("button",{onClick:()=>d(T.phone,"Phone number"),className:"method-copy-btn",title:"Copy phone number","aria-label":"Copy phone",children:s==="Phone number"?a.jsx(li,{size:16,className:"text-emerald"}):a.jsx(fs,{size:16})})]}),a.jsxs("div",{className:"contact-method-item",children:[a.jsx("div",{className:"method-icon-box",children:a.jsx(eo,{size:18})}),a.jsxs("div",{className:"method-content",children:[a.jsx("span",{className:"method-label",children:"LinkedIn"}),a.jsx("a",{href:T.socials.linkedin,target:"_blank",rel:"noopener noreferrer",className:"method-link",children:"linkedin.com/in/rahul-chaurasia-80371a194"})]}),a.jsx("a",{href:T.socials.linkedin,target:"_blank",rel:"noopener noreferrer",className:"method-copy-btn","aria-label":"Open LinkedIn in new tab",children:a.jsx(sl,{size:16})})]}),a.jsxs("div",{className:"contact-method-item",children:[a.jsx("div",{className:"method-icon-box",children:a.jsx(Za,{size:18})}),a.jsxs("div",{className:"method-content",children:[a.jsx("span",{className:"method-label",children:"GitHub"}),a.jsx("a",{href:T.socials.github,target:"_blank",rel:"noopener noreferrer",className:"method-link",children:"github.com/rahulroot7"})]}),a.jsx("a",{href:T.socials.github,target:"_blank",rel:"noopener noreferrer",className:"method-copy-btn","aria-label":"Open GitHub in new tab",children:a.jsx(sl,{size:16})})]}),a.jsxs("div",{className:"contact-method-item",children:[a.jsx("div",{className:"method-icon-box",children:a.jsx(ir,{size:18})}),a.jsxs("div",{className:"method-content",children:[a.jsx("span",{className:"method-label",children:"Location"}),a.jsx("span",{className:"method-text",children:"India (Open to Remote / Hybrid / Relocation)"})]})]})]}),a.jsxs("div",{className:"quick-response-banner",children:[a.jsx("span",{className:"pulse-dot"}),a.jsx("span",{children:"Actively interviewing for full-time and contractual opportunities"})]})]}),a.jsxs("div",{className:"contact-form-card glass-card",children:[a.jsx("h3",{className:"contact-card-title",children:"Send a Direct Message"}),i?a.jsxs("div",{className:"contact-success-state",children:[a.jsx("div",{className:"success-icon-badge",children:a.jsx(li,{size:32})}),a.jsx("h4",{children:"Message Received!"}),a.jsx("p",{children:"Thank you for getting in touch. I will review your inquiry and follow up promptly."}),a.jsx("button",{onClick:()=>{o(!1),n({name:"",email:"",subject:"",message:""})},className:"btn btn-secondary btn-sm",children:"Send Another Message"})]}):a.jsxs("form",{onSubmit:g,className:"contact-form",children:[a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"name",className:"form-label",children:"Your Name"}),a.jsx("input",{id:"name",type:"text",required:!0,placeholder:"e.g., Alex Morgan",value:t.name,onChange:h=>n({...t,name:h.target.value}),className:"form-input"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"email",className:"form-label",children:"Your Email"}),a.jsx("input",{id:"email",type:"email",required:!0,placeholder:"e.g., alex@company.com",value:t.email,onChange:h=>n({...t,email:h.target.value}),className:"form-input"})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"subject",className:"form-label",children:"Subject / Purpose"}),a.jsx("input",{id:"subject",type:"text",required:!0,placeholder:"e.g., Senior Full Stack Role / Project Discussion",value:t.subject,onChange:h=>n({...t,subject:h.target.value}),className:"form-input"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"message",className:"form-label",children:"Message Details"}),a.jsx("textarea",{id:"message",required:!0,rows:5,placeholder:"Write your project details or job opening requirements...",value:t.message,onChange:h=>n({...t,message:h.target.value}),className:"form-input form-textarea"})]}),a.jsx("button",{type:"submit",disabled:r,className:"btn btn-primary w-full submit-btn",children:r?a.jsx("span",{children:"Sending message..."}):a.jsxs(a.Fragment,{children:[a.jsx(jm,{size:16}),a.jsx("span",{children:"Transmit Message"})]})})]})]})]})]}),a.jsx("style",{children:`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr 1.15fr;
            gap: 2.5rem;
          }
        }

        .contact-info-card,
        .contact-form-card {
          padding: 2.25rem;
        }

        .contact-card-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 0.65rem;
        }

        .contact-card-desc {
          font-size: 0.925rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .contact-methods-list {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
          margin-bottom: 2rem;
        }

        .contact-method-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.85rem 1rem;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          transition: border-color var(--transition-fast);
        }

        .contact-method-item:hover {
          border-color: var(--border-hover);
        }

        .method-icon-box {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-sm);
          background: rgba(56, 189, 248, 0.1);
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .method-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .method-label {
          font-size: 0.725rem;
          color: var(--text-muted);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .method-link {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .method-link:hover {
          color: var(--accent-cyan);
        }

        .method-text {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .method-copy-btn {
          width: 34px;
          height: 34px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          transition: all var(--transition-fast);
          flex-shrink: 0;
        }

        .method-copy-btn:hover {
          color: var(--accent-cyan);
          border-color: var(--border-hover);
        }

        .text-emerald {
          color: var(--accent-emerald);
        }

        .quick-response-banner {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.75rem 1rem;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: var(--radius-md);
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--accent-emerald);
        }

        /* Form */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        @media (min-width: 640px) {
          .form-row {
            grid-template-columns: 1fr 1fr;
          }
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .form-label {
          font-size: 0.825rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .form-input {
          padding: 0.75rem 1rem;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-family: inherit;
          font-size: 0.925rem;
          outline: none;
          transition: border-color var(--transition-fast);
        }

        .form-input:focus {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 10px rgba(56, 189, 248, 0.15);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          margin-top: 0.5rem;
        }

        /* Success State */
        .contact-success-state {
          padding: 3rem 1rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .success-icon-badge {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.15);
          color: var(--accent-emerald);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--accent-emerald);
        }

        .contact-success-state h4 {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .contact-success-state p {
          font-size: 0.925rem;
          color: var(--text-secondary);
          max-width: 380px;
        }
      `})]})}function Fm({onOpenResume:e}){const t=()=>{window.scrollTo({top:0,behavior:"smooth"})};return a.jsxs("footer",{className:"footer-wrapper",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"footer-top",children:[a.jsxs("div",{className:"footer-brand",children:[a.jsx("a",{href:"#hero",className:"footer-logo-link","aria-label":"Back to top",children:a.jsx("img",{src:"/rahul-logo.png",alt:"Rahul - Software Engineer",className:"footer-logo-img"})}),a.jsx("p",{className:"footer-bio",children:"Full Stack Developer specializing in high-concurrency Node.js, enterprise Laravel architectures, real-time messaging, and high-performance full-stack web applications."}),a.jsxs("div",{className:"footer-social-icons",children:[a.jsx("a",{href:T.socials.github,target:"_blank",rel:"noopener noreferrer",className:"footer-social-btn","aria-label":"GitHub Profile",children:a.jsx(Za,{size:18})}),a.jsx("a",{href:T.socials.linkedin,target:"_blank",rel:"noopener noreferrer",className:"footer-social-btn","aria-label":"LinkedIn Profile",children:a.jsx(eo,{size:18})}),a.jsx("a",{href:`mailto:${T.email}`,className:"footer-social-btn","aria-label":"Send Email",children:a.jsx(cl,{size:18})}),a.jsx("a",{href:`tel:${T.phone}`,className:"footer-social-btn","aria-label":"Direct Phone",children:a.jsx(Ja,{size:18})})]})]}),a.jsxs("div",{className:"footer-nav-col",children:[a.jsx("h4",{className:"footer-nav-title",children:"Navigation"}),a.jsxs("ul",{className:"footer-links-list",children:[a.jsx("li",{children:a.jsx("a",{href:"#about",children:"About Summary"})}),a.jsx("li",{children:a.jsx("a",{href:"#skills",children:"Technical Skills"})}),a.jsx("li",{children:a.jsx("a",{href:"#experience",children:"Career Experience"})}),a.jsx("li",{children:a.jsx("a",{href:"#projects",children:"Key Projects"})}),a.jsx("li",{children:a.jsx("a",{href:"#architecture",children:"System Architecture"})}),a.jsx("li",{children:a.jsx("a",{href:"#education",children:"Education & Degrees"})}),a.jsx("li",{children:a.jsx("a",{href:"#contact",children:"Contact Information"})})]})]}),a.jsxs("div",{className:"footer-nav-col",children:[a.jsx("h4",{className:"footer-nav-title",children:"Key Projects"}),a.jsxs("ul",{className:"footer-links-list",children:[a.jsx("li",{children:a.jsx("a",{href:"#projects",children:"VAK – Real-Time Chat"})}),a.jsx("li",{children:a.jsx("a",{href:"#projects",children:"NumberDekho – Marketplace"})}),a.jsx("li",{children:a.jsx("a",{href:"#projects",children:"UCC Uttarakhand Platform"})}),a.jsx("li",{children:a.jsx("a",{href:"#projects",children:"NIHFW & PM SHRI Portals"})}),a.jsx("li",{children:a.jsx("a",{href:"#projects",children:"HRMS & ERP Applications"})})]})]}),a.jsxs("div",{className:"footer-nav-col",children:[a.jsx("h4",{className:"footer-nav-title",children:"Documents"}),a.jsxs("div",{className:"footer-resume-box",children:[a.jsx("p",{children:"Official curriculum vitae with complete project descriptions and tech stacks."}),a.jsx("button",{onClick:e,className:"btn btn-secondary btn-sm w-full",children:"Preview Resume"}),a.jsx("a",{href:"/Rahul_Chaurasia_Resume.pdf",download:"Rahul_Chaurasia_Resume.pdf",className:"btn btn-primary btn-sm w-full",style:{marginTop:"0.5rem"},children:"Download PDF"})]})]})]}),a.jsxs("div",{className:"footer-bottom",children:[a.jsxs("p",{className:"copyright-text",children:["© ",new Date().getFullYear()," Rahul Chaurasia. Designed & Built in React with Human Engineering Craftsmanship."]}),a.jsxs("button",{onClick:t,className:"scroll-to-top-btn","aria-label":"Scroll to top of page",title:"Back to top",children:[a.jsx("span",{children:"Back to top"}),a.jsx(sm,{size:16})]})]})]}),a.jsx("style",{children:`
        .footer-wrapper {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-subtle);
          padding: 5rem 0 2.5rem;
          margin-top: 4rem;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          margin-bottom: 3.5rem;
        }

        @media (min-width: 640px) {
          .footer-top {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .footer-top {
            grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
            gap: 3rem;
          }
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .footer-bio {
          font-size: 0.875rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .footer-social-icons {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .footer-social-btn {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          background: var(--bg-tertiary);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }

        .footer-social-btn:hover {
          color: var(--accent-cyan);
          border-color: var(--border-hover);
          transform: translateY(-2px);
        }

        .footer-nav-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1.25rem;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .footer-links-list a {
          font-size: 0.875rem;
          color: var(--text-secondary);
          transition: color var(--transition-fast);
        }

        .footer-links-list a:hover {
          color: var(--accent-cyan);
        }

        .footer-resume-box {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 1.25rem;
        }

        .footer-resume-box p {
          font-size: 0.825rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
          line-height: 1.5;
        }

        .footer-bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          gap: 1.25rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border-subtle);
        }

        @media (min-width: 640px) {
          .footer-bottom {
            flex-direction: row;
          }
        }

        .copyright-text {
          font-size: 0.825rem;
          color: var(--text-muted);
          text-align: center;
        }

        .scroll-to-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.825rem;
          font-weight: 600;
          color: var(--text-secondary);
          background: var(--bg-tertiary);
          border: 1px solid var(--border-subtle);
          padding: 0.45rem 0.9rem;
          border-radius: var(--radius-full);
          transition: all var(--transition-fast);
        }

        .scroll-to-top-btn:hover {
          color: var(--accent-cyan);
          border-color: var(--border-hover);
        }
      `})]})}function Om({isOpen:e,onClose:t}){const[n,r]=I.useState("pdf");return I.useEffect(()=>{const l=i=>{i.key==="Escape"&&t()};return e?(document.body.style.overflow="hidden",window.addEventListener("keydown",l)):document.body.style.overflow="",()=>{document.body.style.overflow="",window.removeEventListener("keydown",l)}},[e,t]),e?a.jsxs("div",{className:"modal-backdrop",onClick:t,role:"dialog","aria-modal":"true",children:[a.jsxs("div",{className:"modal-container glass-card",onClick:l=>l.stopPropagation(),children:[a.jsxs("div",{className:"modal-header",children:[a.jsxs("div",{className:"modal-title-group",children:[a.jsx("div",{className:"modal-icon-badge",children:a.jsx(Zn,{size:20})}),a.jsxs("div",{children:[a.jsx("h3",{className:"modal-title",children:"Rahul Chaurasia – Official Resume"}),a.jsx("p",{className:"modal-subtitle",children:"Full Stack Developer • Node.js • Laravel • 4+ Years Experience"})]})]}),a.jsxs("div",{className:"modal-header-actions",children:[a.jsxs("div",{className:"modal-tab-toggle",children:[a.jsx("button",{className:`tab-toggle-btn ${n==="pdf"?"active":""}`,onClick:()=>r("pdf"),children:"PDF View"}),a.jsx("button",{className:`tab-toggle-btn ${n==="text"?"active":""}`,onClick:()=>r("text"),children:"Structured View"})]}),a.jsxs("a",{href:"/Rahul_Chaurasia_Resume.pdf",download:"Rahul_Chaurasia_Resume.pdf",className:"btn btn-primary btn-sm",title:"Download Resume PDF",children:[a.jsx(ol,{size:15}),a.jsx("span",{children:"Download PDF"})]}),a.jsx("a",{href:"/Rahul_Chaurasia_Resume.pdf",target:"_blank",rel:"noopener noreferrer",className:"btn btn-secondary btn-sm",title:"Open PDF in new tab",children:a.jsx(sl,{size:15})}),a.jsx("button",{onClick:t,className:"modal-close-btn","aria-label":"Close modal",children:a.jsx(na,{size:20})})]})]}),a.jsx("div",{className:"modal-body",children:n==="pdf"?a.jsxs("div",{className:"pdf-frame-wrapper",children:[a.jsx("iframe",{src:"/Rahul_Chaurasia_Resume.pdf#toolbar=1",title:"Rahul Chaurasia Resume PDF",className:"pdf-iframe"}),a.jsxs("div",{className:"pdf-fallback-note",children:[a.jsx("span",{children:"PDF not rendering directly in your browser?"}),a.jsxs("a",{href:"/Rahul_Chaurasia_Resume.pdf",target:"_blank",rel:"noopener noreferrer",className:"fallback-link",children:["Open PDF in New Tab ",a.jsx(sl,{size:12})]})]})]}):a.jsxs("div",{className:"structured-resume-view",children:[a.jsxs("div",{className:"structured-header",children:[a.jsx("h2",{children:T.name}),a.jsx("h4",{children:T.role}),a.jsxs("p",{children:[T.email," | ",T.phone," | ",T.socials.linkedin]})]}),a.jsxs("div",{className:"structured-section",children:[a.jsx("h3",{children:"PROFESSIONAL SUMMARY"}),a.jsx("p",{children:kd})]}),a.jsxs("div",{className:"structured-section",children:[a.jsx("h3",{children:"EXPERIENCE"}),Cn.map(l=>a.jsxs("div",{className:"structured-item",children:[a.jsxs("div",{className:"structured-item-head",children:[a.jsx("strong",{children:l.company}),a.jsx("span",{children:l.period})]}),a.jsx("em",{children:l.role}),a.jsx("ul",{children:l.highlights.map((i,o)=>a.jsx("li",{children:i},o))})]},l.id))]}),a.jsxs("div",{className:"structured-section",children:[a.jsx("h3",{children:"KEY PROJECTS"}),ra.map(l=>a.jsxs("div",{className:"structured-item",children:[a.jsx("strong",{children:l.title}),a.jsx("p",{className:"proj-techs",children:l.technologies.join(" | ")}),a.jsx("ul",{children:l.points.map((i,o)=>a.jsx("li",{children:i},o))})]},l.id))]}),a.jsxs("div",{className:"structured-section",children:[a.jsx("h3",{children:"EDUCATION"}),wd.map((l,i)=>a.jsxs("div",{className:"structured-item",children:[a.jsxs("div",{className:"structured-item-head",children:[a.jsx("strong",{children:l.institution}),a.jsx("span",{children:l.duration})]}),a.jsxs("div",{children:[l.degree," — ",l.location]})]},i))]})]})})]}),a.jsx("style",{children:`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 500;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: fade-in 0.2s ease-out;
        }

        .modal-container {
          width: 100%;
          max-width: 1000px;
          height: 90vh;
          max-height: 850px;
          display: flex;
          flex-direction: column;
          background: var(--bg-secondary);
          border: 1px solid var(--border-hover);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6);
          animation: modal-pop 0.25s ease-out;
        }

        @keyframes modal-pop {
          from {
            transform: scale(0.96) translateY(10px);
            opacity: 0;
          }
          to {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.75rem;
          border-bottom: 1px solid var(--border-subtle);
          background: var(--bg-card);
          gap: 1rem;
          flex-wrap: wrap;
        }

        .modal-title-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .modal-icon-badge {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-sm);
          background: rgba(56, 189, 248, 0.1);
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(56, 189, 248, 0.2);
        }

        .modal-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .modal-subtitle {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .modal-header-actions {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .modal-tab-toggle {
          display: flex;
          background: var(--bg-tertiary);
          padding: 0.25rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-subtle);
        }

        .tab-toggle-btn {
          padding: 0.35rem 0.75rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-secondary);
          border-radius: var(--radius-sm);
          transition: all var(--transition-fast);
        }

        .tab-toggle-btn.active {
          background: var(--bg-card);
          color: var(--accent-cyan);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        .modal-close-btn {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          background: var(--bg-tertiary);
          border: 1px solid var(--border-subtle);
          transition: all var(--transition-fast);
        }

        .modal-close-btn:hover {
          color: #ef4444;
          border-color: rgba(239, 68, 68, 0.4);
        }

        .modal-body {
          flex: 1;
          overflow: hidden;
          position: relative;
          background: #0b0f19;
        }

        .pdf-frame-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .pdf-iframe {
          width: 100%;
          height: 100%;
          border: none;
          flex: 1;
        }

        .pdf-fallback-note {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 0.6rem;
          background: var(--bg-tertiary);
          border-top: 1px solid var(--border-subtle);
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .fallback-link {
          color: var(--accent-cyan);
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-weight: 600;
        }

        /* Structured View */
        .structured-resume-view {
          height: 100%;
          overflow-y: auto;
          padding: 2.5rem;
          background: var(--bg-secondary);
          color: var(--text-primary);
          line-height: 1.7;
        }

        .structured-header {
          text-align: center;
          padding-bottom: 1.5rem;
          border-bottom: 2px solid var(--border-subtle);
          margin-bottom: 1.5rem;
        }

        .structured-header h2 {
          font-size: 1.8rem;
          font-weight: 800;
        }

        .structured-header h4 {
          font-size: 1.1rem;
          color: var(--accent-cyan);
          margin-bottom: 0.35rem;
        }

        .structured-header p {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .structured-section {
          margin-bottom: 2rem;
        }

        .structured-section h3 {
          font-size: 1.05rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 0.4rem;
          margin-bottom: 1rem;
          color: var(--accent-cyan);
        }

        .structured-item {
          margin-bottom: 1.25rem;
        }

        .structured-item-head {
          display: flex;
          justify-content: space-between;
          font-size: 0.95rem;
        }

        .structured-item ul {
          padding-left: 1.25rem;
          margin-top: 0.5rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .proj-techs {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-muted);
        }
      `})]}):null}function $m(){const[e,t]=I.useState(()=>{const c=localStorage.getItem("theme");return c||(window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark")}),[n,r]=I.useState(!1),[l,i]=I.useState(null);I.useEffect(()=>{document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",e)},[e]);const o=()=>{t(c=>c==="dark"?"light":"dark")},s=c=>{i(c),setTimeout(()=>{i(null)},3e3)};return a.jsxs("div",{className:"app-root",children:[a.jsx(_m,{theme:e,toggleTheme:o,onOpenResume:()=>r(!0)}),a.jsxs("main",{children:[a.jsx(Pm,{onOpenResume:()=>r(!0),onShowToast:s}),a.jsx(Rm,{onOpenResume:()=>r(!0)}),a.jsx(Mm,{}),a.jsx(Dm,{}),a.jsx(Lm,{onOpenResume:()=>r(!0)}),a.jsx(Tm,{}),a.jsx(Im,{}),a.jsx(Am,{onShowToast:s})]}),a.jsx(Fm,{onOpenResume:()=>r(!0)}),a.jsx(Om,{isOpen:n,onClose:()=>r(!1)}),l&&a.jsxs("div",{className:"toast-notice",role:"status","aria-live":"polite",children:[a.jsx(Cl,{size:18,className:"toast-icon text-emerald"}),a.jsx("span",{children:l})]})]})}ii.createRoot(document.getElementById("root")).render(a.jsx(Cs.StrictMode,{children:a.jsx($m,{})}));
