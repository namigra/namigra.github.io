(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6363:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return e(8530)}])},8530:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return f}});var r=e(5893),o=(e(8210),e(5585),e(4831),e(7294)),u=e(1163),i=e(4155).env.NEXT_PUBLIC_GA_ID;function c(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function f(n){var t=n.Component,e=n.pageProps,f=(0,u.useRouter)();return(0,o.useEffect)((function(){var n=function(n){!function(n){i&&window.gtag("config",i,{page_path:n})}(n)};return f.events.on("routeChangeComplete",n),function(){f.events.off("routeChangeComplete",n)}}),[f.events]),(0,r.jsx)(t,function(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){c(n,t,e[t])}))}return n}({},e))}},5585:function(){},8210:function(){},4831:function(){},1163:function(n,t,e){n.exports=e(387)},4155:function(n){var t,e,r=n.exports={};function o(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function i(n){if(t===setTimeout)return setTimeout(n,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(n,0);try{return t(n,0)}catch(e){try{return t.call(null,n,0)}catch(e){return t.call(this,n,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(n){t=o}try{e="function"===typeof clearTimeout?clearTimeout:u}catch(n){e=u}}();var c,f=[],a=!1,s=-1;function l(){a&&c&&(a=!1,c.length?f=c.concat(f):s=-1,f.length&&h())}function h(){if(!a){var n=i(l);a=!0;for(var t=f.length;t;){for(c=f,f=[];++s<t;)c&&c[s].run();s=-1,t=f.length}c=null,a=!1,function(n){if(e===clearTimeout)return clearTimeout(n);if((e===u||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(n);try{e(n)}catch(t){try{return e.call(null,n)}catch(t){return e.call(this,n)}}}(n)}}function p(n,t){this.fun=n,this.array=t}function m(){}r.nextTick=function(n){var t=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)t[e-1]=arguments[e];f.push(new p(n,t)),1!==f.length||a||i(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(n){return[]},r.binding=function(n){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(n){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},function(n){var t=function(t){return n(n.s=t)};n.O(0,[774,179],(function(){return t(6363),t(387)}));var e=n.O();_N_E=e}]);