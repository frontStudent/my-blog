### 简介
使用nextjs + clerk + postgreSQL演示用户登录之后进行对列表文章进行收藏的功能

#### 项目地址
https://github.com/frontStudent/clerk-nextjs-app

### 项目搭建探索过程
在nextjs官网的authentication文档`https://nextjs.org/docs/app/building-your-application/authentication#examples`中，推荐了一些能够与nextjs集成来提供登录认证功能的库，选择了clerk进行尝试，大致步骤如下：

1. git clone了在clerk官网找到的一个demo项目`https://github.com/clerk/clerk-nextjs-demo-app-router`，并将origin路径换为自己的github仓库
2. 在vercel关联了这个github仓库之后Deploy，页面显示This Edge Function has crashed，在
`https://stackoverflow.com/questions/76841312/this-edge-function-has-crashed-when-using-clerk-middleware`
找到了解决方法，没有把clerk提供的环境变量加到vercel中去
3. 略微探索了下clerk的一些功能
  - authMiddleware配置不需要授权就能访问的公共页面
  - SignedIn、SignedOut、UserButton等内置组件
  - 在Clerk Dashboard中配置登录方式（关联哪些账号、邮件还是用户名登录等）
4. 参照nextjs官网Learn案例中集成postgreSQL的方法，`https://nextjs.org/learn/dashboard-app/setting-up-your-database`写了一个初始化sql脚本seed.js
但因为是以clerk官网demo为模板改的，所以要记得添加dotenv为开发依赖

#### 踩坑记录
clerk官网demo是next13的版本，nextjs官网Learn案例是next14的版本，`import { unstable_noStore as noStore } from 'next/cache'`这行在next13会报错

### 表结构
我们创建一张article表和一张favorite表
数据操作如下：
1. 未登录/已登录用户进入article页面（该页面不需要授权）时，查询article表，展示所有文章
2. 当已登录用户点击一条文章收藏时，拿到article的id和clerk提供的userId，在favorite表中插入一条数据
3. 当已登录用户点击取消收藏时，在favorite表中删除对应数据
4. 在UserButton中的定制收藏页面里，查询favorite表中userId为当前登录用户的记录，得到
所有的articleId，再根据articleId查询article表，得到收藏的文章列表