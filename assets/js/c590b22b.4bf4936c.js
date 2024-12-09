"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[5464],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var o=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,s=function(e,n){if(null==e)return{};var t,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=c(t),g=s,u=p["".concat(l,".").concat(g)]||p[g]||m[g]||r;return t?o.createElement(u,i(i({ref:n},d),{},{components:t})):o.createElement(u,i({ref:n},d))}));function u(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=g;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[p]="string"==typeof e?e:s,i[1]=a;for(var c=2;c<r;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},4630:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=t(7462),s=(t(7294),t(3905));const r={},i=void 0,a={unversionedId:"backend/\u4e1a\u52a1\u573a\u666f/\u6d88\u606f\u63a8\u9001",id:"backend/\u4e1a\u52a1\u573a\u666f/\u6d88\u606f\u63a8\u9001",title:"\u6d88\u606f\u63a8\u9001",description:"sse",source:"@site/docs/backend/\u4e1a\u52a1\u573a\u666f/\u6d88\u606f\u63a8\u9001.md",sourceDirName:"backend/\u4e1a\u52a1\u573a\u666f",slug:"/backend/\u4e1a\u52a1\u573a\u666f/\u6d88\u606f\u63a8\u9001",permalink:"/my-blog/docs/backend/\u4e1a\u52a1\u573a\u666f/\u6d88\u606f\u63a8\u9001",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/backend/\u4e1a\u52a1\u573a\u666f/\u6d88\u606f\u63a8\u9001.md",tags:[],version:"current",frontMatter:{},sidebar:"backendSidebar",previous:{title:"\u65e5\u5fd7",permalink:"/my-blog/docs/backend/\u4e1a\u52a1\u573a\u666f/\u65e5\u5fd7"},next:{title:"\u6570\u4ed3\u5efa\u6a21",permalink:"/my-blog/docs/backend/\u5927\u6570\u636e/\u6570\u4ed3\u5efa\u6a21"}},l={},c=[{value:"sse",id:"sse",level:2},{value:"websocket",id:"websocket",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:3}],d={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,s.kt)(p,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"sse"},"sse"),(0,s.kt)("h2",{id:"websocket"},"websocket"),(0,s.kt)("p",null,"\u5728springboot\u4e2d\u96c6\u6210websocket\u6709\u4e24\u79cd\u65b9\u5f0f\uff0c\n\u4e0b\u9762\u7ed9\u51fa\u57fa\u4e8ejakarta\u7684\u4e00\u4e2ademo"),(0,s.kt)("p",null,"\u9996\u5148\u521b\u5efaWebSocketConfig\u7c7b"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"package org.example.wsquartzdemo;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.web.socket.server.standard.ServerEndpointExporter;\n\n@Configuration\npublic class WebSocketConfig {\n    @Bean\n    public ServerEndpointExporter serverEndpointExporter() {\n        return new ServerEndpointExporter();\n    }\n}\n")),(0,s.kt)("p",null,"\u521b\u5efaWebSocketServer\u7c7b"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'package org.example.wsquartzdemo;\n\nimport com.alibaba.fastjson.JSON;\nimport com.alibaba.fastjson.JSONObject;\nimport jakarta.websocket.*;\nimport jakarta.websocket.server.PathParam;\nimport jakarta.websocket.server.ServerEndpoint;\nimport lombok.extern.slf4j.Slf4j;\nimport org.springframework.scheduling.annotation.EnableScheduling;\nimport org.springframework.scheduling.annotation.Scheduled;\nimport org.springframework.stereotype.Component;\n\nimport java.util.Map;\nimport java.util.concurrent.ConcurrentHashMap;\nimport java.util.concurrent.atomic.AtomicInteger;\n\n/**\n * WebSocket\u7684\u64cd\u4f5c\u7c7b\n */\n@Component\n@Slf4j\n@ServerEndpoint("/websocket/{sid}")\n@EnableScheduling\npublic class WebSocketServer {\n\n    /**\n     * \u9759\u6001\u53d8\u91cf\uff0c\u7528\u6765\u8bb0\u5f55\u5f53\u524d\u5728\u7ebf\u8fde\u63a5\u6570\uff0c\u7ebf\u7a0b\u5b89\u5168\u7684\u7c7b\u3002\n     */\n    private static AtomicInteger onlineSessionClientCount = new AtomicInteger(0);\n\n    /**\n     * \u5b58\u653e\u6240\u6709\u5728\u7ebf\u7684\u5ba2\u6237\u7aef\n     */\n    private static Map<String, Session> onlineSessionClientMap = new ConcurrentHashMap<>();\n\n    /**\n     * \u8fde\u63a5sid\u548c\u8fde\u63a5\u4f1a\u8bdd\n     */\n    private String sid;\n    private Session session;\n\n    /**\n     * \u8fde\u63a5\u5efa\u7acb\u6210\u529f\u8c03\u7528\u7684\u65b9\u6cd5\u3002\u7531\u524d\u7aef<code>new WebSocket</code>\u89e6\u53d1\n     *\n     * @param sid     \u6bcf\u6b21\u9875\u9762\u5efa\u7acb\u8fde\u63a5\u65f6\u4f20\u5165\u5230\u670d\u52a1\u7aef\u7684id\uff0c\u6bd4\u5982\u7528\u6237id\u7b49\u3002\u53ef\u4ee5\u81ea\u5b9a\u4e49\u3002\n     * @param session \u4e0e\u67d0\u4e2a\u5ba2\u6237\u7aef\u7684\u8fde\u63a5\u4f1a\u8bdd\uff0c\u9700\u8981\u901a\u8fc7\u5b83\u6765\u7ed9\u5ba2\u6237\u7aef\u53d1\u9001\u6d88\u606f\n     */\n    @OnOpen\n    public void onOpen(@PathParam("sid") String sid, Session session) {\n        /**\n         * session.getId()\uff1a\u5f53\u524dsession\u4f1a\u8bdd\u4f1a\u81ea\u52a8\u751f\u6210\u4e00\u4e2aid\uff0c\u4ece0\u5f00\u59cb\u7d2f\u52a0\u7684\u3002\n         */\n        log.info("\u8fde\u63a5\u5efa\u7acb\u4e2d ==> session_id = {}\uff0c sid = {}", session.getId(), sid);\n        //\u52a0\u5165 Map\u4e2d\u3002\u5c06\u9875\u9762\u7684sid\u548csession\u7ed1\u5b9a\u6216\u8005session.getId()\u4e0esession\n        //onlineSessionIdClientMap.put(session.getId(), session);\n        onlineSessionClientMap.put(sid, session);\n\n        //\u5728\u7ebf\u6570\u52a01\n        onlineSessionClientCount.incrementAndGet();\n        this.sid = sid;\n        this.session = session;\n        sendToOne(sid, "\u8fde\u63a5\u6210\u529f");\n        log.info("\u8fde\u63a5\u5efa\u7acb\u6210\u529f\uff0c\u5f53\u524d\u5728\u7ebf\u6570\u4e3a\uff1a{} ==> \u5f00\u59cb\u76d1\u542c\u65b0\u8fde\u63a5\uff1asession_id = {}\uff0c sid = {},\u3002", onlineSessionClientCount, session.getId(), sid);\n    }\n\n    /**\n     * \u8fde\u63a5\u5173\u95ed\u8c03\u7528\u7684\u65b9\u6cd5\u3002\u7531\u524d\u7aef<code>socket.close()</code>\u89e6\u53d1\n     *\n     * @param sid\n     * @param session\n     */\n    @OnClose\n    public void onClose(@PathParam("sid") String sid, Session session) {\n        //onlineSessionIdClientMap.remove(session.getId());\n        // \u4ece Map\u4e2d\u79fb\u9664\n        onlineSessionClientMap.remove(sid);\n\n        //\u5728\u7ebf\u6570\u51cf1\n        onlineSessionClientCount.decrementAndGet();\n        log.info("\u8fde\u63a5\u5173\u95ed\u6210\u529f\uff0c\u5f53\u524d\u5728\u7ebf\u6570\u4e3a\uff1a{} ==> \u5173\u95ed\u8be5\u8fde\u63a5\u4fe1\u606f\uff1asession_id = {}\uff0c sid = {},\u3002", onlineSessionClientCount, session.getId(), sid);\n    }\n\n    /**\n     * \u6536\u5230\u5ba2\u6237\u7aef\u6d88\u606f\u540e\u8c03\u7528\u7684\u65b9\u6cd5\u3002\u7531\u524d\u7aef<code>socket.send</code>\u89e6\u53d1\n     * * \u5f53\u670d\u52a1\u7aef\u6267\u884ctoSession.getAsyncRemote().sendText(xxx)\u540e\uff0c\u524d\u7aef\u7684socket.onmessage\u5f97\u5230\u76d1\u542c\u3002\n     *\n     * @param message\n     * @param session\n     */\n    @OnMessage\n    public void onMessage(String message, Session session) {\n        /**\n         * html\u754c\u9762\u4f20\u9012\u6765\u5f97\u6570\u636e\u683c\u5f0f\uff0c\u53ef\u4ee5\u81ea\u5b9a\u4e49.\n         * {"sid":"user-1","message":"hello websocket"}\n         */\n        JSONObject jsonObject = JSON.parseObject(message);\n        String toSid = jsonObject.getString("sid");\n        String msg = jsonObject.getString("message");\n        log.info("\u670d\u52a1\u7aef\u6536\u5230\u5ba2\u6237\u7aef\u6d88\u606f ==> fromSid = {}, toSid = {}, message = {}", sid, toSid, message);\n\n        /**\n         * \u6a21\u62df\u7ea6\u5b9a\uff1a\u5982\u679c\u672a\u6307\u5b9asid\u4fe1\u606f\uff0c\u5219\u7fa4\u53d1\uff0c\u5426\u5219\u5c31\u5355\u72ec\u53d1\u9001\n         */\n        if (toSid == null || toSid == "" || "".equalsIgnoreCase(toSid)) {\n            sendToAll(msg);\n        } else {\n            sendToOne(toSid, msg);\n        }\n    }\n\n    /**\n     * \u53d1\u751f\u9519\u8bef\u8c03\u7528\u7684\u65b9\u6cd5\n     *\n     * @param session\n     * @param error\n     */\n    @OnError\n    public void onError(Session session, Throwable error) {\n        log.error("WebSocket\u53d1\u751f\u9519\u8bef\uff0c\u9519\u8bef\u4fe1\u606f\u4e3a\uff1a" + error.getMessage());\n        error.printStackTrace();\n    }\n\n    /**\n     * \u7fa4\u53d1\u6d88\u606f\n     *\n     * @param message \u6d88\u606f\n     */\n    private void sendToAll(String message) {\n        // \u904d\u5386\u5728\u7ebfmap\u96c6\u5408\n        onlineSessionClientMap.forEach((onlineSid, toSession) -> {\n            // \u6392\u9664\u6389\u81ea\u5df1\n            if (!sid.equalsIgnoreCase(onlineSid)) {\n                log.info("\u670d\u52a1\u7aef\u7ed9\u5ba2\u6237\u7aef\u7fa4\u53d1\u6d88\u606f ==> sid = {}, toSid = {}, message = {}", sid, onlineSid, message);\n                toSession.getAsyncRemote().sendText(message);\n            }\n        });\n    }\n\n    /**\n     * \u6307\u5b9a\u53d1\u9001\u6d88\u606f\n     *\n     * @param toSid\n     * @param message\n     */\n    private void sendToOne(String toSid, String message) {\n        // \u901a\u8fc7sid\u67e5\u8be2map\u4e2d\u662f\u5426\u5b58\u5728\n        Session toSession = onlineSessionClientMap.get(toSid);\n        if (toSession == null) {\n            log.error("\u670d\u52a1\u7aef\u7ed9\u5ba2\u6237\u7aef\u53d1\u9001\u6d88\u606f ==> toSid = {} \u4e0d\u5b58\u5728, message = {}", toSid, message);\n            return;\n        }\n        // \u5f02\u6b65\u53d1\u9001\n        log.info("\u670d\u52a1\u7aef\u7ed9\u5ba2\u6237\u7aef\u53d1\u9001\u6d88\u606f ==> toSid = {}, message = {}", toSid, message);\n        toSession.getAsyncRemote().sendText(message);\n    }\n\n//    @Scheduled(fixedRate = 2000)\n//    public void sendScheduled() {\n//        System.out.println("\u5b9a\u65f6\u4efb\u52a1\u6267\u884c\u4e86");\n//    }\n}\n')),(0,s.kt)("h3",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://juejin.cn/post/7383205961195094043"},"https://juejin.cn/post/7383205961195094043")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://blog.csdn.net/qq_42402854/article/details/130948270"},"https://blog.csdn.net/qq_42402854/article/details/130948270"))))}m.isMDXComponent=!0}}]);