<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="page">
{
  style: {
    navigationBarTitleText: 'demo',
  },
}
</route>

<template>
  <view>
    <view @click="checkMenuAuth">菜单权限： funcId</view>
  </view>
</template>

<script lang="ts" setup>
import { userApi } from '@/api'

const userHook = useUserInfo()

userHook.load().then(res => {
  console.log(res, '---')
})

const checkMenuAuth = () => {
  useUserInfo().checkMenuAuth(MenusFuncId.MENUS_DEMO)
}
userApi
  .getUserInfo()
  .then(res => {
    console.log(res)
  })
  .finally(() => {
    console.log('end')
  })
userApi.getUserFunction().then(res => {
  console.log(res)
})
</script>
