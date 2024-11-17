
docker镜像源配置：/etc/docker/daemon.json或~/.docker/daemon.json 修改后需systemctl restart docker

https://blog.csdn.net/llc580231/article/details/139979603

### docker registry搭建私有镜像仓库
```shell
docker run -d -p 5000:5000 --restart=always --name registry registry:2
```

配置docker支持http
```shell
vim /etc/docker/daemon.json
```
添加registry地址和端口号
```json
{
  "insecure-registries":["1.12.238.239:5000"]
}
```
需要重启才能生效
```shell
systemctl restart docker
```

上传镜像到私有仓库
```shell
# 先根据dockerfile构建本地镜像
docker build -t my_image:tag .

# 给镜像打标签 使其别名符合私有仓库地址
docker tag my_image:tag 1.12.238.239:5000/my_image:tag
docker push 1.12.238.239:5000/my_image:tag
```
注：标签只是镜像的别名，不会占有额外的存储空间，可以给同一个镜像打多个标签，但删除一个标签不会删除镜像本身

查看镜像仓库
```shell
curl -X GET http://1.12.238.239:5000/v2/_catalog
```

拉取镜像
```shell
docker pull 1.12.238.239:5000/my_image:tag
```


### 基本命令
systemctl restart docker 重启docker，docker容器都启动着但无法正常访问的情况下，可以尝试

docker ps 查看正在运行的容器

docker ps -a 查看所有容器

docker stats my_container 查看容器资源占用情况

docker inspect my_container | grep IPAddress 查看容器ip

docker inspect my_container | grep Ports -A 20 查看容器端口映射

docker inspect my_container | grep Mounts -A 10 查看容器挂载

docker info | grep Registry -A 20 查看镜像源

docker exec -it my_container /bin/bash 进入容器 exit 退出容器

docker logs my_container 查看容器日志（容器启动后立刻退出可用来排查报错）

docker stop my_container 停止容器

docker start my_container 启动容器

docker restart my_container 重启容器

docker rm my_container 删除容器

### kafka容器


### redis容器
docker run -p 6379:6379 --name redis-test -v /home/redis/data:/data -v /home/redis/conf/redis.conf:/etc/redis/redis.conf -d redis redis-server /etc/redis/redis.conf

### nginx容器
```
# 生成容器
docker run --name nginx2 -p 9002:80 -d nginx
# 将容器nginx.conf文件复制到宿主机
docker cp nginx2:/etc/nginx/nginx.conf /home/nginx/nginx.conf
# 将容器conf.d文件夹下内容复制到宿主机
docker cp nginx2:/etc/nginx/conf.d /home/nginx/conf.d
# 将容器中的html文件夹复制到宿主机
docker cp nginx2:/usr/share/nginx/html /home/nginx/html
```

```
docker run -d --name nginx2 -p 9002:80 -v ./nginx/nginx.conf:/etc/nginx/nginx.conf -v ./nginx/conf.d:/etc/nginx/conf.d -v ./nginx/html:/usr/share/nginx/html nginx:latest
```

### node容器
```bash
docker run -d --name node1 -p 3000:3000 -v ./my-node-app:/app -w /app node:latest node server.js
```

server.js内容：
```js
const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, () => {
  console.log(`服务已启动`);
});
```