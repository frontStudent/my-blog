## 背景
## 功能设计

用户进入演练场时，默认展示最新一条历史记录
需调获取历史记录接口：getHistoryList，按时间desc排，如果不为空前端就取第一条，然后调获取标记列表接口：getMarkerList
添加新方案时展示空白页，画下第一个标记点时
需调取新增历史记录接口：saveHistoryWithMarkerList
因为必须新增了标记才会新增历史记录，空白的历史记录新增没有意义
后续增加标记点时调saveMarker
点击结束标记时调saveMarker保存中心点，调取高德周边poi，之后这条历史记录就无法进行任何修改，只能查看了
点击某条历史记录时
需调获取单条历史记录（带marker列表）的接口: getHistoryWithMarkerList，并根据中心点调取高德周边poi
 
点击某条历史记录操作栏 - 重命名
需调取更新历史记录接口

### 演练场

#### 核心业务逻辑
1. 用户点击`开始标记`，此时POI搜索框不再禁用，按钮文字变为`停止此轮标记`，用户选择地点后地图上会绘制对应顶点Marker
2. 用户点击`停止此轮标记`，此时先校验顶点Marker数量必须大于1，然后POI搜索框禁用，按钮文字变为`开始标记按钮`，计算多边形中心点
3. 根据多边形中心点，调用高德地图API获取周边POI，地图上绘制对应Marker，点击后出现路径规划详情弹窗
4. 在右侧历史记录中生成一条新记录，标题为顶点名称的组合
5. 用户再次点击`开始标记`，清空地图上所有标记物，重复步骤1-4

ps: 历史记录生成后可删除可收藏可筛选时间范围查询，单条点进去可编辑

#### 筛选参数设计
### 系统管理
初始用户角色设为普通用户和管理员

管理员可以添加新角色如黄金vip、钻石vip等
每个角色有对应的权限，如黄金vip可以调用高德api 100次/天，钻石vip可以调用1000次/天，普通用户每天只能调用10次

## 数据库设计
这里和若依有所不同，并没有很多菜单的权限需要管理，权限体现在地图服务的使用次数等，
因此暂不考虑添加权限表，仅用户表和角色表，角色表中加个字段记录每个角色可调用的api次数

```sql title="用户信息表"
create table sys_user
(
    user_id     bigint auto_increment comment '用户ID'
        primary key,
    user_name   varchar(30)               not null comment '用户账号',
    password    varchar(100) default ''   null comment '密码',
    create_by   varchar(64)  default ''   null comment '创建者',
    create_time datetime                  null comment '创建时间',
    update_by   varchar(64)  default ''   null comment '更新者',
    update_time datetime                  null comment '更新时间',)
    comment '用户信息表';
```

```sql title="角色信息表"
create table sys_role
(
    role_id     bigint auto_increment comment '角色ID'
        primary key,
    role_code  varchar(100) default ''   null comment '角色编码',
    role_name   varchar(30)               not null comment '角色名称',
    create_by   varchar(64)  default ''   null comment '创建者',
    create_time datetime                  null comment '创建时间',
    update_by   varchar(64)  default ''   null comment '更新者',
    update_time datetime                  null comment '更新时间',
    api_count   int                        null comment '可调用api次数',
)
```

历史记录表
只存顶点+中心点信息，周边POI信息和路径规划信息不存表，还是实时调高德API查询
```sql title="历史记录表"
create table sys_history
(
    history_id     bigint auto_increment comment '记录ID'
        primary key,
    user_id     bigint               not null comment '用户ID',
    starred   int default 0                   comment '是否收藏',
    create_by   varchar(64)  default ''   null comment '创建者',
    create_time datetime                  null comment '创建时间',
    update_by   varchar(64)  default ''   null comment '更新者',
    update_time datetime                  null comment '更新时间',
)
```
顶点和中心点都存在标记点表中，用history_id关联，用type区分

```sql title="标记点表"
create table sys_marker
(
    marker_id     bigint auto_increment comment '标记点ID'
        primary key,
    history_id     bigint               not null comment '记录ID',
    name   varchar(30)               not null comment '标记点名称',
    type   int               not null comment '标记点类型',
    lng   double                    not null comment '经度',
    lat   double                    not null comment '纬度',
    create_by   varchar(64)  default ''   null comment '创建者',
    create_time datetime                  null comment '创建时间',
    update_by   varchar(64)  default ''   null comment '更新者',
    update_time datetime                  null comment '更新时间',
)
```

## 技术方案
### 第三方地图服务
使用高德地图web服务API，调用POI搜索和路径规划API
(如果api调用量过高后续可能考虑替换为百度地图API)
### 后端
springboot + mybatis + mysql + redis + jwt + jasypt
#### 登录
基于JWT和拦截器实现登录
#### 接口权限&高德api调用次数限制

#### 第三方api调用
由于在前端使用高德web服务key直接调高德api存在较多安全风险，因此在后端调用高德api，相关技术方案如下：
1. 基于RestTemplate调用第三方api，封装RestTemplate工具类
2. 基于jasypt做配置文件加密，将高德web服务key加密存储在配置文件中

### 前端

### 部署