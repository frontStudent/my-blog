
### react中使用mockjs出现接口404
说明mockjs拦截请求失败，如果正常拦截，浏览器控制台network中不会出现请求

### mockjs导致高德地图加载失败
mockjs直接替换了xhr请求，如果路由没有匹配到，就进行跳转。这种实现方式对二进制流有较大的影响
参考https://blog.csdn.net/qq_65949679/article/details/136320260

但修改源码的方式即使重启后也没有生效，目前进行地图相关的调试时还是选择注释掉mockjs