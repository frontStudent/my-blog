---
sidebar_position: 2
---

### 背景
希望利用docusaurus + github pages构建个人文档网站，并且利用github workflows实现每次提交之后都自动将更新后的代码打包部署到github pages上。

### docusaurus项目初始化
docusaurus：https://www.docusaurus.cn/
参照文档操作即可

### gh-pages初次部署
这边部署时没有采用docusaurus封装的deploy命令，用的是gh-pages，（因为如果想部署其他不是docusaurus生成的比如create-react-app脚手架生成的项目也都可以用gh-pages）

#### 安装gh-pages并保存为开发依赖
```
npm install gh-pages --save-dev
```

#### 配置package.json/docusaurus.config.js
1. 在package.json中添加homepage属性，内容为github仓库地址
```
"homepage": "https://github.com/frontStudent/my-blog/"
```

2. 在package.json中scripts对象中配置一个gh-pages打包部署命令xx，命令名字无所谓

```
"deploy1": "gh-pages -d build",
```
注意build是项目打包之后的文件夹，这个名字不固定，也可能是dist。

3. 在docusaurus.config.js中要额外配置一个baseUrl，在/后面加上github仓库的名称，否则后面即使部署成功，访问时也不是正确的页面。

```
baseUrl: '/my-blog/'
```
#### 打包部署
按次序运行下列两个命令：
```
npm run build
npm run deploy1
```

deploy1命令执行完毕之后，在github仓库的Actions中可以查看部署的进程及结果，若成功则在github仓库的setting - Pages中就可以访问到部署的网站了。

这里会发现多了一个gh-pages分支，这个分支是gh-pages工具自动创建的，用于存放打包后的文件，实现将打包后文件和源代码的进行分离管理的目的。

#### deploy时两个经典报错
```
fatal: unable to access 'XXX': Recv failure: Connection was reset

fatal: unable to access 'XXX': Failed to connect to github.com port 443 after 21097 ms: Couldn't connect to server

```
以上这两个报错都是git push操作失败，本质都源于网络问题。在网上有两个解决方法，可以都试一试：
##### 方法1：
1. 执行下面的git操作：
```
git config --global --unset http.proxy 
git config --global --unset https.proxy
```
2. 在cmd中执行ipconfig/flushdns命令

##### 方法2：
1. 在cmd中执行ping github.com命令，拿到ip 20.205.243.166
2. 打开文件目录C:\Windows\System32\drivers\etc\找hosts文件，如果没有hosts文件就新建（无后缀名），注意lmhosts.sam文件并不能代表hosts文件。
3. 在hosts文件中添加一行，内容为：
```
20.205.243.166 github.com
```
目的是DNS解析github.com时，先去本机hosts文件中找，找不到再去DNS服务器找，从而加快访问速度。

### github workflows
如果每次有改动都要手动执行npm run build和npm run deploy1，太麻烦了，可以利用github workflows来自动化部署。

具体方法是新建并配置.github/workflows/xxx.yml文件
文件名可以任意取，GitHub只要发现.github/workflows目录下里面有.yml文件，就会自动运行该文件。（一个库可以有多个workflow文件。）

这里我的配置文件内容如下：
``` yml
name: CI

on:
  push:
    branches:
      - master

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Use Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "16.x"
      - run: npm install
      - run: npm run build
      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4.2.5
        with:
          branch: gh-pages # 部署到gh-pages分支
          folder: build # 打包后的文件目录名称
```
后面在master分支上进行git push操作之后，github就会自动进行打包，再将folder配置项的文件目录push到gh-pages分支上，这样就实现了自动部署。

附：github actions入门教程-阮一峰 https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html