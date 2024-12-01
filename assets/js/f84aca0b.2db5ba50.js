"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[7282],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3551:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={},o=void 0,s={unversionedId:"backend/JAVA/\u57fa\u7840/\u96c6\u5408",id:"backend/JAVA/\u57fa\u7840/\u96c6\u5408",title:"\u96c6\u5408",description:"\u6570\u7ec4\u548c\u5217\u8868\u8f6c\u6362",source:"@site/docs/backend/JAVA/\u57fa\u7840/\u96c6\u5408.md",sourceDirName:"backend/JAVA/\u57fa\u7840",slug:"/backend/JAVA/\u57fa\u7840/\u96c6\u5408",permalink:"/my-blog/docs/backend/JAVA/\u57fa\u7840/\u96c6\u5408",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/backend/JAVA/\u57fa\u7840/\u96c6\u5408.md",tags:[],version:"current",frontMatter:{},sidebar:"backendSidebar",previous:{title:"\u679a\u4e3e",permalink:"/my-blog/docs/backend/JAVA/\u57fa\u7840/\u679a\u4e3e"},next:{title:"CAS\u539f\u5b50\u7c7b",permalink:"/my-blog/docs/backend/JAVA/\u5e76\u53d1/CAS\u539f\u5b50\u7c7b"}},l={},c=[{value:"\u6570\u7ec4\u548c\u5217\u8868\u8f6c\u6362",id:"\u6570\u7ec4\u548c\u5217\u8868\u8f6c\u6362",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u6570\u7ec4\u548c\u5217\u8868\u8f6c\u6362"},"\u6570\u7ec4\u548c\u5217\u8868\u8f6c\u6362"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6570\u7ec4\u8f6c\u5217\u8868")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'List<String> list = new ArrayList<>();\nlist.add("flower");\nlist.add("dance");\nlist.add("is");\nlist.add("excellent");\n//\u8fd4\u56de\u503c\u7c7b\u578b\u548c\u65b9\u6cd5\u53c2\u6570\u7c7b\u578b\u4e00\u81f4\n//\u6362\u53e5\u8bdd\u8bf4, \u672c\u6765\u7531list\u5b58\u5404\u4e2aString, \u73b0\u5728\u7531String[]\u5b58\u5404\u4e2aString\n//\u6570\u7ec4\u7684\u957f\u5ea6\u6307\u5b9a\u4e3a0\u6216\u8005\u6307\u5b9a\u4e3alist.size()\u90fd\u53ef\u4ee5. \u5373\u4f7f\u4f20\u5165\u7684\u6570\u7ec4\u957f\u5ea6\u4e0d\u591f\u4e5f\u6ca1\u5173\u7cfb, \u4f1a\u521b\u5efa\u65b0\u6570\u7ec4\nString[] strs = list.toArray(new String[0]);\nSystem.out.println(Arrays.toString(strs));\n')),(0,a.kt)("p",null,"\u5f53\u4f20\u5165\u4e00\u4e2a\u6307\u5b9a\u7c7b\u578b\u7684\u6570\u7ec4\u4f5c\u4e3a\u53c2\u6570\u65f6\uff08\u8fd9\u91cc\u662f new String","[0]","\uff0c\u660e\u786e\u6307\u5b9a\u4e86\u8981\u8f6c\u6362\u4e3a String \u7c7b\u578b\u7684\u6570\u7ec4\uff09\uff0c\u5b83\u4f1a\u6309\u7167\u8fd9\u4e2a\u7c7b\u578b\u6765\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6570\u7ec4\u5e76\u5c06 List \u4e2d\u7684\u5143\u7d20\u586b\u5145\u8fdb\u53bb\uff1b\u5e76\u7ed9 toArray \u65b9\u6cd5\u4e00\u4e2a\u521d\u59cb\u7684\u5bb9\u91cf\u63d0\u793a\uff0c\u4e0d\u7528\u62c5\u5fc3\u4f20\u5165\u6570\u7ec4\u5bb9\u91cf\u662f\u5426\u8db3\u591f\u7684\u95ee\u9898\uff0c\u56e0\u4e3a toArray \u65b9\u6cd5\u4f1a\u6839\u636e List \u7684\u5b9e\u9645\u5927\u5c0f\u6765\u6b63\u786e\u5904\u7406\u6570\u7ec4\u7684\u521b\u5efa\u548c\u5143\u7d20\u586b\u5145\u3002"),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u5217\u8868\u8f6c\u6570\u7ec4\n\u901a\u8fc7Arrays.asList\u5f97\u5230\u7684List\u65e0\u6cd5\u8fdb\u884cadd\u548cremove\u7b49\u64cd\u4f5c\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'String[] array = {"apple", "banana", "cherry"};\n\n// \u5148\u901a\u8fc7Arrays.asList()\u5f97\u5230\u4e00\u4e2a\u56fa\u5b9a\u5927\u5c0f\u7684List\nList<String> fixedList = Arrays.asList(array);\n\n// \u518d\u521b\u5efa\u4e00\u4e2a\u53ef\u4fee\u6539\u5927\u5c0f\u7684ArrayList\uff0c\u5e76\u5c06\u524d\u9762\u5f97\u5230\u7684List\u4e2d\u7684\u5143\u7d20\u6dfb\u52a0\u8fdb\u53bb\nList<String> modifiableList = new ArrayList<>(fixedList);\n\n// \u73b0\u5728\u53ef\u4ee5\u5bf9modifiableList\u8fdb\u884c\u6dfb\u52a0\u3001\u5220\u9664\u7b49\u64cd\u4f5c\u4e86\nmodifiableList.add("date");\nSystem.out.println(modifiableList); \n')))}u.isMDXComponent=!0}}]);