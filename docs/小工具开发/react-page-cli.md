
## 功能介绍
1. 通过命令行工具快速创建react代码模板页面，预期将包含多种表格、表单等常见的业务场景
2. 自动化生成react页面对应的路由配置文件
3. 识别当前项目对应端口号，页面创建完毕后在浏览器自动打开对应路由的url
## 命令
### pnpm rat-p create-page
创建page 如果不指定一级/二级page名称，则默认创建一个如src/pages/SuperPage/SubPage这样的页面

别名：pnpm rat-p c

| 参数名 | 别名 | 是否必须 | 说明 |
|---------|---------|---------|---------|
| superPName | pn1 | 否 | 一级page文件名 |
| subPName | pn2 | 否 | 二级page文件名 |
| superPNote | n1 | 否 | 一级page注释 |
| subPNote | n2 | 否 | 二级page注释 |


完整示例：

```
pnpm rat-p create-page --pn1=SuperPage --pn2=SubPage --n1=SuperPageNote --n2=SubPageNote
pnpm rat-p c --pn1=SuperPage --pn2=SubPage --n1=SuperPageNote --n2=SubPageNote
```

## 版本历史
### 1.0.0 - 1.0.1
测试

### 1.0.2
能够通过命令行参数快速创建react的一级page文件夹和二级page文件，并自动化配置路由

### 1.0.3
1. 不提供页面名称时通过时间戳生成唯一文件名
2. 添加一级页面注释与二级页面注释参数，能够在二级page、二级路由文件、一级路由文件中自动化配置注释
为了能在路由文件中保持历史注释参数，弃用了每次遍历page文件夹名称信息 再重写路由文件的写法
改用使用正则匹配路由文件中要新添加内容的位置，再进行续写

### 1.0.4
1. 修复了在已有一级page文件夹下创建二级page文件时，在一级路由配置文件中重复引入一级page的bug
2. 实现了在创建完二级page后，自动在浏览器打开对应端口号+路由的url


## 脚手架功能扩展记录
### 8.21 最初步的功能设想完成
给SuperPage和SubPage名称 生成相关pages文件 以及自动在routes中配置对应路由

### 8.22 处理SuperPage/SubPage默认生成名称设置
需要考虑如果SuperPage和SubPage两个参数都没传/只传了一个参数 这三种情况下分别怎么设置默认名称
尝试三种方案 
1. SuperPage001/SuperPage001 有重复的就递增后缀的数字 但是要考虑情况较多 增加不必要代码量
2. 使用uuid.v4() 生成唯一id 作为文件名 但过长且存在非字母数字的字符
3. 使用Date.now() 生成当前时间戳 作为文件名 因为存在命令行交互的过程 因此不会存在同一时间创建文件的问题
最终选择方案3 简单且能保证唯一性

### 8.23 - 8.24 处理自动化配置页面注释信息
之前在配置对应路由信息时，采取方案是每生成一个页面时都去遍历pages下的所有一级page和二级page文件 然后把对应路由信息重写一遍 但这样重写就无法正确保留页面注释参数 因为页面注释参数只能获取到当前命令行传过来的

于是改用续写的方法，第一次写路由文件时把模板写进去，后面就在模板中续写而不是全部重写

```javascript
const writeSubRoutes = (superPName, subPName, note, routePath) => {
  if(routePath文件为空) {
    写入如下模板：
  export default [
    // {{note}}
    {
        path: '/{{superPName}}/{{subPName}}',
        component: () => import('../../pages/{{superPName}}/{{subPName}}'),
    },
  ]
  }
  else if(routePath文件不为空) {
    先用正则匹配到 export default [] 数组中的内容
    然后在这个数组里续写对象内容，用当前传入的参数即可，格式还是一样
  }
}
```
但是在续写路由配置对象时，首先是把数组解析出来之后直接push新对象再JSON.stringify()，但是涉及到函数的序列化，并且函数中还有变量内容，需要通过JSON.stringify()的第二个参数自定义转换规则，并且手动匹配识别填充变量，涉及很多不必要的代码量

于是选择第二种方式，在这个数组内的字符串后面直接拼新的路由配置字符串即可

### 8.23 - 9.19 新文件生成后在浏览器自动打开新页面
文件生成后询问用户是否需要帮助打开当前文件路由，识别一下当前端口号，然后跟新生成page的路由拼接，在浏览器中打开

用open库或者用const { exec } = require("child_process")，执行start ${url}的命令都可以成功
踩了个小坑，url错打成http:/localhost:3000/#/littleFreddie/CategoryPerformanceAnalysis了

### 8.23 - ？配置一键删除/修改命令
删除/修改某个一级或二级page时，需要把对应的路由也删除/修改

### 8.29 - ？录屏对比，体现脚手架的效率，写在介绍文档中

## 安装
```
npm install react-page-cli
```

## 发布到npm
```
pnpm publish --F react-page-cli 

403报错：
npm config set registry https://registry.npmjs.org/
```
## 给react-page-cli添加新的依赖
```
pnpm add ${packageName} -F react-page-cli
```
## 参考教程
脚手架入门搭建：
https://juejin.cn/post/7260144602471776311?searchId=202308150838167957F26DADA19D6D6BE4#heading-6





