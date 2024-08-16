### 背景
在云服务器上使用docker跑nginx服务来部署前端打包后的代码，希望通过webhook实现本地代码提交后在服务器上自动拉取最新代码并重新打包部署。

### github配置webhook
1. 在github仓库中点击Settings -> Webhooks -> Add webhook
2. Payload URL填写服务器上webhook处理接口的地址，如：http://ip:3000/webhook
3. Content type选择application/json
4. Secret填写一个密钥，用于验证webhook请求的合法性
5. Which events would you like to trigger this webhook?选择Push events
6. 点击Add webhook保存配置

### express.js实现webhook处理接口（基础功能）
```js
const express = require("express");
const { exec } = require("child_process");

const app = express();
const port = 3000;

// 用于测试node服务是否正常运行
app.get("/", (req, res) => {
    res.send('Hello World!')
});

// 快速测试webhook是否正常接收
app.post("/webhook", (req, res) => {
  res.send("webhook test");
});

// 接收webhook请求，并执行脚本
app.post("/where-we-meet", (req, res) => {
  // 切换到root目录，执行 ./ci.sh 脚本
  exec(
    `cd ~/where-we-meet && chmod +x ci.sh && ./ci.sh`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`执行错误: ${error}`);
        return res.status(500).send(`执行错误: ${stderr}`);
      }
      console.log(`stdout: ${stdout}`);
    }
  );
  res.send(`deploying...`);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
```

在云服务器上使用pm2启动该node服务(一开始用docker，但docker不方便在内部cd到宿主机的目录，所以用pm2)
相关命令：
``` sh
pm2 ls

pm2 start app.js --name node-webhook-handler

pm2 stop node-webhook-handler

pm2 delete node-webhook-handler

pm2 logs node-webhook-handler # 查日志
```

#### 踩坑1
webhook 504错误

一开始res.send()写在exec回调函数里，而执行的脚本命令比较耗时，导致webhook请求没有及时返回，所以报504错误

把res.send()提到exec回调函数外，webhook请求正常返回，脚本命令异步执行

#### 踩坑2
代码提交了，webhook也生效了，但是git pull时没拉到最新代码，需要在云服务器上执行下面这行命令
```
git config --global credential.helper store
```

#### ci脚本
```sh
#!/bin/bash

echo "Updating code from git..."
git pull

npm install

npm run build

cp -r dist/* ~/nginx/html/where-we-meet
```

### 功能优化
之前的node服务只能处理一个项目的webhook请求，现在要处理多个项目的webhook请求，就需要支持动态路由，即根据webhook请求的路径，cd到不同的项目目录下执行shell脚本

```js
// 接收webhook请求，并执行脚本
app.post("/webhook-api/*", (req, res) => {
  // 截取前缀后的路径作为项目目录名称
  const PROJECT_NAME = req.path.slice("/webhook-api/".length);
  exec(
    `cd ~/${PROJECT_NAME} && chmod +x ci.sh && ./ci.sh`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`执行错误: ${error}`);
        return res.status(500).send(`执行错误: ${stderr}`);
      }
      console.log(`stdout: ${stdout}`);
    }
  );
  res.send(`deploying...`);
});
```
当然这个接口的灵活性还可以更高，比如脚本名称和项目所在的父路径都可以做成可配置的参数

### 参考
- https://juejin.cn/post/6844903780740251662
- https://juejin.cn/post/6844904148668792839