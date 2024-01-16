### IDEA中第一个springboot增删改查应用
#### IDEA安装破解
2024.1.15 参考下面的微信公众号文章安装idea2023.1版本并成功破解
https://mp.weixin.qq.com/s/ghd40kxG6JCL4uFsRYXmYA

#### 初始化工程目录 - 方式一
网上很多都是尝试用创建一个maven项目的方式去初始化springboot项目
但在idea2023.1中New project时不存在maven方式新建，只有maven archetype，其实就是选择某种固定的原型模板去创建maven项目
两种最常见的模板是：
- maven-archetype-quickstart 创建一个纯后台程序，没有前端代码时可以用
- maven-archetype-webapp 创建一个带前端代码web应用时可以用

也可以用命令行选择固定模板去创建maven项目:（2024.1.15就是采用的这种方式）
```bash
mvn archetype:generate -DgroupId=com.example -DartifactId=myproject -DarchetypeArtifactId=maven-archetype-webapp -DinteractiveMode=false
```
要等待7-10分钟

基本的目录结构出来之后可以参考文章：https://blog.csdn.net/houpeibin2012/article/details/104212412 去添加java源代码文件夹和com.test包

#### 初始化工程目录 - 方式二
New project时选择Spring Initializr创建（2024.1.15并未采取这种方式）

两种server url的区别：
- https://start.spring.io  只能选择java17及以上的版本
- https://start.aliyun.com 可以选择java8及以上

注：jdk1.8 即jdk8

#### 主程序入口/依赖包配置/数据库配置
- 在src/main/java/com.test包下新建MainApplication.java文件，内容如下:
```java
package com.test;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
public class MainApplication {
    public static void main(String [] args){
        SpringApplication.run(MainApplication.class,args);
    }
}
```

- 在pom.xml中添加依赖包
```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.example</groupId>
  <artifactId>myproject</artifactId>
  <packaging>war</packaging>
  <version>1.0-SNAPSHOT</version>
  <name>myproject Maven Webapp</name>
  <url>http://maven.apache.org</url>
  <parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.7.8</version>
  </parent>
  <dependencies>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
      <groupId>org.mybatis.spring.boot</groupId>
      <artifactId>mybatis-spring-boot-starter</artifactId>
      <version>2.1.3</version>
    </dependency>
    <dependency>
      <groupId>mysql</groupId>
      <artifactId>mysql-connector-java</artifactId>
      <version>8.0.25</version>
    </dependency>
    <dependency>
      <groupId>com.alibaba</groupId>
      <artifactId>druid</artifactId>
      <version>1.2.3</version>
    </dependency>
    <dependency>
      <groupId>io.jsonwebtoken</groupId>
      <artifactId>jjwt</artifactId>
      <version>0.9.1</version>
    </dependency>
  </dependencies>
  <build>
    <finalName>myproject</finalName>
  </build>
</project>
```

- 在resources目录下新建application.yml文件，并配置端口号以及数据库连接相关信息
```yml
server:
  port: 8071
spring:
  datasource:
    type: com.alibaba.druid.pool.DruidDataSource
    username: root
    password: abc740531
    url: jdbc:mysql://localhost:3306/billManagement?useUnicode=true & characterEncoding=utf-8 &
      useSSL=true & serverTimezone=Asia/Shanghai
    driver-class-name: com.mysql.jdbc.Driver
mybatis:
  mapper-locations: classpath:/Mapper/*.xml
  type-aliases-package: com.test.Entity
```

#### Controller/Service/Dao/Entity
首先在com.test下新建四个包，分别是Controller/Service/Dao/Entity
按照从后往前的顺序（越接近数据操作越后）
1. 在com.test.Entity下新建User类，用于定义用户实体
```java
package com.test.Entity;
import java.sql.Timestamp;

public class User {
    private Integer id;
    private String name;
    private Timestamp create_time;
    private Timestamp update_time;W
    // 省略getter和setter方法 可右击选择菜单中generate生成
}

```
2. 在com.test.Dao下新建UserDao类，用于处理用户数据库操作
```java
package com.test.Dao;

import com.test.Entity.User;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
@Mapper
@Repository
public interface UserDao {
    List<User> queryUser(Integer id);
    Integer addUser(String name);

    Integer updateUser(Integer id, String name);
    Integer deleteUser(Integer id);
}

```
3. 在com.test.Service下新建UserService类，用于处理用户业务逻辑
```java
package com.test.Service;

import com.test.Dao.UserDao;
import com.test.Entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("UserService")
public class UserService {
    @Autowired
    private UserDao userDao;

    public List<User> queryUser(Integer id){
        System.out.println(id);
        return userDao.queryUser(id);
    }
    public Integer addUser(String name){
        return userDao.addUser(name);
    }

    public Integer updateUser(Integer id, String name){
        return userDao.updateUser(id, name);
    }

    public Integer deleteUser(Integer id){
        return userDao.deleteUser(id);
    }
}
```
4. 在com.test.Controller下新建UserController类，用于接收用户请求参数 
```java
package com.test.controller;
import com.test.Entity.User;
import com.test.Service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/queryUser")
    public List<User> queryUser(@RequestBody Map<String,Integer> params) {
        List<User> users = userService.queryUser(params.get("id"));
        return users;
    }

    @PostMapping("/addUser")
    public void addUser(@RequestBody Map<String,String> params) {
        userService.addUser(params.get("name"));
    }

    @PostMapping("/updateUser")
    public void updateUser(@RequestBody Map<String,String> params) {
        userService.updateUser(Integer.parseInt(params.get("id")), params.get("name"));
    }

    @PostMapping("/deleteUser")
    public void deleteUser(@RequestBody Map<String,Integer> params) {
        userService.deleteUser(params.get("id"));
    }
}
```

这里都是写的需要用post方式请求的接口，并都使用map接收
关于springboot中controller更多的参数接收方式可参考：
- https://blog.csdn.net/jumpe_17/article/details/117125508
- https://blog.csdn.net/jumpe_17/article/details/117165390

5. 在resources/Mapper目录下新建userMapper.xml文件，并配置SQL语句
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.test.Dao.UserDao">
    <select id="queryUser" resultType="User">
        select * from user
        <if test="id != -1">
            where id = #{id}
        </if> order by create_time
    </select>
    <insert id="addUser">
        insert into user(name) values(#{name})
    </insert>
    <update id="updateUser">
        update user set name = #{name} where id = #{id}
    </update>
    <delete id="deleteUser">
        delete from user where id=#{id};
    </delete>
</mapper>
```

#### 启动主应用程序入口，即可使用ApiPost工具访问接口测试