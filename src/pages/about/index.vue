<route lang="json5">
{
  style: {
    navigationBarTitleText: '关于',
    componentPlaceholder: {
      'sub-about': 'view',
    },
  },
}
</route>

<template>
  <view>
    <sub-about />
  </view>
</template>

<script lang="ts" setup>
import SubAbout from '@/pages-sub/pages-about/index.vue'

console.log('关于页 加载完毕')
</script>

<style lang="scss" scoped>
.test-css {
  // mt-4=>1rem=>16px;
  margin-top: 16px;
}
</style>
