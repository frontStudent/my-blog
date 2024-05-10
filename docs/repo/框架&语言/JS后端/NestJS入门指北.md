## nest增删改查入门
参考 https://zhuanlan.zhihu.com/p/652374250

对这个demo的一些改动与扩展：
1. 增删改查都改为使用post方法，用@Body去接收参数
2. 更新和删除加了参数中是否传id的校验，抛出InternalServerErrorException返回对应的错误信息
3. 查询单个和查询全部合为一个路径，传id就查单个，不传id就返回全部
4. 在controller的每个路径方法中都加了不同的响应拦截器去封装响应结果，没有在main.ts全局加
5. 在创建user实体时使用@CreateDateColumn()和@UpdateDateColumn()去创建时间类型的列实现自动更新时间

下面的篇幅对该入门手册进行精简，省去讲解，只保留必要的指令和操作，快速生成一个crud项目：
- 脚手架安装
```shell
npm i -g @nestjs/cli
```

- 创建项目
```shell
nest new project-name
```

- 启动项目热更新
```shell
npm run start:dev
```

- 生成模块
```shell
nest g resource user
```

- 生成模块时去掉测试文件，在nest-cli.json中配置
```json
"generateOptions": {
    "spec": false
}
```

- 安装数据库连接工具
```shell
npm install @nestjs/typeorm typeorm mysql -S
```

- 修改app.module.ts内容，配置数据库
```ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'abc740531',
      database: 'hello',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

- 过滤器创建
```
nest g filter common/filter/http-exception
```

- 拦截器创建
```
nest g interceptor common/interceptor/transform
```

#### github地址：https://github.com/frontStudent/nest-simple-curd
其他一些文件内容去这个项目中复制修改即可

## 登录注册
### jwt - 单token - 用户名+密码
#### `/user/register` 注册接口可能的返回：
1. 用户名和密码都通过各自的校验了
```json
{
  "code": "1",
  "data": { "token": "xxx" },
  "message": "注册成功！"
}
```
2. 用户名和密码未通过各自的校验
前端表单会校验住不发请求（nest中是用class validator在dto里校验单个参数）

3. 用户名已存在 抛BadRequest异常 经过ExceptionFilter后返回
```json
{
  "code": "0",
  "statusCode": 400,
  "message": "该用户名已存在！"
}
```

#### `/user/login` 注册接口可能的返回：
1. 用户名不存在 / 用户名和密码不匹配
```json
{
  "code": "0",
  "statusCode": 400,
  "message": "账号或密码输入错误！"
}
```
2. 用户名和密码都正确
```json
{
  "code": "1",
  "data": { "token": "xxx"  },
  "message": "登录成功！"
}
```

#### `/aaa` 代表登录后才能访问的接口
nest用@UseGuards(LoginGuard)来保护该接口
1. header中的token有效
```json
{
  "code": "1",
  "data": {
      "currentUser": {
          "username": "xxx"
      },
      "content": "aaa"
  },
  "message": "请求成功！"
}
```
2. header中的token无效 抛UnauthorizedException异常 经过ExceptionFilter后返回
```json
{
  "code": "0",
  "statusCode": 401,
  "message": "登录已失效，请重新登录！"
}
```
#### 前端axios处理逻辑
- 请求时：对除了登录和注册接口外的其他接口，在请求头中添加token
- 响应时：
拦截器中错误处理时，statusCode为401时单独处理，因为要跳转回登录页面，其他情况直接弹message报错，内容就是后端给的message

拦截器中响应成功处理时，有token时单独处理，因为要跳转到首页，其他情况直接返response.data，也就是后端给的响应结果


## 对两张存在一对多/多对一关系的表进行增删改查
有一个user表和一个photo表，一个user可以有多个photo，但一个photo只能属于一个user

## nest整合前端项目(vue/react均适用)
先将前端项目打包，将打包后的文件夹放在nest项目的public文件夹下，然后修改nest项目main.ts文件:
```ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // const app = await NestFactory.create(AppModule);
  app.useStaticAssets('public');
  app.enableCors(); // 允许跨域
  await app.listen(8084);
}
bootstrap();
```

app.controller.ts文件中改动：
```ts
import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import * as path from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res: Response): any {
    res.sendFile(path.join(__dirname, '../public/vue-ui/index.html'));
    // return this.appService.getHello();
  }
}
```

打开浏览器访问当前端口号下根路径即可进入到前端打包后的index.html页面
如果存在页面渲染异常问题，检查index.html文件中script标签的src路径是否正确