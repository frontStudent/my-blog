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

### submodule
#### git pull时 submodule出现冲突如何解决？
1. git merge --abort 取消merge
2. git submodule foreach git pull
3. git pull
此时再git pull不会有冲突，因为submodule已经是最新的