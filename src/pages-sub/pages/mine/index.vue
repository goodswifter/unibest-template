<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<template>
  <view
    class="overflow-hidden bg-white px-16 pt-8"
    :style="{ marginTop: safeAreaInsets?.top + 'px' }"
  >
    <view>首页。。。。。。</view>
    <view class="my-16 flex justify-center">
      <nut-button @click="onToast">toast</nut-button>
    </view>
    <view class="my-16 flex justify-center">
      <nut-button @click="handleClick">开发示例</nut-button>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

defineOptions({
  name: 'Home',
})

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
const author = ref('菲鸽')
// 测试 uni API 自动引入
onLoad(() => {
  console.log(author)
})

// toast
const toast = useToast()
const onToast = () => {
  toast.text('-toast-今天心情好吗，今天是一个好日子，来一首歌')
}

const handleClick = () => {
  uni.navigateTo({
    url: '/pages-demo/pages/demo/index',
    fail: res => {
      console.log(res)
    },
  })
}
</script>

<style lang="scss" scoped>
.main-title-color {
  color: #d14328;
}
</style>
