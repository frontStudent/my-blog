

DispatcherServlet是SpringMVC的前端控制器，整个请求的处理过程都由它控制。

DispatcherServlet是继承自HttpServlet的，它能够处理所有的HTTP请求。

客户端发出请求，由 Tomcat 接收到这个请求，如果匹配 DispatcherServlet 在 web.xml中配置的映射路径，Tomcat 就将请求转交给 DispatcherServlet 处理；

DispatcherServlet 从容器中取出所有 HandlerMapping 实例（每个实例对应一个 HandlerMapping接口的实现类）并遍历，每个 HandlerMapping 会根据请求信息，通过自己实现类中的方式去找到处理该请求的 Handler(执行程序，如Controller中的方法)，并且将这个 Handler 与一堆 HandlerInterceptor 封装成一个 HandlerExecutionChain 对象，一旦有一个 HandlerMapping 可以找到 Handler则退出循环；

比如默认的也是最常用的RequestMappingHandlerMapping，是基于@RequestMapping注解来进行 URL 到Handler的映射，匹配到是Controller的 bean 之后，再去遍历 Controller中的方法，找到 HandlerMethod

DispatcherServlet 取出 HandlerAdapter 组件，根据已经找到的 Handler，再从所有HandlerAdapter 中找到可以处理该 Handler 的 HandlerAdapter 对象；

因为 Handler 并不能直接被 Servlet 容器执行，需要 HandlerAdapter 来进行适配。HandlerAdapter 会调用 Handler 中的具体方法来处理请求

执行 HandlerExecutionChain 中所有拦截器的 preHandler() 方法，然后再利用HandlerAdapter 执行 Handler ，执行完成得到 ModelAndView，再依次调用拦截器的postHandler() 方法；

利用 ViewResolver 将 ModelAndView 或是 Exception（可解析成 ModelAndView）解析成View，然后 View 会调用 render() 方法再根据 ModelAndView 中的数据渲染出页面；

最后再依次调用拦截器的 afterCompletion() 方法，这一次请求就结束了。