<template>
  <div class="mx-auto p-4 container">
    <h1 class="mb-6 text-2xl font-bold">组合式函数数据获取演示</h1>

    <div class="mb-6">
      <div class="mb-4 flex">
        <button
          class="mr-3 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          @click="fetchPosts"
        >
          获取所有文章
        </button>

        <div class="flex flex-1">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="搜索文章..."
            class="flex-1 border rounded-l px-3 py-2"
          />
          <button
            class="rounded-r bg-green-500 px-4 py-2 text-white hover:bg-green-600"
            @click="search"
          >
            搜索
          </button>
        </div>
      </div>

      <div v-if="pending" class="text-gray-500">加载中...</div>
      <div v-else-if="error" class="text-red-500">加载失败: {{ error }}</div>
      <div
        v-else-if="posts && posts.length > 0"
        class="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2"
      >
        <div
          v-for="_post in posts"
          :key="_post.id"
          class="cursor-pointer border rounded-lg p-4 hover:bg-gray-50"
          @click="showPostDetail(_post.id)"
        >
          <h3 class="font-bold">{{ _post.title }}</h3>
          <p class="mt-2 text-gray-700">{{ _post.content.substring(0, 100) }}...</p>
          <div class="mt-2 text-sm text-gray-500">
            <span>作者: {{ _post.author }}</span>
            <span class="ml-2">发布于: {{ _post.createdAt }}</span>
          </div>
        </div>
      </div>
      <div v-else-if="posts && posts.length === 0" class="text-gray-500">没有找到相关文章</div>
      <div v-else class="text-gray-500">点击"获取所有文章"按钮加载文章列表</div>
    </div>

    <div v-if="post" class="mt-8 rounded-lg bg-white p-6 shadow-md">
      <h2 class="mb-4 text-2xl font-bold">文章详情</h2>
      <h3 class="mb-3 text-xl font-semibold">{{ post.title }}</h3>

      <div class="mb-4 flex items-center text-gray-600">
        <div>作者: {{ post.author }}</div>
        <div class="mx-2">|</div>
        <div>发布于: {{ post.createdAt }}</div>
      </div>

      <div class="mb-4">
        <div v-if="post.tags" class="flex flex-wrap">
          <div
            v-for="tag in post.tags"
            :key="tag"
            class="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700 font-semibold"
          >
            #{{ tag }}
          </div>
        </div>
      </div>

      <p class="text-gray-700 leading-relaxed">{{ post.content }}</p>
    </div>
  </div>
</template>

<script setup>
import { usePosts } from '~/composables/usePosts'

const { posts, post, pending, error, fetchPosts, fetchPost, searchPosts } = usePosts()

const searchQuery = ref('')

// 页面加载时自动获取文章列表
onMounted(() => {
  fetchPosts()
})

const showPostDetail = id => {
  fetchPost(id)
}

const search = () => {
  if (searchQuery.value.trim()) {
    searchPosts(searchQuery.value)
  } else {
    fetchPosts()
  }
}
</script>
