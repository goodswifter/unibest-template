<template>
  <div class="mx-auto p-4 container">
    <h1 class="mb-6 text-2xl font-bold">Nuxt 3 数据获取演示</h1>

    <div class="mb-8">
      <h2 class="mb-4 text-xl font-semibold">使用 useAsyncData</h2>
      <div v-if="pending" class="text-gray-500">加载中...</div>
      <div v-else-if="error" class="text-red-500">加载失败: {{ error }}</div>
      <div v-else class="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
        <div v-for="post in posts" :key="post.id" class="border rounded-lg p-4">
          <h3 class="font-bold">{{ post.title }}</h3>
          <p class="mt-2 text-gray-700">{{ post.content }}</p>
          <div class="mt-2 text-sm text-gray-500">
            <span>作者: {{ post.author }}</span>
            <span class="ml-2">发布于: {{ post.createdAt }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-8">
      <h2 class="mb-4 text-xl font-semibold">使用 useFetch</h2>
      <div v-if="fetchPending" class="text-gray-500">加载中...</div>
      <div v-else-if="fetchError" class="text-red-500">加载失败: {{ fetchError }}</div>
      <div v-else class="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
        <div v-for="post in fetchData" :key="post.id" class="border rounded-lg p-4">
          <h3 class="font-bold">{{ post.title }}</h3>
          <p class="mt-2 text-gray-700">{{ post.content }}</p>
          <div class="mt-2 text-sm text-gray-500">
            <span>作者: {{ post.author }}</span>
            <span class="ml-2">发布于: {{ post.createdAt }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-8">
      <h2 class="mb-4 text-xl font-semibold">手动刷新数据</h2>
      <button class="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" @click="refresh">
        刷新数据
      </button>
      <button
        class="ml-4 rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
        @click="refreshFetch"
      >
        刷新 useFetch 数据
      </button>
    </div>

    <div class="mb-8">
      <h2 class="mb-4 text-xl font-semibold">懒加载数据</h2>
      <button
        class="rounded bg-purple-500 px-4 py-2 text-white hover:bg-purple-600"
        @click="loadLazyData"
      >
        {{ lazyDataLoaded ? '重新加载' : '加载数据' }}
      </button>

      <div v-if="lazyPending" class="mt-4 text-gray-500">加载中...</div>
      <div v-else-if="lazyError" class="mt-4 text-red-500">加载失败: {{ lazyError }}</div>
      <div
        v-else-if="lazyDataLoaded"
        class="grid grid-cols-1 mt-4 gap-4 lg:grid-cols-3 md:grid-cols-2"
      >
        <div v-for="post in lazyData" :key="post.id" class="border rounded-lg p-4">
          <h3 class="font-bold">{{ post.title }}</h3>
          <p class="mt-2 text-gray-700">{{ post.content }}</p>
          <div class="mt-2 text-sm text-gray-500">
            <span>作者: {{ post.author }}</span>
            <span class="ml-2">发布于: {{ post.createdAt }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 方法1：使用 useAsyncData
const { data: posts, pending, error, refresh } = useAsyncData('posts', () => $fetch('/api/posts'))

// 方法2：使用 useFetch
const {
  data: fetchData,
  pending: fetchPending,
  error: fetchError,
  refresh: refreshFetch,
} = useFetch('/api/posts')

// 方法3：懒加载数据
const lazyData = ref(null)
const lazyPending = ref(false)
const lazyError = ref(null)
const lazyDataLoaded = ref(false)

const loadLazyData = async () => {
  lazyPending.value = true
  lazyError.value = null

  try {
    lazyData.value = await $fetch('/api/posts')
    lazyDataLoaded.value = true
  } catch (err) {
    lazyError.value = err.message
  } finally {
    lazyPending.value = false
  }
}
</script>
