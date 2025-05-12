<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<template>
  <view class="mt-1 px-20">
    <nut-row>
      <nut-col
        v-for="item in 3"
        :key="item"
        class="m-b-10 border-line"
        :span="24"
        @click="handleClick"
      >
        <nut-ellipsis
          content="NutUI3.0上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 NutUI 能够为更多的开发者带来便利，我们决定在 NutUI 中增加小程序多端适配的能力。"
          direction="end"
          rows="2"
        />
        <view class="">2025-04-28 00:00:00</view>
      </nut-col>
    </nut-row>
  </view>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'Home',
})
const handleClick = () => {
  uni.navigateTo({
    url: '/pages-sub/pages/info/detail/index',
  })
}
</script>
