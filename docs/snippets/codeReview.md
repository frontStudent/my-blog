
## 高阶函数运用
### map替代forEach
需求背景：applyTableData为对象数组，为表格的行记录数据，其中payAmount表示预付金额，该字段可编辑，编辑时需要根据行id找到所编辑行，并更新整个applyTableData。

#### forEach实现
```js
  // 编辑本次预付金额回调
  const handlePayAmountChange = (val, record) => {
    const { id } = record || {}
    let _applyTableData = [...applyTableData]
    _applyTableData.forEach((apply) => {
      if (apply?.id === id) {
        apply.payAmount = val
      }
    })
    setApplyTableData(_applyTableData)
  }
```
#### map实现
```js
  // 编辑本次预付金额回调
  const handlePayAmountChange = (val, record) => {
    const { id } = record || {}
    const _applyTableData = applyTableData.map((apply) => {
      return apply?.id === id ? { ...apply, payAmount: val } : apply
    })
    setApplyTableData(_applyTableData)
  }
```
### reduce替代forEach
需求背景：applyTableData为对象数组，为表格的行记录数据，其中payAmount表示预付金额，该字段可编辑，编辑时需要实时计算其合计额。
#### forEach实现
```js
  // 更新预付款金额总计值
  const handleGetPrePaySum = () => {
    if (!applyTableData?.length) return
    let prePaySum = 0
    applyTableData.forEach(({ payAmount }) => {
      if(payAmount && !isNaN(payAmount)){
        prePaySum += payAmount
      }
    })
    setPrePaySum(prePaySum)
  }
```
#### reduce实现
```js
  // 更新预付款金额总计值
  const handleGetPrePaySum = () => {
    if (!applyTableData?.length) return
    let prePaySum = applyTableData.reduce((sum, { payAmount }) => {
      return payAmount && !isNaN(payAmount) ? sum + payAmount : sum
    }, 0)
    setPrePaySum(prePaySum)
  }
```
### every替代forEach
需求背景：applyTableData为对象数组，为表格的行记录数据，其中payAmount表示预付金额，需检查是否所有行记录的payAmount都填写了。
#### forEach实现
```js
  // 校验本次预付金额是否全部填写
  const handleCheckPayAmount = () => {
    if (!applyTableData?.length) return
    let flag = true
    applyTableData.forEach(({ payAmount }) => {
      if(!payAmount && payAmount !== 0){
        flag = false
      }
    })
    return flag
  }
```
#### every实现
```js
  // 校验本次预付金额是否全部填写
  const handleCheckPayAmount = () => {
    if (!applyTableData?.length) return
    return applyTableData.every(({ payAmount }) => payAmount || payAmount === 0)
  }
```
## 编辑/新增弹窗的判断逻辑
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

### 条件判断若只有两层逻辑则不使用else