<template>
  <div class="border rounded bg-light-100 p-4">
    <h3 class="mb-2 text-lg font-bold">渲染环境检测</h3>
    <div>
      <p>
        <span class="font-medium">服务端渲染状态:</span>
        <client-only>
          {{ clientSsrStatus }}
          <template #fallback>{{ serverSsrStatus }}</template>
        </client-only>
      </p>
      <p>
        <span class="font-medium">当前环境:</span>
        <client-only>
          {{ clientEnvironment }}
          <template #fallback>{{ serverEnvironment }}</template>
        </client-only>
      </p>
      <p v-if="hydrated"><span class="font-medium">客户端水合完成</span></p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// 在服务端和客户端分别定义值
const serverSsrStatus = '开启'
const serverEnvironment = '服务器端'
const clientSsrStatus = '关闭'
const clientEnvironment = '客户端'

// 跟踪水合状态
const hydrated = ref(false)

// 只在客户端执行的代码
onMounted(() => {
  hydrated.value = true
  console.log('客户端渲染: 组件已挂载')
  console.log('当前环境: 客户端')
})

// 这段代码会在服务端和客户端都执行
console.log('当前执行环境:', import.meta.server ? '服务器端' : '客户端')
</script>
