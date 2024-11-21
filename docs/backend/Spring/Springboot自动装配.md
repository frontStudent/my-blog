
### 概述
在Spring Boot项目中有一个注解@SpringBootApplication，这个注解是对三个注解进行了封装：@SpringBootConfiguration、@EnableAutoConfiguration、@ComponentScan
其中@EnableAutoConfiguration是实现自动化配置的核心注解。
该注解通过@Import注解导入AutoConfigurationImportSelector，这个类实现了一个导入器接口ImportSelector。在该接口中存在一个方法selectImports，
该方法的返回值是一个数组，数组中存储的就是要被导入到spring容器中的类的全类名。在AutoConfigurationImportSelector类中重写了这个方法,
该方法内部就是读取了项目的classpath路径下META-INF/spring.factories文件中的所配置的类的全类名。
在这些配置类中所定义的Bean会根据条件注解所指定的条件来决定是否需要将其导入到Spring容器中。

### starter开发并打包至本地仓库
使用maven-archetype-quickstart新建maven项目，新建resources/META-INF/spring-factories

#### AutoConfigurationImportFilter

#### 打包并验证
1. 上传: 在idea中使用自带的maven工具 选择点击install就可以上传到本地仓库
2. 查看: 默认本地仓库路径为~/.m2/repository，ls后显示的一级目录名是所有的groupId
3. 验证: 新启一个项目，在pom.xml中引入自定义starter

#### 参考
- https://blog.csdn.net/qq_35971258/article/details/143169166
- https://developer.aliyun.com/article/893073

