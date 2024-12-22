
## netty demo中维护在线用户
使用`Map<String, Channel>`来维护在线用户，通过解析消息格式中的 type 来确定是上线操作还是聊天操作
## springboot集成netty

通过实现 CommandLineRunner 接口，在项目启动时，执行 run 方法，启动 Netty 服务器。

```java
@SpringBootApplication
public class AopDemoApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(AopDemoApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        NettyServer.start();
    }
}
```

### netty服务端代码
```java
@Component
public class NettyServer {
    public static void start() throws InterruptedException {
        EventLoopGroup bossGroup = new NioEventLoopGroup();
        EventLoopGroup workerGroup = new NioEventLoopGroup();;
        try {
            ServerBootstrap bootstrap = new ServerBootstrap();
            bootstrap.group(bossGroup, workerGroup)
                    .channel(NioServerSocketChannel.class)
                    .childHandler(new ChannelInitializer<SocketChannel>() {
                        @Override
                        protected void initChannel(SocketChannel socketChannel) throws Exception {
                            ChannelPipeline pipeline = socketChannel.pipeline();
                            pipeline.addLast(new HttpServerCodec());
                            pipeline.addLast(new ChunkedWriteHandler());
                            pipeline.addLast(new HttpObjectAggregator(1024 * 64));
                            pipeline.addLast(new WebSocketServerProtocolHandler("/"));
                            pipeline.addLast(new WebSocketHandler());
                        }
                    });
            ChannelFuture channelFuture = bootstrap.bind(8083).sync();
            channelFuture.channel().closeFuture().sync();
        } finally {
            bossGroup.shutdownGracefully();
            workerGroup.shutdownGracefully();
        }
    }
}
```