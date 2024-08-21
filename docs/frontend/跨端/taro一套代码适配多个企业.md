qince-taro如何一套代码适配多个不同企业的小程序

在package.json中自定义脚本命令

```json
"scripts": {
    "dev:xxx": "node scripts/start.js :xxx&& npm run dev:weapp",
    "build::xxx": "node scripts/start.js :xxx&& npm run build:weapp"
}
```

xxx为具体企业名称，以企业名称为key维护一个配置对象，在scripts/start.js中根据key获取配置参数，读取配置模版，替换掉具体参数后再进行打包上传

```js title="配置数据文件"
module.exports = {
  qince: {
    // 勤策
    wxServer: '"https://wxgateway.waiqin365.com"',
    appId: 'wxeed62e5cb360a640',
    corpId: 'ww94b1f6c5820ebec9',
    mode: 'normal', // 走正常登录
    appName: '勤策',
    uploadPath: 'https://upload.waiqin365.com',
    resourcePath: 'https://image.waiqin365.com',
    loginPage: 'pages/Login/index'
  },
  qinceTest: {
    // 柠云测试
    wxServer: '"https://wxgatewaytest.waiqin365.com"',
    appId: 'wxb75c623d16d21769',
    corpId: 'ww94b1f6c5820ebec9',
    mode: 'normal',
    appName: '柠云测试',
    uploadPath: 'https://2huanjingupload.waiqin365.com',
    resourcePath: 'https://image-test.waiqin365.com',
    loginPage: 'pages/Login/index'
  },
  angelyeast: {
    // 琪事通
    appId: 'wxb1a57119e38ac28a',
    corpId: 'wxa2c2f94e5c9d262c',
    appServer: 'https://market.angelyeast.com',
    wxServer: '"https://wxgateway.waiqin365.com"',
    mode: 'simple', // 走定制简易登录
    appName: '琪事通',
    loginPage: 'pages/SimpleLogin/index'
  },
  BC365: {
    appId: 'wxd94faa56a519f483',
    corpId: 'wxa2c2f94e5c9d262c',
    appServer: 'https://wqcloud.babycare.com',
    wxServer: '"https://wxgateway.waiqin365.com"',
    mode: 'simple', // 走定制简易登录
    appName: 'BC365',
    loginPage: 'pages/SimpleLogin/index'
  },
  janefer: {
    appId: 'wx0c88e702fb85268a',
    corpId: 'wxa2c2f94e5c9d262c',
    appServer: 'https://cloud.region1.waiqin365.com',
    wxServer: '"https://wxgateway.waiqin365.com"',
    mode: 'normal', // 走勤策
    appName: '珍妮花',
    loginPage: 'pages/Login/index'
  },
  wuliangye: {
    appId: 'wx69eeabb5fcab9233',
    corpId: 'wxa2c2f94e5c9d262c',
    appServer: 'https://nxsfa-wqcloud.plsbd.com',
    // wxServer: '"https://nxsfa-wqwxwg.plsbd.com"',
    wxServer: '"https://wxgateway.waiqin365.com"',
    uploadPath: 'https://nxsfa-wqupload.plsbd.com',
    resourcePath: 'https://nxsfa-wqimage.plsbd.com',
    mode: 'wxSimple', // 走简易登录 且可以使用网关快捷登录
    appName: '五粮浓香',
    loginPage: 'pages/SimpleLogin/index'
  },
  xiaopi: {
    appId: 'wx0441f15b3e34dddf',
    corpId: 'wxa9304bb26336aefe',
    appServer: 'https://sfa.littlefreddie.cn',
    wxServer: '"https://wxgateway.waiqin365.com"',
    mode: 'simple', // 走定制小程序
    appName: '小皮SFA',
    loginPage: 'pages/SimpleLogin/index'
  }, 
  langjiu: {
    appId: 'wx3aefb5144344bd03',
    corpId: 'wx2ae7b3664262a320',
    appServer: 'https://ydfx.langjiu.cn',
    wxServer: '"https://wqwxwg.langjiu.cn"',
    mode: 'simple', // 走定制小程序
    appName: '郎酒',
    loginPage: 'pages/SimpleLogin/index'
  }
}
```


