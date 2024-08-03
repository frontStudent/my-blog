
### 需求引入
需要在移动端选择年月日-上下午的格式
但是antd-mobile中datePicker组件没有直接的api去支持年月日-上下午的格式

### 实现思路
使用precision、filter和renderLabel属性配合可以实现年月日-上下午的选择格式功能。
1. 设置precision="hour"
2. 在filter中对小时进行过滤，只保留两项即可，具体数字无所谓
3. 在renderLabel中对这两个仅剩的钟点进行显示文本的映射

完整demo示例如下：
```jsx
import React, { useState } from 'react'
import locale from 'library/utils/locale'
import { DatePicker } from 'antd-mobile'
import dayjs from 'dayjs'
const LeaveDateRange = () => {
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [startDate, setStartDate] = useState(dayjs())
  const [endDate, setEndDate] = useState(dayjs())

  const filter = {
    hour: (val, extend) => {
      return val === 9 || val === 13
    }
  }
  const renderLabel = (type, data) => {
    switch (type) {
      case 'year':
        return data + '年'
      case 'month':
        return data + '月'
      case 'day':
        return data + '日'
      case 'hour':
        return data === 9 ? '上午' : '下午'
      default:
        return data
    }
  }
  return (
    <div>
      <div className="field-row border-b">
        <p className="form-item-label">
          <span>{locale('开始时间')}</span>
        </p>
        <div onClick={() => setVisible1(true)}>
          {startDate ? dayjs(startDate).format('YYYY-MM-DD ddd A') : '请选择'}
        </div>
      </div>
      <div className="field-row border-b">
        <p className="form-item-label">
          <span>{locale('结束时间')}</span>
        </p>
        <div onClick={() => setVisible2(true)}>
          {endDate ? dayjs(endDate).format('YYYY-MM-DD ddd A') : '请选择'}
        </div>
      </div>
      <DatePicker
        visible={visible1}
        onClose={() => {
          setVisible1(false)
        }}
        precision="hour"
        filter={filter}
        renderLabel={renderLabel}
        onSelect={(date) => {console.log(date)}}
        onConfirm={(date) => {setStartDate(date)}}
      />
      <DatePicker
        visible={visible2}
        onClose={() => {setVisible2(false)}}
        precision="hour"
        filter={filter}
        renderLabel={renderLabel}
        onSelect={(date) => {console.log(date)}}
        onConfirm={(date) => {setEndDate(date)}}
      />
    </div>
  )
}
export default LeaveDateRange
```