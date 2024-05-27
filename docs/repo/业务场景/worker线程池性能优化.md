### 背景
已有可编辑表格组件在大量数据校验场景下容易出现卡顿，利用线程池对其进行优化

### demo源码地址
https://github.com/frontStudent/webworker-examples

这个demo中是用项目中同样的线程池去做了一些耗时计算工作

### 与java线程池ThreadPoolExecutor在设计上的区别
WorkerPool在设计上相对简陋，很多ThreadPoolExecutor的功能并没有实现，部分区别如下：
1. ThreadPoolExecutor中会区分核心线程和非核心线程，当出现 创建线程数达到核心线程数且阻塞队列也满了 的情况时，会创建非核心线程以处理突发的任务负载，当负载减轻时，非核心线程会在空闲超时（keepAliveTime）后被销毁，从而释放资源。
但我们这个WorkerPool并没有这样的机制，内部的worker数量一直都是由外部传参固定的；
2. WorkerPool中的阻塞队列采取最简单的FCFS策略，而ThreadPoolExecutor中提供了多种阻塞队列策略可供选择

### web worker创建数量原则
1. 避免创建过多从而占用过多内存和资源。通常不超过 10 个较为合适。
2. 避免创建过少，以便充分利用多线程优势，建议至少 2-3 个。
3. 根据CPU核心数设置：例如，4核CPU可以设置 4-6 个 Web Worker，以最大化利用 CPU 资源而不过度消耗。
4. 根据任务性质设置：
- CPU 密集型任务（如计算 Fibonacci 数列、素数判断、图片滤镜处理等）：建议开启 4-6 个 Web Worker，充分利用多核 CPU 的计算能力。
- IO 密集型任务（如读取文件、发送 AJAX 请求、WebSocket 通信等）：建议开启 2-3 个 Web Worker，避免过多线程上下文切换影响性能。
5. 动态调整：根据系统负载情况，动态创建或终止 Web Worker。例如，在图像编辑网站中，执行高消耗操作时临时增加 2-3 个 Web Worker，操作结束后关闭这些额外的 Web Worker。