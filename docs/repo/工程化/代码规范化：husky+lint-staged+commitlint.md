
### git hooks

我们在执行 git init 进行初始化时，会在 .git/hooks 目录生成一系列的 hooks 脚本，每个脚本的后缀都是以 .sample 结尾的，在这个时候，脚本是不会自动执行的。我们需要把后缀去掉之后才会生效，即将 pre-commit.sample 变成 pre-commit

这些脚本会在 Git 执行特定的操作时自动触发，例如提交代码前执行 pre-commit 脚本，来检查代码是否符合规范，在 commit-msg 触发时对 commit 消息和提交用户进行验证，在 pre-push 触发时进行单元测试、e2e 测试等操作。

### husky
husky帮助我们更方便地管理git hooks

#### 初始化配置
以8.0.0版本为例，npm install之后运行：
``` bash
npx husky install
```
husky install 指令会做两件事情：
1. 创建 .husky/_/husky.sh 文件
2. 配置 Git Hooks 目录地址 `git config core.hooksPath .husky`（默认地址是 .git/hooks）
第二点解决了如何和团队其他开发人员共享 git hooks 配置的问题，因为默认的.git/hooks目录不会随着提交一起推送到远程仓库。

#### 设置prepare脚本命令
``` bash
npm pkg set scripts.prepare="husky install"
```

#### 添加Hook
husky 使用 husky add <file> [cmd]指令添加 Hook。
``` bash
npx husky add .husky/pre-commit "npm test"
```

#### 结合lint-staged
如果一个项目中期才引入husky，为了防止历史文件报错，或者说我们单纯的不想进行全量的eslint检查，我们只想对git add到暂存区的文件进行lint检查，那么可以借助lint-staged来实现。

安装lint-staged后，修改刚才的pre-commit Hook：
```sh
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "husky pre-commit" && npx lint-staged
```

lint-staged命令根据package.json中的顶层lint-staged配置执行lint检查。

项目中的lint-staged配置：
```json
"lint-staged": {
  "packages/**/*.{js,jsx}": "eslint --max-warnings=0"
}
```

#### 结合commitlint
安装@commitlint/cli和@commitlint/config-conventional

再添加一个常用的git hook commit-msg，用于检查commit message是否符合规范。

```sh
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "husky commit-msg" && npx --no-install commitlint --edit $1
```