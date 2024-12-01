## 理论

### 概览
Kafka 可以作为一个高性能的消息队列，用于在不同的应用程序之间进行异步通信。生产者将消息发送到 Kafka 主题中，消费者可以在自己的节奏下从主题中读取消息并进行处理。
例如，在一个微服务架构的企业应用中，不同的微服务之间可以通过 Kafka 进行通信。一个微服务可以将事件发送到 Kafka 主题中，其他微服务可以订阅该主题并在事件发生时进行相应的处理。

在企业中，各种应用程序和服务器会产生大量的日志数据。Kafka 可以作为一个日志收集系统，将日志数据发送到 Kafka 主题中。然后，通过使用消费者来读取和分析这些日志数据，可以实现实时监控、故障排查和性能分析等功能。
例如，一个电商网站可以使用 Kafka 收集用户行为日志、系统日志和数据库日志等，然后通过实时分析这些日志数据，了解用户行为、系统性能和故障情况，以便及时进行优化和调整。

### 主题与分区

Kafka 中 Topic 被分成多个 Partition 分区；Topic 是一个逻辑概念，Partition 是最小的存储单元，掌握着一个 Topic 的部分数据。
每个Partition都是一个单独的 log 文件，每条记录都以追加的形式写入。

kafka 集群中，每个 partition 都可以配置多个副本，这些副本分布在不同的 broker 上，以实现数据的冗余和高可用性。当一个 partition 的 leader broker 发生故障时，其中一个 follower broker 将被选举为新的 leader，继续处理该 partition 的读写请求。

### 消费者组
1、每个分区只能被一个消费组中的一个消费者所消费，
2、消费组中一个消费者可以消费多个分区。
3、多个消费组，每个消费组都可以消费topic中的所有数据，且消费位移之间互不影响。
4、一个消费组存在的消费者个数，大于分区数时，会出现消费组，未被分配到分区

### offset提交
Kafka 将位移信息作为一条一条普通的 Kafka 消息，保存在一个特定的 Topic 中，这个 Topic 的名字叫 __consumer_offsets，也可以叫做位移主题。

位移主题的消息格式是键值对形式。它的键（key）包含了消费者组、主题和分区的信息，值（value）则是具体的位移。

例如，键可能是类似于 “consumer - group - 1:my - topic:partition - 0” 这样的格式，它明确了是消费者组 “consumer - group - 1” 对于主题 “my - topic” 的分区 0 的位移记录
1、自动提交
2、手动提交

### 分区分配策略
1、range
2、roundrobin
3、sticky

通过指定key的方式，具有相同key的消息会分发到同一个partition中，从而保证消息的有序性。

## Docker搭建Kafka集群，zookeeper模式和kraft模式

### zookeeper模式
``` yml
# docker-compose.yml

version: '3.8'

services:
  zookeeper:
    image: bitnami/zookeeper:latest
    environment:
      - ZOO_ENABLE_AUTH=no
      - ALLOW_ANONYMOUS_LOGIN=yes
    ports:
      - "2181:2181"

  kafka1:
    image: bitnami/kafka:latest
    environment:
      - KAFKA_BROKER_ID=1
      - KAFKA_CFG_LISTENERS=PLAINTEXT://:9092
      - KAFKA_CFG_ZOOKEEPER_CONNECT=zookeeper:2181
      - ALLOW_PLAINTEXT_LISTENER=yes
    ports:
      - "9092:9092"
    depends_on:
      - zookeeper

  kafka2:
    image: bitnami/kafka:latest
    environment:
      - KAFKA_BROKER_ID=2
      - KAFKA_CFG_LISTENERS=PLAINTEXT://:9093
      - KAFKA_CFG_ZOOKEEPER_CONNECT=zookeeper:2181
      - ALLOW_PLAINTEXT_LISTENER=yes
    ports:
      - "9093:9093"
    depends_on:
      - zookeeper

  kafka3:
    image: bitnami/kafka:latest
    environment:
      - KAFKA_BROKER_ID=3
      - KAFKA_CFG_LISTENERS=PLAINTEXT://:9094
      - KAFKA_CFG_ZOOKEEPER_CONNECT=zookeeper:2181
      - ALLOW_PLAINTEXT_LISTENER=yes
    ports:
      - "9094:9094"
    depends_on:
      - zookeeper

```
参考：https://blog.csdn.net/Hreo111/article/details/138550524

### kraft模式

参考：https://juejin.cn/post/7187301063832109112
### kafka基本命令

首先进入kafka容器内部

```shell
# 创建topic并指定分区数量和副本数量
kafka-topics.sh --create --topic test-topic --bootstrap-server kafka1:9092 --replication-factor 3 --partitions 1

# 查看topic列表
kafka-topics.sh --list --bootstrap-server localhost:9092

# 查看topic详情
kafka-topics.sh --describe --bootstrap-server localhost:9092 --topic new_topic

# 生产者发送消息
kafka-console-producer.sh --topic test-topic --bootstrap-server kafka1:9092

# 消费者消费消息 (要在另一个终端窗口执行 然后可实时查看生产者发送的消息)
kafka-console-consumer.sh --topic test-topic --from-beginning --bootstrap-server kafka1:9092

```


## kafka 客户端 API

```xml
<dependency>
    <groupId>org.apache.kafka</groupId>
    <artifactId>kafka-clients</artifactId>
    <version>3.8.0</version>
</dependency>
```

### 自定义分区器
自定义分区器需要实现 Kafka 的 Partitioner 接口，并重写 partition 方法。在 partition 方法中，可以根据消息的 key 和 partition 的数量等信息，计算出消息应该被发送到哪个 partition 中。

## kafka 与 springboot 集成

```xml
<dependency>
    <groupId>org.springframework.kafka</groupId>
    <artifactId>spring-kafka</artifactId>
</dependency>
```

### idea插件: kafka
