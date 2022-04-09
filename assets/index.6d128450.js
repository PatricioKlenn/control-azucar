var J_=Object.defineProperty,Q_=Object.defineProperties;var Z_=Object.getOwnPropertyDescriptors;var cl=Object.getOwnPropertySymbols;var ev=Object.prototype.hasOwnProperty,tv=Object.prototype.propertyIsEnumerable;var ul=(t,e,n)=>e in t?J_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,B=(t,e)=>{for(var n in e||(e={}))ev.call(e,n)&&ul(t,n,e[n]);if(cl)for(var n of cl(e))tv.call(e,n)&&ul(t,n,e[n]);return t},Bi=(t,e)=>Q_(t,Z_(e));import"node_modules/firebaseui/dist/firebaseui.css";function Mk(){import("data:text/javascript,")}const nv=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};nv();/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */var st=Object.freeze({});function U(t){return t==null}function y(t){return t!=null}function ee(t){return t===!0}function rv(t){return t===!1}function Si(t){return typeof t=="string"||typeof t=="number"||typeof t=="symbol"||typeof t=="boolean"}function _e(t){return t!==null&&typeof t=="object"}var wc=Object.prototype.toString;function $e(t){return wc.call(t)==="[object Object]"}function iv(t){return wc.call(t)==="[object RegExp]"}function Od(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function Sa(t){return y(t)&&typeof t.then=="function"&&typeof t.catch=="function"}function sv(t){return t==null?"":Array.isArray(t)||$e(t)&&t.toString===wc?JSON.stringify(t,null,2):String(t)}function fi(t){var e=parseFloat(t);return isNaN(e)?t:e}function Ke(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(s){return n[s.toLowerCase()]}:function(s){return n[s]}}Ke("slot,component",!0);var ov=Ke("key,ref,slot,slot-scope,is");function Rt(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var av=Object.prototype.hasOwnProperty;function pe(t,e){return av.call(t,e)}function Bn(t){var e=Object.create(null);return function(r){var i=e[r];return i||(e[r]=t(r))}}var cv=/-(\w)/g,In=Bn(function(t){return t.replace(cv,function(e,n){return n?n.toUpperCase():""})}),uv=Bn(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),lv=/\B([A-Z])/g,Ai=Bn(function(t){return t.replace(lv,"-$1").toLowerCase()});function fv(t,e){function n(r){var i=arguments.length;return i?i>1?t.apply(e,arguments):t.call(e,r):t.call(e)}return n._length=t.length,n}function hv(t,e){return t.bind(e)}var dv=Function.prototype.bind?hv:fv;function Aa(t,e){e=e||0;for(var n=t.length-e,r=new Array(n);n--;)r[n]=t[n+e];return r}function Y(t,e){for(var n in e)t[n]=e[n];return t}function Rd(t){for(var e={},n=0;n<t.length;n++)t[n]&&Y(e,t[n]);return e}function Ee(t,e,n){}var ji=function(t,e,n){return!1},Nd=function(t){return t};function Cn(t,e){if(t===e)return!0;var n=_e(t),r=_e(e);if(n&&r)try{var i=Array.isArray(t),s=Array.isArray(e);if(i&&s)return t.length===e.length&&t.every(function(c,u){return Cn(c,e[u])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(!i&&!s){var o=Object.keys(t),a=Object.keys(e);return o.length===a.length&&o.every(function(c){return Cn(t[c],e[c])})}else return!1}catch{return!1}else return!n&&!r?String(t)===String(e):!1}function $d(t,e){for(var n=0;n<t.length;n++)if(Cn(t[n],e))return n;return-1}function ws(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var ll="data-server-rendered",oo=["component","directive","filter"],kd=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],je={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:ji,isReservedAttr:ji,isUnknownElement:ji,getTagNamespace:Ee,parsePlatformTagName:Nd,mustUseProp:ji,async:!0,_lifecycleHooks:kd},pv=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function mv(t){var e=(t+"").charCodeAt(0);return e===36||e===95}function ar(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var gv=new RegExp("[^"+pv.source+".$_\\d]");function _v(t){if(!gv.test(t)){var e=t.split(".");return function(n){for(var r=0;r<e.length;r++){if(!n)return;n=n[e[r]]}return n}}}var vv="__proto__"in{},De=typeof window!="undefined",Tc=typeof WXEnvironment!="undefined"&&!!WXEnvironment.platform,Pd=Tc&&WXEnvironment.platform.toLowerCase(),le=De&&window.navigator.userAgent.toLowerCase(),Rr=le&&/msie|trident/.test(le),Nr=le&&le.indexOf("msie 9.0")>0,Sc=le&&le.indexOf("edge/")>0;le&&le.indexOf("android")>0;var yv=le&&/iphone|ipad|ipod|ios/.test(le)||Pd==="ios";le&&/chrome\/\d+/.test(le);le&&/phantomjs/.test(le);var fl=le&&le.match(/firefox\/(\d+)/),Ia={}.watch,Dd=!1;if(De)try{var hl={};Object.defineProperty(hl,"passive",{get:function(){Dd=!0}}),window.addEventListener("test-passive",null,hl)}catch{}var Hi,ao=function(){return Hi===void 0&&(!De&&!Tc&&typeof global!="undefined"?Hi=global.process&&global.process.env.VUE_ENV==="server":Hi=!1),Hi},Ts=De&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function cr(t){return typeof t=="function"&&/native code/.test(t.toString())}var co=typeof Symbol!="undefined"&&cr(Symbol)&&typeof Reflect!="undefined"&&cr(Reflect.ownKeys),hi;typeof Set!="undefined"&&cr(Set)?hi=Set:hi=function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(n){return this.set[n]===!0},t.prototype.add=function(n){this.set[n]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var bv=Ee,Ev=0,Ce=function(){this.id=Ev++,this.subs=[]};Ce.prototype.addSub=function(e){this.subs.push(e)};Ce.prototype.removeSub=function(e){Rt(this.subs,e)};Ce.prototype.depend=function(){Ce.target&&Ce.target.addDep(this)};Ce.prototype.notify=function(){for(var e=this.subs.slice(),n=0,r=e.length;n<r;n++)e[n].update()};Ce.target=null;var as=[];function Ii(t){as.push(t),Ce.target=t}function Ci(){as.pop(),Ce.target=as[as.length-1]}var Se=function(e,n,r,i,s,o,a,c){this.tag=e,this.data=n,this.children=r,this.text=i,this.elm=s,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=n&&n.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=c,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},Ld={child:{configurable:!0}};Ld.child.get=function(){return this.componentInstance};Object.defineProperties(Se.prototype,Ld);var vn=function(t){t===void 0&&(t="");var e=new Se;return e.text=t,e.isComment=!0,e};function tr(t){return new Se(void 0,void 0,void 0,String(t))}function Ca(t){var e=new Se(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var xd=Array.prototype,Ss=Object.create(xd),wv=["push","pop","shift","unshift","splice","sort","reverse"];wv.forEach(function(t){var e=xd[t];ar(Ss,t,function(){for(var r=[],i=arguments.length;i--;)r[i]=arguments[i];var s=e.apply(this,r),o=this.__ob__,a;switch(t){case"push":case"unshift":a=r;break;case"splice":a=r.slice(2);break}return a&&o.observeArray(a),o.dep.notify(),s})});var Tv=Object.getOwnPropertyNames(Ss),Ac=!0;function Kt(t){Ac=t}var As=function(e){this.value=e,this.dep=new Ce,this.vmCount=0,ar(e,"__ob__",this),Array.isArray(e)?(vv?Sv(e,Ss):Av(e,Ss,Tv),this.observeArray(e)):this.walk(e)};As.prototype.walk=function(e){for(var n=Object.keys(e),r=0;r<n.length;r++)Rn(e,n[r])};As.prototype.observeArray=function(e){for(var n=0,r=e.length;n<r;n++)On(e[n])};function Sv(t,e){t.__proto__=e}function Av(t,e,n){for(var r=0,i=n.length;r<i;r++){var s=n[r];ar(t,s,e[s])}}function On(t,e){if(!(!_e(t)||t instanceof Se)){var n;return pe(t,"__ob__")&&t.__ob__ instanceof As?n=t.__ob__:Ac&&!ao()&&(Array.isArray(t)||$e(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new As(t)),e&&n&&n.vmCount++,n}}function Rn(t,e,n,r,i){var s=new Ce,o=Object.getOwnPropertyDescriptor(t,e);if(!(o&&o.configurable===!1)){var a=o&&o.get,c=o&&o.set;(!a||c)&&arguments.length===2&&(n=t[e]);var u=!i&&On(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var f=a?a.call(t):n;return Ce.target&&(s.depend(),u&&(u.dep.depend(),Array.isArray(f)&&Ud(f))),f},set:function(f){var h=a?a.call(t):n;f===h||f!==f&&h!==h||a&&!c||(c?c.call(t,f):n=f,u=!i&&On(f),s.notify())}})}}function Ic(t,e,n){if(Array.isArray(t)&&Od(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(Rn(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Md(t,e){if(Array.isArray(t)&&Od(e)){t.splice(e,1);return}var n=t.__ob__;t._isVue||n&&n.vmCount||!pe(t,e)||(delete t[e],n&&n.dep.notify())}function Ud(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Ud(e)}var ot=je.optionMergeStrategies;function Oa(t,e){if(!e)return t;for(var n,r,i,s=co?Reflect.ownKeys(e):Object.keys(e),o=0;o<s.length;o++)n=s[o],n!=="__ob__"&&(r=t[n],i=e[n],pe(t,n)?r!==i&&$e(r)&&$e(i)&&Oa(r,i):Ic(t,n,i));return t}function Ra(t,e,n){return n?function(){var i=typeof e=="function"?e.call(n,n):e,s=typeof t=="function"?t.call(n,n):t;return i?Oa(i,s):s}:e?t?function(){return Oa(typeof e=="function"?e.call(this,this):e,typeof t=="function"?t.call(this,this):t)}:e:t}ot.data=function(t,e,n){return n?Ra(t,e,n):e&&typeof e!="function"?t:Ra(t,e)};function Iv(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n&&Cv(n)}function Cv(t){for(var e=[],n=0;n<t.length;n++)e.indexOf(t[n])===-1&&e.push(t[n]);return e}kd.forEach(function(t){ot[t]=Iv});function Ov(t,e,n,r){var i=Object.create(t||null);return e?Y(i,e):i}oo.forEach(function(t){ot[t+"s"]=Ov});ot.watch=function(t,e,n,r){if(t===Ia&&(t=void 0),e===Ia&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var i={};Y(i,t);for(var s in e){var o=i[s],a=e[s];o&&!Array.isArray(o)&&(o=[o]),i[s]=o?o.concat(a):Array.isArray(a)?a:[a]}return i};ot.props=ot.methods=ot.inject=ot.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return Y(i,t),e&&Y(i,e),i};ot.provide=Ra;var Rv=function(t,e){return e===void 0?t:e};function Nv(t,e){var n=t.props;if(!!n){var r={},i,s,o;if(Array.isArray(n))for(i=n.length;i--;)s=n[i],typeof s=="string"&&(o=In(s),r[o]={type:null});else if($e(n))for(var a in n)s=n[a],o=In(a),r[o]=$e(s)?s:{type:s};t.props=r}}function $v(t,e){var n=t.inject;if(!!n){var r=t.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if($e(n))for(var s in n){var o=n[s];r[s]=$e(o)?Y({from:s},o):{from:o}}}}function kv(t){var e=t.directives;if(e)for(var n in e){var r=e[n];typeof r=="function"&&(e[n]={bind:r,update:r})}}function Nn(t,e,n){if(typeof e=="function"&&(e=e.options),Nv(e),$v(e),kv(e),!e._base&&(e.extends&&(t=Nn(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=Nn(t,e.mixins[r],n);var s={},o;for(o in t)a(o);for(o in e)pe(t,o)||a(o);function a(c){var u=ot[c]||Rv;s[c]=u(t[c],e[c],n,c)}return s}function Cc(t,e,n,r){if(typeof n=="string"){var i=t[e];if(pe(i,n))return i[n];var s=In(n);if(pe(i,s))return i[s];var o=uv(s);if(pe(i,o))return i[o];var a=i[n]||i[s]||i[o];return a}}function Oc(t,e,n,r){var i=e[t],s=!pe(n,t),o=n[t],a=pl(Boolean,i.type);if(a>-1){if(s&&!pe(i,"default"))o=!1;else if(o===""||o===Ai(t)){var c=pl(String,i.type);(c<0||a<c)&&(o=!0)}}if(o===void 0){o=Pv(r,i,t);var u=Ac;Kt(!0),On(o),Kt(u)}return o}function Pv(t,e,n){if(!!pe(e,"default")){var r=e.default;return t&&t.$options.propsData&&t.$options.propsData[n]===void 0&&t._props[n]!==void 0?t._props[n]:typeof r=="function"&&Na(e.type)!=="Function"?r.call(t):r}}var Dv=/^\s*function (\w+)/;function Na(t){var e=t&&t.toString().match(Dv);return e?e[1]:""}function dl(t,e){return Na(t)===Na(e)}function pl(t,e){if(!Array.isArray(e))return dl(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(dl(e[n],t))return n;return-1}function $n(t,e,n){Ii();try{if(e)for(var r=e;r=r.$parent;){var i=r.$options.errorCaptured;if(i)for(var s=0;s<i.length;s++)try{var o=i[s].call(r,t,e,n)===!1;if(o)return}catch(a){ml(a,r,"errorCaptured hook")}}ml(t,e,n)}finally{Ci()}}function dr(t,e,n,r,i){var s;try{s=n?t.apply(e,n):t.call(e),s&&!s._isVue&&Sa(s)&&!s._handled&&(s.catch(function(o){return $n(o,r,i+" (Promise/async)")}),s._handled=!0)}catch(o){$n(o,r,i)}return s}function ml(t,e,n){if(je.errorHandler)try{return je.errorHandler.call(null,t,e,n)}catch(r){r!==t&&gl(r)}gl(t)}function gl(t,e,n){if((De||Tc)&&typeof console!="undefined")console.error(t);else throw t}var $a=!1,ka=[],Pa=!1;function Vi(){Pa=!1;var t=ka.slice(0);ka.length=0;for(var e=0;e<t.length;e++)t[e]()}var Yr;if(typeof Promise!="undefined"&&cr(Promise)){var Lv=Promise.resolve();Yr=function(){Lv.then(Vi),yv&&setTimeout(Ee)},$a=!0}else if(!Rr&&typeof MutationObserver!="undefined"&&(cr(MutationObserver)||MutationObserver.toString()==="[object MutationObserverConstructor]")){var qi=1,xv=new MutationObserver(Vi),_l=document.createTextNode(String(qi));xv.observe(_l,{characterData:!0}),Yr=function(){qi=(qi+1)%2,_l.data=String(qi)},$a=!0}else typeof setImmediate!="undefined"&&cr(setImmediate)?Yr=function(){setImmediate(Vi)}:Yr=function(){setTimeout(Vi,0)};function Rc(t,e){var n;if(ka.push(function(){if(t)try{t.call(e)}catch(r){$n(r,e,"nextTick")}else n&&n(e)}),Pa||(Pa=!0,Yr()),!t&&typeof Promise!="undefined")return new Promise(function(r){n=r})}var vl=new hi;function Is(t){Da(t,vl),vl.clear()}function Da(t,e){var n,r,i=Array.isArray(t);if(!(!i&&!_e(t)||Object.isFrozen(t)||t instanceof Se)){if(t.__ob__){var s=t.__ob__.dep.id;if(e.has(s))return;e.add(s)}if(i)for(n=t.length;n--;)Da(t[n],e);else for(r=Object.keys(t),n=r.length;n--;)Da(t[r[n]],e)}}var yl=Bn(function(t){var e=t.charAt(0)==="&";t=e?t.slice(1):t;var n=t.charAt(0)==="~";t=n?t.slice(1):t;var r=t.charAt(0)==="!";return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function La(t,e){function n(){var r=arguments,i=n.fns;if(Array.isArray(i))for(var s=i.slice(),o=0;o<s.length;o++)dr(s[o],null,r,e,"v-on handler");else return dr(i,null,arguments,e,"v-on handler")}return n.fns=t,n}function Fd(t,e,n,r,i,s){var o,a,c,u;for(o in t)a=t[o],c=e[o],u=yl(o),U(a)||(U(c)?(U(a.fns)&&(a=t[o]=La(a,s)),ee(u.once)&&(a=t[o]=i(u.name,a,u.capture)),n(u.name,a,u.capture,u.passive,u.params)):a!==c&&(c.fns=a,t[o]=c));for(o in e)U(t[o])&&(u=yl(o),r(u.name,e[o],u.capture))}function Ht(t,e,n){t instanceof Se&&(t=t.data.hook||(t.data.hook={}));var r,i=t[e];function s(){n.apply(this,arguments),Rt(r.fns,s)}U(i)?r=La([s]):y(i.fns)&&ee(i.merged)?(r=i,r.fns.push(s)):r=La([i,s]),r.merged=!0,t[e]=r}function Mv(t,e,n){var r=e.options.props;if(!U(r)){var i={},s=t.attrs,o=t.props;if(y(s)||y(o))for(var a in r){var c=Ai(a);bl(i,o,a,c,!0)||bl(i,s,a,c,!1)}return i}}function bl(t,e,n,r,i){if(y(e)){if(pe(e,n))return t[n]=e[n],i||delete e[n],!0;if(pe(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function Uv(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Nc(t){return Si(t)?[tr(t)]:Array.isArray(t)?Bd(t):void 0}function Br(t){return y(t)&&y(t.text)&&rv(t.isComment)}function Bd(t,e){var n=[],r,i,s,o;for(r=0;r<t.length;r++)i=t[r],!(U(i)||typeof i=="boolean")&&(s=n.length-1,o=n[s],Array.isArray(i)?i.length>0&&(i=Bd(i,(e||"")+"_"+r),Br(i[0])&&Br(o)&&(n[s]=tr(o.text+i[0].text),i.shift()),n.push.apply(n,i)):Si(i)?Br(o)?n[s]=tr(o.text+i):i!==""&&n.push(tr(i)):Br(i)&&Br(o)?n[s]=tr(o.text+i.text):(ee(t._isVList)&&y(i.tag)&&U(i.key)&&y(e)&&(i.key="__vlist"+e+"_"+r+"__"),n.push(i)));return n}function Fv(t){var e=t.$options.provide;e&&(t._provided=typeof e=="function"?e.call(t):e)}function Bv(t){var e=jd(t.$options.inject,t);e&&(Kt(!1),Object.keys(e).forEach(function(n){Rn(t,n,e[n])}),Kt(!0))}function jd(t,e){if(t){for(var n=Object.create(null),r=co?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var s=r[i];if(s!=="__ob__"){for(var o=t[s].from,a=e;a;){if(a._provided&&pe(a._provided,o)){n[s]=a._provided[o];break}a=a.$parent}if(!a&&"default"in t[s]){var c=t[s].default;n[s]=typeof c=="function"?c.call(e):c}}}return n}}function $c(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var s=t[r],o=s.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,(s.context===e||s.fnContext===e)&&o&&o.slot!=null){var a=o.slot,c=n[a]||(n[a]=[]);s.tag==="template"?c.push.apply(c,s.children||[]):c.push(s)}else(n.default||(n.default=[])).push(s)}for(var u in n)n[u].every(jv)&&delete n[u];return n}function jv(t){return t.isComment&&!t.asyncFactory||t.text===" "}function di(t){return t.isComment&&t.asyncFactory}function cs(t,e,n){var r,i=Object.keys(e).length>0,s=t?!!t.$stable:!i,o=t&&t.$key;if(!t)r={};else{if(t._normalized)return t._normalized;if(s&&n&&n!==st&&o===n.$key&&!i&&!n.$hasNormal)return n;r={};for(var a in t)t[a]&&a[0]!=="$"&&(r[a]=Hv(e,a,t[a]))}for(var c in e)c in r||(r[c]=Vv(e,c));return t&&Object.isExtensible(t)&&(t._normalized=r),ar(r,"$stable",s),ar(r,"$key",o),ar(r,"$hasNormal",i),r}function Hv(t,e,n){var r=function(){var i=arguments.length?n.apply(null,arguments):n({});i=i&&typeof i=="object"&&!Array.isArray(i)?[i]:Nc(i);var s=i&&i[0];return i&&(!s||i.length===1&&s.isComment&&!di(s))?void 0:i};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function Vv(t,e){return function(){return t[e]}}function qv(t,e){var n,r,i,s,o;if(Array.isArray(t)||typeof t=="string")for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r);else if(typeof t=="number")for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(_e(t))if(co&&t[Symbol.iterator]){n=[];for(var a=t[Symbol.iterator](),c=a.next();!c.done;)n.push(e(c.value,n.length)),c=a.next()}else for(s=Object.keys(t),n=new Array(s.length),r=0,i=s.length;r<i;r++)o=s[r],n[r]=e(t[o],o,r);return y(n)||(n=[]),n._isVList=!0,n}function zv(t,e,n,r){var i=this.$scopedSlots[t],s;i?(n=n||{},r&&(n=Y(Y({},r),n)),s=i(n)||(typeof e=="function"?e():e)):s=this.$slots[t]||(typeof e=="function"?e():e);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},s):s}function Wv(t){return Cc(this.$options,"filters",t)||Nd}function El(t,e){return Array.isArray(t)?t.indexOf(e)===-1:t!==e}function Kv(t,e,n,r,i){var s=je.keyCodes[e]||n;return i&&r&&!je.keyCodes[e]?El(i,r):s?El(s,t):r?Ai(r)!==e:t===void 0}function Gv(t,e,n,r,i){if(n&&_e(n)){Array.isArray(n)&&(n=Rd(n));var s,o=function(c){if(c==="class"||c==="style"||ov(c))s=t;else{var u=t.attrs&&t.attrs.type;s=r||je.mustUseProp(e,u,c)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var l=In(c),f=Ai(c);if(!(l in s)&&!(f in s)&&(s[c]=n[c],i)){var h=t.on||(t.on={});h["update:"+c]=function(d){n[c]=d}}};for(var a in n)o(a)}return t}function Yv(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e||(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Hd(r,"__static__"+t,!1)),r}function Xv(t,e,n){return Hd(t,"__once__"+e+(n?"_"+n:""),!0),t}function Hd(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&typeof t[r]!="string"&&wl(t[r],e+"_"+r,n);else wl(t,e,n)}function wl(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Jv(t,e){if(e&&$e(e)){var n=t.on=t.on?Y({},t.on):{};for(var r in e){var i=n[r],s=e[r];n[r]=i?[].concat(i,s):s}}return t}function Vd(t,e,n,r){e=e||{$stable:!n};for(var i=0;i<t.length;i++){var s=t[i];Array.isArray(s)?Vd(s,e,n):s&&(s.proxy&&(s.fn.proxy=!0),e[s.key]=s.fn)}return r&&(e.$key=r),e}function Qv(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];typeof r=="string"&&r&&(t[e[n]]=e[n+1])}return t}function Zv(t,e){return typeof t=="string"?e+t:t}function qd(t){t._o=Xv,t._n=fi,t._s=sv,t._l=qv,t._t=zv,t._q=Cn,t._i=$d,t._m=Yv,t._f=Wv,t._k=Kv,t._b=Gv,t._v=tr,t._e=vn,t._u=Vd,t._g=Jv,t._d=Qv,t._p=Zv}function kc(t,e,n,r,i){var s=this,o=i.options,a;pe(r,"_uid")?(a=Object.create(r),a._original=r):(a=r,r=r._original);var c=ee(o._compiled),u=!c;this.data=t,this.props=e,this.children=n,this.parent=r,this.listeners=t.on||st,this.injections=jd(o.inject,r),this.slots=function(){return s.$slots||cs(t.scopedSlots,s.$slots=$c(n,r)),s.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return cs(t.scopedSlots,this.slots())}}),c&&(this.$options=o,this.$slots=this.slots(),this.$scopedSlots=cs(t.scopedSlots,this.$slots)),o._scopeId?this._c=function(l,f,h,d){var p=Cs(a,l,f,h,d,u);return p&&!Array.isArray(p)&&(p.fnScopeId=o._scopeId,p.fnContext=r),p}:this._c=function(l,f,h,d){return Cs(a,l,f,h,d,u)}}qd(kc.prototype);function ey(t,e,n,r,i){var s=t.options,o={},a=s.props;if(y(a))for(var c in a)o[c]=Oc(c,a,e||st);else y(n.attrs)&&Sl(o,n.attrs),y(n.props)&&Sl(o,n.props);var u=new kc(n,o,i,r,t),l=s.render.call(null,u._c,u);if(l instanceof Se)return Tl(l,n,u.parent,s);if(Array.isArray(l)){for(var f=Nc(l)||[],h=new Array(f.length),d=0;d<f.length;d++)h[d]=Tl(f[d],n,u.parent,s);return h}}function Tl(t,e,n,r,i){var s=Ca(t);return s.fnContext=n,s.fnOptions=r,e.slot&&((s.data||(s.data={})).slot=e.slot),s}function Sl(t,e){for(var n in e)t[In(n)]=e[n]}var Pc={init:function(e,n){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var r=e;Pc.prepatch(r,r)}else{var i=e.componentInstance=ty(e,yn);i.$mount(n?e.elm:void 0,n)}},prepatch:function(e,n){var r=n.componentOptions,i=n.componentInstance=e.componentInstance;by(i,r.propsData,r.listeners,n,r.children)},insert:function(e){var n=e.context,r=e.componentInstance;r._isMounted||(r._isMounted=!0,We(r,"mounted")),e.data.keepAlive&&(n._isMounted?Sy(r):Dc(r,!0))},destroy:function(e){var n=e.componentInstance;n._isDestroyed||(e.data.keepAlive?Jd(n,!0):n.$destroy())}},Al=Object.keys(Pc);function Il(t,e,n,r,i){if(!U(t)){var s=n.$options._base;if(_e(t)&&(t=s.extend(t)),typeof t=="function"){var o;if(U(t.cid)&&(o=t,t=fy(o,s),t===void 0))return ly(o,e,n,r,i);e=e||{},Uc(t),y(e.model)&&iy(t.options,e);var a=Mv(e,t);if(ee(t.options.functional))return ey(t,a,e,n,r);var c=e.on;if(e.on=e.nativeOn,ee(t.options.abstract)){var u=e.slot;e={},u&&(e.slot=u)}ny(e);var l=t.options.name||i,f=new Se("vue-component-"+t.cid+(l?"-"+l:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:a,listeners:c,tag:i,children:r},o);return f}}}function ty(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return y(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function ny(t){for(var e=t.hook||(t.hook={}),n=0;n<Al.length;n++){var r=Al[n],i=e[r],s=Pc[r];i!==s&&!(i&&i._merged)&&(e[r]=i?ry(s,i):s)}}function ry(t,e){var n=function(r,i){t(r,i),e(r,i)};return n._merged=!0,n}function iy(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var i=e.on||(e.on={}),s=i[r],o=e.model.callback;y(s)?(Array.isArray(s)?s.indexOf(o)===-1:s!==o)&&(i[r]=[o].concat(s)):i[r]=o}var sy=1,zd=2;function Cs(t,e,n,r,i,s){return(Array.isArray(n)||Si(n))&&(i=r,r=n,n=void 0),ee(s)&&(i=zd),oy(t,e,n,r,i)}function oy(t,e,n,r,i){if(y(n)&&y(n.__ob__)||(y(n)&&y(n.is)&&(e=n.is),!e))return vn();Array.isArray(r)&&typeof r[0]=="function"&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===zd?r=Nc(r):i===sy&&(r=Uv(r));var s,o;if(typeof e=="string"){var a;o=t.$vnode&&t.$vnode.ns||je.getTagNamespace(e),je.isReservedTag(e)?s=new Se(je.parsePlatformTagName(e),n,r,void 0,void 0,t):(!n||!n.pre)&&y(a=Cc(t.$options,"components",e))?s=Il(a,n,t,r,e):s=new Se(e,n,r,void 0,void 0,t)}else s=Il(e,n,t,r);return Array.isArray(s)?s:y(s)?(y(o)&&Wd(s,o),y(n)&&ay(n),s):vn()}function Wd(t,e,n){if(t.ns=e,t.tag==="foreignObject"&&(e=void 0,n=!0),y(t.children))for(var r=0,i=t.children.length;r<i;r++){var s=t.children[r];y(s.tag)&&(U(s.ns)||ee(n)&&s.tag!=="svg")&&Wd(s,e,n)}}function ay(t){_e(t.style)&&Is(t.style),_e(t.class)&&Is(t.class)}function cy(t){t._vnode=null,t._staticTrees=null;var e=t.$options,n=t.$vnode=e._parentVnode,r=n&&n.context;t.$slots=$c(e._renderChildren,r),t.$scopedSlots=st,t._c=function(s,o,a,c){return Cs(t,s,o,a,c,!1)},t.$createElement=function(s,o,a,c){return Cs(t,s,o,a,c,!0)};var i=n&&n.data;Rn(t,"$attrs",i&&i.attrs||st,null,!0),Rn(t,"$listeners",e._parentListeners||st,null,!0)}var xa=null;function uy(t){qd(t.prototype),t.prototype.$nextTick=function(e){return Rc(e,this)},t.prototype._render=function(){var e=this,n=e.$options,r=n.render,i=n._parentVnode;i&&(e.$scopedSlots=cs(i.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=i;var s;try{xa=e,s=r.call(e._renderProxy,e.$createElement)}catch(o){$n(o,e,"render"),s=e._vnode}finally{xa=null}return Array.isArray(s)&&s.length===1&&(s=s[0]),s instanceof Se||(s=vn()),s.parent=i,s}}function Go(t,e){return(t.__esModule||co&&t[Symbol.toStringTag]==="Module")&&(t=t.default),_e(t)?e.extend(t):t}function ly(t,e,n,r,i){var s=vn();return s.asyncFactory=t,s.asyncMeta={data:e,context:n,children:r,tag:i},s}function fy(t,e){if(ee(t.error)&&y(t.errorComp))return t.errorComp;if(y(t.resolved))return t.resolved;var n=xa;if(n&&y(t.owners)&&t.owners.indexOf(n)===-1&&t.owners.push(n),ee(t.loading)&&y(t.loadingComp))return t.loadingComp;if(n&&!y(t.owners)){var r=t.owners=[n],i=!0,s=null,o=null;n.$on("hook:destroyed",function(){return Rt(r,n)});var a=function(f){for(var h=0,d=r.length;h<d;h++)r[h].$forceUpdate();f&&(r.length=0,s!==null&&(clearTimeout(s),s=null),o!==null&&(clearTimeout(o),o=null))},c=ws(function(f){t.resolved=Go(f,e),i?r.length=0:a(!0)}),u=ws(function(f){y(t.errorComp)&&(t.error=!0,a(!0))}),l=t(c,u);return _e(l)&&(Sa(l)?U(t.resolved)&&l.then(c,u):Sa(l.component)&&(l.component.then(c,u),y(l.error)&&(t.errorComp=Go(l.error,e)),y(l.loading)&&(t.loadingComp=Go(l.loading,e),l.delay===0?t.loading=!0:s=setTimeout(function(){s=null,U(t.resolved)&&U(t.error)&&(t.loading=!0,a(!1))},l.delay||200)),y(l.timeout)&&(o=setTimeout(function(){o=null,U(t.resolved)&&u(null)},l.timeout)))),i=!1,t.loading?t.loadingComp:t.resolved}}function Kd(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(y(n)&&(y(n.componentOptions)||di(n)))return n}}function hy(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&Gd(t,e)}var pi;function dy(t,e){pi.$on(t,e)}function py(t,e){pi.$off(t,e)}function my(t,e){var n=pi;return function r(){var i=e.apply(null,arguments);i!==null&&n.$off(t,r)}}function Gd(t,e,n){pi=t,Fd(e,n||{},dy,py,my,t),pi=void 0}function gy(t){var e=/^hook:/;t.prototype.$on=function(n,r){var i=this;if(Array.isArray(n))for(var s=0,o=n.length;s<o;s++)i.$on(n[s],r);else(i._events[n]||(i._events[n]=[])).push(r),e.test(n)&&(i._hasHookEvent=!0);return i},t.prototype.$once=function(n,r){var i=this;function s(){i.$off(n,s),r.apply(i,arguments)}return s.fn=r,i.$on(n,s),i},t.prototype.$off=function(n,r){var i=this;if(!arguments.length)return i._events=Object.create(null),i;if(Array.isArray(n)){for(var s=0,o=n.length;s<o;s++)i.$off(n[s],r);return i}var a=i._events[n];if(!a)return i;if(!r)return i._events[n]=null,i;for(var c,u=a.length;u--;)if(c=a[u],c===r||c.fn===r){a.splice(u,1);break}return i},t.prototype.$emit=function(n){var r=this,i=r._events[n];if(i){i=i.length>1?Aa(i):i;for(var s=Aa(arguments,1),o='event handler for "'+n+'"',a=0,c=i.length;a<c;a++)dr(i[a],r,s,r,o)}return r}}var yn=null;function Yd(t){var e=yn;return yn=t,function(){yn=e}}function _y(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function vy(t){t.prototype._update=function(e,n){var r=this,i=r.$el,s=r._vnode,o=Yd(r);r._vnode=e,s?r.$el=r.__patch__(s,e):r.$el=r.__patch__(r.$el,e,n,!1),o(),i&&(i.__vue__=null),r.$el&&(r.$el.__vue__=r),r.$vnode&&r.$parent&&r.$vnode===r.$parent._vnode&&(r.$parent.$el=r.$el)},t.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},t.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){We(e,"beforeDestroy"),e._isBeingDestroyed=!0;var n=e.$parent;n&&!n._isBeingDestroyed&&!e.$options.abstract&&Rt(n.$children,e),e._watcher&&e._watcher.teardown();for(var r=e._watchers.length;r--;)e._watchers[r].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),We(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function yy(t,e,n){t.$el=e,t.$options.render||(t.$options.render=vn),We(t,"beforeMount");var r;return r=function(){t._update(t._render(),n)},new Ge(t,r,Ee,{before:function(){t._isMounted&&!t._isDestroyed&&We(t,"beforeUpdate")}},!0),n=!1,t.$vnode==null&&(t._isMounted=!0,We(t,"mounted")),t}function by(t,e,n,r,i){var s=r.data.scopedSlots,o=t.$scopedSlots,a=!!(s&&!s.$stable||o!==st&&!o.$stable||s&&t.$scopedSlots.$key!==s.$key||!s&&t.$scopedSlots.$key),c=!!(i||t.$options._renderChildren||a);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=i,t.$attrs=r.data.attrs||st,t.$listeners=n||st,e&&t.$options.props){Kt(!1);for(var u=t._props,l=t.$options._propKeys||[],f=0;f<l.length;f++){var h=l[f],d=t.$options.props;u[h]=Oc(h,d,e,t)}Kt(!0),t.$options.propsData=e}n=n||st;var p=t.$options._parentListeners;t.$options._parentListeners=n,Gd(t,n,p),c&&(t.$slots=$c(i,r.context),t.$forceUpdate())}function Xd(t){for(;t&&(t=t.$parent);)if(t._inactive)return!0;return!1}function Dc(t,e){if(e){if(t._directInactive=!1,Xd(t))return}else if(t._directInactive)return;if(t._inactive||t._inactive===null){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Dc(t.$children[n]);We(t,"activated")}}function Jd(t,e){if(!(e&&(t._directInactive=!0,Xd(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Jd(t.$children[n]);We(t,"deactivated")}}function We(t,e){Ii();var n=t.$options[e],r=e+" hook";if(n)for(var i=0,s=n.length;i<s;i++)dr(n[i],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),Ci()}var _t=[],Lc=[],Os={},Ma=!1,xc=!1,nr=0;function Ey(){nr=_t.length=Lc.length=0,Os={},Ma=xc=!1}var Qd=0,Ua=Date.now;if(De&&!Rr){var Yo=window.performance;Yo&&typeof Yo.now=="function"&&Ua()>document.createEvent("Event").timeStamp&&(Ua=function(){return Yo.now()})}function wy(){Qd=Ua(),xc=!0;var t,e;for(_t.sort(function(i,s){return i.id-s.id}),nr=0;nr<_t.length;nr++)t=_t[nr],t.before&&t.before(),e=t.id,Os[e]=null,t.run();var n=Lc.slice(),r=_t.slice();Ey(),Ay(n),Ty(r),Ts&&je.devtools&&Ts.emit("flush")}function Ty(t){for(var e=t.length;e--;){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&We(r,"updated")}}function Sy(t){t._inactive=!1,Lc.push(t)}function Ay(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Dc(t[e],!0)}function Iy(t){var e=t.id;if(Os[e]==null){if(Os[e]=!0,!xc)_t.push(t);else{for(var n=_t.length-1;n>nr&&_t[n].id>t.id;)n--;_t.splice(n+1,0,t)}Ma||(Ma=!0,Rc(wy))}}var Cy=0,Ge=function(e,n,r,i,s){this.vm=e,s&&(e._watcher=this),e._watchers.push(this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync,this.before=i.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=r,this.id=++Cy,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new hi,this.newDepIds=new hi,this.expression="",typeof n=="function"?this.getter=n:(this.getter=_v(n),this.getter||(this.getter=Ee)),this.value=this.lazy?void 0:this.get()};Ge.prototype.get=function(){Ii(this);var e,n=this.vm;try{e=this.getter.call(n,n)}catch(r){if(this.user)$n(r,n,'getter for watcher "'+this.expression+'"');else throw r}finally{this.deep&&Is(e),Ci(),this.cleanupDeps()}return e};Ge.prototype.addDep=function(e){var n=e.id;this.newDepIds.has(n)||(this.newDepIds.add(n),this.newDeps.push(e),this.depIds.has(n)||e.addSub(this))};Ge.prototype.cleanupDeps=function(){for(var e=this.deps.length;e--;){var n=this.deps[e];this.newDepIds.has(n.id)||n.removeSub(this)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0};Ge.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Iy(this)};Ge.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||_e(e)||this.deep){var n=this.value;if(this.value=e,this.user){var r='callback for watcher "'+this.expression+'"';dr(this.cb,this.vm,[e,n],this.vm,r)}else this.cb.call(this.vm,e,n)}}};Ge.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1};Ge.prototype.depend=function(){for(var e=this.deps.length;e--;)this.deps[e].depend()};Ge.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||Rt(this.vm._watchers,this);for(var e=this.deps.length;e--;)this.deps[e].removeSub(this);this.active=!1}};var Mt={enumerable:!0,configurable:!0,get:Ee,set:Ee};function Mc(t,e,n){Mt.get=function(){return this[e][n]},Mt.set=function(i){this[e][n]=i},Object.defineProperty(t,n,Mt)}function Oy(t){t._watchers=[];var e=t.$options;e.props&&Ry(t,e.props),e.methods&&Dy(t,e.methods),e.data?Ny(t):On(t._data={},!0),e.computed&&Py(t,e.computed),e.watch&&e.watch!==Ia&&Ly(t,e.watch)}function Ry(t,e){var n=t.$options.propsData||{},r=t._props={},i=t.$options._propKeys=[],s=!t.$parent;s||Kt(!1);var o=function(c){i.push(c);var u=Oc(c,e,n,t);Rn(r,c,u),c in t||Mc(t,"_props",c)};for(var a in e)o(a);Kt(!0)}function Ny(t){var e=t.$options.data;e=t._data=typeof e=="function"?$y(e,t):e||{},$e(e)||(e={});var n=Object.keys(e),r=t.$options.props;t.$options.methods;for(var i=n.length;i--;){var s=n[i];r&&pe(r,s)||mv(s)||Mc(t,"_data",s)}On(e,!0)}function $y(t,e){Ii();try{return t.call(e,e)}catch(n){return $n(n,e,"data()"),{}}finally{Ci()}}var ky={lazy:!0};function Py(t,e){var n=t._computedWatchers=Object.create(null),r=ao();for(var i in e){var s=e[i],o=typeof s=="function"?s:s.get;r||(n[i]=new Ge(t,o||Ee,Ee,ky)),i in t||Zd(t,i,s)}}function Zd(t,e,n){var r=!ao();typeof n=="function"?(Mt.get=r?Cl(e):Ol(n),Mt.set=Ee):(Mt.get=n.get?r&&n.cache!==!1?Cl(e):Ol(n.get):Ee,Mt.set=n.set||Ee),Object.defineProperty(t,e,Mt)}function Cl(t){return function(){var n=this._computedWatchers&&this._computedWatchers[t];if(n)return n.dirty&&n.evaluate(),Ce.target&&n.depend(),n.value}}function Ol(t){return function(){return t.call(this,this)}}function Dy(t,e){t.$options.props;for(var n in e)t[n]=typeof e[n]!="function"?Ee:dv(e[n],t)}function Ly(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)Fa(t,n,r[i]);else Fa(t,n,r)}}function Fa(t,e,n,r){return $e(n)&&(r=n,n=n.handler),typeof n=="string"&&(n=t[n]),t.$watch(e,n,r)}function xy(t){var e={};e.get=function(){return this._data};var n={};n.get=function(){return this._props},Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Ic,t.prototype.$delete=Md,t.prototype.$watch=function(r,i,s){var o=this;if($e(i))return Fa(o,r,i,s);s=s||{},s.user=!0;var a=new Ge(o,r,i,s);if(s.immediate){var c='callback for immediate watcher "'+a.expression+'"';Ii(),dr(i,o,[a.value],o,c),Ci()}return function(){a.teardown()}}}var My=0;function Uy(t){t.prototype._init=function(e){var n=this;n._uid=My++,n._isVue=!0,e&&e._isComponent?Fy(n,e):n.$options=Nn(Uc(n.constructor),e||{},n),n._renderProxy=n,n._self=n,_y(n),hy(n),cy(n),We(n,"beforeCreate"),Bv(n),Oy(n),Fv(n),We(n,"created"),n.$options.el&&n.$mount(n.$options.el)}}function Fy(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Uc(t){var e=t.options;if(t.super){var n=Uc(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=By(t);i&&Y(t.extendOptions,i),e=t.options=Nn(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function By(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}function Q(t){this._init(t)}Uy(Q);xy(Q);gy(Q);vy(Q);uy(Q);function jy(t){t.use=function(e){var n=this._installedPlugins||(this._installedPlugins=[]);if(n.indexOf(e)>-1)return this;var r=Aa(arguments,1);return r.unshift(this),typeof e.install=="function"?e.install.apply(e,r):typeof e=="function"&&e.apply(null,r),n.push(e),this}}function Hy(t){t.mixin=function(e){return this.options=Nn(this.options,e),this}}function Vy(t){t.cid=0;var e=1;t.extend=function(n){n=n||{};var r=this,i=r.cid,s=n._Ctor||(n._Ctor={});if(s[i])return s[i];var o=n.name||r.options.name,a=function(u){this._init(u)};return a.prototype=Object.create(r.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Nn(r.options,n),a.super=r,a.options.props&&qy(a),a.options.computed&&zy(a),a.extend=r.extend,a.mixin=r.mixin,a.use=r.use,oo.forEach(function(c){a[c]=r[c]}),o&&(a.options.components[o]=a),a.superOptions=r.options,a.extendOptions=n,a.sealedOptions=Y({},a.options),s[i]=a,a}}function qy(t){var e=t.options.props;for(var n in e)Mc(t.prototype,"_props",n)}function zy(t){var e=t.options.computed;for(var n in e)Zd(t.prototype,n,e[n])}function Wy(t){oo.forEach(function(e){t[e]=function(n,r){return r?(e==="component"&&$e(r)&&(r.name=r.name||n,r=this.options._base.extend(r)),e==="directive"&&typeof r=="function"&&(r={bind:r,update:r}),this.options[e+"s"][n]=r,r):this.options[e+"s"][n]}})}function Rl(t){return t&&(t.Ctor.options.name||t.tag)}function zi(t,e){return Array.isArray(t)?t.indexOf(e)>-1:typeof t=="string"?t.split(",").indexOf(e)>-1:iv(t)?t.test(e):!1}function Nl(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var s in n){var o=n[s];if(o){var a=o.name;a&&!e(a)&&Ba(n,s,r,i)}}}function Ba(t,e,n,r){var i=t[e];i&&(!r||i.tag!==r.tag)&&i.componentInstance.$destroy(),t[e]=null,Rt(n,e)}var $l=[String,RegExp,Array],Ky={name:"keep-alive",abstract:!0,props:{include:$l,exclude:$l,max:[String,Number]},methods:{cacheVNode:function(){var e=this,n=e.cache,r=e.keys,i=e.vnodeToCache,s=e.keyToCache;if(i){var o=i.tag,a=i.componentInstance,c=i.componentOptions;n[s]={name:Rl(c),tag:o,componentInstance:a},r.push(s),this.max&&r.length>parseInt(this.max)&&Ba(n,r[0],r,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)Ba(this.cache,e,this.keys)},mounted:function(){var e=this;this.cacheVNode(),this.$watch("include",function(n){Nl(e,function(r){return zi(n,r)})}),this.$watch("exclude",function(n){Nl(e,function(r){return!zi(n,r)})})},updated:function(){this.cacheVNode()},render:function(){var e=this.$slots.default,n=Kd(e),r=n&&n.componentOptions;if(r){var i=Rl(r),s=this,o=s.include,a=s.exclude;if(o&&(!i||!zi(o,i))||a&&i&&zi(a,i))return n;var c=this,u=c.cache,l=c.keys,f=n.key==null?r.Ctor.cid+(r.tag?"::"+r.tag:""):n.key;u[f]?(n.componentInstance=u[f].componentInstance,Rt(l,f),l.push(f)):(this.vnodeToCache=n,this.keyToCache=f),n.data.keepAlive=!0}return n||e&&e[0]}},Gy={KeepAlive:Ky};function Yy(t){var e={};e.get=function(){return je},Object.defineProperty(t,"config",e),t.util={warn:bv,extend:Y,mergeOptions:Nn,defineReactive:Rn},t.set=Ic,t.delete=Md,t.nextTick=Rc,t.observable=function(n){return On(n),n},t.options=Object.create(null),oo.forEach(function(n){t.options[n+"s"]=Object.create(null)}),t.options._base=t,Y(t.options.components,Gy),jy(t),Hy(t),Vy(t),Wy(t)}Yy(Q);Object.defineProperty(Q.prototype,"$isServer",{get:ao});Object.defineProperty(Q.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}});Object.defineProperty(Q,"FunctionalRenderContext",{value:kc});Q.version="2.6.14";var Xy=Ke("style,class"),Jy=Ke("input,textarea,option,select,progress"),Qy=function(t,e,n){return n==="value"&&Jy(t)&&e!=="button"||n==="selected"&&t==="option"||n==="checked"&&t==="input"||n==="muted"&&t==="video"},ep=Ke("contenteditable,draggable,spellcheck"),Zy=Ke("events,caret,typing,plaintext-only"),eb=function(t,e){return Rs(e)||e==="false"?"false":t==="contenteditable"&&Zy(e)?e:"true"},tb=Ke("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),ja="http://www.w3.org/1999/xlink",Fc=function(t){return t.charAt(5)===":"&&t.slice(0,5)==="xlink"},tp=function(t){return Fc(t)?t.slice(6,t.length):""},Rs=function(t){return t==null||t===!1};function nb(t){for(var e=t.data,n=t,r=t;y(r.componentInstance);)r=r.componentInstance._vnode,r&&r.data&&(e=kl(r.data,e));for(;y(n=n.parent);)n&&n.data&&(e=kl(e,n.data));return rb(e.staticClass,e.class)}function kl(t,e){return{staticClass:Bc(t.staticClass,e.staticClass),class:y(t.class)?[t.class,e.class]:e.class}}function rb(t,e){return y(t)||y(e)?Bc(t,jc(e)):""}function Bc(t,e){return t?e?t+" "+e:t:e||""}function jc(t){return Array.isArray(t)?ib(t):_e(t)?sb(t):typeof t=="string"?t:""}function ib(t){for(var e="",n,r=0,i=t.length;r<i;r++)y(n=jc(t[r]))&&n!==""&&(e&&(e+=" "),e+=n);return e}function sb(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var ob={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},ab=Ke("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Hc=Ke("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),np=function(t){return ab(t)||Hc(t)};function cb(t){if(Hc(t))return"svg";if(t==="math")return"math"}var Wi=Object.create(null);function ub(t){if(!De)return!0;if(np(t))return!1;if(t=t.toLowerCase(),Wi[t]!=null)return Wi[t];var e=document.createElement(t);return t.indexOf("-")>-1?Wi[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:Wi[t]=/HTMLUnknownElement/.test(e.toString())}var Ha=Ke("text,number,password,search,email,tel,url");function lb(t){if(typeof t=="string"){var e=document.querySelector(t);return e||document.createElement("div")}else return t}function fb(t,e){var n=document.createElement(t);return t!=="select"||e.data&&e.data.attrs&&e.data.attrs.multiple!==void 0&&n.setAttribute("multiple","multiple"),n}function hb(t,e){return document.createElementNS(ob[t],e)}function db(t){return document.createTextNode(t)}function pb(t){return document.createComment(t)}function mb(t,e,n){t.insertBefore(e,n)}function gb(t,e){t.removeChild(e)}function _b(t,e){t.appendChild(e)}function vb(t){return t.parentNode}function yb(t){return t.nextSibling}function bb(t){return t.tagName}function Eb(t,e){t.textContent=e}function wb(t,e){t.setAttribute(e,"")}var Tb=Object.freeze({createElement:fb,createElementNS:hb,createTextNode:db,createComment:pb,insertBefore:mb,removeChild:gb,appendChild:_b,parentNode:vb,nextSibling:yb,tagName:bb,setTextContent:Eb,setStyleScope:wb}),Sb={create:function(e,n){rr(n)},update:function(e,n){e.data.ref!==n.data.ref&&(rr(e,!0),rr(n))},destroy:function(e){rr(e,!0)}};function rr(t,e){var n=t.data.ref;if(!!y(n)){var r=t.context,i=t.componentInstance||t.elm,s=r.$refs;e?Array.isArray(s[n])?Rt(s[n],i):s[n]===i&&(s[n]=void 0):t.data.refInFor?Array.isArray(s[n])?s[n].indexOf(i)<0&&s[n].push(i):s[n]=[i]:s[n]=i}}var mn=new Se("",{},[]),jr=["create","activate","update","remove","destroy"];function an(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&y(t.data)===y(e.data)&&Ab(t,e)||ee(t.isAsyncPlaceholder)&&U(e.asyncFactory.error))}function Ab(t,e){if(t.tag!=="input")return!0;var n,r=y(n=t.data)&&y(n=n.attrs)&&n.type,i=y(n=e.data)&&y(n=n.attrs)&&n.type;return r===i||Ha(r)&&Ha(i)}function Ib(t,e,n){var r,i,s={};for(r=e;r<=n;++r)i=t[r].key,y(i)&&(s[i]=r);return s}function Cb(t){var e,n,r={},i=t.modules,s=t.nodeOps;for(e=0;e<jr.length;++e)for(r[jr[e]]=[],n=0;n<i.length;++n)y(i[n][jr[e]])&&r[jr[e]].push(i[n][jr[e]]);function o(v){return new Se(s.tagName(v).toLowerCase(),{},[],void 0,v)}function a(v,_){function E(){--E.listeners===0&&c(v)}return E.listeners=_,E}function c(v){var _=s.parentNode(v);y(_)&&s.removeChild(_,v)}function u(v,_,E,I,R,x,k){if(y(v.elm)&&y(x)&&(v=x[k]=Ca(v)),v.isRootInsert=!R,!l(v,_,E,I)){var L=v.data,j=v.children,q=v.tag;y(q)?(v.elm=v.ns?s.createElementNS(v.ns,q):s.createElement(q,v),b(v),p(v,j,_),y(L)&&g(v,_),d(E,v.elm,I)):ee(v.isComment)?(v.elm=s.createComment(v.text),d(E,v.elm,I)):(v.elm=s.createTextNode(v.text),d(E,v.elm,I))}}function l(v,_,E,I){var R=v.data;if(y(R)){var x=y(v.componentInstance)&&R.keepAlive;if(y(R=R.hook)&&y(R=R.init)&&R(v,!1),y(v.componentInstance))return f(v,_),d(E,v.elm,I),ee(x)&&h(v,_,E,I),!0}}function f(v,_){y(v.data.pendingInsert)&&(_.push.apply(_,v.data.pendingInsert),v.data.pendingInsert=null),v.elm=v.componentInstance.$el,m(v)?(g(v,_),b(v)):(rr(v),_.push(v))}function h(v,_,E,I){for(var R,x=v;x.componentInstance;)if(x=x.componentInstance._vnode,y(R=x.data)&&y(R=R.transition)){for(R=0;R<r.activate.length;++R)r.activate[R](mn,x);_.push(x);break}d(E,v.elm,I)}function d(v,_,E){y(v)&&(y(E)?s.parentNode(E)===v&&s.insertBefore(v,_,E):s.appendChild(v,_))}function p(v,_,E){if(Array.isArray(_))for(var I=0;I<_.length;++I)u(_[I],E,v.elm,null,!0,_,I);else Si(v.text)&&s.appendChild(v.elm,s.createTextNode(String(v.text)))}function m(v){for(;v.componentInstance;)v=v.componentInstance._vnode;return y(v.tag)}function g(v,_){for(var E=0;E<r.create.length;++E)r.create[E](mn,v);e=v.data.hook,y(e)&&(y(e.create)&&e.create(mn,v),y(e.insert)&&_.push(v))}function b(v){var _;if(y(_=v.fnScopeId))s.setStyleScope(v.elm,_);else for(var E=v;E;)y(_=E.context)&&y(_=_.$options._scopeId)&&s.setStyleScope(v.elm,_),E=E.parent;y(_=yn)&&_!==v.context&&_!==v.fnContext&&y(_=_.$options._scopeId)&&s.setStyleScope(v.elm,_)}function A(v,_,E,I,R,x){for(;I<=R;++I)u(E[I],x,v,_,!1,E,I)}function S(v){var _,E,I=v.data;if(y(I))for(y(_=I.hook)&&y(_=_.destroy)&&_(v),_=0;_<r.destroy.length;++_)r.destroy[_](v);if(y(_=v.children))for(E=0;E<v.children.length;++E)S(v.children[E])}function T(v,_,E){for(;_<=E;++_){var I=v[_];y(I)&&(y(I.tag)?(C(I),S(I)):c(I.elm))}}function C(v,_){if(y(_)||y(v.data)){var E,I=r.remove.length+1;for(y(_)?_.listeners+=I:_=a(v.elm,I),y(E=v.componentInstance)&&y(E=E._vnode)&&y(E.data)&&C(E,_),E=0;E<r.remove.length;++E)r.remove[E](v,_);y(E=v.data.hook)&&y(E=E.remove)?E(v,_):_()}else c(v.elm)}function O(v,_,E,I,R){for(var x=0,k=0,L=_.length-1,j=_[0],q=_[L],H=E.length-1,J=E[0],ne=E[H],ce,ve,Ae,Ze,sn=!R;x<=L&&k<=H;)U(j)?j=_[++x]:U(q)?q=_[--L]:an(j,J)?(D(j,J,I,E,k),j=_[++x],J=E[++k]):an(q,ne)?(D(q,ne,I,E,H),q=_[--L],ne=E[--H]):an(j,ne)?(D(j,ne,I,E,H),sn&&s.insertBefore(v,j.elm,s.nextSibling(q.elm)),j=_[++x],ne=E[--H]):an(q,J)?(D(q,J,I,E,k),sn&&s.insertBefore(v,q.elm,j.elm),q=_[--L],J=E[++k]):(U(ce)&&(ce=Ib(_,x,L)),ve=y(J.key)?ce[J.key]:$(J,_,x,L),U(ve)?u(J,I,v,j.elm,!1,E,k):(Ae=_[ve],an(Ae,J)?(D(Ae,J,I,E,k),_[ve]=void 0,sn&&s.insertBefore(v,Ae.elm,j.elm)):u(J,I,v,j.elm,!1,E,k)),J=E[++k]);x>L?(Ze=U(E[H+1])?null:E[H+1].elm,A(v,Ze,E,k,H,I)):k>H&&T(_,x,L)}function $(v,_,E,I){for(var R=E;R<I;R++){var x=_[R];if(y(x)&&an(v,x))return R}}function D(v,_,E,I,R,x){if(v!==_){y(_.elm)&&y(I)&&(_=I[R]=Ca(_));var k=_.elm=v.elm;if(ee(v.isAsyncPlaceholder)){y(_.asyncFactory.resolved)?G(v.elm,_,E):_.isAsyncPlaceholder=!0;return}if(ee(_.isStatic)&&ee(v.isStatic)&&_.key===v.key&&(ee(_.isCloned)||ee(_.isOnce))){_.componentInstance=v.componentInstance;return}var L,j=_.data;y(j)&&y(L=j.hook)&&y(L=L.prepatch)&&L(v,_);var q=v.children,H=_.children;if(y(j)&&m(_)){for(L=0;L<r.update.length;++L)r.update[L](v,_);y(L=j.hook)&&y(L=L.update)&&L(v,_)}U(_.text)?y(q)&&y(H)?q!==H&&O(k,q,H,E,x):y(H)?(y(v.text)&&s.setTextContent(k,""),A(k,null,H,0,H.length-1,E)):y(q)?T(q,0,q.length-1):y(v.text)&&s.setTextContent(k,""):v.text!==_.text&&s.setTextContent(k,_.text),y(j)&&y(L=j.hook)&&y(L=L.postpatch)&&L(v,_)}}function V(v,_,E){if(ee(E)&&y(v.parent))v.parent.data.pendingInsert=_;else for(var I=0;I<_.length;++I)_[I].data.hook.insert(_[I])}var K=Ke("attrs,class,staticClass,staticStyle,key");function G(v,_,E,I){var R,x=_.tag,k=_.data,L=_.children;if(I=I||k&&k.pre,_.elm=v,ee(_.isComment)&&y(_.asyncFactory))return _.isAsyncPlaceholder=!0,!0;if(y(k)&&(y(R=k.hook)&&y(R=R.init)&&R(_,!0),y(R=_.componentInstance)))return f(_,E),!0;if(y(x)){if(y(L))if(!v.hasChildNodes())p(_,L,E);else if(y(R=k)&&y(R=R.domProps)&&y(R=R.innerHTML)){if(R!==v.innerHTML)return!1}else{for(var j=!0,q=v.firstChild,H=0;H<L.length;H++){if(!q||!G(q,L[H],E,I)){j=!1;break}q=q.nextSibling}if(!j||q)return!1}if(y(k)){var J=!1;for(var ne in k)if(!K(ne)){J=!0,g(_,E);break}!J&&k.class&&Is(k.class)}}else v.data!==_.text&&(v.data=_.text);return!0}return function(_,E,I,R){if(U(E)){y(_)&&S(_);return}var x=!1,k=[];if(U(_))x=!0,u(E,k);else{var L=y(_.nodeType);if(!L&&an(_,E))D(_,E,k,null,null,R);else{if(L){if(_.nodeType===1&&_.hasAttribute(ll)&&(_.removeAttribute(ll),I=!0),ee(I)&&G(_,E,k))return V(E,k,!0),_;_=o(_)}var j=_.elm,q=s.parentNode(j);if(u(E,k,j._leaveCb?null:q,s.nextSibling(j)),y(E.parent))for(var H=E.parent,J=m(E);H;){for(var ne=0;ne<r.destroy.length;++ne)r.destroy[ne](H);if(H.elm=E.elm,J){for(var ce=0;ce<r.create.length;++ce)r.create[ce](mn,H);var ve=H.data.hook.insert;if(ve.merged)for(var Ae=1;Ae<ve.fns.length;Ae++)ve.fns[Ae]()}else rr(H);H=H.parent}y(q)?T([_],0,0):y(_.tag)&&S(_)}}return V(E,k,x),E.elm}}var Ob={create:Xo,update:Xo,destroy:function(e){Xo(e,mn)}};function Xo(t,e){(t.data.directives||e.data.directives)&&Rb(t,e)}function Rb(t,e){var n=t===mn,r=e===mn,i=Pl(t.data.directives,t.context),s=Pl(e.data.directives,e.context),o=[],a=[],c,u,l;for(c in s)u=i[c],l=s[c],u?(l.oldValue=u.value,l.oldArg=u.arg,Hr(l,"update",e,t),l.def&&l.def.componentUpdated&&a.push(l)):(Hr(l,"bind",e,t),l.def&&l.def.inserted&&o.push(l));if(o.length){var f=function(){for(var h=0;h<o.length;h++)Hr(o[h],"inserted",e,t)};n?Ht(e,"insert",f):f()}if(a.length&&Ht(e,"postpatch",function(){for(var h=0;h<a.length;h++)Hr(a[h],"componentUpdated",e,t)}),!n)for(c in i)s[c]||Hr(i[c],"unbind",t,t,r)}var Nb=Object.create(null);function Pl(t,e){var n=Object.create(null);if(!t)return n;var r,i;for(r=0;r<t.length;r++)i=t[r],i.modifiers||(i.modifiers=Nb),n[$b(i)]=i,i.def=Cc(e.$options,"directives",i.name);return n}function $b(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function Hr(t,e,n,r,i){var s=t.def&&t.def[e];if(s)try{s(n.elm,t,n,r,i)}catch(o){$n(o,n.context,"directive "+t.name+" "+e+" hook")}}var kb=[Sb,Ob];function Dl(t,e){var n=e.componentOptions;if(!(y(n)&&n.Ctor.options.inheritAttrs===!1)&&!(U(t.data.attrs)&&U(e.data.attrs))){var r,i,s,o=e.elm,a=t.data.attrs||{},c=e.data.attrs||{};y(c.__ob__)&&(c=e.data.attrs=Y({},c));for(r in c)i=c[r],s=a[r],s!==i&&Ll(o,r,i,e.data.pre);(Rr||Sc)&&c.value!==a.value&&Ll(o,"value",c.value);for(r in a)U(c[r])&&(Fc(r)?o.removeAttributeNS(ja,tp(r)):ep(r)||o.removeAttribute(r))}}function Ll(t,e,n,r){r||t.tagName.indexOf("-")>-1?xl(t,e,n):tb(e)?Rs(n)?t.removeAttribute(e):(n=e==="allowfullscreen"&&t.tagName==="EMBED"?"true":e,t.setAttribute(e,n)):ep(e)?t.setAttribute(e,eb(e,n)):Fc(e)?Rs(n)?t.removeAttributeNS(ja,tp(e)):t.setAttributeNS(ja,e,n):xl(t,e,n)}function xl(t,e,n){if(Rs(n))t.removeAttribute(e);else{if(Rr&&!Nr&&t.tagName==="TEXTAREA"&&e==="placeholder"&&n!==""&&!t.__ieph){var r=function(i){i.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var Pb={create:Dl,update:Dl};function Ml(t,e){var n=e.elm,r=e.data,i=t.data;if(!(U(r.staticClass)&&U(r.class)&&(U(i)||U(i.staticClass)&&U(i.class)))){var s=nb(e),o=n._transitionClasses;y(o)&&(s=Bc(s,jc(o))),s!==n._prevClass&&(n.setAttribute("class",s),n._prevClass=s)}}var Db={create:Ml,update:Ml},Jo="__r",Qo="__c";function Lb(t){if(y(t[Jo])){var e=Rr?"change":"input";t[e]=[].concat(t[Jo],t[e]||[]),delete t[Jo]}y(t[Qo])&&(t.change=[].concat(t[Qo],t.change||[]),delete t[Qo])}var mi;function xb(t,e,n){var r=mi;return function i(){var s=e.apply(null,arguments);s!==null&&rp(t,i,n,r)}}var Mb=$a&&!(fl&&Number(fl[1])<=53);function Ub(t,e,n,r){if(Mb){var i=Qd,s=e;e=s._wrapper=function(o){if(o.target===o.currentTarget||o.timeStamp>=i||o.timeStamp<=0||o.target.ownerDocument!==document)return s.apply(this,arguments)}}mi.addEventListener(t,e,Dd?{capture:n,passive:r}:n)}function rp(t,e,n,r){(r||mi).removeEventListener(t,e._wrapper||e,n)}function Ul(t,e){if(!(U(t.data.on)&&U(e.data.on))){var n=e.data.on||{},r=t.data.on||{};mi=e.elm,Lb(n),Fd(n,r,Ub,rp,xb,e.context),mi=void 0}}var Fb={create:Ul,update:Ul},Ki;function Fl(t,e){if(!(U(t.data.domProps)&&U(e.data.domProps))){var n,r,i=e.elm,s=t.data.domProps||{},o=e.data.domProps||{};y(o.__ob__)&&(o=e.data.domProps=Y({},o));for(n in s)n in o||(i[n]="");for(n in o){if(r=o[n],n==="textContent"||n==="innerHTML"){if(e.children&&(e.children.length=0),r===s[n])continue;i.childNodes.length===1&&i.removeChild(i.childNodes[0])}if(n==="value"&&i.tagName!=="PROGRESS"){i._value=r;var a=U(r)?"":String(r);Bb(i,a)&&(i.value=a)}else if(n==="innerHTML"&&Hc(i.tagName)&&U(i.innerHTML)){Ki=Ki||document.createElement("div"),Ki.innerHTML="<svg>"+r+"</svg>";for(var c=Ki.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;c.firstChild;)i.appendChild(c.firstChild)}else if(r!==s[n])try{i[n]=r}catch{}}}}function Bb(t,e){return!t.composing&&(t.tagName==="OPTION"||jb(t,e)||Hb(t,e))}function jb(t,e){var n=!0;try{n=document.activeElement!==t}catch{}return n&&t.value!==e}function Hb(t,e){var n=t.value,r=t._vModifiers;if(y(r)){if(r.number)return fi(n)!==fi(e);if(r.trim)return n.trim()!==e.trim()}return n!==e}var Vb={create:Fl,update:Fl},qb=Bn(function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach(function(i){if(i){var s=i.split(r);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e});function Zo(t){var e=ip(t.style);return t.staticStyle?Y(t.staticStyle,e):e}function ip(t){return Array.isArray(t)?Rd(t):typeof t=="string"?qb(t):t}function zb(t,e){var n={},r;if(e)for(var i=t;i.componentInstance;)i=i.componentInstance._vnode,i&&i.data&&(r=Zo(i.data))&&Y(n,r);(r=Zo(t.data))&&Y(n,r);for(var s=t;s=s.parent;)s.data&&(r=Zo(s.data))&&Y(n,r);return n}var Wb=/^--/,Bl=/\s*!important$/,jl=function(t,e,n){if(Wb.test(e))t.style.setProperty(e,n);else if(Bl.test(n))t.style.setProperty(Ai(e),n.replace(Bl,""),"important");else{var r=Kb(e);if(Array.isArray(n))for(var i=0,s=n.length;i<s;i++)t.style[r]=n[i];else t.style[r]=n}},Hl=["Webkit","Moz","ms"],Gi,Kb=Bn(function(t){if(Gi=Gi||document.createElement("div").style,t=In(t),t!=="filter"&&t in Gi)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<Hl.length;n++){var r=Hl[n]+e;if(r in Gi)return r}});function Vl(t,e){var n=e.data,r=t.data;if(!(U(n.staticStyle)&&U(n.style)&&U(r.staticStyle)&&U(r.style))){var i,s,o=e.elm,a=r.staticStyle,c=r.normalizedStyle||r.style||{},u=a||c,l=ip(e.data.style)||{};e.data.normalizedStyle=y(l.__ob__)?Y({},l):l;var f=zb(e,!0);for(s in u)U(f[s])&&jl(o,s,"");for(s in f)i=f[s],i!==u[s]&&jl(o,s,i==null?"":i)}}var Gb={create:Vl,update:Vl},sp=/\s+/;function op(t,e){if(!(!e||!(e=e.trim())))if(t.classList)e.indexOf(" ")>-1?e.split(sp).forEach(function(r){return t.classList.add(r)}):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function ap(t,e){if(!(!e||!(e=e.trim())))if(t.classList)e.indexOf(" ")>-1?e.split(sp).forEach(function(i){return t.classList.remove(i)}):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{for(var n=" "+(t.getAttribute("class")||"")+" ",r=" "+e+" ";n.indexOf(r)>=0;)n=n.replace(r," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function cp(t){if(!!t){if(typeof t=="object"){var e={};return t.css!==!1&&Y(e,ql(t.name||"v")),Y(e,t),e}else if(typeof t=="string")return ql(t)}}var ql=Bn(function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}}),up=De&&!Nr,Qn="transition",ea="animation",us="transition",Ns="transitionend",Va="animation",lp="animationend";up&&(window.ontransitionend===void 0&&window.onwebkittransitionend!==void 0&&(us="WebkitTransition",Ns="webkitTransitionEnd"),window.onanimationend===void 0&&window.onwebkitanimationend!==void 0&&(Va="WebkitAnimation",lp="webkitAnimationEnd"));var zl=De?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function fp(t){zl(function(){zl(t)})}function bn(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),op(t,e))}function vt(t,e){t._transitionClasses&&Rt(t._transitionClasses,e),ap(t,e)}function hp(t,e,n){var r=dp(t,e),i=r.type,s=r.timeout,o=r.propCount;if(!i)return n();var a=i===Qn?Ns:lp,c=0,u=function(){t.removeEventListener(a,l),n()},l=function(f){f.target===t&&++c>=o&&u()};setTimeout(function(){c<o&&u()},s+1),t.addEventListener(a,l)}var Yb=/\b(transform|all)(,|$)/;function dp(t,e){var n=window.getComputedStyle(t),r=(n[us+"Delay"]||"").split(", "),i=(n[us+"Duration"]||"").split(", "),s=Wl(r,i),o=(n[Va+"Delay"]||"").split(", "),a=(n[Va+"Duration"]||"").split(", "),c=Wl(o,a),u,l=0,f=0;e===Qn?s>0&&(u=Qn,l=s,f=i.length):e===ea?c>0&&(u=ea,l=c,f=a.length):(l=Math.max(s,c),u=l>0?s>c?Qn:ea:null,f=u?u===Qn?i.length:a.length:0);var h=u===Qn&&Yb.test(n[us+"Property"]);return{type:u,timeout:l,propCount:f,hasTransform:h}}function Wl(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max.apply(null,e.map(function(n,r){return Kl(n)+Kl(t[r])}))}function Kl(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function qa(t,e){var n=t.elm;y(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=cp(t.data.transition);if(!U(r)&&!(y(n._enterCb)||n.nodeType!==1)){for(var i=r.css,s=r.type,o=r.enterClass,a=r.enterToClass,c=r.enterActiveClass,u=r.appearClass,l=r.appearToClass,f=r.appearActiveClass,h=r.beforeEnter,d=r.enter,p=r.afterEnter,m=r.enterCancelled,g=r.beforeAppear,b=r.appear,A=r.afterAppear,S=r.appearCancelled,T=r.duration,C=yn,O=yn.$vnode;O&&O.parent;)C=O.context,O=O.parent;var $=!C._isMounted||!t.isRootInsert;if(!($&&!b&&b!=="")){var D=$&&u?u:o,V=$&&f?f:c,K=$&&l?l:a,G=$&&g||h,v=$&&typeof b=="function"?b:d,_=$&&A||p,E=$&&S||m,I=fi(_e(T)?T.enter:T),R=i!==!1&&!Nr,x=Vc(v),k=n._enterCb=ws(function(){R&&(vt(n,K),vt(n,V)),k.cancelled?(R&&vt(n,D),E&&E(n)):_&&_(n),n._enterCb=null});t.data.show||Ht(t,"insert",function(){var L=n.parentNode,j=L&&L._pending&&L._pending[t.key];j&&j.tag===t.tag&&j.elm._leaveCb&&j.elm._leaveCb(),v&&v(n,k)}),G&&G(n),R&&(bn(n,D),bn(n,V),fp(function(){vt(n,D),k.cancelled||(bn(n,K),x||(mp(I)?setTimeout(k,I):hp(n,s,k)))})),t.data.show&&(e&&e(),v&&v(n,k)),!R&&!x&&k()}}}function pp(t,e){var n=t.elm;y(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=cp(t.data.transition);if(U(r)||n.nodeType!==1)return e();if(y(n._leaveCb))return;var i=r.css,s=r.type,o=r.leaveClass,a=r.leaveToClass,c=r.leaveActiveClass,u=r.beforeLeave,l=r.leave,f=r.afterLeave,h=r.leaveCancelled,d=r.delayLeave,p=r.duration,m=i!==!1&&!Nr,g=Vc(l),b=fi(_e(p)?p.leave:p),A=n._leaveCb=ws(function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),m&&(vt(n,a),vt(n,c)),A.cancelled?(m&&vt(n,o),h&&h(n)):(e(),f&&f(n)),n._leaveCb=null});d?d(S):S();function S(){A.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),u&&u(n),m&&(bn(n,o),bn(n,c),fp(function(){vt(n,o),A.cancelled||(bn(n,a),g||(mp(b)?setTimeout(A,b):hp(n,s,A)))})),l&&l(n,A),!m&&!g&&A())}}function mp(t){return typeof t=="number"&&!isNaN(t)}function Vc(t){if(U(t))return!1;var e=t.fns;return y(e)?Vc(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function Gl(t,e){e.data.show!==!0&&qa(e)}var Xb=De?{create:Gl,activate:Gl,remove:function(e,n){e.data.show!==!0?pp(e,n):n()}}:{},Jb=[Pb,Db,Fb,Vb,Gb,Xb],Qb=Jb.concat(kb),Zb=Cb({nodeOps:Tb,modules:Qb});Nr&&document.addEventListener("selectionchange",function(){var t=document.activeElement;t&&t.vmodel&&qc(t,"input")});var gp={inserted:function(e,n,r,i){r.tag==="select"?(i.elm&&!i.elm._vOptions?Ht(r,"postpatch",function(){gp.componentUpdated(e,n,r)}):Yl(e,n,r.context),e._vOptions=[].map.call(e.options,$s)):(r.tag==="textarea"||Ha(e.type))&&(e._vModifiers=n.modifiers,n.modifiers.lazy||(e.addEventListener("compositionstart",eE),e.addEventListener("compositionend",Ql),e.addEventListener("change",Ql),Nr&&(e.vmodel=!0)))},componentUpdated:function(e,n,r){if(r.tag==="select"){Yl(e,n,r.context);var i=e._vOptions,s=e._vOptions=[].map.call(e.options,$s);if(s.some(function(a,c){return!Cn(a,i[c])})){var o=e.multiple?n.value.some(function(a){return Jl(a,s)}):n.value!==n.oldValue&&Jl(n.value,s);o&&qc(e,"change")}}}};function Yl(t,e,n){Xl(t,e),(Rr||Sc)&&setTimeout(function(){Xl(t,e)},0)}function Xl(t,e,n){var r=e.value,i=t.multiple;if(!(i&&!Array.isArray(r))){for(var s,o,a=0,c=t.options.length;a<c;a++)if(o=t.options[a],i)s=$d(r,$s(o))>-1,o.selected!==s&&(o.selected=s);else if(Cn($s(o),r)){t.selectedIndex!==a&&(t.selectedIndex=a);return}i||(t.selectedIndex=-1)}}function Jl(t,e){return e.every(function(n){return!Cn(n,t)})}function $s(t){return"_value"in t?t._value:t.value}function eE(t){t.target.composing=!0}function Ql(t){!t.target.composing||(t.target.composing=!1,qc(t.target,"input"))}function qc(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function za(t){return t.componentInstance&&(!t.data||!t.data.transition)?za(t.componentInstance._vnode):t}var tE={bind:function(e,n,r){var i=n.value;r=za(r);var s=r.data&&r.data.transition,o=e.__vOriginalDisplay=e.style.display==="none"?"":e.style.display;i&&s?(r.data.show=!0,qa(r,function(){e.style.display=o})):e.style.display=i?o:"none"},update:function(e,n,r){var i=n.value,s=n.oldValue;if(!i!=!s){r=za(r);var o=r.data&&r.data.transition;o?(r.data.show=!0,i?qa(r,function(){e.style.display=e.__vOriginalDisplay}):pp(r,function(){e.style.display="none"})):e.style.display=i?e.__vOriginalDisplay:"none"}},unbind:function(e,n,r,i,s){s||(e.style.display=e.__vOriginalDisplay)}},nE={model:gp,show:tE},_p={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function Wa(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?Wa(Kd(e.children)):t}function vp(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var i=n._parentListeners;for(var s in i)e[In(s)]=i[s];return e}function Zl(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function rE(t){for(;t=t.parent;)if(t.data.transition)return!0}function iE(t,e){return e.key===t.key&&e.tag===t.tag}var sE=function(t){return t.tag||di(t)},oE=function(t){return t.name==="show"},aE={name:"transition",props:_p,abstract:!0,render:function(e){var n=this,r=this.$slots.default;if(!!r&&(r=r.filter(sE),!!r.length)){var i=this.mode,s=r[0];if(rE(this.$vnode))return s;var o=Wa(s);if(!o)return s;if(this._leaving)return Zl(e,s);var a="__transition-"+this._uid+"-";o.key=o.key==null?o.isComment?a+"comment":a+o.tag:Si(o.key)?String(o.key).indexOf(a)===0?o.key:a+o.key:o.key;var c=(o.data||(o.data={})).transition=vp(this),u=this._vnode,l=Wa(u);if(o.data.directives&&o.data.directives.some(oE)&&(o.data.show=!0),l&&l.data&&!iE(o,l)&&!di(l)&&!(l.componentInstance&&l.componentInstance._vnode.isComment)){var f=l.data.transition=Y({},c);if(i==="out-in")return this._leaving=!0,Ht(f,"afterLeave",function(){n._leaving=!1,n.$forceUpdate()}),Zl(e,s);if(i==="in-out"){if(di(o))return u;var h,d=function(){h()};Ht(c,"afterEnter",d),Ht(c,"enterCancelled",d),Ht(f,"delayLeave",function(p){h=p})}}return s}}},yp=Y({tag:String,moveClass:String},_p);delete yp.mode;var cE={props:yp,beforeMount:function(){var e=this,n=this._update;this._update=function(r,i){var s=Yd(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,s(),n.call(e,r,i)}},render:function(e){for(var n=this.tag||this.$vnode.data.tag||"span",r=Object.create(null),i=this.prevChildren=this.children,s=this.$slots.default||[],o=this.children=[],a=vp(this),c=0;c<s.length;c++){var u=s[c];u.tag&&u.key!=null&&String(u.key).indexOf("__vlist")!==0&&(o.push(u),r[u.key]=u,(u.data||(u.data={})).transition=a)}if(i){for(var l=[],f=[],h=0;h<i.length;h++){var d=i[h];d.data.transition=a,d.data.pos=d.elm.getBoundingClientRect(),r[d.key]?l.push(d):f.push(d)}this.kept=e(n,null,l),this.removed=f}return e(n,null,o)},updated:function(){var e=this.prevChildren,n=this.moveClass||(this.name||"v")+"-move";!e.length||!this.hasMove(e[0].elm,n)||(e.forEach(uE),e.forEach(lE),e.forEach(fE),this._reflow=document.body.offsetHeight,e.forEach(function(r){if(r.data.moved){var i=r.elm,s=i.style;bn(i,n),s.transform=s.WebkitTransform=s.transitionDuration="",i.addEventListener(Ns,i._moveCb=function o(a){a&&a.target!==i||(!a||/transform$/.test(a.propertyName))&&(i.removeEventListener(Ns,o),i._moveCb=null,vt(i,n))})}}))},methods:{hasMove:function(e,n){if(!up)return!1;if(this._hasMove)return this._hasMove;var r=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach(function(s){ap(r,s)}),op(r,n),r.style.display="none",this.$el.appendChild(r);var i=dp(r);return this.$el.removeChild(r),this._hasMove=i.hasTransform}}};function uE(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function lE(t){t.data.newPos=t.elm.getBoundingClientRect()}function fE(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,i=e.top-n.top;if(r||i){t.data.moved=!0;var s=t.elm.style;s.transform=s.WebkitTransform="translate("+r+"px,"+i+"px)",s.transitionDuration="0s"}}var hE={Transition:aE,TransitionGroup:cE};Q.config.mustUseProp=Qy;Q.config.isReservedTag=np;Q.config.isReservedAttr=Xy;Q.config.getTagNamespace=cb;Q.config.isUnknownElement=ub;Y(Q.options.directives,nE);Y(Q.options.components,hE);Q.prototype.__patch__=De?Zb:Ee;Q.prototype.$mount=function(t,e){return t=t&&De?lb(t):void 0,yy(this,t,e)};De&&setTimeout(function(){je.devtools&&Ts&&Ts.emit("init",Q)},0);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ka=function(t,e){return Ka=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},Ka(t,e)};function dE(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Ka(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var Ga=function(){return Ga=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Ga.apply(this,arguments)};function bp(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}var Ya,Yi=[],Ep=function(){function t(e){this.active=!0,this.effects=[],this.cleanups=[],this.vm=e}return t.prototype.run=function(e){if(this.active)try{return this.on(),e()}finally{this.off()}},t.prototype.on=function(){this.active&&(Yi.push(this),Ya=this)},t.prototype.off=function(){this.active&&(Yi.pop(),Ya=Yi[Yi.length-1])},t.prototype.stop=function(){this.active&&(this.vm.$destroy(),this.effects.forEach(function(e){return e.stop()}),this.cleanups.forEach(function(e){return e()}),this.active=!1)},t}();(function(t){dE(e,t);function e(n){n===void 0&&(n=!1);var r=this,i=void 0;return yE(function(){i=Wc($r())}),r=t.call(this,i)||this,n||pE(r),r}return e})(Ep);function pE(t,e){var n;if(e=e||Ya,e&&e.active){e.effects.push(t);return}var r=(n=zc())===null||n===void 0?void 0:n.proxy;r&&r.$on("hook:destroyed",function(){return t.stop()})}function mE(t){if(!t.scope){var e=new Ep(t.proxy);t.scope=e,t.proxy.$on("hook:destroyed",function(){return e.stop()})}return t.scope}var Xa=void 0;try{var cn=require("vue");cn&&ef(cn)?Xa=cn:cn&&"default"in cn&&ef(cn.default)&&(Xa=cn.default)}catch{}var uo=null,Zn=null,ls=!0,wp="__composition_api_installed__";function ef(t){return t&&gn(t)&&t.name==="Vue"}function gE(t){return uo&&Nt(t,wp)}function $r(){return uo}function _E(){var t=uo||Xa;return t}function vE(t){uo=t,Object.defineProperty(t,wp,{configurable:!0,writable:!0,value:!0})}function yE(t){var e=ls;ls=!1;try{t()}finally{ls=e}}function tf(t){if(!!ls){var e=Zn;e==null||e.scope.off(),Zn=t,Zn==null||Zn.scope.on()}}function zc(){return Zn}var ta=new WeakMap;function ks(t){if(ta.has(t))return ta.get(t);var e={proxy:t,update:t.$forceUpdate,type:t.$options,uid:t._uid,emit:t.$emit.bind(t),parent:null,root:null};mE(e);var n=["data","props","attrs","refs","vnode","slots"];return n.forEach(function(r){Ie(e,r,{get:function(){return t["$".concat(r)]}})}),Ie(e,"isMounted",{get:function(){return t._isMounted}}),Ie(e,"isUnmounted",{get:function(){return t._isDestroyed}}),Ie(e,"isDeactivated",{get:function(){return t._inactive}}),Ie(e,"emitted",{get:function(){return t._events}}),ta.set(t,e),t.$parent&&(e.parent=ks(t.$parent)),t.$root&&(e.root=ks(t.$root)),e}var bE=function(t){return Object.prototype.toString.call(t)};function nf(t){return typeof t=="function"&&/native code/.test(t.toString())}var EE=typeof Symbol!="undefined"&&nf(Symbol)&&typeof Reflect!="undefined"&&nf(Reflect.ownKeys),ir=function(t){return t};function Ie(t,e,n){var r=n.get,i=n.set;Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:r||ir,set:i||ir})}function Tp(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}function Nt(t,e){return Object.hasOwnProperty.call(t,e)}function pr(t){return Array.isArray(t)}var wE=4294967295;function TE(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)&&e<=wE}function Ps(t){return t!==null&&typeof t=="object"}function Gt(t){return bE(t)==="[object Object]"}function gn(t){return typeof t=="function"}function Wc(t,e){e===void 0&&(e={});var n=t.config.silent;t.config.silent=!0;var r=new t(e);return t.config.silent=n,r}function SE(t){var e=$r();return e&&t instanceof e}function AE(t,e){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];if(!!t.$scopedSlots[e])return t.$scopedSlots[e].apply(t,n)}}function IE(t,e){var n;if(!t)n={};else{if(t._normalized)return t._normalized;n={};for(var r in t)t[r]&&r[0]!=="$"&&(n[r]=!0)}for(var r in e)r in n||(n[r]=!0);return n}var ei="composition-api.refKey",rf=new WeakMap,CE=new WeakMap;function OE(t,e,n){var r=$r(),i=r.util;i.warn;var s=i.defineReactive,o=t.__ob__;function a(){o&&Ps(n)&&!Nt(n,"__ob__")&&Kc(n)}if(pr(t)){if(TE(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),a(),n;if(e==="length"&&n!==t.length)return t.length=n,o==null||o.dep.notify(),n}return e in t&&!(e in Object.prototype)?(t[e]=n,a(),n):t._isVue||o&&o.vmCount?n:o?(s(o.value,e,n),Ip(t,e,n),a(),o.dep.notify(),n):(t[e]=n,n)}var Sp=function(){function t(e){var n=e.get,r=e.set;Ie(this,"value",{get:n,set:r})}return t}();function Ap(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var r=new Sp(t);n&&(r.effect=!0);var i=Object.seal(r);return e&&CE.set(i,!0),i}function sf(t){var e;if(we(t))return t;var n=Op((e={},e[ei]=t,e));return Ap({get:function(){return n[ei]},set:function(r){return n[ei]=r}})}function we(t){return t instanceof Sp}function RE(t){if(!Gt(t))return t;var e={};for(var n in t)e[n]=NE(t,n);return e}function NE(t,e){e in t||OE(t,e,void 0);var n=t[e];return we(n)?n:Ap({get:function(){return t[e]},set:function(r){return t[e]=r}})}function mr(t){var e;return Boolean(t&&Nt(t,"__ob__")&&typeof t.__ob__=="object"&&((e=t.__ob__)===null||e===void 0?void 0:e.__raw__))}function Xr(t){var e;return Boolean(t&&Nt(t,"__ob__")&&typeof t.__ob__=="object"&&!(!((e=t.__ob__)===null||e===void 0)&&e.__raw__))}function Ja(t){if(!(!Gt(t)||mr(t)||pr(t)||we(t)||SE(t)||rf.has(t))){rf.set(t,!0);for(var e=Object.keys(t),n=0;n<e.length;n++)Ip(t,e[n])}}function Ip(t,e,n){if(e!=="__ob__"&&!mr(t[e])){var r,i,s=Object.getOwnPropertyDescriptor(t,e);if(s){if(s.configurable===!1)return;r=s.get,i=s.set,(!r||i)&&arguments.length===2&&(n=t[e])}Ja(n),Ie(t,e,{get:function(){var a=r?r.call(t):n;return e!==ei&&we(a)?a.value:a},set:function(a){r&&!i||(e!==ei&&we(n)&&!we(a)?n.value=a:(i&&i.call(t,a),n=a),Ja(a))}})}}function Cp(t){var e=_E(),n;if(e.observable)n=e.observable(t);else{var r=Wc(e,{data:{$$state:t}});n=r._data.$$state}return Nt(n,"__ob__")||Kc(n),n}function Kc(t,e){var n,r;if(e===void 0&&(e=new Set),!(e.has(t)||Nt(t,"__ob__")||!Object.isExtensible(t))){Tp(t,"__ob__",$E(t)),e.add(t);try{for(var i=bp(Object.keys(t)),s=i.next();!s.done;s=i.next()){var o=s.value,a=t[o];!(Gt(a)||pr(a))||mr(a)||!Object.isExtensible(a)||Kc(a,e)}}catch(c){n={error:c}}finally{try{s&&!s.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}}function $E(t){return t===void 0&&(t={}),{value:t,dep:{notify:ir,depend:ir,addSub:ir,removeSub:ir}}}function kE(){return Cp({}).__ob__}function Op(t){if(!Ps(t)||!(Gt(t)||pr(t))||mr(t)||!Object.isExtensible(t))return t;var e=Cp(t);return Ja(e),e}function PE(t,e){e===void 0&&(e=void 0);var n=$r(),r=void 0,i={config:n.config,use:n.use.bind(n),mixin:n.mixin.bind(n),component:n.component.bind(n),directive:function(s,o){return o?(n.directive(s,o),i):n.directive(s)},mount:function(s,o){return r||(r=new n(Ga({propsData:e},t)),r.$mount(s,o),r)},unmount:function(){r&&(r.$destroy(),r=void 0)}};return i}var Xi,DE=function(){for(var e,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=(e=zc())===null||e===void 0?void 0:e.proxy;return i?i.$createElement.apply(i,n):(Xi||(Xi=Wc($r()).$createElement),Xi.apply(Xi,n))};function LE(t,e,n){var r=t.__composition_api_state__=t.__composition_api_state__||{};r[e]=n}function xE(t,e){return(t.__composition_api_state__||{})[e]}var Vt={set:LE,get:xE};function ME(t,e,n){var r=t.$options.props;!(e in t)&&!(r&&Nt(r,e))&&(we(n)?Ie(t,e,{get:function(){return n.value},set:function(i){n.value=i}}):Ie(t,e,{get:function(){return Xr(n)&&n.__ob__.dep.depend(),n},set:function(i){n=i}}))}function UE(t){var e=Vt.get(t,"rawBindings")||{};if(!(!e||!Object.keys(e).length)){for(var n=t.$refs,r=Vt.get(t,"refs")||[],i=0;i<r.length;i++){var s=r[i],o=e[s];!n[s]&&o&&we(o)&&(o.value=null)}for(var a=Object.keys(n),c=[],i=0;i<a.length;i++){var s=a[i],o=e[s];n[s]&&o&&we(o)&&(o.value=n[s],c.push(s))}Vt.set(t,"refs",c)}}function of(t){for(var e=[t._vnode];e.length;){var n=e.pop();if(n.context&&UE(n.context),n.children)for(var r=0;r<n.children.length;++r)e.push(n.children[r])}}function af(t,e){var n,r;if(!!t){var i=Vt.get(t,"attrBindings");if(!(!i&&!e)){if(!i){var s=Op({});i={ctx:e,data:s},Vt.set(t,"attrBindings",i),Ie(e,"attrs",{get:function(){return i==null?void 0:i.data},set:function(){}})}var o=t.$attrs,a=function(f){Nt(i.data,f)||Ie(i.data,f,{get:function(){return t.$attrs[f]}})};try{for(var c=bp(Object.keys(o)),u=c.next();!u.done;u=c.next()){var l=u.value;a(l)}}catch(f){n={error:f}}finally{try{u&&!u.done&&(r=c.return)&&r.call(c)}finally{if(n)throw n.error}}}}}function cf(t,e){var n=t.$options._parentVnode;if(!!n){for(var r=Vt.get(t,"slots")||[],i=IE(n.data.scopedSlots,t.$slots),s=0;s<r.length;s++){var o=r[s];i[o]||delete e[o]}for(var a=Object.keys(i),s=0;s<a.length;s++){var o=a[s];e[o]||(e[o]=AE(t,o))}Vt.set(t,"slots",a)}}function na(t,e,n){var r=zc();tf(t);try{return e(t)}catch(i){if(n)n(i);else throw i}finally{tf(r)}}function FE(t){t.mixin({beforeCreate:e,mounted:function(){of(this)},beforeUpdate:function(){af(this)},updated:function(){of(this)}});function e(){var o=this,a=o.$options,c=a.setup,u=a.render;if(u&&(a.render=function(){for(var f=this,h=[],d=0;d<arguments.length;d++)h[d]=arguments[d];return na(ks(o),function(){return u.apply(f,h)})}),!!c&&!!gn(c)){var l=a.data;a.data=function(){return n(o,o.$props),gn(l)?l.call(o,o):l||{}}}}function n(o,a){a===void 0&&(a={});var c=o.$options.setup,u=s(o),l=ks(o);l.setupContext=u,Tp(a,"__ob__",kE()),cf(o,u.slots);var f;if(na(l,function(){f=c(a,u)}),!!f){if(gn(f)){var h=f;o.$options.render=function(){return cf(o,u.slots),na(l,function(){return h()})};return}else if(Ps(f)){Xr(f)&&(f=RE(f)),Vt.set(o,"rawBindings",f);var d=f;Object.keys(d).forEach(function(p){var m=d[p];if(!we(m))if(Xr(m))pr(m)&&(m=sf(m));else if(gn(m)){var g=m;m=m.bind(o),Object.keys(g).forEach(function(b){m[b]=g[b]})}else Ps(m)?i(m)&&r(m):m=sf(m);ME(o,p,m)});return}}}function r(o,a){if(a===void 0&&(a=new Set),!a.has(o)&&!(!Gt(o)||we(o)||Xr(o)||mr(o))){var c=$r(),u=c.util.defineReactive;Object.keys(o).forEach(function(l){var f=o[l];u(o,l,f),f&&(a.add(f),r(f,a))})}}function i(o,a){return a===void 0&&(a=new Map),a.has(o)?a.get(o):(a.set(o,!1),pr(o)&&Xr(o)?(a.set(o,!0),!0):!Gt(o)||mr(o)||we(o)?!1:Object.keys(o).some(function(c){return i(o[c],a)}))}function s(o){var a={slots:{}},c=["root","parent","refs","listeners","isServer","ssrContext"],u=["emit"];return c.forEach(function(l){var f="$".concat(l);Ie(a,l,{get:function(){return o[f]},set:function(){}})}),af(o,a),u.forEach(function(l){var f="$".concat(l);Ie(a,l,{get:function(){return function(){for(var h=[],d=0;d<arguments.length;d++)h[d]=arguments[d];var p=o[f];p.apply(o,h)}}})}),a}}function Rp(t,e){if(!t)return e;if(!e)return t;for(var n,r,i,s=EE?Reflect.ownKeys(t):Object.keys(t),o=0;o<s.length;o++)n=s[o],n!=="__ob__"&&(r=e[n],i=t[n],Nt(e,n)?r!==i&&Gt(r)&&!we(r)&&Gt(i)&&!we(i)&&Rp(i,r):e[n]=i);return e}function BE(t){gE(t)||(t.config.optionMergeStrategies.setup=function(e,n){return function(i,s){return Rp(gn(e)?e(i,s)||{}:void 0,gn(n)?n(i,s)||{}:void 0)}},vE(t),FE(t))}var Np={install:function(t){return BE(t)}};typeof window!="undefined"&&window.Vue&&window.Vue.use(Np);var jE=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light mb-3"},[n("div",{staticClass:"container-fluid"},[n("router-link",{staticClass:"navbar-brand ml-3",attrs:{to:"/home"}},[n("h1",[t._v("Control de Az\xFAcar \u{1FA78}")])]),t.getters.user?n("button",{staticClass:"navbar-toggler mb-3 mt-3",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})]):t._e(),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[t.getters.user?n("div",[n("ul",{staticClass:"navbar-nav"})]):t._e(),n("ul",{staticClass:"navbar-nav ms-auto text-end"},[t.getters.user?n("div",[n("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(r){return t.logout()}}},[t._v(" Cerrar Sesi\xF3n \u270C\uFE0F\u{1F6AA} ")])]):t._e()])])],1)]),n("router-view")],1)},HE=[];function VE(t,e,n,r,i,s,o,a){var c=typeof t=="function"?t.options:t;e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),s&&(c._scopeId="data-v-"+s);var u;if(o?(u=function(h){h=h||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!h&&typeof __VUE_SSR_CONTEXT__!="undefined"&&(h=__VUE_SSR_CONTEXT__),i&&i.call(this,h),h&&h._registeredComponents&&h._registeredComponents.add(o)},c._ssrRegister=u):i&&(u=a?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(d,p){return u.call(p),l(d,p)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:c}}const qE={data(){return{getters:this.$store.getters}},methods:{logout(){console.log("Logout"),this.$store.getters.localStorage("user")&&(this.$store.commit("removeLocalStorage","user"),this.$router.go(0))}}},uf={};var zE=VE(qE,jE,HE,!1,WE,null,null,null);function WE(t){for(let e in uf)this[e]=uf[e]}var KE=function(){return zE.exports}();const GE="modulepreload",lf={},YE="/control-azucar/",ff=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${YE}${r}`,r in lf)return;lf[r]=!0;const i=r.endsWith(".css"),s=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${s}`))return;const o=document.createElement("link");if(o.rel=i?"stylesheet":GE,i||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),i)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};/*!
  * vue-router v3.5.3
  * (c) 2021 Evan You
  * @license MIT
  */function ze(t,e){for(var n in e)t[n]=e[n];return t}var XE=/[!'()*]/g,JE=function(t){return"%"+t.charCodeAt(0).toString(16)},QE=/%2C/g,Wn=function(t){return encodeURIComponent(t).replace(XE,JE).replace(QE,",")};function Qa(t){try{return decodeURIComponent(t)}catch{}return t}function ZE(t,e,n){e===void 0&&(e={});var r=n||ew,i;try{i=r(t||"")}catch{i={}}for(var s in e){var o=e[s];i[s]=Array.isArray(o)?o.map(hf):hf(o)}return i}var hf=function(t){return t==null||typeof t=="object"?t:String(t)};function ew(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t&&t.split("&").forEach(function(n){var r=n.replace(/\+/g," ").split("="),i=Qa(r.shift()),s=r.length>0?Qa(r.join("=")):null;e[i]===void 0?e[i]=s:Array.isArray(e[i])?e[i].push(s):e[i]=[e[i],s]}),e}function tw(t){var e=t?Object.keys(t).map(function(n){var r=t[n];if(r===void 0)return"";if(r===null)return Wn(n);if(Array.isArray(r)){var i=[];return r.forEach(function(s){s!==void 0&&(s===null?i.push(Wn(n)):i.push(Wn(n)+"="+Wn(s)))}),i.join("&")}return Wn(n)+"="+Wn(r)}).filter(function(n){return n.length>0}).join("&"):null;return e?"?"+e:""}var Ds=/\/?$/;function Ls(t,e,n,r){var i=r&&r.options.stringifyQuery,s=e.query||{};try{s=Za(s)}catch{}var o={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:s,params:e.params||{},fullPath:df(e,i),matched:t?nw(t):[]};return n&&(o.redirectedFrom=df(n,i)),Object.freeze(o)}function Za(t){if(Array.isArray(t))return t.map(Za);if(t&&typeof t=="object"){var e={};for(var n in t)e[n]=Za(t[n]);return e}else return t}var Zt=Ls(null,{path:"/"});function nw(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function df(t,e){var n=t.path,r=t.query;r===void 0&&(r={});var i=t.hash;i===void 0&&(i="");var s=e||tw;return(n||"/")+s(r)+i}function $p(t,e,n){return e===Zt?t===e:e?t.path&&e.path?t.path.replace(Ds,"")===e.path.replace(Ds,"")&&(n||t.hash===e.hash&&fs(t.query,e.query)):t.name&&e.name?t.name===e.name&&(n||t.hash===e.hash&&fs(t.query,e.query)&&fs(t.params,e.params)):!1:!1}function fs(t,e){if(t===void 0&&(t={}),e===void 0&&(e={}),!t||!e)return t===e;var n=Object.keys(t).sort(),r=Object.keys(e).sort();return n.length!==r.length?!1:n.every(function(i,s){var o=t[i],a=r[s];if(a!==i)return!1;var c=e[i];return o==null||c==null?o===c:typeof o=="object"&&typeof c=="object"?fs(o,c):String(o)===String(c)})}function rw(t,e){return t.path.replace(Ds,"/").indexOf(e.path.replace(Ds,"/"))===0&&(!e.hash||t.hash===e.hash)&&iw(t.query,e.query)}function iw(t,e){for(var n in e)if(!(n in t))return!1;return!0}function kp(t){for(var e=0;e<t.matched.length;e++){var n=t.matched[e];for(var r in n.instances){var i=n.instances[r],s=n.enteredCbs[r];if(!(!i||!s)){delete n.enteredCbs[r];for(var o=0;o<s.length;o++)i._isBeingDestroyed||s[o](i)}}}}var sw={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(e,n){var r=n.props,i=n.children,s=n.parent,o=n.data;o.routerView=!0;for(var a=s.$createElement,c=r.name,u=s.$route,l=s._routerViewCache||(s._routerViewCache={}),f=0,h=!1;s&&s._routerRoot!==s;){var d=s.$vnode?s.$vnode.data:{};d.routerView&&f++,d.keepAlive&&s._directInactive&&s._inactive&&(h=!0),s=s.$parent}if(o.routerViewDepth=f,h){var p=l[c],m=p&&p.component;return m?(p.configProps&&pf(m,o,p.route,p.configProps),a(m,o,i)):a()}var g=u.matched[f],b=g&&g.components[c];if(!g||!b)return l[c]=null,a();l[c]={component:b},o.registerRouteInstance=function(S,T){var C=g.instances[c];(T&&C!==S||!T&&C===S)&&(g.instances[c]=T)},(o.hook||(o.hook={})).prepatch=function(S,T){g.instances[c]=T.componentInstance},o.hook.init=function(S){S.data.keepAlive&&S.componentInstance&&S.componentInstance!==g.instances[c]&&(g.instances[c]=S.componentInstance),kp(u)};var A=g.props&&g.props[c];return A&&(ze(l[c],{route:u,configProps:A}),pf(b,o,u,A)),a(b,o,i)}};function pf(t,e,n,r){var i=e.props=ow(n,r);if(i){i=e.props=ze({},i);var s=e.attrs=e.attrs||{};for(var o in i)(!t.props||!(o in t.props))&&(s[o]=i[o],delete i[o])}}function ow(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0}}function Pp(t,e,n){var r=t.charAt(0);if(r==="/")return t;if(r==="?"||r==="#")return e+t;var i=e.split("/");(!n||!i[i.length-1])&&i.pop();for(var s=t.replace(/^\//,"").split("/"),o=0;o<s.length;o++){var a=s[o];a===".."?i.pop():a!=="."&&i.push(a)}return i[0]!==""&&i.unshift(""),i.join("/")}function aw(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var i=t.indexOf("?");return i>=0&&(n=t.slice(i+1),t=t.slice(0,i)),{path:t,query:n,hash:e}}function qt(t){return t.replace(/\/+/g,"/")}var xs=Array.isArray||function(t){return Object.prototype.toString.call(t)=="[object Array]"},kr=xp,cw=Gc,uw=dw,lw=Dp,fw=Lp,hw=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function Gc(t,e){for(var n=[],r=0,i=0,s="",o=e&&e.delimiter||"/",a;(a=hw.exec(t))!=null;){var c=a[0],u=a[1],l=a.index;if(s+=t.slice(i,l),i=l+c.length,u){s+=u[1];continue}var f=t[i],h=a[2],d=a[3],p=a[4],m=a[5],g=a[6],b=a[7];s&&(n.push(s),s="");var A=h!=null&&f!=null&&f!==h,S=g==="+"||g==="*",T=g==="?"||g==="*",C=a[2]||o,O=p||m;n.push({name:d||r++,prefix:h||"",delimiter:C,optional:T,repeat:S,partial:A,asterisk:!!b,pattern:O?gw(O):b?".*":"[^"+hs(C)+"]+?"})}return i<t.length&&(s+=t.substr(i)),s&&n.push(s),n}function dw(t,e){return Dp(Gc(t,e),e)}function pw(t){return encodeURI(t).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function mw(t){return encodeURI(t).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function Dp(t,e){for(var n=new Array(t.length),r=0;r<t.length;r++)typeof t[r]=="object"&&(n[r]=new RegExp("^(?:"+t[r].pattern+")$",Xc(e)));return function(i,s){for(var o="",a=i||{},c=s||{},u=c.pretty?pw:encodeURIComponent,l=0;l<t.length;l++){var f=t[l];if(typeof f=="string"){o+=f;continue}var h=a[f.name],d;if(h==null)if(f.optional){f.partial&&(o+=f.prefix);continue}else throw new TypeError('Expected "'+f.name+'" to be defined');if(xs(h)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(h.length===0){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var p=0;p<h.length;p++){if(d=u(h[p]),!n[l].test(d))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(d)+"`");o+=(p===0?f.prefix:f.delimiter)+d}continue}if(d=f.asterisk?mw(h):u(h),!n[l].test(d))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+d+'"');o+=f.prefix+d}return o}}function hs(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function gw(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function Yc(t,e){return t.keys=e,t}function Xc(t){return t&&t.sensitive?"":"i"}function _w(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return Yc(t,e)}function vw(t,e,n){for(var r=[],i=0;i<t.length;i++)r.push(xp(t[i],e,n).source);var s=new RegExp("(?:"+r.join("|")+")",Xc(n));return Yc(s,e)}function yw(t,e,n){return Lp(Gc(t,n),e,n)}function Lp(t,e,n){xs(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,i=n.end!==!1,s="",o=0;o<t.length;o++){var a=t[o];if(typeof a=="string")s+=hs(a);else{var c=hs(a.prefix),u="(?:"+a.pattern+")";e.push(a),a.repeat&&(u+="(?:"+c+u+")*"),a.optional?a.partial?u=c+"("+u+")?":u="(?:"+c+"("+u+"))?":u=c+"("+u+")",s+=u}}var l=hs(n.delimiter||"/"),f=s.slice(-l.length)===l;return r||(s=(f?s.slice(0,-l.length):s)+"(?:"+l+"(?=$))?"),i?s+="$":s+=r&&f?"":"(?="+l+"|$)",Yc(new RegExp("^"+s,Xc(n)),e)}function xp(t,e,n){return xs(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?_w(t,e):xs(t)?vw(t,e,n):yw(t,e,n)}kr.parse=cw;kr.compile=uw;kr.tokensToFunction=lw;kr.tokensToRegExp=fw;var mf=Object.create(null);function ds(t,e,n){e=e||{};try{var r=mf[t]||(mf[t]=kr.compile(t));return typeof e.pathMatch=="string"&&(e[0]=e.pathMatch),r(e,{pretty:!0})}catch{return""}finally{delete e[0]}}function Jc(t,e,n,r){var i=typeof t=="string"?{path:t}:t;if(i._normalized)return i;if(i.name){i=ze({},t);var s=i.params;return s&&typeof s=="object"&&(i.params=ze({},s)),i}if(!i.path&&i.params&&e){i=ze({},i),i._normalized=!0;var o=ze(ze({},e.params),i.params);if(e.name)i.name=e.name,i.params=o;else if(e.matched.length){var a=e.matched[e.matched.length-1].path;i.path=ds(a,o,"path "+e.path)}return i}var c=aw(i.path||""),u=e&&e.path||"/",l=c.path?Pp(c.path,u,n||i.append):u,f=ZE(c.query,i.query,r&&r.options.parseQuery),h=i.hash||c.hash;return h&&h.charAt(0)!=="#"&&(h="#"+h),{_normalized:!0,path:l,query:f,hash:h}}var bw=[String,Object],Ew=[String,Array],gf=function(){},ww={name:"RouterLink",props:{to:{type:bw,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:Ew,default:"click"}},render:function(e){var n=this,r=this.$router,i=this.$route,s=r.resolve(this.to,i,this.append),o=s.location,a=s.route,c=s.href,u={},l=r.options.linkActiveClass,f=r.options.linkExactActiveClass,h=l==null?"router-link-active":l,d=f==null?"router-link-exact-active":f,p=this.activeClass==null?h:this.activeClass,m=this.exactActiveClass==null?d:this.exactActiveClass,g=a.redirectedFrom?Ls(null,Jc(a.redirectedFrom),null,r):a;u[m]=$p(i,g,this.exactPath),u[p]=this.exact||this.exactPath?u[m]:rw(i,g);var b=u[m]?this.ariaCurrentValue:null,A=function(v){_f(v)&&(n.replace?r.replace(o,gf):r.push(o,gf))},S={click:_f};Array.isArray(this.event)?this.event.forEach(function(v){S[v]=A}):S[this.event]=A;var T={class:u},C=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:A,isActive:u[p],isExactActive:u[m]});if(C){if(C.length===1)return C[0];if(C.length>1||!C.length)return C.length===0?e():e("span",{},C)}if(this.tag==="a")T.on=S,T.attrs={href:c,"aria-current":b};else{var O=Mp(this.$slots.default);if(O){O.isStatic=!1;var $=O.data=ze({},O.data);$.on=$.on||{};for(var D in $.on){var V=$.on[D];D in S&&($.on[D]=Array.isArray(V)?V:[V])}for(var K in S)K in $.on?$.on[K].push(S[K]):$.on[K]=A;var G=O.data.attrs=ze({},O.data.attrs);G.href=c,G["aria-current"]=b}else T.on=S}return e(this.tag,T,this.$slots.default)}};function _f(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Mp(t){if(t){for(var e,n=0;n<t.length;n++)if(e=t[n],e.tag==="a"||e.children&&(e=Mp(e.children)))return e}}var Ms;function ec(t){if(!(ec.installed&&Ms===t)){ec.installed=!0,Ms=t;var e=function(i){return i!==void 0},n=function(i,s){var o=i.$options._parentVnode;e(o)&&e(o=o.data)&&e(o=o.registerRouteInstance)&&o(i,s)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",sw),t.component("RouterLink",ww);var r=t.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var Oi=typeof window!="undefined";function Ji(t,e,n,r,i){var s=e||[],o=n||Object.create(null),a=r||Object.create(null);t.forEach(function(l){tc(s,o,a,l,i)});for(var c=0,u=s.length;c<u;c++)s[c]==="*"&&(s.push(s.splice(c,1)[0]),u--,c--);return{pathList:s,pathMap:o,nameMap:a}}function tc(t,e,n,r,i,s){var o=r.path,a=r.name,c=r.pathToRegexpOptions||{},u=Sw(o,i,c.strict);typeof r.caseSensitive=="boolean"&&(c.sensitive=r.caseSensitive);var l={path:u,regex:Tw(u,c),components:r.components||{default:r.component},alias:r.alias?typeof r.alias=="string"?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:a,parent:i,matchAs:s,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:r.props==null?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach(function(m){var g=s?qt(s+"/"+m.path):void 0;tc(t,e,n,m,l,g)}),e[l.path]||(t.push(l.path),e[l.path]=l),r.alias!==void 0)for(var f=Array.isArray(r.alias)?r.alias:[r.alias],h=0;h<f.length;++h){var d=f[h],p={path:d,children:r.children};tc(t,e,n,p,i,l.path||"/")}a&&(n[a]||(n[a]=l))}function Tw(t,e){var n=kr(t,[],e);return n}function Sw(t,e,n){return n||(t=t.replace(/\/$/,"")),t[0]==="/"||e==null?t:qt(e.path+"/"+t)}function Aw(t,e){var n=Ji(t),r=n.pathList,i=n.pathMap,s=n.nameMap;function o(d){Ji(d,r,i,s)}function a(d,p){var m=typeof d!="object"?s[d]:void 0;Ji([p||d],r,i,s,m),m&&m.alias.length&&Ji(m.alias.map(function(g){return{path:g,children:[p]}}),r,i,s,m)}function c(){return r.map(function(d){return i[d]})}function u(d,p,m){var g=Jc(d,p,!1,e),b=g.name;if(b){var A=s[b];if(!A)return h(null,g);var S=A.regex.keys.filter(function(D){return!D.optional}).map(function(D){return D.name});if(typeof g.params!="object"&&(g.params={}),p&&typeof p.params=="object")for(var T in p.params)!(T in g.params)&&S.indexOf(T)>-1&&(g.params[T]=p.params[T]);return g.path=ds(A.path,g.params),h(A,g,m)}else if(g.path){g.params={};for(var C=0;C<r.length;C++){var O=r[C],$=i[O];if(Iw($.regex,g.path,g.params))return h($,g,m)}}return h(null,g)}function l(d,p){var m=d.redirect,g=typeof m=="function"?m(Ls(d,p,null,e)):m;if(typeof g=="string"&&(g={path:g}),!g||typeof g!="object")return h(null,p);var b=g,A=b.name,S=b.path,T=p.query,C=p.hash,O=p.params;if(T=b.hasOwnProperty("query")?b.query:T,C=b.hasOwnProperty("hash")?b.hash:C,O=b.hasOwnProperty("params")?b.params:O,A)return s[A],u({_normalized:!0,name:A,query:T,hash:C,params:O},void 0,p);if(S){var $=Cw(S,d),D=ds($,O);return u({_normalized:!0,path:D,query:T,hash:C},void 0,p)}else return h(null,p)}function f(d,p,m){var g=ds(m,p.params),b=u({_normalized:!0,path:g});if(b){var A=b.matched,S=A[A.length-1];return p.params=b.params,h(S,p)}return h(null,p)}function h(d,p,m){return d&&d.redirect?l(d,m||p):d&&d.matchAs?f(d,p,d.matchAs):Ls(d,p,m,e)}return{match:u,addRoute:a,getRoutes:c,addRoutes:o}}function Iw(t,e,n){var r=e.match(t);if(r){if(!n)return!0}else return!1;for(var i=1,s=r.length;i<s;++i){var o=t.keys[i-1];o&&(n[o.name||"pathMatch"]=typeof r[i]=="string"?Qa(r[i]):r[i])}return!0}function Cw(t,e){return Pp(t,e.parent?e.parent.path:"/",!0)}var Ow=Oi&&window.performance&&window.performance.now?window.performance:Date;function Up(){return Ow.now().toFixed(3)}var Fp=Up();function lo(){return Fp}function Bp(t){return Fp=t}var jp=Object.create(null);function Hp(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),n=ze({},window.history.state);return n.key=lo(),window.history.replaceState(n,"",e),window.addEventListener("popstate",vf),function(){window.removeEventListener("popstate",vf)}}function zt(t,e,n,r){if(!!t.app){var i=t.options.scrollBehavior;!i||t.app.$nextTick(function(){var s=Rw(),o=i.call(t,e,n,r?s:null);!o||(typeof o.then=="function"?o.then(function(a){Ef(a,s)}).catch(function(a){}):Ef(o,s))})}}function Vp(){var t=lo();t&&(jp[t]={x:window.pageXOffset,y:window.pageYOffset})}function vf(t){Vp(),t.state&&t.state.key&&Bp(t.state.key)}function Rw(){var t=lo();if(t)return jp[t]}function Nw(t,e){var n=document.documentElement,r=n.getBoundingClientRect(),i=t.getBoundingClientRect();return{x:i.left-r.left-e.x,y:i.top-r.top-e.y}}function yf(t){return gr(t.x)||gr(t.y)}function bf(t){return{x:gr(t.x)?t.x:window.pageXOffset,y:gr(t.y)?t.y:window.pageYOffset}}function $w(t){return{x:gr(t.x)?t.x:0,y:gr(t.y)?t.y:0}}function gr(t){return typeof t=="number"}var kw=/^#\d/;function Ef(t,e){var n=typeof t=="object";if(n&&typeof t.selector=="string"){var r=kw.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(r){var i=t.offset&&typeof t.offset=="object"?t.offset:{};i=$w(i),e=Nw(r,i)}else yf(t)&&(e=bf(t))}else n&&yf(t)&&(e=bf(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var Wt=Oi&&function(){var t=window.navigator.userAgent;return(t.indexOf("Android 2.")!==-1||t.indexOf("Android 4.0")!==-1)&&t.indexOf("Mobile Safari")!==-1&&t.indexOf("Chrome")===-1&&t.indexOf("Windows Phone")===-1?!1:window.history&&typeof window.history.pushState=="function"}();function Us(t,e){Vp();var n=window.history;try{if(e){var r=ze({},n.state);r.key=lo(),n.replaceState(r,"",t)}else n.pushState({key:Bp(Up())},"",t)}catch{window.location[e?"replace":"assign"](t)}}function nc(t){Us(t,!0)}function wf(t,e,n){var r=function(i){i>=t.length?n():t[i]?e(t[i],function(){r(i+1)}):r(i+1)};r(0)}var jn={redirected:2,aborted:4,cancelled:8,duplicated:16};function Pw(t,e){return fo(t,e,jn.redirected,'Redirected when going from "'+t.fullPath+'" to "'+Mw(e)+'" via a navigation guard.')}function Dw(t,e){var n=fo(t,e,jn.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return n.name="NavigationDuplicated",n}function Tf(t,e){return fo(t,e,jn.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function Lw(t,e){return fo(t,e,jn.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function fo(t,e,n,r){var i=new Error(r);return i._isRouter=!0,i.from=t,i.to=e,i.type=n,i}var xw=["params","query","hash"];function Mw(t){if(typeof t=="string")return t;if("path"in t)return t.path;var e={};return xw.forEach(function(n){n in t&&(e[n]=t[n])}),JSON.stringify(e,null,2)}function Fs(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function ho(t,e){return Fs(t)&&t._isRouter&&(e==null||t.type===e)}function Uw(t){return function(e,n,r){var i=!1,s=0,o=null;qp(t,function(a,c,u,l){if(typeof a=="function"&&a.cid===void 0){i=!0,s++;var f=Sf(function(m){Bw(m)&&(m=m.default),a.resolved=typeof m=="function"?m:Ms.extend(m),u.components[l]=m,s--,s<=0&&r()}),h=Sf(function(m){var g="Failed to resolve async component "+l+": "+m;o||(o=Fs(m)?m:new Error(g),r(o))}),d;try{d=a(f,h)}catch(m){h(m)}if(d)if(typeof d.then=="function")d.then(f,h);else{var p=d.component;p&&typeof p.then=="function"&&p.then(f,h)}}}),i||r()}}function qp(t,e){return zp(t.map(function(n){return Object.keys(n.components).map(function(r){return e(n.components[r],n.instances[r],n,r)})}))}function zp(t){return Array.prototype.concat.apply([],t)}var Fw=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol";function Bw(t){return t.__esModule||Fw&&t[Symbol.toStringTag]==="Module"}function Sf(t){var e=!1;return function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];if(!e)return e=!0,t.apply(this,n)}}var Ye=function(e,n){this.router=e,this.base=jw(n),this.current=Zt,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};Ye.prototype.listen=function(e){this.cb=e};Ye.prototype.onReady=function(e,n){this.ready?e():(this.readyCbs.push(e),n&&this.readyErrorCbs.push(n))};Ye.prototype.onError=function(e){this.errorCbs.push(e)};Ye.prototype.transitionTo=function(e,n,r){var i=this,s;try{s=this.router.match(e,this.current)}catch(a){throw this.errorCbs.forEach(function(c){c(a)}),a}var o=this.current;this.confirmTransition(s,function(){i.updateRoute(s),n&&n(s),i.ensureURL(),i.router.afterHooks.forEach(function(a){a&&a(s,o)}),i.ready||(i.ready=!0,i.readyCbs.forEach(function(a){a(s)}))},function(a){r&&r(a),a&&!i.ready&&(!ho(a,jn.redirected)||o!==Zt)&&(i.ready=!0,i.readyErrorCbs.forEach(function(c){c(a)}))})};Ye.prototype.confirmTransition=function(e,n,r){var i=this,s=this.current;this.pending=e;var o=function(m){!ho(m)&&Fs(m)&&(i.errorCbs.length?i.errorCbs.forEach(function(g){g(m)}):console.error(m)),r&&r(m)},a=e.matched.length-1,c=s.matched.length-1;if($p(e,s)&&a===c&&e.matched[a]===s.matched[c])return this.ensureURL(),e.hash&&zt(this.router,s,e,!1),o(Dw(s,e));var u=Hw(this.current.matched,e.matched),l=u.updated,f=u.deactivated,h=u.activated,d=[].concat(qw(f),this.router.beforeHooks,zw(l),h.map(function(m){return m.beforeEnter}),Uw(h)),p=function(m,g){if(i.pending!==e)return o(Tf(s,e));try{m(e,s,function(b){b===!1?(i.ensureURL(!0),o(Lw(s,e))):Fs(b)?(i.ensureURL(!0),o(b)):typeof b=="string"||typeof b=="object"&&(typeof b.path=="string"||typeof b.name=="string")?(o(Pw(s,e)),typeof b=="object"&&b.replace?i.replace(b):i.push(b)):g(b)})}catch(b){o(b)}};wf(d,p,function(){var m=Ww(h),g=m.concat(i.router.resolveHooks);wf(g,p,function(){if(i.pending!==e)return o(Tf(s,e));i.pending=null,n(e),i.router.app&&i.router.app.$nextTick(function(){kp(e)})})})};Ye.prototype.updateRoute=function(e){this.current=e,this.cb&&this.cb(e)};Ye.prototype.setupListeners=function(){};Ye.prototype.teardown=function(){this.listeners.forEach(function(e){e()}),this.listeners=[],this.current=Zt,this.pending=null};function jw(t){if(!t)if(Oi){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return t.charAt(0)!=="/"&&(t="/"+t),t.replace(/\/$/,"")}function Hw(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r&&t[n]===e[n];n++);return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function Qc(t,e,n,r){var i=qp(t,function(s,o,a,c){var u=Vw(s,e);if(u)return Array.isArray(u)?u.map(function(l){return n(l,o,a,c)}):n(u,o,a,c)});return zp(r?i.reverse():i)}function Vw(t,e){return typeof t!="function"&&(t=Ms.extend(t)),t.options[e]}function qw(t){return Qc(t,"beforeRouteLeave",Wp,!0)}function zw(t){return Qc(t,"beforeRouteUpdate",Wp)}function Wp(t,e){if(e)return function(){return t.apply(e,arguments)}}function Ww(t){return Qc(t,"beforeRouteEnter",function(e,n,r,i){return Kw(e,r,i)})}function Kw(t,e,n){return function(i,s,o){return t(i,s,function(a){typeof a=="function"&&(e.enteredCbs[n]||(e.enteredCbs[n]=[]),e.enteredCbs[n].push(a)),o(a)})}}var Kp=function(t){function e(n,r){t.call(this,n,r),this._startLocation=Jr(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var r=this;if(!(this.listeners.length>0)){var i=this.router,s=i.options.scrollBehavior,o=Wt&&s;o&&this.listeners.push(Hp());var a=function(){var c=r.current,u=Jr(r.base);r.current===Zt&&u===r._startLocation||r.transitionTo(u,function(l){o&&zt(i,l,c,!0)})};window.addEventListener("popstate",a),this.listeners.push(function(){window.removeEventListener("popstate",a)})}},e.prototype.go=function(r){window.history.go(r)},e.prototype.push=function(r,i,s){var o=this,a=this,c=a.current;this.transitionTo(r,function(u){Us(qt(o.base+u.fullPath)),zt(o.router,u,c,!1),i&&i(u)},s)},e.prototype.replace=function(r,i,s){var o=this,a=this,c=a.current;this.transitionTo(r,function(u){nc(qt(o.base+u.fullPath)),zt(o.router,u,c,!1),i&&i(u)},s)},e.prototype.ensureURL=function(r){if(Jr(this.base)!==this.current.fullPath){var i=qt(this.base+this.current.fullPath);r?Us(i):nc(i)}},e.prototype.getCurrentLocation=function(){return Jr(this.base)},e}(Ye);function Jr(t){var e=window.location.pathname,n=e.toLowerCase(),r=t.toLowerCase();return t&&(n===r||n.indexOf(qt(r+"/"))===0)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var Gp=function(t){function e(n,r,i){t.call(this,n,r),!(i&&Gw(this.base))&&Af()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var r=this;if(!(this.listeners.length>0)){var i=this.router,s=i.options.scrollBehavior,o=Wt&&s;o&&this.listeners.push(Hp());var a=function(){var u=r.current;!Af()||r.transitionTo(ps(),function(l){o&&zt(r.router,l,u,!0),Wt||ms(l.fullPath)})},c=Wt?"popstate":"hashchange";window.addEventListener(c,a),this.listeners.push(function(){window.removeEventListener(c,a)})}},e.prototype.push=function(r,i,s){var o=this,a=this,c=a.current;this.transitionTo(r,function(u){If(u.fullPath),zt(o.router,u,c,!1),i&&i(u)},s)},e.prototype.replace=function(r,i,s){var o=this,a=this,c=a.current;this.transitionTo(r,function(u){ms(u.fullPath),zt(o.router,u,c,!1),i&&i(u)},s)},e.prototype.go=function(r){window.history.go(r)},e.prototype.ensureURL=function(r){var i=this.current.fullPath;ps()!==i&&(r?If(i):ms(i))},e.prototype.getCurrentLocation=function(){return ps()},e}(Ye);function Gw(t){var e=Jr(t);if(!/^\/#/.test(e))return window.location.replace(qt(t+"/#"+e)),!0}function Af(){var t=ps();return t.charAt(0)==="/"?!0:(ms("/"+t),!1)}function ps(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function rc(t){var e=window.location.href,n=e.indexOf("#"),r=n>=0?e.slice(0,n):e;return r+"#"+t}function If(t){Wt?Us(rc(t)):window.location.hash=t}function ms(t){Wt?nc(rc(t)):window.location.replace(rc(t))}var Yw=function(t){function e(n,r){t.call(this,n,r),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(r,i,s){var o=this;this.transitionTo(r,function(a){o.stack=o.stack.slice(0,o.index+1).concat(a),o.index++,i&&i(a)},s)},e.prototype.replace=function(r,i,s){var o=this;this.transitionTo(r,function(a){o.stack=o.stack.slice(0,o.index).concat(a),i&&i(a)},s)},e.prototype.go=function(r){var i=this,s=this.index+r;if(!(s<0||s>=this.stack.length)){var o=this.stack[s];this.confirmTransition(o,function(){var a=i.current;i.index=s,i.updateRoute(o),i.router.afterHooks.forEach(function(c){c&&c(o,a)})},function(a){ho(a,jn.duplicated)&&(i.index=s)})}},e.prototype.getCurrentLocation=function(){var r=this.stack[this.stack.length-1];return r?r.fullPath:"/"},e.prototype.ensureURL=function(){},e}(Ye),X=function(e){e===void 0&&(e={}),this.app=null,this.apps=[],this.options=e,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=Aw(e.routes||[],this);var n=e.mode||"hash";switch(this.fallback=n==="history"&&!Wt&&e.fallback!==!1,this.fallback&&(n="hash"),Oi||(n="abstract"),this.mode=n,n){case"history":this.history=new Kp(this,e.base);break;case"hash":this.history=new Gp(this,e.base,this.fallback);break;case"abstract":this.history=new Yw(this,e.base);break}},Yp={currentRoute:{configurable:!0}};X.prototype.match=function(e,n,r){return this.matcher.match(e,n,r)};Yp.currentRoute.get=function(){return this.history&&this.history.current};X.prototype.init=function(e){var n=this;if(this.apps.push(e),e.$once("hook:destroyed",function(){var o=n.apps.indexOf(e);o>-1&&n.apps.splice(o,1),n.app===e&&(n.app=n.apps[0]||null),n.app||n.history.teardown()}),!this.app){this.app=e;var r=this.history;if(r instanceof Kp||r instanceof Gp){var i=function(o){var a=r.current,c=n.options.scrollBehavior,u=Wt&&c;u&&"fullPath"in o&&zt(n,o,a,!1)},s=function(o){r.setupListeners(),i(o)};r.transitionTo(r.getCurrentLocation(),s,s)}r.listen(function(o){n.apps.forEach(function(a){a._route=o})})}};X.prototype.beforeEach=function(e){return Zc(this.beforeHooks,e)};X.prototype.beforeResolve=function(e){return Zc(this.resolveHooks,e)};X.prototype.afterEach=function(e){return Zc(this.afterHooks,e)};X.prototype.onReady=function(e,n){this.history.onReady(e,n)};X.prototype.onError=function(e){this.history.onError(e)};X.prototype.push=function(e,n,r){var i=this;if(!n&&!r&&typeof Promise!="undefined")return new Promise(function(s,o){i.history.push(e,s,o)});this.history.push(e,n,r)};X.prototype.replace=function(e,n,r){var i=this;if(!n&&!r&&typeof Promise!="undefined")return new Promise(function(s,o){i.history.replace(e,s,o)});this.history.replace(e,n,r)};X.prototype.go=function(e){this.history.go(e)};X.prototype.back=function(){this.go(-1)};X.prototype.forward=function(){this.go(1)};X.prototype.getMatchedComponents=function(e){var n=e?e.matched?e:this.resolve(e).route:this.currentRoute;return n?[].concat.apply([],n.matched.map(function(r){return Object.keys(r.components).map(function(i){return r.components[i]})})):[]};X.prototype.resolve=function(e,n,r){n=n||this.history.current;var i=Jc(e,n,r,this),s=this.match(i,n),o=s.redirectedFrom||s.fullPath,a=this.history.base,c=Xw(a,o,this.mode);return{location:i,route:s,href:c,normalizedTo:i,resolved:s}};X.prototype.getRoutes=function(){return this.matcher.getRoutes()};X.prototype.addRoute=function(e,n){this.matcher.addRoute(e,n),this.history.current!==Zt&&this.history.transitionTo(this.history.getCurrentLocation())};X.prototype.addRoutes=function(e){this.matcher.addRoutes(e),this.history.current!==Zt&&this.history.transitionTo(this.history.getCurrentLocation())};Object.defineProperties(X.prototype,Yp);function Zc(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function Xw(t,e,n){var r=n==="hash"?"#"+e:e;return t?qt(t+"/"+r):r}X.install=ec;X.version="3.5.3";X.isNavigationFailure=ho;X.NavigationFailureType=jn;X.START_LOCATION=Zt;Oi&&window.Vue&&window.Vue.use(X);var Xp=X;/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */function Jw(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:r});else{var n=t.prototype._init;t.prototype._init=function(i){i===void 0&&(i={}),i.init=i.init?[r].concat(i.init):r,n.call(this,i)}}function r(){var i=this.$options;i.store?this.$store=typeof i.store=="function"?i.store():i.store:i.parent&&i.parent.$store&&(this.$store=i.parent.$store)}}var Qw=typeof window!="undefined"?window:typeof global!="undefined"?global:{},Kn=Qw.__VUE_DEVTOOLS_GLOBAL_HOOK__;function Zw(t){!Kn||(t._devtoolHook=Kn,Kn.emit("vuex:init",t),Kn.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(e,n){Kn.emit("vuex:mutation",e,n)},{prepend:!0}),t.subscribeAction(function(e,n){Kn.emit("vuex:action",e,n)},{prepend:!0}))}function eT(t,e){return t.filter(e)[0]}function ic(t,e){if(e===void 0&&(e=[]),t===null||typeof t!="object")return t;var n=eT(e,function(i){return i.original===t});if(n)return n.copy;var r=Array.isArray(t)?[]:{};return e.push({original:t,copy:r}),Object.keys(t).forEach(function(i){r[i]=ic(t[i],e)}),r}function Pr(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function Jp(t){return t!==null&&typeof t=="object"}function tT(t){return t&&typeof t.then=="function"}function nT(t,e){return function(){return t(e)}}var Xe=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},Qp={namespaced:{configurable:!0}};Qp.namespaced.get=function(){return!!this._rawModule.namespaced};Xe.prototype.addChild=function(e,n){this._children[e]=n};Xe.prototype.removeChild=function(e){delete this._children[e]};Xe.prototype.getChild=function(e){return this._children[e]};Xe.prototype.hasChild=function(e){return e in this._children};Xe.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Xe.prototype.forEachChild=function(e){Pr(this._children,e)};Xe.prototype.forEachGetter=function(e){this._rawModule.getters&&Pr(this._rawModule.getters,e)};Xe.prototype.forEachAction=function(e){this._rawModule.actions&&Pr(this._rawModule.actions,e)};Xe.prototype.forEachMutation=function(e){this._rawModule.mutations&&Pr(this._rawModule.mutations,e)};Object.defineProperties(Xe.prototype,Qp);var Hn=function(e){this.register([],e,!1)};Hn.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};Hn.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,i){return n=n.getChild(i),r+(n.namespaced?i+"/":"")},"")};Hn.prototype.update=function(e){Zp([],this.root,e)};Hn.prototype.register=function(e,n,r){var i=this;r===void 0&&(r=!0);var s=new Xe(n,r);if(e.length===0)this.root=s;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],s)}n.modules&&Pr(n.modules,function(a,c){i.register(e.concat(c),a,r)})};Hn.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],i=n.getChild(r);!i||!i.runtime||n.removeChild(r)};Hn.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function Zp(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;Zp(t.concat(r),e.getChild(r),n.modules[r])}}var ye,Le=function(e){var n=this;e===void 0&&(e={}),!ye&&typeof window!="undefined"&&window.Vue&&nm(window.Vue);var r=e.plugins;r===void 0&&(r=[]);var i=e.strict;i===void 0&&(i=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Hn(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new ye,this._makeLocalGettersCache=Object.create(null);var s=this,o=this,a=o.dispatch,c=o.commit;this.dispatch=function(h,d){return a.call(s,h,d)},this.commit=function(h,d,p){return c.call(s,h,d,p)},this.strict=i;var u=this._modules.root.state;po(this,u,[],this._modules.root),tu(this,u),r.forEach(function(f){return f(n)});var l=e.devtools!==void 0?e.devtools:ye.config.devtools;l&&Zw(this)},eu={state:{configurable:!0}};eu.state.get=function(){return this._vm._data.$$state};eu.state.set=function(t){};Le.prototype.commit=function(e,n,r){var i=this,s=Bs(e,n,r),o=s.type,a=s.payload,c={type:o,payload:a},u=this._mutations[o];!u||(this._withCommit(function(){u.forEach(function(f){f(a)})}),this._subscribers.slice().forEach(function(l){return l(c,i.state)}))};Le.prototype.dispatch=function(e,n){var r=this,i=Bs(e,n),s=i.type,o=i.payload,a={type:s,payload:o},c=this._actions[s];if(!!c){try{this._actionSubscribers.slice().filter(function(l){return l.before}).forEach(function(l){return l.before(a,r.state)})}catch{}var u=c.length>1?Promise.all(c.map(function(l){return l(o)})):c[0](o);return new Promise(function(l,f){u.then(function(h){try{r._actionSubscribers.filter(function(d){return d.after}).forEach(function(d){return d.after(a,r.state)})}catch{}l(h)},function(h){try{r._actionSubscribers.filter(function(d){return d.error}).forEach(function(d){return d.error(a,r.state,h)})}catch{}f(h)})})}};Le.prototype.subscribe=function(e,n){return em(e,this._subscribers,n)};Le.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return em(r,this._actionSubscribers,n)};Le.prototype.watch=function(e,n,r){var i=this;return this._watcherVM.$watch(function(){return e(i.state,i.getters)},n,r)};Le.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._vm._data.$$state=e})};Le.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),po(this,this.state,e,this._modules.get(e),r.preserveState),tu(this,this.state)};Le.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=nu(n.state,e.slice(0,-1));ye.delete(r,e[e.length-1])}),tm(this)};Le.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};Le.prototype.hotUpdate=function(e){this._modules.update(e),tm(this,!0)};Le.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(Le.prototype,eu);function em(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function tm(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;po(t,n,[],t._modules.root,!0),tu(t,n,e)}function tu(t,e,n){var r=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,s={};Pr(i,function(a,c){s[c]=nT(a,t),Object.defineProperty(t.getters,c,{get:function(){return t._vm[c]},enumerable:!0})});var o=ye.config.silent;ye.config.silent=!0,t._vm=new ye({data:{$$state:e},computed:s}),ye.config.silent=o,t.strict&&cT(t),r&&(n&&t._withCommit(function(){r._data.$$state=null}),ye.nextTick(function(){return r.$destroy()}))}function po(t,e,n,r,i){var s=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!s&&!i){var a=nu(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){ye.set(a,c,r.state)})}var u=r.context=rT(t,o,n);r.forEachMutation(function(l,f){var h=o+f;sT(t,h,l,u)}),r.forEachAction(function(l,f){var h=l.root?f:o+f,d=l.handler||l;oT(t,h,d,u)}),r.forEachGetter(function(l,f){var h=o+f;aT(t,h,l,u)}),r.forEachChild(function(l,f){po(t,e,n.concat(f),l,i)})}function rT(t,e,n){var r=e==="",i={dispatch:r?t.dispatch:function(s,o,a){var c=Bs(s,o,a),u=c.payload,l=c.options,f=c.type;return(!l||!l.root)&&(f=e+f),t.dispatch(f,u)},commit:r?t.commit:function(s,o,a){var c=Bs(s,o,a),u=c.payload,l=c.options,f=c.type;(!l||!l.root)&&(f=e+f),t.commit(f,u,l)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return iT(t,e)}},state:{get:function(){return nu(t.state,n)}}}),i}function iT(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(i){if(i.slice(0,r)===e){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return t.getters[i]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function sT(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push(function(o){n.call(t,r.state,o)})}function oT(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(o){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return tT(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function aT(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(s){return n(r.state,r.getters,s.state,s.getters)})}function cT(t){t._vm.$watch(function(){return this._data.$$state},function(){},{deep:!0,sync:!0})}function nu(t,e){return e.reduce(function(n,r){return n[r]},t)}function Bs(t,e,n){return Jp(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function nm(t){ye&&t===ye||(ye=t,Jw(ye))}var rm=go(function(t,e){var n={};return mo(e).forEach(function(r){var i=r.key,s=r.val;n[i]=function(){var a=this.$store.state,c=this.$store.getters;if(t){var u=_o(this.$store,"mapState",t);if(!u)return;a=u.context.state,c=u.context.getters}return typeof s=="function"?s.call(this,a,c):a[s]},n[i].vuex=!0}),n}),im=go(function(t,e){var n={};return mo(e).forEach(function(r){var i=r.key,s=r.val;n[i]=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];var u=this.$store.commit;if(t){var l=_o(this.$store,"mapMutations",t);if(!l)return;u=l.context.commit}return typeof s=="function"?s.apply(this,[u].concat(a)):u.apply(this.$store,[s].concat(a))}}),n}),sm=go(function(t,e){var n={};return mo(e).forEach(function(r){var i=r.key,s=r.val;s=t+s,n[i]=function(){if(!(t&&!_o(this.$store,"mapGetters",t)))return this.$store.getters[s]},n[i].vuex=!0}),n}),om=go(function(t,e){var n={};return mo(e).forEach(function(r){var i=r.key,s=r.val;n[i]=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];var u=this.$store.dispatch;if(t){var l=_o(this.$store,"mapActions",t);if(!l)return;u=l.context.dispatch}return typeof s=="function"?s.apply(this,[u].concat(a)):u.apply(this.$store,[s].concat(a))}}),n}),uT=function(t){return{mapState:rm.bind(null,t),mapGetters:sm.bind(null,t),mapMutations:im.bind(null,t),mapActions:om.bind(null,t)}};function mo(t){return lT(t)?Array.isArray(t)?t.map(function(e){return{key:e,val:e}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}}):[]}function lT(t){return Array.isArray(t)||Jp(t)}function go(t){return function(e,n){return typeof e!="string"?(n=e,e=""):e.charAt(e.length-1)!=="/"&&(e+="/"),t(e,n)}}function _o(t,e,n){var r=t._modulesNamespaceMap[n];return r}function fT(t){t===void 0&&(t={});var e=t.collapsed;e===void 0&&(e=!0);var n=t.filter;n===void 0&&(n=function(l,f,h){return!0});var r=t.transformer;r===void 0&&(r=function(l){return l});var i=t.mutationTransformer;i===void 0&&(i=function(l){return l});var s=t.actionFilter;s===void 0&&(s=function(l,f){return!0});var o=t.actionTransformer;o===void 0&&(o=function(l){return l});var a=t.logMutations;a===void 0&&(a=!0);var c=t.logActions;c===void 0&&(c=!0);var u=t.logger;return u===void 0&&(u=console),function(l){var f=ic(l.state);typeof u!="undefined"&&(a&&l.subscribe(function(h,d){var p=ic(d);if(n(h,f,p)){var m=Rf(),g=i(h),b="mutation "+h.type+m;Cf(u,b,e),u.log("%c prev state","color: #9E9E9E; font-weight: bold",r(f)),u.log("%c mutation","color: #03A9F4; font-weight: bold",g),u.log("%c next state","color: #4CAF50; font-weight: bold",r(p)),Of(u)}f=p}),c&&l.subscribeAction(function(h,d){if(s(h,d)){var p=Rf(),m=o(h),g="action "+h.type+p;Cf(u,g,e),u.log("%c action","color: #03A9F4; font-weight: bold",m),Of(u)}}))}}function Cf(t,e,n){var r=n?t.groupCollapsed:t.group;try{r.call(t,e)}catch{t.log(e)}}function Of(t){try{t.groupEnd()}catch{t.log("\u2014\u2014 log end \u2014\u2014")}}function Rf(){var t=new Date;return" @ "+Qi(t.getHours(),2)+":"+Qi(t.getMinutes(),2)+":"+Qi(t.getSeconds(),2)+"."+Qi(t.getMilliseconds(),3)}function hT(t,e){return new Array(e+1).join(t)}function Qi(t,e){return hT("0",e-t.toString().length)+t}var dT={Store:Le,install:nm,version:"3.6.2",mapState:rm,mapMutations:im,mapGetters:sm,mapActions:om,createNamespacedHelpers:uT,createLogger:fT},am=dT,pT=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},cm={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(pT,function(){return(()=>{var n={d:(d,p)=>{for(var m in p)n.o(p,m)&&!n.o(d,m)&&Object.defineProperty(d,m,{enumerable:!0,get:p[m]})},o:(d,p)=>Object.prototype.hasOwnProperty.call(d,p)},r={};n.d(r,{default:()=>h});const i=(...d)=>{},s=d=>d!==null&&d.constructor.name==="Object";let o;const a=()=>{if(o!==void 0)return o;o=!0;try{localStorage||(o=!1)}catch{o=!1}return f(),o},c=String.fromCharCode(0),u=(d,p,m=!0)=>m?[...JSON.stringify(d)].map(g=>String.fromCharCode(g.charCodeAt(0)+p)).join(""):JSON.parse([...d].map(g=>String.fromCharCode(g.charCodeAt(0)-p)).join("")),l={ttl:null,encrypt:!1,encrypter:u,decrypter:(d,p)=>u(d,p,!1),secret:75},f=(d=!1)=>{if(!a())return!1;Object.keys(localStorage).forEach(p=>{const m=localStorage.getItem(p);if(!m)return;let g;try{g=JSON.parse(m)}catch{return}s(g)&&c in g&&(Date.now()>g.ttl||d)&&localStorage.removeItem(p)})},h={config:l,set:(d,p,m={})=>{if(!a())return!1;const g=Object.assign(Object.assign(Object.assign({},l),m),{encrypt:m.encrypt!==!1&&(m.encrypt||l.encrypt),ttl:m.ttl===null?null:m.ttl||l.ttl});try{let b=g.ttl&&g.ttl>0?{[c]:p,ttl:Date.now()+1e3*g.ttl}:p;g.encrypt&&(g.ttl&&c in b?b[c]=(g.encrypter||i)(b[c],g.secret):b=(g.encrypter||i)(b,g.secret)),localStorage.setItem(d,JSON.stringify(b))}catch{return!1}},get:(d,p={})=>{if(!a())return null;const m=localStorage.getItem(d);if(!m)return null;const g=Object.assign(Object.assign(Object.assign({},l),p),{encrypt:p.encrypt!==!1&&(p.encrypt||l.encrypt),ttl:p.ttl===null?null:p.ttl||l.ttl});let b=JSON.parse(m);const A=s(b)&&c in b;if(g.decrypt||g.encrypt)try{A?b[c]=(g.decrypter||i)(b[c],g.secret):b=(g.decrypter||i)(b,g.secret)}catch{}return A?Date.now()>b.ttl?(localStorage.removeItem(d),null):b[c]:b},flush:f,clear:()=>{if(!a())return!1;localStorage.clear()},remove:d=>{if(!a())return!1;localStorage.removeItem(d)}};return r.default})()})})(cm);var sr=cm.exports;sr.config.encrypt=!1;sr.config.ttl=7200;Q.use(am);const ru=new am.Store({state:{user:null},mutations:{setLocalStorage(t,e){switch(sr.set(e.key,JSON.stringify(e.value)),e.key){case"user":t.user=e.value;break}},removeLocalStorage(t,e){switch(sr.remove(e),e){case"user":t.user=null;break}}},getters:{localStorage:()=>t=>sr.get(t),localStorages:()=>sr.get(),user:t=>t.user}});Q.use(Xp);const um=new Xp({mode:"history",base:"/control-azucar/",routes:[{path:"/bloodSugar",name:"blood-sugar",component:()=>ff(()=>import("./BloodSugarView.11e31b0e.js"),["assets/BloodSugarView.11e31b0e.js","assets/BloodSugarView.d56822f3.css"])},{path:"/",name:"login",component:()=>ff(()=>import("./LoginView.7a44fca1.js"),["assets/LoginView.7a44fca1.js","assets/LoginView.0c3c6fff.css"])}]}),ra=ru.getters,ia=ru.state;um.beforeEach((t,e,n)=>{ra.localStorage("user")&&ia.user===null&&(ia.user=JSON.parse(ra.localStorage("user"))),t.name!=="login"&&!ia.user?n({name:"login"}):t.name&&(t.name=="login"&&ra.localStorage("user")&&n("bloodSugar"),n())});var me="top",ke="bottom",Pe="right",ge="left",vo="auto",Dr=[me,ke,Pe,ge],kn="start",_r="end",lm="clippingParents",iu="viewport",er="popper",fm="reference",sc=Dr.reduce(function(t,e){return t.concat([e+"-"+kn,e+"-"+_r])},[]),su=[].concat(Dr,[vo]).reduce(function(t,e){return t.concat([e,e+"-"+kn,e+"-"+_r])},[]),hm="beforeRead",dm="read",pm="afterRead",mm="beforeMain",gm="main",_m="afterMain",vm="beforeWrite",ym="write",bm="afterWrite",Em=[hm,dm,pm,mm,gm,_m,vm,ym,bm];function ft(t){return t?(t.nodeName||"").toLowerCase():null}function Je(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function vr(t){var e=Je(t).Element;return t instanceof e||t instanceof Element}function He(t){var e=Je(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function ou(t){if(typeof ShadowRoot=="undefined")return!1;var e=Je(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function mT(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var r=e.styles[n]||{},i=e.attributes[n]||{},s=e.elements[n];!He(s)||!ft(s)||(Object.assign(s.style,r),Object.keys(i).forEach(function(o){var a=i[o];a===!1?s.removeAttribute(o):s.setAttribute(o,a===!0?"":a)}))})}function gT(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(r){var i=e.elements[r],s=e.attributes[r]||{},o=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:n[r]),a=o.reduce(function(c,u){return c[u]="",c},{});!He(i)||!ft(i)||(Object.assign(i.style,a),Object.keys(s).forEach(function(c){i.removeAttribute(c)}))})}}var au={name:"applyStyles",enabled:!0,phase:"write",fn:mT,effect:gT,requires:["computeStyles"]};function at(t){return t.split("-")[0]}var En=Math.max,js=Math.min,yr=Math.round;function br(t,e){e===void 0&&(e=!1);var n=t.getBoundingClientRect(),r=1,i=1;if(He(t)&&e){var s=t.offsetHeight,o=t.offsetWidth;o>0&&(r=yr(n.width)/o||1),s>0&&(i=yr(n.height)/s||1)}return{width:n.width/r,height:n.height/i,top:n.top/i,right:n.right/r,bottom:n.bottom/i,left:n.left/r,x:n.left/r,y:n.top/i}}function cu(t){var e=br(t),n=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:r}}function wm(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&ou(n)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function St(t){return Je(t).getComputedStyle(t)}function _T(t){return["table","td","th"].indexOf(ft(t))>=0}function en(t){return((vr(t)?t.ownerDocument:t.document)||window.document).documentElement}function yo(t){return ft(t)==="html"?t:t.assignedSlot||t.parentNode||(ou(t)?t.host:null)||en(t)}function Nf(t){return!He(t)||St(t).position==="fixed"?null:t.offsetParent}function vT(t){var e=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,n=navigator.userAgent.indexOf("Trident")!==-1;if(n&&He(t)){var r=St(t);if(r.position==="fixed")return null}var i=yo(t);for(ou(i)&&(i=i.host);He(i)&&["html","body"].indexOf(ft(i))<0;){var s=St(i);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||e&&s.willChange==="filter"||e&&s.filter&&s.filter!=="none")return i;i=i.parentNode}return null}function Ri(t){for(var e=Je(t),n=Nf(t);n&&_T(n)&&St(n).position==="static";)n=Nf(n);return n&&(ft(n)==="html"||ft(n)==="body"&&St(n).position==="static")?e:n||vT(t)||e}function uu(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function ti(t,e,n){return En(t,js(e,n))}function yT(t,e,n){var r=ti(t,e,n);return r>n?n:r}function Tm(){return{top:0,right:0,bottom:0,left:0}}function Sm(t){return Object.assign({},Tm(),t)}function Am(t,e){return e.reduce(function(n,r){return n[r]=t,n},{})}var bT=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,Sm(typeof e!="number"?e:Am(e,Dr))};function ET(t){var e,n=t.state,r=t.name,i=t.options,s=n.elements.arrow,o=n.modifiersData.popperOffsets,a=at(n.placement),c=uu(a),u=[ge,Pe].indexOf(a)>=0,l=u?"height":"width";if(!(!s||!o)){var f=bT(i.padding,n),h=cu(s),d=c==="y"?me:ge,p=c==="y"?ke:Pe,m=n.rects.reference[l]+n.rects.reference[c]-o[c]-n.rects.popper[l],g=o[c]-n.rects.reference[c],b=Ri(s),A=b?c==="y"?b.clientHeight||0:b.clientWidth||0:0,S=m/2-g/2,T=f[d],C=A-h[l]-f[p],O=A/2-h[l]/2+S,$=ti(T,O,C),D=c;n.modifiersData[r]=(e={},e[D]=$,e.centerOffset=$-O,e)}}function wT(t){var e=t.state,n=t.options,r=n.element,i=r===void 0?"[data-popper-arrow]":r;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||!wm(e.elements.popper,i)||(e.elements.arrow=i))}var Im={name:"arrow",enabled:!0,phase:"main",fn:ET,effect:wT,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Er(t){return t.split("-")[1]}var TT={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ST(t){var e=t.x,n=t.y,r=window,i=r.devicePixelRatio||1;return{x:yr(e*i)/i||0,y:yr(n*i)/i||0}}function $f(t){var e,n=t.popper,r=t.popperRect,i=t.placement,s=t.variation,o=t.offsets,a=t.position,c=t.gpuAcceleration,u=t.adaptive,l=t.roundOffsets,f=t.isFixed,h=o.x,d=h===void 0?0:h,p=o.y,m=p===void 0?0:p,g=typeof l=="function"?l({x:d,y:m}):{x:d,y:m};d=g.x,m=g.y;var b=o.hasOwnProperty("x"),A=o.hasOwnProperty("y"),S=ge,T=me,C=window;if(u){var O=Ri(n),$="clientHeight",D="clientWidth";if(O===Je(n)&&(O=en(n),St(O).position!=="static"&&a==="absolute"&&($="scrollHeight",D="scrollWidth")),O=O,i===me||(i===ge||i===Pe)&&s===_r){T=ke;var V=f&&O===C&&C.visualViewport?C.visualViewport.height:O[$];m-=V-r.height,m*=c?1:-1}if(i===ge||(i===me||i===ke)&&s===_r){S=Pe;var K=f&&O===C&&C.visualViewport?C.visualViewport.width:O[D];d-=K-r.width,d*=c?1:-1}}var G=Object.assign({position:a},u&&TT),v=l===!0?ST({x:d,y:m}):{x:d,y:m};if(d=v.x,m=v.y,c){var _;return Object.assign({},G,(_={},_[T]=A?"0":"",_[S]=b?"0":"",_.transform=(C.devicePixelRatio||1)<=1?"translate("+d+"px, "+m+"px)":"translate3d("+d+"px, "+m+"px, 0)",_))}return Object.assign({},G,(e={},e[T]=A?m+"px":"",e[S]=b?d+"px":"",e.transform="",e))}function AT(t){var e=t.state,n=t.options,r=n.gpuAcceleration,i=r===void 0?!0:r,s=n.adaptive,o=s===void 0?!0:s,a=n.roundOffsets,c=a===void 0?!0:a,u={placement:at(e.placement),variation:Er(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,$f(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:c})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,$f(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var lu={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:AT,data:{}},Zi={passive:!0};function IT(t){var e=t.state,n=t.instance,r=t.options,i=r.scroll,s=i===void 0?!0:i,o=r.resize,a=o===void 0?!0:o,c=Je(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return s&&u.forEach(function(l){l.addEventListener("scroll",n.update,Zi)}),a&&c.addEventListener("resize",n.update,Zi),function(){s&&u.forEach(function(l){l.removeEventListener("scroll",n.update,Zi)}),a&&c.removeEventListener("resize",n.update,Zi)}}var fu={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:IT,data:{}},CT={left:"right",right:"left",bottom:"top",top:"bottom"};function gs(t){return t.replace(/left|right|bottom|top/g,function(e){return CT[e]})}var OT={start:"end",end:"start"};function kf(t){return t.replace(/start|end/g,function(e){return OT[e]})}function hu(t){var e=Je(t),n=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:n,scrollTop:r}}function du(t){return br(en(t)).left+hu(t).scrollLeft}function RT(t){var e=Je(t),n=en(t),r=e.visualViewport,i=n.clientWidth,s=n.clientHeight,o=0,a=0;return r&&(i=r.width,s=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(o=r.offsetLeft,a=r.offsetTop)),{width:i,height:s,x:o+du(t),y:a}}function NT(t){var e,n=en(t),r=hu(t),i=(e=t.ownerDocument)==null?void 0:e.body,s=En(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=En(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-r.scrollLeft+du(t),c=-r.scrollTop;return St(i||n).direction==="rtl"&&(a+=En(n.clientWidth,i?i.clientWidth:0)-s),{width:s,height:o,x:a,y:c}}function pu(t){var e=St(t),n=e.overflow,r=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function Cm(t){return["html","body","#document"].indexOf(ft(t))>=0?t.ownerDocument.body:He(t)&&pu(t)?t:Cm(yo(t))}function ni(t,e){var n;e===void 0&&(e=[]);var r=Cm(t),i=r===((n=t.ownerDocument)==null?void 0:n.body),s=Je(r),o=i?[s].concat(s.visualViewport||[],pu(r)?r:[]):r,a=e.concat(o);return i?a:a.concat(ni(yo(o)))}function oc(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function $T(t){var e=br(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}function Pf(t,e){return e===iu?oc(RT(t)):vr(e)?$T(e):oc(NT(en(t)))}function kT(t){var e=ni(yo(t)),n=["absolute","fixed"].indexOf(St(t).position)>=0,r=n&&He(t)?Ri(t):t;return vr(r)?e.filter(function(i){return vr(i)&&wm(i,r)&&ft(i)!=="body"}):[]}function PT(t,e,n){var r=e==="clippingParents"?kT(t):[].concat(e),i=[].concat(r,[n]),s=i[0],o=i.reduce(function(a,c){var u=Pf(t,c);return a.top=En(u.top,a.top),a.right=js(u.right,a.right),a.bottom=js(u.bottom,a.bottom),a.left=En(u.left,a.left),a},Pf(t,s));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function Om(t){var e=t.reference,n=t.element,r=t.placement,i=r?at(r):null,s=r?Er(r):null,o=e.x+e.width/2-n.width/2,a=e.y+e.height/2-n.height/2,c;switch(i){case me:c={x:o,y:e.y-n.height};break;case ke:c={x:o,y:e.y+e.height};break;case Pe:c={x:e.x+e.width,y:a};break;case ge:c={x:e.x-n.width,y:a};break;default:c={x:e.x,y:e.y}}var u=i?uu(i):null;if(u!=null){var l=u==="y"?"height":"width";switch(s){case kn:c[u]=c[u]-(e[l]/2-n[l]/2);break;case _r:c[u]=c[u]+(e[l]/2-n[l]/2);break}}return c}function wr(t,e){e===void 0&&(e={});var n=e,r=n.placement,i=r===void 0?t.placement:r,s=n.boundary,o=s===void 0?lm:s,a=n.rootBoundary,c=a===void 0?iu:a,u=n.elementContext,l=u===void 0?er:u,f=n.altBoundary,h=f===void 0?!1:f,d=n.padding,p=d===void 0?0:d,m=Sm(typeof p!="number"?p:Am(p,Dr)),g=l===er?fm:er,b=t.rects.popper,A=t.elements[h?g:l],S=PT(vr(A)?A:A.contextElement||en(t.elements.popper),o,c),T=br(t.elements.reference),C=Om({reference:T,element:b,strategy:"absolute",placement:i}),O=oc(Object.assign({},b,C)),$=l===er?O:T,D={top:S.top-$.top+m.top,bottom:$.bottom-S.bottom+m.bottom,left:S.left-$.left+m.left,right:$.right-S.right+m.right},V=t.modifiersData.offset;if(l===er&&V){var K=V[i];Object.keys(D).forEach(function(G){var v=[Pe,ke].indexOf(G)>=0?1:-1,_=[me,ke].indexOf(G)>=0?"y":"x";D[G]+=K[_]*v})}return D}function DT(t,e){e===void 0&&(e={});var n=e,r=n.placement,i=n.boundary,s=n.rootBoundary,o=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,u=c===void 0?su:c,l=Er(r),f=l?a?sc:sc.filter(function(p){return Er(p)===l}):Dr,h=f.filter(function(p){return u.indexOf(p)>=0});h.length===0&&(h=f);var d=h.reduce(function(p,m){return p[m]=wr(t,{placement:m,boundary:i,rootBoundary:s,padding:o})[at(m)],p},{});return Object.keys(d).sort(function(p,m){return d[p]-d[m]})}function LT(t){if(at(t)===vo)return[];var e=gs(t);return[kf(t),e,kf(e)]}function xT(t){var e=t.state,n=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var i=n.mainAxis,s=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!0:o,c=n.fallbackPlacements,u=n.padding,l=n.boundary,f=n.rootBoundary,h=n.altBoundary,d=n.flipVariations,p=d===void 0?!0:d,m=n.allowedAutoPlacements,g=e.options.placement,b=at(g),A=b===g,S=c||(A||!p?[gs(g)]:LT(g)),T=[g].concat(S).reduce(function(ne,ce){return ne.concat(at(ce)===vo?DT(e,{placement:ce,boundary:l,rootBoundary:f,padding:u,flipVariations:p,allowedAutoPlacements:m}):ce)},[]),C=e.rects.reference,O=e.rects.popper,$=new Map,D=!0,V=T[0],K=0;K<T.length;K++){var G=T[K],v=at(G),_=Er(G)===kn,E=[me,ke].indexOf(v)>=0,I=E?"width":"height",R=wr(e,{placement:G,boundary:l,rootBoundary:f,altBoundary:h,padding:u}),x=E?_?Pe:ge:_?ke:me;C[I]>O[I]&&(x=gs(x));var k=gs(x),L=[];if(s&&L.push(R[v]<=0),a&&L.push(R[x]<=0,R[k]<=0),L.every(function(ne){return ne})){V=G,D=!1;break}$.set(G,L)}if(D)for(var j=p?3:1,q=function(ce){var ve=T.find(function(Ae){var Ze=$.get(Ae);if(Ze)return Ze.slice(0,ce).every(function(sn){return sn})});if(ve)return V=ve,"break"},H=j;H>0;H--){var J=q(H);if(J==="break")break}e.placement!==V&&(e.modifiersData[r]._skip=!0,e.placement=V,e.reset=!0)}}var Rm={name:"flip",enabled:!0,phase:"main",fn:xT,requiresIfExists:["offset"],data:{_skip:!1}};function Df(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function Lf(t){return[me,Pe,ke,ge].some(function(e){return t[e]>=0})}function MT(t){var e=t.state,n=t.name,r=e.rects.reference,i=e.rects.popper,s=e.modifiersData.preventOverflow,o=wr(e,{elementContext:"reference"}),a=wr(e,{altBoundary:!0}),c=Df(o,r),u=Df(a,i,s),l=Lf(c),f=Lf(u);e.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:f},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":f})}var Nm={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:MT};function UT(t,e,n){var r=at(t),i=[ge,me].indexOf(r)>=0?-1:1,s=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,o=s[0],a=s[1];return o=o||0,a=(a||0)*i,[ge,Pe].indexOf(r)>=0?{x:a,y:o}:{x:o,y:a}}function FT(t){var e=t.state,n=t.options,r=t.name,i=n.offset,s=i===void 0?[0,0]:i,o=su.reduce(function(l,f){return l[f]=UT(f,e.rects,s),l},{}),a=o[e.placement],c=a.x,u=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=u),e.modifiersData[r]=o}var $m={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:FT};function BT(t){var e=t.state,n=t.name;e.modifiersData[n]=Om({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var mu={name:"popperOffsets",enabled:!0,phase:"read",fn:BT,data:{}};function jT(t){return t==="x"?"y":"x"}function HT(t){var e=t.state,n=t.options,r=t.name,i=n.mainAxis,s=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!1:o,c=n.boundary,u=n.rootBoundary,l=n.altBoundary,f=n.padding,h=n.tether,d=h===void 0?!0:h,p=n.tetherOffset,m=p===void 0?0:p,g=wr(e,{boundary:c,rootBoundary:u,padding:f,altBoundary:l}),b=at(e.placement),A=Er(e.placement),S=!A,T=uu(b),C=jT(T),O=e.modifiersData.popperOffsets,$=e.rects.reference,D=e.rects.popper,V=typeof m=="function"?m(Object.assign({},e.rects,{placement:e.placement})):m,K=typeof V=="number"?{mainAxis:V,altAxis:V}:Object.assign({mainAxis:0,altAxis:0},V),G=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,v={x:0,y:0};if(!!O){if(s){var _,E=T==="y"?me:ge,I=T==="y"?ke:Pe,R=T==="y"?"height":"width",x=O[T],k=x+g[E],L=x-g[I],j=d?-D[R]/2:0,q=A===kn?$[R]:D[R],H=A===kn?-D[R]:-$[R],J=e.elements.arrow,ne=d&&J?cu(J):{width:0,height:0},ce=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Tm(),ve=ce[E],Ae=ce[I],Ze=ti(0,$[R],ne[R]),sn=S?$[R]/2-j-Ze-ve-K.mainAxis:q-Ze-ve-K.mainAxis,z_=S?-$[R]/2+j+Ze+Ae+K.mainAxis:H+Ze+Ae+K.mainAxis,Wo=e.elements.arrow&&Ri(e.elements.arrow),W_=Wo?T==="y"?Wo.clientTop||0:Wo.clientLeft||0:0,Zu=(_=G==null?void 0:G[T])!=null?_:0,K_=x+sn-Zu-W_,G_=x+z_-Zu,el=ti(d?js(k,K_):k,x,d?En(L,G_):L);O[T]=el,v[T]=el-x}if(a){var tl,Y_=T==="x"?me:ge,X_=T==="x"?ke:Pe,on=O[C],Fi=C==="y"?"height":"width",nl=on+g[Y_],rl=on-g[X_],Ko=[me,ge].indexOf(b)!==-1,il=(tl=G==null?void 0:G[C])!=null?tl:0,sl=Ko?nl:on-$[Fi]-D[Fi]-il+K.altAxis,ol=Ko?on+$[Fi]+D[Fi]-il-K.altAxis:rl,al=d&&Ko?yT(sl,on,ol):ti(d?sl:nl,on,d?ol:rl);O[C]=al,v[C]=al-on}e.modifiersData[r]=v}}var km={name:"preventOverflow",enabled:!0,phase:"main",fn:HT,requiresIfExists:["offset"]};function VT(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function qT(t){return t===Je(t)||!He(t)?hu(t):VT(t)}function zT(t){var e=t.getBoundingClientRect(),n=yr(e.width)/t.offsetWidth||1,r=yr(e.height)/t.offsetHeight||1;return n!==1||r!==1}function WT(t,e,n){n===void 0&&(n=!1);var r=He(e),i=He(e)&&zT(e),s=en(e),o=br(t,i),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&((ft(e)!=="body"||pu(s))&&(a=qT(e)),He(e)?(c=br(e,!0),c.x+=e.clientLeft,c.y+=e.clientTop):s&&(c.x=du(s))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function KT(t){var e=new Map,n=new Set,r=[];t.forEach(function(s){e.set(s.name,s)});function i(s){n.add(s.name);var o=[].concat(s.requires||[],s.requiresIfExists||[]);o.forEach(function(a){if(!n.has(a)){var c=e.get(a);c&&i(c)}}),r.push(s)}return t.forEach(function(s){n.has(s.name)||i(s)}),r}function GT(t){var e=KT(t);return Em.reduce(function(n,r){return n.concat(e.filter(function(i){return i.phase===r}))},[])}function YT(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function XT(t){var e=t.reduce(function(n,r){var i=n[r.name];return n[r.name]=i?Object.assign({},i,r,{options:Object.assign({},i.options,r.options),data:Object.assign({},i.data,r.data)}):r,n},{});return Object.keys(e).map(function(n){return e[n]})}var xf={placement:"bottom",modifiers:[],strategy:"absolute"};function Mf(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function bo(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,r=n===void 0?[]:n,i=e.defaultOptions,s=i===void 0?xf:i;return function(a,c,u){u===void 0&&(u=s);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},xf,s),modifiersData:{},elements:{reference:a,popper:c},attributes:{},styles:{}},f=[],h=!1,d={state:l,setOptions:function(b){var A=typeof b=="function"?b(l.options):b;m(),l.options=Object.assign({},s,l.options,A),l.scrollParents={reference:vr(a)?ni(a):a.contextElement?ni(a.contextElement):[],popper:ni(c)};var S=GT(XT([].concat(r,l.options.modifiers)));return l.orderedModifiers=S.filter(function(T){return T.enabled}),p(),d.update()},forceUpdate:function(){if(!h){var b=l.elements,A=b.reference,S=b.popper;if(!!Mf(A,S)){l.rects={reference:WT(A,Ri(S),l.options.strategy==="fixed"),popper:cu(S)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(K){return l.modifiersData[K.name]=Object.assign({},K.data)});for(var T=0;T<l.orderedModifiers.length;T++){if(l.reset===!0){l.reset=!1,T=-1;continue}var C=l.orderedModifiers[T],O=C.fn,$=C.options,D=$===void 0?{}:$,V=C.name;typeof O=="function"&&(l=O({state:l,options:D,name:V,instance:d})||l)}}}},update:YT(function(){return new Promise(function(g){d.forceUpdate(),g(l)})}),destroy:function(){m(),h=!0}};if(!Mf(a,c))return d;d.setOptions(u).then(function(g){!h&&u.onFirstUpdate&&u.onFirstUpdate(g)});function p(){l.orderedModifiers.forEach(function(g){var b=g.name,A=g.options,S=A===void 0?{}:A,T=g.effect;if(typeof T=="function"){var C=T({state:l,name:b,instance:d,options:S}),O=function(){};f.push(C||O)}})}function m(){f.forEach(function(g){return g()}),f=[]}return d}}var JT=bo(),QT=[fu,mu,lu,au],ZT=bo({defaultModifiers:QT}),eS=[fu,mu,lu,au,$m,Rm,km,Im,Nm],gu=bo({defaultModifiers:eS}),Pm=Object.freeze(Object.defineProperty({__proto__:null,popperGenerator:bo,detectOverflow:wr,createPopperBase:JT,createPopper:gu,createPopperLite:ZT,top:me,bottom:ke,right:Pe,left:ge,auto:vo,basePlacements:Dr,start:kn,end:_r,clippingParents:lm,viewport:iu,popper:er,reference:fm,variationPlacements:sc,placements:su,beforeRead:hm,read:dm,afterRead:pm,beforeMain:mm,main:gm,afterMain:_m,beforeWrite:vm,write:ym,afterWrite:bm,modifierPhases:Em,applyStyles:au,arrow:Im,computeStyles:lu,eventListeners:fu,flip:Rm,hide:Nm,offset:$m,popperOffsets:mu,preventOverflow:km},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const tS=1e6,nS=1e3,ac="transitionend",rS=t=>t==null?`${t}`:{}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),iS=t=>{do t+=Math.floor(Math.random()*tS);while(document.getElementById(t));return t},Dm=t=>{let e=t.getAttribute("data-bs-target");if(!e||e==="#"){let n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),e=n&&n!=="#"?n.trim():null}return e},_u=t=>{const e=Dm(t);return e&&document.querySelector(e)?e:null},Yt=t=>{const e=Dm(t);return e?document.querySelector(e):null},sS=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:n}=window.getComputedStyle(t);const r=Number.parseFloat(e),i=Number.parseFloat(n);return!r&&!i?0:(e=e.split(",")[0],n=n.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(n))*nS)},Lm=t=>{t.dispatchEvent(new Event(ac))},Pn=t=>!t||typeof t!="object"?!1:(typeof t.jquery!="undefined"&&(t=t[0]),typeof t.nodeType!="undefined"),Xt=t=>Pn(t)?t.jquery?t[0]:t:typeof t=="string"&&t.length>0?document.querySelector(t):null,pt=(t,e,n)=>{Object.keys(n).forEach(r=>{const i=n[r],s=e[r],o=s&&Pn(s)?"element":rS(s);if(!new RegExp(i).test(o))throw new TypeError(`${t.toUpperCase()}: Option "${r}" provided type "${o}" but expected type "${i}".`)})},Ni=t=>!Pn(t)||t.getClientRects().length===0?!1:getComputedStyle(t).getPropertyValue("visibility")==="visible",wn=t=>!t||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")?!0:typeof t.disabled!="undefined"?t.disabled:t.hasAttribute("disabled")&&t.getAttribute("disabled")!=="false",xm=t=>{if(!document.documentElement.attachShadow)return null;if(typeof t.getRootNode=="function"){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?xm(t.parentNode):null},Hs=()=>{},Lr=t=>{t.offsetHeight},Mm=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},sa=[],oS=t=>{document.readyState==="loading"?(sa.length||document.addEventListener("DOMContentLoaded",()=>{sa.forEach(e=>e())}),sa.push(t)):t()},be=()=>document.documentElement.dir==="rtl",Ve=t=>{oS(()=>{const e=Mm();if(e){const n=t.NAME,r=e.fn[n];e.fn[n]=t.jQueryInterface,e.fn[n].Constructor=t,e.fn[n].noConflict=()=>(e.fn[n]=r,t.jQueryInterface)}})},pn=t=>{typeof t=="function"&&t()},Um=(t,e,n=!0)=>{if(!n){pn(t);return}const r=5,i=sS(e)+r;let s=!1;const o=({target:a})=>{a===e&&(s=!0,e.removeEventListener(ac,o),pn(t))};e.addEventListener(ac,o),setTimeout(()=>{s||Lm(e)},i)},Fm=(t,e,n,r)=>{let i=t.indexOf(e);if(i===-1)return t[!n&&r?t.length-1:0];const s=t.length;return i+=n?1:-1,r&&(i=(i+s)%s),t[Math.max(0,Math.min(i,s-1))]},aS=/[^.]*(?=\..*)\.|.*/,cS=/\..*/,uS=/::\d+$/,oa={};let Uf=1;const lS={mouseenter:"mouseover",mouseleave:"mouseout"},fS=/^(mouseenter|mouseleave)/i,Bm=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function jm(t,e){return e&&`${e}::${Uf++}`||t.uidEvent||Uf++}function Hm(t){const e=jm(t);return t.uidEvent=e,oa[e]=oa[e]||{},oa[e]}function hS(t,e){return function n(r){return r.delegateTarget=t,n.oneOff&&w.off(t,r.type,e),e.apply(t,[r])}}function dS(t,e,n){return function r(i){const s=t.querySelectorAll(e);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(let a=s.length;a--;)if(s[a]===o)return i.delegateTarget=o,r.oneOff&&w.off(t,i.type,e,n),n.apply(o,[i]);return null}}function Vm(t,e,n=null){const r=Object.keys(t);for(let i=0,s=r.length;i<s;i++){const o=t[r[i]];if(o.originalHandler===e&&o.delegationSelector===n)return o}return null}function qm(t,e,n){const r=typeof e=="string",i=r?n:e;let s=zm(t);return Bm.has(s)||(s=t),[r,i,s]}function Ff(t,e,n,r,i){if(typeof e!="string"||!t)return;if(n||(n=r,r=null),fS.test(e)){const d=p=>function(m){if(!m.relatedTarget||m.relatedTarget!==m.delegateTarget&&!m.delegateTarget.contains(m.relatedTarget))return p.call(this,m)};r?r=d(r):n=d(n)}const[s,o,a]=qm(e,n,r),c=Hm(t),u=c[a]||(c[a]={}),l=Vm(u,o,s?n:null);if(l){l.oneOff=l.oneOff&&i;return}const f=jm(o,e.replace(aS,"")),h=s?dS(t,n,r):hS(t,n);h.delegationSelector=s?n:null,h.originalHandler=o,h.oneOff=i,h.uidEvent=f,u[f]=h,t.addEventListener(a,h,s)}function cc(t,e,n,r,i){const s=Vm(e[n],r,i);!s||(t.removeEventListener(n,s,Boolean(i)),delete e[n][s.uidEvent])}function pS(t,e,n,r){const i=e[n]||{};Object.keys(i).forEach(s=>{if(s.includes(r)){const o=i[s];cc(t,e,n,o.originalHandler,o.delegationSelector)}})}function zm(t){return t=t.replace(cS,""),lS[t]||t}const w={on(t,e,n,r){Ff(t,e,n,r,!1)},one(t,e,n,r){Ff(t,e,n,r,!0)},off(t,e,n,r){if(typeof e!="string"||!t)return;const[i,s,o]=qm(e,n,r),a=o!==e,c=Hm(t),u=e.startsWith(".");if(typeof s!="undefined"){if(!c||!c[o])return;cc(t,c,o,s,i?n:null);return}u&&Object.keys(c).forEach(f=>{pS(t,c,f,e.slice(1))});const l=c[o]||{};Object.keys(l).forEach(f=>{const h=f.replace(uS,"");if(!a||e.includes(h)){const d=l[f];cc(t,c,o,d.originalHandler,d.delegationSelector)}})},trigger(t,e,n){if(typeof e!="string"||!t)return null;const r=Mm(),i=zm(e),s=e!==i,o=Bm.has(i);let a,c=!0,u=!0,l=!1,f=null;return s&&r&&(a=r.Event(e,n),r(t).trigger(a),c=!a.isPropagationStopped(),u=!a.isImmediatePropagationStopped(),l=a.isDefaultPrevented()),o?(f=document.createEvent("HTMLEvents"),f.initEvent(i,c,!0)):f=new CustomEvent(e,{bubbles:c,cancelable:!0}),typeof n!="undefined"&&Object.keys(n).forEach(h=>{Object.defineProperty(f,h,{get(){return n[h]}})}),l&&f.preventDefault(),u&&t.dispatchEvent(f),f.defaultPrevented&&typeof a!="undefined"&&a.preventDefault(),f}},Dt=new Map,ri={set(t,e,n){Dt.has(t)||Dt.set(t,new Map);const r=Dt.get(t);if(!r.has(e)&&r.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`);return}r.set(e,n)},get(t,e){return Dt.has(t)&&Dt.get(t).get(e)||null},remove(t,e){if(!Dt.has(t))return;const n=Dt.get(t);n.delete(e),n.size===0&&Dt.delete(t)}},mS="5.1.3";class Qe{constructor(e){e=Xt(e),e&&(this._element=e,ri.set(this._element,this.constructor.DATA_KEY,this))}dispose(){ri.remove(this._element,this.constructor.DATA_KEY),w.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach(e=>{this[e]=null})}_queueCallback(e,n,r=!0){Um(e,n,r)}static getInstance(e){return ri.get(Xt(e),this.DATA_KEY)}static getOrCreateInstance(e,n={}){return this.getInstance(e)||new this(e,typeof n=="object"?n:null)}static get VERSION(){return mS}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}}const Eo=(t,e="hide")=>{const n=`click.dismiss${t.EVENT_KEY}`,r=t.NAME;w.on(document,n,`[data-bs-dismiss="${r}"]`,function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),wn(this))return;const s=Yt(this)||this.closest(`.${r}`);t.getOrCreateInstance(s)[e]()})},gS="alert",_S="bs.alert",Wm=`.${_S}`,vS=`close${Wm}`,yS=`closed${Wm}`,bS="fade",ES="show";class wo extends Qe{static get NAME(){return gS}close(){if(w.trigger(this._element,vS).defaultPrevented)return;this._element.classList.remove(ES);const n=this._element.classList.contains(bS);this._queueCallback(()=>this._destroyElement(),this._element,n)}_destroyElement(){this._element.remove(),w.trigger(this._element,yS),this.dispose()}static jQueryInterface(e){return this.each(function(){const n=wo.getOrCreateInstance(this);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}Eo(wo,"close");Ve(wo);const wS="button",TS="bs.button",SS=`.${TS}`,AS=".data-api",IS="active",Bf='[data-bs-toggle="button"]',CS=`click${SS}${AS}`;class To extends Qe{static get NAME(){return wS}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(IS))}static jQueryInterface(e){return this.each(function(){const n=To.getOrCreateInstance(this);e==="toggle"&&n[e]()})}}w.on(document,CS,Bf,t=>{t.preventDefault();const e=t.target.closest(Bf);To.getOrCreateInstance(e).toggle()});Ve(To);function jf(t){return t==="true"?!0:t==="false"?!1:t===Number(t).toString()?Number(t):t===""||t==="null"?null:t}function aa(t){return t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}const ae={setDataAttribute(t,e,n){t.setAttribute(`data-bs-${aa(e)}`,n)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${aa(e)}`)},getDataAttributes(t){if(!t)return{};const e={};return Object.keys(t.dataset).filter(n=>n.startsWith("bs")).forEach(n=>{let r=n.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1,r.length),e[r]=jf(t.dataset[n])}),e},getDataAttribute(t,e){return jf(t.getAttribute(`data-bs-${aa(e)}`))},offset(t){const e=t.getBoundingClientRect();return{top:e.top+window.pageYOffset,left:e.left+window.pageXOffset}},position(t){return{top:t.offsetTop,left:t.offsetLeft}}},OS=3,M={find(t,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,t))},findOne(t,e=document.documentElement){return Element.prototype.querySelector.call(e,t)},children(t,e){return[].concat(...t.children).filter(n=>n.matches(e))},parents(t,e){const n=[];let r=t.parentNode;for(;r&&r.nodeType===Node.ELEMENT_NODE&&r.nodeType!==OS;)r.matches(e)&&n.push(r),r=r.parentNode;return n},prev(t,e){let n=t.previousElementSibling;for(;n;){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},next(t,e){let n=t.nextElementSibling;for(;n;){if(n.matches(e))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(", ");return this.find(e,t).filter(n=>!wn(n)&&Ni(n))}},Hf="carousel",RS="bs.carousel",xe=`.${RS}`,Km=".data-api",NS="ArrowLeft",$S="ArrowRight",kS=500,PS=40,Vf={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},DS={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},un="next",ln="prev",hn="left",Qr="right",LS={[NS]:Qr,[$S]:hn},xS=`slide${xe}`,qf=`slid${xe}`,MS=`keydown${xe}`,US=`mouseenter${xe}`,FS=`mouseleave${xe}`,BS=`touchstart${xe}`,jS=`touchmove${xe}`,HS=`touchend${xe}`,VS=`pointerdown${xe}`,qS=`pointerup${xe}`,zS=`dragstart${xe}`,WS=`load${xe}${Km}`,KS=`click${xe}${Km}`,GS="carousel",fn="active",YS="slide",XS="carousel-item-end",JS="carousel-item-start",QS="carousel-item-next",ZS="carousel-item-prev",eA="pointer-event",tA=".active",es=".active.carousel-item",nA=".carousel-item",rA=".carousel-item img",iA=".carousel-item-next, .carousel-item-prev",sA=".carousel-indicators",oA="[data-bs-target]",aA="[data-bs-slide], [data-bs-slide-to]",cA='[data-bs-ride="carousel"]',uA="touch",lA="pen";class yt extends Qe{constructor(e,n){super(e);this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(n),this._indicatorsElement=M.findOne(sA,this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return Vf}static get NAME(){return Hf}next(){this._slide(un)}nextWhenVisible(){!document.hidden&&Ni(this._element)&&this.next()}prev(){this._slide(ln)}pause(e){e||(this._isPaused=!0),M.findOne(iA,this._element)&&(Lm(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(e){this._activeElement=M.findOne(es,this._element);const n=this._getItemIndex(this._activeElement);if(e>this._items.length-1||e<0)return;if(this._isSliding){w.one(this._element,qf,()=>this.to(e));return}if(n===e){this.pause(),this.cycle();return}const r=e>n?un:ln;this._slide(r,this._items[e])}_getConfig(e){return e=B(B(B({},Vf),ae.getDataAttributes(this._element)),typeof e=="object"?e:{}),pt(Hf,e,DS),e}_handleSwipe(){const e=Math.abs(this.touchDeltaX);if(e<=PS)return;const n=e/this.touchDeltaX;this.touchDeltaX=0,n&&this._slide(n>0?Qr:hn)}_addEventListeners(){this._config.keyboard&&w.on(this._element,MS,e=>this._keydown(e)),this._config.pause==="hover"&&(w.on(this._element,US,e=>this.pause(e)),w.on(this._element,FS,e=>this.cycle(e))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const e=s=>this._pointerEvent&&(s.pointerType===lA||s.pointerType===uA),n=s=>{e(s)?this.touchStartX=s.clientX:this._pointerEvent||(this.touchStartX=s.touches[0].clientX)},r=s=>{this.touchDeltaX=s.touches&&s.touches.length>1?0:s.touches[0].clientX-this.touchStartX},i=s=>{e(s)&&(this.touchDeltaX=s.clientX-this.touchStartX),this._handleSwipe(),this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(o=>this.cycle(o),kS+this._config.interval))};M.find(rA,this._element).forEach(s=>{w.on(s,zS,o=>o.preventDefault())}),this._pointerEvent?(w.on(this._element,VS,s=>n(s)),w.on(this._element,qS,s=>i(s)),this._element.classList.add(eA)):(w.on(this._element,BS,s=>n(s)),w.on(this._element,jS,s=>r(s)),w.on(this._element,HS,s=>i(s)))}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const n=LS[e.key];n&&(e.preventDefault(),this._slide(n))}_getItemIndex(e){return this._items=e&&e.parentNode?M.find(nA,e.parentNode):[],this._items.indexOf(e)}_getItemByOrder(e,n){const r=e===un;return Fm(this._items,n,r,this._config.wrap)}_triggerSlideEvent(e,n){const r=this._getItemIndex(e),i=this._getItemIndex(M.findOne(es,this._element));return w.trigger(this._element,xS,{relatedTarget:e,direction:n,from:i,to:r})}_setActiveIndicatorElement(e){if(this._indicatorsElement){const n=M.findOne(tA,this._indicatorsElement);n.classList.remove(fn),n.removeAttribute("aria-current");const r=M.find(oA,this._indicatorsElement);for(let i=0;i<r.length;i++)if(Number.parseInt(r[i].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(e)){r[i].classList.add(fn),r[i].setAttribute("aria-current","true");break}}}_updateInterval(){const e=this._activeElement||M.findOne(es,this._element);if(!e)return;const n=Number.parseInt(e.getAttribute("data-bs-interval"),10);n?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=n):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(e,n){const r=this._directionToOrder(e),i=M.findOne(es,this._element),s=this._getItemIndex(i),o=n||this._getItemByOrder(r,i),a=this._getItemIndex(o),c=Boolean(this._interval),u=r===un,l=u?JS:XS,f=u?QS:ZS,h=this._orderToDirection(r);if(o&&o.classList.contains(fn)){this._isSliding=!1;return}if(this._isSliding||this._triggerSlideEvent(o,h).defaultPrevented||!i||!o)return;this._isSliding=!0,c&&this.pause(),this._setActiveIndicatorElement(o),this._activeElement=o;const p=()=>{w.trigger(this._element,qf,{relatedTarget:o,direction:h,from:s,to:a})};if(this._element.classList.contains(YS)){o.classList.add(f),Lr(o),i.classList.add(l),o.classList.add(l);const m=()=>{o.classList.remove(l,f),o.classList.add(fn),i.classList.remove(fn,f,l),this._isSliding=!1,setTimeout(p,0)};this._queueCallback(m,i,!0)}else i.classList.remove(fn),o.classList.add(fn),this._isSliding=!1,p();c&&this.cycle()}_directionToOrder(e){return[Qr,hn].includes(e)?be()?e===hn?ln:un:e===hn?un:ln:e}_orderToDirection(e){return[un,ln].includes(e)?be()?e===ln?hn:Qr:e===ln?Qr:hn:e}static carouselInterface(e,n){const r=yt.getOrCreateInstance(e,n);let{_config:i}=r;typeof n=="object"&&(i=B(B({},i),n));const s=typeof n=="string"?n:i.slide;if(typeof n=="number")r.to(n);else if(typeof s=="string"){if(typeof r[s]=="undefined")throw new TypeError(`No method named "${s}"`);r[s]()}else i.interval&&i.ride&&(r.pause(),r.cycle())}static jQueryInterface(e){return this.each(function(){yt.carouselInterface(this,e)})}static dataApiClickHandler(e){const n=Yt(this);if(!n||!n.classList.contains(GS))return;const r=B(B({},ae.getDataAttributes(n)),ae.getDataAttributes(this)),i=this.getAttribute("data-bs-slide-to");i&&(r.interval=!1),yt.carouselInterface(n,r),i&&yt.getInstance(n).to(i),e.preventDefault()}}w.on(document,KS,aA,yt.dataApiClickHandler);w.on(window,WS,()=>{const t=M.find(cA);for(let e=0,n=t.length;e<n;e++)yt.carouselInterface(t[e],yt.getInstance(t[e]))});Ve(yt);const zf="collapse",Gm="bs.collapse",$i=`.${Gm}`,fA=".data-api",Wf={toggle:!0,parent:null},hA={toggle:"boolean",parent:"(null|element)"},dA=`show${$i}`,pA=`shown${$i}`,mA=`hide${$i}`,gA=`hidden${$i}`,_A=`click${$i}${fA}`,ca="show",or="collapse",ts="collapsing",Kf="collapsed",Gf=`:scope .${or} .${or}`,vA="collapse-horizontal",yA="width",bA="height",EA=".collapse.show, .collapse.collapsing",uc='[data-bs-toggle="collapse"]';class ur extends Qe{constructor(e,n){super(e);this._isTransitioning=!1,this._config=this._getConfig(n),this._triggerArray=[];const r=M.find(uc);for(let i=0,s=r.length;i<s;i++){const o=r[i],a=_u(o),c=M.find(a).filter(u=>u===this._element);a!==null&&c.length&&(this._selector=a,this._triggerArray.push(o))}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Wf}static get NAME(){return zf}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[],n;if(this._config.parent){const u=M.find(Gf,this._config.parent);e=M.find(EA,this._config.parent).filter(l=>!u.includes(l))}const r=M.findOne(this._selector);if(e.length){const u=e.find(l=>r!==l);if(n=u?ur.getInstance(u):null,n&&n._isTransitioning)return}if(w.trigger(this._element,dA).defaultPrevented)return;e.forEach(u=>{r!==u&&ur.getOrCreateInstance(u,{toggle:!1}).hide(),n||ri.set(u,Gm,null)});const s=this._getDimension();this._element.classList.remove(or),this._element.classList.add(ts),this._element.style[s]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const o=()=>{this._isTransitioning=!1,this._element.classList.remove(ts),this._element.classList.add(or,ca),this._element.style[s]="",w.trigger(this._element,pA)},c=`scroll${s[0].toUpperCase()+s.slice(1)}`;this._queueCallback(o,this._element,!0),this._element.style[s]=`${this._element[c]}px`}hide(){if(this._isTransitioning||!this._isShown()||w.trigger(this._element,mA).defaultPrevented)return;const n=this._getDimension();this._element.style[n]=`${this._element.getBoundingClientRect()[n]}px`,Lr(this._element),this._element.classList.add(ts),this._element.classList.remove(or,ca);const r=this._triggerArray.length;for(let s=0;s<r;s++){const o=this._triggerArray[s],a=Yt(o);a&&!this._isShown(a)&&this._addAriaAndCollapsedClass([o],!1)}this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(ts),this._element.classList.add(or),w.trigger(this._element,gA)};this._element.style[n]="",this._queueCallback(i,this._element,!0)}_isShown(e=this._element){return e.classList.contains(ca)}_getConfig(e){return e=B(B(B({},Wf),ae.getDataAttributes(this._element)),e),e.toggle=Boolean(e.toggle),e.parent=Xt(e.parent),pt(zf,e,hA),e}_getDimension(){return this._element.classList.contains(vA)?yA:bA}_initializeChildren(){if(!this._config.parent)return;const e=M.find(Gf,this._config.parent);M.find(uc,this._config.parent).filter(n=>!e.includes(n)).forEach(n=>{const r=Yt(n);r&&this._addAriaAndCollapsedClass([n],this._isShown(r))})}_addAriaAndCollapsedClass(e,n){!e.length||e.forEach(r=>{n?r.classList.remove(Kf):r.classList.add(Kf),r.setAttribute("aria-expanded",n)})}static jQueryInterface(e){return this.each(function(){const n={};typeof e=="string"&&/show|hide/.test(e)&&(n.toggle=!1);const r=ur.getOrCreateInstance(this,n);if(typeof e=="string"){if(typeof r[e]=="undefined")throw new TypeError(`No method named "${e}"`);r[e]()}})}}w.on(document,_A,uc,function(t){(t.target.tagName==="A"||t.delegateTarget&&t.delegateTarget.tagName==="A")&&t.preventDefault();const e=_u(this);M.find(e).forEach(r=>{ur.getOrCreateInstance(r,{toggle:!1}).toggle()})});Ve(ur);const ua="dropdown",wA="bs.dropdown",Vn=`.${wA}`,vu=".data-api",_s="Escape",Yf="Space",Xf="Tab",lc="ArrowUp",vs="ArrowDown",TA=2,SA=new RegExp(`${lc}|${vs}|${_s}`),AA=`hide${Vn}`,IA=`hidden${Vn}`,CA=`show${Vn}`,OA=`shown${Vn}`,Ym=`click${Vn}${vu}`,Xm=`keydown${Vn}${vu}`,RA=`keyup${Vn}${vu}`,Gn="show",NA="dropup",$A="dropend",kA="dropstart",PA="navbar",ii='[data-bs-toggle="dropdown"]',fc=".dropdown-menu",DA=".navbar-nav",LA=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",xA=be()?"top-end":"top-start",MA=be()?"top-start":"top-end",UA=be()?"bottom-end":"bottom-start",FA=be()?"bottom-start":"bottom-end",BA=be()?"left-start":"right-start",jA=be()?"right-start":"left-start",HA={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},VA={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class Ue extends Qe{constructor(e,n){super(e);this._popper=null,this._config=this._getConfig(n),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar()}static get Default(){return HA}static get DefaultType(){return VA}static get NAME(){return ua}toggle(){return this._isShown()?this.hide():this.show()}show(){if(wn(this._element)||this._isShown(this._menu))return;const e={relatedTarget:this._element};if(w.trigger(this._element,CA,e).defaultPrevented)return;const r=Ue.getParentFromElement(this._element);this._inNavbar?ae.setDataAttribute(this._menu,"popper","none"):this._createPopper(r),"ontouchstart"in document.documentElement&&!r.closest(DA)&&[].concat(...document.body.children).forEach(i=>w.on(i,"mouseover",Hs)),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Gn),this._element.classList.add(Gn),w.trigger(this._element,OA,e)}hide(){if(wn(this._element)||!this._isShown(this._menu))return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){w.trigger(this._element,AA,e).defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(r=>w.off(r,"mouseover",Hs)),this._popper&&this._popper.destroy(),this._menu.classList.remove(Gn),this._element.classList.remove(Gn),this._element.setAttribute("aria-expanded","false"),ae.removeDataAttribute(this._menu,"popper"),w.trigger(this._element,IA,e))}_getConfig(e){if(e=B(B(B({},this.constructor.Default),ae.getDataAttributes(this._element)),e),pt(ua,e,this.constructor.DefaultType),typeof e.reference=="object"&&!Pn(e.reference)&&typeof e.reference.getBoundingClientRect!="function")throw new TypeError(`${ua.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(e){if(typeof Pm=="undefined")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let n=this._element;this._config.reference==="parent"?n=e:Pn(this._config.reference)?n=Xt(this._config.reference):typeof this._config.reference=="object"&&(n=this._config.reference);const r=this._getPopperConfig(),i=r.modifiers.find(s=>s.name==="applyStyles"&&s.enabled===!1);this._popper=gu(n,this._menu,r),i&&ae.setDataAttribute(this._menu,"popper","static")}_isShown(e=this._element){return e.classList.contains(Gn)}_getMenuElement(){return M.next(this._element,fc)[0]}_getPlacement(){const e=this._element.parentNode;if(e.classList.contains($A))return BA;if(e.classList.contains(kA))return jA;const n=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return e.classList.contains(NA)?n?MA:xA:n?FA:UA}_detectNavbar(){return this._element.closest(`.${PA}`)!==null}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(n=>Number.parseInt(n,10)):typeof e=="function"?n=>e(n,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return this._config.display==="static"&&(e.modifiers=[{name:"applyStyles",enabled:!1}]),B(B({},e),typeof this._config.popperConfig=="function"?this._config.popperConfig(e):this._config.popperConfig)}_selectMenuItem({key:e,target:n}){const r=M.find(LA,this._menu).filter(Ni);!r.length||Fm(r,n,e===vs,!r.includes(n)).focus()}static jQueryInterface(e){return this.each(function(){const n=Ue.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]=="undefined")throw new TypeError(`No method named "${e}"`);n[e]()}})}static clearMenus(e){if(e&&(e.button===TA||e.type==="keyup"&&e.key!==Xf))return;const n=M.find(ii);for(let r=0,i=n.length;r<i;r++){const s=Ue.getInstance(n[r]);if(!s||s._config.autoClose===!1||!s._isShown())continue;const o={relatedTarget:s._element};if(e){const a=e.composedPath(),c=a.includes(s._menu);if(a.includes(s._element)||s._config.autoClose==="inside"&&!c||s._config.autoClose==="outside"&&c||s._menu.contains(e.target)&&(e.type==="keyup"&&e.key===Xf||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;e.type==="click"&&(o.clickEvent=e)}s._completeHide(o)}}static getParentFromElement(e){return Yt(e)||e.parentNode}static dataApiKeydownHandler(e){if(/input|textarea/i.test(e.target.tagName)?e.key===Yf||e.key!==_s&&(e.key!==vs&&e.key!==lc||e.target.closest(fc)):!SA.test(e.key))return;const n=this.classList.contains(Gn);if(!n&&e.key===_s||(e.preventDefault(),e.stopPropagation(),wn(this)))return;const r=this.matches(ii)?this:M.prev(this,ii)[0],i=Ue.getOrCreateInstance(r);if(e.key===_s){i.hide();return}if(e.key===lc||e.key===vs){n||i.show(),i._selectMenuItem(e);return}(!n||e.key===Yf)&&Ue.clearMenus()}}w.on(document,Xm,ii,Ue.dataApiKeydownHandler);w.on(document,Xm,fc,Ue.dataApiKeydownHandler);w.on(document,Ym,Ue.clearMenus);w.on(document,RA,Ue.clearMenus);w.on(document,Ym,ii,function(t){t.preventDefault(),Ue.getOrCreateInstance(this).toggle()});Ve(Ue);const Jf=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Qf=".sticky-top";class hc{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",n=>n+e),this._setElementAttributes(Jf,"paddingRight",n=>n+e),this._setElementAttributes(Qf,"marginRight",n=>n-e)}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,n,r){const i=this.getWidth(),s=o=>{if(o!==this._element&&window.innerWidth>o.clientWidth+i)return;this._saveInitialAttribute(o,n);const a=window.getComputedStyle(o)[n];o.style[n]=`${r(Number.parseFloat(a))}px`};this._applyManipulationCallback(e,s)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(Jf,"paddingRight"),this._resetElementAttributes(Qf,"marginRight")}_saveInitialAttribute(e,n){const r=e.style[n];r&&ae.setDataAttribute(e,n,r)}_resetElementAttributes(e,n){const r=i=>{const s=ae.getDataAttribute(i,n);typeof s=="undefined"?i.style.removeProperty(n):(ae.removeDataAttribute(i,n),i.style[n]=s)};this._applyManipulationCallback(e,r)}_applyManipulationCallback(e,n){Pn(e)?n(e):M.find(e,this._element).forEach(n)}isOverflowing(){return this.getWidth()>0}}const qA={className:"modal-backdrop",isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},zA={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"},Jm="backdrop",WA="fade",Zf="show",eh=`mousedown.bs.${Jm}`;class Qm{constructor(e){this._config=this._getConfig(e),this._isAppended=!1,this._element=null}show(e){if(!this._config.isVisible){pn(e);return}this._append(),this._config.isAnimated&&Lr(this._getElement()),this._getElement().classList.add(Zf),this._emulateAnimation(()=>{pn(e)})}hide(e){if(!this._config.isVisible){pn(e);return}this._getElement().classList.remove(Zf),this._emulateAnimation(()=>{this.dispose(),pn(e)})}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(WA),this._element=e}return this._element}_getConfig(e){return e=B(B({},qA),typeof e=="object"?e:{}),e.rootElement=Xt(e.rootElement),pt(Jm,e,zA),e}_append(){this._isAppended||(this._config.rootElement.append(this._getElement()),w.on(this._getElement(),eh,()=>{pn(this._config.clickCallback)}),this._isAppended=!0)}dispose(){!this._isAppended||(w.off(this._element,eh),this._element.remove(),this._isAppended=!1)}_emulateAnimation(e){Um(e,this._getElement(),this._config.isAnimated)}}const KA={trapElement:null,autofocus:!0},GA={trapElement:"element",autofocus:"boolean"},YA="focustrap",XA="bs.focustrap",Vs=`.${XA}`,JA=`focusin${Vs}`,QA=`keydown.tab${Vs}`,ZA="Tab",eI="forward",th="backward";class Zm{constructor(e){this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}activate(){const{trapElement:e,autofocus:n}=this._config;this._isActive||(n&&e.focus(),w.off(document,Vs),w.on(document,JA,r=>this._handleFocusin(r)),w.on(document,QA,r=>this._handleKeydown(r)),this._isActive=!0)}deactivate(){!this._isActive||(this._isActive=!1,w.off(document,Vs))}_handleFocusin(e){const{target:n}=e,{trapElement:r}=this._config;if(n===document||n===r||r.contains(n))return;const i=M.focusableChildren(r);i.length===0?r.focus():this._lastTabNavDirection===th?i[i.length-1].focus():i[0].focus()}_handleKeydown(e){e.key===ZA&&(this._lastTabNavDirection=e.shiftKey?th:eI)}_getConfig(e){return e=B(B({},KA),typeof e=="object"?e:{}),pt(YA,e,GA),e}}const nh="modal",tI="bs.modal",qe=`.${tI}`,nI=".data-api",rh="Escape",ih={backdrop:!0,keyboard:!0,focus:!0},rI={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"},iI=`hide${qe}`,sI=`hidePrevented${qe}`,eg=`hidden${qe}`,tg=`show${qe}`,oI=`shown${qe}`,sh=`resize${qe}`,oh=`click.dismiss${qe}`,ah=`keydown.dismiss${qe}`,aI=`mouseup.dismiss${qe}`,ch=`mousedown.dismiss${qe}`,cI=`click${qe}${nI}`,uh="modal-open",uI="fade",lh="show",la="modal-static",lI=".modal.show",fI=".modal-dialog",hI=".modal-body",dI='[data-bs-toggle="modal"]';class Tr extends Qe{constructor(e,n){super(e);this._config=this._getConfig(n),this._dialog=M.findOne(fI,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollBar=new hc}static get Default(){return ih}static get NAME(){return nh}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||w.trigger(this._element,tg,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isAnimated()&&(this._isTransitioning=!0),this._scrollBar.hide(),document.body.classList.add(uh),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),w.on(this._dialog,ch,()=>{w.one(this._element,aI,r=>{r.target===this._element&&(this._ignoreBackdropClick=!0)})}),this._showBackdrop(()=>this._showElement(e)))}hide(){if(!this._isShown||this._isTransitioning||w.trigger(this._element,iI).defaultPrevented)return;this._isShown=!1;const n=this._isAnimated();n&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),this._focustrap.deactivate(),this._element.classList.remove(lh),w.off(this._element,oh),w.off(this._dialog,ch),this._queueCallback(()=>this._hideModal(),this._element,n)}dispose(){[window,this._dialog].forEach(e=>w.off(e,qe)),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Qm({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Zm({trapElement:this._element})}_getConfig(e){return e=B(B(B({},ih),ae.getDataAttributes(this._element)),typeof e=="object"?e:{}),pt(nh,e,rI),e}_showElement(e){const n=this._isAnimated(),r=M.findOne(hI,this._dialog);(!this._element.parentNode||this._element.parentNode.nodeType!==Node.ELEMENT_NODE)&&document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,r&&(r.scrollTop=0),n&&Lr(this._element),this._element.classList.add(lh);const i=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,w.trigger(this._element,oI,{relatedTarget:e})};this._queueCallback(i,this._dialog,n)}_setEscapeEvent(){this._isShown?w.on(this._element,ah,e=>{this._config.keyboard&&e.key===rh?(e.preventDefault(),this.hide()):!this._config.keyboard&&e.key===rh&&this._triggerBackdropTransition()}):w.off(this._element,ah)}_setResizeEvent(){this._isShown?w.on(window,sh,()=>this._adjustDialog()):w.off(window,sh)}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(uh),this._resetAdjustments(),this._scrollBar.reset(),w.trigger(this._element,eg)})}_showBackdrop(e){w.on(this._element,oh,n=>{if(this._ignoreBackdropClick){this._ignoreBackdropClick=!1;return}n.target===n.currentTarget&&(this._config.backdrop===!0?this.hide():this._config.backdrop==="static"&&this._triggerBackdropTransition())}),this._backdrop.show(e)}_isAnimated(){return this._element.classList.contains(uI)}_triggerBackdropTransition(){if(w.trigger(this._element,sI).defaultPrevented)return;const{classList:n,scrollHeight:r,style:i}=this._element,s=r>document.documentElement.clientHeight;!s&&i.overflowY==="hidden"||n.contains(la)||(s||(i.overflowY="hidden"),n.add(la),this._queueCallback(()=>{n.remove(la),s||this._queueCallback(()=>{i.overflowY=""},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,n=this._scrollBar.getWidth(),r=n>0;(!r&&e&&!be()||r&&!e&&be())&&(this._element.style.paddingLeft=`${n}px`),(r&&!e&&!be()||!r&&e&&be())&&(this._element.style.paddingRight=`${n}px`)}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,n){return this.each(function(){const r=Tr.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof r[e]=="undefined")throw new TypeError(`No method named "${e}"`);r[e](n)}})}}w.on(document,cI,dI,function(t){const e=Yt(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),w.one(e,tg,i=>{i.defaultPrevented||w.one(e,eg,()=>{Ni(this)&&this.focus()})});const n=M.findOne(lI);n&&Tr.getInstance(n).hide(),Tr.getOrCreateInstance(e).toggle(this)});Eo(Tr);Ve(Tr);const fh="offcanvas",pI="bs.offcanvas",qn=`.${pI}`,ng=".data-api",mI=`load${qn}${ng}`,gI="Escape",hh={backdrop:!0,keyboard:!0,scroll:!1},_I={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"},dh="show",vI="offcanvas-backdrop",rg=".offcanvas.show",yI=`show${qn}`,bI=`shown${qn}`,EI=`hide${qn}`,ig=`hidden${qn}`,wI=`click${qn}${ng}`,TI=`keydown.dismiss${qn}`,SI='[data-bs-toggle="offcanvas"]';class Dn extends Qe{constructor(e,n){super(e);this._config=this._getConfig(n),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get NAME(){return fh}static get Default(){return hh}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||w.trigger(this._element,yI,{relatedTarget:e}).defaultPrevented)return;this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||new hc().hide(),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(dh);const r=()=>{this._config.scroll||this._focustrap.activate(),w.trigger(this._element,bI,{relatedTarget:e})};this._queueCallback(r,this._element,!0)}hide(){if(!this._isShown||w.trigger(this._element,EI).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.remove(dh),this._backdrop.hide();const n=()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||new hc().reset(),w.trigger(this._element,ig)};this._queueCallback(n,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_getConfig(e){return e=B(B(B({},hh),ae.getDataAttributes(this._element)),typeof e=="object"?e:{}),pt(fh,e,_I),e}_initializeBackDrop(){return new Qm({className:vI,isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_initializeFocusTrap(){return new Zm({trapElement:this._element})}_addEventListeners(){w.on(this._element,TI,e=>{this._config.keyboard&&e.key===gI&&this.hide()})}static jQueryInterface(e){return this.each(function(){const n=Dn.getOrCreateInstance(this,e);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}w.on(document,wI,SI,function(t){const e=Yt(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),wn(this))return;w.one(e,ig,()=>{Ni(this)&&this.focus()});const n=M.findOne(rg);n&&n!==e&&Dn.getInstance(n).hide(),Dn.getOrCreateInstance(e).toggle(this)});w.on(window,mI,()=>M.find(rg).forEach(t=>Dn.getOrCreateInstance(t).show()));Eo(Dn);Ve(Dn);const AI=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),II=/^aria-[\w-]*$/i,CI=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,OI=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,RI=(t,e)=>{const n=t.nodeName.toLowerCase();if(e.includes(n))return AI.has(n)?Boolean(CI.test(t.nodeValue)||OI.test(t.nodeValue)):!0;const r=e.filter(i=>i instanceof RegExp);for(let i=0,s=r.length;i<s;i++)if(r[i].test(n))return!0;return!1},NI={"*":["class","dir","id","lang","role",II],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function ph(t,e,n){if(!t.length)return t;if(n&&typeof n=="function")return n(t);const i=new window.DOMParser().parseFromString(t,"text/html"),s=[].concat(...i.body.querySelectorAll("*"));for(let o=0,a=s.length;o<a;o++){const c=s[o],u=c.nodeName.toLowerCase();if(!Object.keys(e).includes(u)){c.remove();continue}const l=[].concat(...c.attributes),f=[].concat(e["*"]||[],e[u]||[]);l.forEach(h=>{RI(h,f)||c.removeAttribute(h.nodeName)})}return i.body.innerHTML}const mh="tooltip",$I="bs.tooltip",et=`.${$I}`,kI="bs-tooltip",PI=new Set(["sanitize","allowList","sanitizeFn"]),DI={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},LI={AUTO:"auto",TOP:"top",RIGHT:be()?"left":"right",BOTTOM:"bottom",LEFT:be()?"right":"left"},xI={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:NI,popperConfig:null},MI={HIDE:`hide${et}`,HIDDEN:`hidden${et}`,SHOW:`show${et}`,SHOWN:`shown${et}`,INSERTED:`inserted${et}`,CLICK:`click${et}`,FOCUSIN:`focusin${et}`,FOCUSOUT:`focusout${et}`,MOUSEENTER:`mouseenter${et}`,MOUSELEAVE:`mouseleave${et}`},ns="fade",UI="modal",Vr="show",qr="show",fa="out",gh=".tooltip-inner",_h=`.${UI}`,vh="hide.bs.modal",zr="hover",ha="focus",FI="click",BI="manual";class xr extends Qe{constructor(e,n){if(typeof Pm=="undefined")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e);this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this._config=this._getConfig(n),this.tip=null,this._setListeners()}static get Default(){return xI}static get NAME(){return mh}static get Event(){return MI}static get DefaultType(){return DI}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(e){if(!!this._isEnabled)if(e){const n=this._initializeOnDelegatedTarget(e);n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(this.getTipElement().classList.contains(Vr)){this._leave(null,this);return}this._enter(null,this)}}dispose(){clearTimeout(this._timeout),w.off(this._element.closest(_h),vh,this._hideModalHandler),this.tip&&this.tip.remove(),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this.isWithContent()&&this._isEnabled))return;const e=w.trigger(this._element,this.constructor.Event.SHOW),n=xm(this._element),r=n===null?this._element.ownerDocument.documentElement.contains(this._element):n.contains(this._element);if(e.defaultPrevented||!r)return;this.constructor.NAME==="tooltip"&&this.tip&&this.getTitle()!==this.tip.querySelector(gh).innerHTML&&(this._disposePopper(),this.tip.remove(),this.tip=null);const i=this.getTipElement(),s=iS(this.constructor.NAME);i.setAttribute("id",s),this._element.setAttribute("aria-describedby",s),this._config.animation&&i.classList.add(ns);const o=typeof this._config.placement=="function"?this._config.placement.call(this,i,this._element):this._config.placement,a=this._getAttachment(o);this._addAttachmentClass(a);const{container:c}=this._config;ri.set(i,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(c.append(i),w.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=gu(this._element,i,this._getPopperConfig(a)),i.classList.add(Vr);const u=this._resolvePossibleFunction(this._config.customClass);u&&i.classList.add(...u.split(" ")),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(h=>{w.on(h,"mouseover",Hs)});const l=()=>{const h=this._hoverState;this._hoverState=null,w.trigger(this._element,this.constructor.Event.SHOWN),h===fa&&this._leave(null,this)},f=this.tip.classList.contains(ns);this._queueCallback(l,this.tip,f)}hide(){if(!this._popper)return;const e=this.getTipElement(),n=()=>{this._isWithActiveTrigger()||(this._hoverState!==qr&&e.remove(),this._cleanTipClass(),this._element.removeAttribute("aria-describedby"),w.trigger(this._element,this.constructor.Event.HIDDEN),this._disposePopper())};if(w.trigger(this._element,this.constructor.Event.HIDE).defaultPrevented)return;e.classList.remove(Vr),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(s=>w.off(s,"mouseover",Hs)),this._activeTrigger[FI]=!1,this._activeTrigger[ha]=!1,this._activeTrigger[zr]=!1;const i=this.tip.classList.contains(ns);this._queueCallback(n,this.tip,i),this._hoverState=""}update(){this._popper!==null&&this._popper.update()}isWithContent(){return Boolean(this.getTitle())}getTipElement(){if(this.tip)return this.tip;const e=document.createElement("div");e.innerHTML=this._config.template;const n=e.children[0];return this.setContent(n),n.classList.remove(ns,Vr),this.tip=n,this.tip}setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),gh)}_sanitizeAndSetContent(e,n,r){const i=M.findOne(r,e);if(!n&&i){i.remove();return}this.setElementContent(i,n)}setElementContent(e,n){if(e!==null){if(Pn(n)){n=Xt(n),this._config.html?n.parentNode!==e&&(e.innerHTML="",e.append(n)):e.textContent=n.textContent;return}this._config.html?(this._config.sanitize&&(n=ph(n,this._config.allowList,this._config.sanitizeFn)),e.innerHTML=n):e.textContent=n}}getTitle(){const e=this._element.getAttribute("data-bs-original-title")||this._config.title;return this._resolvePossibleFunction(e)}updateAttachment(e){return e==="right"?"end":e==="left"?"start":e}_initializeOnDelegatedTarget(e,n){return n||this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(n=>Number.parseInt(n,10)):typeof e=="function"?n=>e(n,this._element):e}_resolvePossibleFunction(e){return typeof e=="function"?e.call(this._element):e}_getPopperConfig(e){const n={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:r=>this._handlePopperPlacementChange(r)}],onFirstUpdate:r=>{r.options.placement!==r.placement&&this._handlePopperPlacementChange(r)}};return B(B({},n),typeof this._config.popperConfig=="function"?this._config.popperConfig(n):this._config.popperConfig)}_addAttachmentClass(e){this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(e)}`)}_getAttachment(e){return LI[e.toUpperCase()]}_setListeners(){this._config.trigger.split(" ").forEach(n=>{if(n==="click")w.on(this._element,this.constructor.Event.CLICK,this._config.selector,r=>this.toggle(r));else if(n!==BI){const r=n===zr?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,i=n===zr?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;w.on(this._element,r,this._config.selector,s=>this._enter(s)),w.on(this._element,i,this._config.selector,s=>this._leave(s))}}),this._hideModalHandler=()=>{this._element&&this.hide()},w.on(this._element.closest(_h),vh,this._hideModalHandler),this._config.selector?this._config=Bi(B({},this._config),{trigger:"manual",selector:""}):this._fixTitle()}_fixTitle(){const e=this._element.getAttribute("title"),n=typeof this._element.getAttribute("data-bs-original-title");(e||n!=="string")&&(this._element.setAttribute("data-bs-original-title",e||""),e&&!this._element.getAttribute("aria-label")&&!this._element.textContent&&this._element.setAttribute("aria-label",e),this._element.setAttribute("title",""))}_enter(e,n){if(n=this._initializeOnDelegatedTarget(e,n),e&&(n._activeTrigger[e.type==="focusin"?ha:zr]=!0),n.getTipElement().classList.contains(Vr)||n._hoverState===qr){n._hoverState=qr;return}if(clearTimeout(n._timeout),n._hoverState=qr,!n._config.delay||!n._config.delay.show){n.show();return}n._timeout=setTimeout(()=>{n._hoverState===qr&&n.show()},n._config.delay.show)}_leave(e,n){if(n=this._initializeOnDelegatedTarget(e,n),e&&(n._activeTrigger[e.type==="focusout"?ha:zr]=n._element.contains(e.relatedTarget)),!n._isWithActiveTrigger()){if(clearTimeout(n._timeout),n._hoverState=fa,!n._config.delay||!n._config.delay.hide){n.hide();return}n._timeout=setTimeout(()=>{n._hoverState===fa&&n.hide()},n._config.delay.hide)}}_isWithActiveTrigger(){for(const e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1}_getConfig(e){const n=ae.getDataAttributes(this._element);return Object.keys(n).forEach(r=>{PI.has(r)&&delete n[r]}),e=B(B(B({},this.constructor.Default),n),typeof e=="object"&&e?e:{}),e.container=e.container===!1?document.body:Xt(e.container),typeof e.delay=="number"&&(e.delay={show:e.delay,hide:e.delay}),typeof e.title=="number"&&(e.title=e.title.toString()),typeof e.content=="number"&&(e.content=e.content.toString()),pt(mh,e,this.constructor.DefaultType),e.sanitize&&(e.template=ph(e.template,e.allowList,e.sanitizeFn)),e}_getDelegateConfig(){const e={};for(const n in this._config)this.constructor.Default[n]!==this._config[n]&&(e[n]=this._config[n]);return e}_cleanTipClass(){const e=this.getTipElement(),n=new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`,"g"),r=e.getAttribute("class").match(n);r!==null&&r.length>0&&r.map(i=>i.trim()).forEach(i=>e.classList.remove(i))}_getBasicClassPrefix(){return kI}_handlePopperPlacementChange(e){const{state:n}=e;!n||(this.tip=n.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(n.placement)))}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(e){return this.each(function(){const n=xr.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]=="undefined")throw new TypeError(`No method named "${e}"`);n[e]()}})}}Ve(xr);const jI="popover",HI="bs.popover",tt=`.${HI}`,VI="bs-popover",qI=Bi(B({},xr.Default),{placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),zI=Bi(B({},xr.DefaultType),{content:"(string|element|function)"}),WI={HIDE:`hide${tt}`,HIDDEN:`hidden${tt}`,SHOW:`show${tt}`,SHOWN:`shown${tt}`,INSERTED:`inserted${tt}`,CLICK:`click${tt}`,FOCUSIN:`focusin${tt}`,FOCUSOUT:`focusout${tt}`,MOUSEENTER:`mouseenter${tt}`,MOUSELEAVE:`mouseleave${tt}`},KI=".popover-header",GI=".popover-body";class yu extends xr{static get Default(){return qI}static get NAME(){return jI}static get Event(){return WI}static get DefaultType(){return zI}isWithContent(){return this.getTitle()||this._getContent()}setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),KI),this._sanitizeAndSetContent(e,this._getContent(),GI)}_getContent(){return this._resolvePossibleFunction(this._config.content)}_getBasicClassPrefix(){return VI}static jQueryInterface(e){return this.each(function(){const n=yu.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]=="undefined")throw new TypeError(`No method named "${e}"`);n[e]()}})}}Ve(yu);const yh="scrollspy",YI="bs.scrollspy",So=`.${YI}`,XI=".data-api",bh={offset:10,method:"auto",target:""},JI={offset:"number",method:"string",target:"(string|element)"},QI=`activate${So}`,ZI=`scroll${So}`,eC=`load${So}${XI}`,sg="dropdown-item",Yn="active",tC='[data-bs-spy="scroll"]',nC=".nav, .list-group",dc=".nav-link",rC=".nav-item",og=".list-group-item",da=`${dc}, ${og}, .${sg}`,iC=".dropdown",sC=".dropdown-toggle",oC="offset",Eh="position";class Ao extends Qe{constructor(e,n){super(e);this._scrollElement=this._element.tagName==="BODY"?window:this._element,this._config=this._getConfig(n),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,w.on(this._scrollElement,ZI,()=>this._process()),this.refresh(),this._process()}static get Default(){return bh}static get NAME(){return yh}refresh(){const e=this._scrollElement===this._scrollElement.window?oC:Eh,n=this._config.method==="auto"?e:this._config.method,r=n===Eh?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),M.find(da,this._config.target).map(s=>{const o=_u(s),a=o?M.findOne(o):null;if(a){const c=a.getBoundingClientRect();if(c.width||c.height)return[ae[n](a).top+r,o]}return null}).filter(s=>s).sort((s,o)=>s[0]-o[0]).forEach(s=>{this._offsets.push(s[0]),this._targets.push(s[1])})}dispose(){w.off(this._scrollElement,So),super.dispose()}_getConfig(e){return e=B(B(B({},bh),ae.getDataAttributes(this._element)),typeof e=="object"&&e?e:{}),e.target=Xt(e.target)||document.documentElement,pt(yh,e,JI),e}_getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop}_getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}_getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height}_process(){const e=this._getScrollTop()+this._config.offset,n=this._getScrollHeight(),r=this._config.offset+n-this._getOffsetHeight();if(this._scrollHeight!==n&&this.refresh(),e>=r){const i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i);return}if(this._activeTarget&&e<this._offsets[0]&&this._offsets[0]>0){this._activeTarget=null,this._clear();return}for(let i=this._offsets.length;i--;)this._activeTarget!==this._targets[i]&&e>=this._offsets[i]&&(typeof this._offsets[i+1]=="undefined"||e<this._offsets[i+1])&&this._activate(this._targets[i])}_activate(e){this._activeTarget=e,this._clear();const n=da.split(",").map(i=>`${i}[data-bs-target="${e}"],${i}[href="${e}"]`),r=M.findOne(n.join(","),this._config.target);r.classList.add(Yn),r.classList.contains(sg)?M.findOne(sC,r.closest(iC)).classList.add(Yn):M.parents(r,nC).forEach(i=>{M.prev(i,`${dc}, ${og}`).forEach(s=>s.classList.add(Yn)),M.prev(i,rC).forEach(s=>{M.children(s,dc).forEach(o=>o.classList.add(Yn))})}),w.trigger(this._scrollElement,QI,{relatedTarget:e})}_clear(){M.find(da,this._config.target).filter(e=>e.classList.contains(Yn)).forEach(e=>e.classList.remove(Yn))}static jQueryInterface(e){return this.each(function(){const n=Ao.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]=="undefined")throw new TypeError(`No method named "${e}"`);n[e]()}})}}w.on(window,eC,()=>{M.find(tC).forEach(t=>new Ao(t))});Ve(Ao);const aC="tab",cC="bs.tab",ki=`.${cC}`,uC=".data-api",lC=`hide${ki}`,fC=`hidden${ki}`,hC=`show${ki}`,dC=`shown${ki}`,pC=`click${ki}${uC}`,mC="dropdown-menu",Wr="active",wh="fade",Th="show",gC=".dropdown",_C=".nav, .list-group",Sh=".active",Ah=":scope > li > .active",vC='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',yC=".dropdown-toggle",bC=":scope > .dropdown-menu .active";class Io extends Qe{static get NAME(){return aC}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains(Wr))return;let e;const n=Yt(this._element),r=this._element.closest(_C);if(r){const a=r.nodeName==="UL"||r.nodeName==="OL"?Ah:Sh;e=M.find(a,r),e=e[e.length-1]}const i=e?w.trigger(e,lC,{relatedTarget:this._element}):null;if(w.trigger(this._element,hC,{relatedTarget:e}).defaultPrevented||i!==null&&i.defaultPrevented)return;this._activate(this._element,r);const o=()=>{w.trigger(e,fC,{relatedTarget:this._element}),w.trigger(this._element,dC,{relatedTarget:e})};n?this._activate(n,n.parentNode,o):o()}_activate(e,n,r){const s=(n&&(n.nodeName==="UL"||n.nodeName==="OL")?M.find(Ah,n):M.children(n,Sh))[0],o=r&&s&&s.classList.contains(wh),a=()=>this._transitionComplete(e,s,r);s&&o?(s.classList.remove(Th),this._queueCallback(a,e,!0)):a()}_transitionComplete(e,n,r){if(n){n.classList.remove(Wr);const s=M.findOne(bC,n.parentNode);s&&s.classList.remove(Wr),n.getAttribute("role")==="tab"&&n.setAttribute("aria-selected",!1)}e.classList.add(Wr),e.getAttribute("role")==="tab"&&e.setAttribute("aria-selected",!0),Lr(e),e.classList.contains(wh)&&e.classList.add(Th);let i=e.parentNode;if(i&&i.nodeName==="LI"&&(i=i.parentNode),i&&i.classList.contains(mC)){const s=e.closest(gC);s&&M.find(yC,s).forEach(o=>o.classList.add(Wr)),e.setAttribute("aria-expanded",!0)}r&&r()}static jQueryInterface(e){return this.each(function(){const n=Io.getOrCreateInstance(this);if(typeof e=="string"){if(typeof n[e]=="undefined")throw new TypeError(`No method named "${e}"`);n[e]()}})}}w.on(document,pC,vC,function(t){if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),wn(this))return;Io.getOrCreateInstance(this).show()});Ve(Io);const Ih="toast",EC="bs.toast",tn=`.${EC}`,wC=`mouseover${tn}`,TC=`mouseout${tn}`,SC=`focusin${tn}`,AC=`focusout${tn}`,IC=`hide${tn}`,CC=`hidden${tn}`,OC=`show${tn}`,RC=`shown${tn}`,NC="fade",Ch="hide",Kr="show",rs="showing",$C={animation:"boolean",autohide:"boolean",delay:"number"},Oh={animation:!0,autohide:!0,delay:5e3};class Co extends Qe{constructor(e,n){super(e);this._config=this._getConfig(n),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get DefaultType(){return $C}static get Default(){return Oh}static get NAME(){return Ih}show(){if(w.trigger(this._element,OC).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(NC);const n=()=>{this._element.classList.remove(rs),w.trigger(this._element,RC),this._maybeScheduleHide()};this._element.classList.remove(Ch),Lr(this._element),this._element.classList.add(Kr),this._element.classList.add(rs),this._queueCallback(n,this._element,this._config.animation)}hide(){if(!this._element.classList.contains(Kr)||w.trigger(this._element,IC).defaultPrevented)return;const n=()=>{this._element.classList.add(Ch),this._element.classList.remove(rs),this._element.classList.remove(Kr),w.trigger(this._element,CC)};this._element.classList.add(rs),this._queueCallback(n,this._element,this._config.animation)}dispose(){this._clearTimeout(),this._element.classList.contains(Kr)&&this._element.classList.remove(Kr),super.dispose()}_getConfig(e){return e=B(B(B({},Oh),ae.getDataAttributes(this._element)),typeof e=="object"&&e?e:{}),pt(Ih,e,this.constructor.DefaultType),e}_maybeScheduleHide(){!this._config.autohide||this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay))}_onInteraction(e,n){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=n;break;case"focusin":case"focusout":this._hasKeyboardInteraction=n;break}if(n){this._clearTimeout();return}const r=e.relatedTarget;this._element===r||this._element.contains(r)||this._maybeScheduleHide()}_setListeners(){w.on(this._element,wC,e=>this._onInteraction(e,!0)),w.on(this._element,TC,e=>this._onInteraction(e,!1)),w.on(this._element,SC,e=>this._onInteraction(e,!0)),w.on(this._element,AC,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){const n=Co.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]=="undefined")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}Eo(Co);Ve(Co);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},kC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},cg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=s>>2,f=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,d=u&63;c||(d=64,o||(h=64)),r.push(n[l],n[f],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ag(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw Error();const h=s<<2|a>>4;if(r.push(h),u!==64){const d=a<<4&240|u>>2;if(r.push(d),f!==64){const p=u<<6&192|f;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},PC=function(t){const e=ag(t);return cg.encodeByteArray(e,!0)},qs=function(t){return PC(t).replace(/\./g,"")},DC=function(t){try{return cg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function zs(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!LC(n)||(t[n]=zs(t[n],e[n]));return t}function LC(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[qs(JSON.stringify(n)),qs(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function UC(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fe())}function FC(){return typeof self=="object"&&self.self===self}function BC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function HC(){const t=fe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function VC(){return typeof indexedDB=="object"}function qC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC="FirebaseError";class $t extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=zC,Object.setPrototypeOf(this,$t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zn.prototype.create)}}class zn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?WC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new $t(i,a,r)}}function WC(t,e){return t.replace(KC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const KC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function GC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ws(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Nh(s)&&Nh(o)){if(!Ws(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Nh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ug(t,e){const n=new YC(t,e);return n.subscribe.bind(n)}class YC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");XC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=pa),i.error===void 0&&(i.error=pa),i.complete===void 0&&(i.complete=pa);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function XC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function pa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(t,e){return new Promise((n,r)=>{t.onsuccess=i=>{n(i.target.result)},t.onerror=i=>{var s;r(`${e}: ${(s=i.target.error)===null||s===void 0?void 0:s.message}`)}})}class $h{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n){return new lg(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new fg(this._db.createObjectStore(e,n))}close(){this._db.close()}}class lg{constructor(e){this._transaction=e,this.complete=new Promise((n,r)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{r(this._transaction.error)},this._transaction.onabort=()=>{r(this._transaction.error)}})}objectStore(e){return new fg(this._transaction.objectStore(e))}}class fg{constructor(e){this._store=e}index(e){return new kh(this._store.index(e))}createIndex(e,n,r){return new kh(this._store.createIndex(e,n,r))}get(e){const n=this._store.get(e);return Zr(n,"Error reading from IndexedDB")}put(e,n){const r=this._store.put(e,n);return Zr(r,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return Zr(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return Zr(e,"Error clearing IndexedDB object store")}}class kh{constructor(e){this._index=e}get(e){const n=this._index.get(e);return Zr(n,"Error reading from IndexedDB")}}function JC(t,e,n){return new Promise((r,i)=>{try{const s=indexedDB.open(t,e);s.onsuccess=o=>{r(new $h(o.target.result))},s.onerror=o=>{var a;i(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},s.onupgradeneeded=o=>{n(new $h(s.result),o.oldVersion,o.newVersion,new lg(s.transaction))}}catch(s){i(`Error opening indexedDB: ${s.message}`)}})}class ht{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new xC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eO(e))try{this.getOrInitializeService({instanceIdentifier:dn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=dn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=dn){return this.instances.has(e)}getOptions(e=dn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ZC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=dn){return this.component?this.component.multipleInstances?e:dn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ZC(t){return t===dn?void 0:t}function eO(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new QC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu=[];var W;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(W||(W={}));const hg={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},nO=W.INFO,rO={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},iO=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=rO[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Oo{constructor(e){this.name=e,this._logLevel=nO,this._logHandler=iO,this._userLogHandler=null,bu.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}function sO(t){bu.forEach(e=>{e.setLogLevel(t)})}function oO(t,e){for(const n of bu){let r=null;e&&e.level&&(r=hg[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(r!=null?r:i.logLevel)&&t({level:W[s].toLowerCase(),message:a,args:o,type:i.name})}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(cO(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function cO(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pc="@firebase/app",Ph="0.7.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu=new Oo("@firebase/app"),uO="@firebase/app-compat",lO="@firebase/analytics-compat",fO="@firebase/analytics",hO="@firebase/app-check-compat",dO="@firebase/app-check",pO="@firebase/auth",mO="@firebase/auth-compat",gO="@firebase/database",_O="@firebase/database-compat",vO="@firebase/functions",yO="@firebase/functions-compat",bO="@firebase/installations",EO="@firebase/installations-compat",wO="@firebase/messaging",TO="@firebase/messaging-compat",SO="@firebase/performance",AO="@firebase/performance-compat",IO="@firebase/remote-config",CO="@firebase/remote-config-compat",OO="@firebase/storage",RO="@firebase/storage-compat",NO="@firebase/firestore",$O="@firebase/firestore-compat",kO="firebase",PO="9.6.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln="[DEFAULT]",DO={[pc]:"fire-core",[uO]:"fire-core-compat",[fO]:"fire-analytics",[lO]:"fire-analytics-compat",[dO]:"fire-app-check",[hO]:"fire-app-check-compat",[pO]:"fire-auth",[mO]:"fire-auth-compat",[gO]:"fire-rtdb",[_O]:"fire-rtdb-compat",[vO]:"fire-fn",[yO]:"fire-fn-compat",[bO]:"fire-iid",[EO]:"fire-iid-compat",[wO]:"fire-fcm",[TO]:"fire-fcm-compat",[SO]:"fire-perf",[AO]:"fire-perf-compat",[IO]:"fire-rc",[CO]:"fire-rc-compat",[OO]:"fire-gcs",[RO]:"fire-gcs-compat",[NO]:"fire-fst",[$O]:"fire-fst-compat","fire-js":"fire-js",[kO]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=new Map,gi=new Map;function Ks(t,e){try{t.container.addComponent(e)}catch(n){Eu.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function dg(t,e){t.container.addOrOverwriteComponent(e)}function At(t){const e=t.name;if(gi.has(e))return Eu.debug(`There were multiple attempts to register component ${e}.`),!1;gi.set(e,t);for(const n of Jt.values())Ks(n,t);return!0}function Di(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function LO(t,e,n=Ln){Di(t,e).clearInstance(n)}function xO(){gi.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MO={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Qt=new zn("app","Firebase",MO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UO{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ht("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=PO;function wu(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ln,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Qt.create("bad-app-name",{appName:String(r)});const i=Jt.get(r);if(i){if(Ws(t,i.options)&&Ws(n,i.config))return i;throw Qt.create("duplicate-app",{appName:r})}const s=new tO(r);for(const a of gi.values())s.addComponent(a);const o=new UO(t,n,s);return Jt.set(r,o),o}function Tu(t=Ln){const e=Jt.get(t);if(!e)throw Qt.create("no-app",{appName:t});return e}function FO(){return Array.from(Jt.values())}async function pg(t){const e=t.name;Jt.has(e)&&(Jt.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Oe(t,e,n){var r;let i=(r=DO[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Eu.warn(a.join(" "));return}At(new ht(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function mg(t,e){if(t!==null&&typeof t!="function")throw Qt.create("invalid-log-argument");oO(t,e)}function gg(t){sO(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BO="firebase-heartbeat-database",jO=1,_i="firebase-heartbeat-store";let ma=null;function _g(){return ma||(ma=JC(BO,jO,(t,e)=>{switch(e){case 0:t.createObjectStore(_i)}}).catch(t=>{throw Qt.create("storage-open",{originalErrorMessage:t.message})})),ma}async function HO(t){try{return(await _g()).transaction(_i).objectStore(_i).get(vg(t))}catch(e){throw Qt.create("storage-get",{originalErrorMessage:e.message})}}async function Dh(t,e){try{const r=(await _g()).transaction(_i,"readwrite");return await r.objectStore(_i).put(e,vg(t)),r.complete}catch(n){throw Qt.create("storage-set",{originalErrorMessage:n.message})}}function vg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VO=1024,qO=30*24*60*60*1e3;class zO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new KO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Lh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=qO}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Lh(),{heartbeatsToSend:n,unsentEntries:r}=WO(this._heartbeatsCache.heartbeats),i=qs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Lh(){return new Date().toISOString().substring(0,10)}function WO(t,e=VO){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),xh(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),xh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class KO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return VC()?qC().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await HO(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function xh(t){return qs(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GO(t){At(new ht("platform-logger",e=>new aO(e),"PRIVATE")),At(new ht("heartbeat",e=>new zO(e),"PRIVATE")),Oe(pc,Ph,t),Oe(pc,Ph,"esm2017"),Oe("fire-js","")}GO("");var YO=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:nn,_DEFAULT_ENTRY_NAME:Ln,_addComponent:Ks,_addOrOverwriteComponent:dg,_apps:Jt,_clearComponents:xO,_components:gi,_getProvider:Di,_registerComponent:At,_removeServiceInstance:LO,deleteApp:pg,getApp:Tu,getApps:FO,initializeApp:wu,onLog:mg,registerVersion:Oe,setLogLevel:gg,FirebaseError:$t},Symbol.toStringTag,{value:"Module"})),XO="firebase",JO="9.6.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Oe(XO,JO,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Me.UNAUTHENTICATED=new Me(null),Me.GOOGLE_CREDENTIALS=new Me("google-credentials-uid"),Me.FIRST_PARTY=new Me("first-party-uid"),Me.MOCK_USER=new Me("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mr="9.6.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=new Oo("@firebase/firestore");function Gs(t,...e){if(Sr.logLevel<=W.DEBUG){const n=e.map(Au);Sr.debug(`Firestore (${Mr}): ${t}`,...n)}}function Su(t,...e){if(Sr.logLevel<=W.ERROR){const n=e.map(Au);Sr.error(`Firestore (${Mr}): ${t}`,...n)}}function QO(t,...e){if(Sr.logLevel<=W.WARN){const n=e.map(Au);Sr.warn(`Firestore (${Mr}): ${t}`,...n)}}function Au(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(t="Unexpected state"){const e=`FIRESTORE (${Mr}) INTERNAL ASSERTION FAILED: `+t;throw Su(e),new Error(e)}function It(t,e){t||Re()}function Ro(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh="ok",ZO="cancelled",si="unknown",P="invalid-argument",e0="deadline-exceeded",yg="not-found",t0="permission-denied",mc="unauthenticated",n0="resource-exhausted",Ar="failed-precondition",r0="aborted",i0="out-of-range",bg="unimplemented",s0="internal",o0="unavailable";class N extends $t{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class c0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Me.UNAUTHENTICATED))}shutdown(){}}class u0{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(It(typeof e.accessToken=="string"),new a0(e.accessToken,new Me(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class l0{constructor(e,n,r){this.type="FirstParty",this.user=Me.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class f0{constructor(e,n,r){this.t=e,this.i=n,this.o=r}getToken(){return Promise.resolve(new l0(this.t,this.i,this.o))}start(e,n){e.enqueueRetryable(()=>n(Me.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class h0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class d0{constructor(e){this.u=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(It(typeof e.token=="string"),new h0(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e,n,r,i,s,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Ir{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ir("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ir&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n,r){n===void 0?n=0:n>e.length&&Re(),r===void 0?r=e.length-n:r>e.length-n&&Re(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return vi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof vi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class te extends vi{construct(e,n,r){return new te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new N(P,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new te(n)}static emptyPath(){return new te([])}}const m0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fe extends vi{construct(e,n,r){return new Fe(e,n,r)}static isValidIdentifier(e){return m0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Fe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new N(P,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new N(P,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new N(P,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new N(P,"Unterminated ` in path: "+e);return new Fe(n)}static emptyPath(){return new Fe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(te.fromString(e))}static fromName(e){return new ie(te.fromString(e).popFirst(5))}static empty(){return new ie(te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new te(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(t,e,n){if(!n)throw new N(P,`Function ${t}() cannot be called with an empty ${e}.`)}function Uh(t){if(!ie.isDocumentKey(t))throw new N(P,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Fh(t){if(ie.isDocumentKey(t))throw new N(P,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function No(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Re()}function $o(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new N(P,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=No(t);throw new N(P,`Expected type '${e.name}', but it was: ${n}`)}}return t}function wg(t,e){if(e<=0)throw new N(P,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(t){return t==null}function Ys(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bh,z;function jh(t){if(t===void 0)return Su("RPC_ERROR","HTTP error has no status"),si;switch(t){case 200:return Mh;case 400:return Ar;case 401:return mc;case 403:return t0;case 404:return yg;case 409:return r0;case 416:return i0;case 429:return n0;case 499:return ZO;case 500:return si;case 501:return bg;case 503:return o0;case 504:return e0;default:return t>=200&&t<300?Mh:t>=400&&t<500?Ar:t>=500&&t<600?s0:si}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(z=Bh||(Bh={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";class _0 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.h=n+"://"+e.host,this.l="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}m(e,n,r,i,s){const o=this.p(e,n);Gs("RestConnection","Sending: ",o,r);const a={};return this.g(a,i,s),this.v(e,o,a,r).then(c=>(Gs("RestConnection","Received: ",c),c),c=>{throw QO("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}T(e,n,r,i,s){return this.m(e,n,r,i,s)}g(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Mr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}p(e,n){const r=g0[e];return`${this.h}/v1/${n}:${r}`}}{constructor(e,n){super(e),this.I=n}A(e,n){throw new Error("Not supported by FetchConnection")}async v(e,n,r,i){const s=JSON.stringify(i);let o;try{o=await this.I(n,{method:"POST",headers:r,body:s})}catch(a){throw new N(jh(a.status),"Request failed with error: "+a.statusText)}if(!o.ok)throw new N(jh(o.status),"Request failed with error: "+o.statusText);return o.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=v0(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function Sg(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new N(P,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new N(P,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new N(P,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(P,"Timestamp seconds out of range: "+e)}static now(){return Ne.fromMillis(Date.now())}static fromDate(e){return Ne.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ne(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.timestamp=e}static fromTimestamp(e){return new nt(e)}static min(){return new nt(new Ne(0,0))}static max(){return new nt(new Ne(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ko(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e){this.fields=e,e.sort(Fe.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Sg(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ct(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ct.EMPTY_BYTE_STRING=new Ct("");const b0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xn(t){if(It(!!t),typeof t=="string"){let e=0;const n=b0.exec(t);if(It(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:re(t.seconds),nanos:re(t.nanos)}}function re(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function yi(t){return typeof t=="string"?Ct.fromBase64String(t):Ct.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ag(t){const e=t.mapValue.fields.__previous_value__;return Iu(e)?Ag(e):e}function bi(t){const e=xn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ne(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Iu(t)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9:10:Re()}function Xs(t,e){if(t===e)return!0;const n=Mn(t);if(n!==Mn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return bi(t).isEqual(bi(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=xn(r.timestampValue),o=xn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return yi(r.bytesValue).isEqual(yi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return re(r.geoPointValue.latitude)===re(i.geoPointValue.latitude)&&re(r.geoPointValue.longitude)===re(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return re(r.integerValue)===re(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=re(r.doubleValue),o=re(i.doubleValue);return s===o?Ys(s)===Ys(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Sg(t.arrayValue.values||[],e.arrayValue.values||[],Xs);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Hh(s)!==Hh(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Xs(s[a],o[a])))return!1;return!0}(t,e);default:return Re()}}function Ei(t,e){return(t.values||[]).find(n=>Xs(n,e))!==void 0}function Js(t,e){if(t===e)return 0;const n=Mn(t),r=Mn(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=re(i.integerValue||i.doubleValue),a=re(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return qh(t.timestampValue,e.timestampValue);case 4:return qh(bi(t),bi(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(i,s){const o=yi(i),a=yi(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=oe(o[c],a[c]);if(u!==0)return u}return oe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=oe(re(i.latitude),re(s.latitude));return o!==0?o:oe(re(i.longitude),re(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Js(o[c],a[c]);if(u)return u}return oe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){const o=i.fields||{},a=Object.keys(o),c=s.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const f=oe(a[l],u[l]);if(f!==0)return f;const h=Js(o[a[l]],c[u[l]]);if(h!==0)return h}return oe(a.length,u.length)}(t.mapValue,e.mapValue);default:throw Re()}}function qh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=xn(t),r=xn(e),i=oe(n.seconds,r.seconds);return i!==0?i:oe(n.nanos,r.nanos)}function Qs(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ig(t){return!!t&&"arrayValue"in t}function zh(t){return!!t&&"nullValue"in t}function Wh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ga(t){return!!t&&"mapValue"in t}function oi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ko(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=oi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=oi(t.arrayValue.values[n]);return e}return Object.assign({},t)}class rt{constructor(e){this.value=e}static empty(){return new rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ga(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=oi(n)}setAll(e){let n=Fe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=oi(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ga(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Xs(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ga(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ko(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new rt(oi(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new xt(e,0,nt.min(),nt.min(),rt.empty(),0)}static newFoundDocument(e,n,r){return new xt(e,1,n,nt.min(),r,0)}static newNoDocument(e,n){return new xt(e,2,n,nt.min(),rt.empty(),0)}static newUnknownDocument(e,n){return new xt(e,3,n,nt.min(),rt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.P=null}}function Kh(t,e=null,n=[],r=[],i=null,s=null,o=null){return new E0(t,e,n,r,i,s,o)}class mt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.V(e,n,r):new w0(e,n,r):n==="array-contains"?new A0(e,r):n==="in"?new I0(e,r):n==="not-in"?new C0(e,r):n==="array-contains-any"?new O0(e,r):new mt(e,n,r)}static V(e,n,r){return n==="in"?new T0(e,r):new S0(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.D(Js(n,this.value)):n!==null&&Mn(this.value)===Mn(n)&&this.D(Js(n,this.value))}D(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Re()}}N(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class w0 extends mt{constructor(e,n,r){super(e,n,r),this.key=ie.fromName(r.referenceValue)}matches(e){const n=ie.comparator(e.key,this.key);return this.D(n)}}class T0 extends mt{constructor(e,n){super(e,"in",n),this.keys=Cg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class S0 extends mt{constructor(e,n){super(e,"not-in",n),this.keys=Cg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Cg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ie.fromName(r.referenceValue))}class A0 extends mt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ig(n)&&Ei(n.arrayValue,this.value)}}class I0 extends mt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ei(this.value.arrayValue,n)}}class C0 extends mt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ei(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ei(this.value.arrayValue,n)}}class O0 extends mt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ig(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ei(this.value.arrayValue,r))}}class Zs{constructor(e,n){this.position=e,this.inclusive=n}}class ai{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.$=null,this.S=null,this.startAt,this.endAt}}function Gh(t){return!Tg(t.limit)&&t.limitType==="L"}function Cu(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ou(t){for(const e of t.filters)if(e.N())return e.field;return null}function Og(t){return t.collectionGroup!==null}function gc(t){const e=Ro(t);if(e.$===null){e.$=[];const n=Ou(e),r=Cu(e);if(n!==null&&r===null)n.isKeyField()||e.$.push(new ai(n)),e.$.push(new ai(Fe.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.$.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.$.push(new ai(Fe.keyField(),s))}}}return e.$}function R0(t){const e=Ro(t);if(!e.S)if(e.limitType==="F")e.S=Kh(e.path,e.collectionGroup,gc(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of gc(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new ai(s.field,o))}const r=e.endAt?new Zs(e.endAt.position,!e.endAt.inclusive):null,i=e.startAt?new Zs(e.startAt.position,!e.startAt.inclusive):null;e.S=Kh(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.S}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N0(t,e){return function(n){return typeof n=="number"&&Number.isInteger(n)&&!Ys(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}(e)?function(n){return{integerValue:""+n}}(e):function(n,r){if(n.F){if(isNaN(r))return{doubleValue:"NaN"};if(r===1/0)return{doubleValue:"Infinity"};if(r===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ys(r)?"-0":r}}(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(){this._=void 0}}class $0 extends Po{}class k0 extends Po{constructor(e){super(),this.elements=e}}class P0 extends Po{constructor(e){super(),this.elements=e}}class D0 extends Po{constructor(e,n){super(),this.q=e,this.O=n}}class Tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Tn}static exists(e){return new Tn(void 0,e)}static updateTime(e){return new Tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class Do{}class Rg extends Do{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}}class Ng extends Do{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}}class $g extends Do{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class L0 extends Do{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),M0=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class U0{constructor(e,n){this.databaseId=e,this.F=n}}function _c(t,e){return t.F?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function F0(t,e){return t.F?e.toBase64():e.toUint8Array()}function B0(t,e){return _c(t,e.toTimestamp())}function j0(t){return It(!!t),nt.fromTimestamp(function(e){const n=xn(e);return new Ne(n.seconds,n.nanos)}(t))}function Ru(t,e){return function(n){return new te(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function vc(t,e){return Ru(t.databaseId,e.path)}function H0(t,e){const n=function(i){const s=te.fromString(i);return It(kg(s)),s}(e);if(n.get(1)!==t.databaseId.projectId)throw new N(P,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new N(P,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ie((It((r=n).length>4&&r.get(4)==="documents"),r.popFirst(5)));var r}function Yh(t,e){return Ru(t.databaseId,e)}function V0(t){return new te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Xh(t,e,n){return{name:vc(t,e),fields:n.value.mapValue.fields}}function q0(t,e){let n;if(e instanceof Rg)n={update:Xh(t,e.key,e.value)};else if(e instanceof $g)n={delete:vc(t,e.key)};else if(e instanceof Ng)n={update:Xh(t,e.key,e.data),updateMask:G0(e.fieldMask)};else{if(!(e instanceof L0))return Re();n={verify:vc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof $0)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof k0)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof P0)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof D0)return{fieldPath:s.field.canonicalString(),increment:o.O};throw Re()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:B0(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Re()}(t,e.precondition)),n}function z0(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Yh(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Yh(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length===0)return;const u=c.map(l=>function(f){if(f.op==="=="){if(Wh(f.value))return{unaryFilter:{field:Xn(f.field),op:"IS_NAN"}};if(zh(f.value))return{unaryFilter:{field:Xn(f.field),op:"IS_NULL"}}}else if(f.op==="!="){if(Wh(f.value))return{unaryFilter:{field:Xn(f.field),op:"IS_NOT_NAN"}};if(zh(f.value))return{unaryFilter:{field:Xn(f.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xn(f.field),op:K0(f.op),value:f.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Xn(l.field),direction:W0(l.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(c,u){return c.F||Tg(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function W0(t){return x0[t]}function K0(t){return M0[t]}function Xn(t){return{fieldPath:t.canonicalString()}}function G0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function kg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(t){return new U0(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.K=r,this.q=i,this.J=!1}X(){if(this.J)throw new N(Ar,"The client has already been terminated.")}m(e,n,r){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.K.m(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===mc&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new N(si,i.toString())})}T(e,n,r){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.K.T(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===mc&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new N(si,i.toString())})}terminate(){this.J=!0}}async function $u(t,e){const n=Ro(t),r=V0(n.q)+"/documents",i={writes:e.map(s=>q0(n.q,s))};await n.m("Commit",r,i)}async function X0(t,e){const n=Ro(t),r=z0(n.q,R0(e));return(await n.T("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(i=>!!i.document).map(i=>function(s,o,a){const c=H0(s,o.name),u=j0(o.updateTime),l=new rt({mapValue:{fields:o.fields}}),f=xt.newFoundDocument(c,u,l);return a&&f.setHasCommittedMutations(),a?f.setHasCommittedMutations():f}(n.q,i.document,void 0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=new Map;function Lo(t){if(t._terminated)throw new N(Ar,"The client has already been terminated.");if(!ci.has(t)){Gs("ComponentProvider","Initializing Datastore");const s=function(c){return new _0(c,fetch.bind(null))}((e=t._databaseId,n=t.app.options.appId||"",r=t._persistenceKey,i=t._freezeSettings(),new p0(e,n,r,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams))),o=Nu(t._databaseId),a=function(c,u,l,f){return new Y0(c,u,l,f)}(t._authCredentials,t._appCheckCredentials,s,o);ci.set(t,a)}var e,n,r,i;/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return ci.get(t)}class Jh{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new N(P,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new N(P,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(r,i,s,o){if(i===!0&&o===!0)throw new N(P,`${r} and ${s} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jh({}),this._settingsFrozen=!1,e instanceof Ir?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new N(P,'"projectId" not provided in firebase.initializeApp.');return new Ir(i.options.projectId)}(e))}get app(){if(!this._app)throw new N(Ar,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new N(Ar,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jh(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new c0;switch(n.type){case"gapi":const r=n.client;return It(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new f0(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new N(P,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ci.get(e);n&&(Gs("ComponentProvider","Removing Datastore"),ci.delete(e),n.terminate())}(this),Promise.resolve()}}function J0(t=Tu()){return Di(t,"firestore/lite").getImmediate()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Te(this.firestore,e,this._key)}}class kt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new kt(this.firestore,e,this._query)}}class wt extends kt{constructor(e,n,r){super(e,n,new Ur(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Te(this.firestore,null,new ie(e))}withConverter(e){return new wt(this.firestore,e,this._path)}}function Fk(t,e,...n){if(t=se(t),Eg("collection","path",e),t instanceof ku){const r=te.fromString(e,...n);return Fh(r),new wt(t,null,r)}{if(!(t instanceof Te||t instanceof wt))throw new N(P,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(te.fromString(e,...n));return Fh(r),new wt(t.firestore,null,r)}}function Q0(t,e,...n){if(t=se(t),arguments.length===1&&(e=y0.R()),Eg("doc","path",e),t instanceof ku){const r=te.fromString(e,...n);return Uh(r),new Te(t,null,new ie(r))}{if(!(t instanceof Te||t instanceof wt))throw new N(P,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(te.fromString(e,...n));return Uh(r),new Te(t.firestore,t instanceof wt?t.converter:null,new ie(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new N(P,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Cr(Ct.fromBase64String(e))}catch(n){throw new N(P,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Cr(Ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new N(P,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new N(P,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0=/^__.*__$/;class eR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ng(e,this.data,this.fieldMask,n,this.fieldTransforms):new Rg(e,this.data,n,this.fieldTransforms)}}function Dg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Re()}}class Lu{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.q=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Z(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get tt(){return this.settings.tt}et(e){return new Lu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.q,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}nt(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.et({path:r,rt:!1});return i.st(e),i}it(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.et({path:r,rt:!1});return i.Z(),i}ot(e){return this.et({path:void 0,rt:!0})}ut(e){return eo(e,this.settings.methodName,this.settings.ct||!1,this.path,this.settings.at)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Z(){if(this.path)for(let e=0;e<this.path.length;e++)this.st(this.path.get(e))}st(e){if(e.length===0)throw this.ut("Document fields must not be empty");if(Dg(this.tt)&&Z0.test(e))throw this.ut('Document fields cannot begin and end with "__"')}}class tR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.q=r||Nu(e)}ht(e,n,r,i=!1){return new Lu({tt:e,methodName:n,at:r,path:Fe.emptyPath(),rt:!1,ct:i},this.databaseId,this.q,this.ignoreUndefinedProperties)}}function xo(t){const e=t._freezeSettings(),n=Nu(t._databaseId);return new tR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Lg(t,e,n,r,i,s={}){const o=t.ht(s.merge||s.mergeFields?2:0,e,n,i);Fg("Data must be an object, but it was:",o,r);const a=Mg(r,o);let c,u;if(s.merge)c=new Vh(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const f of s.mergeFields){const h=nR(e,f,n);if(!o.contains(h))throw new N(P,`Field '${h}' is specified in your field mask but missing from your input data.`);iR(l,h)||l.push(h)}c=new Vh(l),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new eR(new rt(a),c,u)}function xg(t,e,n,r=!1){return xu(n,t.ht(r?4:3,e))}function xu(t,e){if(Ug(t=se(t)))return Fg("Unsupported field value:",e,t),Mg(t,e);if(t instanceof Pg)return function(n,r){if(!Dg(r.tt))throw r.ut(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ut(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.rt&&e.tt!==4)throw e.ut("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=xu(o,r.ot(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=se(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return N0(r.q,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ne.fromDate(n);return{timestampValue:_c(r.q,i)}}if(n instanceof Ne){const i=new Ne(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:_c(r.q,i)}}if(n instanceof Du)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Cr)return{bytesValue:F0(r.q,n._byteString)};if(n instanceof Te){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ut(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ru(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ut(`Unsupported field value: ${No(n)}`)}(t,e)}function Mg(t,e){const n={};return function(r){for(const i in r)if(Object.prototype.hasOwnProperty.call(r,i))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ko(t,(r,i)=>{const s=xu(i,e.nt(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Ug(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ne||t instanceof Du||t instanceof Cr||t instanceof Te||t instanceof Pg)}function Fg(t,e,n){if(!Ug(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=No(n);throw r==="an object"?e.ut(t+" a custom object"):e.ut(t+" "+r)}}function nR(t,e,n){if((e=se(e))instanceof Pu)return e._internalPath;if(typeof e=="string")return Bg(t,e);throw eo("Field path arguments must be of type string or ",t,!1,void 0,n)}const rR=new RegExp("[~\\*/\\[\\]]");function Bg(t,e,n){if(e.search(rR)>=0)throw eo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Pu(...e.split("."))._internalPath}catch{throw eo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function eo(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new N(P,a+t+c)}function iR(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Te(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Hg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Mu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Hg extends jg{data(){return super.data()}}class sR{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}function Mu(t,e){return typeof e=="string"?Bg(t,e):e instanceof Pu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{}function Bk(t,...e){for(const n of e)t=n._apply(t);return t}class oR extends Li{constructor(e,n,r){super(),this.dt=e,this.wt=n,this.yt=r,this.type="where"}_apply(e){const n=xo(e.firestore),r=function(i,s,o,a,c,u,l){let f;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new N(P,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Zh(l,u);const d=[];for(const p of l)d.push(Qh(a,i,p));f={arrayValue:{values:d}}}else f=Qh(a,i,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Zh(l,u),f=xg(o,s,l,u==="in"||u==="not-in");const h=mt.create(c,u,f);return function(d,p){if(p.N()){const g=Ou(d);if(g!==null&&!g.isEqual(p.field))throw new N(P,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${g.toString()}' and '${p.field.toString()}'`);const b=Cu(d);b!==null&&zg(d,p.field,b)}const m=function(g,b){for(const A of g.filters)if(b.indexOf(A.op)>=0)return A.op;return null}(d,function(g){switch(g){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(p.op));if(m!==null)throw m===p.op?new N(P,`Invalid query. You cannot use more than one '${p.op.toString()}' filter.`):new N(P,`Invalid query. You cannot use '${p.op.toString()}' filters with '${m.toString()}' filters.`)}(i,h),h}(e._query,"where",n,e.firestore._databaseId,this.dt,this.wt,this.yt);return new kt(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new Ur(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function jk(t,e,n){const r=e,i=Mu("where",t);return new oR(i,r,n)}class aR extends Li{constructor(e,n){super(),this.dt=e,this._t=n,this.type="orderBy"}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new N(P,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new N(P,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new ai(i,s);return function(a,c){if(Cu(a)===null){const u=Ou(a);u!==null&&zg(a,u,c.field)}}(r,o),o}(e._query,this.dt,this._t);return new kt(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Ur(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function Hk(t,e="asc"){const n=e,r=Mu("orderBy",t);return new aR(r,n)}class Vg extends Li{constructor(e,n,r){super(),this.type=e,this.gt=n,this.vt=r}_apply(e){return new kt(e.firestore,e.converter,function(n,r,i){return new Ur(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),r,i,n.startAt,n.endAt)}(e._query,this.gt,this.vt))}}function Vk(t){return wg("limit",t),new Vg("limit",t,"F")}function qk(t){return wg("limitToLast",t),new Vg("limitToLast",t,"L")}class cR extends Li{constructor(e,n,r){super(),this.type=e,this.bt=n,this.Et=r}_apply(e){const n=qg(e,this.type,this.bt,this.Et);return new kt(e.firestore,e.converter,function(r,i){return new Ur(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function zk(...t){return new cR("startAfter",t,!1)}class uR extends Li{constructor(e,n,r){super(),this.type=e,this.bt=n,this.Et=r}_apply(e){const n=qg(e,this.type,this.bt,this.Et);return new kt(e.firestore,e.converter,function(r,i){return new Ur(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function Wk(...t){return new uR("endBefore",t,!1)}function qg(t,e,n,r){if(n[0]=se(n[0]),n[0]instanceof jg)return function(i,s,o,a,c){if(!a)throw new N(yg,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const l of gc(i))if(l.field.isKeyField())u.push(Qs(s,a.key));else{const f=a.data.field(l.field);if(Iu(f))throw new N(P,'Invalid query. You are trying to start or end a query using a document for which the field "'+l.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(f===null){const h=l.field.canonicalString();throw new N(P,`Invalid query. You are trying to start or end a query using a document for which the field '${h}' (used as the orderBy) does not exist.`)}u.push(f)}return new Zs(u,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=xo(t.firestore);return function(s,o,a,c,u,l){const f=s.explicitOrderBy;if(u.length>f.length)throw new N(P,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const h=[];for(let d=0;d<u.length;d++){const p=u[d];if(f[d].field.isKeyField()){if(typeof p!="string")throw new N(P,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof p}`);if(!Og(s)&&p.indexOf("/")!==-1)throw new N(P,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${p}' contains a slash.`);const m=s.path.child(te.fromString(p));if(!ie.isDocumentKey(m))throw new N(P,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${m}' is not because it contains an odd number of segments.`);const g=new ie(m);h.push(Qs(o,g))}else{const m=xg(a,c,p);h.push(m)}}return new Zs(h,l)}(t._query,t.firestore._databaseId,i,e,n,r)}}function Qh(t,e,n){if(typeof(n=se(n))=="string"){if(n==="")throw new N(P,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Og(e)&&n.indexOf("/")!==-1)throw new N(P,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(te.fromString(n));if(!ie.isDocumentKey(r))throw new N(P,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Qs(t,new ie(r))}if(n instanceof Te)return Qs(t,n._key);throw new N(P,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${No(n)}.`)}function Zh(t,e){if(!Array.isArray(t)||t.length===0)throw new N(P,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new N(P,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function zg(t,e,n){if(!n.isEqual(e))throw new N(P,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class lR extends class{convertValue(e,n="none"){switch(Mn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(yi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Re()}}convertObject(e,n){const r={};return ko(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Du(re(e.latitude),re(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ag(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(bi(e));default:return null}}convertTimestamp(e){const n=xn(e);return new Ne(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=te.fromString(e);It(kg(r));const i=new Ir(r.get(1),r.get(3)),s=new ie(r.popFirst(5));return i.isEqual(n)||Su(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Te(this.firestore,null,n)}}function Kk(t){(function(r){if(Gh(r)&&r.explicitOrderBy.length===0)throw new N(bg,"limitToLast() queries require specifying at least one orderBy() clause")})((t=$o(t,kt))._query);const e=Lo(t.firestore),n=new lR(t.firestore);return X0(e,t._query).then(r=>{const i=r.map(s=>new Hg(t.firestore,n,s.key,s,t.converter));return Gh(t._query)&&i.reverse(),new sR(t,i)})}function Gk(t,e,n){const r=Wg((t=$o(t,Te)).converter,e,n),i=Lg(xo(t.firestore),"setDoc",t._key,r,t.converter!==null,n);return $u(Lo(t.firestore),[i.toMutation(t._key,Tn.none())])}function Yk(t){return $u(Lo((t=$o(t,Te)).firestore),[new $g(t._key,Tn.none())])}function Xk(t,e){const n=Q0(t=$o(t,wt)),r=Wg(t.converter,e),i=Lg(xo(t.firestore),"addDoc",n._key,r,n.converter!==null,{});return $u(Lo(t.firestore),[i.toMutation(n._key,Tn.exists(!1))]).then(()=>n)}(function(t){Mr=t})(`${nn}_lite`),At(new ht("firestore/lite",(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=new ku(n,new u0(t.getProvider("auth-internal")),new d0(t.getProvider("app-check-internal")));return e&&r._setSettings(e),r},"PUBLIC")),Oe("firestore-lite","3.4.7",""),Oe("firestore-lite","3.4.7","esm2017");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Uu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Kg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fR=Kg,Gg=new zn("auth","Firebase",Kg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed=new Oo("@firebase/auth");function ys(t,...e){ed.logLevel<=W.ERROR&&ed.error(`Auth (${nn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t,...e){throw Fu(t,...e)}function ct(t,...e){return Fu(t,...e)}function Yg(t,e,n){const r=Object.assign(Object.assign({},fR()),{[e]:n});return new zn("auth","Firebase",r).create(e,{appName:t.name})}function hR(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&dt(t,"argument-error"),Yg(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Fu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Gg.create(t,...e)}function F(t,e,...n){if(!t)throw Fu(e,...n)}function bt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ys(e),new Error(e)}function Ot(t,e){t||bt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td=new Map;function Et(t){Ot(t instanceof Function,"Expected a class definition");let e=td.get(t);return e?(Ot(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,td.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(t,e){const n=Di(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ws(s,e!=null?e:{}))return i;dt(i,"already-initialized")}return n.initialize({options:e})}function pR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Et);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function mR(){return nd()==="http:"||nd()==="https:"}function nd(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gR(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mR()||BC()||"connection"in navigator)?navigator.onLine:!0}function _R(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ot(n>e,"Short delay should be less than long delay!"),this.isMobile=UC()||jC()}get(){return gR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(t,e){Ot(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yR=new xi(3e4,6e4);function bR(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Mo(t,e,n,r,i={}){return Jg(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Pi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Xg.fetch()(Qg(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Jg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},vR),e);try{const i=new wR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw _a(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw _a(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw _a(t,"email-already-in-use",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Yg(t,l,u);dt(t,l)}}catch(i){if(i instanceof $t)throw i;dt(t,"network-request-failed")}}async function ER(t,e,n,r,i={}){const s=await Mo(t,e,n,r,i);return"mfaPendingCredential"in s&&dt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Qg(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Bu(t.config,i):`${t.config.apiScheme}://${i}`}class wR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ct(this.auth,"network-request-failed")),yR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _a(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ct(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TR(t,e){return Mo(t,"POST","/v1/accounts:delete",e)}async function SR(t,e){return Mo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function AR(t,e=!1){const n=se(t),r=await n.getIdToken(e),i=ju(r);F(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ui(va(i.auth_time)),issuedAtTime:ui(va(i.iat)),expirationTime:ui(va(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function va(t){return Number(t)*1e3}function ju(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ys("JWT malformed, contained fewer than 3 sections"),null;try{const i=DC(n);return i?JSON.parse(i):(ys("Failed to decode base64 JWT payload"),null)}catch(i){return ys("Caught error parsing JWT payload as JSON",i),null}}function IR(t){const e=ju(t);return F(e,"internal-error"),F(typeof e.exp!="undefined","internal-error"),F(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof $t&&CR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function CR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ui(this.lastLoginAt),this.creationTime=ui(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function to(t){var e;const n=t.auth,r=await t.getIdToken(),i=await wi(t,SR(n,{idToken:r}));F(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?$R(s.providerUserInfo):[],a=NR(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Zg(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,f)}async function RR(t){const e=se(t);await to(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function NR(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function $R(t){return t.map(e=>{var{providerId:n}=e,r=Uu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kR(t,e){const n=await Jg(t,{},async()=>{const r=Pi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Qg(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Xg.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken!="undefined","internal-error"),F(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):IR(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await kR(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ti;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(F(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(F(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ti,this.toJSON())}_performRefresh(){return bt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t,e){F(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Sn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Uu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new OR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Zg(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await wi(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return AR(this,e)}reload(){return RR(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Sn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await to(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await wi(this,TR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,u,l;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,d=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,g=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,b=(u=n.createdAt)!==null&&u!==void 0?u:void 0,A=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:S,emailVerified:T,isAnonymous:C,providerData:O,stsTokenManager:$}=n;F(S&&$,e,"internal-error");const D=Ti.fromJSON(this.name,$);F(typeof S=="string",e,"internal-error"),Lt(f,e.name),Lt(h,e.name),F(typeof T=="boolean",e,"internal-error"),F(typeof C=="boolean",e,"internal-error"),Lt(d,e.name),Lt(p,e.name),Lt(m,e.name),Lt(g,e.name),Lt(b,e.name),Lt(A,e.name);const V=new Sn({uid:S,auth:e,email:h,emailVerified:T,displayName:f,isAnonymous:C,photoURL:p,phoneNumber:d,tenantId:m,stsTokenManager:D,createdAt:b,lastLoginAt:A});return O&&Array.isArray(O)&&(V.providerData=O.map(K=>Object.assign({},K))),g&&(V._redirectEventId=g),V}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ti;i.updateFromServerResponse(n);const s=new Sn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await to(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}e_.type="NONE";const rd=e_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(t,e,n){return`firebase:${t}:${e}:${n}`}class lr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=bs(this.userKey,i.apiKey,s),this.fullPersistenceKey=bs("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Sn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new lr(Et(rd),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Et(rd);const o=bs(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const f=Sn._fromJSON(e,l);u!==s&&(a=f),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new lr(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new lr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(r_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(t_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(s_(e))return"Blackberry";if(o_(e))return"Webos";if(Hu(e))return"Safari";if((e.includes("chrome/")||n_(e))&&!e.includes("edge/"))return"Chrome";if(i_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function t_(t=fe()){return/firefox\//i.test(t)}function Hu(t=fe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function n_(t=fe()){return/crios\//i.test(t)}function r_(t=fe()){return/iemobile/i.test(t)}function i_(t=fe()){return/android/i.test(t)}function s_(t=fe()){return/blackberry/i.test(t)}function o_(t=fe()){return/webos/i.test(t)}function Uo(t=fe()){return/iphone|ipad|ipod/i.test(t)}function PR(t=fe()){var e;return Uo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function DR(){return HC()&&document.documentMode===10}function a_(t=fe()){return Uo(t)||i_(t)||o_(t)||s_(t)||/windows phone/i.test(t)||r_(t)}function LR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(t,e=[]){let n;switch(t){case"Browser":n=id(fe());break;case"Worker":n=`${id(fe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${nn}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sd(this),this.idTokenSubscription=new sd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gg,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Et(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await lr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await to(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_R()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?se(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Et(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Et(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await lr.create(this,[Et(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return F(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=c_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Vu(t){return se(t)}class sd{constructor(e){this.auth=e,this.observer=null,this.addObserver=ug(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bt("not implemented")}_getIdTokenResponse(e){return bt("not implemented")}_linkToIdToken(e,n){return bt("not implemented")}_getReauthenticationResolver(e){return bt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fr(t,e){return ER(t,"POST","/v1/accounts:signInWithIdp",bR(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR="http://localhost";class Un extends u_{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Un(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):dt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Uu(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Un(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return fr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,fr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fr(e,n)}buildRequest(){const e={requestUri:MR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Pi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi extends qu{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends Mi{constructor(){super("facebook.com")}static credential(e){return Un._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ut.credential(e.oauthAccessToken)}catch{return null}}}Ut.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ut.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends Mi{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Un._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ft.credential(n,r)}catch{return null}}}Ft.GOOGLE_SIGN_IN_METHOD="google.com";Ft.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends Mi{constructor(){super("github.com")}static credential(e){return Un._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bt.credential(e.oauthAccessToken)}catch{return null}}}Bt.GITHUB_SIGN_IN_METHOD="github.com";Bt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends Mi{constructor(){super("twitter.com")}static credential(e,n){return Un._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return jt.credential(n,r)}catch{return null}}}jt.TWITTER_SIGN_IN_METHOD="twitter.com";jt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Sn._fromIdTokenResponse(e,r,i),o=od(r);return new Or({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=od(r);return new Or({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function od(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no extends $t{constructor(e,n,r,i){var s;super(n.code,n.message);this.operationType=r,this.user=i,Object.setPrototypeOf(this,no.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new no(e,n,r,i)}}function l_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?no._fromErrorAndOperation(t,s,e,r):s})}async function UR(t,e,n=!1){const r=await wi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Or._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FR(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await wi(t,l_(r,i,e,t),n);F(s.idToken,r,"internal-error");const o=ju(s.idToken);F(o,r,"internal-error");const{sub:a}=o;return F(t.uid===a,r,"user-mismatch"),Or._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&dt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BR(t,e,n=!1){const r="signIn",i=await l_(t,r,e),s=await Or._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}const ro="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ro,"1"),this.storage.removeItem(ro),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jR(){const t=fe();return Hu(t)||Uo(t)}const HR=1e3,VR=10;class h_ extends f_{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=jR()&&LR(),this.fallbackToPolling=a_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);DR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,VR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},HR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}h_.type="LOCAL";const qR=h_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_ extends f_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}d_.type="SESSION";const p_=d_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zR(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Fo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),c=await zR(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=zu("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const h=f;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return window}function KR(t){ut().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(){return typeof ut().WorkerGlobalScope!="undefined"&&typeof ut().importScripts=="function"}async function GR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function YR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function XR(){return m_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_="firebaseLocalStorageDb",JR=1,io="firebaseLocalStorage",__="fbase_key";class Ui{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Bo(t,e){return t.transaction([io],e?"readwrite":"readonly").objectStore(io)}function QR(){const t=indexedDB.deleteDatabase(g_);return new Ui(t).toPromise()}function bc(){const t=indexedDB.open(g_,JR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(io,{keyPath:__})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(io)?e(r):(r.close(),await QR(),e(await bc()))})})}async function ad(t,e,n){const r=Bo(t,!0).put({[__]:e,value:n});return new Ui(r).toPromise()}async function ZR(t,e){const n=Bo(t,!1).get(e),r=await new Ui(n).toPromise();return r===void 0?null:r.value}function cd(t,e){const n=Bo(t,!0).delete(e);return new Ui(n).toPromise()}const eN=800,tN=3;class v_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>tN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return m_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fo._getInstance(XR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await GR(),!this.activeServiceWorker)return;this.sender=new WR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||YR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bc();return await ad(e,ro,"1"),await cd(e,ro),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ad(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ZR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Bo(i,!1).getAll();return new Ui(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}v_.type="LOCAL";const nN=v_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function iN(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ct("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",rN().appendChild(r)})}function sN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new xi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(t,e){return e?Et(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu extends u_{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return fr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function oN(t){return BR(t.auth,new Wu(t),t.bypassAuthState)}function aN(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),FR(n,new Wu(t),t.bypassAuthState)}async function cN(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),UR(n,new Wu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oN;case"linkViaPopup":case"linkViaRedirect":return cN;case"reauthViaPopup":case"reauthViaRedirect":return aN;default:dt(this.auth,"internal-error")}}resolve(e){Ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN=new xi(2e3,1e4);async function Jk(t,e,n){const r=Vu(t);hR(t,e,qu);const i=y_(r,n);return new _n(r,"signInViaPopup",e,i).executeNotNull()}class _n extends b_{constructor(e,n,r,i,s){super(e,n,i,s);this.provider=r,this.authWindow=null,this.pollId=null,_n.currentPopupAction&&_n.currentPopupAction.cancel(),_n.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){Ot(this.filter.length===1,"Popup operations only handle one event");const e=zu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_n.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ct(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,uN.get())};e()}}_n.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lN="pendingRedirect",ya=new Map;class fN extends b_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=ya.get(this.auth._key());if(!e){try{const r=await hN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ya.set(this.auth._key(),e)}return this.bypassAuthState||ya.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hN(t,e){const n=pN(e),r=dN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function dN(t){return Et(t._redirectPersistence)}function pN(t){return bs(lN,t.config.apiKey,t.name)}async function mN(t,e,n=!1){const r=Vu(t),i=y_(r,e),o=await new fN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gN=10*60*1e3;class _N{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!E_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ct(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gN&&this.cachedEventUids.clear(),this.cachedEventUids.has(ud(e))}saveEventToCache(e){this.cachedEventUids.add(ud(e)),this.lastProcessedEventTime=Date.now()}}function ud(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function E_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return E_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yN(t,e={}){return Mo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,EN=/^https?/;async function wN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await yN(t);for(const n of e)try{if(TN(n))return}catch{}dt(t,"unauthorized-domain")}function TN(t){const e=yc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!EN.test(n))return!1;if(bN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN=new xi(3e4,6e4);function ld(){const t=ut().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function AN(t){return new Promise((e,n)=>{var r,i,s;function o(){ld(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ld(),n(ct(t,"network-request-failed"))},timeout:SN.get()})}if(!((i=(r=ut().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ut().gapi)===null||s===void 0)&&s.load)o();else{const a=sN("iframefcb");return ut()[a]=()=>{gapi.load?o():n(ct(t,"network-request-failed"))},iN(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Es=null,e})}let Es=null;function IN(t){return Es=Es||AN(t),Es}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CN=new xi(5e3,15e3),ON="__/auth/iframe",RN="emulator/auth/iframe",NN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$N=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kN(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bu(e,RN):`https://${t.config.authDomain}/${ON}`,r={apiKey:e.apiKey,appName:t.name,v:nn},i=$N.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Pi(r).slice(1)}`}async function PN(t){const e=await IN(t),n=ut().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:kN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:NN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ct(t,"network-request-failed"),a=ut().setTimeout(()=>{s(o)},CN.get());function c(){ut().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LN=500,xN=600,MN="_blank",UN="http://localhost";class fd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FN(t,e,n,r=LN,i=xN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},DN),{width:r.toString(),height:i.toString(),top:s,left:o}),u=fe().toLowerCase();n&&(a=n_(u)?MN:n),t_(u)&&(e=e||UN,c.scrollbars="yes");const l=Object.entries(c).reduce((h,[d,p])=>`${h}${d}=${p},`,"");if(PR(u)&&a!=="_self")return BN(e||"",a),new fd(null);const f=window.open(e||"",a,l);F(f,t,"popup-blocked");try{f.focus()}catch{}return new fd(f)}function BN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jN="__/auth/handler",HN="emulator/auth/handler";function hd(t,e,n,r,i,s){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:nn,eventId:i};if(e instanceof qu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",GC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(s||{}))o[c]=u}if(e instanceof Mi){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${VN(t)}?${Pi(a).slice(1)}`}function VN({config:t}){return t.emulator?Bu(t,HN):`https://${t.authDomain}/${jN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba="webStorageSupport";class qN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=p_,this._completeRedirectFn=mN}async _openPopup(e,n,r,i){var s;Ot((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=hd(e,n,r,yc(),i);return FN(e,o,zu())}async _openRedirect(e,n,r,i){return await this._originValidation(e),KR(hd(e,n,r,yc(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ot(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await PN(e),r=new _N(e);return n.register("authEvent",i=>(F(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ba,{type:ba},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ba];o!==void 0&&n(!!o),dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=wN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return a_()||Hu()||Uo()}}const zN=qN;var dd="@firebase/auth",pd="0.19.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function GN(t){At(new ht("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,c)=>{F(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),F(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:c_(t)},l=new xR(a,c,u);return pR(l,n),l})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),At(new ht("auth-internal",e=>{const n=Vu(e.getProvider("auth").getImmediate());return(r=>new WN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Oe(dd,pd,KN(t)),Oe(dd,pd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YN(t=Tu()){const e=Di(t,"auth");return e.isInitialized()?e.getImmediate():dR(t,{popupRedirectResolver:zN,persistence:[nN,qR,p_]})}GN("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e,n){this._delegate=e,this.firebase=n,Ks(e,new ht("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),pg(this._delegate)))}_getService(e,n=Ln){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Ln){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Ks(this._delegate,e)}_addOrOverwriteComponent(e){dg(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JN={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},md=new zn("app-compat","Firebase",JN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QN(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:Oe,setLogLevel:gg,onLog:mg,apps:null,SDK_VERSION:nn,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:YO}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Ln,!Rh(e,u))throw md.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,l={}){const f=wu(u,l);if(Rh(e,f.name))return e[f.name];const h=new t(f,n);return e[f.name]=h,h}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,f=l.replace("-compat","");if(At(u)&&u.type==="PUBLIC"){const h=(d=i())=>{if(typeof d[f]!="function")throw md.create("invalid-app-argument",{appName:l});return d[f]()};u.serviceProps!==void 0&&zs(h,u.serviceProps),n[f]=h,t.prototype[f]=function(...d){return this._getService.bind(this,l).apply(this,u.multipleInstances?d:[])}}return u.type==="PUBLIC"?n[f]:null}function c(u,l){return l==="serverAuth"?null:l}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(){const t=QN(XN);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:w_,extendNamespace:e,createSubscribe:ug,ErrorFactory:zn,deepExtend:zs});function e(n){zs(t,n)}return t}const ZN=w_();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd=new Oo("@firebase/app-compat"),e$="@firebase/app-compat",t$="0.1.21";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n$(t){Oe(e$,t$,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(FC()&&self.firebase!==void 0){gd.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&gd.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const jo=ZN;n$();var r$="firebase",i$="9.6.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jo.registerVersion(r$,i$,"app-compat");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_="firebasestorage.googleapis.com",S_="storageBucket",s$=2*60*1e3,o$=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z extends $t{constructor(e,n){super(Ea(e),`Firebase Storage: ${n} (${Ea(e)})`);this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Z.prototype)}_codeEquals(e){return Ea(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Ea(t){return"storage/"+t}function Ku(){const t="An unknown error occurred, please check the error payload for server response.";return new Z("unknown",t)}function a$(t){return new Z("object-not-found","Object '"+t+"' does not exist.")}function c$(t){return new Z("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function u$(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Z("unauthenticated",t)}function l$(){return new Z("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function f$(t){return new Z("unauthorized","User does not have permission to access '"+t+"'.")}function h$(){return new Z("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function A_(){return new Z("canceled","User canceled the upload/download.")}function d$(t){return new Z("invalid-url","Invalid URL '"+t+"'.")}function p$(t){return new Z("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function m$(){return new Z("no-default-bucket","No default bucket found. Did you set the '"+S_+"' property when initializing the app?")}function I_(){return new Z("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function g$(){return new Z("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function _$(){return new Z("no-download-url","The given file does not have any download URLs.")}function hr(t){return new Z("invalid-argument",t)}function C_(){return new Z("app-deleted","The Firebase app was deleted.")}function O_(t){return new Z("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function li(t,e){return new Z("invalid-format","String does not match format '"+t+"': "+e)}function Gr(t){throw new Z("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=ue.makeFromUrl(e,n)}catch{return new ue(e,"")}if(r.path==="")return r;throw p$(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(T){T.path.charAt(T.path.length-1)==="/"&&(T.path_=T.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(T){T.path_=decodeURIComponent(T.path)}const l="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",d=new RegExp(`^https?://${f}/${l}/b/${i}/o${h}`,"i"),p={bucket:1,path:3},m=n===T_?"(?:storage.googleapis.com|storage.cloud.google.com)":n,g="([^?#]*)",b=new RegExp(`^https?://${m}/${i}/${g}`,"i"),S=[{regex:a,indices:c,postModify:s},{regex:d,indices:p,postModify:u},{regex:b,indices:{bucket:1,path:2},postModify:u}];for(let T=0;T<S.length;T++){const C=S[T],O=C.regex.exec(e);if(O){const $=O[C.indices.bucket];let D=O[C.indices.path];D||(D=""),r=new ue($,D),C.postModify(r);break}}if(r==null)throw d$(e);return r}}class v${constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y$(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...g){u||(u=!0,e.apply(null,g))}function f(g){i=setTimeout(()=>{i=null,t(d,c())},g)}function h(){s&&clearTimeout(s)}function d(g,...b){if(u){h();return}if(g){h(),l.call(null,g,...b);return}if(c()||o){h(),l.call(null,g,...b);return}r<64&&(r*=2);let S;a===1?(a=2,S=0):S=(r+Math.random())*1e3,f(S)}let p=!1;function m(g){p||(p=!0,h(),!u&&(i!==null?(g||(a=2),clearTimeout(i),f(0)):g||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,m(!0)},n),m}function b$(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E$(t){return t!==void 0}function w$(t){return typeof t=="function"}function T$(t){return typeof t=="object"&&!Array.isArray(t)}function Ho(t){return typeof t=="string"||t instanceof String}function _d(t){return Gu()&&t instanceof Blob}function Gu(){return typeof Blob!="undefined"}function Ec(t,e,n,r){if(r<e)throw hr(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw hr(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function R_(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var An;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(An||(An={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S${constructor(e,n,r,i,s,o,a,c,u,l,f){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((h,d)=>{this.resolve_=h,this.reject_=d,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new is(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===An.NO_ERROR,c=s.getStatus();if(!a||this.isRetryStatusCode_(c)){const l=s.getErrorCode()===An.ABORT;r(!1,new is(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new is(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());E$(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=Ku();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?C_():A_();o(c)}else{const c=h$();o(c)}};this.canceled_?n(!1,new is(!1,null,!0)):this.backoffId_=y$(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&b$(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return n||i||s}}class is{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function A$(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function I$(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function C$(t,e){e&&(t["X-Firebase-GMPID"]=e)}function O$(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function R$(t,e,n,r,i,s){const o=R_(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return C$(c,e),A$(c,n),I$(c,s),O$(c,r),new S$(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N$(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function $$(...t){const e=N$();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Gu())return new Blob(t);throw new Z("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function k$(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P$(t){return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class wa{constructor(e,n){this.data=e,this.contentType=n||null}}function N_(t,e){switch(t){case Be.RAW:return new wa($_(e));case Be.BASE64:case Be.BASE64URL:return new wa(k_(t,e));case Be.DATA_URL:return new wa(L$(e),x$(e))}throw Ku()}function $_(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function D$(t){let e;try{e=decodeURIComponent(t)}catch{throw li(Be.DATA_URL,"Malformed data URL.")}return $_(e)}function k_(t,e){switch(t){case Be.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw li(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Be.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw li(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=P$(e)}catch{throw li(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class P_{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw li(Be.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=M$(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function L$(t){const e=new P_(t);return e.base64?k_(Be.BASE64,e.rest):D$(e.rest)}function x$(t){return new P_(t).contentType}function M$(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n){let r=0,i="";_d(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(_d(this.data_)){const r=this.data_,i=k$(r,e,n);return i===null?null:new gt(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new gt(r,!0)}}static getBlob(...e){if(Gu()){const n=e.map(r=>r instanceof gt?r.data_:r);return new gt($$.apply(null,n))}else{const n=e.map(o=>Ho(o)?N_(Be.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new gt(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(t){let e;try{e=JSON.parse(t)}catch{return null}return T$(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U$(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function F$(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function D_(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B$(t,e){return e}class he{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||B$}}let ss=null;function j$(t){return!Ho(t)||t.length<2?t:D_(t)}function Vo(){if(ss)return ss;const t=[];t.push(new he("bucket")),t.push(new he("generation")),t.push(new he("metageneration")),t.push(new he("name","fullPath",!0));function e(s,o){return j$(o)}const n=new he("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new he("size");return i.xform=r,t.push(i),t.push(new he("timeCreated")),t.push(new he("updated")),t.push(new he("md5Hash",null,!0)),t.push(new he("cacheControl",null,!0)),t.push(new he("contentDisposition",null,!0)),t.push(new he("contentEncoding",null,!0)),t.push(new he("contentLanguage",null,!0)),t.push(new he("contentType",null,!0)),t.push(new he("metadata","customMetadata",!0)),ss=t,ss}function H$(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new ue(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function V$(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return H$(r,t),r}function L_(t,e,n){const r=Yu(e);return r===null?null:V$(t,r,n)}function q$(t,e,n,r){const i=Yu(e);if(i===null||!Ho(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const l=t.bucket,f=t.fullPath,h="/b/"+o(l)+"/o/"+o(f),d=rn(h,n,r),p=R_({alt:"media",token:u});return d+p})[0]}function Xu(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd="prefixes",yd="items";function z$(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[vd])for(const i of n[vd]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new ue(e,s));r.prefixes.push(o)}if(n[yd])for(const i of n[yd]){const s=t._makeStorageReference(new ue(e,i.name));r.items.push(s)}return r}function W$(t,e,n){const r=Yu(n);return r===null?null:z$(t,e,r)}class Pt{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t){if(!t)throw Ku()}function qo(t,e){function n(r,i){const s=L_(t,i,e);return lt(s!==null),s}return n}function K$(t,e){function n(r,i){const s=W$(t,e,i);return lt(s!==null),s}return n}function G$(t,e){function n(r,i){const s=L_(t,i,e);return lt(s!==null),q$(s,i,t.host,t._protocol)}return n}function Fr(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=l$():i=u$():n.getStatus()===402?i=c$(t.bucket):n.getStatus()===403?i=f$(t.path):i=r,i.serverResponse=r.serverResponse,i}return e}function zo(t){const e=Fr(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=a$(t.path)),s.serverResponse=i.serverResponse,s}return n}function x_(t,e,n){const r=e.fullServerUrl(),i=rn(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Pt(i,s,qo(t,n),o);return a.errorHandler=zo(e),a}function Y$(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=rn(o,t.host,t._protocol),c="GET",u=t.maxOperationRetryTime,l=new Pt(a,c,K$(t,e.bucket),u);return l.urlParams=s,l.errorHandler=Fr(e),l}function X$(t,e,n){const r=e.fullServerUrl(),i=rn(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Pt(i,s,G$(t,n),o);return a.errorHandler=zo(e),a}function J$(t,e,n,r){const i=e.fullServerUrl(),s=rn(i,t.host,t._protocol),o="PATCH",a=Xu(n,r),c={"Content-Type":"application/json; charset=utf-8"},u=t.maxOperationRetryTime,l=new Pt(s,o,qo(t,r),u);return l.headers=c,l.body=a,l.errorHandler=zo(e),l}function Q$(t,e){const n=e.fullServerUrl(),r=rn(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(c,u){}const a=new Pt(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=zo(e),a}function Z$(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function M_(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=Z$(null,e)),r}function ek(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let S="";for(let T=0;T<2;T++)S=S+Math.random().toString().slice(2);return S}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=M_(e,r,i),l=Xu(u,n),f="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,h=`\r
--`+c+"--",d=gt.getBlob(f,r,h);if(d===null)throw I_();const p={name:u.fullPath},m=rn(s,t.host,t._protocol),g="POST",b=t.maxUploadRetryTime,A=new Pt(m,g,qo(t,n),b);return A.urlParams=p,A.headers=o,A.body=d.uploadData(),A.errorHandler=Fr(e),A}class so{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function Ju(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{lt(!1)}return lt(!!n&&(e||["active"]).indexOf(n)!==-1),n}function tk(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=M_(e,r,i),a={name:o.fullPath},c=rn(s,t.host,t._protocol),u="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},f=Xu(o,n),h=t.maxUploadRetryTime;function d(m){Ju(m);let g;try{g=m.getResponseHeader("X-Goog-Upload-URL")}catch{lt(!1)}return lt(Ho(g)),g}const p=new Pt(c,u,d,h);return p.urlParams=a,p.headers=l,p.body=f,p.errorHandler=Fr(e),p}function nk(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const l=Ju(u,["active","final"]);let f=null;try{f=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{lt(!1)}f||lt(!1);const h=Number(f);return lt(!isNaN(h)),new so(h,r.size(),l==="final")}const o="POST",a=t.maxUploadRetryTime,c=new Pt(n,o,s,a);return c.headers=i,c.errorHandler=Fr(e),c}const bd=256*1024;function rk(t,e,n,r,i,s,o,a){const c=new so(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw g$();const u=c.total-c.current;let l=u;i>0&&(l=Math.min(l,i));const f=c.current,h=f+l,p={"X-Goog-Upload-Command":l===u?"upload, finalize":"upload","X-Goog-Upload-Offset":`${c.current}`},m=r.slice(f,h);if(m===null)throw I_();function g(T,C){const O=Ju(T,["active","final"]),$=c.current+l,D=r.size();let V;return O==="final"?V=qo(e,s)(T,C):V=null,new so($,D,O==="final",V)}const b="POST",A=e.maxUploadRetryTime,S=new Pt(n,b,g,A);return S.headers=p,S.body=m.uploadData(),S.progressCallback=a||null,S.errorHandler=Fr(t),S}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik={STATE_CHANGED:"state_changed"},de={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Ta(t){switch(t){case"running":case"pausing":case"canceling":return de.RUNNING;case"paused":return de.PAUSED;case"success":return de.SUCCESS;case"canceled":return de.CANCELED;case"error":return de.ERROR;default:return de.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e,n,r){if(w$(e)||n!=null||r!=null)this.next=e,this.error=n!=null?n:void 0,this.complete=r!=null?r:void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class ok{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=An.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=An.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=An.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Gr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Gr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Gr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Gr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Gr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class ak extends ok{initXhr(){this.xhr_.responseType="text"}}function it(){return new ak}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=Vo(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{this._request=void 0,this._chunkMultiplier=1,i._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=i,this._transition("error"))},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals("canceled")?this.completeTransitions_():(this._error=i,this._transition("error"))},this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=tk(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,it,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=nk(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,it,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=bd*this._chunkMultiplier,n=new so(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=rk(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,it,i,s);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){bd*this._chunkMultiplier<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=x_(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,it,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=ek(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,it,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":this._state=e,this._request!==void 0&&this._request.cancel();break;case"pausing":this._state=e,this._request!==void 0&&this._request.cancel();break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=A_(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Ta(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new sk(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Ta(this._state)){case de.SUCCESS:Jn(this._resolve.bind(null,this.snapshot))();break;case de.CANCELED:case de.ERROR:const n=this._reject;Jn(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Ta(this._state)){case de.RUNNING:case de.PAUSED:e.next&&Jn(e.next.bind(e,this.snapshot))();break;case de.SUCCESS:e.complete&&Jn(e.complete.bind(e))();break;case de.CANCELED:case de.ERROR:e.error&&Jn(e.error.bind(e,this._error))();break;default:e.error&&Jn(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,n){this._service=e,n instanceof ue?this._location=n:this._location=ue.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Fn(e,n)}get root(){const e=new ue(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return D_(this._location.path)}get storage(){return this._service}get parent(){const e=U$(this._location.path);if(e===null)return null;const n=new ue(this._location.bucket,e);return new Fn(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw O_(e)}}function ck(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new U_(t,new gt(e),n)}function uk(t){const e={prefixes:[],items:[]};return F_(t,e).then(()=>e)}async function F_(t,e,n){const i=await B_(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await F_(t,e,i.nextPageToken)}function B_(t,e){e!=null&&typeof e.maxResults=="number"&&Ec("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=Y$(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,it)}function lk(t){t._throwIfRoot("getMetadata");const e=x_(t.storage,t._location,Vo());return t.storage.makeRequestWithTokens(e,it)}function fk(t,e){t._throwIfRoot("updateMetadata");const n=J$(t.storage,t._location,e,Vo());return t.storage.makeRequestWithTokens(n,it)}function hk(t){t._throwIfRoot("getDownloadURL");const e=X$(t.storage,t._location,Vo());return t.storage.makeRequestWithTokens(e,it).then(n=>{if(n===null)throw _$();return n})}function dk(t){t._throwIfRoot("deleteObject");const e=Q$(t.storage,t._location);return t.storage.makeRequestWithTokens(e,it)}function j_(t,e){const n=F$(t._location.path,e),r=new ue(t._location.bucket,n);return new Fn(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pk(t){return/^[A-Za-z]+:\/\//.test(t)}function mk(t,e){return new Fn(t,e)}function H_(t,e){if(t instanceof Qu){const n=t;if(n._bucket==null)throw m$();const r=new Fn(n,n._bucket);return e!=null?H_(r,e):r}else return e!==void 0?j_(t,e):t}function gk(t,e){if(e&&pk(e)){if(t instanceof Qu)return mk(t,e);throw hr("To use ref(service, url), the first argument must be a Storage instance.")}else return H_(t,e)}function Ed(t,e){const n=e==null?void 0:e[S_];return n==null?null:ue.makeFromBucketSpec(n,t)}function _k(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:MC(i,t.app.options.projectId))}class Qu{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=T_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=s$,this._maxUploadRetryTime=o$,this._requests=new Set,i!=null?this._bucket=ue.makeFromBucketSpec(i,this._host):this._bucket=Ed(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ue.makeFromBucketSpec(this._url,e):this._bucket=Ed(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ec("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ec("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Fn(this,e)}_makeRequest(e,n,r,i){if(this._deleted)return new v$(C_());{const s=R$(e,this._appId,r,i,n,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const wd="@firebase/storage",Td="0.9.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk="storage";function yk(t,e,n){return t=se(t),ck(t,e,n)}function bk(t){return t=se(t),lk(t)}function Ek(t,e){return t=se(t),fk(t,e)}function wk(t,e){return t=se(t),B_(t,e)}function Tk(t){return t=se(t),uk(t)}function Sk(t){return t=se(t),hk(t)}function Ak(t){return t=se(t),dk(t)}function Sd(t,e){return t=se(t),gk(t,e)}function Ik(t,e){return j_(t,e)}function Ck(t,e,n,r={}){_k(t,e,n,r)}function Ok(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Qu(n,r,i,e,nn)}function Rk(){At(new ht(vk,Ok,"PUBLIC").setMultipleInstances(!0)),Oe(wd,Td,""),Oe(wd,Td,"esm2017")}Rk();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,n,r){this._delegate=e,this.task=n,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,n){this._delegate=e,this._ref=n,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new os(this._delegate.snapshot,this,this._ref)}then(e,n){return this._delegate.then(r=>{if(e)return e(new os(r,this,this._ref))},n)}on(e,n,r,i){let s;return n&&(typeof n=="function"?s=o=>n(new os(o,this,this._ref)):s={next:n.next?o=>n.next(new os(o,this,this._ref)):void 0,complete:n.complete||void 0,error:n.error||void 0}),this._delegate.on(e,s,r||void 0,i||void 0)}}class Id{constructor(e,n){this._delegate=e,this._service=n}get prefixes(){return this._delegate.prefixes.map(e=>new Tt(e,this._service))}get items(){return this._delegate.items.map(e=>new Tt(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n){this._delegate=e,this.storage=n}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const n=Ik(this._delegate,e);return new Tt(n,this.storage)}get root(){return new Tt(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new Tt(e,this.storage)}put(e,n){return this._throwIfRoot("put"),new Ad(yk(this._delegate,e,n),this)}putString(e,n=Be.RAW,r){this._throwIfRoot("putString");const i=N_(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),new Ad(new U_(this._delegate,new gt(i.data,!0),s),this)}listAll(){return Tk(this._delegate).then(e=>new Id(e,this.storage))}list(e){return wk(this._delegate,e||void 0).then(n=>new Id(n,this.storage))}getMetadata(){return bk(this._delegate)}updateMetadata(e){return Ek(this._delegate,e)}getDownloadURL(){return Sk(this._delegate)}delete(){return this._throwIfRoot("delete"),Ak(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw O_(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e,n){this.app=e,this._delegate=n}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(Cd(e))throw hr("ref() expected a child path but got a URL, use refFromURL instead.");return new Tt(Sd(this._delegate,e),this)}refFromURL(e){if(!Cd(e))throw hr("refFromURL() expected a full URL but got a child path, use ref() instead.");try{ue.makeFromUrl(e,this._delegate.host)}catch{throw hr("refFromUrl() expected a valid full URL but got an invalid one.")}return new Tt(Sd(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,n,r={}){Ck(this._delegate,e,n,r)}}function Cd(t){return/^[A-Za-z]+:\/\//.test(t)}const Nk="@firebase/storage-compat",$k="0.1.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk="storage-compat";function Pk(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("storage").getImmediate({identifier:e});return new V_(n,r)}function Dk(t){const e={TaskState:de,TaskEvent:ik,StringFormat:Be,Storage:V_,Reference:Tt};t.INTERNAL.registerComponent(new ht(kk,Pk,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(Nk,$k)}Dk(jo);Q.use(Np);const q_={apiKey:"AIzaSyB4OzqTZ1PS6UeHPqFVv3Zo0GvPs8FBrEw",authDomain:"control-azucar-5ea36.firebaseapp.com",projectId:"control-azucar-5ea36",storageBucket:"control-azucar-5ea36.appspot.com",messagingSenderId:"95873635954",appId:"1:95873635954:web:943199238b2da0142094eb"};jo.initializeApp(q_);jo.storage();const Lk=wu(q_),Qk=J0(Lk);YN();PE({router:um,store:ru,render:()=>DE(KE)}).mount("#app");export{Xk as A,Gk as E,Ft as G,Yk as I,Mk as __vite_legacy_guard,jk as a,Kk as b,Wk as c,Qk as d,Jk as e,Fk as f,YN as g,zk as h,VE as n,Vk as o,Hk as s,Bk as t,qk as u,Q0 as w};
