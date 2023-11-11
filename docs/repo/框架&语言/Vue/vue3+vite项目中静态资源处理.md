### 问题背景

参考了vite官方文档：https://cn.vitejs.dev/guide/assets.html
### 最终代码
```html
<template>
    <el-card shadow="hover">
        <el-image :src="src" class="image" lazy />
        <div class="intro">{{ name }}</div>
    </el-card>
</template>
  
<script setup>
    const props = defineProps({ name: String, imgUrl: String })
    const src = new URL(props.imgUrl, import.meta.url).href
</script>
```

