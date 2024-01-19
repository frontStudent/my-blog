
### 常用命令
``` bash
# 本地调试
# 在待发布包根目录下
npm link

# 在主工程根目录下
npm link package_name

# 登录
npm login
# 用户名 shiyubei
# 密码 abc740531089
# 邮箱 2452909494@qq.com

# 发布
npm publish

# 处理403报错：
npm config set registry https://registry.npmjs.org/

# 处理超时报错：（设置代理，端口号为vpn端口号）
npm config set proxy http://127.0.0.1:7890
```
### vue3组件发布（未使用ts）
于2024-1-18尝试成功

#### 初始化vue3项目
``` bash
npm create vue@latest
```

#### 目录结构
在初始化的项目根目录下添加package文件夹，即我们要发布的组件包，使用`npm init -y`生成package文件夹的package.json
``` bash
├── package
│   ├── components
│   │   ├── ComponentA.vue
│   │   └── ComponentB.vue
│   └── App.vue
│   ├── index.js
│   └── package.json
```
App.vue中即我们要发布的组件模板代码，我们需要在index.js中将组件暴露出去，以便其他项目使用

```js title="package/index.js"
import MagicBox from './MagicBox.vue'

const comps = [
	MagicBox
]
const install = (Vue) =>{
    comps.map((component)=>{
        Vue.component(component.__name, component);
    })
}
let windowObj = window
/* 支持使用标签的方式引入 */
if (typeof windowObj !== 'undefined' && windowObj.Vue) {
    const vm = windowObj.Vue.createApp({})
    install(vm)
}
 
export default install
```

#### 本地调试
1. 在package文件夹下执行`npm link`，然后在主工程文件夹下执行`npm link package_name`
``` bash
# 在待发布包根目录下
npm link

# 在主工程根目录下
npm link package_name
```
2. 全局引入 
```js title="src/main.js"
import { createApp } from 'vue'
import App from './App.vue'
import MagicBox from 'vue-magic-box'
const app = createApp(App)

app.use(MagicBox)
app.mount('#app')
```
3. 使用
```vue title="App.vue"
<template>
    <div>
        <MagicBox></MagicBox>
    </div>
</template>
```

#### 发布
``` bash
# 登录
npm login
# 用户名 shiyubei
# 密码 abc740531089
# 邮箱 2452909494@qq.com

# 发布
npm publish

# 处理403报错：
npm config set registry https://registry.npmjs.org/

# 处理超时报错：（设置代理，端口号为vpn端口号）
npm config set proxy http://127.0.0.1:7890
```