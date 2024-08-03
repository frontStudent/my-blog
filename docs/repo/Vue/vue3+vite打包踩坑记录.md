
### 问题背景
在vue3+vite项目中，npm run build打包后index.html文件中引用资源路径错误，导致无法正常访问页面。

### 解决方案
运行`npm run build`命令之前，在vite.config.js文件中，将base选项的值设置为'./'
```jsx
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

```