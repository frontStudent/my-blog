
### List实现
```bash title="生产者终端"
redis-cli
lpush channelName message
```

```bash title="消费者终端"
redis-cli
# 非阻塞等待
rpop channelName 
# 阻塞等待
brpop channelName 0
```

缺点

### 发布订阅实现
```bash title="订阅者终端"
redis-cli
subscribe channelName
```

```bash title="发布者终端"
redis-cli
publish channelName message
```

springboot中集成redis发布订阅可参考https://juejin.cn/post/7035995768452284423
### Stream实现