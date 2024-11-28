"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[7782],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),d=o,f=s["".concat(c,".").concat(d)]||s[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7687:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},i=void 0,l={unversionedId:"backend/SSM/\u539f\u7406/Springboot\u81ea\u52a8\u88c5\u914d",id:"backend/SSM/\u539f\u7406/Springboot\u81ea\u52a8\u88c5\u914d",title:"Springboot\u81ea\u52a8\u88c5\u914d",description:"\u6982\u8ff0",source:"@site/docs/backend/SSM/\u539f\u7406/Springboot\u81ea\u52a8\u88c5\u914d.md",sourceDirName:"backend/SSM/\u539f\u7406",slug:"/backend/SSM/\u539f\u7406/Springboot\u81ea\u52a8\u88c5\u914d",permalink:"/my-blog/docs/backend/SSM/\u539f\u7406/Springboot\u81ea\u52a8\u88c5\u914d",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/backend/SSM/\u539f\u7406/Springboot\u81ea\u52a8\u88c5\u914d.md",tags:[],version:"current",frontMatter:{},sidebar:"backendSidebar",previous:{title:"\u9002\u914d\u5668\u6a21\u5f0f",permalink:"/my-blog/docs/backend/JAVA/\u8bbe\u8ba1\u6a21\u5f0f/\u9002\u914d\u5668\u6a21\u5f0f"},next:{title:"bean\u751f\u547d\u5468\u671f",permalink:"/my-blog/docs/backend/SSM/\u539f\u7406/bean\u751f\u547d\u5468\u671f"}},c={},p=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:3},{value:"starter\u5f00\u53d1\u5e76\u6253\u5305\u81f3\u672c\u5730\u4ed3\u5e93",id:"starter\u5f00\u53d1\u5e76\u6253\u5305\u81f3\u672c\u5730\u4ed3\u5e93",level:3},{value:"AutoConfigurationImportFilter",id:"autoconfigurationimportfilter",level:4},{value:"\u6253\u5305\u5e76\u9a8c\u8bc1",id:"\u6253\u5305\u5e76\u9a8c\u8bc1",level:4},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:4}],u={toc:p},s="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,o.kt)("p",null,"\u5728Spring Boot\u9879\u76ee\u4e2d\u6709\u4e00\u4e2a\u6ce8\u89e3@SpringBootApplication\uff0c\u8fd9\u4e2a\u6ce8\u89e3\u662f\u5bf9\u4e09\u4e2a\u6ce8\u89e3\u8fdb\u884c\u4e86\u5c01\u88c5\uff1a@SpringBootConfiguration\u3001@EnableAutoConfiguration\u3001@ComponentScan\n\u5176\u4e2d@EnableAutoConfiguration\u662f\u5b9e\u73b0\u81ea\u52a8\u5316\u914d\u7f6e\u7684\u6838\u5fc3\u6ce8\u89e3\u3002\n\u8be5\u6ce8\u89e3\u901a\u8fc7@Import\u6ce8\u89e3\u5bfc\u5165AutoConfigurationImportSelector\uff0c\u8fd9\u4e2a\u7c7b\u5b9e\u73b0\u4e86\u4e00\u4e2a\u5bfc\u5165\u5668\u63a5\u53e3ImportSelector\u3002\u5728\u8be5\u63a5\u53e3\u4e2d\u5b58\u5728\u4e00\u4e2a\u65b9\u6cd5selectImports\uff0c\n\u8be5\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u6570\u7ec4\u4e2d\u5b58\u50a8\u7684\u5c31\u662f\u8981\u88ab\u5bfc\u5165\u5230spring\u5bb9\u5668\u4e2d\u7684\u7c7b\u7684\u5168\u7c7b\u540d\u3002\u5728AutoConfigurationImportSelector\u7c7b\u4e2d\u91cd\u5199\u4e86\u8fd9\u4e2a\u65b9\u6cd5,\n\u8be5\u65b9\u6cd5\u5185\u90e8\u5c31\u662f\u8bfb\u53d6\u4e86\u9879\u76ee\u7684classpath\u8def\u5f84\u4e0bMETA-INF/spring.factories\u6587\u4ef6\u4e2d\u7684\u6240\u914d\u7f6e\u7684\u7c7b\u7684\u5168\u7c7b\u540d\u3002\n\u5728\u8fd9\u4e9b\u914d\u7f6e\u7c7b\u4e2d\u6240\u5b9a\u4e49\u7684Bean\u4f1a\u6839\u636e\u6761\u4ef6\u6ce8\u89e3\u6240\u6307\u5b9a\u7684\u6761\u4ef6\u6765\u51b3\u5b9a\u662f\u5426\u9700\u8981\u5c06\u5176\u5bfc\u5165\u5230Spring\u5bb9\u5668\u4e2d\u3002"),(0,o.kt)("h3",{id:"starter\u5f00\u53d1\u5e76\u6253\u5305\u81f3\u672c\u5730\u4ed3\u5e93"},"starter\u5f00\u53d1\u5e76\u6253\u5305\u81f3\u672c\u5730\u4ed3\u5e93"),(0,o.kt)("p",null,"\u4f7f\u7528maven-archetype-quickstart\u65b0\u5efamaven\u9879\u76ee\uff0c\u65b0\u5efaresources/META-INF/spring-factories"),(0,o.kt)("h4",{id:"autoconfigurationimportfilter"},"AutoConfigurationImportFilter"),(0,o.kt)("h4",{id:"\u6253\u5305\u5e76\u9a8c\u8bc1"},"\u6253\u5305\u5e76\u9a8c\u8bc1"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u4e0a\u4f20: \u5728idea\u4e2d\u4f7f\u7528\u81ea\u5e26\u7684maven\u5de5\u5177 \u9009\u62e9\u70b9\u51fbinstall\u5c31\u53ef\u4ee5\u4e0a\u4f20\u5230\u672c\u5730\u4ed3\u5e93"),(0,o.kt)("li",{parentName:"ol"},"\u67e5\u770b: \u9ed8\u8ba4\u672c\u5730\u4ed3\u5e93\u8def\u5f84\u4e3a~/.m2/repository\uff0cls\u540e\u663e\u793a\u7684\u4e00\u7ea7\u76ee\u5f55\u540d\u662f\u6240\u6709\u7684groupId"),(0,o.kt)("li",{parentName:"ol"},"\u9a8c\u8bc1: \u65b0\u542f\u4e00\u4e2a\u9879\u76ee\uff0c\u5728pom.xml\u4e2d\u5f15\u5165\u81ea\u5b9a\u4e49starter")),(0,o.kt)("h4",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blog.csdn.net/qq_35971258/article/details/143169166"},"https://blog.csdn.net/qq_35971258/article/details/143169166")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.aliyun.com/article/893073"},"https://developer.aliyun.com/article/893073"))))}m.isMDXComponent=!0}}]);