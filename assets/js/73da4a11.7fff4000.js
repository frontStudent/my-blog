"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[8172],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},807:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={},l=void 0,i={unversionedId:"frontend/React/react\u96c6\u6210\u9ad8\u5fb7\u5730\u56fe",id:"frontend/React/react\u96c6\u6210\u9ad8\u5fb7\u5730\u56fe",title:"react\u96c6\u6210\u9ad8\u5fb7\u5730\u56fe",description:"\u5f00\u6e90\u5e93\u7b80\u4ecb",source:"@site/docs/frontend/React/react\u96c6\u6210\u9ad8\u5fb7\u5730\u56fe.md",sourceDirName:"frontend/React",slug:"/frontend/React/react\u96c6\u6210\u9ad8\u5fb7\u5730\u56fe",permalink:"/my-blog/docs/frontend/React/react\u96c6\u6210\u9ad8\u5fb7\u5730\u56fe",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/React/react\u96c6\u6210\u9ad8\u5fb7\u5730\u56fe.md",tags:[],version:"current",frontMatter:{},sidebar:"frontendSidebar",previous:{title:"react\u4f7f\u7528svg",permalink:"/my-blog/docs/frontend/React/react\u4f7f\u7528svg"},next:{title:"useControllableValue",permalink:"/my-blog/docs/frontend/React/useControllableValue"}},c={},u=[{value:"\u5f00\u6e90\u5e93\u7b80\u4ecb",id:"\u5f00\u6e90\u5e93\u7b80\u4ecb",level:2},{value:"react-amap\u6e90\u7801\u5206\u6790",id:"react-amap\u6e90\u7801\u5206\u6790",level:2},{value:"\u9ad8\u5fb7sdk\u52a0\u8f7d",id:"\u9ad8\u5fb7sdk\u52a0\u8f7d",level:3},{value:"map\u72b6\u6001\u7ba1\u7406",id:"map\u72b6\u6001\u7ba1\u7406",level:3},{value:"\u9700\u8981\u7ba1\u7406\u54ea\u4e9b\u72b6\u6001",id:"\u9700\u8981\u7ba1\u7406\u54ea\u4e9b\u72b6\u6001",level:4},{value:"\u72b6\u6001\u7ba1\u7406\u65b9\u5f0f",id:"\u72b6\u6001\u7ba1\u7406\u65b9\u5f0f",level:4},{value:"hooks",id:"hooks",level:3},{value:"usePortal",id:"useportal",level:4},{value:"useEventProperties",id:"useeventproperties",level:4},{value:"useSettingProperties",id:"usesettingproperties",level:4},{value:"useSetStatus",id:"usesetstatus",level:4}],s={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5f00\u6e90\u5e93\u7b80\u4ecb"},"\u5f00\u6e90\u5e93\u7b80\u4ecb"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ElemeFE/react-amap"},"https://github.com/ElemeFE/react-amap")),(0,a.kt)("p",null,"\u4f46\u8fd9\u4e2a\u5e93\u5f88\u957f\u65f6\u95f4\u4e0d\u7ef4\u62a4\u4e86"),(0,a.kt)("p",null,"\u53e6\u4e00\u4e2a\u66f4\u65b0\u7684\u5e93\u63a8\u8350: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/uiwjs/react-amap"},"https://github.com/uiwjs/react-amap")),(0,a.kt)("h2",{id:"react-amap\u6e90\u7801\u5206\u6790"},"react-amap\u6e90\u7801\u5206\u6790"),(0,a.kt)("h3",{id:"\u9ad8\u5fb7sdk\u52a0\u8f7d"},"\u9ad8\u5fb7sdk\u52a0\u8f7d"),(0,a.kt)("h3",{id:"map\u72b6\u6001\u7ba1\u7406"},"map\u72b6\u6001\u7ba1\u7406"),(0,a.kt)("h4",{id:"\u9700\u8981\u7ba1\u7406\u54ea\u4e9b\u72b6\u6001"},"\u9700\u8981\u7ba1\u7406\u54ea\u4e9b\u72b6\u6001"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"AMap"),(0,a.kt)("li",{parentName:"ul"},"map"),(0,a.kt)("li",{parentName:"ul"},"container")),(0,a.kt)("h4",{id:"\u72b6\u6001\u7ba1\u7406\u65b9\u5f0f"},"\u72b6\u6001\u7ba1\u7406\u65b9\u5f0f"),(0,a.kt)("p",null,"useReducer + useContext\n\u7279\u6b8a\u7684\u662f\u8fd9\u91cc\u7684reducer\u51fd\u6570\u4e2d\u6ca1\u6709\u6839\u636eaction.type\u6765\u533a\u5206\uff0c\u800c\u662f\u76f4\u63a5\u5c06action\u5f80state\u4e2d\u5408\u5e76\uff0c\u5e94\u8be5\u662f\u6240\u7ba1\u7406\u7684\u72b6\u6001\u8f83\u5c11\u4e14\u72b6\u6001\u7684\u53d8\u5316\u65b9\u5f0f\u5e76\u4e0d\u590d\u6742\u7684\u7f18\u6545\uff0c\u5e76\u6ca1\u6709\u901a\u8fc7type\u533a\u5206\u7684\u5fc5\u8981"),(0,a.kt)("h3",{id:"hooks"},"hooks"),(0,a.kt)("h4",{id:"useportal"},"usePortal"),(0,a.kt)("h4",{id:"useeventproperties"},"useEventProperties"),(0,a.kt)("h4",{id:"usesettingproperties"},"useSettingProperties"),(0,a.kt)("h4",{id:"usesetstatus"},"useSetStatus"))}d.isMDXComponent=!0}}]);