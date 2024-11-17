"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[2730],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=p(r),f=a,b=s["".concat(c,".").concat(f)]||s[f]||u[f]||o;return r?n.createElement(b,l(l({ref:t},d),{},{components:r})):n.createElement(b,l({ref:t},d))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8364:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},l=void 0,i={unversionedId:"backend/Redis/\u6301\u4e45\u5316",id:"backend/Redis/\u6301\u4e45\u5316",title:"\u6301\u4e45\u5316",description:"\u63d0\u4f9b\u4e86\u4e24\u79cd\u6301\u4e45\u5316\u65b9\u6848\uff1aRDB\uff08Redis Database Backup\uff09\u548c AOF\uff08Append Only File\uff09",source:"@site/docs/backend/Redis/\u6301\u4e45\u5316.md",sourceDirName:"backend/Redis",slug:"/backend/Redis/\u6301\u4e45\u5316",permalink:"/my-blog/docs/backend/Redis/\u6301\u4e45\u5316",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/backend/Redis/\u6301\u4e45\u5316.md",tags:[],version:"current",frontMatter:{},sidebar:"backendSidebar",previous:{title:"\u4e3b\u4ece\u590d\u5236",permalink:"/my-blog/docs/backend/Redis/\u4e3b\u4ece\u590d\u5236"},next:{title:"\u64cd\u4f5c\u5907\u5fd8",permalink:"/my-blog/docs/backend/Redis/\u64cd\u4f5c\u5907\u5fd8"}},c={},p=[{value:"RDB",id:"rdb",level:2},{value:"AOF",id:"aof",level:2},{value:"\u5199\u56de\u7b56\u7565",id:"\u5199\u56de\u7b56\u7565",level:3},{value:"AOF\u91cd\u5199",id:"aof\u91cd\u5199",level:3},{value:"\u5b9e\u8df5\u64cd\u4f5c",id:"\u5b9e\u8df5\u64cd\u4f5c",level:3}],d={toc:p},s="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u63d0\u4f9b\u4e86\u4e24\u79cd\u6301\u4e45\u5316\u65b9\u6848\uff1aRDB\uff08Redis Database Backup\uff09\u548c AOF\uff08Append Only File\uff09"),(0,a.kt)("h2",{id:"rdb"},"RDB"),(0,a.kt)("h2",{id:"aof"},"AOF"),(0,a.kt)("p",null,"\u5c06\u6240\u6709\u5199\u64cd\u4f5c\u547d\u4ee4\u8bb0\u5f55\u4e0b\u6765\uff0c\u8ffd\u52a0\u5230\u6587\u4ef6\u4e2d\uff0c\u5f53\u9700\u8981\u6062\u590d\u65f6\uff0c\u91cd\u65b0\u6267\u884c\u6587\u4ef6\u4e2d\u7684\u547d\u4ee4\u5373\u53ef"),(0,a.kt)("h3",{id:"\u5199\u56de\u7b56\u7565"},"\u5199\u56de\u7b56\u7565"),(0,a.kt)("p",null,"\u547d\u4ee4\u5e76\u975e\u76f4\u63a5\u5199\u5165\u78c1\u76d8\uff0c\u800c\u662f\u5148\u5199\u5165AOF\u7f13\u51b2\u533a\uff0c\u518d\u7531\u7f13\u51b2\u533a\u5199\u5165\u78c1\u76d8\uff0c\u4ece\u7f13\u51b2\u533a\u5199\u56de\u78c1\u76d8\u7684\u7b56\u7565\u6709\u4e09\u79cd\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6bcf\u6b21\u5199\u56de\uff08always\uff09\uff1a\u6bcf\u6b21\u5199\u64cd\u4f5c\u90fd\u4f1a\u5c06\u7f13\u51b2\u533a\u4e2d\u7684\u6570\u636e\u5199\u5165\u78c1\u76d8\uff0c\u6027\u80fd\u8f83\u5dee"),(0,a.kt)("li",{parentName:"ol"},"\u6bcf\u79d2\u5199\u56de\uff08everysec\uff09\uff1a\u6bcf\u79d2\u5c06\u7f13\u51b2\u533a\u4e2d\u7684\u6570\u636e\u5199\u5165\u78c1\u76d8\uff0c\u5982\u679c\u4e00\u79d2\u5185\u5b95\u673a\uff0c\u4f1a\u4e22\u5931\u4e00\u79d2\u5185\u7684\u6570\u636e"),(0,a.kt)("li",{parentName:"ol"},"\u4e0d\u5199\u56de\uff08no\uff09\uff1a\u4e0d\u4e3b\u52a8\u5199\u56de\u78c1\u76d8\uff0c\u7531\u64cd\u4f5c\u7cfb\u7edf\u51b3\u5b9a\u4f55\u65f6\u5199\u56de\uff0c\u6027\u80fd\u6700\u597d\uff0c\u4f46\u6570\u636e\u5b89\u5168\u6027\u6700\u5dee")),(0,a.kt)("h3",{id:"aof\u91cd\u5199"},"AOF\u91cd\u5199"),(0,a.kt)("p",null,"AOF\u6587\u4ef6\u8fc7\u5927\u65f6\uff0c\u4f1a\u8fdb\u884c\u91cd\u5199\uff0c\u91cd\u5199\u8fc7\u7a0b\u4f1a\u521b\u5efa\u4e00\u4e2a\u4e34\u65f6\u6587\u4ef6\uff0c\u5c06\u5f53\u524d\u5185\u5b58\u4e2d\u7684\u6570\u636e\u4ee5\u547d\u4ee4\u7684\u65b9\u5f0f\u5199\u5165\u4e34\u65f6\u6587\u4ef6\uff0c\u7136\u540e\u5c06\u4e34\u65f6\u6587\u4ef6\u66ff\u6362\u6389\u539f\u6765\u7684AOF\u6587\u4ef6\uff0c\u4ece\u800c\u51cf\u5c0fAOF\u6587\u4ef6\u7684\u5927\u5c0f"),(0,a.kt)("h3",{id:"\u5b9e\u8df5\u64cd\u4f5c"},"\u5b9e\u8df5\u64cd\u4f5c"))}u.isMDXComponent=!0}}]);