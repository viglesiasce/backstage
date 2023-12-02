/*! For license information please see 46cb2ad6.f39f7bbf.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[500289],{954971:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=t(824246),r=t(511151);const i={id:"index",title:"Building Backend Plugins and Modules",sidebar_label:"Overview",description:"Building backend plugins and modules using the new backend system"},s=void 0,a={id:"backend-system/building-plugins-and-modules/index",title:"Building Backend Plugins and Modules",description:"Building backend plugins and modules using the new backend system",source:"@site/../docs/backend-system/building-plugins-and-modules/01-index.md",sourceDirName:"backend-system/building-plugins-and-modules",slug:"/backend-system/building-plugins-and-modules/index",permalink:"/docs/backend-system/building-plugins-and-modules/index",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/backend-system/building-plugins-and-modules/01-index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"index",title:"Building Backend Plugins and Modules",sidebar_label:"Overview",description:"Building backend plugins and modules using the new backend system"},sidebar:"docs",previous:{title:"Migration Guide",permalink:"/docs/backend-system/building-backends/migrating"},next:{title:"Testing",permalink:"/docs/backend-system/building-plugins-and-modules/testing"}},l={},c=[{value:"Creating a new Plugin",id:"creating-a-new-plugin",level:2},{value:"Plugins",id:"plugins",level:2},{value:"Modules",id:"modules",level:2},{value:"HTTP Handlers",id:"http-handlers",level:3},{value:"Database Access",id:"database-access",level:3},{value:"Customization",id:"customization",level:2},{value:"Extension Points",id:"extension-points",level:3},{value:"Configuration",id:"configuration",level:3}];function u(e){const n=Object.assign({blockquote:"blockquote",p:"p",strong:"strong",a:"a",em:"em",h2:"h2",code:"code",pre:"pre",h3:"h3"},(0,r.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"NOTE: The new backend system is in alpha, and some plugins do not yet fully implement it."})}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["NOTE: If you have an existing backend and/or backend plugins that are not yet\nusing the new backend system, see ",(0,o.jsx)(n.a,{href:"/docs/backend-system/building-plugins-and-modules/migrating",children:"migrating"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["This section covers how to build your own backend ",(0,o.jsx)(n.a,{href:"/docs/backend-system/architecture/plugins",children:"plugins"})," and\n",(0,o.jsx)(n.a,{href:"/docs/backend-system/architecture/modules",children:"modules"}),". They are sometimes collectively referred to as\nbackend ",(0,o.jsx)(n.em,{children:"features"}),", and are the building blocks that adopters add to their\n",(0,o.jsx)(n.a,{href:"/docs/backend-system/architecture/backends",children:"backends"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"creating-a-new-plugin",children:"Creating a new Plugin"}),"\n",(0,o.jsxs)(n.p,{children:["This guide assumes that you already have a Backend project set up. Even if you only want to develop a single plugin for publishing, we still recommend that you do so in a standard Backstage monorepo project, as you often end up needing multiple packages. For instructions on how to set up a new project, see our ",(0,o.jsx)(n.a,{href:"/docs/getting-started/#prerequisites",children:"getting started"})," documentation."]}),"\n",(0,o.jsxs)(n.p,{children:["To create a Backend plugin, run ",(0,o.jsx)(n.code,{children:"yarn new"}),", select ",(0,o.jsx)(n.code,{children:"backend-plugin"}),", and fill out the rest of the prompts. This will create a new package at ",(0,o.jsx)(n.code,{children:"plugins/<pluginId>-backend"}),", which will be the main entrypoint for your plugin."]}),"\n",(0,o.jsx)(n.h2,{id:"plugins",children:"Plugins"}),"\n",(0,o.jsx)(n.p,{children:"A basic backend plugin might look as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"// src/plugin.ts\nimport {\n  createBackendPlugin,\n  coreServices,\n} from '@backstage/backend-plugin-api';\nimport { createExampleRouter } from './router';\n\nexport const examplePlugin = createBackendPlugin({\n  pluginId: 'example',\n  register(env) {\n    env.registerInit({\n      deps: {\n        // Declare dependencies to services that you want to consume\n        logger: coreServices.logger,\n        httpRouter: coreServices.httpRouter,\n      },\n      async init({\n        // Requested service instances get injected as per above\n        logger,\n        httpRouter,\n      }) {\n        // Perform your initialization and access the services as needed\n        const example = createExampleRouter(logger);\n        logger.info('Hello from example plugin');\n        httpRouter.use(example);\n      },\n    });\n  },\n});\n\n// src/index.ts\nexport { examplePlugin as default } from './plugin';\n"})}),"\n",(0,o.jsxs)(n.p,{children:["When you depend on ",(0,o.jsx)(n.code,{children:"plugin"})," scoped services, you'll receive an instance of them\nthat's specific to your plugin. In the example above, the logger might tag\nmessages with your plugin ID, and the HTTP router might prefix API routes with\nyour plugin ID, depending on the implementation used."]}),"\n",(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"/docs/backend-system/architecture/naming-patterns",children:"the article on naming patterns"})," for\ndetails on how to best choose names/IDs for plugins and related backend system\nitems."]}),"\n",(0,o.jsx)(n.h2,{id:"modules",children:"Modules"}),"\n",(0,o.jsxs)(n.p,{children:["Backend modules are used to extend ",(0,o.jsx)(n.a,{href:"/docs/backend-system/architecture/plugins",children:"plugins"})," or other modules with\nadditional features or change existing behavior. They must always be installed\nin the same backend instance as the plugin or module that they extend, and may only extend a single plugin and modules from that plugin at a time.\nModules interact with their target plugin or module using the ",(0,o.jsx)(n.a,{href:"../architecture/05-extension-points.md",children:"extension\npoints"})," registered by the plugin, while also being\nable to depend on the ",(0,o.jsx)(n.a,{href:"/docs/backend-system/architecture/services",children:"services"})," of the target plugin.\nThat last point is worth reiterating: injected ",(0,o.jsx)(n.code,{children:"plugin"})," scoped services will be\nthe exact\nsame ones as the target plugin will receive later, i.e. they will be scoped\nusing the target ",(0,o.jsx)(n.code,{children:"pluginId"})," of the module."]}),"\n",(0,o.jsxs)(n.p,{children:["A module depends on the extension points exported by the target plugin's library\npackage, for example ",(0,o.jsx)(n.code,{children:"@backstage/plugin-catalog-node"}),", and does not directly\ndeclare a dependency on the plugin package itself. This is to avoid a direct\ndependency and potentially cause duplicate installations of the plugin package,\nwhile duplicate installations of library packages should always be supported.\nModules with extension points typically export their extension points from the same\npackage however, since the extension points are generally only intended for internal\ncustomizations where package versions can be kept in sync."]}),"\n",(0,o.jsxs)(n.p,{children:["To create a Backend module, run ",(0,o.jsx)(n.code,{children:"yarn new"}),", select ",(0,o.jsx)(n.code,{children:"backend-module"}),", and fill out the rest of the prompts. This will create a new package at ",(0,o.jsx)(n.code,{children:"plugins/<pluginId>-backend-module-<moduleId>"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The following is an example of how to create a module that adds a new processor\nusing the ",(0,o.jsx)(n.code,{children:"catalogProcessingExtensionPoint"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"// src/module.ts\nimport { createBackendModule } from '@backstage/backend-plugin-api';\nimport { catalogProcessingExtensionPoint } from '@backstage/plugin-catalog-node';\nimport { MyCustomProcessor } from './MyCustomProcessor';\n\nexport const catalogModuleExampleCustomProcessor = createBackendModule({\n  pluginId: 'catalog',\n  moduleId: 'example-custom-processor',\n  register(env) {\n    env.registerInit({\n      deps: {\n        catalog: catalogProcessingExtensionPoint,\n        logger: coreServices.logger,\n      },\n      async init({ catalog }) {\n        catalog.addProcessor(new MyCustomProcessor(logger));\n      },\n    });\n  },\n});\n\n// src/index.ts\nexport { catalogModuleExampleCustomProcessor as default } from './module';\n"})}),"\n",(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"/docs/backend-system/architecture/naming-patterns",children:"the article on naming patterns"})," for\ndetails on how to best choose names/IDs for modules and related backend system\nitems."]}),"\n",(0,o.jsxs)(n.p,{children:["Notice that we're placing the extension point we want to interact with in the\n",(0,o.jsx)(n.code,{children:"deps"})," option, while also depending on the logger service at the same time. When\ninitializing modules we can depend on both extension points and services\ninterchangeably. You can also depend on multiple extension points at once, in\ncase the implementation of the module requires it."]}),"\n",(0,o.jsx)(n.p,{children:"Each module package should only contain a single module, but this module may\nextend multiple extension points. A module may also use configuration to\nconditionally enable or disable certain extensions. This pattern should only be\nused for extensions that are related to each other, otherwise it is best to\ncreate a separate module package with its own module."}),"\n",(0,o.jsx)(n.h3,{id:"http-handlers",children:"HTTP Handlers"}),"\n",(0,o.jsxs)(n.p,{children:["Since modules have access to the same services as the plugin they extend, they\nare also able to register their own HTTP handlers. For more information about\nthe HTTP service, see ",(0,o.jsx)(n.a,{href:"/docs/backend-system/core-services/index",children:"core services"}),". When\nregistering HTTP handlers, it is important to try to avoid any future conflict\nwith the plugin itself, or other modules. A recommended naming pattern is to\nregister the handlers under the ",(0,o.jsx)(n.code,{children:"/modules/<module-id>"})," path, where ",(0,o.jsx)(n.code,{children:"<module-id>"}),"\nis the kebab-case ID of the module, for example\n",(0,o.jsx)(n.code,{children:"/modules/example-custom-processor/v1/validators"}),". In a standard backend setup\nthe full path would then be\n",(0,o.jsx)(n.code,{children:"<backendUrl>/api/catalog/modules/example-custom-processor/v1/validators"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"database-access",children:"Database Access"}),"\n",(0,o.jsxs)(n.p,{children:["The same applies for modules that perform their own migrations and interact with\nthe database. They will run on the same logical database instance as the target\nplugin, so care must be taken to choose table names that do not risk colliding\nwith those of the plugin. A recommended naming pattern is ",(0,o.jsx)(n.code,{children:"<package name>__<table name>"}),", for example the ",(0,o.jsx)(n.code,{children:"@backstage/backend-tasks"})," package creates\ntables named ",(0,o.jsx)(n.code,{children:"backstage_backend_tasks__<table>"}),". If you use the default ",(0,o.jsxs)(n.a,{href:"https://knexjs.org/guide/migrations.html",children:[(0,o.jsx)(n.code,{children:"Knex"}),"\nmigration facilities"]}),", you will also\nwant to make sure that it uses similarly prefixed migration state tables for its\ninternal bookkeeping needs, so they do not collide with the main ones used by\nthe plugin itself. You can do this as follows:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"await knex.migrate.latest({\n  directory: migrationsDir,\n  tableName: 'backstage_backend_tasks__knex_migrations',\n});\n"})}),"\n",(0,o.jsx)(n.h2,{id:"customization",children:"Customization"}),"\n",(0,o.jsx)(n.p,{children:"There are several ways of configuring and customizing plugins and modules."}),"\n",(0,o.jsx)(n.h3,{id:"extension-points",children:"Extension Points"}),"\n",(0,o.jsxs)(n.p,{children:["Whenever you want to allow modules to configure your plugin dynamically, for\nexample in the way that the catalog backend lets catalog modules inject\nadditional entity providers, you can use the extension points mechanism. This is\ndescribed in detail with code examples in ",(0,o.jsx)(n.a,{href:"../architecture/05-extension-points.md",children:"the extension points architecture\narticle"}),", while the following is a more\nslim example of how to implement an extension point for a plugin:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { createExtensionPoint } from '@backstage/backend-plugin-api';\n\n// This is the extension point interface, which is how modules interact with your plugin.\nexport interface ExamplesExtensionPoint {\n  addExample(example: Example): void;\n}\n\n// This is the extension point reference that encapsulates the above interface.\nexport const examplesExtensionPoint =\n  createExtensionPoint<ExamplesExtensionPoint>({\n    id: 'example.examples',\n  });\n\n// The following shows how your plugin would register the extension point\n// and use the features that other modules have registered.\nexport const examplePlugin = createBackendPlugin({\n  pluginId: 'example',\n  register(env) {\n    // We can share data between the extension point implementation and our init method.\n    const examples = new Array<Example>();\n\n    // This registers the implementation of the extension point, which is internal to your plugin.\n    env.registerExtensionPoint(examplesExtensionPoint, {\n      addExample(example) {\n        examples.push(example);\n      },\n    });\n\n    env.registerInit({\n      deps: { logger: coreServices.logger },\n      async init({ logger }) {\n        // We can access `examples` directly\n        logger.info(`The following examples have been registered: ${examples}`);\n      },\n    });\n  },\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:"This is a very common type of extension point, one where modules are given the opportunity to register features to be used by the plugin. In this case modules are able to register examples that are then used by our examples plugin."}),"\n",(0,o.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsxs)(n.p,{children:["Your plugin or module can leverage the app configuration to configure its own\ninternal behavior. You do this by adding a dependency on ",(0,o.jsx)(n.code,{children:"coreServices.rootConfig"}),"\nand reading from that. This pattern is a good fit especially for customization\nthat needs to be different across environments."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { coreServices } from '@backstage/backend-plugin-api';\n\nexport const examplePlugin = createBackendPlugin({\n  pluginId: 'example',\n  register(env) {\n    env.registerInit({\n      deps: { config: coreServices.rootConfig },\n      async init({ config }) {\n        // Here you can read from the current config as you see fit, e.g.:\n        const value = config.getOptionalString('example.value');\n      },\n    });\n  },\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Before adding custom configuration options, make sure to read ",(0,o.jsx)(n.a,{href:"../../conf/index.md",children:"the configuration\ndocs"}),", in particular the section on ",(0,o.jsx)(n.a,{href:"../../conf/defining.md",children:"defining configuration\nfor your own plugins"})," which explains how to establish a\nconfiguration schema for your specific plugin."]})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(u,e)})):u(e)}},371426:(e,n,t)=>{var o=t(827378),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var o,i={},c=null,u=null;for(o in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(u=n.ref),n)s.call(n,o)&&!l.hasOwnProperty(o)&&(i[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===i[o]&&(i[o]=n[o]);return{$$typeof:r,type:e,key:c,ref:u,props:i,_owner:a.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},541535:(e,n)=>{var t=Symbol.for("react.element"),o=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.iterator;var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,f={};function x(e,n,t){this.props=e,this.context=n,this.refs=f,this.updater=t||g}function y(){}function b(e,n,t){this.props=e,this.context=n,this.refs=f,this.updater=t||g}x.prototype.isReactComponent={},x.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=x.prototype;var k=b.prototype=new y;k.constructor=b,m(k,x.prototype),k.isPureReactComponent=!0;var v=Array.isArray,w=Object.prototype.hasOwnProperty,j={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function P(e,n,o){var r,i={},s=null,a=null;if(null!=n)for(r in void 0!==n.ref&&(a=n.ref),void 0!==n.key&&(s=""+n.key),n)w.call(n,r)&&!_.hasOwnProperty(r)&&(i[r]=n[r]);var l=arguments.length-2;if(1===l)i.children=o;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===i[r]&&(i[r]=l[r]);return{$$typeof:t,type:e,key:s,ref:a,props:i,_owner:j.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var S=/\/+/g;function T(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function C(e,n,r,i,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var l=!1;if(null===e)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case t:case o:l=!0}}if(l)return s=s(l=e),e=""===i?"."+T(l,0):i,v(s)?(r="",null!=e&&(r=e.replace(S,"$&/")+"/"),C(s,n,r,"",(function(e){return e}))):null!=s&&(E(s)&&(s=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(s,r+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(S,"$&/")+"/")+e)),n.push(s)),1;if(l=0,i=""===i?".":i+":",v(e))for(var c=0;c<e.length;c++){var u=i+T(a=e[c],c);l+=C(a,n,r,u,s)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(a=e.next()).done;)l+=C(a=a.value,n,r,u=i+T(a,c++),s);else if("object"===a)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function I(e,n,t){if(null==e)return e;var o=[],r=0;return C(e,o,"","",(function(e){return n.call(t,e,r++)})),o}function R(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},$={transition:null},B={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:$,ReactCurrentOwner:j};n.Children={map:I,forEach:function(e,n,t){I(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return I(e,(function(){n++})),n},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=x,n.Fragment=r,n.Profiler=s,n.PureComponent=b,n.StrictMode=i,n.Suspense=u,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,n.cloneElement=function(e,n,o){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=m({},e.props),i=e.key,s=e.ref,a=e._owner;if(null!=n){if(void 0!==n.ref&&(s=n.ref,a=j.current),void 0!==n.key&&(i=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in n)w.call(n,c)&&!_.hasOwnProperty(c)&&(r[c]=void 0===n[c]&&void 0!==l?l[c]:n[c])}var c=arguments.length-2;if(1===c)r.children=o;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:t,type:e.type,key:i,ref:s,props:r,_owner:a}},n.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},n.createElement=P,n.createFactory=function(e){var n=P.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:c,render:e}},n.isValidElement=E,n.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:R}},n.memo=function(e,n){return{$$typeof:d,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=$.transition;$.transition={};try{e()}finally{$.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return O.current.useCallback(e,n)},n.useContext=function(e){return O.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return O.current.useDeferredValue(e)},n.useEffect=function(e,n){return O.current.useEffect(e,n)},n.useId=function(){return O.current.useId()},n.useImperativeHandle=function(e,n,t){return O.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return O.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return O.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return O.current.useMemo(e,n)},n.useReducer=function(e,n,t){return O.current.useReducer(e,n,t)},n.useRef=function(e){return O.current.useRef(e)},n.useState=function(e){return O.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return O.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return O.current.useTransition()},n.version="18.2.0"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>a,ah:()=>i});var o=t(667294);const r=o.createContext({});function i(e){const n=o.useContext(r);return o.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const s={};function a({components:e,children:n,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||s:i(e),o.createElement(r.Provider,{value:a},n)}}}]);