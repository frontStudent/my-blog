"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[9961],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>v});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=t.createContext({}),p=function(e){var n=t.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},s=function(e){var n=p(e.components);return t.createElement(a.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,v=d["".concat(a,".").concat(m)]||d[m]||u[m]||i;return r?t.createElement(v,c(c({ref:n},s),{},{components:r})):t.createElement(v,c({ref:n},s))}));function v(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=m;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l[d]="string"==typeof e?e:o,c[1]=l;for(var p=2;p<i;p++)c[p]=r[p];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7174:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var t=r(7462),o=(r(7294),r(3905));const i={},c=void 0,l={unversionedId:"DevOps/linux&docker\u5e38\u7528\u64cd\u4f5c",id:"DevOps/linux&docker\u5e38\u7528\u64cd\u4f5c",title:"linux&docker\u5e38\u7528\u64cd\u4f5c",description:"vim",source:"@site/docs/DevOps/linux&docker\u5e38\u7528\u64cd\u4f5c.md",sourceDirName:"DevOps",slug:"/DevOps/linux&docker\u5e38\u7528\u64cd\u4f5c",permalink:"/my-blog/docs/DevOps/linux&docker\u5e38\u7528\u64cd\u4f5c",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/linux&docker\u5e38\u7528\u64cd\u4f5c.md",tags:[],version:"current",frontMatter:{},sidebar:"devopsSidebar",previous:{title:"Docker+Nginx\u8d1f\u8f7d\u5747\u8861",permalink:"/my-blog/docs/DevOps/Docker+Nginx\u8d1f\u8f7d\u5747\u8861"},next:{title:"nginx\u4ee3\u7406\u6d4b\u8bd5\u73af\u5883",permalink:"/my-blog/docs/DevOps/nginx\u4ee3\u7406\u6d4b\u8bd5\u73af\u5883"}},a={},p=[{value:"vim",id:"vim",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"\u64cd\u4f5c",id:"\u64cd\u4f5c",level:3},{value:"Linux",id:"linux",level:2},{value:"\u57fa\u672c\u547d\u4ee4",id:"\u57fa\u672c\u547d\u4ee4",level:3},{value:"docker",id:"docker",level:2},{value:"\u57fa\u672c\u547d\u4ee4",id:"\u57fa\u672c\u547d\u4ee4-1",level:3},{value:"nginx\u5bb9\u5668",id:"nginx\u5bb9\u5668",level:3},{value:"node\u5bb9\u5668",id:"node\u5bb9\u5668",level:3}],s={toc:p},d="wrapper";function u(e){let{components:n,...r}=e;return(0,o.kt)(d,(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"vim"},"vim"),(0,o.kt)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("p",null,"\u4e00\u5f00\u59cb\u5728/etc/vim/vimrc\u6587\u4ef6\u4e2d\u914d\u7f6e\u4f46\u672a\u751f\u6548\uff0c\u540e\u6765\u5728~/.vimrc\u6587\u4ef6\u4e2d\u914d\u7f6e\u751f\u6548"),(0,o.kt)("h3",{id:"\u64cd\u4f5c"},"\u64cd\u4f5c"),(0,o.kt)("p",null,"esc + :wq\u4fdd\u5b58\u9000\u51fa\nctrl + o + u\u952e \u5728\u63d2\u5165\u6a21\u5f0f\u4e0b\u56de\u5230\u666e\u901a\u6a21\u5f0f\u64a4\u9500\u518d\u56de\u5230\u63d2\u5165\u6a21\u5f0f"),(0,o.kt)("h2",{id:"linux"},"Linux"),(0,o.kt)("h3",{id:"\u57fa\u672c\u547d\u4ee4"},"\u57fa\u672c\u547d\u4ee4"),(0,o.kt)("p",null,"ls -a \u67e5\u770b\u5305\u62ec.\u5f00\u5934\u7684\u9690\u85cf\u6587\u4ef6\ncp -r source_directory new_directory \u590d\u5236\u76ee\u5f55\u5e76\u91cd\u547d\u540d\nmv old_filename new_filename \u91cd\u547d\u540d"),(0,o.kt)("p",null,"lsof -i :3000 \u67e5\u770b\u7aef\u53e3\u5360\u7528"),(0,o.kt)("h2",{id:"docker"},"docker"),(0,o.kt)("h3",{id:"\u57fa\u672c\u547d\u4ee4-1"},"\u57fa\u672c\u547d\u4ee4"),(0,o.kt)("p",null,"docker ps \u67e5\u770b\u6b63\u5728\u8fd0\u884c\u7684\u5bb9\u5668\ndocker ps -a \u67e5\u770b\u6240\u6709\u5bb9\u5668\ndocker stats my_container \u67e5\u770b\u5bb9\u5668\u8d44\u6e90\u5360\u7528\u60c5\u51b5"),(0,o.kt)("p",null,"docker inspect my_container | grep IPAddress \u67e5\u770b\u5bb9\u5668ip\ndocker inspect my_container | grep Ports -A 20 \u67e5\u770b\u5bb9\u5668\u7aef\u53e3\u6620\u5c04\ndocker inspect my_container | grep Mounts -A 10 \u67e5\u770b\u5bb9\u5668\u6302\u8f7d"),(0,o.kt)("p",null,"docker exec -it my_container /bin/bash \u8fdb\u5165\u5bb9\u5668 exit \u9000\u51fa\u5bb9\u5668\ndocker logs my_container \u67e5\u770b\u5bb9\u5668\u65e5\u5fd7\uff08\u5bb9\u5668\u542f\u52a8\u540e\u7acb\u523b\u9000\u51fa\u53ef\u7528\u6765\u6392\u67e5\u62a5\u9519\uff09"),(0,o.kt)("p",null,"docker stop my_container \u505c\u6b62\u5bb9\u5668\ndocker start my_container \u542f\u52a8\u5bb9\u5668\ndocker restart my_container \u91cd\u542f\u5bb9\u5668\ndocker rm my_container \u5220\u9664\u5bb9\u5668"),(0,o.kt)("h3",{id:"nginx\u5bb9\u5668"},"nginx\u5bb9\u5668"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# \u751f\u6210\u5bb9\u5668\ndocker run --name nginx2 -p 9002:80 -d nginx\n# \u5c06\u5bb9\u5668nginx.conf\u6587\u4ef6\u590d\u5236\u5230\u5bbf\u4e3b\u673a\ndocker cp nginx2:/etc/nginx/nginx.conf /home/nginx/nginx.conf\n# \u5c06\u5bb9\u5668conf.d\u6587\u4ef6\u5939\u4e0b\u5185\u5bb9\u590d\u5236\u5230\u5bbf\u4e3b\u673a\ndocker cp nginx2:/etc/nginx/conf.d /home/nginx/conf.d\n# \u5c06\u5bb9\u5668\u4e2d\u7684html\u6587\u4ef6\u5939\u590d\u5236\u5230\u5bbf\u4e3b\u673a\ndocker cp nginx2:/usr/share/nginx/html /home/nginx/html\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -d --name nginx2 -p 9002:80 -v ./nginx/nginx.conf:/etc/nginx/nginx.conf -v ./nginx/conf.d:/etc/nginx/conf.d -v ./nginx/html:/usr/share/nginx/html nginx:latest\n")),(0,o.kt)("h3",{id:"node\u5bb9\u5668"},"node\u5bb9\u5668"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d --name node1 -p 3000:3000 -v ./my-node-app:/app -w /app node:latest node server.js\n")),(0,o.kt)("p",null,"server.js\u5185\u5bb9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const http = require('http');\nconst port = 3000;\n\nconst server = http.createServer((req, res) => {\n  res.statusCode = 200;\n  res.setHeader('Content-Type', 'text/plain');\n  res.end('Hello, World!\\n');\n});\n\nserver.listen(port, () => {\n  console.log(`\u670d\u52a1\u5df2\u542f\u52a8`);\n});\n")))}u.isMDXComponent=!0}}]);