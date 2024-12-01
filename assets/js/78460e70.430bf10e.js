"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[9746],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),d=o,m=s["".concat(l,".").concat(d)]||s[d]||f[d]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1359:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},i="\u524d\u7aef",c={unversionedId:"frontend/intro",id:"frontend/intro",title:"\u524d\u7aef",description:"\u8fd9\u91cc\u53ef\u4ee5\u770b\u5230\uff1a",source:"@site/docs/frontend/intro.md",sourceDirName:"frontend",slug:"/frontend/intro",permalink:"/my-blog/docs/frontend/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"frontendSidebar",next:{title:"\u5de5\u7a0b\u5316",permalink:"/my-blog/docs/category/\u5de5\u7a0b\u5316"}},l={},u=[],p={toc:u},s="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u524d\u7aef"},"\u524d\u7aef"),(0,o.kt)("p",null,"\u8fd9\u91cc\u53ef\u4ee5\u770b\u5230\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e00\u4e9b\u8131\u80ce\u4e8e\u4e2a\u4eba\u60f3\u6cd5\u7684\u5c0f\u5de5\u5177\u5f00\u53d1\u8bb0\u5f55"),(0,o.kt)("li",{parentName:"ul"},"\u5728\u5b9e\u9645\u5de5\u4f5c\u4e2d\u9047\u5230\u7684\u90e8\u5206\u4e1a\u52a1\u573a\u666f\u4ee5\u53ca\u89e3\u51b3\u65b9\u6848"),(0,o.kt)("li",{parentName:"ul"},"\u524d\u7aef\u5de5\u7a0b\u5316\u8fd9\u4e2a\u6cdb\u9886\u57df\u4e0b\u90e8\u5206\u6982\u5ff5\u7684\u5b66\u4e60\u8bb0\u5f55\u548c\u7b80\u5355\u5b9e\u8df5\uff08\u5982\u4e00\u4e9b\u9879\u76ee\u7ba1\u7406\u6a21\u5f0f\u3001CI/CD\u7b49\uff09"),(0,o.kt)("li",{parentName:"ul"},"\u4e00\u4e9b\u524d\u7aef\u6280\u672f\u6808\u7684\u5b66\u4e60\u7b14\u8bb0\uff0c\u6709demo\u6f14\u793a\u3001\u8e29\u5751\u8bb0\u5f55\u3001\u6e90\u7801\u5206\u6790\u7b49\uff08\u5982React\u3001Vue\u3001TS\u7b49\uff09")))}f.isMDXComponent=!0}}]);