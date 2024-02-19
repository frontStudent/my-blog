## 2024.2.19更新：pnpm+monorepo打造vue3组件库
之前在初步尝试vue3组件库项目开发时，是在create-vue脚手架生成的目录结构中添加packages文件夹，再结合npm link的方式进行组件库开发和本地调试。

而目前组件库开发的最佳实践应该是pnpm+monorepo，因此下面用这种方式并结合vue和vite来搭建一个组件库项目。

参考：
- https://juejin.cn/post/7200297595474001981

### 组件库项目初始化：packages+play结构搭建

假设我们的项目名称为：test-ui

1. 在项目根目录下pnpm init，并新建packages与play文件夹
2. 根目录安装以下依赖：
3. 在项目根目录下新建pnpm-workspace.yaml，内容如下：
``` yaml title="pnpm-workspace.yaml"
packages:
    - 'packages/**'
    - play
```
4. 新建tsconfig.json，内容如下：
### packages目录内容
1. 在packages下新建文件目录结构如下：
packages/
├── components/
│   ├── src/
│   │   ├── button/
│   │   │   ├── button.vue
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── index.ts
│   ├── vite.config.ts
│   └── package.json
└── utils/
    └── package.json

其中components和utils都用pnpm init初始化
接下来主要专注于components目录中的内容

2. 在button目录下的index.ts中，引入button.vue组件（内容随意），在这个组件上添加install方法（用于注册该组件）并导出，具体代码如下：

``` ts title="button/index.ts"
import _Button from "./button.vue";
import type { App, Plugin } from "vue";
type SFCWithInstall<T> = T & Plugin;
const withInstall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = (app: App) => {
    const name = (comp as any).name;
    //注册组件
    app.component(name, comp as SFCWithInstall<T>);
  };
  return comp as SFCWithInstall<T>;
};
export const Button = withInstall(_Button);
export default Button;
```

3. 在src目录下的index.ts中，引入所有已经添加了install方法的组件，并导出，具体代码如下：
``` ts title="src/index.ts"
export * from "./button";
```
4. 在components目录下的index.ts中，引入src目录下的index.ts，并导出一个具有install方法的对象，这里的install方法中会调用所有组件的install方法，具体代码如下：
``` ts title="components/index.ts"
import * as components from "./src/index";
export * from "./src/index";
import { App } from "vue";

export default {
  install: (app: App) => {
    for (let c in components) {
      app.use((components as any)[c]);
    }
  },
};
```
5. 在components下的vite.config.ts中，添加如下配置：
``` ts title="components/vite.config.ts"
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
export default defineConfig({
  build: {
    //打包文件目录
    outDir: "es",
    //压缩
    //minify: false,
    rollupOptions: {
      //忽略打包vue文件
      external: ["vue"],
      input: ["index.ts"],
      output: [
        {
          //打包格式
          format: "es",
          //打包后文件名
          entryFileNames: "[name].mjs",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: "./es",
        },
        {
          //打包格式
          format: "cjs",
          //打包后文件名
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: "./lib",
        },
      ],
    },
    lib: {
      entry: "./index.ts",
    },
  },
  plugins: [vue(), dts({
    entryRoot: "./src",
    outputDir: ["./es/src", "./lib/src"],
    //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
    tsConfigFilePath: "../../tsconfig.json",
  })]
});
```
6. 在components下的package.json添加打包命令
``` json
"scripts": {
  "build": "vite build",
}
```
并且在根目录下的package.json添加打包命令，避免每次打包都需要先进入components文件夹
``` json
"scripts": {
  "build:ui": "pnpm -C package/components build",
}
```

============== 以下为原内容 ==============

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
### play目录内容
新建文件使play目录结构如下：
play/
├── app.vue
├── index.html
├── main.ts
├── package.json
└── vite.config.ts


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