/*! For license information please see 6050a7fa.9b172912.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{110:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(1),o=r(6),a=(r(122),r(121)),l={id:"environmentoptions",title:"Environment Options",sidebar_label:"Env Options"},u={id:"environmentoptions",title:"Environment Options",description:"Environment variables are in capitals. Corresponding variables are in brackets.",source:"@site/../docs/EnvironmentOptions.md",permalink:"/imperium/docs/environmentoptions",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/../docs/EnvironmentOptions.md",sidebar_label:"Env Options"},i=[{value:"Dev",id:"dev",children:[]},{value:"Core",id:"core",children:[]},{value:"Graphql",id:"graphql",children:[]},{value:"Auth",id:"auth",children:[]},{value:"User",id:"user",children:[]}],c={rightToc:i};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Environment variables are in capitals. Corresponding variables are in brackets."),Object(a.b)("h2",{id:"dev"},"Dev"),Object(a.b)("h4",{id:"development"},"Development"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"IMPERIUM_DEV_CHOKIDAR_TIMEOUT"),": Number of milliseconds to debounce changing files. Default: 200")),Object(a.b)("h4",{id:"production"},"Production"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"PROCESSES"),": Number of server processes to start in production mode. Defaults to number of CPU's available.")),Object(a.b)("h2",{id:"core"},"Core"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"PORT")," ","[port]",": Numerical port the server listens too. Default: 4001"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"NODE_ENV")," ","[nodeEnv]",": Standard env variable. Either 'production' or 'development'."),Object(a.b)("li",{parentName:"ul"},"[production]",": True if in production mode."),Object(a.b)("li",{parentName:"ul"},"[development]",": True if in development mode.")),Object(a.b)("h2",{id:"graphql"},"Graphql"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"ACCESS_TOKEN_SECRET")," ","[graphqlAccessTokenSecret]",": Defaults to 'notsecure'."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"PROTOCOL"),": The protocol the server is accessible via. Defaults to 'http'."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"HOST"),": The host the server is accessible via. Defaults to 'localhost'."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"GRAPHQL_URL")," ","[graphqlUrl]",": The URL the graphql API is accessible from. Defaults to '/api/graphql'."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"GRAPHQL_WS")," ","[graphqlWs]",": If true, enables websockets for graphql subscriptions. Defaults to false."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"GRAPHQL_CREDENTIALS_REQUIRED")," ","[graphqlCredentialsRequired]",": If true, requires credentials to access the graphql endpoint. Enabling this will cause the @imperium/auth module to not work. Defaults to false."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"GRAPHQL_CORS_ORIGIN")," ","[graphqlCors]",": If set, enables CORS and sets the accepted origin. Defaults to unset, which enables strict CORS.")),Object(a.b)("p",null,"Requires:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"[authAccessTokenSecret]")),Object(a.b)("h2",{id:"auth"},"Auth"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"AUTH_ACCESS_TOKEN_LS_NAME")," ","[authAccessTokenLsName]",": Key used for the client's localstorage of the access token. Defaults to: 'IMP.access'."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"AUTH_REFRESH_TOKEN_LS_NAME")," ","[authRefreshTokenLsName]",": Key used for the client's localstorage of the refresh token. Defaults to: 'IMP.refresh'."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"ACCESS_TOKEN_SECRET")," ","[authAccessTokenSecret]",": Defaults to 'notsecure'."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"AUTH_ACCESS_TOKEN_EXPIRES")," ","[authAccessTokenExpires]",": Time until the access token expires. Defaults to '1h'."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"AUTH_REFRESH_TOKEN_SECRET")," ","[authRefreshTokenSecret]",": Defaults to 'notsecure'."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"AUTH_REFRESH_TOKEN_EXPIRES")," ","[authRefreshTokenExpires]",": Time until the refresh token expires. Defaults to '7d'."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"AUTH_MAX_FAIL")," ","[authMaxFail]",": Maximum number of login failures allowed before lockout. Defaults to '5'."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"AUTH_MAX_COOLDOWN")," ","[authMaxCooldown]",": Time in seconds to reset lockout status. Defaults to '300'."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"AUTH_PASSWORD_SALT_ROUNDS")," ","[authPasswordSaltRounds]",": Numbers of salt rounds. Defaults to '11'."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"AUTH_RECOVERY_TOKEN_EXPIRES")," ","[authRecoveryTokenExpires]",": Time until the password recovery token expires. Defaults to '2d'."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"AUTH_ENABLE_SIGNUP")," ","[authEnableSignup]",": If true, allows signing up new users. Defaults to 'false'.")),Object(a.b)("h2",{id:"user"},"User"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"USER_SYSADMIN_NAME")," ","[userSysadminName]",": Name of the default created sysadmin. Defaults to 'sysadmin'."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"USER_SYSADMIN_EMAIL")," ","[userSysadminEmail]",": Email address of the default created sysadmin. Defaults to 'sysadmin@example.com'."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"USER_SYSADMIN_PASSWORD")," ","[userSysadminPassword]",": Initial password of the default created sysadmin. Defaults to 'password'.")))}s.isMDXComponent=!0},121:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),s=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u({},t,{},e)),r},f=function(e){var t=s(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=s(r),b=n,m=f["".concat(l,".").concat(b)]||f[b]||p[b]||a;return r?o.a.createElement(m,u({ref:t},c,{components:r})):o.a.createElement(m,u({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=b;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,l[1]=u;for(var c=2;c<a;c++)l[c]=r[c];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},122:function(e,t,r){"use strict";e.exports=r(123)},123:function(e,t,r){"use strict";var n=r(124),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,l=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,m=o?Symbol.for("react.memo"):60115,d=o?Symbol.for("react.lazy"):60116,O="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function v(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||h}function g(){}function E(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=v.prototype;var S=E.prototype=new g;S.constructor=E,n(S,v.prototype),S.isPureReactComponent=!0;var N={current:null},_=Object.prototype.hasOwnProperty,R={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,o={},l=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(l=""+t.key),t)_.call(t,n)&&!R.hasOwnProperty(n)&&(o[n]=t[n]);var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){for(var c=Array(i),s=0;s<i;s++)c[s]=arguments[s+2];o.children=c}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:a,type:e,key:l,ref:u,props:o,_owner:N.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var C=/\/+/g,P=[];function k(e,t,r,n){if(P.length){var o=P.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function D(e,t,r){return null==e?0:function e(t,r,n,o){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var i=!1;if(null===t)i=!0;else switch(u){case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case a:case l:i=!0}}if(i)return n(o,t,""===r?"."+x(t,0):r),1;if(i=0,r=""===r?".":r+":",Array.isArray(t))for(var c=0;c<t.length;c++){var s=r+x(u=t[c],c);i+=e(u,s,n,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=O&&t[O]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),c=0;!(u=t.next()).done;)i+=e(u=u.value,s=r+x(u,c++),n,o);else if("object"===u)throw n=""+t,Error(y(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return i}(e,"",t,r)}function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function U(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?M(e,n,r,(function(e){return e})):null!=e&&(T(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(C,"$&/")+"/")+r)),n.push(e))}function M(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace(C,"$&/")+"/"),D(e,U,t=k(t,a,n,o)),A(t)}var q={current:null};function L(){var e=q.current;if(null===e)throw Error(y(321));return e}var $={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:N,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return M(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;D(e,I,t=k(null,null,t,r)),A(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return M(e,t,null,(function(e){return e})),t},only:function(e){if(!T(e))throw Error(y(143));return e}},t.Component=v,t.Fragment=u,t.Profiler=c,t.PureComponent=E,t.StrictMode=i,t.Suspense=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,r){if(null==e)throw Error(y(267,e));var o=n({},e.props),l=e.key,u=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,i=N.current),void 0!==t.key&&(l=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in t)_.call(t,s)&&!R.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==c?c[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){c=Array(s);for(var f=0;f<s;f++)c[f]=arguments[f+2];o.children=c}return{$$typeof:a,type:e.type,key:l,ref:u,props:o,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=T,t.lazy=function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return L().useCallback(e,t)},t.useContext=function(e,t){return L().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return L().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return L().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return L().useLayoutEffect(e,t)},t.useMemo=function(e,t){return L().useMemo(e,t)},t.useReducer=function(e,t,r){return L().useReducer(e,t,r)},t.useRef=function(e){return L().useRef(e)},t.useState=function(e){return L().useState(e)},t.version="16.13.0"},124:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function l(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,u,i=l(e),c=1;c<arguments.length;c++){for(var s in r=Object(arguments[c]))o.call(r,s)&&(i[s]=r[s]);if(n){u=n(r);for(var f=0;f<u.length;f++)a.call(r,u[f])&&(i[u[f]]=r[u[f]])}}return i}}}]);