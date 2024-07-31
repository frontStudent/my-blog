
### useValidJson
```js
import { useState, useEffect } from 'react'

const useValidJson = (json, onParseError) => {
  const [result, setResult] = useState({ data: null, isValid: false })

  useEffect(() => {
    try {
      const parsedData = JSON.parse(json)
      setResult({ data: parsedData, isValid: true })
    } catch (error) {
      typeof onParseError === 'function' && onParseError(error)
      setResult({ data: null, isValid: false })
    }
  }, [json]) // eslint-disable-line

  return result
}

export default useValidJson

```

### useBuildUrl
处理在url跳转场景中类似
`menuId=${menuId}&planId=${planId}&planStatus=1&closeCaseType=${closeCaseType}&dateRange=${startDate}~${endDate}`这种参数拼接较长ide中无法换行的情况

```js
import { useCallback } from 'react'

const useBuildUrl = () => {
  return useCallback((baseUrl, params) => {
    if (Object.prototype.toString.call(params) !== '[object Object]') {
      console.error('params must be an object')
      return baseUrl
    }
    const paramStr = Object.entries(params)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&')
    return `${baseUrl}?${paramStr}`
  }, [])
}

export default useBuildUrl
```