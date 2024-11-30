
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


## zookeeper模式和kraft模式



## Docker搭建多节点Kafka集群，包括一个ZooKeeper和三个Kafka Broker
参考：https://blog.csdn.net/Hreo111/article/details/138550524

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