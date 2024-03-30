## 腾讯云+宝塔面板初步体验
### 跑通最简单的前后端应用交互

1. 2024-3-5 腾讯云利用实名认证免费试用一个月轻量级服务器（镜像选择centos7.6）

2. xshell 7的获取，在下面的网址下载免费版

https://www.xshell.com/zh/free-for-home-school/

得知这个网址的csdn原文：

https://blog.csdn.net/weixin_47230291/article/details/126905158?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522170955460016800227454485%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=170955460016800227454485&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_click~default-2-126905158-null-null.142^v99^pc_search_result_base1&utm_term=xshell7%E7%A0%B4%E8%A7%A3%E7%89%88%E4%B8%8B%E8%BD%BD&spm=1018.2226.3001.4187

3. xshell连接腾讯云服务器并下载宝塔面板
https://juejin.cn/post/7226737543249788984#heading-10
下载成功后，打开宝塔面板的外网地址，需要在腾讯云控制台防火墙放开27202端口

4. 利用宝塔面板部署node应用
同样参照
https://juejin.cn/post/7226737543249788984#heading-10

只不过我上传的代码是ai生成的一个最简单的返回helloworld的http服务，监听了8083端口，这里一开始踩坑，只在腾讯云控制台放行了端口 没在宝塔的安全选项中放行端口，两者都要放行

5. 上传前端文件
可参照

https://juejin.cn/post/7234467007718015036?searchId=2024030519310157ED73C1B553CB96A677#heading-3
这里我没有使用vue和react脚手架打包的，只是写了个原生的html文件模拟了一下，用fetch请求了8083端口的node接口，将第四步中的换成了一个express程序（这时需让宝塔面板根据package.json安装依赖）并用cors解决了跨域
这个html通过网站选项运行在8082端口，然后访问服务器ip+8082，就能看到fetch请求到的数据，则云服务器上一个最简单的前后端流程跑通

### 腾讯云上clone github项目，并利用webhook同步github提交
2024-3-7实践：PM2管理器已经显示停用，因此将其卸载并在网站选项中启用node项目 

设置踩坑： www用户改为root用户才能成功启动

github webhook在监听到特定操作如push时会向指定的链接发一个post请求，然后就可以启node服务接收这个请求并执行脚本命令实现项目自动pull并且重新部署

参照
https://zhuanlan.zhihu.com/p/599939658?utm_id=0

此教程中在github上添加webhook之后，ping的推送记录是返回200的，我在实验时一直返回500错误，网络上未找到类似情况
但是将github发的post请求headers和payload都复制到apipost进行请求，甚至直接将Request Url复制到浏览器网址中，结果都能触发宝塔webhook插件，也会成功执行脚本
只是github发这个请求时触发不了脚本

注：此教程提供了一种git pull之后自动重启node服务的方案，即获取当前进程pid将其kill后再运行原服务启动对应的sh脚本，但未能成功，依然报错该端口被占用，应该是教程里的命令没能成功获取到正确的pid

clone踩坑参考：
https://blog.csdn.net/weixin_44263973/article/details/120998615

linux简单命令：
cd /www/wwwroot
lsof -i:{端口号}
kill -9 {pid>}