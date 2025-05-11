<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="home">
{
  style: {
    navigationBarTitleText: '首页1',
  },
}
</route>

<template>
  <view
    class="overflow-hidden bg-white px-16 pt-8"
    :style="{ marginTop: safeAreaInsets?.top + 'px' }"
  >
    <view class="mt-48">
      <image src="/static/logo.svg" alt="" class="mx-auto block h-112 w-112" />
    </view>
    <view class="main-title-color mt-16 text-center text-8xl">unibest</view>
    <view class="mb-32 mt-16 text-center text-2xl">最好用的 uniapp 开发模板</view>

    <view class="m-auto mb-16 max-w-400 text-justify indent">{{ description }}</view>
    <view class="mt-32 text-center">
      当前平台是：
      <text class="text-green-500">{{ PLATFORM.platform }}</text>
    </view>
    <view class="mt-16 text-center">
      模板分支是：
      <text class="text-green-500">base</text>
    </view>
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
import PLATFORM from '@/utils/platform'
import { ref } from 'vue'

defineOptions({
  name: 'Home',
})

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
const author = ref('菲鸽')
const description = ref(
  'unibest 是一个集成了多种工具和技术的 uniapp 开发模板，由 uniapp + Vue3 + Ts + Vite4 + UnoCss + UniUI + VSCode 构建，模板具有代码提示、自动格式化、统一配置、代码片段等功能，并内置了许多常用的基本组件和基本功能，让你编写 uniapp 拥有 best 体验。',
)
// 测试 uni API 自动引入
onLoad(() => {
  console.log(author)
  console.log(TestEnum.A)
})

// toast
const toast = useToast()
const onToast = () => {
  toast.success('toast')
}

const handleClick = () => {
  uni.navigateTo({
    url: '/pages-sub/pages-home/detail/index',
  })
}
</script>

<style lang="scss" scoped>
.main-title-color {
  color: #d14328;
}
</style>
