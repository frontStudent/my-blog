### 背景
Jenkins版本过低无法使用网上常用的jira插件与企业微信插件
![jenkins](./imgs/jenkins.png)
但可以直接在构建阶段的脚本中
1. curl调用jira的api接口
2. curl调用企业微信机器人的webhook地址

### 脚本部分内容

```shell
# 生成文件
tar -zcvf  ../distpack/package_name-v${version}-${packagedate}.tar.gz web

sendMsg() {
        #群聊机器人地址
        WEBHOOK_URL="xxx"

        fileHost='xxx'
    
        message=''
    
        if [ "$1" == true ]; then
                        filepath="${fileHost}package_name-v${version}-${packagedate}.tar.gz"
                echo "filepath: ${filepath}"
                message="打包成功 \n 分支: ${branchName} \n 版本: ${version} \n 新包地址: ${filepath}"
                if [ ${branchName} == "test" ]; then
                    testpath="xxx"
                    # 发送到JIRA
                    curl -X POST \
                      http://host/rest/api/latest/issue/TEST-xxx/comment \
                      -H 'Authorization: Basic xxx' \
                      -H 'Content-Type: application/json' \
                      -d "{\"body\": \"${filepath}\"}"
                    message="${message} \n 已贴包至提测地址：${testpath}"
                fi;
        else 
            message="打包失败 \n 分支: ${branchName} \n 版本: ${version} \n 日志: ${BUILD_URL}console"
        fi
        # 群聊机器人提醒
        curl --location --request POST ${WEBHOOK_URL} \
        --header 'Content-Type: application/json' \
        -d "{\"msgtype\": \"text\",\"text\": {\"content\": \"package_name \n ${message}\"}}"
}
```

注：Authorization中basic后是 {jira的用户名:密码}