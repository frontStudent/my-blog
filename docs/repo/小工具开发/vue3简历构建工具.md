
其中可拆解的demo：
- html2canvas + jsPDF 实现简历导出为本地pdf
- vue-cropper 实现简历照片裁剪上传
- 浏览器原生事件mousemove/mousedown/mouseup 实现简历照片拖拽调整位置与大小 并封装为自定义指令 

### DOM元素转换为图片，点击按钮下载
在dom挂载后，调用html2canvas的API即可
```html
<template>
  <div>
    <div ref="captureElement" style="padding: 10px; background: #f5da55">
      <h4 style="color: #000;">Hello world!</h4>
    </div>
    <button @click="capture">Capture</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import html2canvas from 'html2canvas';

const captureElement = ref(null);

const capture = () => {
  if (captureElement.value) {
    html2canvas(captureElement.value).then(canvas => {
      const imgData = canvas.toDataURL('image/jpeg');
      // 下载图片
      const link = document.createElement('a');
      link.download = 'capture.jpg';
      link.href = imgData;
      link.click();
    });
  }
  console.log('captureElement is null')
};

onMounted(() => {
  capture()
});
</script>
```
### DOM元素转换为图片再转换为pdf，点击按钮下载
```html
<template>
  <div>
    <div ref="captureElement" style="padding: 10px; background: #f5da55">
      <h4 style="color: #000;">Hello world!</h4>
    </div>
    <button @click="capture">Capture</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';

const captureElement = ref(null);

const capture = () => {
  if (captureElement.value) {
    html2canvas(captureElement.value).then(canvas => {
      const imgData = canvas.toDataURL('image/jpeg');
      const pdf = new jspdf();
      pdf.addImage(imgData, 'JPEG', 0, 0);
      pdf.save('capture.pdf');
    });
  }
  console.log('captureElement is null')
};
</script>
```

### 三个vue3自定义指令实现可调整大小、可拖拽、可编辑的盒子
v-resizable&v-draggable&v-editable

```js title="vResizable.js"
export const vResizable = {
  mounted: (el, binding) => {
    if(binding.value?.disable) return
    let startX, startY, startWidth, startHeight, startLeft, startTop, moving = false
    el.style.maxWidth = binding.value?.maxWidth || '600px'
    el.style.maxHeight = binding.value?.maxHeight || '800px'
    el.style.position = 'absolute'
    el.style.transform = 'translate(-50%, -50%)'
    
    const onMouseDown = (e) => {
      e.preventDefault();
      startX = e.clientX
      startY = e.clientY
      startWidth = el.offsetWidth
      startHeight = el.offsetHeight
      startLeft = el.offsetLeft
      startTop = el.offsetTop
      document.addEventListener('mousemove', onStartResize)
      document.addEventListener('mouseup', onMouseUp)
    }

    // 鼠标按下开始拖动
    const onStartResize = (e) => {
      moving = true
      const dx = e.clientX - startX
      const dy = e.clientY - startY
      let width = startWidth,
        height = startHeight,
        left = startLeft,
        top = startTop
      const direction = el.style.cursor?.split('-')?.[0]
      // 拖拽移动位置
      if (direction === 'move') {
        // el.style.left = startLeft + dx + 'px'
        // el.style.top = startTop + dy + 'px'
        return
      }
      // 水平方向
      if (direction.includes('e')) {
        width = startWidth + dx + 'px'
        left = startLeft + dx / 2 + 'px'
      }
      if (direction.includes('w')) {
        width = startWidth - dx + 'px'
        left = startLeft + dx / 2 + 'px'
      }
      // 垂直方向
      if (direction.includes('s')) {
        height = startHeight + dy + 'px'
        top = startTop + dy / 2 + 'px'
      }
      if (direction.includes('n')) {
        height = startHeight - dy + 'px'
        top = startTop + dy / 2 + 'px'
      }
      el.style.width = width
      el.style.height = height
      el.style.left = left
      el.style.top = top
    }

    // cursor样式根据边界位置变化
    // e.offsetX / e.offsetY 是鼠标在元素内部的坐标，是相对于元素边界的
    // el.offsetWidth / el.offsetHeight 是元素的大小
    const onTouchBoundary = (e) => {
      if(moving) return
      let limit = 10
      // 是否在左上角
      if (e.offsetX < limit && e.offsetY < limit) {
        el.style.cursor = 'nw-resize'
        return
      }
      // 是否在右下角
      if (
        e.offsetX > el.offsetWidth - limit &&
        e.offsetY > el.offsetHeight - limit
      ) {
        el.style.cursor = 'se-resize'
        return
      }
      // 是否在左下角
      if (e.offsetX < limit && e.offsetY > el.offsetHeight - limit) {
        el.style.cursor = 'sw-resize'
        return
      }
      // 是否在右上角
      if (e.offsetX > el.offsetWidth - limit && e.offsetY < limit) {
        el.style.cursor = 'ne-resize'
        return
      }
      // 是否在左边界
      if (e.offsetX < limit) {
        el.style.cursor = 'w-resize'
        return
      }
      // 是否在右边界
      if (e.offsetX > el.offsetWidth - limit) {
        el.style.cursor = 'e-resize'
        return
      }
      // 是否在上边界
      if (e.offsetY < limit) {
        el.style.cursor = 'n-resize'
        return
      }
      // 是否在下边界
      if (e.offsetY > el.offsetHeight - limit) {
        el.style.cursor = 's-resize'
        return
      }
      // el.style.cursor = 'move'
    }

    const onMouseUp = () => {
      moving = false
      document.removeEventListener('mousemove', onStartResize)
      document.removeEventListener('mouseup', onMouseUp)
    }

    el.addEventListener('mousemove', onTouchBoundary)
    el.addEventListener('mousedown', onMouseDown)
  }
}

```

```js title="vDraggable.js"
export const vDraggable = {
  mounted: (el, binding) => {
    if(binding.value?.disable) return
    let startX,
      startY,
      startWidth,
      startHeight,
      startLeft,
      startTop,
      moving = false
    el.style.maxWidth = binding.value?.maxWidth || '600px'
    el.style.maxHeight = binding.value?.maxHeight || '800px'
    el.style.position = 'absolute'
    el.style.transform = 'translate(-50%, -50%)'

    const onMouseDown = (e) => {
      e.preventDefault()
      startX = e.clientX
      startY = e.clientY
      startWidth = el.offsetWidth
      startHeight = el.offsetHeight
      startLeft = el.offsetLeft
      startTop = el.offsetTop
      document.addEventListener('mousemove', onStartResize)
      document.addEventListener('mouseup', onMouseUp)
    }

    // 鼠标按下开始拖动
    const onStartResize = (e) => {
      moving = true
      const dx = e.clientX - startX
      const dy = e.clientY - startY
      let width = startWidth,
        height = startHeight,
        left = startLeft,
        top = startTop
      const direction = el.style.cursor?.split('-')?.[0]
      // 拖拽移动位置
      if (direction === 'move') {
        el.style.left = startLeft + dx + 'px'
        el.style.top = startTop + dy + 'px'
        return
      }
      el.style.width = width
      el.style.height = height
      el.style.left = left
      el.style.top = top
    }

    // cursor样式根据边界位置变化
    // e.offsetX / e.offsetY 是鼠标在元素内部的坐标，是相对于元素边界的
    // el.offsetWidth / el.offsetHeight 是元素的大小
    const onTouchBoundary = (e) => {
      if (moving) return
      let limit = 10
      if (
        e.offsetX > limit &&
        e.offsetY > limit &&
        e.offsetX < el.offsetWidth - limit &&
        e.offsetY < el.offsetHeight - limit
      ) {
        el.style.cursor = 'move'
      }
    }

    const onMouseUp = () => {
      moving = false
      document.removeEventListener('mousemove', onStartResize)
      document.removeEventListener('mouseup', onMouseUp)
    }

    el.addEventListener('mousemove', onTouchBoundary)
    el.addEventListener('mousedown', onMouseDown)
  }
}
```

```js title="vEditable.js"
export const vEditable = {
  mounted: (el, binding) => {
    if(binding.value?.disable) return
    el.style.outline = 'none'
    el.style.border = 'none'
    el.style.padding = '5px'
    el.style.resize = 'none'
    el.addEventListener('click', () => {
      el.style.border = '1px dashed #ccc'
      // 将input元素聚焦
      el.focus()
    })
    // 给input元素添加失焦事件，当失焦时恢复为div元素
    el.addEventListener('blur', () => {
      el.style.border = 'none'
    })
  }
}
```

#### 关于拖拽缩放编辑等操作发布了npm包
后续可能有新的迭代，在下面的地址中查看源码和readme文档，不在本文中继续更新
npm包地址：https://www.npmjs.com/package/vue-drag-drop-transformer
github仓库地址：https://github.com/frontStudent/vue-drag-drop-transformer.git

### title样式
画梯形时使用 clip-path 属性可以为元素创建各种形状的可见区域，可以被用来创建各种形状的裁剪区域
```css
.title {
  padding: 3px 10px;
  background-color: #4085da;
  font-size: 18px;
  font-weight: bold;
  color: #f3efef;
  clip-path: polygon(0 0, 14% 0, 18% 100%, 0 100%);
}
```
但是这种写法在开发时视觉效果虽然正确，但是绘到canvas上之后裁剪的形状出不来，依然是一整个矩形蓝色背景

```css
.title {
  padding: 0px 10px;
  font-size: 18px;
  font-weight: bold;
  color: #f3efef;
  width: 110px;
  height: 0;
  border-bottom: 30px solid #4085da; /* 调整这个值来控制直角梯形的高度 */
  border-right: 30px solid transparent; /* 调整这个值来控制直角梯形的左边宽度 */
}
```