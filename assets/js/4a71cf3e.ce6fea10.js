"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[5797],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,s(s({ref:t},i),{},{components:r})):n.createElement(f,s({ref:t},i))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},624:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},s=void 0,l={unversionedId:"repo/React/\u81ea\u5b9a\u4e49hooks",id:"repo/React/\u81ea\u5b9a\u4e49hooks",title:"\u81ea\u5b9a\u4e49hooks",description:"useValidJson",source:"@site/docs/repo/React/\u81ea\u5b9a\u4e49hooks.md",sourceDirName:"repo/React",slug:"/repo/React/\u81ea\u5b9a\u4e49hooks",permalink:"/my-blog/docs/repo/React/\u81ea\u5b9a\u4e49hooks",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/repo/React/\u81ea\u5b9a\u4e49hooks.md",tags:[],version:"current",frontMatter:{},sidebar:"frontendSidebar",previous:{title:"\u6e90\u7801\u5206\u6790",permalink:"/my-blog/docs/repo/React/\u6e90\u7801\u5206\u6790"},next:{title:"vue3+vite\u6253\u5305\u8e29\u5751\u8bb0\u5f55",permalink:"/my-blog/docs/repo/Vue/vue3+vite\u6253\u5305\u8e29\u5751\u8bb0\u5f55"}},u={},c=[{value:"useValidJson",id:"usevalidjson",level:3},{value:"useBuildUrl",id:"usebuildurl",level:3}],i={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"usevalidjson"},"useValidJson"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { useState, useEffect } from 'react'\n\nconst useValidJson = (json, onParseError) => {\n  const [result, setResult] = useState({ data: null, isValid: false })\n\n  useEffect(() => {\n    try {\n      const parsedData = JSON.parse(json)\n      setResult({ data: parsedData, isValid: true })\n    } catch (error) {\n      typeof onParseError === 'function' && onParseError(error)\n      setResult({ data: null, isValid: false })\n    }\n  }, [json]) // eslint-disable-line\n\n  return result\n}\n\nexport default useValidJson\n\n")),(0,a.kt)("h3",{id:"usebuildurl"},"useBuildUrl"),(0,a.kt)("p",null,"\u5904\u7406\u5728url\u8df3\u8f6c\u573a\u666f\u4e2d\u7c7b\u4f3c\n",(0,a.kt)("inlineCode",{parentName:"p"},"menuId=${menuId}&planId=${planId}&planStatus=1&closeCaseType=${closeCaseType}&dateRange=${startDate}~${endDate}"),"\u8fd9\u79cd\u53c2\u6570\u62fc\u63a5\u8f83\u957fide\u4e2d\u65e0\u6cd5\u6362\u884c\u7684\u60c5\u51b5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { useCallback } from 'react'\n\nconst useBuildUrl = () => {\n  return useCallback((baseUrl, params) => {\n    if (Object.prototype.toString.call(params) !== '[object Object]') {\n      console.error('params must be an object')\n      return baseUrl\n    }\n    const paramStr = Object.entries(params)\n      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)\n      .join('&')\n    return `${baseUrl}?${paramStr}`\n  }, [])\n}\n\nexport default useBuildUrl\n")))}d.isMDXComponent=!0}}]);