
### 备忘参考
- mybatis 传值方式: https://blog.csdn.net/bdqx_007/article/details/94836637

### Mybatis Plus 分页

配置分页插件
```java
@Configuration
public class MybatisConfig {
    @Bean
    public MybatisPlusInterceptor mybatisPlusInterceptor() {
        MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
        // 添加分页插件
        interceptor.addInnerInterceptor(new PaginationInnerInterceptor(DbType.MYSQL));
        return interceptor;
    }
}
```

使用IService接口中的lambdaQuery方法进行分页查询，封装了new lambdaQueryChainWrapper的过程
```java
service.lambdaQuery().page(page)
```
实际业务中会一般还会封装两个方法
1. 将前端的分页参数(包括排序参数)转换为lambdaQuery所需的Page对象，这个方法通常放在PageParam中
2. 将lambdaQuery查询结果转换为前端所需的PageDTO对象，这个方法通常放在PageDTO中