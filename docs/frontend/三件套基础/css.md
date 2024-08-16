### github地址：

### 卡片翻转效果

### 渐变色文字
文字颜色透明，背景色渐变，从而实现渐变色文字

```jsx
import styled from 'styled-components'
const StyledText = styled.div`
  font-size: 30px;
  background-image: linear-gradient(45deg, #ff0000, #00ff00, #0000ff);
  background-clip: text;
  color: transparent;
`;
```