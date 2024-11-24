## BIO

## NIO入门以及相关系统调用

### 备忘
```shell
# 终端模拟客户端连接
nc localhost 8888

# 查看系统调用help
man 2 socket
```
NIO网络编程中的一些模板代码需要从底层系统调用中进行理解

下面的代码是一个简单的NIO服务器，它监听8888端口，当客户端发送数据过来时，服务器读取数据并打印出来，然后回复客户端一个固定的字符串 "copy that!"。
```java
public class NIOServer {
    public static void main(String[] args) throws IOException {
        ServerSocketChannel serverSocketChannel = ServerSocketChannel.open();
        Selector selector = Selector.open();
        // 设置为非阻塞模式
        serverSocketChannel.configureBlocking(false);
        // 绑定端口
        serverSocketChannel.bind(new InetSocketAddress(8888));
        serverSocketChannel.register(selector, SelectionKey.OP_ACCEPT);
        System.out.println("NIOServer started on port 8888");
        while (true) {
            int select = selector.select();
            if (select < 1) continue;
            var selectionKeys = selector.selectedKeys();
            Iterator<SelectionKey> iterator = selectionKeys.iterator();
            while (iterator.hasNext()) {
                SelectionKey selectionKey = iterator.next();
                if (selectionKey.isAcceptable()) {
                    SocketChannel newSocketChannel = serverSocketChannel.accept();
                    System.out.println("connected:" + newSocketChannel.getRemoteAddress());
                    newSocketChannel.configureBlocking(false);
                    newSocketChannel.register(selector, SelectionKey.OP_READ, ByteBuffer.allocate(1024));
                }
                if (selectionKey.isReadable()) {
                    SocketChannel socketChannel = (SocketChannel) selectionKey.channel();
                    ByteBuffer byteBuffer = (ByteBuffer) selectionKey.attachment();
                    socketChannel.read(byteBuffer);
                    System.out.println("get:" + new String(byteBuffer.array()));
                    socketChannel.write(ByteBuffer.wrap("copy that!".getBytes()));
                }
                iterator.remove();
            }
        }
    }
}
```

### socket
当创建一个套接字（通过socket系统调用）时，操作系统也会返回一个文件描述符来表示这个套接字。这样，后续的网络通信操作（如send和recv系统调用，类似于文件读写的read和write）也可以通过这个文件描述符来进行，就像操作一个普通的文件一样。这使得操作系统可以用统一的方式（通过文件描述符）来管理不同类型的 I/O 资源，而应用程序也可以使用类似的接口（系统调用）来操作这些不同类型的 I/O 资源。

### fcntl
`serverSocketChannel.configureBlocking(false)`这行代码对应的就是fcntl函数的F_SETFL操作，将文件描述符设置为非阻塞模式。
fcntl（file control 的缩写）用于对文件描述符进行各种控制操作。它可以修改和查询文件描述符的属性，包括但不限于文件的访问模式、文件状态标志等诸多方面

### bind
`serverSocketChannel.bind(new InetSocketAddress(8888))`这行代码对应的就是bind系统调用，将套接字绑定到指定的IP地址和端口上。

bind系统调用用于将一个套接字绑定到一个特定的IP地址和端口上。这样，当有客户端连接到这个套接字时，操作系统就知道应该将数据发送到哪个应用程序，以及从哪个应用程序接收数据。

### epoll_create
epoll_create用于创建一个epoll实例。epoll是一种高效的 I/O 复用机制，主要用于同时监听多个文件描述符（包括但不限于套接字、管道等）上的事件，例如文件描述符是否可读、可写或者出现异常等情况。epoll_create函数的作用是初始化epoll相关的数据结构，为后续添加文件描述符和监听事件做准备。

### epoll_ctl
`serverSocketChannel.register(selector, SelectionKey.OP_ACCEPT)`这行代码对应的就是epoll_ctl函数的EPOLL_CTL_ADD操作，将serverSocketChannel添加到epoll实例中，并监听OP_ACCEPT事件。

epoll_ctl用于向epoll实例中添加、修改或删除文件描述符和事件。通过epoll_ctl函数，应用程序可以将需要监听的文件描述符和事件注册到epoll实例中，以便epoll可以监控这些文件描述符上的事件。

有个注意点，serverSocketChannel也需要注册到selector中，因为需要通过 socket 的文件描述符来找到 epoll_create的文件描述符

### epoll_wait

`selector.select()`这行代码对应的就是epoll_wait函数，用于等待epoll实例中文件描述符上的事件发生。
epoll_wait函数用于等待epoll实例中文件描述符上的事件发生。当有文件描述符上的事件发生时，epoll_wait函数会返回，并将发生事件的文件描述符和事件类型返回给应用程序。这样，应用程序就可以根据这些事件类型来处理相应的逻辑，例如读取数据、发送数据等。

### accept
`SocketChannel newSocketChannel = serverSocketChannel.accept()`这行代码对应的就是accept系统调用，用于接受客户端的连接请求。当有客户端连接到serverSocketChannel时，accept函数会返回一个新的SocketChannel，用于与客户端进行通信。





