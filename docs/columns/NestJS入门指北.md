### nest增删改查入门
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

### 对两张存在一对多/多对一关系的表进行增删改查
有一个user表和一个photo表，一个user可以有多个photo，但一个photo只能属于一个user

### nest整合前端项目(vue/react均适用)
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