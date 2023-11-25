## vue3构建简历工具

### 准备阶段案例
#### demo1：DOM元素转换为图片，点击按钮下载
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
#### demo2：DOM元素转换为图片再转换为pdf，点击按钮下载

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

#### el-form实现自定义字段增删和实时展示

```html
<template>
  <div>
    <el-form :model="form" label-width="80px" @input="handleFormChange">
      <div v-for="(field, index) in formFields" :key="index" class="field">
        <el-form-item label="label">
          <el-input v-model="field.label" placeholder="字段名"></el-input>
        </el-form-item>
        <el-form-item label="value">
          <el-input v-model="field.value" placeholder="字段值"></el-input>
        </el-form-item>
        <el-button type="danger" @click="removeField(index)" style="margin-left: 20px;">delete</el-button>
      </div>
      <el-form-item>
        <el-button type="primary" @click="addField">Add Field</el-button>
        <el-button type="primary" @click="submitForm">Submit</el-button>
      </el-form-item>
    </el-form>

    <div class="display-area">
      <h4>Form Data:</h4>
      <p v-for="(field, index) in _formFields" :key="index">{{ field.label }}: {{ field.value }}</p>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed  } from 'vue';

const form = reactive({
  name: '',
  email: '',
  age: ''
});

const formFields = reactive([
  { label: 'Name', value: '' },
  { label: 'Email', value: '' },
  { label: 'Age', value: '' }
]);

// 数据实时展示时过滤掉还未确定标签的自定义字段
const _formFields = computed(() => {
  return formFields.filter(({label}) => label)
})

const handleFormChange = () => {
  // Do something when form values change
};

const submitForm = () => {
  // Handle form submission
};

const addField = () => {
  formFields.push({ label: '', value: '' });
};

const removeField = (index) => {
  formFields.splice(index, 1);
};
</script>

<style>
.display-area {
  margin-top: 20px;
}

.field {
  display: flex;
}
</style>
```

#### 封装BaseInfo组件并将最新字段信息暴露给父组件
考虑用时间线组件el-timeline去展示简历的每个板块编辑表单，每个板块都要抽成组件，放在moduleList的comp属性中供v-for时调用
BaseInfo组件：(上个例子的数据展示区域在组件外部)
```html
<template>
    <div>
        <el-form :model="form" label-width="80px" @input="handleFormChange">
            <div v-for="(field, index) in formFields" :key="index" class="field">
                <el-form-item label="label">
                    <el-input v-model="field.label" placeholder="字段名"></el-input>
                </el-form-item>
                <el-form-item label="value">
                    <el-input v-model="field.value" placeholder="字段值"></el-input>
                </el-form-item>
                <el-button type="danger" @click="removeField(index)" style="margin-left: 20px;">delete</el-button>
            </div>
            <el-form-item>
                <el-button type="primary" @click="addField">Add Field</el-button>
                <el-button type="primary" @click="submitForm">Submit</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
  
<script setup>
import { reactive, watch } from 'vue';
const emit = defineEmits(['baseInfoUpdated'])
const form = reactive({
    name: '',
    email: '',
    age: ''
});
const formFields = reactive([
    { label: 'Name', value: '' },
    { label: 'Email', value: '' },
    { label: 'Age', value: '' }
]);

watch(formFields, (newFormFields) => {
    // 使用 emit 方法将最新的 formFields 数据暴露给父组件
    emit('baseInfoUpdated', newFormFields);
});

const addField = () => {
    formFields.push({ label: '', value: '' });
};

const removeField = (index) => {
    formFields.splice(index, 1);
};
</script>
  
<style>
.display-area {
    margin-top: 20px;
}

.field {
    display: flex;
}
</style>
```

App.vue代码：
```html
<template>
  <div>
    <el-timeline>
      <el-timeline-item v-for="({timestamp, comp}, index) in moduleList" :key="index" placement="top" size='large' type='primary'
        icon='MoreFilled' :timestamp="timestamp">
        <component :is="comp" @baseInfoUpdated="handleBaseInfoUpdated"/>
      </el-timeline-item>
    </el-timeline>

    <div class="display-area">
      <h4>Form Data:</h4>
      <p v-for="(field, index) in baseInfoList" :key="index">{{ field.label }}: {{ field.value }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import  BaseInfo from '@/components/BaseInfo.vue';
const moduleList = reactive([
  { timestamp: 'Name', value: '', comp: BaseInfo },
  { timestamp: 'Email', value: '' },
  { timestamp: 'Age', value: '' }
]);

let baseInfoList = ref([
    { label: 'Name', value: '' },
    { label: 'Email', value: '' },
    { label: 'Age', value: '' }
]);
const handleBaseInfoUpdated = (newList) => {
  baseInfoList.value = newList.filter(({label}) => label)
}
</script>

<style>
.display-area {
  margin-top: 20px;
}

.field {
  display: flex;
}
</style>
```

涉及vue3知识点：
1.ref 与 reactive 区别 用reactive时更改baseInfoList数据页面不刷新，用ref时才刷新
2.用@baseInfoUpdated="handleBaseInfoUpdated"用一个回调函数接受子组件抛出的数据，@后是事件名

#### title样式
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