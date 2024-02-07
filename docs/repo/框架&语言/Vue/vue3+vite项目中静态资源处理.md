### 问题背景
用vue3官方文档的起步指南中的方法去初始化项目，但在img标签中使用src="../assets/doc.png"时，图片无法显示。
参考了vite官方文档：https://cn.vitejs.dev/guide/assets.html

### 最终代码
```html
<template>
    <el-card shadow="hover">
        <el-image :src="src" class="image" lazy />
        <div class="intro">{{ intro }}</div>
    </el-card>
</template>
  
<script setup>
    const props = defineProps({ intro: String, imgUrl: String })
    const src = new URL(props.imgUrl, import.meta.url).href
</script>
```

