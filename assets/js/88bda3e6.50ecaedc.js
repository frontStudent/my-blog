"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[8471],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8823:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const i={},o=void 0,s={unversionedId:"backend/Spring/\u9879\u76ee\u642d\u5efa/\u5355\u8868curd",id:"backend/Spring/\u9879\u76ee\u642d\u5efa/\u5355\u8868curd",title:"\u5355\u8868curd",description:"https://www.bilibili.com/video/BV1j94y1W71m",source:"@site/docs/backend/Spring/\u9879\u76ee\u642d\u5efa/\u5355\u8868curd.md",sourceDirName:"backend/Spring/\u9879\u76ee\u642d\u5efa",slug:"/backend/Spring/\u9879\u76ee\u642d\u5efa/\u5355\u8868curd",permalink:"/my-blog/docs/backend/Spring/\u9879\u76ee\u642d\u5efa/\u5355\u8868curd",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/backend/Spring/\u9879\u76ee\u642d\u5efa/\u5355\u8868curd.md",tags:[],version:"current",frontMatter:{},sidebar:"backendSidebar",previous:{title:"sky-takeout",permalink:"/my-blog/docs/backend/Spring/\u9879\u76ee\u642d\u5efa/sky-takeout"},next:{title:"\u82e5\u4f9d",permalink:"/my-blog/docs/backend/Spring/\u9879\u76ee\u642d\u5efa/\u82e5\u4f9d"}},l={},p=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"spring initializr\u9879\u76ee\u521d\u59cb\u5316",id:"spring-initializr\u9879\u76ee\u521d\u59cb\u5316",level:3},{value:"resources\u76ee\u5f55\u4e0bapplication.yml\u6587\u4ef6\u914d\u7f6e",id:"resources\u76ee\u5f55\u4e0bapplicationyml\u6587\u4ef6\u914d\u7f6e",level:3},{value:"\u6301\u4e45\u5c42",id:"\u6301\u4e45\u5c42",level:3},{value:"pojo",id:"pojo",level:3},{value:"\u4e1a\u52a1\u5c42",id:"\u4e1a\u52a1\u5c42",level:3},{value:"\u5f02\u5e38\u5904\u7406",id:"\u5f02\u5e38\u5904\u7406",level:3},{value:"\u81ea\u5b9a\u4e49\u5f02\u5e38\u7c7b",id:"\u81ea\u5b9a\u4e49\u5f02\u5e38\u7c7b",level:4},{value:"\u5f02\u5e38\u9519\u8bef\u7801\u4e0e\u9519\u8bef\u4fe1\u606f\u679a\u4e3e\u7c7b",id:"\u5f02\u5e38\u9519\u8bef\u7801\u4e0e\u9519\u8bef\u4fe1\u606f\u679a\u4e3e\u7c7b",level:4},{value:"\u5168\u5c40\u5f02\u5e38\u5904\u7406\u7c7b",id:"\u5168\u5c40\u5f02\u5e38\u5904\u7406\u7c7b",level:4},{value:"dto",id:"dto",level:3},{value:"\u5f15\u5165validation\u8fdb\u884c\u6821\u9a8c",id:"\u5f15\u5165validation\u8fdb\u884c\u6821\u9a8c",level:4},{value:"\u54cd\u5e94\u7ed3\u679c\u5c01\u88c5",id:"\u54cd\u5e94\u7ed3\u679c\u5c01\u88c5",level:4}],c={toc:p},u="wrapper";function m(e){let{components:n,...i}=e;return(0,a.kt)(u,(0,r.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1j94y1W71m"},"https://www.bilibili.com/video/BV1j94y1W71m")),(0,a.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("p",null,"\u4f7f\u7528spring initializr\u5feb\u901f\u642d\u5efa\u4e09\u5c42\u67b6\u6784\u9879\u76ee\uff0c\u96c6\u6210mybatis\u5b8c\u6210\u5355\u8868CRUD"),(0,a.kt)("p",null,"github\u5730\u5740\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/frontStudent/springboot-single-curd"},"https://github.com/frontStudent/springboot-single-curd")),(0,a.kt)("h3",{id:"spring-initializr\u9879\u76ee\u521d\u59cb\u5316"},"spring initializr\u9879\u76ee\u521d\u59cb\u5316"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"init1",src:t(5539).Z,width:"1600",height:"1422"}),"\n\u4e24\u79cdserver url\u7684\u533a\u522b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://start.spring.io"},"https://start.spring.io"),"  \u53ea\u80fd\u9009\u62e9java17\u53ca\u4ee5\u4e0a\u7684\u7248\u672c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://start.aliyun.com"},"https://start.aliyun.com")," \u53ef\u4ee5\u9009\u62e9java8\u53ca\u4ee5\u4e0a")),(0,a.kt)("p",null,"\u96c6\u6210\u4f9d\u8d56\uff1a\n",(0,a.kt)("img",{alt:"init2",src:t(700).Z,width:"1600",height:"1422"})),(0,a.kt)("h3",{id:"resources\u76ee\u5f55\u4e0bapplicationyml\u6587\u4ef6\u914d\u7f6e"},"resources\u76ee\u5f55\u4e0bapplication.yml\u6587\u4ef6\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"server:\n  port: 8071\nspring:\n  datasource:\n    username: root\n    password: abc740531\n    url: jdbc:mysql://localhost:3306/hello?useUnicode=true & characterEncoding=utf-8 &\n      useSSL=true & serverTimezone=Asia/Shanghai\n    driver-class-name: com.mysql.cj.jdbc.Driver\n\nmybatis:\n  # Mybatis \u914d\u7f6e\u6587\u4ef6\u7684\u4f4d\u7f6e\n  mapper-locations: classpath:/mapper/*.xml\n\n  # \u5f00\u542f Mybatis \u7684\u9a7c\u5cf0\u547d\u540d\u89c4\u5219\u81ea\u52a8\u6620\u5c04\u529f\u80fd\n  # \u8fd9\u6837\u5c31\u53ef\u4ee5\u5c06\u6570\u636e\u5e93\u4e2d\u4e0b\u5212\u7ebf\u547d\u540d\u7684\u5b57\u6bb5\u81ea\u52a8\u6620\u5c04\u5230\u5b9e\u4f53\u7c7b\u7684\u9a7c\u5cf0\u547d\u540d\u5c5e\u6027\u4e0a\n  configuration:\n    map-underscore-to-camel-case: true\n\n  # \u914d\u7f6e\u540e\u53ef\u4ee5\u5728 XML \u6620\u5c04\u6587\u4ef6\u4e2d\u76f4\u63a5\u4f7f\u7528\u7c7b\u540d,\u65e0\u9700\u6307\u5b9a\u5b8c\u6574\u7684\u5305\u540d\u8def\u5f84\n  type-aliases-package: com.example.demo.pojo\n")),(0,a.kt)("h3",{id:"\u6301\u4e45\u5c42"},"\u6301\u4e45\u5c42"),(0,a.kt)("p",null,"\u8fd9\u91cc\u4f7f\u7528mybatis\u65f6\u91c7\u7528\u4e86\u6ce8\u89e3\u65b9\u5f0f\u548cxml\u65b9\u5f0f\u6df7\u7528\uff0c\u7a0d\u590d\u6742\u7684\u67e5\u8be2\u4f7f\u7528\u4e86xml\u65b9\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package org.syb001.singlecurd.mapper;\n\nimport org.apache.ibatis.annotations.*;\nimport org.springframework.stereotype.Repository;\nimport org.syb001.singlecurd.dto.request.UserQueryDto;\nimport org.syb001.singlecurd.pojo.User;\n\nimport java.util.List;\n\n@Mapper\n@Repository\npublic interface UserMapper {\n\n    List<User> getUserByCondition(UserQueryDto userQueryDto);\n\n    @Insert("insert into test_user(username) values(#{username})")\n    Integer addUser(String username);\n\n    @Update("update test_user set username = #{username} where id = #{id}")\n    Integer updateUser(Integer id, String username);\n\n    @Delete("delete from test_user where id=#{id}")\n    Integer deleteUser(Integer id);\n}\n')),(0,a.kt)("p",null,"resources/mapper/userMapper.xml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8" ?>\n<!DOCTYPE mapper\n        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"\n        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n<mapper namespace="org.syb001.singlecurd.mapper.UserMapper">\n    <select id="getUserByCondition" resultType="User">\n        select * from test_user\n        <where>\n            <if test="id != null">\n                and id = #{id}\n            </if>\n            <if test="username != null">\n                and username = #{username}\n            </if>\n            <if test="startTime != null">\n                and create_time >= #{startTime}\n            </if>\n            <if test="endTime != null">\n                and create_time &lt;= #{endTime}\n            </if>\n        </where> order by update_time desc\n    </select>\n</mapper>\n')),(0,a.kt)("p",null,"\u8fd9\u8fb9\u6709\u4e24\u4e2a\u6ce8\u610f\u70b9\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7528mybatis\u52a8\u6001SQL\u7684where\u6807\u7b7e\u5904\u7406\u591a\u4e2a\u67e5\u8be2\u6761\u4ef6\u62fc\u63a5\uff0c\u5f53\u67e5\u8be2\u6761\u4ef6\u4e3a\u7a7a\u65f6\uff0cwhere\u6807\u7b7e\u4f1a\u81ea\u52a8\u53bb\u6389and"),(0,a.kt)("li",{parentName:"ol"},"xml\u4e2d\u7528","<","\u7b26\u53f7\u66ff\u6362\u5c0f\u4e8e\u53f7\u907f\u514d\u62a5\u9519\n",(0,a.kt)("a",{parentName:"li",href:"https://blog.csdn.net/weixin_44443884/article/details/114624744"},"https://blog.csdn.net/weixin_44443884/article/details/114624744"))),(0,a.kt)("h3",{id:"pojo"},"pojo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package org.syb001.singlecurd.pojo;\n\nimport com.fasterxml.jackson.annotation.JsonFormat;\nimport lombok.AllArgsConstructor;\nimport lombok.Data;\nimport lombok.NoArgsConstructor;\n\nimport java.time.LocalDateTime;\n\n@Data\n@NoArgsConstructor\n@AllArgsConstructor\npublic class User {\n    private Integer id;\n    private String username;\n\n    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")\n    private LocalDateTime createTime;\n\n    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")\n    private LocalDateTime updateTime;\n}\n\n')),(0,a.kt)("h3",{id:"\u4e1a\u52a1\u5c42"},"\u4e1a\u52a1\u5c42"),(0,a.kt)("p",null,"\u4e1a\u52a1\u5c42\u4e0b\u4e00\u822c\u5206\u4e3aImpl\u5b9e\u73b0\u7c7b\u548c\u63a5\u53e3"),(0,a.kt)("h3",{id:"\u5f02\u5e38\u5904\u7406"},"\u5f02\u5e38\u5904\u7406"),(0,a.kt)("h4",{id:"\u81ea\u5b9a\u4e49\u5f02\u5e38\u7c7b"},"\u81ea\u5b9a\u4e49\u5f02\u5e38\u7c7b"),(0,a.kt)("p",null,"\u5728exception\u5305\u4e0b\u65b0\u5efaBizException\u7c7b\uff0c\u7ee7\u627fRuntimeException\n\u4e4b\u540e\u53ef\u4ee5\u5728idea\u4e2d\u4f7f\u7528command + n\u5feb\u6377\u952e\u91cd\u5199\u76f8\u5173\u65b9\u6cd5\n",(0,a.kt)("img",{alt:"except",src:t(2685).Z,width:"748",height:"1230"})),(0,a.kt)("p",null,"\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"package org.syb001.singlecurd.common.exception;\n\n\nimport lombok.Data;\nimport org.syb001.singlecurd.common.enums.ErrorEnum;\n\n@Data\n// \u63d2\u5165\u7528\u6237\u65f6 \u7528\u6237\u540d\u91cd\u590d\u5f02\u5e38\npublic class BizException extends RuntimeException {\n    private String errorCode;\n    public BizException() {\n        super();\n    }\n\n    public BizException(String message) {\n        super(message);\n    }\n\n    public BizException(String errorCode, String message) {\n        super(message);\n        this.errorCode = errorCode;\n    }\n\n    public BizException(ErrorEnum errorEnum) {\n        super(errorEnum.getMessage());\n        this.errorCode = errorEnum.getCode();\n    }\n\n    public BizException(String message, Throwable cause) {\n        super(message, cause);\n    }\n\n    public BizException(Throwable cause) {\n        super(cause);\n    }\n\n    protected BizException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {\n        super(message, cause, enableSuppression, writableStackTrace);\n    }\n}\n")),(0,a.kt)("h4",{id:"\u5f02\u5e38\u9519\u8bef\u7801\u4e0e\u9519\u8bef\u4fe1\u606f\u679a\u4e3e\u7c7b"},"\u5f02\u5e38\u9519\u8bef\u7801\u4e0e\u9519\u8bef\u4fe1\u606f\u679a\u4e3e\u7c7b"),(0,a.kt)("h4",{id:"\u5168\u5c40\u5f02\u5e38\u5904\u7406\u7c7b"},"\u5168\u5c40\u5f02\u5e38\u5904\u7406\u7c7b"),(0,a.kt)("h3",{id:"dto"},"dto"),(0,a.kt)("p",null,"update\u548cadd\u7684dto\u53ea\u76f8\u5dee\u4e00\u4e2aid\uff0c\u53ef\u4ee5\u4f7f\u7528\u540c\u4e00\u4e2adto\u8fdb\u884c\u5206\u7ec4\u6821\u9a8c\uff0c\u4e5f\u53ef\u4ee5\u7528update\u7684dto\u7ee7\u627fadd\u7684dto"),(0,a.kt)("h4",{id:"\u5f15\u5165validation\u8fdb\u884c\u6821\u9a8c"},"\u5f15\u5165validation\u8fdb\u884c\u6821\u9a8c"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://segmentfault.com/a/1190000023471742"},"https://segmentfault.com/a/1190000023471742")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"@NotNull\n\u9002\u7528\u4e8e\u57fa\u672c\u6570\u636e\u7c7b\u578b(Integer\uff0cLong\uff0cDouble\u7b49\u7b49)\uff0c\u5f53 @NotNull \u6ce8\u89e3\u88ab\u4f7f\u7528\u5728 String \u7c7b\u578b\u7684\u6570\u636e\u4e0a\uff0c\u5219\u8868\u793a\u8be5\u6570\u636e\u4e0d\u80fd\u4e3a Null\uff08\u4f46\u662f\u53ef\u4ee5\u4e3a Empty\uff09"),(0,a.kt)("li",{parentName:"ul"},"@NotBlank\n\u9002\u7528\u4e8e String \u7c7b\u578b\u7684\u6570\u636e\u4e0a\uff0c\u52a0\u4e86@NotBlank \u6ce8\u89e3\u7684\u53c2\u6570\u4e0d\u80fd\u4e3a Null \u4e14 trim() \u4e4b\u540e size > 0"),(0,a.kt)("li",{parentName:"ul"},"@NotEmpty\n\u9002\u7528\u4e8e String\u3001Collection\u96c6\u5408\u3001Map\u3001\u6570\u7ec4\u7b49\u7b49\uff0c\u52a0\u4e86@NotEmpty \u6ce8\u89e3\u7684\u53c2\u6570\u4e0d\u80fd\u4e3a Null \u6216\u8005 \u957f\u5ea6\u4e3a 0")),(0,a.kt)("h4",{id:"\u54cd\u5e94\u7ed3\u679c\u5c01\u88c5"},"\u54cd\u5e94\u7ed3\u679c\u5c01\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package org.syb001.singlecurd.dto.response;\nimport lombok.AllArgsConstructor;\nimport lombok.Data;\nimport lombok.NoArgsConstructor;\n\n// \u7ed9\u524d\u7aef\u7684\u7edf\u4e00\u54cd\u5e94\u7ed3\u679c\n@Data\n@NoArgsConstructor\n@AllArgsConstructor\npublic class Result<T> {\n    private String code;\n    private String message;\n\n    private T data;\n\n    public static <T> Result<T> success(String message, T data){\n        return new Result<T>("SUCCESS", message, data);\n    }\n\n    public static <T> Result<T> fail(String message, T data){\n        return new Result<T>("FAIL", message, data);\n    }\n}\n')),(0,a.kt)("p",null,"\u9759\u6001\u65b9\u6cd5\u4e2d\u4f7f\u7528\u6cdb\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package org.syb001.singlecurd.common.enums;\n\npublic enum ErrorEnum {\n    USER_DUPLICATE("USER_DUPLICATE", "\u7528\u6237\u540d\u5df2\u88ab\u5360\u7528"),\n    USER_NOT_FOUND("USER_NOT_FOUND", "\u7528\u6237\u4e0d\u5b58\u5728");\n\n    private final String code;\n    private final String message;\n\n    // \u679a\u4e3e\u7684\u6784\u9020\u51fd\u6570\n    ErrorEnum(String code, String message) {\n        this.code = code;\n        this.message = message;\n    }\n\n    // \u83b7\u53d6\u9519\u8bef\u7801\n    public String getCode() {\n        return code;\n    }\n\n    // \u83b7\u53d6\u9519\u8bef\u6d88\u606f\n    public String getMessage() {\n        return message;\n    }\n}\n')),(0,a.kt)("p",null,"\u5728 Java \u679a\u4e3e\u4e2d\uff0c\u901a\u5e38\u5efa\u8bae\u679a\u4e3e\u7684\u5b57\u6bb5\u5e94\u8be5\u662f final \u7684\u3002\u5426\u5219idea\u4f1a\u63d0\u793a",(0,a.kt)("inlineCode",{parentName:"p"},"\u679a\u4e3e 'ErrorEnum' \u4e2d\u5b58\u5728\u975e final \u5b57\u6bb5")),(0,a.kt)("p",null,"\u8fd9\u662f\u56e0\u4e3a\u679a\u4e3e\u5b9e\u4f8b\u7684\u5b57\u6bb5\u5728\u5b9e\u4f8b\u5316\u540e\u4e0d\u5e94\u8be5\u88ab\u4fee\u6539\u3002\u679a\u4e3e\u503c\u901a\u5e38\u8868\u793a\u4e00\u7ec4\u56fa\u5b9a\u7684\u5e38\u91cf\uff0c\u56e0\u6b64\u5176\u5185\u90e8\u72b6\u6001\u4e5f\u5e94\u8be5\u662f\u4e0d\u53ef\u53d8\u7684\u3002"))}m.isMDXComponent=!0},2685:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/except-0e501c82b39041114e7ea5ab5a4eb14e.jpg"},5539:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/init1-615fbdb4ddebe8778b5511c05c72d1f4.jpg"},700:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/init2-0cb2e5a49de55f08b974b024156e8af8.jpg"}}]);