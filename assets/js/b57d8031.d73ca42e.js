"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[4849],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,y=f["".concat(s,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(y,i(i({ref:t},l),{},{components:r})):n.createElement(y,i({ref:t},l))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[f]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3874:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},i=void 0,c={unversionedId:"frontend/\u4e09\u4ef6\u5957\u57fa\u7840/ts/\u7c7b\u578b\u4f53\u64cd",id:"frontend/\u4e09\u4ef6\u5957\u57fa\u7840/ts/\u7c7b\u578b\u4f53\u64cd",title:"\u7c7b\u578b\u4f53\u64cd",description:"\u6761\u4ef6\u7c7b\u578b\u4e0einfer",source:"@site/docs/frontend/\u4e09\u4ef6\u5957\u57fa\u7840/ts/\u7c7b\u578b\u4f53\u64cd.md",sourceDirName:"frontend/\u4e09\u4ef6\u5957\u57fa\u7840/ts",slug:"/frontend/\u4e09\u4ef6\u5957\u57fa\u7840/ts/\u7c7b\u578b\u4f53\u64cd",permalink:"/my-blog/docs/frontend/\u4e09\u4ef6\u5957\u57fa\u7840/ts/\u7c7b\u578b\u4f53\u64cd",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/\u4e09\u4ef6\u5957\u57fa\u7840/ts/\u7c7b\u578b\u4f53\u64cd.md",tags:[],version:"current",frontMatter:{},sidebar:"frontendSidebar",previous:{title:"\u57fa\u7840",permalink:"/my-blog/docs/frontend/\u4e09\u4ef6\u5957\u57fa\u7840/ts/\u57fa\u7840"},next:{title:"worker\u7ebf\u7a0b\u6c60\u6027\u80fd\u4f18\u5316",permalink:"/my-blog/docs/frontend/\u6d4f\u89c8\u5668/worker\u7ebf\u7a0b\u6c60\u6027\u80fd\u4f18\u5316"}},s={},p=[{value:"\u6761\u4ef6\u7c7b\u578b\u4e0einfer",id:"\u6761\u4ef6\u7c7b\u578b\u4e0einfer",level:3}],l={toc:p},f="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u6761\u4ef6\u7c7b\u578b\u4e0einfer"},"\u6761\u4ef6\u7c7b\u578b\u4e0einfer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// \u83b7\u53d6\u6570\u7ec4\u4e2d\u5143\u7d20\u7c7b\u578b\ntype GetArrayType<T> = T extends (infer U)[] ? U : never\n\n// \u83b7\u53d6\u51fd\u6570\u7684\u8fd4\u56de\u503c\u7c7b\u578b\ntype GetFnReturnType<T> = T extends (...args: any[]) => infer R ? R : never\n\n// \u83b7\u53d6\u5bf9\u8c61\u5c5e\u6027\u7684\u8054\u5408\u7c7b\u578b \u534f\u53d8\u4f4d\u7f6e\ntype GetPropertyType<T> = T extends {id: infer U, name: infer U} ? U : never\n\n// \u83b7\u53d6\u51fd\u6570\u53c2\u6570\u7684\u4ea4\u53c9\u7c7b\u578b \u9006\u53d8\u4f4d\u7f6e\ntype GetFnParamsType<T> = T extends {a:(infer U) => void ? U, b:(infer U) => void} : U never\n\n")))}u.isMDXComponent=!0}}]);