/*! For license information please see 6ca475f2.31bbd523.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[471617],{317257:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>u,metadata:()=>a,toc:()=>i});var n=t(824246),o=t(511151);const u={id:"plugin-azure-devops-backend.azuredevopsapi.getreadme",title:"AzureDevOpsApi.getReadme()",description:"API reference for AzureDevOpsApi.getReadme()"},s=void 0,a={id:"reference/plugin-azure-devops-backend.azuredevopsapi.getreadme",title:"AzureDevOpsApi.getReadme()",description:"API reference for AzureDevOpsApi.getReadme()",source:"@site/../docs/reference/plugin-azure-devops-backend.azuredevopsapi.getreadme.md",sourceDirName:"reference",slug:"/reference/plugin-azure-devops-backend.azuredevopsapi.getreadme",permalink:"/docs/reference/plugin-azure-devops-backend.azuredevopsapi.getreadme",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-azure-devops-backend.azuredevopsapi.getreadme.md",tags:[],version:"current",frontMatter:{id:"plugin-azure-devops-backend.azuredevopsapi.getreadme",title:"AzureDevOpsApi.getReadme()",description:"API reference for AzureDevOpsApi.getReadme()"}},c={},i=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-azure-devops-backend",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-azure-devops-backend"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-azure-devops-backend.azuredevopsapi",children:(0,n.jsx)(r.code,{children:"AzureDevOpsApi"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-azure-devops-backend.azuredevopsapi.getreadme",children:(0,n.jsx)(r.code,{children:"getReadme"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"getReadme(host: string, org: string, project: string, repo: string): Promise<{\n        url: string;\n        content: string;\n    }>;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"host"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"org"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"project"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"repo"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:"Promise<{ url: string; content: string; }>"})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,t){var n,u={},i=null,l=null;for(n in void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(l=r.ref),r)s.call(r,n)&&!c.hasOwnProperty(n)&&(u[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===u[n]&&(u[n]=r[n]);return{$$typeof:o,type:e,key:i,ref:l,props:u,_owner:a.current}}r.Fragment=u,r.jsx=i,r.jsxs=i},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function v(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||h}function g(){}function b(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=v.prototype;var _=b.prototype=new g;_.constructor=b,y(_,v.prototype),_.isPureReactComponent=!0;var j=Array.isArray,x=Object.prototype.hasOwnProperty,k={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function R(e,r,n){var o,u={},s=null,a=null;if(null!=r)for(o in void 0!==r.ref&&(a=r.ref),void 0!==r.key&&(s=""+r.key),r)x.call(r,o)&&!S.hasOwnProperty(o)&&(u[o]=r[o]);var c=arguments.length-2;if(1===c)u.children=n;else if(1<c){for(var i=Array(c),l=0;l<c;l++)i[l]=arguments[l+2];u.children=i}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===u[o]&&(u[o]=c[o]);return{$$typeof:t,type:e,key:s,ref:a,props:u,_owner:k.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var O=/\/+/g;function w(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function z(e,r,o,u,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case t:case n:c=!0}}if(c)return s=s(c=e),e=""===u?"."+w(c,0):u,j(s)?(o="",null!=e&&(o=e.replace(O,"$&/")+"/"),z(s,r,o,"",(function(e){return e}))):null!=s&&(E(s)&&(s=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(O,"$&/")+"/")+e)),r.push(s)),1;if(c=0,u=""===u?".":u+":",j(e))for(var i=0;i<e.length;i++){var l=u+w(a=e[i],i);c+=z(a,r,o,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),i=0;!(a=e.next()).done;)c+=z(a=a.value,r,o,l=u+w(a,i++),s);else if("object"===a)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return c}function C(e,r,t){if(null==e)return e;var n=[],o=0;return z(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function P(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},A={transition:null},D={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:A,ReactCurrentOwner:k};r.Children={map:C,forEach:function(e,r,t){C(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return C(e,(function(){r++})),r},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=v,r.Fragment=o,r.Profiler=s,r.PureComponent=b,r.StrictMode=u,r.Suspense=l,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),u=e.key,s=e.ref,a=e._owner;if(null!=r){if(void 0!==r.ref&&(s=r.ref,a=k.current),void 0!==r.key&&(u=""+r.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(i in r)x.call(r,i)&&!S.hasOwnProperty(i)&&(o[i]=void 0===r[i]&&void 0!==c?c[i]:r[i])}var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){c=Array(i);for(var l=0;l<i;l++)c[l]=arguments[l+2];o.children=c}return{$$typeof:t,type:e.type,key:u,ref:s,props:o,_owner:a}},r.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},r.createElement=R,r.createFactory=function(e){var r=R.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:i,render:e}},r.isValidElement=E,r.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:P}},r.memo=function(e,r){return{$$typeof:f,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=A.transition;A.transition={};try{e()}finally{A.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return $.current.useCallback(e,r)},r.useContext=function(e){return $.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return $.current.useDeferredValue(e)},r.useEffect=function(e,r){return $.current.useEffect(e,r)},r.useId=function(){return $.current.useId()},r.useImperativeHandle=function(e,r,t){return $.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return $.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return $.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return $.current.useMemo(e,r)},r.useReducer=function(e,r,t){return $.current.useReducer(e,r,t)},r.useRef=function(e){return $.current.useRef(e)},r.useState=function(e){return $.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return $.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return $.current.useTransition()},r.version="18.2.0"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>a,ah:()=>u});var n=t(667294);const o=n.createContext({});function u(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const s={};function a({components:e,children:r,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||s:u(e),n.createElement(o.Provider,{value:a},r)}}}]);