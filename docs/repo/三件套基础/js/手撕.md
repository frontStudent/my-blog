
### 数据添加千分位/上升下降高亮处理
示例：3000% => +3,000% (绿色)

```jsx 
/**
 * 数字千分位/小数位补充两位
 * @param {Number} number
 * @param {Boolean} decimalThousands 小数是否需要千分位
 */
const　_thousands = (number, decimalThousands) => {
  // 小数位也要千分位
  if (decimalThousands) {
    return String(number).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  // 小数位不要千分位
  let parts = String(number).split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
}

/**
 * 上升下降的数据分别用不同颜色显示
 * @param {String} text
 * @param {String} highlight 是否需要高亮 0不需要 1需要
 * @param {String} thousands 文本是否需要千分位 0不需要 1需要
 */
const renderHighlightData = (text, highlight, thousands) => {
    const renderThousands = (text) => (thousands === '1' ? _thousands(text || '') : text)

    // 不需要改色就直接判断要不要千分位即可
    if (highlight !== '1') return renderThousands(text)

    const regex = /(-?\d+(\.\d+)?)(%?)/
    const match = text?.match(regex)
    if (match) {
      const number = Number(match[1])
      const suffix = match[3];
      return number > 0 ? (
        <UpSpan>{`+${renderThousands(number)}${suffix}`}</UpSpan>
      ) : number < 0 ? (
        <DownSpan>{`${renderThousands(number)}${suffix}`}</DownSpan>
      ) : (
        `${number}${suffix}`
      )
    }
    return renderThousands(text)
}
```

### 千分位/四舍五入/精度

```js
/**
 * 数字千分位/小数位补充两位
 * @param {Number} number
 * @param {Boolean} decimalThousands 小数是否需要千分位
 */
function thousands(number, decimalThousands) {
  // 小数位也要千分位
  if (decimalThousands) {
    return String(number).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  // 小数位不要千分位
  let parts = String(number).split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
}

/**
 * 小数四舍五入 fixed(1.005, 2) = 1.00
 * @param {Number} number
 * @param {Number} precision
 * @returns
 */
function fixed(number, precision) {
  let numStr = String(number)
  let decimalIndex = numStr.indexOf('.')
  if (decimalIndex !== -1) {
    // Truncate to specified number of decimal places
    numStr = numStr.substring(0, decimalIndex + precision + 1)
  }
  return numStr
}

/**
 * 小数四舍五入 round(1.005, 2) = 1.01
 * @param {Number} number
 * @param {Number} precision
 * @returns
 */
function round(number, precision) {
  return Math.round(+number + 'e' + precision) / Math.pow(10, precision)
}

/**
 * 数字精度丢失
 * @param {Number} number
 * @param {Number} precision
 * @returns
 */
function strip(number, precision = 12) {
  return +parseFloat(number.toPrecision(precision))
}

/**
 * 反千分位
 * @param {Number} number
 * @returns
 */
function antiThousands(number) {
  return `${number || ''}`.replace(/,/g, '')
}
```