(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4131)}])},2980:function(e,r,n){"use strict";n.d(r,{Z:function(){return o}});var t=n(5893);function o(){return(0,t.jsx)("footer",{id:"l-footer",children:(0,t.jsxs)("small",{className:"footer-copylight",children:["Copyright \xa92019-",(new Date).getFullYear()," Access Mirai / NGRI. All rights reserved."]})})}},8418:function(e,r,n){"use strict";function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,o,i=[],l=!0,a=!1;try{for(n=n.call(e);!(l=(t=n.next()).done)&&(i.push(t.value),!r||i.length!==r);l=!0);}catch(c){a=!0,o=c}finally{try{l||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var i,l=(i=n(7294))&&i.__esModule?i:{default:i},a=n(6273),c=n(387),u=n(7190);var s={};function f(e,r,n,t){if(e&&a.isLocalURL(r)){e.prefetch(r,n,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;s[r+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var r,n=!1!==e.prefetch,t=c.useRouter(),i=l.default.useMemo((function(){var r=o(a.resolveHref(t,e.href,!0),2),n=r[0],i=r[1];return{href:n,as:e.as?a.resolveHref(t,e.as):i||n}}),[t,e.href,e.as]),d=i.href,h=i.as,p=e.children,v=e.replace,y=e.shallow,j=e.scroll,m=e.locale;"string"===typeof p&&(p=l.default.createElement("a",null,p));var b=(r=l.default.Children.only(p))&&"object"===typeof r&&r.ref,x=o(u.useIntersection({rootMargin:"200px"}),2),g=x[0],w=x[1],E=l.default.useCallback((function(e){g(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,g]);l.default.useEffect((function(){var e=w&&n&&a.isLocalURL(d),r="undefined"!==typeof m?m:t&&t.locale,o=s[d+"%"+h+(r?"%"+r:"")];e&&!o&&f(t,d,h,{locale:r})}),[h,d,w,m,n,t]);var I={ref:E,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,n,t,o,i,l,c){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==l&&t.indexOf("#")>=0&&(l=!1),r[o?"replace":"push"](n,t,{shallow:i,locale:c,scroll:l}))}(e,t,d,h,v,y,j,m)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),a.isLocalURL(d)&&f(t,d,h,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var M="undefined"!==typeof m?m:t&&t.locale,_=t&&t.isLocaleDomain&&a.getDomainLocale(h,M,t&&t.locales,t&&t.domainLocales);I.href=_||a.addBasePath(a.addLocale(h,M,t&&t.defaultLocale))}return l.default.cloneElement(r,I)};r.default=d},7190:function(e,r,n){"use strict";function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,o,i=[],l=!0,a=!1;try{for(n=n.call(e);!(l=(t=n.next()).done)&&(i.push(t.value),!r||i.length!==r);l=!0);}catch(c){a=!0,o=c}finally{try{l||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,n=e.rootMargin,t=e.disabled||!a,u=i.useRef(),s=o(i.useState(!1),2),f=s[0],d=s[1],h=o(i.useState(r?r.current:null),2),p=h[0],v=h[1],y=i.useCallback((function(e){u.current&&(u.current(),u.current=void 0),t||f||e&&e.tagName&&(u.current=function(e,r,n){var t=function(e){var r=e.rootMargin||"",n=c.get(r);if(n)return n;var t=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r=t.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;r&&n&&r(n)}))}),e);return c.set(r,n={id:r,observer:o,elements:t}),n}(n),o=t.id,i=t.observer,l=t.elements;return l.set(e,r),i.observe(e),function(){l.delete(e),i.unobserve(e),0===l.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{root:p,rootMargin:n}))}),[t,p,n,f]);return i.useEffect((function(){if(!a&&!f){var e=l.requestIdleCallback((function(){return d(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[f]),i.useEffect((function(){r&&v(r.current)}),[r]),[y,f]};var i=n(7294),l=n(9311),a="undefined"!==typeof IntersectionObserver;var c=new Map},4131:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return c}});var t=n(5893),o=n(2980),i=n(9008),l=n(1664);function a(){return(0,t.jsx)("header",{id:"l-header",children:(0,t.jsx)("nav",{id:"l-navi",children:(0,t.jsxs)("ul",{className:"navi-list",children:[(0,t.jsx)("li",{children:(0,t.jsx)(l.default,{href:"/",children:(0,t.jsx)("a",{children:"Home"})})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"https://forum.ngri.jp/forum/",children:"Forum"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"https://w.atwiki.jp/ngri/",children:"Wiki"})})]})})})}function c(){return(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)(i.default,{children:(0,t.jsx)("title",{children:"NGRI"})}),(0,t.jsx)(a,{}),(0,t.jsxs)("main",{className:"main",children:[(0,t.jsx)("h1",{className:"title",children:"NGRI \u30ca\u30df\u30a6\u30c1\u30b0\u30e9\u30fc\u30c9\u7814\u7a76\u6240"}),(0,t.jsx)("h2",{children:"\u3069\u3093\u306a\u3084\u3064\u3089\uff1f"}),(0,t.jsx)("p",{children:"\u30b2\u30fc\u30e0\u3068\u304bMinecraft\u306eMOD\u3068\u304b\u4f5c\u3063\u3066\u308b\u5b66\u751f\u305f\u3061\u3060\u3088\u3002"}),(0,t.jsx)("h2",{children:"\u3067\u3001\u5177\u4f53\u7684\u306b\u3069\u3093\u306a\u30b2\u30fc\u30e0\u4f5c\u3063\u3066\u3093\u306e\uff1f"}),(0,t.jsxs)("p",{children:["\u4e3b\u306b2D\u306e\u30c9\u30c3\u30c8\u7d75RPG\u3092\u4f5c\u3063\u3066\u308b\u3088\u3002",(0,t.jsx)("br",{}),"\u3067\u3082\u672a\u3060\u5b8c\u6210\u306b\u306f\u81f3\u3063\u3066\u306a\u3044\u3093\u3060\u3002"]}),(0,t.jsx)("h2",{children:"\u3068\u3053\u308d\u3067\u30ca\u30df\u30a6\u30c1\u30b0\u30e9\u30fc\u30c9\u3063\u3066\u4f55\uff1f"}),(0,t.jsxs)("p",{children:["\u3042\u308b\u7802\u6f20\u3067\u304b\u3064\u3066\u6804\u3048\u305f\u6587\u660e\u306e\u529b\u3092\u4f7f\u3044\u307e\u304f\u3063\u3066\u51fa\u6765\u305f\u6d77\u4e0a\u90fd\u5e02\u3002",(0,t.jsx)("br",{}),"\u30d1\u30e9\u30ec\u30eb\u30ef\u30fc\u30eb\u30c9\u306b\u5b58\u5728\u3057\u3001\u6642\u7a7a\u304c\u5c11\u3057\u637b\u3058\u66f2\u304c\u3063\u3066\u3044\u308b\u3002",(0,t.jsx)("br",{}),"\u5411\u3053\u3046\u306e\u65b9\u304c10\u5e74\u9032\u3093\u3067\u3044\u308b\u3002",(0,t.jsx)("br",{}),"NGRI\u306f\u305d\u306e\u90fd\u5e02\u306e\u5730\u4e0b\u306b\u5b58\u5728\u3059\u308b\u7814\u7a76\u6240\u3002"]}),(0,t.jsx)("h2",{children:"\u304a\u3049\u3001\u306a\u3093\u304b\u9762\u767d\u305d\u3046\uff01"}),(0,t.jsxs)("p",{children:["Discord\u306e\u30d5\u30a1\u30f3\u30b5\u30fc\u30d0\u30fc\u306b\u53c2\u52a0\u3059\u308c\u3070\u6700\u65b0\u60c5\u5831\u304c\u3044\u3061\u65e9\u304fGET\u51fa\u6765\u308b\u305e\uff01",(0,t.jsx)("br",{}),"\u3057\u304b\u3082\u71b1\u72c2\u7684\u30d5\u30a1\u30f3\u3068\u8a8d\u3081\u3089\u308c\u308c\u3070\u30b2\u30fc\u30e0\u5236\u4f5c\u306b\u30a2\u30a4\u30c7\u30a2\u30de\u30f3\u3068\u3057\u3066\u53c2\u52a0\u3059\u308b\u3053\u3068\u3082\u51fa\u6765\u308b\u305e\uff01",(0,t.jsx)("br",{}),(0,t.jsx)("a",{href:"https://discord.gg/2Q9vh2PQSX",children:"\u4eca\u3059\u3050\u53c2\u52a0\uff01"})]})]}),(0,t.jsx)(o.Z,{})]})}},9008:function(e,r,n){e.exports=n(5443)},1664:function(e,r,n){e.exports=n(8418)}},function(e){e.O(0,[774,888,179],(function(){return r=5301,e(e.s=r);var r}));var r=e.O();_N_E=r}]);