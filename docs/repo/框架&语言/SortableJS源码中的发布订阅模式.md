
### 调试过程
clone源码Sortable后，在html中script标签引入Sortable/Sortable.js（这个是用scripts/umd-build里打出来的源码），在new Sortable()处打断点可以进行调试
缺点是没有保留原先src目录结构，我们调试时的所有逻辑都在打包后的一个源码文件里

### 插件设计
在执行new Sortable()实例化sortable对象的时候，就会执行initializePlugins来初始化所有的插件，这个过程其实就是把一个个插件实例对象plugin挂在sortable对象上面，属性key就是插件的自定义名称

其实这个时候就已经算是发布订阅模式里说的“订阅”或者是“注册”了，因为插件实例对象plugin上面有不少自定义方法，这些自定义方法就相当于是“联系方式”了，后面有事件触发的时候就会调所有插件上的对应方法，就相当于是“通知”了

只不过这边跟我们常见的发布订阅demo里在中介类里维护一个{事件名 --> 回调方法列表}对象的做法不太一样，
实际上sortablejs里的中介类PluginManager中维护的是一个plugins数组，在调用pluginEvent方法来触发事件eventName时，PluginManager会把plugins数组遍历一遍，里面所有的plugin上只要有叫做eventName
的方法都会被调用；相当于是默认约定了某事件触发时是调同名方法的，有点约定大于配置的意思。

### 事件触发与监听
sortablejs中另一处运用发布订阅模式的地方也是如此，即另一个“中介类”EventDispatcher中，会通过dispatchEvent触发事件name，然后会直接调用传入的配置项options中的onName函数
这里也有一个事件类名到对应订阅函数的约定映射，也就是name到onName，这样我们同样无需在EventDispatcher中维护{事件名 --> 回调方法列表}的对象

在sortablejs构造函数中会监听原生的dragover事件，对on(el, 'dragover', this)也就是el.addEventListener(event, fn)有疑问，因为this是sortable实例对象，并非一个回调函数
在MDN英文文档中提到addEventListener 的第二个参数 `must be null, an object with a handleEvent() method, or a JavaScript function`
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
也就是说当第二个参数为对象时，需要有一个handleEvent属性来处理事件

