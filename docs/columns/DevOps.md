服务器初探：腾讯云利用宝塔面板跑通最简单的前后端应用交互

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