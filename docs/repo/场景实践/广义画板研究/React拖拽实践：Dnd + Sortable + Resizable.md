
React拖拽实践：Dnd + Sortable + Resizable

### 简介
本文中一共会给出三个拖拽示例 

前两个示例是对React-DnD官方文档上提供的Drag Around和Sortable进行一些拓展，最后将分别实现：
1. 从一个物料区中拖拽元素到画布中，并可以在画布中四处拖动
2. 从一个物料区中拖拽元素到Sortable List单个列表项的内部，可以在列表项内部四处拖动；当你拖拽列表项排序时，还将带动其内部的所有元素
通过完成这两个案例将对React-DnD的API有更深入的理解与运用

而在第三个例子中我们将把一些主流的拖拽库集成到一起，对第二个例子的基础上再次进行拓展，使其每个列表项在纵向上可以拖拽拉伸改变高度，并且每个列表项的最小高度还将受其内部元素影响

这三个示例的github地址：
https://github.com/frontStudent/dnd-examples

使用cra搭建，git clone后运行npm start就能够看到三个例子的效果

### 实践案例1
此案例代码请参照
https://github.com/frontStudent/dnd-examples/blob/master/src/Examples/DropAndMove

在这个例子里有两种类型的drag元素，一种是从物料区（DragArea）拖过来的DragBox
另一种是能够在Drop容器内部四处拖动的MoveBox
MoveBox相对于DragBox唯一的区别就是当在拖动时（isDragging）会把原来位置的盒子给隐掉，用预览图像来制造出“四处拖动”的感觉

那么Drop容器去接受这两种类型的drag元素时有什么区别呢
- 当接受到DragBox时，说明用户往drop区域里拖新元素了，那就会在Drop容器内部的状态列表里追加一个新的对象，（新对象中的位置信息很关键，这决定了你能否刚好在用户鼠标落点的位置去渲染这个新的元素）

- 当接受到MoveBox时，说明用户往drop区域里移动之前的元素，那就会在Drop容器内部的状态列表里更新这个之前的元素的位置信息


### 实践案例2
此案例代码请参照
https://github.com/frontStudent/dnd-examples/tree/master/src/Examples/SortableAndMove

在这个例子里相比案例1多出了一个新的类型的drag元素，即列表项本身
（因为在拖拽列表的经典例子中一个有趣的点就是每个列表项卡片既是draggable，又是droppable）

但另一个相对案例1的变化是，我们在drop函数中的接收逻辑不一样了。

因为要让列表项内部box跟着列表项一起排序，box必须是相对于它所在的列表项卡片来进行绝对定位，而不是像案例1中相对于整个浏览器窗口来绝对定位。所以为了依然能够在用户鼠标落点的位置去渲染这个新的元素，就要改变新元素top和left的计算方式。

可以着重对比两个drop函数中的逻辑：

###  实践案例3
此案例代码请参照
https://github.com/frontStudent/dnd-examples/tree/master/src/Examples/Comprehensive

在这个例子里集成了其他一些主流拖拽库：
- 从物料区拖到Drop区域使用react-dnd实现
- 拖拽排序使用react-sortablejs实现
- 在列表项内部拖动使用react-rnd实现
- 列表项的尺寸调整使用react-resizable实现

其实这也比较符合实际开发中的场景，react-dnd一般只负责从物料区到Drop区域的拖拽，在Drop区域的很多后续操作更为复杂，需要一些封装了更多功能的库来实现

比如使用react-dnd + antv/G6来完成一个拖拽配置审批流程的功能
### 一些感受
在学习React-DnD的过程中，感觉有些API还是比较抽象的，尤其是几个获取偏移量坐标的函数