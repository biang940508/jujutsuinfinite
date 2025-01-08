(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[581],{97931:function(e,t,r){Promise.resolve().then(r.bind(r,31847))},31847:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(27573),a=r(69389),o=r(27482);function i(){let e=(0,a.useTranslations)("NotFoundPage");return(0,n.jsx)("div",{className:"max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8",children:(0,n.jsxs)("div",{className:"max-w-lg mx-auto flex-1 flex-row-reverse gap-12 items-center justify-between md:max-w-none md:flex",children:[(0,n.jsx)("div",{className:"flex-1 max-w-lg",children:(0,n.jsx)("img",{alt:"404-Error-amico",src:"/404-amico.webp",loading:"lazy"})}),(0,n.jsxs)("div",{className:"mt-12 flex-1 max-w-lg space-y-3 md:mt-0",children:[(0,n.jsx)("h3",{className:"text-indigo-600 font-semibold",children:"404 Error"}),(0,n.jsx)("p",{className:"text-gray-800 text-4xl font-semibold sm:text-5xl",children:e("title")}),(0,n.jsx)("p",{className:"text-gray-600",children:"Sorry, the page you are looking for could not be found or has been removed."}),(0,n.jsx)(o.rU,{href:"/",className:"text-indigo-600 duration-150 hover:text-indigo-400 font-medium inline-flex items-center gap-x-1",children:(0,n.jsxs)("div",{className:"flex items-center gap-x-1",children:["Go Back Home",(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-5 h-5",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z",clipRule:"evenodd"})})]})})]})]})})}},43289:function(e,t){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}Object.defineProperty(t,"__esModule",{value:!0}),t.extends=r},69389:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(34317),a=r(67574),o=r(50133),i=r(97473);t.useFormatter=n.useFormatter,t.useTranslations=n.useTranslations,t.useLocale=a.default,t.NextIntlClientProvider=o.default,Object.keys(i).forEach(function(e){"default"===e||Object.prototype.hasOwnProperty.call(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})})},27619:function(e,t,r){"use strict";var n=r(98359),a=r(38947);n.default,t.QZ=a.default},39169:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(43289),a=r(7653),o=r(67574),i=r(10076),l=r(92310),u=a&&a.__esModule?a:{default:a};let c=a.forwardRef(function(e,t){let{locale:r,localePrefix:a,...c}=e,s=o.default(),f=r||s,d=i.getLocalePrefix(f,a);return u.default.createElement(l.default,n.extends({ref:t,locale:f,localePrefixMode:a.mode,prefix:d},c))});c.displayName="ClientLink",t.default=c},38947:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(43289),a=r(7653),o=r(67574),i=r(90204),l=r(82362),u=r(39169),c=r(12008),s=r(49049),f=r(87729),d=a&&a.__esModule?a:{default:a};t.default=function(e){let t=i.receiveLocalizedNavigationRoutingConfig(e);function r(){let e=o.default();if(!t.locales.includes(e))throw Error(void 0);return e}let m=a.forwardRef(function(e,a){let{href:o,locale:i,...c}=e,s=r(),f=i||s;return d.default.createElement(u.default,n.extends({ref:a,href:l.compileLocalizedPathname({locale:f,pathname:o,params:"object"==typeof o?o.params:void 0,pathnames:t.pathnames}),locale:i,localePrefix:t.localePrefix},c))});function h(e){let{href:r,locale:n}=e;return l.compileLocalizedPathname({...l.normalizeNameOrNameWithParams(r),locale:n,pathnames:t.pathnames})}return m.displayName="Link",{Link:m,redirect:function(e){let n=h({href:e,locale:r()});for(var a=arguments.length,o=Array(a>1?a-1:0),i=1;i<a;i++)o[i-1]=arguments[i];return c.clientRedirect({pathname:n,localePrefix:t.localePrefix},...o)},permanentRedirect:function(e){let n=h({href:e,locale:r()});for(var a=arguments.length,o=Array(a>1?a-1:0),i=1;i<a;i++)o[i-1]=arguments[i];return c.clientPermanentRedirect({pathname:n,localePrefix:t.localePrefix},...o)},usePathname:function(){let e=s.default(t.localePrefix),n=r();return a.useMemo(()=>e?l.getRoute(n,e,t.pathnames):e,[n,e])},useRouter:function(){let e=f.default(t.localePrefix),n=r();return a.useMemo(()=>({...e,push(t){for(var r,a=arguments.length,o=Array(a>1?a-1:0),i=1;i<a;i++)o[i-1]=arguments[i];let l=h({href:t,locale:(null===(r=o[0])||void 0===r?void 0:r.locale)||n});return e.push(l,...o)},replace(t){for(var r,a=arguments.length,o=Array(a>1?a-1:0),i=1;i<a;i++)o[i-1]=arguments[i];let l=h({href:t,locale:(null===(r=o[0])||void 0===r?void 0:r.locale)||n});return e.replace(l,...o)},prefetch(t){for(var r,a=arguments.length,o=Array(a>1?a-1:0),i=1;i<a;i++)o[i-1]=arguments[i];let l=h({href:t,locale:(null===(r=o[0])||void 0===r?void 0:r.locale)||n});return e.prefetch(l,...o)}}),[e,n])},getPathname:h}}},98359:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(43289),a=r(7653),o=r(90204),i=r(39169),l=r(12008),u=r(49049),c=r(87729),s=a&&a.__esModule?a:{default:a};t.default=function(e){let t=o.receiveSharedNavigationRoutingConfig(e),r=a.forwardRef(function(e,r){return s.default.createElement(i.default,n.extends({ref:r,localePrefix:t.localePrefix},e))});return r.displayName="Link",{Link:r,redirect:function(e){for(var r=arguments.length,n=Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];return l.clientRedirect({pathname:e,localePrefix:t.localePrefix},...n)},permanentRedirect:function(e){for(var r=arguments.length,n=Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];return l.clientPermanentRedirect({pathname:e,localePrefix:t.localePrefix},...n)},usePathname:function(){return u.default(t.localePrefix)},useRouter:function(){return c.default(t.localePrefix)}}}},12008:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(67574),a=r(34112);function o(e){return function(t){let r;try{r=n.default()}catch(e){throw e}for(var a=arguments.length,o=Array(a>1?a-1:0),i=1;i<a;i++)o[i-1]=arguments[i];return e({...t,locale:r},...o)}}let i=o(a.baseRedirect),l=o(a.basePermanentRedirect);t.clientPermanentRedirect=l,t.clientRedirect=i},49049:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(67754),a=r(7653),o=r(67574),i=r(10076);t.default=function(e){let t=n.usePathname(),r=o.default();return a.useMemo(()=>{if(!t)return t;let n=i.getLocalePrefix(r,e);return i.hasPathnamePrefixed(n,t)?i.unprefixPathname(t,n):t},[r,e,t])}},87729:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(67754),a=r(7653),o=r(67574),i=r(10076),l=r(46548),u=r(82362);t.default=function(e){let t=n.useRouter(),r=o.default(),c=n.usePathname();return a.useMemo(()=>{function n(t){return function(n,a){let{locale:o,...s}=a||{};l.default(c,r,o);let f=[function(t,n){let a=window.location.pathname,o=u.getBasePath(c);o&&(a=a.replace(o,""));let l=n||r,s=i.getLocalePrefix(l,e);return i.localizeHref(t,l,r,a,s)}(n,o)];return Object.keys(s).length>0&&f.push(s),t(...f)}}return{...t,push:n(t.push),replace:n(t.replace),prefetch:n(t.prefetch)}},[r,e,c,t])}},92310:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(43289),a=r(87659),o=r(67754),i=r(7653),l=r(67574),u=r(10076),c=r(46548);function s(e){return e&&e.__esModule?e:{default:e}}var f=s(a),d=s(i);let m=i.forwardRef(function(e,t){let{href:r,locale:a,localePrefixMode:s,onClick:m,prefetch:h,prefix:p,...v}=e,g=o.usePathname(),E=l.default(),y=a!==E,[x,_]=i.useState(()=>u.isLocalizableHref(r)&&("never"!==s||y)?u.prefixHref(r,p):r);return i.useEffect(()=>{g&&_(u.localizeHref(r,a,E,g,p))},[E,r,a,g,p]),y&&(h=!1),d.default.createElement(f.default,n.extends({ref:t,href:x,hrefLang:y?a:void 0,onClick:function(e){c.default(g,E,a),m&&m(e)},prefetch:h},v))});m.displayName="ClientLink",t.default=m},90204:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(70486);t.receiveLocalizedNavigationRoutingConfig=function(e){return{...e,localePrefix:n.receiveLocalePrefixConfig(null==e?void 0:e.localePrefix)}},t.receiveSharedNavigationRoutingConfig=function(e){return{...e,localePrefix:n.receiveLocalePrefixConfig(null==e?void 0:e.localePrefix)}}},34112:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(67754),a=r(10076);function o(e){return function(t){let r=a.getLocalePrefix(t.locale,t.localePrefix),n="never"!==t.localePrefix.mode&&a.isLocalizableHref(t.pathname)?a.prefixPathname(r,t.pathname):t.pathname;for(var o=arguments.length,i=Array(o>1?o-1:0),l=1;l<o;l++)i[l-1]=arguments[l];return e(n,...i)}}let i=o(n.redirect),l=o(n.permanentRedirect);t.basePermanentRedirect=l,t.baseRedirect=i},46548:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(13070),a=r(82362);t.default=function(e,t,r){if(!(r!==t&&null!=r)||!e)return;let o=a.getBasePath(e);document.cookie="".concat(n.COOKIE_LOCALE_NAME,"=").concat(r,"; path=").concat(""!==o?o:"/","; max-age=").concat(n.COOKIE_MAX_AGE,"; sameSite=").concat(n.COOKIE_SAME_SITE)}},82362:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(10076);function a(e){let t=new URLSearchParams;for(let[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.append(r,String(e))}):t.set(r,String(n));return"?"+t.toString()}t.compileLocalizedPathname=function(e){let{pathname:t,locale:r,params:n,pathnames:o,query:i}=e;function l(e){let t=o[e];return t||(t=e),t}function u(e){let t="string"==typeof e?e:e[r];return n&&Object.entries(n).forEach(e=>{let[r,n]=e;t=Array.isArray(n)?t.replace(RegExp("(\\[)?\\[...".concat(r,"\\](\\])?"),"g"),n.map(e=>String(e)).join("/")):t.replace("[".concat(r,"]"),String(n))}),i&&(t+=a(i)),t}if("string"==typeof t)return u(l(t));{let{pathname:e,...r}=t;return{...r,pathname:u(l(e))}}},t.getBasePath=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.pathname;return"/"===e?t:t.replace(e,"")},t.getRoute=function(e,t,r){let a=n.getSortedPathnames(Object.keys(r)),o=decodeURI(t);for(let t of a){let a=r[t];if("string"==typeof a){if(n.matchesPathname(a,o))return t}else if(n.matchesPathname(a[e],o))return t}return t},t.normalizeNameOrNameWithParams=function(e){return"string"==typeof e?{pathname:e}:e},t.serializeSearchParams=a},34317:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(97473);function a(e,t){return function(){try{return t(...arguments)}catch(e){throw Error(void 0)}}}let o=a(0,n.useTranslations),i=a(0,n.useFormatter);t.useFormatter=i,t.useTranslations=o,Object.keys(n).forEach(function(e){"default"===e||Object.prototype.hasOwnProperty.call(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})})},67574:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(67754),a=r(31720),o=r(13070);t.default=function(){let e;let t=n.useParams();try{e=a.useLocale()}catch(r){if("string"!=typeof(null==t?void 0:t[o.LOCALE_SEGMENT_NAME]))throw r;e=t[o.LOCALE_SEGMENT_NAME]}return e}},70486:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.receiveLocalePrefixConfig=function(e){return"object"==typeof e?e:{mode:e||"always"}}},50133:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(43289),a=r(7653),o=r(88060),i=a&&a.__esModule?a:{default:a};t.default=function(e){let{locale:t,...r}=e;if(!t)throw Error(void 0);return i.default.createElement(o.IntlProvider,n.extends({locale:t},r))}},13070:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.COOKIE_LOCALE_NAME="NEXT_LOCALE",t.COOKIE_MAX_AGE=31536e3,t.COOKIE_SAME_SITE="lax",t.HEADER_LOCALE_NAME="X-NEXT-INTL-LOCALE",t.LOCALE_SEGMENT_NAME="locale"},10076:function(e,t,r){"use strict";var n=r(57708);function a(e){return("object"==typeof e?null==e.host&&null==e.hostname:!/^[a-z]+:/i.test(e))&&!function(e){let t="object"==typeof e?e.pathname:e;return null!=t&&!t.startsWith("/")}(e)}function o(e,t){let r;return"string"==typeof e?r=i(t,e):(r={...e},e.pathname&&(r.pathname=i(t,e.pathname))),r}function i(e,t){let r=e;return/^\/(\?.*)?$/.test(t)&&(t=t.slice(1)),r+=t}function l(e,t){return t===e||t.startsWith("".concat(e,"/"))}function u(e){let t=function(){try{return"true"===n.env._next_intl_trailing_slash}catch(e){return!1}}();if("/"!==e){let r=e.endsWith("/");t&&!r?e+="/":!t&&r&&(e=e.slice(0,-1))}return e}function c(e){let t=e.replace(/\[\[(\.\.\.[^\]]+)\]\]/g,"?(.*)").replace(/\[(\.\.\.[^\]]+)\]/g,"(.+)").replace(/\[([^\]]+)\]/g,"([^/]+)");return new RegExp("^".concat(t,"$"))}function s(e){return e.includes("[[...")}function f(e){return e.includes("[...")}function d(e){return e.includes("[")}function m(e,t){let r=e.split("/"),n=t.split("/"),a=Math.max(r.length,n.length);for(let e=0;e<a;e++){let t=r[e],a=n[e];if(!t&&a)return -1;if(t&&!a)return 1;if(t||a){if(!d(t)&&d(a))return -1;if(d(t)&&!d(a))return 1;if(!f(t)&&f(a))return -1;if(f(t)&&!f(a))return 1;if(!s(t)&&s(a))return -1;if(s(t)&&!s(a))return 1}}return 0}Object.defineProperty(t,"__esModule",{value:!0}),t.getLocalePrefix=function(e,t){var r;return"never"!==t.mode&&(null===(r=t.prefixes)||void 0===r?void 0:r[e])||"/"+e},t.getSortedPathnames=function(e){return e.sort(m)},t.hasPathnamePrefixed=l,t.isLocalizableHref=a,t.localizeHref=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,n=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;if(!a(e))return e;let u=l(i,n);return(t!==r||u)&&null!=i?o(e,i):e},t.matchesPathname=function(e,t){let r=u(e),n=u(t);return c(r).test(n)},t.normalizeTrailingSlash=u,t.prefixHref=o,t.prefixPathname=i,t.templateToRegex=c,t.unprefixPathname=function(e,t){return e.replace(new RegExp("^".concat(t)),"")||"/"}},87659:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return a.a}});var n=r(65469),a=r.n(n),o={};for(var i in n)"default"!==i&&(o[i]=(function(e){return n[e]}).bind(0,i));r.d(t,o)},67754:function(e,t,r){"use strict";r.r(t);var n=r(534),a={};for(var o in n)"default"!==o&&(a[o]=(function(e){return n[e]}).bind(0,o));r.d(t,a)},57708:function(e,t,r){"use strict";var n,a;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(a=r.g.process)?void 0:a.env)?r.g.process:r(13928)},13928:function(e){!function(){var t={229:function(e){var t,r,n,a=e.exports={};function o(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var u=[],c=!1,s=-1;function f(){c&&n&&(c=!1,n.length?u=n.concat(u):s=-1,u.length&&d())}function d(){if(!c){var e=l(f);c=!0;for(var t=u.length;t;){for(n=u,u=[];++s<t;)n&&n[s].run();s=-1,t=u.length}n=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}a.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new m(e,t)),1!==u.length||c||l(d)},m.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=h,a.addListener=h,a.once=h,a.off=h,a.removeListener=h,a.removeAllListeners=h,a.emit=h,a.prependListener=h,a.prependOnceListener=h,a.listeners=function(e){return[]},a.binding=function(e){throw Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw Error("process.chdir is not supported")},a.umask=function(){return 0}}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={exports:{}},i=!0;try{t[e](o,o.exports,n),i=!1}finally{i&&delete r[e]}return o.exports}n.ab="//";var a=n(229);e.exports=a}()},88060:function(e,t,r){"use strict";e.exports=r(39956)},31720:function(e,t,r){"use strict";e.exports=r(36993)},97473:function(e,t,r){"use strict";e.exports=r(55667)},4601:function(e,t,r){"use strict";var n=r(7653),a=r(88597);function o(){let e=n.useContext(a.IntlContext);if(!e)throw Error(void 0);return e}t.useIntlContext=o,t.useLocale=function(){return o().locale}},36993:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4601);r(7653),r(88597),t.useLocale=n.useLocale},56835:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(25618),a=r(57816);r(7653),r(12421),r(87343),t.IntlError=n.IntlError,t.IntlErrorCode=n.IntlErrorCode,t.createFormatter=n.createFormatter,t._createFormatters=a.createFormatters,t.initializeConfig=a.initializeConfig,t.createTranslator=function(e){let{_formatters:t=a.createFormatters(),getMessageFallback:r=a.defaultGetMessageFallback,messages:o,namespace:i,onError:l=a.defaultOnError,...u}=e;return function(e,t){let{messages:r,namespace:a,...o}=e;return r=r["!"],a=n.resolveNamespace(a,"!"),n.createBaseTranslator({...o,messages:r,namespace:a})}({...u,onError:l,formatters:t,getMessageFallback:r,messages:{"!":o},namespace:i?"!.".concat(i):"!"},0)}},25618:function(e,t,r){"use strict";var n,a=r(7653),o=r(12421),i=r(57816),l=o&&o.__esModule?o:{default:o};function u(e,t,r){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:n+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}let c=((n={}).MISSING_MESSAGE="MISSING_MESSAGE",n.MISSING_FORMAT="MISSING_FORMAT",n.ENVIRONMENT_FALLBACK="ENVIRONMENT_FALLBACK",n.INSUFFICIENT_PATH="INSUFFICIENT_PATH",n.INVALID_MESSAGE="INVALID_MESSAGE",n.INVALID_KEY="INVALID_KEY",n.FORMATTING_ERROR="FORMATTING_ERROR",n);class s extends Error{constructor(e,t){let r=e;t&&(r+=": "+t),super(r),u(this,"code",void 0),u(this,"originalMessage",void 0),this.code=e,t&&(this.originalMessage=t)}}function f(e,t){return e?Object.keys(e).reduce((r,n)=>(r[n]={timeZone:t,...e[n]},r),{}):e}function d(e,t,r,n){let a=i.joinPath(n,r);if(!t)throw Error(a);let o=t;return r.split(".").forEach(t=>{let r=o[t];if(null==t||null==r)throw Error(a+" (".concat(e,")"));o=r}),o}let m=365/12*86400,h={second:1,seconds:1,minute:60,minutes:60,hour:3600,hours:3600,day:86400,days:86400,week:604800,weeks:604800,month:365/12*86400,months:365/12*86400,quarter:365/12*259200,quarters:365/12*259200,year:31536e3,years:31536e3};t.IntlError=s,t.IntlErrorCode=c,t.createBaseTranslator=function(e){let t=function(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:i.defaultOnError;try{if(!t)throw Error(void 0);let n=r?d(e,t,r):t;if(!n)throw Error(r);return n}catch(t){let e=new s(c.MISSING_MESSAGE,t.message);return n(e),e}}(e.locale,e.messages,e.namespace,e.onError);return function(e){let{defaultTranslationValues:t,formats:r,formatters:n,getMessageFallback:o=i.defaultGetMessageFallback,locale:u,messagesOrError:m,namespace:h,onError:p,timeZone:v}=e;function g(e,t,r){let n=new s(t,r);return p(n),o({error:n,key:e,namespace:h})}function E(e,i,p){let E,y;if(m instanceof s)return o({error:m,key:e,namespace:h});try{E=d(u,m,e,h)}catch(t){return g(e,c.MISSING_MESSAGE,t.message)}if("object"==typeof E){let t;return g(e,Array.isArray(E)?c.INVALID_MESSAGE:c.INSUFFICIENT_PATH,t)}let x=function(e,t){if(t)return;let r=e.replace(/'([{}])/gi,"$1");return/<|{/.test(r)?void 0:r}(E,i);if(x)return x;try{y=n.getMessageFormat(E,u,function(e,t){let r=t?{...e,dateTime:f(e.dateTime,t)}:e,n=l.default.formats.date,a=t?f(n,t):n,o=l.default.formats.time,i=t?f(o,t):o;return{...r,date:{...a,...null==r?void 0:r.dateTime},time:{...i,...null==r?void 0:r.dateTime}}}({...r,...p},v),{formatters:{...n,getDateTimeFormat:(e,t)=>n.getDateTimeFormat(e,{timeZone:v,...t})}})}catch(t){return g(e,c.INVALID_MESSAGE,t.message)}try{let e=y.format(function(e){if(0===Object.keys(e).length)return;let t={};return Object.keys(e).forEach(r=>{let n,o=0,i=e[r];n="function"==typeof i?e=>{let t=i(e);return a.isValidElement(t)?a.cloneElement(t,{key:r+o++}):t}:i,t[r]=n}),t}({...t,...i}));if(null==e)throw Error(void 0);return a.isValidElement(e)||Array.isArray(e)||"string"==typeof e?e:String(e)}catch(t){return g(e,c.FORMATTING_ERROR,t.message)}}function y(e,t,r){let n=E(e,t,r);return"string"!=typeof n?g(e,c.INVALID_MESSAGE,void 0):n}return y.rich=E,y.markup=(e,t,r)=>{let n=E(e,t,r);if("string"!=typeof n){let t=new s(c.FORMATTING_ERROR,void 0);return p(t),o({error:t,key:e,namespace:h})}return n},y.raw=e=>{if(m instanceof s)return o({error:m,key:e,namespace:h});try{return d(u,m,e,h)}catch(t){return g(e,c.MISSING_MESSAGE,t.message)}},y}({...e,messagesOrError:t})},t.createFormatter=function(e){let{_formatters:t=i.createFormatters(),formats:r,locale:n,now:a,onError:o=i.defaultOnError,timeZone:l}=e;function u(e){var t;return null!==(t=e)&&void 0!==t&&t.timeZone||(l?e={...e,timeZone:l}:o(new s(c.ENVIRONMENT_FALLBACK,void 0))),e}function f(e,t,r,n){let a;try{a=function(e,t){let r;if("string"==typeof t){if(!(r=null==e?void 0:e[t])){let e=new s(c.MISSING_FORMAT,void 0);throw o(e),e}}else r=t;return r}(t,e)}catch(e){return n()}try{return r(a)}catch(e){return o(new s(c.FORMATTING_ERROR,e.message)),n()}}function d(e,a){return f(a,null==r?void 0:r.dateTime,r=>(r=u(r),t.getDateTimeFormat(n,r).format(e)),()=>String(e))}function p(){return a||(o(new s(c.ENVIRONMENT_FALLBACK,void 0)),new Date)}return{dateTime:d,number:function(e,a){return f(a,null==r?void 0:r.number,r=>t.getNumberFormat(n,r).format(e),()=>String(e))},relativeTime:function(e,r){try{var a;let o,i;let l={};r instanceof Date||"number"==typeof r?o=new Date(r):r&&(o=null!=r.now?new Date(r.now):p(),i=r.unit,l.style=r.style,l.numberingSystem=r.numberingSystem),o||(o=p());let u=(new Date(e).getTime()-o.getTime())/1e3;i||(i=function(e){let t=Math.abs(e);return t<60?"second":t<3600?"minute":t<86400?"hour":t<604800?"day":t<m?"week":t<31536e3?"month":"year"}(u)),l.numeric="second"===i?"auto":"always";let c=(a=i,Math.round(u/h[a]));return t.getRelativeTimeFormat(n,l).format(c,i)}catch(t){return o(new s(c.FORMATTING_ERROR,t.message)),String(e)}},list:function(e,a){let o=[],i=new Map,l=0;for(let t of e){let e;"object"==typeof t?(e=String(l),i.set(e,t)):e=String(t),o.push(e),l++}return f(a,null==r?void 0:r.list,e=>{let r=t.getListFormat(n,e).formatToParts(o).map(e=>"literal"===e.type?e.value:i.get(e.value)||e.value);return i.size>0?r:r.join("")},()=>String(e))},dateTimeRange:function(e,a,o){return f(o,null==r?void 0:r.dateTime,r=>(r=u(r),t.getDateTimeFormat(n,r).formatRange(e,a)),()=>[d(e),d(a)].join(" – "))}}},t.resolveNamespace=function(e,t){return e===t?void 0:e.slice((t+".").length)}},55667:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(25618),a=r(56835),o=r(57816),i=r(39956),l=r(47572),u=r(4601);r(7653),r(12421),r(87343),r(88597),t.IntlError=n.IntlError,t.IntlErrorCode=n.IntlErrorCode,t.createFormatter=n.createFormatter,t.createTranslator=a.createTranslator,t._createFormatters=o.createFormatters,t.initializeConfig=o.initializeConfig,t.IntlProvider=i.IntlProvider,t.useFormatter=l.useFormatter,t.useMessages=l.useMessages,t.useNow=l.useNow,t.useTimeZone=l.useTimeZone,t.useTranslations=l.useTranslations,t.useLocale=u.useLocale},47572:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(39956),a=r(4601),o=r(7653),i=r(25618);r(57816),r(87343),r(12421),r(88597);let l=!1,u="undefined"==typeof window;t.IntlProvider=n.IntlProvider,t.useLocale=a.useLocale,t.useFormatter=function(){let{formats:e,formatters:t,locale:r,now:n,onError:l,timeZone:u}=a.useIntlContext();return o.useMemo(()=>i.createFormatter({formats:e,locale:r,now:n,onError:l,timeZone:u,_formatters:t}),[e,t,n,r,l,u])},t.useMessages=function(){let e=a.useIntlContext();if(!e.messages)throw Error(void 0);return e.messages},t.useNow=function(e){let t=null==e?void 0:e.updateInterval,{now:r}=a.useIntlContext(),[n,i]=o.useState(r||new Date);return o.useEffect(()=>{if(!t)return;let e=setInterval(()=>{i(new Date)},t);return()=>{clearInterval(e)}},[r,t]),null==t&&r?r:n},t.useTimeZone=function(){return a.useIntlContext().timeZone},t.useTranslations=function(e){return function(e,t,r){let{defaultTranslationValues:n,formats:c,formatters:s,getMessageFallback:f,locale:d,onError:m,timeZone:h}=a.useIntlContext();return e=e["!"],t=i.resolveNamespace(t,"!"),h||l||!u||(l=!0,m(new i.IntlError(i.IntlErrorCode.ENVIRONMENT_FALLBACK,void 0))),o.useMemo(()=>i.createBaseTranslator({formatters:s,getMessageFallback:f,messages:e,defaultTranslationValues:n,namespace:t,onError:m,formats:c,locale:d,timeZone:h}),[s,f,e,n,t,m,c,d,h])}({"!":a.useIntlContext().messages},e?"!.".concat(e):"!",0)}},74335:function(e,t,r){"use strict";r.d(t,{$O:function(){return l},al:function(){return o},ck:function(){return u},he:function(){return a},k1:function(){return i},qw:function(){return c}});var n=r(57708);let a={en:"English","zh-CN":"简体中文",es:"Espa\xf1ol",hi:"हिन्दी (Hindi)",ar:"العربية (Arabic)",fr:"Fran\xe7ais",bn:"বাংলা (Bangla)",ru:"Русский",pt:"Portugu\xeas","pt-BR":"Portugu\xeas do Brasil",id:"Bahasa Indonesia",de:"Deutsch",ja:"日本語",tr:"T\xfcrk\xe7e",vi:"Tiếng Việt",th:"ไทย (Thai)",ko:"한국어",it:"Italiano",pl:"Polski",uk:"Українська",nl:"Nederlands",ms:"Bahasa Melayu","zh-TW":"繁体中文",ro:"Rom\xe2nă",el:"Ελληνικά (Ellinik\xe1)",cs:"Čeština",sv:"Svenska",hu:"Magyar",bg:"Български",he:"עברית (Hebrew)",da:"Dansk",fi:"Suomi",sk:"Slovenčina",no:"Norsk",hr:"Hrvatski",lt:"Lietuvių",sl:"Slovenščina",lv:"Latviešu",et:"Eesti"},o="en",i=Object.keys(a),l={},u="as-needed",c=e=>a[e];n.env.PORT},27482:function(e,t,r){"use strict";r.d(t,{N2:function(){return c},RO:function(){return o},jD:function(){return l},rU:function(){return a}});var n=r(74335);let{Link:a,getPathname:o,redirect:i,usePathname:l,useRouter:u}=(0,r(27619).QZ)({locales:n.k1,pathnames:n.$O,localePrefix:n.ck});function c(e,t){return"en"===t?e:e.startsWith("/")?"/".concat(t).concat(e):e}}},function(e){e.O(0,[956,469,293,286,744],function(){return e(e.s=97931)}),_N_E=e.O()}]);
//# sourceMappingURL=not-found-498dc6bba076e1ba.js.map