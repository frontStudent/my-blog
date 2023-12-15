
### git pull时 submodule出现冲突如何解决？
1. git merge --abort 取消merge
2. git submodule foreach git pull
3. git pull
此时再git pull不会有冲突，因为submodule已经是最新的