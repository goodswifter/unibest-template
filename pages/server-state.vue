<template>
  <div class="mx-auto p-4 container">
    <h1 class="mb-6 text-2xl font-bold">服务器状态演示</h1>

    <div class="mb-6 border rounded-lg p-4">
      <h2 class="mb-3 text-xl font-semibold">
        服务器状态 (refreshInterval: {{ refreshInterval }}ms)
      </h2>

      <div v-if="pending" class="text-gray-500">加载中...</div>
      <div v-else-if="error" class="text-red-500">加载失败: {{ error }}</div>
      <div v-else class="rounded bg-gray-100 p-4">
        <p>
          <strong>时间:</strong>
          {{ serverState.time }}
        </p>
        <p>
          <strong>随机数:</strong>
          {{ serverState.randomNumber }}
        </p>
        <p>
          <strong>消息:</strong>
          {{ serverState.message }}
        </p>
        <p>
          <strong>上次刷新时间:</strong>
          {{ new Date().toLocaleTimeString('zh-CN') }}
        </p>
      </div>

      <div class="mt-4 flex items-center gap-4">
        <button class="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" @click="refresh">
          手动刷新
        </button>

        <div class="flex items-center gap-2">
          <span>自动刷新:</span>
          <label class="relative inline-flex cursor-pointer items-center">
            <input v-model="autoRefresh" type="checkbox" class="peer sr-only" />
            <div
              class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:border after:border-gray-300 after:rounded-full after:bg-white peer-checked:bg-blue-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"
            ></div>
          </label>
        </div>
      </div>

      <div v-if="autoRefresh" class="mt-4">
        <label class="block text-sm text-gray-700 font-medium">刷新间隔 (ms)</label>
        <input
          v-model="refreshInterval"
          type="range"
          min="1000"
          max="10000"
          step="1000"
          class="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
        />
        <div class="flex justify-between text-xs text-gray-500">
          <span>1秒</span>
          <span>5秒</span>
          <span>10秒</span>
        </div>
      </div>
    </div>

    <div class="mb-6 border rounded-lg p-4">
      <h2 class="mb-3 text-xl font-semibold">客户端状态</h2>

      <div class="mb-4 flex gap-4">
        <button
          class="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
          @click="incrementCounter"
        >
          计数器 +1
        </button>
        <button
          class="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          @click="resetCounter"
        >
          重置计数器
        </button>
      </div>

      <div class="rounded bg-gray-100 p-4">
        <p>
          <strong>计数器:</strong>
          {{ counter }}
        </p>
        <p>
          <strong>最后一次服务器随机数:</strong>
          {{ lastRandomNumber }}
        </p>
        <p>
          <strong>服务器数据更新次数:</strong>
          {{ updateCount }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// 客户端状态
const counter = ref(0)
const lastRandomNumber = ref(null)
const updateCount = ref(0)
const autoRefresh = ref(false)
const refreshInterval = ref(3000)

// 使用useFetch获取服务器状态
const {
  data: serverState,
  pending,
  error,
  refresh,
} = useFetch('/api/server-state', {
  immediate: true,
  watch: false, // 不自动监视响应式依赖
})

// 当服务器状态更新时更新客户端状态
watch(serverState, newState => {
  if (newState) {
    lastRandomNumber.value = newState.randomNumber
    updateCount.value++
  }
})

// 自动刷新逻辑
let autoRefreshTimer = null

const startAutoRefresh = () => {
  stopAutoRefresh()
  autoRefreshTimer = setInterval(() => {
    refresh()
  }, refreshInterval.value)
}

const stopAutoRefresh = () => {
  if (autoRefreshTimer) {
    clearInterval(autoRefreshTimer)
    autoRefreshTimer = null
  }
}

watch(autoRefresh, newValue => {
  if (newValue) {
    startAutoRefresh()
  } else {
    stopAutoRefresh()
  }
})

watch(refreshInterval, () => {
  if (autoRefresh.value) {
    startAutoRefresh()
  }
})

// 确保在组件卸载时清理定时器
onUnmounted(() => {
  stopAutoRefresh()
})

// 客户端状态管理方法
const incrementCounter = () => {
  counter.value++
}

const resetCounter = () => {
  counter.value = 0
}
</script>
