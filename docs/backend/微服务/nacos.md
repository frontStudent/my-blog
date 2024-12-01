
```shell
docker run -d -p 8848:8848 -p 9848:9848 -p 9849:9849 \
--restart=always \
-e MODE=standalone \
-e JVM_XMS=200m \
-e JVM_XMX=200m \
-e JVM_XMN=150m \
--name nacos nacos/nacos-server:2.0.2
```

http://localhost:8848/nacos