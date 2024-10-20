"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[4700],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},k="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),k=l(r),u=n,d=k["".concat(p,".").concat(u)]||k[u]||f[u]||o;return r?a.createElement(d,c(c({ref:t},s),{},{components:r})):a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[k]="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9986:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={},c=void 0,i={unversionedId:"backend/\u4e2d\u95f4\u4ef6/Kafka",id:"backend/\u4e2d\u95f4\u4ef6/Kafka",title:"Kafka",description:"Kafka \u53ef\u4ee5\u4f5c\u4e3a\u4e00\u4e2a\u9ad8\u6027\u80fd\u7684\u6d88\u606f\u961f\u5217\uff0c\u7528\u4e8e\u5728\u4e0d\u540c\u7684\u5e94\u7528\u7a0b\u5e8f\u4e4b\u95f4\u8fdb\u884c\u5f02\u6b65\u901a\u4fe1\u3002\u751f\u4ea7\u8005\u5c06\u6d88\u606f\u53d1\u9001\u5230 Kafka \u4e3b\u9898\u4e2d\uff0c\u6d88\u8d39\u8005\u53ef\u4ee5\u5728\u81ea\u5df1\u7684\u8282\u594f\u4e0b\u4ece\u4e3b\u9898\u4e2d\u8bfb\u53d6\u6d88\u606f\u5e76\u8fdb\u884c\u5904\u7406\u3002",source:"@site/docs/backend/\u4e2d\u95f4\u4ef6/Kafka.md",sourceDirName:"backend/\u4e2d\u95f4\u4ef6",slug:"/backend/\u4e2d\u95f4\u4ef6/Kafka",permalink:"/my-blog/docs/backend/\u4e2d\u95f4\u4ef6/Kafka",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/backend/\u4e2d\u95f4\u4ef6/Kafka.md",tags:[],version:"current",frontMatter:{},sidebar:"backendSidebar",previous:{title:"\u7f13\u5b58\u548c\u6570\u636e\u5e93\u4e00\u81f4\u6027",permalink:"/my-blog/docs/backend/\u4e1a\u52a1\u573a\u666f/\u7f13\u5b58\u548c\u6570\u636e\u5e93\u4e00\u81f4\u6027"},next:{title:"\u5de5\u5177",permalink:"/my-blog/docs/backend/\u5de5\u5177"}},p={},l=[{value:"Docker\u642d\u5efa\u591a\u8282\u70b9Kafka\u96c6\u7fa4\uff0c\u5305\u62ec\u4e00\u4e2aZooKeeper\u548c\u4e09\u4e2aKafka Broker",id:"docker\u642d\u5efa\u591a\u8282\u70b9kafka\u96c6\u7fa4\u5305\u62ec\u4e00\u4e2azookeeper\u548c\u4e09\u4e2akafka-broker",level:2},{value:"kafka\u57fa\u672c\u547d\u4ee4",id:"kafka\u57fa\u672c\u547d\u4ee4",level:3}],s={toc:l},k="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(k,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Kafka \u53ef\u4ee5\u4f5c\u4e3a\u4e00\u4e2a\u9ad8\u6027\u80fd\u7684\u6d88\u606f\u961f\u5217\uff0c\u7528\u4e8e\u5728\u4e0d\u540c\u7684\u5e94\u7528\u7a0b\u5e8f\u4e4b\u95f4\u8fdb\u884c\u5f02\u6b65\u901a\u4fe1\u3002\u751f\u4ea7\u8005\u5c06\u6d88\u606f\u53d1\u9001\u5230 Kafka \u4e3b\u9898\u4e2d\uff0c\u6d88\u8d39\u8005\u53ef\u4ee5\u5728\u81ea\u5df1\u7684\u8282\u594f\u4e0b\u4ece\u4e3b\u9898\u4e2d\u8bfb\u53d6\u6d88\u606f\u5e76\u8fdb\u884c\u5904\u7406\u3002\n\u4f8b\u5982\uff0c\u5728\u4e00\u4e2a\u5fae\u670d\u52a1\u67b6\u6784\u7684\u4f01\u4e1a\u5e94\u7528\u4e2d\uff0c\u4e0d\u540c\u7684\u5fae\u670d\u52a1\u4e4b\u95f4\u53ef\u4ee5\u901a\u8fc7 Kafka \u8fdb\u884c\u901a\u4fe1\u3002\u4e00\u4e2a\u5fae\u670d\u52a1\u53ef\u4ee5\u5c06\u4e8b\u4ef6\u53d1\u9001\u5230 Kafka \u4e3b\u9898\u4e2d\uff0c\u5176\u4ed6\u5fae\u670d\u52a1\u53ef\u4ee5\u8ba2\u9605\u8be5\u4e3b\u9898\u5e76\u5728\u4e8b\u4ef6\u53d1\u751f\u65f6\u8fdb\u884c\u76f8\u5e94\u7684\u5904\u7406\u3002"),(0,n.kt)("p",null,"\u5728\u4f01\u4e1a\u4e2d\uff0c\u5404\u79cd\u5e94\u7528\u7a0b\u5e8f\u548c\u670d\u52a1\u5668\u4f1a\u4ea7\u751f\u5927\u91cf\u7684\u65e5\u5fd7\u6570\u636e\u3002Kafka \u53ef\u4ee5\u4f5c\u4e3a\u4e00\u4e2a\u65e5\u5fd7\u6536\u96c6\u7cfb\u7edf\uff0c\u5c06\u65e5\u5fd7\u6570\u636e\u53d1\u9001\u5230 Kafka \u4e3b\u9898\u4e2d\u3002\u7136\u540e\uff0c\u901a\u8fc7\u4f7f\u7528\u6d88\u8d39\u8005\u6765\u8bfb\u53d6\u548c\u5206\u6790\u8fd9\u4e9b\u65e5\u5fd7\u6570\u636e\uff0c\u53ef\u4ee5\u5b9e\u73b0\u5b9e\u65f6\u76d1\u63a7\u3001\u6545\u969c\u6392\u67e5\u548c\u6027\u80fd\u5206\u6790\u7b49\u529f\u80fd\u3002\n\u4f8b\u5982\uff0c\u4e00\u4e2a\u7535\u5546\u7f51\u7ad9\u53ef\u4ee5\u4f7f\u7528 Kafka \u6536\u96c6\u7528\u6237\u884c\u4e3a\u65e5\u5fd7\u3001\u7cfb\u7edf\u65e5\u5fd7\u548c\u6570\u636e\u5e93\u65e5\u5fd7\u7b49\uff0c\u7136\u540e\u901a\u8fc7\u5b9e\u65f6\u5206\u6790\u8fd9\u4e9b\u65e5\u5fd7\u6570\u636e\uff0c\u4e86\u89e3\u7528\u6237\u884c\u4e3a\u3001\u7cfb\u7edf\u6027\u80fd\u548c\u6545\u969c\u60c5\u51b5\uff0c\u4ee5\u4fbf\u53ca\u65f6\u8fdb\u884c\u4f18\u5316\u548c\u8c03\u6574\u3002"),(0,n.kt)("h2",{id:"docker\u642d\u5efa\u591a\u8282\u70b9kafka\u96c6\u7fa4\u5305\u62ec\u4e00\u4e2azookeeper\u548c\u4e09\u4e2akafka-broker"},"Docker\u642d\u5efa\u591a\u8282\u70b9Kafka\u96c6\u7fa4\uff0c\u5305\u62ec\u4e00\u4e2aZooKeeper\u548c\u4e09\u4e2aKafka Broker"),(0,n.kt)("p",null,"\u53c2\u8003\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://blog.csdn.net/Hreo111/article/details/138550524"},"https://blog.csdn.net/Hreo111/article/details/138550524")),(0,n.kt)("h3",{id:"kafka\u57fa\u672c\u547d\u4ee4"},"kafka\u57fa\u672c\u547d\u4ee4"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# \u521b\u5efatopic\u5e76\u6307\u5b9a\u5206\u533a\u548c\u526f\u672c\nkafka-topics.sh --create --topic test-topic --bootstrap-server kafka1:9092 --replication-factor 3 --partitions 1\n\n# \u67e5\u770btopic\u5217\u8868\nkafka-topics.sh --list --bootstrap-server localhost:9092\n\n# \u67e5\u770btopic\u8be6\u60c5\nkafka-topics.sh --describe --bootstrap-server localhost:9092 --topic new_topic\n\n# \u751f\u4ea7\u8005\u53d1\u9001\u6d88\u606f\nkafka-console-producer.sh --topic test-topic --bootstrap-server kafka1:9092\n\n# \u6d88\u8d39\u8005\u6d88\u8d39\u6d88\u606f (\u8981\u5728\u53e6\u4e00\u4e2a\u7ec8\u7aef\u7a97\u53e3\u6267\u884c \u7136\u540e\u53ef\u5b9e\u65f6\u67e5\u770b\u751f\u4ea7\u8005\u53d1\u9001\u7684\u6d88\u606f)\nkafka-console-consumer.sh --topic test-topic --from-beginning --bootstrap-server kafka1:9092\n\n")))}f.isMDXComponent=!0}}]);