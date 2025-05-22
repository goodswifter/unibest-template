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
  <nut-input
    v-model="inputValue"
    placeholder="在输入时执行格式化"
    :formatter="formatter"
    format-trigger="onChange"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const formatter = (value: string) => {
  console.log('输入的值: ', value)
  const content = value.replace(/\D/g, '*')
  console.log('格式化后的值: ', content)
  return content
}

const inputValue = ref('')
</script>
