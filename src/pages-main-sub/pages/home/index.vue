<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="page">
{
  style: {
    navigationBarTitleText: 'demo',
  },
}
</route>

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
      <nut-button @click="handleClick">点击跳转详情</nut-button>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { TestEnum } from '@/enum/typings'
import { ref } from 'vue'
import { orchctmsDictionaryIds } from '@/pages-main-sub/api/home'
import { commonApi } from '@/api'

defineOptions({
  name: 'Home',
})

orchctmsDictionaryIds([]).then(res => {
  console.log(res)
})
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
const author = ref('菲鸽')

// 测试 uni API 自动引入
onLoad(() => {
  console.log(author)
  console.log(TestEnum.A)
})

// toast
const toast = useToast()
const onToast = () => {
  console.log(1111)
  toast.text('-toast-今天心情好吗，今天是一个好日子，来一首歌')
}

const handleClick = () => {
  uni.navigateTo({
    url: '/pages-sub/pages-home/detail/index',
  })
}

commonApi
  .getPriceTypes()
  .then(res => {
    console.log(res, 'res')
  })
  .catch(err => {
    console.log(err, 'err')
  })
</script>

<style lang="scss" scoped>
.main-title-color {
  color: #d14328;
}
</style>
