"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[3944],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,b=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},157:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},i=void 0,c={unversionedId:"backend/\u6570\u636e\u5e93&\u7f13\u5b58/Redis/\u6d88\u606f\u961f\u5217",id:"backend/\u6570\u636e\u5e93&\u7f13\u5b58/Redis/\u6d88\u606f\u961f\u5217",title:"\u6d88\u606f\u961f\u5217",description:"List\u5b9e\u73b0",source:"@site/docs/backend/\u6570\u636e\u5e93&\u7f13\u5b58/Redis/\u6d88\u606f\u961f\u5217.md",sourceDirName:"backend/\u6570\u636e\u5e93&\u7f13\u5b58/Redis",slug:"/backend/\u6570\u636e\u5e93&\u7f13\u5b58/Redis/\u6d88\u606f\u961f\u5217",permalink:"/my-blog/docs/backend/\u6570\u636e\u5e93&\u7f13\u5b58/Redis/\u6d88\u606f\u961f\u5217",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/backend/\u6570\u636e\u5e93&\u7f13\u5b58/Redis/\u6d88\u606f\u961f\u5217.md",tags:[],version:"current",frontMatter:{},sidebar:"backendSidebar",previous:{title:"\u64cd\u4f5c\u5907\u5fd8",permalink:"/my-blog/docs/backend/\u6570\u636e\u5e93&\u7f13\u5b58/Redis/\u64cd\u4f5c\u5907\u5fd8"},next:{title:"\u7f13\u5b58\u548c\u6570\u636e\u5e93\u4e00\u81f4\u6027",permalink:"/my-blog/docs/backend/\u6570\u636e\u5e93&\u7f13\u5b58/\u7f13\u5b58\u548c\u6570\u636e\u5e93\u4e00\u81f4\u6027"}},l={},s=[{value:"List\u5b9e\u73b0",id:"list\u5b9e\u73b0",level:3},{value:"\u53d1\u5e03\u8ba2\u9605\u5b9e\u73b0",id:"\u53d1\u5e03\u8ba2\u9605\u5b9e\u73b0",level:3},{value:"Stream\u5b9e\u73b0",id:"stream\u5b9e\u73b0",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"list\u5b9e\u73b0"},"List\u5b9e\u73b0"),(0,a.kt)("h3",{id:"\u53d1\u5e03\u8ba2\u9605\u5b9e\u73b0"},"\u53d1\u5e03\u8ba2\u9605\u5b9e\u73b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="\u8ba2\u9605\u8005\u7ec8\u7aef"',title:'"\u8ba2\u9605\u8005\u7ec8\u7aef"'},"redis-cli\nsubscribe channelName\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="\u53d1\u5e03\u8005\u7ec8\u7aef"',title:'"\u53d1\u5e03\u8005\u7ec8\u7aef"'},"redis-cli\npublish channelName message\n")),(0,a.kt)("h3",{id:"stream\u5b9e\u73b0"},"Stream\u5b9e\u73b0"))}d.isMDXComponent=!0}}]);