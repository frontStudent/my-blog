"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[9417],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,b=s["".concat(i,".").concat(d)]||s[d]||m[d]||o;return n?r.createElement(b,c(c({ref:t},u),{},{components:n})):r.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[s]="string"==typeof e?e:a,c[1]=l;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6336:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},c=void 0,l={unversionedId:"backend/MYSQL/\u4e8b\u52a1",id:"backend/MYSQL/\u4e8b\u52a1",title:"\u4e8b\u52a1",description:"1. \u810f\u8bfb\uff1a",source:"@site/docs/backend/MYSQL/\u4e8b\u52a1.md",sourceDirName:"backend/MYSQL",slug:"/backend/MYSQL/\u4e8b\u52a1",permalink:"/my-blog/docs/backend/MYSQL/\u4e8b\u52a1",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/backend/MYSQL/\u4e8b\u52a1.md",tags:[],version:"current",frontMatter:{},sidebar:"backendSidebar",previous:{title:"Next.js\u767b\u5f55\u6536\u85cf\u529f\u80fd",permalink:"/my-blog/docs/backend/JS\u540e\u7aef/Next.js\u767b\u5f55\u6536\u85cf\u529f\u80fd"},next:{title:"\u6570\u636e\u5e93\u6742\u8bb0",permalink:"/my-blog/docs/backend/MYSQL/\u6570\u636e\u5e93\u6742\u8bb0"}},i={},p=[],u={toc:p},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u810f\u8bfb\uff1a\n\u25e6 \u542b\u4e49\uff1a\u4e00\u4e2a\u4e8b\u52a1\u8bfb\u53d6\u5230\u4e86\u53e6\u4e00\u4e2a\u672a\u63d0\u4ea4\u4e8b\u52a1\u5199\u5165\u7684\u6570\u636e\u3002\n\u25e6 \u4e3e\u4f8b\uff1a\u4e8b\u52a1 A \u4fee\u6539\u4e86\u4e00\u6761\u6570\u636e\u4f46\u672a\u63d0\u4ea4\uff0c\u6b64\u65f6\u4e8b\u52a1 B \u8bfb\u53d6\u4e86\u8fd9\u6761\u88ab\u4e8b\u52a1 A \u4fee\u6539\u8fc7\u7684\u6570\u636e\u3002\u5982\u679c\u4e8b\u52a1 A \u6700\u7ec8\u56de\u6eda\uff0c\u90a3\u4e48\u4e8b\u52a1 B \u8bfb\u53d6\u5230\u7684\u6570\u636e\u5c31\u662f \u201c\u810f\u201d \u6570\u636e\uff0c\u56e0\u4e3a\u8fd9\u4e2a\u6570\u636e\u4ece\u672a\u771f\u6b63\u5728\u6570\u636e\u5e93\u4e2d\u5b58\u5728\u8fc7\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4e0d\u53ef\u91cd\u590d\u8bfb\uff1a\n\u25e6 \u542b\u4e49\uff1a\u5728\u4e00\u4e2a\u4e8b\u52a1\u4e2d\uff0c\u591a\u6b21\u8bfb\u53d6\u540c\u4e00\u6570\u636e\u96c6\u5408\uff0c\u4f46\u662f\u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\uff0c\u53e6\u4e00\u4e2a\u4e8b\u52a1\u5bf9\u8be5\u6570\u636e\u96c6\u5408\u8fdb\u884c\u4e86\u4fee\u6539\uff0c\u5bfc\u81f4\u8fd9\u4e2a\u4e8b\u52a1\u591a\u6b21\u8bfb\u53d6\u7684\u6570\u636e\u4e0d\u4e00\u81f4\u3002\n\u25e6 \u4e3e\u4f8b\uff1a\u4e8b\u52a1 A \u8bfb\u53d6\u4e00\u6761\u6570\u636e\uff0c\u6b64\u65f6\u4e8b\u52a1 B \u4fee\u6539\u4e86\u8fd9\u6761\u6570\u636e\u5e76\u63d0\u4ea4\u3002\u63a5\u7740\u4e8b\u52a1 A \u518d\u6b21\u8bfb\u53d6\u8fd9\u6761\u6570\u636e\u65f6\uff0c\u53d1\u73b0\u6570\u636e\u4e0e\u7b2c\u4e00\u6b21\u8bfb\u53d6\u7684\u4e0d\u4e00\u6837\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5e7b\u8bfb\uff1a\n\u25e6 \u542b\u4e49\uff1a\u4e00\u4e2a\u4e8b\u52a1\u5728\u4e24\u6b21\u67e5\u8be2\u4e2d\u5f97\u5230\u7684\u7ed3\u679c\u96c6\u4e0d\u540c\uff0c\u662f\u7531\u4e8e\u53e6\u4e00\u4e2a\u4e8b\u52a1\u63d2\u5165\u6216\u5220\u9664\u4e86\u6570\u636e\uff0c\u4f7f\u5f97\u7b2c\u4e00\u4e2a\u4e8b\u52a1\u5728\u7b2c\u4e8c\u6b21\u67e5\u8be2\u65f6\u51fa\u73b0\u4e86\u65b0\u7684\u6570\u636e\u884c\u6216\u4e22\u5931\u4e86\u4e00\u4e9b\u6570\u636e\u884c\u3002\n\u25e6 \u4e3e\u4f8b\uff1a\u4e8b\u52a1 A \u6309\u7167\u67d0\u4e2a\u6761\u4ef6\u67e5\u8be2\u6570\u636e\uff0c\u5f97\u5230\u7ed3\u679c\u96c6\u3002\u6b64\u65f6\u4e8b\u52a1 B \u63d2\u5165\u4e86\u4e00\u4e9b\u6ee1\u8db3\u4e8b\u52a1 A \u67e5\u8be2\u6761\u4ef6\u7684\u6570\u636e\u884c\u5e76\u63d0\u4ea4\u3002\u5f53\u4e8b\u52a1 A \u518d\u6b21\u6309\u7167\u76f8\u540c\u6761\u4ef6\u67e5\u8be2\u65f6\uff0c\u53d1\u73b0\u7ed3\u679c\u96c6\u4e2d\u591a\u4e86\u4e00\u4e9b\u6570\u636e\u884c\uff0c\u5c31\u50cf\u51fa\u73b0\u4e86 \u201c\u5e7b\u89c9\u201d \u4e00\u6837\u3002")),(0,a.kt)("p",null,"\u4e8c\u3001\u56db\u79cd\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b\u89e3\u91ca"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8bfb\u672a\u63d0\u4ea4\uff08Read uncommitted\uff09\uff1a\n\u25e6 \u5141\u8bb8\u810f\u8bfb\u3001\u4e0d\u53ef\u91cd\u590d\u8bfb\u548c\u5e7b\u8bfb\u3002\n\u25e6 \u5728\u8fd9\u4e2a\u9694\u79bb\u7ea7\u522b\u4e0b\uff0c\u4e8b\u52a1\u53ef\u4ee5\u8bfb\u53d6\u5230\u5176\u4ed6\u672a\u63d0\u4ea4\u4e8b\u52a1\u5199\u5165\u7684\u6570\u636e\uff0c\u6570\u636e\u7684\u4e00\u81f4\u6027\u548c\u5b8c\u6574\u6027\u5f97\u4e0d\u5230\u4fdd\u8bc1\u3002\u867d\u7136\u8fd9\u79cd\u9694\u79bb\u7ea7\u522b\u53ef\u4ee5\u63d0\u9ad8\u5e76\u53d1\u6027\u80fd\uff0c\u4f46\u7531\u4e8e\u5b58\u5728\u810f\u8bfb\u7b49\u95ee\u9898\uff0c\u5b9e\u9645\u5e94\u7528\u4e2d\u5f88\u5c11\u4f7f\u7528\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8bfb\u5df2\u63d0\u4ea4\uff08Read committed\uff09\uff1a\n\u25e6 \u907f\u514d\u810f\u8bfb\uff0c\u4f46\u5141\u8bb8\u4e0d\u53ef\u91cd\u590d\u8bfb\u548c\u5e7b\u8bfb\u3002\n\u25e6 \u5728\u8fd9\u4e2a\u9694\u79bb\u7ea7\u522b\u4e0b\uff0c\u4e8b\u52a1\u53ea\u80fd\u8bfb\u53d6\u5230\u5176\u4ed6\u4e8b\u52a1\u5df2\u7ecf\u63d0\u4ea4\u7684\u6570\u636e\u3002\u8fd9\u6837\u5c31\u907f\u514d\u4e86\u810f\u8bfb\u95ee\u9898\uff0c\u4f46\u4ecd\u7136\u53ef\u80fd\u51fa\u73b0\u4e0d\u53ef\u91cd\u590d\u8bfb\u548c\u5e7b\u8bfb\u3002\u5927\u591a\u6570\u6570\u636e\u5e93\u7cfb\u7edf\u7684\u9ed8\u8ba4\u9694\u79bb\u7ea7\u522b\u662f\u8bfb\u5df2\u63d0\u4ea4\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u53ef\u91cd\u590d\u8bfb\uff08Repeatable read\uff09\uff1a\n\u25e6 \u907f\u514d\u810f\u8bfb\u548c\u4e0d\u53ef\u91cd\u590d\u8bfb\uff0c\u4f46\u53ef\u80fd\u51fa\u73b0\u5e7b\u8bfb\u3002\n\u25e6 \u5728\u8fd9\u4e2a\u9694\u79bb\u7ea7\u522b\u4e0b\uff0c\u4e8b\u52a1\u5728\u6267\u884c\u671f\u95f4\u591a\u6b21\u8bfb\u53d6\u540c\u4e00\u6570\u636e\u96c6\u5408\u65f6\uff0c\u4f1a\u770b\u5230\u76f8\u540c\u7684\u6570\u636e\uff0c\u5373\u907f\u514d\u4e86\u4e0d\u53ef\u91cd\u590d\u8bfb\u95ee\u9898\u3002\u4f46\u662f\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u5e7b\u8bfb\uff0c\u56e0\u4e3a\u5176\u4ed6\u4e8b\u52a1\u53ef\u4ee5\u5728\u8be5\u4e8b\u52a1\u6267\u884c\u671f\u95f4\u63d2\u5165\u65b0\u7684\u6570\u636e\u884c\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4e32\u884c\u5316\uff08Serializable\uff09\uff1a\n\u25e6 \u907f\u514d\u810f\u8bfb\u3001\u4e0d\u53ef\u91cd\u590d\u8bfb\u548c\u5e7b\u8bfb\u3002\n\u25e6 \u5728\u8fd9\u4e2a\u9694\u79bb\u7ea7\u522b\u4e0b\uff0c\u4e8b\u52a1\u4f1a\u6309\u7167\u987a\u5e8f\u4f9d\u6b21\u6267\u884c\uff0c\u5c31\u50cf\u4e00\u4e2a\u4e8b\u52a1\u4e00\u4e2a\u4e8b\u52a1\u5730\u4e32\u884c\u6267\u884c\u4e00\u6837\u3002\u8fd9\u79cd\u9694\u79bb\u7ea7\u522b\u53ef\u4ee5\u4fdd\u8bc1\u6570\u636e\u7684\u4e00\u81f4\u6027\u548c\u5b8c\u6574\u6027\uff0c\u4f46\u4f1a\u6781\u5927\u5730\u964d\u4f4e\u5e76\u53d1\u6027\u80fd\uff0c\u53ea\u6709\u5728\u5bf9\u6570\u636e\u4e00\u81f4\u6027\u8981\u6c42\u975e\u5e38\u9ad8\u7684\u60c5\u51b5\u4e0b\u624d\u4f1a\u4f7f\u7528\u3002")))}m.isMDXComponent=!0}}]);