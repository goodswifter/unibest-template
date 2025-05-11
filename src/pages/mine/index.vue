<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5">
{
  style: {
    navigationBarTitleText: '我的',
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
import SubHome from '@/pages-sub/pages-home/index.vue'

defineOptions({
  name: '',
})
</script>
