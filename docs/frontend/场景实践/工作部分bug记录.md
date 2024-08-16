## 长期谨记
- 工时日报打卡三件套
- 每天记得提交代码，文件和路由要一起提交
- 时刻消除警告，暂存提交前检查
- 准备组会汇报内容

### bug notes
#### bug001
- 来源业务：阳光麦田-门店表现分析
- bug情景：区域组件点击时，如果相比上一次点击没有变化，onChange里拿到的ids是空数组，
所以重复点的时候就没能拿到区域的参数，请求不到数据。
- bug解决： 
``` javaScript
// 区域树change事件
const handleTreeChange = (ids) => {
  if (ids?.length) {
    setOrganizationId(ids?.[0])
    setQueryParams({ ...queryParams, organizationId: ids?.[0] })
  }
  // 第二次点击同一区域时ids为空数组
  else {
    setQueryParams({ ...queryParams })
  }
}
```

#### bug002
- 来源业务：冠芳-门店活动统计
- bug情景：移动端多选控件选完再清空之后，Form拿到的值是空字符串而不是undefined，和web端不一样
如果按照以下代码去处理筛选参数发请求：
``` javaScript
const handleFilter = (filterParams) => {
  setFilterParams(filterParams)
  const handleGetIds = (list = []) => {
    return list.map((item) => item.id)
  }
  const { dealerIdList, cmTypeIdList} = filterParams || {}
  const _filterParams = {
    dealerIdList: handleGetIds(dealerIdList),
    cmTypeIdList: handleGetIds(cmTypeIdList),
  }
  setQueryParams({ ...queryParams, ..._filterParams })
}
```

上面这个handleGetIds是有问题的，只考虑了list是undefined和null的情况，在web端不会出问题，但是在移动端出现空字符串情况下会报错
用以下这种写法，不会报错，但是会传空数组，后端有可能不兼容，更好的写法还是传undefined这样转json时就会消失

``` javaScript
  const handleGetIds = (list) => {
    return (Array.isArray(list) ? list : []).map((item) => item.id)
  }
```

- bug解决： 
``` javaScript
// 区域树change事件
const handleTreeChange = (ids) => {
  if (ids?.length) {
    setOrganizationId(ids?.[0])
    setQueryParams({ ...queryParams, organizationId: ids?.[0] })
  }
  // 第二次点击同一区域时ids为空数组
  else {
    setQueryParams({ ...queryParams })
  }
}
```

#### bug003
- 来源业务：冠芳-门店活动统计
- bug情景：自己封装的数字范围输入组件，右边数字输入框如果录入后再清空，左边的数字输入框会变成0，因为左边输入框设置了`max={max ?? Number.MAX_SAFE_INTEGER}`，max是右边输入框的值，如果变成空字符串之后，??运算符还是会让max为空字符串，只有undefined和null的情况下才会是Number.MAX_SAFE_INTEGER

- bug解决：这个bug和bug002其实有类似之处，都是没考虑空字符串，只考虑了undefined和null的情况，改成`max={(max || max === 0) ? max : Number.MAX_SAFE_INTEGER}`即可
### coding notes
取消设置了editRender的可编辑行鼠标悬停的hover效果
```css
.data-grid .ant-table-tbody > tr.ant-table-row-hover > td,
.data-grid .ant-table-tbody > tr > td.ant-table-cell-row-hover,
.data-grid .ant-table-tbody > tr.ant-table-row-selected > td {
  .wq-datagrid-edit-cell[contenteditable='true']:not(.wq-datagrid-edit-nostyle) {
    border: none;
    padding: 0px;
    border-radius: 0px;
    background: none;
    margin-inline: 0px
  }
}
```


在修改弹窗表单回显的场景中，给Combo组件赋id值后需要直接显示出对应的名称时，要把async去掉，才能让这个组件在初始加载时就查出对应名称来回显

Customer控件 queryParams中trade_type 1:客户、2:经销商、3:终端、不传：后端自己动态判断为经销商终端模式
经销商控件权限 isControl

表格勾选点击checkbox之后没有显示为选中的状态，检查后端返回的单条记录唯一标识名，再看rowKey有没有传错

查看导出任务：在本地页面导出成功之后，用当前账号登录当前ip，点击右上角下载logo查看

enableResizable可以拖动表头宽度

门店控件也用Customer控件

移动端DatePicker.Combo控件传进去的应为new Date类型
移动端搜索框不能用InputText组件，用antd mobile SearchBar

冠芳有效终端-门店活动统计封装了一个数字范围选择组件，用于antd的Form.Item中，一般这类组件必须具备value、onChange属性，如果要更完备还需提供ref

移动端的Form.Item中，部分组件的onChange第一个参数并非是我们需要拿到的value，而是event，因此可借鉴web端定制项目中components的Customize高阶组件去重写onChange函数

筛选都去copy移动端冠芳有效终端-门店活动统计，有筛选后参数状态的保留



