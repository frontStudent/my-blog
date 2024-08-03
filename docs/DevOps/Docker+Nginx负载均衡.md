
### 目录结构
```
test-balance
├── server-group
│   ├──server1
│   │  └── index.js
│   ├──server2
│   │  └── index.js
└── nginx
    ├──nginx.conf
    ├──conf.d
    │  └── default.conf
    └──html
```
server1和server2分别启动两个node服务，挂载到docker容器中，通过nginx进行负载均衡（不用容器也可以模拟，但用容器可以虚拟出不同ip地址）

### nginx配置修改
启动nginx容器之后，修改conf.d/default.conf文件
注意这边upstream不能写在server的内部，否则nginx容器直接就会退出
```
upstream node_app {
    server ip1:port1;
    server ip2:port2;
}

server {
    listen 80;
    location / {
        proxy_pass http://node_app;
    }
}
```
upstream中的两个server地址有两种写法均可，一种是用宿主机ip + 各自的端口号，另一种是使用容器ip + 各自的端口号

### 验证
访问http://宿主机ip:nginx容器映射的端口号，会随机返回两个node服务的返回值，一个极简负载均衡就实现了

### 优化
可以编写node脚本来进行多次访问验证
```js
const { exec } = require('child_process');

// 要执行的curl命令
const curlCommand = 'curl http://example.com';

// 执行curl命令的次数
const times = 10; // 这里可以替换为你想执行的次数

for (let i = 0; i < times; i++) {
    exec(curlCommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`执行出错: ${error}`);
            return;
        }

        console.log(`第${i + 1}次执行结果: ${stdout}`);
    });
}

```
