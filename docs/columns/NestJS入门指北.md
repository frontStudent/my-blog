### nest入门增删改查demo
参考 https://zhuanlan.zhihu.com/p/652374250

对这个demo有一些改动与扩展：
1. 增删改查都改为使用post方法，用@Body去接收参数
2. 更新和删除加了参数中是否传id的校验，抛出InternalServerErrorException返回对应的错误信息
3. 查询单个和查询全部合为一个路径，传id就查单个，不传id就返回全部
4. 在controller的每个路径方法中都加了不同的响应拦截器去封装响应结果，没有在main.ts全局加
5. 在创建user实体时使用@CreateDateColumn()和@UpdateDateColumn()去创建时间类型的列实现自动更新时间