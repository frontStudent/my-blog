## cra中的重要文件路径解析
### 一个简单的npm项目例子讲清楚process.cwd()和__dirname的区别
新建文件夹test-path并用npm init -y进行初始化
修改package.json中的test命令为node scripts/test.js
```json
{
  "name": "test-path",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "node scripts/test.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

新建scripts文件夹，并在这个文件夹下新建test.js，内容如下：

```js
const path = require("path");

console.log(process.cwd());
console.log(__dirname);
console.log(__filename);

console.log(path.resolve(__dirname, './aa'));
console.log(path.resolve(process.cwd(), "./aa"));

console.log(path.resolve("aa", "/bb", 'cc'));
console.log(path.resolve("aa", "bb"));

console.log(path.join('aa', 'bb'))
```
在test-path的根目录下运行npm run test，观察输出结果

process.cwd()的结果为当前Node.js进程正在运行的目录，我们是在test-path的根目录下启动node命令的，因此process.cwd()结果就是test-path的根目录
__dirname则是当前执行程序所在的目录，我们执行的是scripts文件夹下的test.js，那么__dirname自然就是scripts目录

## cra是如何让你在项目中使用全局变量的
### 应用场景
日常开发中对process.env的运用主要是以下两处：
1. 通过NODE_ENV判断开发环境和生产环境，开发环境会给请求的url上拼一个/api前缀
process.env.NODE_ENV === 'development' ? '/api' : ''
2. 通过REACT_APP_PACKAGE判断当前在哪个package下（monorepo多包项目中）
const MODULE = process.env.REACT_APP_PACKAGE || 'index'

### 原理解析
在config文件夹下的env.js中，会用dotenv配合dotenv-expand去读取.env等配置文件中的环境变量然后写到process.env中，然后只暴露出一批在浏览器端可能用得到的环境变量

在webpack.config.js中去引env.js中暴露出的这些环境变量，注入到DefinePlugin插件中从而重新定义process.env，在react项目中就可以使用process.env了

这里cra使用DefinePlugin的方法和webpack官网推荐的做法并不一致，将整个process.env覆盖了

注：在应用场景中提到的两个全局变量设置方式并不同

- process.env.NODE_ENV这个全局变量是在start.js/build.js这两个脚本中设置的，在start.js中会设置`process.env.NODE_ENV = 'development'`，在build.js中会设置`process.env.NODE_ENV = 'production'`
- REACT_APP_PACKAGE则是在每个package下的.env文件中去设置的

## cra中的webpack配置
### source-map
```js
  devtool: isEnvProduction
    ? shouldUseSourceMap
      ? 'source-map'
      : false
    : isEnvDevelopment && 'cheap-module-source-map',
```
shouldUseSourceMap只有当你在env中特意配置了GENERATE_SOURCEMAP=false才会为false，其他情况都为true

生产环境下source-map风格为source-map

开发环境下source-map风格为cheap-module-source-map

相关知识点：

文档链接https://www.webpackjs.com/configuration/devtool/#devtool
### optimization
optimization.minimizer中使用TerserWebpackPlugin进行代码压缩，内部使用的是terser这一工具

terserOptions中的一些配置项信息不在webpack文档中，在https://github.com/terser/terser#minify-options查看
### loader

### plugin


## 项目中相比cra默认webpack配置之外增删了哪些内容？

### stats
cra中设置了`stats: 'errors-warnings'`, 项目中将这个配置去掉后，默认每次编译完成就可以显示详细统计信息

### TerserWebpackPlugin
在terserOptions.compress中增添了三个配置，用于在生产环境移除console.log
```js
new TerserPlugin({
  terserOptions: {
    ...props,
    compress: {
      ...props,
      drop_console: true,
      drop_debugger: false,
      pure_funcs: ['console.log']
    },
  }
})
```
### alias
额外维护了一个alias.js文件，并在webpack.config.js中引入，增添在resolve.alias中

### splitChunks
添加了optimization.splitChunks配置
```js
splitChunks: {
  minRemainingSize: 0, // webpack5新属性，防止0尺寸的chunk
  cacheGroups: isEnvProduction ? {
    vendors: {
      test: /[\\/]node_modules[\\/]/,
      priority: -10,
      chunks: 'all',
      name: 'vendors'
    },
    common: {
      test: /[\\/]packages\/common[\\/]/,
      priority: -10,
      chunks: 'all',
      name: 'common'
    },
    [`${process.env.REACT_APP_PACKAGE}`]: {
      test: /[\\/]packages[\\/]${process.env.REACT_APP_PACKAGE}[\\/]/,
      priority: -10,
      chunks: 'all',
      name: `${process.env.REACT_APP_PACKAGE}`
    },
    i18n: {
      test: /[\\/]locale[\\/]|locales[\\/]/,
      name: 'i18n',
      chunks: 'async',
      enforce: true
    },
    default: {
      minChunks: 2,
      priority: -20,
      reuseExistingChunk: true
    }
  } : undefined
},
```

### loader
引入less
```js
  {
    test: lessRegex,
    exclude: lessModuleRegex,
    use: getStyleLoaders(
      {
        importLoaders: 2
      },
      'less-loader',
      {
        lessOptions: {
          modifyVars: {
            'root-entry-name': 'default',
            'table-header-bg': '#f7f8fa',
            'table-border-color': '#DADDE1',
            'table-row-hover-bg': '#f5f6f7',
            'border-radius-base': '8px',
            'border-color-base': '#DADDE1',
            'btn-default-color': '#5C646c',
            'input-placeholder-color': '#A9B1B9',
            'table-header-color': '#1a1c1f'
          },
          javascriptEnabled: true
        }
      }
    )
  },
  {
    test: lessModuleRegex,
    use: getStyleLoaders(
      {
        importLoaders: 2,
        modules: true,
        getLocalIdent: getCSSModuleLocalIdent
      },
      'less-loader',
      {
        lessOptions: {
          modifyVars: {
            'table-header-bg': '#f7f8fa',
            'table-border-color': '#DADDE1',
            'table-row-hover-bg': '#f5f6f7',
            'border-radius-base': '8px',
            'border-color-base': '#DADDE1',
            'btn-default-color': '#5C646c',
            'input-placeholder-color': '#A9B1B9',
            'table-header-color': '#1a1c1f'
          },
          javascriptEnabled: true
        }
      }
    )
  }
```
### plugin
引入`AntdDayjsWebpackPlugin`，用Day.js替换掉Ant Design中默认处理日期时间用的Moment.js，以减小打包体积

### paths
项目中可以通过在config-overrides.js中重写自定义的webpack配置，避免直接去修改config模块
```js
appWebpackOverrides: resolveApp('config-overrides.js'),
```

需要配合修改start脚本中读取配置的逻辑：
```js
const config = useOverrides
    ? require(paths.appWebpackOverrides)(
        configFactory("development"),
        process.env.NODE_ENV
      )
    : configFactory('development');
```