(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[158],{8851:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pages",function(){return r(4482)}])},4260:function(n,e,r){"use strict";r.d(e,{Z:function(){return s}});var i=r(5893);function s(){return(0,i.jsx)("footer",{id:"l-footer",children:(0,i.jsxs)("small",{className:"footer-copylight",children:["Copyright \xa92019-",(new Date).getFullYear()," Access Mirai / NGRI. All rights reserved."]})})}},3505:function(n,e,r){"use strict";r.d(e,{Z:function(){return a}});var i=r(5893),s=r(1664),c=r.n(s),t=r(7814),l=r.n(t);function a(){return(0,i.jsxs)("header",{id:"l-header",children:[(0,i.jsx)("div",{className:l()["header-logo"],children:(0,i.jsx)("img",{className:l()["logo-img"],src:"https://forum.ngri.jp/res/logo-with-NGRI.png",alt:"NGRI\u30ed\u30b4"})}),(0,i.jsx)("nav",{id:"l-navi",children:(0,i.jsxs)("ul",{className:"navi-list",children:[(0,i.jsx)(c(),{href:"/",children:(0,i.jsx)("a",{children:(0,i.jsx)("li",{children:"Home"})})}),(0,i.jsx)(c(),{href:"/about/",children:(0,i.jsx)("a",{children:(0,i.jsx)("li",{children:"About"})})}),(0,i.jsx)(c(),{href:"/references/",children:(0,i.jsx)("a",{children:(0,i.jsx)("li",{children:"References"})})}),(0,i.jsx)("a",{href:"https://forum.ngri.jp/forum/",children:(0,i.jsx)("li",{children:"Forum"})}),(0,i.jsx)("a",{href:"https://w.atwiki.jp/ngri/",children:(0,i.jsx)("li",{children:"Wiki"})})]})})]})}},4482:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return p}});var i=r(4051),s=r.n(i),c=r(5893),t=r(4260),l=r(9008),a=r.n(l),d=r(3505),h=r(1664),o=r.n(h),u=r(2318),j=r.n(u),x=r(8100);function f(n,e,r,i,s,c,t){try{var l=n[c](t),a=l.value}catch(d){return void r(d)}l.done?e(a):Promise.resolve(a).then(i,s)}function p(){var n=(0,x.ZP)("https://forum.ngri.jp/api/article/getall/",function(){var n,e=(n=s().mark((function n(e){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(e);case 2:return n.next=4,n.sent.json();case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})),function(){var e=this,r=arguments;return new Promise((function(i,s){var c=n.apply(e,r);function t(n){f(c,i,s,t,l,"next",n)}function l(n){f(c,i,s,t,l,"throw",n)}t(void 0)}))});return function(n){return e.apply(this,arguments)}}()),e=n.data;return n.error?(0,c.jsxs)("div",{id:"l-container",children:[(0,c.jsx)(a(),{children:(0,c.jsx)("title",{children:"\u8a18\u4e8b\u4e00\u89a7\u8aad\u307f\u8fbc\u307f\u30a8\u30e9\u30fc - NGRI"})}),(0,c.jsx)(d.Z,{}),(0,c.jsxs)("main",{id:"l-main",children:[(0,c.jsx)("h1",{className:"title",children:"\u8a18\u4e8b\u4e00\u89a7\u8aad\u307f\u8fbc\u307f\u30a8\u30e9\u30fc"}),(0,c.jsxs)("div",{className:j().contents,children:[(0,c.jsx)("p",{children:"\u8a18\u4e8b\u4e00\u89a7\u306e\u8aad\u307f\u8fbc\u307f\u4e2d\u306b\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002"}),(0,c.jsx)("p",{children:(0,c.jsx)(o(),{href:"/",children:(0,c.jsx)("a",{children:"\u30c8\u30c3\u30d7\u306b\u623b\u308b"})})})]})]}),(0,c.jsx)(t.Z,{})]}):e?(0,c.jsxs)("div",{id:"l-container",children:[(0,c.jsx)(a(),{children:(0,c.jsx)("title",{children:"\u8a18\u4e8b\u4e00\u89a7 - NGRI"})}),(0,c.jsx)(d.Z,{}),(0,c.jsxs)("main",{id:"l-main",children:[(0,c.jsx)("h1",{className:"title",children:"\u8a18\u4e8b\u4e00\u89a7"}),(0,c.jsx)("div",{className:j().contents,children:(0,c.jsx)("div",{className:"grid",children:e.map((function(n,e){return(0,c.jsx)(o(),{href:"/pages/read?id=".concat(e+1),children:(0,c.jsxs)("a",{className:"card",children:[(0,c.jsx)("h2",{children:n.name}),(0,c.jsx)("p",{children:n.description}),(0,c.jsxs)("p",{children:["\u30bf\u30b0\uff1a",n.tags.join("\u30fb")]}),(0,c.jsxs)("p",{children:["\u4f5c\u6210\u65e5\uff1a",m(n.created)]}),(0,c.jsxs)("p",{children:["\u6700\u7d42\u66f4\u65b0\u65e5\uff1a",m(n.modified)]})]})},e)}))})})]}),(0,c.jsx)(t.Z,{})]}):(0,c.jsxs)("div",{id:"l-container",children:[(0,c.jsx)(a(),{children:(0,c.jsx)("title",{children:"\u8aad\u307f\u8fbc\u307f\u4e2d - NGRI"})}),(0,c.jsx)(d.Z,{}),(0,c.jsxs)("main",{id:"l-main",children:[(0,c.jsx)("h1",{className:"title",children:"\u8aad\u307f\u8fbc\u307f\u4e2d"}),(0,c.jsx)("div",{className:j().contents,children:(0,c.jsx)("p",{children:"\u8a18\u4e8b\u4e00\u89a7\u3092\u8aad\u307f\u8fbc\u307f\u4e2d\u3067\u3059..."})})]}),(0,c.jsx)(t.Z,{})]})}function m(n){var e=n.split("-");return"".concat(e[0],"\u5e74").concat(e[1],"\u6708").concat(e[2],"\u65e5")}},7814:function(n){n.exports={"header-logo":"Header_header-logo__70IlS","logo-img":"Header_logo-img__cHToE"}},2318:function(){}},function(n){n.O(0,[996,100,774,888,179],(function(){return e=8851,n(n.s=e);var e}));var e=n.O();_N_E=e}]);