<template>
  <div class="mx-auto p-4 container">
    <div class="mb-4">
      <NuxtLink to="/data-fetching" class="text-blue-500 hover:underline">← 返回文章列表</NuxtLink>
    </div>

    <div v-if="pending" class="p-8 text-center">
      <div class="animate-pulse">正在加载文章...</div>
    </div>
    <div v-else-if="error" class="border border-red-400 rounded bg-red-100 px-4 py-3 text-red-700">
      <p class="font-bold">加载错误</p>
      <p>{{ error.message }}</p>
    </div>
    <div v-else-if="post" class="rounded-lg bg-white p-6 shadow-md">
      <h1 class="mb-4 text-3xl font-bold">{{ post.title }}</h1>

      <div class="mb-6 flex items-center text-gray-600">
        <div>作者: {{ post.author }}</div>
        <div class="mx-2">|</div>
        <div>发布于: {{ post.createdAt }}</div>
      </div>

      <div class="mb-6">
        <div
          v-for="tag in post.tags"
          :key="tag"
          class="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700 font-semibold"
        >
          #{{ tag }}
        </div>
      </div>

      <p class="mb-8 text-gray-700 leading-relaxed">{{ post.content }}</p>

      <div class="border-t pt-4">
        <button
          class="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          @click="refreshData"
        >
          刷新文章
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const postId = parseInt(route.params.id)

// 使用useAsyncData获取数据
const {
  data: post,
  error,
  refresh: refreshData,
} = await useAsyncData(`post-${postId}`, () => $fetch(`/api/post/${postId}`), {
  // 这里可以设置选项
  server: true, // 在服务器端预渲染
  lazy: false, // 不懒加载
  immediate: true, // 立即执行
  watch: [], // 关注的响应式数据
  // 自定义错误处理
  onError(error) {
    console.error('文章加载失败:', error)
  },
})

// 设置页面元数据
useHead(() => {
  if (!post.value) return {}

  return {
    title: post.value.title,
    meta: [{ name: 'description', content: post.value.content.substring(0, 200) }],
  }
})
</script>
