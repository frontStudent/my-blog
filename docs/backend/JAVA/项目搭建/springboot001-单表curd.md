https://www.bilibili.com/video/BV1j94y1W71m

## 简介
使用spring initializr快速搭建三层架构项目，集成mybatis完成单表CRUD
目录结构如下

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
这里使用mybatis时采用了注解方式和xml方式混用，（仅供演示）

```java
package org.syb001.singlecurd.mapper;

import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;
import org.syb001.singlecurd.pojo.User;

import java.util.List;

@Mapper
@Repository
public interface UserMapper {
    User getUserById(Integer id);

    User getUserByName(String username);

    @Select("select * from test_user")
    List<User> getAllUser();

    @Insert("insert into test_user(username) values(#{username})")
    Integer addUser(String username);

    @Update("update test_user set username = #{username} where id = #{id}")
    Integer updateUser(Integer id, String username);

    @Delete("delete from test_user where id=#{id}")
    Integer deleteUser(Integer id);
}
```

resources/mapper/userMapper.xml
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="org.syb001.singlecurd.mapper.UserMapper">
    <select id="getUserById" resultType="User">
        select * from test_user where id = #{id}
    </select>
    <select id="getUserByName" resultType="User">
        select * from test_user where username = #{username}
    </select>
</mapper>
```

### pojo

### dto
如何处理update和add的dto(只相差一个id，使用同一个dto进行分组校验还是用update的dto继承add的dto？)

#### 引入validation进行校验

https://segmentfault.com/a/1190000023471742

@NotNull
适用于基本数据类型(Integer，Long，Double等等)，当 @NotNull 注解被使用在 String 类型的数据上，则表示该数据不能为 Null（但是可以为 Empty）
@NotBlank
适用于 String 类型的数据上，加了@NotBlank 注解的参数不能为 Null 且 trim() 之后 size > 0
@NotEmpty
适用于 String、Collection集合、Map、数组等等，加了@NotEmpty 注解的参数不能为 Null 或者 长度为 0

### 业务层



### 响应结果封装
```java

```

静态方法中使用泛型

### 统一异常处理
#### 自定义异常类

在exception包下新建BizException类，继承RuntimeException
之后可以在idea中使用command + n快捷键重写相关方法
![except](./imgs/except.jpg)


代码如下：
```java
package org.syb001.singlecurd.common.exception;


import lombok.Data;
import org.syb001.singlecurd.common.enums.ErrorEnum;

@Data
// 插入用户时 用户名重复异常
public class BizException extends RuntimeException {
    private String errorCode;
    public BizException() {
        super();
    }

    public BizException(String message) {
        super(message);
    }

    public BizException(String errorCode, String message) {
        super(message);
        this.errorCode = errorCode;
    }

    public BizException(ErrorEnum errorEnum) {
        super(errorEnum.getMessage());
        this.errorCode = errorEnum.getCode();
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
    USER_DUPLICATE("USER_DUPLICATE", "用户名已被占用"),
    USER_NOT_FOUND("USER_NOT_FOUND", "用户不存在");

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