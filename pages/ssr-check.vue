<template>
  <div>
    <h1 class="mb-6 text-2xl font-bold">SSR 检测页面</h1>

    <div class="mb-6">
      <p class="mb-2">此页面用于检测和演示服务端渲染</p>
      <p class="mb-2">打开浏览器开发者工具控制台，可以看到服务端和客户端的日志</p>
      <p class="mb-2">查看页面源代码，如果内容已经渲染，说明SSR生效</p>
    </div>

    <RenderChecker />

    <div class="mt-6">
      <h2 class="mb-2 text-xl font-bold">其他检测方法</h2>
      <div class="border rounded bg-light-100 p-4">
        <p>
          <strong>useNuxtApp</strong>
          判断:
        </p>
        <client-only>
          <pre class="mt-2 bg-gray-100 p-2">{{ nuxtAppInfo }}</pre>
          <template #fallback>
            <pre class="mt-2 bg-gray-100 p-2">{ "服务端渲染中..." }</pre>
          </template>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'

const nuxtApp = useNuxtApp()
const nuxtAppInfo = computed(() => {
  // 仅在客户端环境中获取数据
  if (import.meta.client) {
    return {
      isHydrating: nuxtApp.isHydrating,
      payload: nuxtApp.payload,
    }
  }
  return {}
})

// 在服务端渲染时执行
if (import.meta.server) {
  console.log('【服务端】: 页面在服务端渲染中')
}

// 在客户端执行
onMounted(() => {
  console.log('【客户端】: 页面已在客户端挂载')

  // 检查查看页面源代码
  console.log('提示: 右键查看页面源代码，如果内容已经渲染，说明SSR生效')
})
</script>
