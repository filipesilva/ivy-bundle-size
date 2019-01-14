!function(){"use strict";var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(t,e)};function t(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}function e(n,t){var e="function"==typeof Symbol&&n[Symbol.iterator];if(!e)return n;var r,o,i=e.call(n),u=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return u}function r(){for(var n=[],t=0;t<arguments.length;t++)n=n.concat(e(arguments[t]));return n}function o(n){for(var t in n)if(n[t]===o)return t;throw Error("Could not find renamed property on target object.")}function i(n){return{providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function u(n){return n&&n.hasOwnProperty(l)?n[l]:null}function a(n){return n&&n.hasOwnProperty(f)?n[f]:null}Array,Error,"function"==typeof Symbol&&Symbol,Error,Error;var l=o({ngInjectableDef:o}),f=o({ngInjectorDef:o}),s=function(){function n(n,t){this._desc=n,this.ngMetadataName="InjectionToken",this.ngInjectableDef=void 0!==t?i({providedIn:t.providedIn||"root",factory:t.factory}):void 0}return n.prototype.toString=function(){return"InjectionToken "+this._desc},n}(),c="__parameters__";function p(n,t,e){var o=function(n){return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(n){var o=n.apply(void 0,r(t));for(var i in o)this[i]=o[i]}}}(t);function i(){for(var n,t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(this instanceof i)return o.apply(this,t),this;var u=new((n=i).bind.apply(n,r([void 0],t)));return a.annotation=u,a;function a(n,t,e){for(var r=n.hasOwnProperty(c)?n[c]:Object.defineProperty(n,c,{value:[]})[c];r.length<=e;)r.push(null);return(r[e]=r[e]||[]).push(u),n}}return e&&(i.prototype=Object.create(e.prototype)),i.prototype.ngMetadataName=n,i.annotationCls=i,i}var d=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}({}),v=o({ngComponentDef:o}),h=o({ngDirectiveDef:o}),y=o({ngPipeDef:o}),g=o({ngModuleDef:o}),w=o({__NG_ELEMENT_ID__:o});function m(n){if("string"==typeof n)return n;if(n instanceof Array)return"["+n.map(m).join(", ")+"]";if(null==n)return""+n;if(n.overriddenName)return""+n.overriddenName;if(n.name)return""+n.name;var t=n.toString();if(null==t)return""+t;var e=t.indexOf("\n");return-1===e?t:t.substring(0,e)}var _=o({__forward_ref__:o});function b(n){return n.__forward_ref__=b,n.toString=function(){return m(this())},n}function k(n){var t=n;return"function"==typeof t&&t.hasOwnProperty(_)&&t.__forward_ref__===b?t():n}var I=function(n){return n[n.Emulated=0]="Emulated",n[n.Native=1]="Native",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}({}),C={},j=[],x="undefined"!=typeof window&&window,D="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,E="undefined"!=typeof global&&global||x||D,N=0,O=1,S=2,T=3,P=5,H=6,A=7,V=8,R=9,F=10,M=11,Q=12,L=13,U=15,B=17,G=18,W=0,q=1,J=6,K=7,z="__ngContext__",X=8,Y=8,Z=9,$=-1,nn=function(){return function(n,t,e,r){this.factory=n,this.isProvider=e,this.resolving=!1,this.canSeeViewProviders=t,this.injectImpl=r}}(),tn=nn.prototype;function en(n){return function(n){return function(n,t){return null!=n&&"object"==typeof n&&Object.getPrototypeOf(n)==t.prototype}(n,rn)}(n)?n.instance:n}var rn=function(){return function(n){this.instance=n,this.seenProps=new Set,this.previous={},this.changes=null}}();function on(n){return"function"==typeof n?n.name||n:"string"==typeof n?n:null==n?"":"object"==typeof n&&"function"==typeof n.type?n.type.name||n.type:""+n}function un(n){for(;Array.isArray(n);)n=n[P];return n}function an(n,t){return un(t[n.index])}function ln(n,t){var e=t[n];return e.length>=G?e:e[P]}function fn(n){return 1==(1&n.flags)}function sn(n){return null!==n.template}function cn(n){return n[z]}function pn(n){var t=cn(n);return t?Array.isArray(t)?t:t.lView:null}function dn(n){return 32767&n}function vn(n,t){for(var e=n>>16,r=t;e>0;)r=r[B],e--;return r}var hn=("undefined"!=typeof requestAnimationFrame&&requestAnimationFrame||setTimeout).bind(E);function yn(n){for(var t=n[H];t&&2===t.type;)t=(n=n[B])[H];return n}var gn,wn=p("Inject",function(n){return{token:n}}),mn=p("Optional"),_n=p("Self"),bn=p("SkipSelf"),kn=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}({}),In=void 0;function Cn(n){var t=In;return In=n,t}function jn(n){var t=gn;return gn=n,t}function xn(n,t){return void 0===t&&(t=kn.Default),(gn||function(n,t){if(void 0===t&&(t=kn.Default),void 0===In)throw new Error("inject() must be called from an injection context");return null===In?Dn(n,void 0,t):In.get(n,t&kn.Optional?null:void 0,t)})(n,t)}function Dn(n,t,e){var r=u(n);if(r&&"root"==r.providedIn)return void 0===r.value?r.value=r.factory():r.value;if(e&kn.Optional)return null;if(void 0!==t)return t;throw new Error("Injector: NOT_FOUND ["+m(n)+"]")}function En(n){for(var t=[],e=0;e<n.length;e++){var r=n[e];if(Array.isArray(r)){if(0===r.length)throw new Error("Arguments array must have arguments.");for(var o=void 0,i=kn.Default,u=0;u<r.length;u++){var a=r[u];a instanceof mn||"Optional"===a.ngMetadataName?i|=kn.Optional:a instanceof bn||"SkipSelf"===a.ngMetadataName?i|=kn.SkipSelf:a instanceof _n||"Self"===a.ngMetadataName?i|=kn.Self:o=a instanceof wn?a.token:a}t.push(xn(o,i))}else t.push(xn(r))}return t}var Nn,On,Sn,Tn=0;function Pn(n){return Vn(n)||function(n){return n[h]||null}(n)}function Hn(n){return function(n){return n[y]||null}(n)}function An(n,t){if(null==n)return C;var e={};for(var r in n)if(n.hasOwnProperty(r)){var o=n[r],i=o;Array.isArray(o)&&(i=o[1],o=o[0]),e[o]=r,t&&(t[o]=i)}return e}function Vn(n){return n[v]||null}function Rn(n,t,e,r){if(!r){var o=2&n[O]?t:e;o&&Fn(n,o)}}function Fn(n,t){for(var e=0;e<t.length;e+=2){var r=t[e],o=t[e+1],i=r<0,u=n[i?-r:r],a=en(u);if(i){var l=u,f=l.changes;f&&(l.previous=f,l.changes=null,o.call(l.instance,f))}else o.call(a)}}function Mn(){return Sn}function Qn(){return Nn}function Ln(n){Nn=n}function Un(n,t){Nn=n,Sn=t}function Bn(){return On}function Gn(n){On=n}function Wn(n){return void 0===n&&(n=Sn),1==(1&n[O])}var qn=!1;function Jn(){return qn}function Kn(n){qn=n}var zn=!0;function Xn(){return zn}function Yn(n){zn=n}function Zn(n,t){var e=Sn;n&&(zn=n[N].firstTemplatePass);return Nn=t,On=!0,Sn=n,e}function $n(n){var t=Sn[N];if(Wn(Sn))Sn[O]&=-2;else try{Rn(Sn,t.viewHooks,t.viewCheckHooks,qn)}finally{Sn[O]&=-11,Sn[O]|=32,Sn[A]=t.bindingStartIndex}Zn(n,null)}var nt=!0;function tt(n){var t=nt;return nt=n,t}var et=255,rt=0;function ot(n,t){n.push(0,0,0,0,0,0,0,0,t)}function it(n,t){return-1===n.injectorIndex||n.parent&&n.parent.injectorIndex===n.injectorIndex||null==t[n.injectorIndex+Y]?-1:n.injectorIndex}function ut(n,t){if(n.parent&&-1!==n.parent.injectorIndex)return n.parent.injectorIndex;for(var e=t[H],r=1;e&&-1===e.injectorIndex;)e=(t=t[B])?t[H]:null,r++;return e?e.injectorIndex|r<<16:-1}var at={};function lt(n,t,e,r,o,i){var u=t[N],a=u.data[n+X],l=function(n,t,e,r,o){for(var i=n.providerIndexes,u=t[N].data,a=65535&i,l=n.directiveStart,f=i>>16,s=o?a+f:n.directiveEnd,c=r?a:a+f;c<s;c++){var p=u[c];if(c<l&&e===p||c>=l&&p.type===e)return c}if(o){var d=u[l];if(d&&sn(d)&&d.type===e)return l}return null}(a,t,e,null==r?fn(a)&&nt:r!=u&&3===a.type,o&kn.Host&&i===a);return null!==l?ft(u.data,t,l,a):at}function ft(n,t,e,r){var o,i=t[e];if(null!=(o=i)&&"object"==typeof o&&Object.getPrototypeOf(o)==tn){var u=i;if(u.resolving)throw new Error("Circular dep for "+on(n[e]));var a=tt(u.canSeeViewProviders);u.resolving=!0;var l=void 0;u.injectImpl&&(l=jn(u.injectImpl));var f=Qn(),s=Mn();Un(r,t);try{i=t[e]=u.factory(null,n,t,r);var c=t[N];i&&u.isProvider&&i.ngOnDestroy&&(c.destroyHooks||(c.destroyHooks=[])).push(e,i.ngOnDestroy)}finally{u.injectImpl&&jn(l),tt(a),u.resolving=!1,Un(f,s)}}else i=en(i);return i}function st(n,t,e){var r=64&n,o=32&n;return!!((128&n?r?o?e[t+7]:e[t+6]:o?e[t+5]:e[t+4]:r?o?e[t+3]:e[t+2]:o?e[t+1]:e[t])&1<<n)}function ct(n,t){return!(n&kn.Self||n&kn.Host&&t)}var pt=function(){function n(n,t){this._tNode=n,this._lView=t}return n.prototype.get=function(n,t){return function(n,t,e,r,o){if(void 0===r&&(r=kn.Default),n){var i=function(n){if("string"==typeof n)return n.charCodeAt(0)||0;var t=n[w];return"number"==typeof t?t&et:t}(e);if("function"==typeof i){var u=Qn(),a=Mn();Un(n,t);try{var l=i();if(null!=l||r&kn.Optional)return l;throw new Error("No provider for "+on(e)+"!")}finally{Un(u,a)}}else if("number"==typeof i){var f=null,s=it(n,t),c=$,p=r&kn.Host?yn(t)[H]:null;for((-1===s||r&kn.SkipSelf)&&(c=-1===s?ut(n,t):t[s+Y],ct(r,!1)?(f=t[N],s=dn(c),t=vn(c,t)):s=-1);-1!==s;){c=t[s+Y];var d=t[N];if(st(i,s,d.data)){var v=lt(s,t,e,f,r,p);if(v!==at)return v}ct(r,t[N].data[s+X]===p)&&st(i,s,t)?(f=d,s=dn(c),t=vn(c,t)):s=-1}}}if(r&kn.Optional&&void 0===o&&(o=null),0==(r&(kn.Self|kn.Host))){var h=t[F];return h?h.get(e,o,r&kn.Optional):Dn(e,o,r&kn.Optional)}if(r&kn.Optional)return o;throw new Error("NodeInjector: NOT_FOUND ["+on(e)+"]")}(this._tNode,this._lView,n,void 0,t)},n}();function dt(n,t){n[z]=t}var vt={},ht="ngProjectAs";function yt(n){return!!n.listen}var gt={createRenderer:function(n,t){return document}};function wt(n,t){if(-1===n.index){var e=t[U];return e>-1?t[S][e]:null}return t[S][n.parent.index]}var mt=[];function _t(n,t,e,r,o){0===n?Ct(t,e,r,o||null):1===n?function(n,t,e){yt(n)?n.removeChild(t,e):t.removeChild(e)}(t,e,r):2===n&&t.destroyNode(r)}function bt(n){var t=n[N].childIndex;return-1===t?null:n[t]}function kt(n,t){var e;return n.length>=G&&(e=n[H])&&2===e.type?wt(e,n):n[S]===t?null:n[S]}function It(n){if(n.length>=G){var t=n;!function(n){var t,e=n[N];null!=e&&null!=(t=e.destroyHooks)&&Fn(n,t)}(t),function(n){var t=n[N].cleanup;if(null!=t){for(var e=n[V],r=0;r<t.length-1;r+=2)if("string"==typeof t[r]){var o=t[r+1],i="function"==typeof o?o(n):un(n[o]),u=t[r+3];"boolean"==typeof u?i.removeEventListener(t[r],e[t[r+2]],u):u>=0?e[u]():e[-u].unsubscribe(),r+=2}else"number"==typeof t[r]?(0,e[t[r]])():t[r].call(e[t[r+1]]);n[V]=null}}(t);var e=t[H];e&&3===e.type&&yt(t[Q])&&t[Q].destroy()}}function Ct(n,t,e,r){yt(n)?n.insertBefore(t,e,r):t.insertBefore(e,r,!0)}function jt(n,t){return yt(n)?n.parentNode(t):t.parentNode}function xt(n,t,e){var r=function(n,t){if(0!=(128&t[O]))return jt(t[Q],an(n,t));var e,r,o=function(n){for(;null!=n.parent&&(4===n.parent.type||5===n.parent.type);)n=n.parent;return n}(n).parent;if(null==o){var i=t[H];return 2===i.type?(r=wt(i,e=t))?jt(e[Q],r[J]):null:function(n){var t=n[H];return t&&3===t.type?an(t,n[S]):null}(t)}return 1&o.flags?null:an(o,t)}(t,e);if(null!=r){var o=e[Q],i=t.parent||e[H];if(2===i.type){var u=wt(i,e),a=u[q];Ct(o,r,n,function(n,t,e){if(n+1<t.length){var r=t[n+1],o=r[H];return o.child?an(o.child,r):e}return e}(a.indexOf(e),a,u[J]))}else 4===i.type||5===i.type?Ct(o,r,n,an(i,e)):yt(o)?o.appendChild(r,n):r.appendChild(n)}}var Dt="@";function Et(n){var t=n[N];if(t.firstTemplatePass=!1,Yn(!1),!Wn(n)){var e=Jn();(function(n,t,e){!e&&32&n[O]&&(Rn(n,t.initHooks,t.checkHooks,e),n[O]&=-33)})(n,t,e),function(n){for(var t=bt(n);null!==t;t=t[T])if(t.length<G&&-1===t[W])for(var e=t,r=0;r<e[q].length;r++){var o=e[q][r];St(o,o[N],o[R])}}(n),function(n){if(null!=n.contentQueries)for(var t=0;t<n.contentQueries.length;t+=2){var e=n.contentQueries[t];n.data[e].contentQueriesRefresh(e-G,n.contentQueries[t+1])}}(t),Rn(n,t.contentHooks,t.contentCheckHooks,e),function(n,t){if(n.expandoInstructions)for(var e=t[A]=n.expandoStartIndex,r=-1,o=-1,i=0;i<n.expandoInstructions.length;i++){var u=n.expandoInstructions[i];if("number"==typeof u)if(u<=0){o=-u;var a=n.expandoInstructions[++i];r=e+=Z+a}else e+=u;else null!==u&&(t[A]=e,u(2,en(t[r]),o)),r++}}(t,n)}!function(n){if(null!=n)for(var t=0;t<n.length;t++)void 0,void 0,16==(16&(e=ln(n[t],Mn()))[O])&&12&e[O]&&(function(n){for(var t=n[N],e=n.length;e<t.blueprint.length;e++)n[e]=t.blueprint[e]}(e),Ut(e,e[R]));var e}(t.components)}function Nt(n,t,e,r,o,i,u,a){var l=t.blueprint.slice();return l[O]=51|r,l[S]=l[B]=n,l[R]=e,l[M]=o||n&&n[M],l[Q]=i||n&&n[Q],l[L]=u||n&&n[L]||null,l[F]=a||n&&n[F]||null,l}function Ot(n,t,e,r,o){var i=Mn(),u=i[N],a=n+G;i[a]=e;var l=u.data[a];null==l&&(l=u.data[a]=Ft(i,t,a,r,o,null));var f=Qn(),s=Bn();return f&&(!s||null!=f.child||null===l.parent&&2!==f.type?s||(f.next=l):f.child=l),null==u.firstChild&&(u.firstChild=l),Ln(l),Gn(!0),l}function St(n,t,e){var r,o=Bn(),i=Qn();if(Gn(!0),Ln(null),128&n[O])Mt(function(n){for(var t=Array.isArray(n)?n:pn(n);t&&!(128&t[O]);)t=t[S];return t}(n)[R]);else try{Gn(!0),Ln(null),r=Zn(n,n[H]),At(),t.template(Pt(n),e),n[N].firstTemplatePass=!1,Yn(!1),Et(n)}finally{$n(r),Gn(o),Ln(i)}}function Tt(n,t,e){var r=n[M],o=Zn(n,n[H]),i=!Jn();try{i&&r.begin&&r.begin(),Wn(n)&&(e&&(At(),e(1,t)),Et(n),n[O]&=-2),e&&e(2,t),Et(n)}finally{i&&r.end&&r.end(),$n(o)}}function Pt(n){return Wn(n)?1:2}var Ht=null;function At(){Ht=null}function Vt(n,t,e,r,o,i,u){var a=G+e,l=a+r,f=function(n,t){var e=new Array(t).fill(null,0,n).fill(vt,n);return e[U]=-1,e[A]=n,e}(a,l);return f[N]={id:n,blueprint:f,template:t,viewQuery:u,node:null,data:f.slice(),childIndex:-1,bindingStartIndex:a,expandoStartIndex:l,expandoInstructions:null,firstTemplatePass:!0,changesHooks:null,initHooks:null,checkHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof o?o():o,pipeRegistry:"function"==typeof i?i():i,firstChild:null}}function Rt(n,t){var e=n.createRenderer(null,null);return"string"==typeof t?yt(e)?e.selectRootElement(t):e.querySelector(t):t}function Ft(n,t,e,r,o,i){var u=Qn(),a=Bn()?u:u&&u.parent,l=a&&n&&a!==n[H]?a:null;return{type:t,index:e,injectorIndex:l?l.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,flags:0,providerIndexes:0,tagName:r,attrs:o,localNames:null,initialInputs:void 0,inputs:void 0,outputs:void 0,tViews:i,next:null,child:null,parent:l,detached:null,stylingTemplate:null,projection:null}}function Mt(n){for(var t=0;t<n.components.length;t++){var e=n.components[t];Tt(pn(e),e)}}function Qt(n,t){var e=n[M];e.begin&&e.begin(),Wn(n)&&Ut(n,t),Ut(n,t),e.end&&e.end()}function Lt(n){Mt(n[R])}function Ut(n,t){var e=n[N],r=Zn(n,n[H]),o=e.template,i=e.viewQuery;try{At(),function(t,e,r){t&&Wn(n)&&t(1,r)}(i,0,t),o(Pt(n),t),Et(n),function(t,e,r){t&&!Wn(n)&&t(2,r)}(i,0,t)}finally{$n(r)}}var Bt=Promise.resolve(null);function Gt(n,t,e,r,o,i){On=!1,Nn=null;var u,a=e[N],l=Nt(e,(u=t.template).ngPrivateData||(u.ngPrivateData=Vt(-1,u,t.consts,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery)),null,t.onPush?8:4,r,o,i),f=Ot(0,3,n,null,null);return a.firstTemplatePass&&(function(n,t,e){var r="string"!=typeof e?e[w]:e.charCodeAt(0)||0;null==r&&(r=e[w]=rt++);var o=r&et,i=1<<o,u=64&o,a=32&o,l=t.data;128&o?u?a?l[n+7]|=i:l[n+6]|=i:a?l[n+5]|=i:l[n+4]|=i:u?a?l[n+3]|=i:l[n+2]|=i:a?l[n+1]|=i:l[n]|=i}(function(n,t){var e=it(n,t);if(-1!==e)return e;var r=t[N];r.firstTemplatePass&&(n.injectorIndex=t.length,ot(r.data,n),ot(t,null),ot(r.blueprint,null));var o=ut(n,t),i=dn(o),u=vn(o,t),a=n.injectorIndex;if(o!==$)for(var l=u[N].data,f=0;f<8;f++)t[a+f]=u[i+f]|l[i+f];return t[a+Y]=o,a}(f,e),e[N],t.type),f.flags=1,function(n,t,e){n.flags=1&n.flags,n.directiveStart=t,n.directiveEnd=t+1,n.providerIndexes=t}(f,e.length),function(n){var t=Mn()[N];(t.components||(t.components=[])).push(n.index)}(f)),l[P]=e[G],l[H]=f,e[G]=l}function Wt(n,t,e,r,o){var i=e[N],u=function(n,t,e){var r=Qn();n.firstTemplatePass&&(e.providersResolver&&e.providersResolver(e),function(n,t,e){var o=-(r.index-G),i=n.data.length-(65535&r.providerIndexes);(n.expandoInstructions||(n.expandoInstructions=[])).push(o,i,1)}(n),function(n,t,e,r){n.data.push(e);var o=new nn(r,sn(e),!1,null);n.blueprint.push(o),t.push(o)}(n,t,e,e.factory));var o=ft(n.data,t,t.length-1,r);return function(n,t,e,r){var o=an(t,n);dt(e,n),o&&dt(o,n),null!=r.attributes&&3==t.type&&function(n,t){for(var e=Mn()[Q],r=yt(e),o=0;o<t.length;){var i=t[o++];if("number"==typeof i){if(0!==i)break;var u=t[o++],a=t[o++],l=t[o++];r?e.setAttribute(n,a,l,u):n.setAttributeNS(u,a,l)}else l=t[o++],i!==ht&&(i[0]===Dt?r&&e.setProperty(n,i,l):r?e.setAttribute(n,i,l):n.setAttribute(i,l))}}(o,r.attributes)}(t,r,o,e),o}(i,e,t);if(r.components.push(u),n[R]=u,o&&o.forEach(function(n){return n(u,t)}),i.firstTemplatePass&&t.hostBindings){var a=Qn();t.hostBindings(1,u,a.index-G)}return u}function qt(n,t){return{components:[],scheduler:n||hn,clean:Bt,playerHandler:t||null,flags:0}}function Jt(n,t){var e,r,o,i,u,a,l=pn(n)[N],f=l.data.length-1;e=f,o=l,u=(r=t).onInit,a=r.doCheck,(i=r.onChanges)&&((o.initHooks||(o.initHooks=[])).push(-e,i),(o.checkHooks||(o.checkHooks=[])).push(-e,i)),u&&(o.initHooks||(o.initHooks=[])).push(e,u),a&&((o.initHooks||(o.initHooks=[])).push(e,a),(o.checkHooks||(o.checkHooks=[])).push(e,a)),function(n,t){if(n.firstTemplatePass)for(var e=t.directiveStart,r=t.directiveEnd;e<r;e++){var o=n.data[e];o.afterContentInit&&(n.contentHooks||(n.contentHooks=[])).push(e,o.afterContentInit),o.afterContentChecked&&((n.contentHooks||(n.contentHooks=[])).push(e,o.afterContentChecked),(n.contentCheckHooks||(n.contentCheckHooks=[])).push(e,o.afterContentChecked)),o.afterViewInit&&(n.viewHooks||(n.viewHooks=[])).push(e,o.afterViewInit),o.afterViewChecked&&((n.viewHooks||(n.viewHooks=[])).push(e,o.afterViewChecked),(n.viewCheckHooks||(n.viewCheckHooks=[])).push(e,o.afterViewChecked)),null!=o.onDestroy&&(n.destroyHooks||(n.destroyHooks=[])).push(e,o.onDestroy)}}(l,{directiveStart:f,directiveEnd:f+1})}var Kt=new Object,zt=Kt,Xt=new s("INJECTOR"),Yt=function(){function n(){}return n.prototype.get=function(n,t){if(void 0===t&&(t=Kt),t===Kt)throw new Error("NullInjectorError: No provider for "+m(n)+"!");return t},n}(),Zt=function(){function n(){}return n.create=function(n,t){return Array.isArray(n)?new le(n,t):new le(n.providers,n.parent,n.name||null)},n.THROW_IF_NOT_FOUND=Kt,n.NULL=new Yt,n.ngInjectableDef=i({providedIn:"any",factory:function(){return xn(Xt)}}),n.__NG_ELEMENT_ID__=function(){return $t()},n}(),$t=function(){return n=Qn(),new pt(n,Mn());var n},ne=function(n){return n},te=[],ee=ne,re=function(){return Array.prototype.slice.call(arguments)},oe=o({provide:String,useValue:o}),ie=Zt.NULL,ue=/\n/gm,ae="\u0275",le=function(){function n(n,t,e){void 0===t&&(t=ie),void 0===e&&(e=null),this.parent=t,this.source=e;var r=this._records=new Map;r.set(Zt,{token:Zt,fn:ne,deps:te,value:this,useNew:!1}),r.set(Xt,{token:Xt,fn:ne,deps:te,value:this,useNew:!1}),function n(t,e){if(e)if((e=k(e))instanceof Array)for(var r=0;r<e.length;r++)n(t,e[r]);else{if("function"==typeof e)throw ce("Function/Class not supported",e);if(!e||"object"!=typeof e||!e.provide)throw ce("Unexpected provider",e);var o=k(e.provide),i=function(n){var t=function(n){var t=te,e=n.deps;if(e&&e.length){t=[];for(var r=0;r<e.length;r++){var o=6;if((l=k(e[r]))instanceof Array)for(var i=0,u=l;i<u.length;i++){var a=u[i];a instanceof mn||a==mn?o|=1:a instanceof bn||a==bn?o&=-3:a instanceof _n||a==_n?o&=-5:l=a instanceof wn?a.token:k(a)}t.push({token:l,options:o})}}else if(n.useExisting){var l;t=[{token:l=k(n.useExisting),options:6}]}else if(!(e||oe in n))throw ce("'deps' required",n);return t}(n),e=ne,r=te,o=!1,i=k(n.provide);if(oe in n)r=n.useValue;else if(n.useFactory)e=n.useFactory;else if(n.useExisting);else if(n.useClass)o=!0,e=k(n.useClass);else{if("function"!=typeof i)throw ce("StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable",n);o=!0,e=i}return{deps:t,fn:e,useNew:o,value:r}}(e);if(!0===e.multi){var u=t.get(o);if(u){if(u.fn!==re)throw fe(o)}else t.set(o,u={token:e.provide,deps:[],useNew:!1,fn:re,value:te});u.deps.push({token:o=e,options:6})}var a=t.get(o);if(a&&a.fn==re)throw fe(o);t.set(o,i)}}(r,n)}return n.prototype.get=function(n,t,e){void 0===e&&(e=kn.Default);var o=this._records.get(n);try{return function n(t,e,o,i,u,a){try{return function(t,e,o,i,u,a){var l,f;if(!e||a&kn.SkipSelf)a&kn.Self||(f=i.get(t,u,kn.Default));else{if((f=e.value)==ee)throw Error(ae+"Circular dependency");if(f===te){e.value=ee;var s=e.useNew,c=e.fn,p=e.deps,d=te;if(p.length){d=[];for(var v=0;v<p.length;v++){var h=p[v],y=h.options,g=2&y?o.get(h.token):void 0;d.push(n(h.token,g,o,g||4&y?i:ie,1&y?null:Zt.THROW_IF_NOT_FOUND,kn.Default))}}e.value=f=s?new((l=c).bind.apply(l,r([void 0],d))):c.apply(void 0,d)}}return f}(t,e,o,i,u,a)}catch(l){throw l instanceof Error||(l=new Error(l)),(l.ngTempTokenPath=l.ngTempTokenPath||[]).unshift(t),e&&e.value==ee&&(e.value=te),l}}(n,o,this._records,this.parent,t,e)}catch(u){var i=u.ngTempTokenPath;throw n.__source&&i.unshift(n.__source),u.message=se("\n"+u.message,i,this.source),u.ngTokenPath=i,u.ngTempTokenPath=null,u}},n.prototype.toString=function(){var n=[];return this._records.forEach(function(t,e){return n.push(m(e))}),"StaticInjector["+n.join(", ")+"]"},n}();function fe(n){return ce("Cannot mix multi providers and regular providers",n)}function se(n,t,e){void 0===e&&(e=null),n=n&&"\n"===n.charAt(0)&&n.charAt(1)==ae?n.substr(2):n;var r=m(t);if(t instanceof Array)r=t.map(m).join(" -> ");else if("object"==typeof t){var o=[];for(var i in t)if(t.hasOwnProperty(i)){var u=t[i];o.push(i+":"+("string"==typeof u?JSON.stringify(u):m(u)))}r="{"+o.join(", ")+"}"}return"StaticInjectorError"+(e?"("+e+")":"")+"["+r+"]: "+n.replace(ue,"\n  ")}function ce(n,t){return new Error(se(n,t))}var pe=new s("The presence of this token marks an injector as being the root injector."),de={},ve={},he=[],ye=void 0;function ge(){return void 0===ye&&(ye=new Yt),ye}var we=function(){function n(n,t,e){var r=this;this.parent=e,this.records=new Map,this.injectorDefTypes=new Set,this.onDestroy=new Set,this.destroyed=!1;var o=[];be([n],function(n){return r.processInjectorType(n,[],o)}),t&&be(t,function(e){return r.processProvider(e,n,t)}),this.records.set(Xt,_e(void 0,this)),this.isRootInjector=this.records.has(pe),this.injectorDefTypes.forEach(function(n){return r.get(n)})}return n.prototype.destroy=function(){this.assertNotDestroyed(),this.destroyed=!0;try{this.onDestroy.forEach(function(n){return n.ngOnDestroy()})}finally{this.records.clear(),this.onDestroy.clear(),this.injectorDefTypes.clear()}},n.prototype.get=function(n,t,e){void 0===t&&(t=zt),void 0===e&&(e=kn.Default),this.assertNotDestroyed();var r,o=Cn(this);try{if(!(e&kn.SkipSelf)){var i=this.records.get(n);if(void 0===i){var a=("function"==typeof(r=n)||"object"==typeof r&&r instanceof s)&&u(n);a&&this.injectableDefInScope(a)&&(i=_e(me(n),de),this.records.set(n,i))}if(void 0!==i)return this.hydrate(n,i)}return(e&kn.Self?ge():this.parent).get(n,t)}finally{Cn(o)}},n.prototype.assertNotDestroyed=function(){if(this.destroyed)throw new Error("Injector has already been destroyed.")},n.prototype.processInjectorType=function(n,t,e){var r=this;if(n=k(n)){var o=a(n),i=null==o&&n.ngModule||void 0,u=void 0===i?n:i,l=-1!==e.indexOf(u),f=void 0!==i&&n.providers||he;if(void 0!==i&&(o=a(i)),null!=o){if(this.injectorDefTypes.add(u),this.records.set(u,_e(o.factory,de)),null!=o.imports&&!l){e.push(u);try{be(o.imports,function(n){return r.processInjectorType(n,t,e)})}finally{}}var s=o.providers;if(null!=s&&!l){var c=n;be(s,function(n){return r.processProvider(n,c,s)})}var p=n.ngModule;be(f,function(n){return r.processProvider(n,p,f)})}}},n.prototype.processProvider=function(n,t,e){var o=Ie(n=k(n))?n:k(n&&n.provide),i=function(n,t,e){var o=function(n,t,e){var o,i=void 0;if(Ie(n))return me(k(n));if(ke(n))i=function(){return k(n.useValue)};else if((o=n)&&o.useExisting)i=function(){return xn(k(n.useExisting))};else if(n&&n.useFactory)i=function(){return n.useFactory.apply(n,r(En(n.deps||[])))};else{var u=k(n&&(n.useClass||n.provide));if(!u){var a="";throw t&&e&&(a=" - only instances of Provider and Type are allowed, got: ["+e.map(function(t){return t==n?"?"+n+"?":"..."}).join(", ")+"]"),new Error("Invalid provider for the NgModule '"+m(t)+"'"+a)}if(!n.deps)return me(u);i=function(){return new(u.bind.apply(u,r([void 0],En(n.deps))))}}return i}(n,t,e);return ke(n)?_e(void 0,n.useValue):_e(o,de)}(n,t,e);if(Ie(n)||!0!==n.multi){var u=this.records.get(o);if(u&&void 0!==u.multi)throw new Error("Mixed multi-provider for "+m(o))}else{var a=this.records.get(o);if(a){if(void 0===a.multi)throw new Error("Mixed multi-provider for "+o+".")}else(a=_e(void 0,de,!0)).factory=function(){return En(a.multi)},this.records.set(o,a);o=n,a.multi.push(n)}this.records.set(o,i)},n.prototype.hydrate=function(n,t){if(t.value===ve)throw new Error("Cannot instantiate cyclic dependency! "+m(n));var e;return t.value===de&&(t.value=ve,t.value=t.factory()),"object"==typeof t.value&&t.value&&"object"==typeof(e=t.value)&&null!=e&&e.ngOnDestroy&&"function"==typeof e.ngOnDestroy&&this.onDestroy.add(t.value),t.value},n.prototype.injectableDefInScope=function(n){return!!n.providedIn&&("string"==typeof n.providedIn?"any"===n.providedIn||"root"===n.providedIn&&this.isRootInjector:this.injectorDefTypes.has(n.providedIn))},n}();function me(n){var t=u(n);if(null===t){var e=a(n);if(null!==e)return e.factory;if(n instanceof s)throw new Error("Token "+m(n)+" is missing an ngInjectableDef definition.");if(n instanceof Function){var r=n.length;if(r>0){var o=new Array(r).fill("?");throw new Error("Can't resolve all parameters for "+m(n)+": ("+o.join(", ")+").")}return function(){return new n}}throw new Error("unreachable")}return t.factory}function _e(n,t,e){return void 0===e&&(e=!1),{factory:n,value:t,multi:e?[]:void 0}}function be(n,t){n.forEach(function(n){return Array.isArray(n)?be(n,t):t(n)})}function ke(n){return n&&"object"==typeof n&&oe in n}function Ie(n){return"function"==typeof n}var Ce,je=function(){return function(){}}(),xe=function(){return function(){}}(),De=function(){function n(){}return n.prototype.resolveComponentFactory=function(n){throw function(n){var t=Error("No component factory found for "+m(n)+". Did you add it to @NgModule.entryComponents?");return t.ngComponent=n,t}(n)},n}(),Ee=function(){function n(){}return n.NULL=new De,n}(),Ne=function(){return function(){}}(),Oe=function(){return function(){}}(),Se=function(){function n(n,t,e){this._context=t,this._componentIndex=e,this._appRef=null,this._viewContainerRef=null,this._tViewNode=null,this._lView=n}return Object.defineProperty(n.prototype,"rootNodes",{get:function(){return null==this._lView[P]?function n(t,e,r){for(var o=e.child;o;)r.push(an(o,t)),4===o.type&&n(t,o,r),o=o.next;return r}(this._lView,this._lView[H],[]):[]},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"context",{get:function(){return this._context?this._context:this._lookUpContext()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"destroyed",{get:function(){return 64==(64&this._lView[O])},enumerable:!0,configurable:!0}),n.prototype.destroy=function(){if(this._appRef)this._appRef.detachView(this);else if(this._viewContainerRef){var n=this._viewContainerRef.indexOf(this);n>-1&&this._viewContainerRef.detach(n),this._viewContainerRef=null}var t,e;yt(e=(t=this._lView)[Q])&&e.destroyNode&&function(n,e,r,o,i){for(var u=t[N].node,a=-1,l=t,f=u.child;f;){var s=null;if(3===f.type){_t(2,r,null,an(f,l),i);var c=l[f.index];h=c,Array.isArray(h)&&h.length===K&&_t(2,r,null,c[J],i)}else if(0===f.type){var p=l[f.index];_t(2,r,null,p[J],i),p[q].length&&(s=(l=p[q][0])[N].node,i=p[J])}else if(1===f.type){var d=yn(l),v=d[H].projection[f.projection];mt[++a]=f,mt[++a]=l,v&&(s=(l=d[S])[N].data[v.index])}else s=f.child;if(null===s)for(null===f.next&&2&f.flags&&(l=mt[a--],f=mt[a--]),s=f.next;!s;){if(null===(f=f.parent||l[N].node)||f===u)return null;0===f.type&&(i=(l=l[S])[f.index][J]),s=2===f.type&&l[T]?(l=l[T])[N].node:f.next}f=s}var h}(0,0,e),function(n){if(-1===n[N].childIndex)return It(n);for(var t=bt(n);t;){var e=null;if(t.length>=G?t[N].childIndex>-1&&(e=bt(t)):t[q].length&&(e=t[q][0]),null==e){for(;t&&!t[T]&&t!==n;)It(t),t=kt(t,n);It(t||n),e=t&&t[T]}t=e}}(t),t[O]|=64},n.prototype.onDestroy=function(n){var t,e;e=n,function(n){return n[V]||(n[V]=[])}(t=this._lView).push(e),t[N].firstTemplatePass&&function(n){return n[N].cleanup||(n[N].cleanup=[])}(t).push(t[V].length-1,null)},n.prototype.markForCheck=function(){!function(n){for(;n&&!(128&n[O]);)n[O]|=8,n=n[S];n[O]|=8}(this._lView)},n.prototype.detach=function(){this._lView[O]&=-17},n.prototype.reattach=function(){this._lView[O]|=16},n.prototype.detectChanges=function(){Qt(this._lView,this.context)},n.prototype.checkNoChanges=function(){!function(n){Kn(!0);try{!function(n){Qt(function(n){var t,e=cn(n);if(Array.isArray(e)){var r=function(n,t){var e=n[N].components;if(e)for(var r=0;r<e.length;r++){var o=e[r];if(ln(o,n)[R]===t)return o}else if(ln(G,n)[R]===t)return G;return-1}(e,n);(o=function(n,t,e){return{lView:n,nodeIndex:t,native:e,component:void 0,directives:void 0,localRefs:void 0}}(e,r,(t=ln(r,e))[P])).component=n,dt(n,o),dt(o.native,o)}else{var o;t=ln((o=e).nodeIndex,o.lView)}return t}(n),n)}(n)}finally{Kn(!1)}}(this.context)},n.prototype.attachToViewContainerRef=function(n){if(this._appRef)throw new Error("This view is already attached directly to the ApplicationRef!");this._viewContainerRef=n},n.prototype.detachFromAppRef=function(){this._appRef=null},n.prototype.attachToAppRef=function(n){if(this._viewContainerRef)throw new Error("This view is already attached to a ViewContainer!");this._appRef=n},n.prototype._lookUpContext=function(){return this._context=en(this._lView[S][this._componentIndex])},n}(),Te=function(n){function e(t){var e=n.call(this,t,null,-1)||this;return e._view=t,e}return t(e,n),e.prototype.detectChanges=function(){Lt(this._view)},e.prototype.checkNoChanges=function(){!function(n){Kn(!0);try{Lt(n)}finally{Kn(!1)}}(this._view)},Object.defineProperty(e.prototype,"context",{get:function(){return null},enumerable:!0,configurable:!0}),e}(Se);function Pe(n,e,r){return Ce||(Ce=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return t(e,n),e}(n)),new Ce(an(e,r))}var He=function(){function n(n){this.nativeElement=n}return n.__NG_ELEMENT_ID__=function(){return Ae(n)},n}(),Ae=function(n){return Pe(n,Qn(),Mn())},Ve=function(){return function(){}}(),Re=function(){return function(){}}(),Fe=new(function(){return function(n){this.full=n,this.major=n.split(".")[0],this.minor=n.split(".")[1],this.patch=n.split(".").slice(2).join(".")}}())("7.2.0+137.sha-9260b5e"),Me=function(n){function e(t){var e=n.call(this)||this;return e.ngModule=t,e}return t(e,n),e.prototype.resolveComponentFactory=function(n){var t=Vn(n);return new Ge(t,this.ngModule)},e}(Ee);function Qe(n){var t=[];for(var e in n)n.hasOwnProperty(e)&&t.push({propName:n[e],templateName:e});return t}var Le=new s("ROOT_CONTEXT_TOKEN",{providedIn:"root",factory:function(){return qt(xn(Ue))}}),Ue=new s("SCHEDULER_TOKEN",{providedIn:"root",factory:function(){return hn}}),Be={},Ge=function(n){function e(t,e){var o=n.call(this)||this;return o.componentDef=t,o.ngModule=e,o.componentType=t.type,o.selector=t.selectors[0][0],o.ngContentSelectors=t.ngContentSelectors?r(["*"],t.ngContentSelectors):[],o}return t(e,n),Object.defineProperty(e.prototype,"inputs",{get:function(){return Qe(this.componentDef.inputs)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"outputs",{get:function(){return Qe(this.componentDef.outputs)},enumerable:!0,configurable:!0}),e.prototype.create=function(n,t,e,r){var o,i,u=void 0===e,a=(r=r||this.ngModule)?function(n,t){return{get:function(e,r){var o=n.get(e,Be);return o!==Be||r===Be?o:t.get(e,r)}}}(n,r.injector):n,l=a.get(Ve,gt),f=a.get(Re,null),s=u?(o=this.selector,yt(i=l.createRenderer(null,this.componentDef)||Mn()[Q])?i.createElement(o,Ht):null===Ht?i.createElement(o):i.createElementNS(Ht,o)):Rt(l,e),c=this.componentDef.onPush?136:132,p=u?qt():a.get(Le),d=l.createRenderer(s,this.componentDef);e&&s&&(yt(d)?d.setAttribute(s,"ng-version",Fe.full):s.setAttribute("ng-version",Fe.full));var v,h,y=Nt(null,Vt(-1,null,1,0,null,null,null),p,c,l,d,f,a),g=Zn(y,null);try{l.begin&&l.begin();var w=Gt(s,this.componentDef,y,l,d);if(h=y[N].data[0+G],t)for(var m=0,_=y[N],b=h.projection=[],k=0;k<t.length;k++){for(var I=t[k],C=null,j=null,x=0;x<I.length;x++){_.firstTemplatePass&&(_.expandoStartIndex++,_.blueprint.splice(++m+G,0,null),_.data.splice(m+G,0,null),y.splice(m+G,0,null));var D=Ot(m,3,I[x],null,null);j?j.next=D:C=D,j=D}b.push(C)}v=Wt(w,this.componentDef,y,p,[Jt]),function(n,t,e){var r=n[N],o=Xn();n[14]?n[14][T]=e:o&&(r.childIndex=t),n[14]=e}(y,G,w),Et(y)}finally{$n(g),l.end&&l.end()}var E=new We(this.componentType,v,Pe(He,h,y),y,h);return u&&(E.hostView._tViewNode.child=h),E},e}(xe),We=function(n){function e(t,e,r,o,i){var u,a=n.call(this)||this;return a.location=r,a._rootLView=o,a._tNode=i,a.destroyCbs=[],a.instance=e,a.hostView=a.changeDetectorRef=new Te(o),a.hostView._tViewNode=(-1,null==(u=o)[N].node&&(u[N].node=Ft(u,2,-1,null,null,null)),u[H]=u[N].node),a.componentType=t,a}return t(e,n),Object.defineProperty(e.prototype,"injector",{get:function(){return new pt(this._tNode,this._rootLView)},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){this.destroyCbs.forEach(function(n){return n()}),this.destroyCbs=null,this.hostView.destroy()},e.prototype.onDestroy=function(n){this.destroyCbs.push(n)},e}(je),qe={provide:Ee,useClass:Me,deps:[Ne]},Je=function(n){function e(t,e){var r=n.call(this)||this;r._parent=e,r._bootstrapComponents=[],r.injector=r,r.destroyCbs=[];var o=function(n,e){var r=t[g]||null;return r}();return r._bootstrapComponents=o.bootstrap,r._r3Injector=function(n,t,e){return void 0===t&&(t=null),void 0===e&&(e=null),t=t||ge(),new we(n,e,t)}(t,e,[{provide:Ne,useValue:r},qe]),r.instance=r.get(t),r}return t(e,n),e.prototype.get=function(n,t,e){return void 0===t&&(t=Zt.THROW_IF_NOT_FOUND),void 0===e&&(e=kn.Default),n===Zt||n===Ne||n===Xt?this:this._r3Injector.get(n,t,e)},Object.defineProperty(e.prototype,"componentFactoryResolver",{get:function(){return this.get(Ee)},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){this.destroyCbs.forEach(function(n){return n()}),this.destroyCbs=null},e.prototype.onDestroy=function(n){this.destroyCbs.push(n)},e}(Ne);!function(n){function e(t){var e=n.call(this)||this;return e.moduleType=t,e}t(e,n),e.prototype.create=function(n){return new Je(this.moduleType,n)}}(Oe),Function,String,String;var Ke,ze=function(){function n(){}return n.__NG_ELEMENT_ID__=function(){return Xe()},n}(),Xe=function(){return function(n,t,e){if(fn(n)){var r=n.directiveStart,o=ln(n.index,t);return new Se(o,null,r)}if(3===n.type){var i=yn(t);return new Se(i,i[R],-1)}return null}(Qn(),Mn())};t(function(){return null!==Ke&&Ke.apply(this,arguments)||this},Ke=ze),function(n,t){void 0===t&&(t={});var e=t.rendererFactory||gt,r=t.sanitizer||null,o=Vn(n);o.type!=n&&(o.type=n);var i=Rt(e,t.host||o.selectors[0][0]),u=o.onPush?136:132,a=qt(t.scheduler,t.playerHandler),l=e.createRenderer(i,o),f=Nt(null,Vt(-1,null,1,0,null,null,null),a,u,e,l,void 0,t.injector||null),s=Zn(f,null);try{e.begin&&e.begin(),Wt(Gt(i,o,f,e,l,r),o,f,a,t.hostFeatures||null),Et(f),f[O]&=-2,Et(f)}finally{$n(s),e.end&&e.end()}}(function(){function n(){}return n.ngComponentDef=((i={type:e=(t={type:n,selectors:[["hello-world"]],factory:function(t){return new(t||n)},consts:1,vars:0,template:function(n,t){var e,r,o,i,u;1&n&&(e=0,r="Hello World!",o=Mn(),i=function(n,t){return yt(t)?t.createText(on(n)):t.createTextNode(on(n))}(r,o[Q]),u=Ot(e,3,i,null,null),Gn(!1),xt(i,u,o))},encapsulation:2}).type,providersResolver:null,consts:t.consts,vars:t.vars,factory:t.factory,template:t.template||null,ngContentSelectors:t.ngContentSelectors,hostBindings:t.hostBindings||null,contentQueries:t.contentQueries||null,contentQueriesRefresh:t.contentQueriesRefresh||null,attributes:t.attributes||null,declaredInputs:o={},inputs:null,outputs:null,exportAs:t.exportAs||null,onChanges:(r=e.prototype).ngOnChanges||null,onInit:r.ngOnInit||null,doCheck:r.ngDoCheck||null,afterContentInit:r.ngAfterContentInit||null,afterContentChecked:r.ngAfterContentChecked||null,afterViewInit:r.ngAfterViewInit||null,afterViewChecked:r.ngAfterViewChecked||null,onDestroy:r.ngOnDestroy||null,onPush:t.changeDetection===d.OnPush,directiveDefs:null,pipeDefs:null,selectors:t.selectors,viewQuery:t.viewQuery||null,features:t.features||null,data:t.data||{},encapsulation:t.encapsulation||I.Emulated,id:"c",styles:t.styles||j,_:null})._=""+{toString:function(){var n=t.directives,e=t.features,r=t.pipes;i.id+=Tn++,i.inputs=An(t.inputs,o),i.outputs=An(t.outputs),e&&e.forEach(function(n){return n(i)}),i.directiveDefs=n?function(){return("function"==typeof n?n():n).map(Pn)}:null,i.pipeDefs=r?function(){return("function"==typeof r?r():r).map(Hn)}:null}},i),n;var t,e,r,o,i}())}();
//# sourceMappingURL=main.js.map
