### vue3组件发布npm

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
import ComponentA from './ComponentA.vue'

const comps = [
	ComponentA
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

// 前面的MagicBox名字无所谓，后面的vue-magic-box是package文件夹下的package.json中的name
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

# 发布（在package文件夹下执行）
npm publish

# 处理403报错：
npm config set registry https://registry.npmjs.org/

# 处理超时报错：（设置代理，端口号为vpn端口号）
npm config set proxy http://127.0.0.1:7890
```

### 在之前步骤基础上进行简单打包后再发布

#### 配置vite.config.js进行打包
注意这边vite.config.js不是在package文件夹下，而是在一开始用create-vue创建的项目文件夹下
重点是库模式的配置，即build的lib选项，参照vite官方文档

```js title="vite.config.js"
import { fileURLToPath, URL } from 'node:url'

import path, { join } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./package', import.meta.url))
    }
  },
  build: {
    outDir: join(__dirname, './package/dist'),
    lib: {
      entry: join(__dirname, './package/index.js'), //指定组件编译入口文件
      name: 'vue-drag-drop-transformer',
      fileName: (format) => `index.${format}.js` // 打包后的文件名
    }, //库编译模式配置
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    } // rollup打包配置
  }
})
```

在项目根目录下运行`npm run build`进行打包

#### 配置package文件夹下的package.json
```json title="package.json"
  ...
  "files": ["dist"],
  "main": "dist/index.umd.js",
  "module":"dist/index.es.js",
  ...
```
这时候再去import这个包时就是引的打包之后的dist文件夹中的代码了

#### 修改main.js
刚才打包的dist文件夹中有一个style.css文件，所以需要在main.js中添加一行来引入css
```js
import 'vue-drag-drop-transformer/dist/style.css'
```


