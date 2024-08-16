https://www.bilibili.com/video/BV1j94y1W71m

## 简介
使用spring initializr快速搭建三层架构项目，集成mybatis完成单表CRUD

### spring initializr项目初始化

![init1](./imgs/init1.jpg)
两种server url的区别：
- https://start.spring.io  只能选择java17及以上的版本
- https://start.aliyun.com 可以选择java8及以上

集成依赖：
![init2](./imgs/init2.jpg)

### resources目录下application.yml文件配置
```yml
server:
  port: 8071
spring:
  datasource:
    username: root
    password: abc740531
    url: jdbc:mysql://localhost:3306/hello?useUnicode=true & characterEncoding=utf-8 &
      useSSL=true & serverTimezone=Asia/Shanghai
    driver-class-name: com.mysql.cj.jdbc.Driver

mybatis:
  # Mybatis 配置文件的位置
  mapper-locations: classpath:/mapper/*.xml

  # 开启 Mybatis 的驼峰命名规则自动映射功能
  # 这样就可以将数据库中下划线命名的字段自动映射到实体类的驼峰命名属性上
  configuration:
    map-underscore-to-camel-case: true

  # 配置后可以在 XML 映射文件中直接使用类名,无需指定完整的包名路径
  type-aliases-package: com.example.demo.pojo
```

### 持久层
```java

```

### 响应结果封装
```java

```

### 统一异常处理
#### 自定义异常类

在exception包下新建BizException类，继承RuntimeException
之后可以在idea中使用command + n快捷键重写相关方法
![except](./imgs/except.jpg)


代码如下：
```java
package org.syb001.singlecurd.common.exception;

import lombok.Data;

@Data
public class BizException extends RuntimeException{
    public BizException() {
        super();
    }

    public BizException(String message) {
        super(message);
    }

    public BizException(String message, Throwable cause) {
        super(message, cause);
    }

    public BizException(Throwable cause) {
        super(cause);
    }

    protected BizException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
```

#### 异常错误码与错误信息枚举类
```java
package org.syb001.singlecurd.common.enums;

public enum ErrorEnum {
    USER_DUPLICATE("USER_DUPLICATE", "用户名已被占用");

    private final String code;
    private final String message;

    // 枚举的构造函数
    ErrorEnum(String code, String message) {
        this.code = code;
        this.message = message;
    }

    // 获取错误码
    public String getCode() {
        return code;
    }

    // 获取错误消息
    public String getMessage() {
        return message;
    }
}
```

在 Java 枚举中，通常建议枚举的字段应该是 final 的。否则idea会提示`枚举 'ErrorEnum' 中存在非 final 字段`

这是因为枚举实例的字段在实例化后不应该被修改。枚举值通常表示一组固定的常量，因此其内部状态也应该是不可变的。