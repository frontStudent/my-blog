### 在简单cra项目中初步尝试
1. 将index.html从public中移出来放到根目录下
2. 去除`%PUBLIC_URL%`
3. 添加项目入口的js文件
```html
<script type="module" src="src/index.js"></script>
```
4. 在根目录下添加vite.config.js
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 解决在js文件中写jsx
const JsxHandlerPlugin = () => ({
  name: 'treat-js-as-jsx',
  async transform(code, id) {
    if (!id.match(/.*\.js$/)) return null
    return transformWithEsbuild(code, id, {
      loader: 'jsx',
      jsx: 'automatic'
    })
  }
})
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), JsxHandlerPlugin()],
})
```

### 在qince-web-custom中尝试
项目是lerna monorepo架构，我们将packages/custom作为"根目录"添加vite配置文件
在packages/custom的package.json中添加vite启动命令`"dev:vite": "vite"`
在最外层的package.json中添加`"start:vite": "lerna exec --scope=@qince-web/custom npm run dev:vite",`

需要安装相关依赖：
``` bash
npm i vite @vitejs/plugin-react vite-plugin-commonjs -f
```

### 当前阶段的vite配置

```js
import { defineConfig, transformWithEsbuild } from 'vite'
import commonjs from 'vite-plugin-commonjs'
import react from '@vitejs/plugin-react'
import path from 'path'

// 解决在js文件中写jsx
const JsxHandlerPlugin = () => ({
  name: 'treat-js-as-jsx',
  async transform(code, id) {
    if (!id.match(/.*\.js$/)) return null
    return transformWithEsbuild(code, id, {
      loader: 'jsx',
      jsx: 'automatic'
    })
  }
})
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), JsxHandlerPlugin(), commonjs(/* options */)],

  // ReferenceError: process is not defined
  // 待用dotenv读取
  define: {
    'process.env': {
      GENERATE_SOURCEMAP: false,
      REACT_APP_PACKAGE: 'custom'
    }
  },
  resolve: {
    alias: [
      {
        find: 'utils',
        replacement: '@qince-web/common/utils'
      },
      {
        find: 'locale',
        replacement: '@qince-web/common/locale'
      },
      {
        find: 'middlewares',
        replacement: '@qince-web/common/middlewares'
      },
      {
        find: 'components',
        replacement: '@qince-web/common/components'
      },
      {
        find: 'assets',
        replacement: '@qince-web/common/assets'
      },
      {
        find: '@userdefined',
        replacement: '@qince-web/userdefined/src'
      },
      {
        find: '@plugins',
        replacement: '@qince-web/plugins/src'
      },
      {
        find: '@tpm',
        replacement: '@qince-web/tpm/src'
      },
      {
        find: '@dms',
        replacement: '@qince-web/dms/src'
      },
      {
        find: '@custom',
        replacement: '@qince-web/custom/src'
      },
      // [less] '~antd/dist/antd.variable.less' wasn't found.
      { find: /^~/, replacement: '' }
    ]
  },

  css: {
    preprocessorOptions: {
      // [less] Inline JavaScript is not enabled.
      less: {
        javascriptEnabled: true,
        additionalData: '@root-entry-name: default;'
      }
    }
  },
  optimizeDeps: {
    force: true,
    esbuildOptions: {
      loader: {
        '.js': 'jsx'
      }
    }
  }
})
```