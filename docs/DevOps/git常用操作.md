
### 用户名和邮箱
#### 设置
```shell
git config --global user.name "Shi Yubei, CIH-5-9"
git config --global user.email "yubei.shi@lingyue-digital.com"
```
#### 查看
```shell
git config --global user.name 
git config --global user.email
```

### remote
#### 查看远程仓库地址
```shell
git remote -v
```
#### 修改远程仓库地址
```shell
git remote set-url origin <new_url>
```
#### 添加远程仓库地址
```shell
git remote add <new_name> <new_url>
```
#### 更新所有远程分支
```shell
git remote update origin -p
```

### branch
#### 基于当前分支创建新分支
``` 
git checkout -b <new_branch_name>
```
#### 删除本地分支
```shell
git branch -D <branch_name>
```

### submodule
#### git pull时 submodule出现冲突如何解决？
1. git merge --abort 取消merge
2. git submodule foreach git pull
3. git pull
此时再git pull不会有冲突，因为submodule已经是最新的