
### 需求引入
年月范围选择时，起止月份不能跨年。
因此当选中一个月份时，选第二个月份时需要将该月份的前后年都给禁用。
（antd Form场景中）
### 实现思路
antd官方文档有个相关例子，仿照该例子可以封装一个表单域组件如下：
```js
import React, { useState } from 'react'
import { DatePicker } from 'antd'

const { RangePicker } = DatePicker

export default (props) => {
  const { onChange, value, onDisabledDateValidate, ...other } = props
  const [dates, setDates] = useState(null)
  const [dateValue, setDateValue] = useState(null)

  const disabledDate = (current) => {
    if (onDisabledDateValidate) {
      return onDisabledDateValidate(current, dates)
    }
    return false
  }

  const onOpenChange = (open) => {
    if (open) {
      setDates([null, null])
    } else {
      setDates(null)
    }
  }

  const onDateChange = (val) => {
    setDateValue(val)
    onChange && onChange(val)
  }

  const tProps = {
    value: dates || dateValue || value,
    onCalendarChange: (val) => setDates(val),
    onChange: onDateChange,
    onOpenChange,
    disabledDate,
    ...other
  }

  return <RangePicker {...tProps} allowClear={false} />
}

```
外部引用时传入onDisabledDateValidate(current, dates)写具体的禁用日期逻辑，current是所有日期，dates是日期面板上的临时选中日期，为一个长度2的数组。

```jsx
 const onDisabledDateValidate = (current, dates) => {
    if (!dates || dates.length === 0) {
      return false
    }
    const date = dates[0] || dates[1]
    if(!date) return false
    return current.format('YYYY') !== date.format('YYYY')
}

<Form.Item name="yearMonth" label={locale('年月')} initialValue={initDate}>
    <RangePicker picker="month" onDisabledDateValidate={onDisabledDateValidate}/>
</Form.Item>
```