"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[4100],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=k(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,u=s["".concat(l,".").concat(d)]||s[d]||f[d]||o;return n?a.createElement(u,i(i({ref:t},c),{},{components:n})):a.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var k={};for(var l in t)hasOwnProperty.call(t,l)&&(k[l]=t[l]);k.originalType=e,k[s]="string"==typeof e?e:r,i[1]=k;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>k,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={},i=void 0,k={unversionedId:"backend/\u6d88\u606f\u961f\u5217/Kafka",id:"backend/\u6d88\u606f\u961f\u5217/Kafka",title:"Kafka",description:"\u7406\u8bba",source:"@site/docs/backend/\u6d88\u606f\u961f\u5217/Kafka.md",sourceDirName:"backend/\u6d88\u606f\u961f\u5217",slug:"/backend/\u6d88\u606f\u961f\u5217/Kafka",permalink:"/my-blog/docs/backend/\u6d88\u606f\u961f\u5217/Kafka",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/backend/\u6d88\u606f\u961f\u5217/Kafka.md",tags:[],version:"current",frontMatter:{},sidebar:"backendSidebar",previous:{title:"\u7f13\u5b58\u548c\u6570\u636e\u5e93\u4e00\u81f4\u6027",permalink:"/my-blog/docs/backend/\u6570\u636e\u5e93&\u7f13\u5b58/\u7f13\u5b58\u548c\u6570\u636e\u5e93\u4e00\u81f4\u6027"},next:{title:"Redis\u5b9e\u73b0",permalink:"/my-blog/docs/backend/\u6d88\u606f\u961f\u5217/Redis\u5b9e\u73b0"}},l={},p=[{value:"\u7406\u8bba",id:"\u7406\u8bba",level:2},{value:"\u6982\u89c8",id:"\u6982\u89c8",level:3},{value:"\u4e3b\u9898\u4e0e\u5206\u533a",id:"\u4e3b\u9898\u4e0e\u5206\u533a",level:3},{value:"\u6d88\u8d39\u8005\u7ec4",id:"\u6d88\u8d39\u8005\u7ec4",level:3},{value:"offset\u63d0\u4ea4",id:"offset\u63d0\u4ea4",level:3},{value:"\u5206\u533a\u5206\u914d\u7b56\u7565",id:"\u5206\u533a\u5206\u914d\u7b56\u7565",level:3},{value:"Docker\u642d\u5efaKafka\u96c6\u7fa4\uff0czookeeper\u6a21\u5f0f\u548ckraft\u6a21\u5f0f",id:"docker\u642d\u5efakafka\u96c6\u7fa4zookeeper\u6a21\u5f0f\u548ckraft\u6a21\u5f0f",level:2},{value:"zookeeper\u6a21\u5f0f",id:"zookeeper\u6a21\u5f0f",level:3},{value:"kraft\u6a21\u5f0f",id:"kraft\u6a21\u5f0f",level:3},{value:"kafka\u57fa\u672c\u547d\u4ee4",id:"kafka\u57fa\u672c\u547d\u4ee4",level:3},{value:"kafka \u5ba2\u6237\u7aef API",id:"kafka-\u5ba2\u6237\u7aef-api",level:2},{value:"\u81ea\u5b9a\u4e49\u5206\u533a\u5668",id:"\u81ea\u5b9a\u4e49\u5206\u533a\u5668",level:3},{value:"kafka \u4e0e springboot \u96c6\u6210",id:"kafka-\u4e0e-springboot-\u96c6\u6210",level:2},{value:"idea\u63d2\u4ef6: kafka",id:"idea\u63d2\u4ef6-kafka",level:3}],c={toc:p},s="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u7406\u8bba"},"\u7406\u8bba"),(0,r.kt)("h3",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,r.kt)("p",null,"Kafka \u53ef\u4ee5\u4f5c\u4e3a\u4e00\u4e2a\u9ad8\u6027\u80fd\u7684\u6d88\u606f\u961f\u5217\uff0c\u7528\u4e8e\u5728\u4e0d\u540c\u7684\u5e94\u7528\u7a0b\u5e8f\u4e4b\u95f4\u8fdb\u884c\u5f02\u6b65\u901a\u4fe1\u3002\u751f\u4ea7\u8005\u5c06\u6d88\u606f\u53d1\u9001\u5230 Kafka \u4e3b\u9898\u4e2d\uff0c\u6d88\u8d39\u8005\u53ef\u4ee5\u5728\u81ea\u5df1\u7684\u8282\u594f\u4e0b\u4ece\u4e3b\u9898\u4e2d\u8bfb\u53d6\u6d88\u606f\u5e76\u8fdb\u884c\u5904\u7406\u3002\n\u4f8b\u5982\uff0c\u5728\u4e00\u4e2a\u5fae\u670d\u52a1\u67b6\u6784\u7684\u4f01\u4e1a\u5e94\u7528\u4e2d\uff0c\u4e0d\u540c\u7684\u5fae\u670d\u52a1\u4e4b\u95f4\u53ef\u4ee5\u901a\u8fc7 Kafka \u8fdb\u884c\u901a\u4fe1\u3002\u4e00\u4e2a\u5fae\u670d\u52a1\u53ef\u4ee5\u5c06\u4e8b\u4ef6\u53d1\u9001\u5230 Kafka \u4e3b\u9898\u4e2d\uff0c\u5176\u4ed6\u5fae\u670d\u52a1\u53ef\u4ee5\u8ba2\u9605\u8be5\u4e3b\u9898\u5e76\u5728\u4e8b\u4ef6\u53d1\u751f\u65f6\u8fdb\u884c\u76f8\u5e94\u7684\u5904\u7406\u3002"),(0,r.kt)("p",null,"\u5728\u4f01\u4e1a\u4e2d\uff0c\u5404\u79cd\u5e94\u7528\u7a0b\u5e8f\u548c\u670d\u52a1\u5668\u4f1a\u4ea7\u751f\u5927\u91cf\u7684\u65e5\u5fd7\u6570\u636e\u3002Kafka \u53ef\u4ee5\u4f5c\u4e3a\u4e00\u4e2a\u65e5\u5fd7\u6536\u96c6\u7cfb\u7edf\uff0c\u5c06\u65e5\u5fd7\u6570\u636e\u53d1\u9001\u5230 Kafka \u4e3b\u9898\u4e2d\u3002\u7136\u540e\uff0c\u901a\u8fc7\u4f7f\u7528\u6d88\u8d39\u8005\u6765\u8bfb\u53d6\u548c\u5206\u6790\u8fd9\u4e9b\u65e5\u5fd7\u6570\u636e\uff0c\u53ef\u4ee5\u5b9e\u73b0\u5b9e\u65f6\u76d1\u63a7\u3001\u6545\u969c\u6392\u67e5\u548c\u6027\u80fd\u5206\u6790\u7b49\u529f\u80fd\u3002\n\u4f8b\u5982\uff0c\u4e00\u4e2a\u7535\u5546\u7f51\u7ad9\u53ef\u4ee5\u4f7f\u7528 Kafka \u6536\u96c6\u7528\u6237\u884c\u4e3a\u65e5\u5fd7\u3001\u7cfb\u7edf\u65e5\u5fd7\u548c\u6570\u636e\u5e93\u65e5\u5fd7\u7b49\uff0c\u7136\u540e\u901a\u8fc7\u5b9e\u65f6\u5206\u6790\u8fd9\u4e9b\u65e5\u5fd7\u6570\u636e\uff0c\u4e86\u89e3\u7528\u6237\u884c\u4e3a\u3001\u7cfb\u7edf\u6027\u80fd\u548c\u6545\u969c\u60c5\u51b5\uff0c\u4ee5\u4fbf\u53ca\u65f6\u8fdb\u884c\u4f18\u5316\u548c\u8c03\u6574\u3002"),(0,r.kt)("h3",{id:"\u4e3b\u9898\u4e0e\u5206\u533a"},"\u4e3b\u9898\u4e0e\u5206\u533a"),(0,r.kt)("p",null,"Kafka \u4e2d Topic \u88ab\u5206\u6210\u591a\u4e2a Partition \u5206\u533a\uff1bTopic \u662f\u4e00\u4e2a\u903b\u8f91\u6982\u5ff5\uff0cPartition \u662f\u6700\u5c0f\u7684\u5b58\u50a8\u5355\u5143\uff0c\u638c\u63e1\u7740\u4e00\u4e2a Topic \u7684\u90e8\u5206\u6570\u636e\u3002\n\u6bcf\u4e2aPartition\u90fd\u662f\u4e00\u4e2a\u5355\u72ec\u7684 log \u6587\u4ef6\uff0c\u6bcf\u6761\u8bb0\u5f55\u90fd\u4ee5\u8ffd\u52a0\u7684\u5f62\u5f0f\u5199\u5165\u3002"),(0,r.kt)("p",null,"kafka \u96c6\u7fa4\u4e2d\uff0c\u6bcf\u4e2a partition \u90fd\u53ef\u4ee5\u914d\u7f6e\u591a\u4e2a\u526f\u672c\uff0c\u8fd9\u4e9b\u526f\u672c\u5206\u5e03\u5728\u4e0d\u540c\u7684 broker \u4e0a\uff0c\u4ee5\u5b9e\u73b0\u6570\u636e\u7684\u5197\u4f59\u548c\u9ad8\u53ef\u7528\u6027\u3002\u5f53\u4e00\u4e2a partition \u7684 leader broker \u53d1\u751f\u6545\u969c\u65f6\uff0c\u5176\u4e2d\u4e00\u4e2a follower broker \u5c06\u88ab\u9009\u4e3e\u4e3a\u65b0\u7684 leader\uff0c\u7ee7\u7eed\u5904\u7406\u8be5 partition \u7684\u8bfb\u5199\u8bf7\u6c42\u3002"),(0,r.kt)("h3",{id:"\u6d88\u8d39\u8005\u7ec4"},"\u6d88\u8d39\u8005\u7ec4"),(0,r.kt)("p",null,"1\u3001\u6bcf\u4e2a\u5206\u533a\u53ea\u80fd\u88ab\u4e00\u4e2a\u6d88\u8d39\u7ec4\u4e2d\u7684\u4e00\u4e2a\u6d88\u8d39\u8005\u6240\u6d88\u8d39\uff0c\n2\u3001\u6d88\u8d39\u7ec4\u4e2d\u4e00\u4e2a\u6d88\u8d39\u8005\u53ef\u4ee5\u6d88\u8d39\u591a\u4e2a\u5206\u533a\u3002\n3\u3001\u591a\u4e2a\u6d88\u8d39\u7ec4\uff0c\u6bcf\u4e2a\u6d88\u8d39\u7ec4\u90fd\u53ef\u4ee5\u6d88\u8d39topic\u4e2d\u7684\u6240\u6709\u6570\u636e\uff0c\u4e14\u6d88\u8d39\u4f4d\u79fb\u4e4b\u95f4\u4e92\u4e0d\u5f71\u54cd\u3002\n4\u3001\u4e00\u4e2a\u6d88\u8d39\u7ec4\u5b58\u5728\u7684\u6d88\u8d39\u8005\u4e2a\u6570\uff0c\u5927\u4e8e\u5206\u533a\u6570\u65f6\uff0c\u4f1a\u51fa\u73b0\u6d88\u8d39\u7ec4\uff0c\u672a\u88ab\u5206\u914d\u5230\u5206\u533a"),(0,r.kt)("h3",{id:"offset\u63d0\u4ea4"},"offset\u63d0\u4ea4"),(0,r.kt)("p",null,"Kafka \u5c06\u4f4d\u79fb\u4fe1\u606f\u4f5c\u4e3a\u4e00\u6761\u4e00\u6761\u666e\u901a\u7684 Kafka \u6d88\u606f\uff0c\u4fdd\u5b58\u5728\u4e00\u4e2a\u7279\u5b9a\u7684 Topic \u4e2d\uff0c\u8fd9\u4e2a Topic \u7684\u540d\u5b57\u53eb __consumer_offsets\uff0c\u4e5f\u53ef\u4ee5\u53eb\u505a\u4f4d\u79fb\u4e3b\u9898\u3002"),(0,r.kt)("p",null,"\u4f4d\u79fb\u4e3b\u9898\u7684\u6d88\u606f\u683c\u5f0f\u662f\u952e\u503c\u5bf9\u5f62\u5f0f\u3002\u5b83\u7684\u952e\uff08key\uff09\u5305\u542b\u4e86\u6d88\u8d39\u8005\u7ec4\u3001\u4e3b\u9898\u548c\u5206\u533a\u7684\u4fe1\u606f\uff0c\u503c\uff08value\uff09\u5219\u662f\u5177\u4f53\u7684\u4f4d\u79fb\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u952e\u53ef\u80fd\u662f\u7c7b\u4f3c\u4e8e \u201cconsumer - group - 1:my - topic:partition - 0\u201d \u8fd9\u6837\u7684\u683c\u5f0f\uff0c\u5b83\u660e\u786e\u4e86\u662f\u6d88\u8d39\u8005\u7ec4 \u201cconsumer - group - 1\u201d \u5bf9\u4e8e\u4e3b\u9898 \u201cmy - topic\u201d \u7684\u5206\u533a 0 \u7684\u4f4d\u79fb\u8bb0\u5f55\n1\u3001\u81ea\u52a8\u63d0\u4ea4\n2\u3001\u624b\u52a8\u63d0\u4ea4"),(0,r.kt)("h3",{id:"\u5206\u533a\u5206\u914d\u7b56\u7565"},"\u5206\u533a\u5206\u914d\u7b56\u7565"),(0,r.kt)("p",null,"1\u3001range\n2\u3001roundrobin\n3\u3001sticky"),(0,r.kt)("p",null,"\u901a\u8fc7\u6307\u5b9akey\u7684\u65b9\u5f0f\uff0c\u5177\u6709\u76f8\u540ckey\u7684\u6d88\u606f\u4f1a\u5206\u53d1\u5230\u540c\u4e00\u4e2apartition\u4e2d\uff0c\u4ece\u800c\u4fdd\u8bc1\u6d88\u606f\u7684\u6709\u5e8f\u6027\u3002"),(0,r.kt)("h2",{id:"docker\u642d\u5efakafka\u96c6\u7fa4zookeeper\u6a21\u5f0f\u548ckraft\u6a21\u5f0f"},"Docker\u642d\u5efaKafka\u96c6\u7fa4\uff0czookeeper\u6a21\u5f0f\u548ckraft\u6a21\u5f0f"),(0,r.kt)("h3",{id:"zookeeper\u6a21\u5f0f"},"zookeeper\u6a21\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'# docker-compose.yml\n\nversion: \'3.8\'\n\nservices:\n  zookeeper:\n    image: bitnami/zookeeper:latest\n    environment:\n      - ZOO_ENABLE_AUTH=no\n      - ALLOW_ANONYMOUS_LOGIN=yes\n    ports:\n      - "2181:2181"\n\n  kafka1:\n    image: bitnami/kafka:latest\n    environment:\n      - KAFKA_BROKER_ID=1\n      - KAFKA_CFG_LISTENERS=PLAINTEXT://:9092\n      - KAFKA_CFG_ZOOKEEPER_CONNECT=zookeeper:2181\n      - ALLOW_PLAINTEXT_LISTENER=yes\n    ports:\n      - "9092:9092"\n    depends_on:\n      - zookeeper\n\n  kafka2:\n    image: bitnami/kafka:latest\n    environment:\n      - KAFKA_BROKER_ID=2\n      - KAFKA_CFG_LISTENERS=PLAINTEXT://:9093\n      - KAFKA_CFG_ZOOKEEPER_CONNECT=zookeeper:2181\n      - ALLOW_PLAINTEXT_LISTENER=yes\n    ports:\n      - "9093:9093"\n    depends_on:\n      - zookeeper\n\n  kafka3:\n    image: bitnami/kafka:latest\n    environment:\n      - KAFKA_BROKER_ID=3\n      - KAFKA_CFG_LISTENERS=PLAINTEXT://:9094\n      - KAFKA_CFG_ZOOKEEPER_CONNECT=zookeeper:2181\n      - ALLOW_PLAINTEXT_LISTENER=yes\n    ports:\n      - "9094:9094"\n    depends_on:\n      - zookeeper\n\n')),(0,r.kt)("p",null,"\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://blog.csdn.net/Hreo111/article/details/138550524"},"https://blog.csdn.net/Hreo111/article/details/138550524")),(0,r.kt)("h3",{id:"kraft\u6a21\u5f0f"},"kraft\u6a21\u5f0f"),(0,r.kt)("p",null,"\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7187301063832109112"},"https://juejin.cn/post/7187301063832109112")),(0,r.kt)("h3",{id:"kafka\u57fa\u672c\u547d\u4ee4"},"kafka\u57fa\u672c\u547d\u4ee4"),(0,r.kt)("p",null,"\u9996\u5148\u8fdb\u5165kafka\u5bb9\u5668\u5185\u90e8"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u521b\u5efatopic\u5e76\u6307\u5b9a\u5206\u533a\u6570\u91cf\u548c\u526f\u672c\u6570\u91cf\nkafka-topics.sh --create --topic test-topic --bootstrap-server kafka1:9092 --replication-factor 3 --partitions 1\n\n# \u67e5\u770btopic\u5217\u8868\nkafka-topics.sh --list --bootstrap-server localhost:9092\n\n# \u67e5\u770btopic\u8be6\u60c5\nkafka-topics.sh --describe --bootstrap-server localhost:9092 --topic new_topic\n\n# \u751f\u4ea7\u8005\u53d1\u9001\u6d88\u606f\nkafka-console-producer.sh --topic test-topic --bootstrap-server kafka1:9092\n\n# \u6d88\u8d39\u8005\u6d88\u8d39\u6d88\u606f (\u8981\u5728\u53e6\u4e00\u4e2a\u7ec8\u7aef\u7a97\u53e3\u6267\u884c \u7136\u540e\u53ef\u5b9e\u65f6\u67e5\u770b\u751f\u4ea7\u8005\u53d1\u9001\u7684\u6d88\u606f)\nkafka-console-consumer.sh --topic test-topic --from-beginning --bootstrap-server kafka1:9092\n\n")),(0,r.kt)("h2",{id:"kafka-\u5ba2\u6237\u7aef-api"},"kafka \u5ba2\u6237\u7aef API"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.kafka</groupId>\n    <artifactId>kafka-clients</artifactId>\n    <version>3.8.0</version>\n</dependency>\n")),(0,r.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u5206\u533a\u5668"},"\u81ea\u5b9a\u4e49\u5206\u533a\u5668"),(0,r.kt)("p",null,"\u81ea\u5b9a\u4e49\u5206\u533a\u5668\u9700\u8981\u5b9e\u73b0 Kafka \u7684 Partitioner \u63a5\u53e3\uff0c\u5e76\u91cd\u5199 partition \u65b9\u6cd5\u3002\u5728 partition \u65b9\u6cd5\u4e2d\uff0c\u53ef\u4ee5\u6839\u636e\u6d88\u606f\u7684 key \u548c partition \u7684\u6570\u91cf\u7b49\u4fe1\u606f\uff0c\u8ba1\u7b97\u51fa\u6d88\u606f\u5e94\u8be5\u88ab\u53d1\u9001\u5230\u54ea\u4e2a partition \u4e2d\u3002"),(0,r.kt)("h2",{id:"kafka-\u4e0e-springboot-\u96c6\u6210"},"kafka \u4e0e springboot \u96c6\u6210"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.springframework.kafka</groupId>\n    <artifactId>spring-kafka</artifactId>\n</dependency>\n")),(0,r.kt)("h3",{id:"idea\u63d2\u4ef6-kafka"},"idea\u63d2\u4ef6: kafka"))}f.isMDXComponent=!0}}]);