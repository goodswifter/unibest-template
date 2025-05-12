<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '上传-状态一体化',
  },
}
</route>

<template>
  <view class="p-16 text-center">
    <nut-button @click="run">选择图片并上传</nut-button>
    <view v-if="loading" class="h-40 text-blue">上传...</view>
    <template v-else>
      <view class="m-8">上传后返回的接口数据：</view>
      <view class="m-8">{{ data }}</view>
      <view class="h-320 w-full">
        <image v-if="data" :src="data || data" mode="scaleToFill" />
      </view>
    </template>
  </view>
</template>

<script lang="ts" setup>
const { loading, data, run } = useUpload({ user: '菲鸽' })
</script>

<style lang="scss" scoped>
//
</style>
