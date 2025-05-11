<route lang="json5">
{
  style: {
    navigationBarTitleText: '关于',
    componentPlaceholder: {
      'wl-text': 'view',
    },
  },
}
</route>

<template>
  <view
    class="overflow-hidden bg-white px-16 pt-8"
    :style="{ marginTop: safeAreaInsets?.top + 'px' }"
  >
    <wl-text />
    <view class="mt-32 text-center text-3xl">
      鸽友们好，我是
      <text class="text-red-500">菲鸽1</text>
    </view>
    <RequestComp />
    <UploadComp />
  </view>
</template>

<script lang="ts" setup>
import RequestComp from './cpns/request.vue'
import UploadComp from './cpns/upload.vue'
import WlText from '../pages-common/cpns/wl-text.vue'

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
console.log('预加载成功')
</script>

<style lang="scss" scoped>
.test-css {
  // mt-4=>1rem=>16px;
  margin-top: 16px;
}
</style>
