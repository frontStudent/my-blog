## vim
### 配置
一开始在/etc/vim/vimrc文件中配置但未生效，后来在~/.vimrc文件中配置生效

### 操作
esc + :wq保存退出

ctrl + o + u键 在插入模式下回到普通模式撤销再回到插入模式

## Linux
### 基本命令
ls -a 查看包括.开头的隐藏文件

cp -r source_directory new_directory 复制目录并重命名

mv old_filename new_filename 重命名

lsof -i :3000 查看端口占用
## docker

### 基本命令
systemctl restart docker 重启docker，docker容器都启动着但无法正常访问的情况下，可以尝试

docker ps 查看正在运行的容器

docker ps -a 查看所有容器

docker stats my_container 查看容器资源占用情况

docker inspect my_container | grep IPAddress 查看容器ip

docker inspect my_container | grep Ports -A 20 查看容器端口映射

docker inspect my_container | grep Mounts -A 10 查看容器挂载

docker exec -it my_container /bin/bash 进入容器 exit 退出容器

docker logs my_container 查看容器日志（容器启动后立刻退出可用来排查报错）

docker stop my_container 停止容器

docker start my_container 启动容器

docker restart my_container 重启容器

docker rm my_container 删除容器

### redis容器

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