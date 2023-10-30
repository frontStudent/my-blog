### if else

### forEach map

### 编辑/新增弹窗的判断逻辑
编辑和新增的弹窗一般会复用同一个组件，所以需要判断是修改还是新增操作。

一开始是在外部页面中去维护一个值为0，1的act状态，作为参数传入弹窗组件中

当触发新增或者编辑操作时去修改act的值

```js
// 新增
const handleAdd = () => {
  setAct(1)
  setDialogVisible(true)
}

// 编辑
const handleEdit = (record) => {
  setCurRecord(record)
  setAct(0)
  setDialogVisible(true)
}
```
可以发现act状态其实是多余的，因为弹窗组件需要传入curRecord参数(也就是编辑时点击的当前表格行记录)，所以可以直接通过curRecord来判断是新增还是编辑操作。

但是还需注意在关闭弹窗的方法中要将curRecord这个状态去清空，否则在新增操作时，curRecord的值还是上次的值。