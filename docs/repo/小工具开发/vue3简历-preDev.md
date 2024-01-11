## vue3构建简历工具

其中可拆解的demo：
- html2canvas + jsPDF 实现简历导出为本地pdf
- vue-cropper 实现简历照片裁剪上传
- 浏览器原生事件mousemove/mousedown/mouseup 实现简历照片拖拽调整位置与大小  

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