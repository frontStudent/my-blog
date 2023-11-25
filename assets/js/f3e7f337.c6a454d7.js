"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[9825],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>y});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var p=r.createContext({}),i=function(n){var e=r.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},c=function(n){var e=i(n.components);return r.createElement(p.Provider,{value:e},n.children)},u="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,p=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),u=i(t),d=o,y=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return t?r.createElement(y,s(s({ref:e},c),{},{components:t})):r.createElement(y,s({ref:e},c))}));function y(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,s=new Array(a);s[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=n,l[u]="string"==typeof n?n:o,s[1]=l;for(var i=2;i<a;i++)s[i]=t[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7444:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var r=t(7462),o=(t(7294),t(3905));const a={},s=void 0,l={unversionedId:"repo/\u4e1a\u52a1\u573a\u666f/nginx\u4ee3\u7406\u6d4b\u8bd5\u73af\u5883",id:"repo/\u4e1a\u52a1\u573a\u666f/nginx\u4ee3\u7406\u6d4b\u8bd5\u73af\u5883",title:"nginx\u4ee3\u7406\u6d4b\u8bd5\u73af\u5883",description:"nginx\u5e38\u7528\u914d\u7f6e",source:"@site/docs/repo/\u4e1a\u52a1\u573a\u666f/nginx\u4ee3\u7406\u6d4b\u8bd5\u73af\u5883.md",sourceDirName:"repo/\u4e1a\u52a1\u573a\u666f",slug:"/repo/\u4e1a\u52a1\u573a\u666f/nginx\u4ee3\u7406\u6d4b\u8bd5\u73af\u5883",permalink:"/my-blog/docs/repo/\u4e1a\u52a1\u573a\u666f/nginx\u4ee3\u7406\u6d4b\u8bd5\u73af\u5883",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/repo/\u4e1a\u52a1\u573a\u666f/nginx\u4ee3\u7406\u6d4b\u8bd5\u73af\u5883.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Customize",permalink:"/my-blog/docs/repo/\u4e1a\u52a1\u573a\u666f/Customize"},next:{title:"\u5de5\u4f5c\u90e8\u5206bug\u8bb0\u5f55",permalink:"/my-blog/docs/repo/\u4e1a\u52a1\u573a\u666f/\u5de5\u4f5c\u90e8\u5206bug\u8bb0\u5f55"}},p={},i=[{value:"nginx\u5e38\u7528\u914d\u7f6e",id:"nginx\u5e38\u7528\u914d\u7f6e",level:3}],c={toc:i},u="wrapper";function m(n){let{components:e,...t}=n;return(0,o.kt)(u,(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"nginx\u5e38\u7528\u914d\u7f6e"},"nginx\u5e38\u7528\u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#user  nobody;\nworker_processes  1;\n\n#error_log  logs/error.log;\n#error_log  logs/error.log  notice;\n#error_log  logs/error.log  info;\n\n# pid        logs/nginx.pid;\n\n# \u505c\u6b62\u547d\u4ee4\n# nginx -s stop\n# \u91cd\u542f\u547d\u4ee4\n# nginx -s reload\n# \u542f\u52a8\u547d\u4ee4\n# nginx\n\nevents {\n    worker_connections  1024;\n}\n\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n\n    proxy_buffer_size 128k;\n    proxy_buffers   32 128k;\n    proxy_busy_buffers_size 128k;\n    \n    #\u8de8\u57df\u914d\u7f6e\n    add_header Access-Control-Allow-Methods POST,GET,OPTIONS,DELETE;\n    add_header Access-Control-Allow-Origin *; # \u5fc5\u987b\u8981\u6709\n    add_header Access-Control-Allow-Headers *; # \u5fc5\u987b\u8981\u6709\n\n    sendfile        on;\n    #tcp_nopush     on;\n\n    keepalive_timeout  65;\n\n    # gzip  on;\n                      \n    server {\n        listen       9091;\n        server_name  127.0.0.1;\n        client_max_body_size 100m;\n        add_header Cache-Control no-store;\n\n        location / {\n            # proxy_pass http://172.31.30.32:6020/;\n            proxy_pass http://172.31.30.33:6020/;\n        }\n\n        # location /sysapp/react/web/platform.html {\n        #     proxy_pass http://localhost:3008/;\n        # }\n\n        location /sysapp/react/web/custom.html {\n            proxy_pass http://localhost:3000/;\n        }\n\n\n        # location /sysapp/react/web/tpm.html {\n        #     proxy_pass http://localhost:3010/;\n        # }\n\n        # \u4e3b\u9875\n        # location /home {\n        #     proxy_pass http://localhost:3008/home;\n        # }\n\n        location /api/ {\n            proxy_pass http://172.31.30.33:6020/;\n        }\n        location /static/js/bundle.js/ {\n            proxy_pass http://localhost:3000/static/js/bundle.js;\n        }\n        location  ^~ /static/ {\n            proxy_pass http://localhost:3000/static/;\n        }\n        \n        location /manifest.json/ {\n            proxy_pass http://localhost:3000/manifest.json;\n        }\n        location  ~ (.*\\.chunk\\.js) {\n            proxy_pass http://localhost:3000/$1;\n        }\n\n        error_page   500 502 503 504  /50x.html;\n        location = /50x.html {\n            root   html;\n        }\n    }\n}\n\n")))}m.isMDXComponent=!0}}]);