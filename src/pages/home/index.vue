<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="home">
{
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '首页',
    componentPlaceholder: {
      'sub-home': 'view',
    },
  },
}
</route>

<template>
  <sub-home />
</template>

<script lang="ts" setup>
import SubHome from '@/pages-main-sub/pages/about/index.vue'

defineOptions({
  name: 'Home',
})

console.log('首页加载完毕')
</script>
