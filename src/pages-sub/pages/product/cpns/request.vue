<route lang="json5">
{
  layout: 'demo',
  style: {
    navigationBarTitleText: '请求',
  },
}
</route>

<template>
  <view class="p-24 text-center">
    <view class="my-8">使用的是 laf 云后台</view>
    <view class="text-green-400">我的推荐码，可以获得佣金</view>

    <!-- #ifdef H5 -->
    <view class="my-8">
      <a class="my-8" :href="recommendUrl" target="_blank">{{ recommendUrl }}</a>
    </view>
    <!-- #endif -->

    <!-- #ifndef H5 -->
    <view class="my-8 text-left text-sm">{{ recommendUrl }}</view>
    <!-- #endif -->

    <!-- http://localhost:9000/#/pages/index/request -->
    <nut-button class="my-24" @click="run">发送请求</nut-button>
    <view class="h-64">
      <view v-if="loading">loading...</view>
      <block v-else>
        <view class="mt-10 text-xl">请求数据如下</view>
        <view class="text-green leading-32">{{ JSON.stringify(data) }}</view>
      </block>
    </view>
    <nut-button class="my-24" :disabled="!data" @click="reset">重置数据</nut-button>
  </view>
</template>

<script lang="ts" setup>
import { commonApi, PriceTypeModel } from '@/api'

const recommendUrl = ref('http://laf.run/signup?code=ohaOgIX')

// const initialData = {
//   name: 'initialData',
//   id: '1234',
// }
const initialData = undefined
// 适合少部分全局性的接口————多个页面都需要的请求接口，额外编写一个 Service 层
const { loading, error, data, run } = useRequest<PriceTypeModel[]>(commonApi.getPriceTypes, {
  immediate: true,
  initialData,
})

// 使用 vue-query 的 useQuery 来请求数据，只做参考，是否使用请根据实际情况而定
// const {
//   data: data2,
//   error: error2,
//   isLoading: isLoading2,
//   refetch,
// } = useQuery(findPetsByStatusQueryOptions({ params: { status: ['available'] } }))

const reset = () => {
  data.value = initialData
}
</script>
