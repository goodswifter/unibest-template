<template>
  <div class="border rounded bg-light-100 p-4">
    <h3 class="mb-2 text-lg font-bold">渲染环境检测</h3>
    <div>
      <p>
        <span class="font-medium">服务端渲染状态:</span>
        {{ ssrStatus }}
      </p>
      <p>
        <span class="font-medium">当前环境:</span>
        {{ environment }}
      </p>
      <p v-if="hydrated"><span class="font-medium">客户端水合完成</span></p>
    </div>
  </div>
</template>

<script setup>
const ssrStatus = import.meta.server ? '开启' : '关闭'
const environment = import.meta.server ? '服务器端' : '客户端'

// 跟踪水合状态
const hydrated = ref(false)

// 只在客户端执行的代码
onMounted(() => {
  hydrated.value = true
  console.log('客户端渲染: 组件已挂载')
  console.log('当前环境:', import.meta.server ? '服务器端' : '客户端')
})

// 这段代码会在服务端和客户端都执行
console.log('当前执行环境:', import.meta.server ? '服务器端' : '客户端')
</script>
