"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[9591],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),d=l,f=s["".concat(i,".").concat(d)]||s[d]||m[d]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[s]="string"==typeof e?e:l,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6906:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(7462),l=(r(7294),r(3905));const o={},a=void 0,c={unversionedId:"\u5c0f\u5de5\u5177\u5f00\u53d1/antd-columns-tool",id:"\u5c0f\u5de5\u5177\u5f00\u53d1/antd-columns-tool",title:"antd-columns-tool",description:"\u80cc\u666f",source:"@site/docs/\u5c0f\u5de5\u5177\u5f00\u53d1/antd-columns-tool.md",sourceDirName:"\u5c0f\u5de5\u5177\u5f00\u53d1",slug:"/\u5c0f\u5de5\u5177\u5f00\u53d1/antd-columns-tool",permalink:"/my-blog/docs/\u5c0f\u5de5\u5177\u5f00\u53d1/antd-columns-tool",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u5c0f\u5de5\u5177\u5f00\u53d1/antd-columns-tool.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5c0f\u5de5\u5177\u5f00\u53d1",permalink:"/my-blog/docs/category/\u5c0f\u5de5\u5177\u5f00\u53d1"},next:{title:"react-page-cli",permalink:"/my-blog/docs/\u5c0f\u5de5\u5177\u5f00\u53d1/react-page-cli"}},i={},u=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:3},{value:"\u6548\u679c",id:"\u6548\u679c",level:3},{value:"\u6280\u672f\u70b9",id:"\u6280\u672f\u70b9",level:3}],p={toc:u},s="wrapper";function m(e){let{components:t,...o}=e;return(0,l.kt)(s,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,l.kt)("p",null,"\u5728\u8868\u683c\u6570\u636e\u6e32\u67d3\u8fd9\u4e00\u6700\u4e3a\u5e38\u89c1\u7684\u4e1a\u52a1\u573a\u666f\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u6839\u636e\u63a5\u53e3\u8fd4\u56de\u7684\u6bcf\u6761\u6570\u636e\u8bb0\u5f55\u7684\u5b57\u6bb5\u540d\u53bb\u5199columns\u914d\u7f6e\u3002"),(0,l.kt)("p",null,"\u4f46\u5f53\u67d0\u4e2a\u4e1a\u52a1\u4e2d\u5b57\u6bb5\u6570\u91cf\u591a\u8fbe\u597d\u51e0\u5341\u65f6\uff0c\u590d\u5236\u5b57\u6bb5\u540d\u5230columns\u914d\u7f6e\u4e2d\u53d8\u6210\u4e86\u4e00\u9879\u8017\u65f6\u4e14\u673a\u68b0\u7684\u5de5\u4f5c\u3002\u56e0\u6b64\u8003\u8651\u5f00\u53d1\u4e00\u6b3e\u5c0f\u5de5\u5177\uff0c\u76ee\u524d\u529f\u80fd\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7c98\u8d34\u63a5\u53e3\u8fd4\u56de\u7684JSON\u6570\u636e\u540e\uff0c\u81ea\u52a8\u8f6c\u4e3acolumns\u914d\u7f6e\uff0c\u652f\u6301\u4e00\u952e\u590d\u5236"),(0,l.kt)("li",{parentName:"ul"},"\u4ee5\u8868\u5355\u5f62\u5f0f\u6279\u91cf\u914d\u7f6ecolumns\u4e2d\u57fa\u7840\u5c5e\u6027")),(0,l.kt)("h3",{id:"\u6548\u679c"},"\u6548\u679c"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"col",src:r(9219).Z,width:"1347",height:"481"})),(0,l.kt)("h3",{id:"\u6280\u672f\u70b9"},"\u6280\u672f\u70b9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528react-syntax-highlighter\u5e93\u5b9e\u73b0\u4ee3\u7801\u5757"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528react-copy-to-clipboard\u5e93\u5b9e\u73b0\u4e00\u952e\u590d\u5236"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u4e0b\u9762\u4ee3\u7801\u5c06\u5e8f\u5217\u5316\u4e4b\u540e\u7684\u6570\u636e\u683c\u5f0f\u5316\uff0c\u5e76\u53bb\u9664JSON\u4e2d\u5c5e\u6027\u7684\u53cc\u5f15\u53f7")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javaScript"},'JSON.stringify(cols, null, 2).replace(/"([^"]+)":/g, "$1:"); //\u6307\u5b9a\u7b2c\u4e8c\u4e2a\u53c2\u6570 null \u8868\u793a\u4f7f\u7528\u9ed8\u8ba4\u7684 replacer \u51fd\u6570\uff0c\u7b2c\u4e09\u4e2a\u53c2\u6570 2 \u8868\u793a\u6bcf\u4e2a\u5c42\u7ea7\u7f29\u8fdb\u4e24\u4e2a\u7a7a\u683c\u3002\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u51fd\u6570\u5e8f\u5217\u5316\u65f6\u51fa\u73b0\u4e86\u95ee\u9898")))}m.isMDXComponent=!0},9219:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/col-e3f870fa631ddf2db9cc1e7350e60df6.gif"}}]);