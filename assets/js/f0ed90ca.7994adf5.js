"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[4680],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),i=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},s=function(e){var r=i(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=i(t),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return t?n.createElement(f,p(p({ref:r},s),{},{components:t})):n.createElement(f,p({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[u]="string"==typeof e?e:o,p[1]=c;for(var i=2;i<a;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9165:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var n=t(7462),o=(t(7294),t(3905));const a={},p=void 0,c={unversionedId:"DevOps/docker\u90e8\u7f72springboot\u9879\u76ee",id:"DevOps/docker\u90e8\u7f72springboot\u9879\u76ee",title:"docker\u90e8\u7f72springboot\u9879\u76ee",description:"maven\u6253\u5305",source:"@site/docs/DevOps/docker\u90e8\u7f72springboot\u9879\u76ee.md",sourceDirName:"DevOps",slug:"/DevOps/docker\u90e8\u7f72springboot\u9879\u76ee",permalink:"/my-blog/docs/DevOps/docker\u90e8\u7f72springboot\u9879\u76ee",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/docker\u90e8\u7f72springboot\u9879\u76ee.md",tags:[],version:"current",frontMatter:{},sidebar:"devopsSidebar",previous:{title:"docker\u5e38\u7528\u64cd\u4f5c",permalink:"/my-blog/docs/DevOps/docker\u5e38\u7528\u64cd\u4f5c"},next:{title:"\u64cd\u4f5c\u5907\u5fd8",permalink:"/my-blog/docs/DevOps/linux/\u64cd\u4f5c\u5907\u5fd8"}},l={},i=[{value:"maven\u6253\u5305",id:"maven\u6253\u5305",level:3},{value:"\u7f16\u5199Dockerfile",id:"\u7f16\u5199dockerfile",level:3},{value:"\u6784\u5efa\u955c\u50cf",id:"\u6784\u5efa\u955c\u50cf",level:3},{value:"\u8fd0\u884c\u5bb9\u5668",id:"\u8fd0\u884c\u5bb9\u5668",level:3},{value:"\u8bbf\u95ee\u9879\u76ee",id:"\u8bbf\u95ee\u9879\u76ee",level:3}],s={toc:i},u="wrapper";function d(e){let{components:r,...a}=e;return(0,o.kt)(u,(0,n.Z)({},s,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"maven\u6253\u5305"},"maven\u6253\u5305"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"maven",src:t(7148).Z,width:"684",height:"922"})),(0,o.kt)("h3",{id:"\u7f16\u5199dockerfile"},"\u7f16\u5199Dockerfile"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'# \u4f7f\u7528 OpenJDK 17 \u4f5c\u4e3a\u57fa\u7840\u955c\u50cf\nFROM openjdk:17\n\n# \u8bbe\u7f6e\u5de5\u4f5c\u76ee\u5f55\nWORKDIR /app\n\n# \u5c06 JAR \u5305\u590d\u5236\u5230\u955c\u50cf\u4e2d\nCOPY app.jar /app/app.jar\n\n# \u66b4\u9732\u7aef\u53e3\nEXPOSE 8071\n\n# \u8bbe\u7f6e\u542f\u52a8\u547d\u4ee4\nENTRYPOINT ["java", "-jar", "app.jar"]\n\n')),(0,o.kt)("h3",{id:"\u6784\u5efa\u955c\u50cf"},"\u6784\u5efa\u955c\u50cf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t my-springboot-app .\n")),(0,o.kt)("h3",{id:"\u8fd0\u884c\u5bb9\u5668"},"\u8fd0\u884c\u5bb9\u5668"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p 8071:8071 my-springboot-app\n")),(0,o.kt)("h3",{id:"\u8bbf\u95ee\u9879\u76ee"},"\u8bbf\u95ee\u9879\u76ee"),(0,o.kt)("p",null,"http://localhost:8071"))}d.isMDXComponent=!0},7148:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/maven-25a889e3c03b0b16e3697328a731500f.jpg"}}]);