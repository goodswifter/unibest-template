import type { Ref } from 'vue'

type Post = {
  id: number
  title: string
  content: string
  author: string
  createdAt: string
  tags?: string[]
}

type UsePostsReturn = {
  posts: Ref<Post[] | null>
  post: Ref<Post | null>
  pending: Ref<boolean>
  error: Ref<Error | null>
  fetchPosts: () => Promise<void>
  fetchPost: (id: number) => Promise<void>
  searchPosts: (query: string) => Promise<void>
}

export default function usePosts(): UsePostsReturn {
  const posts = ref<Post[] | null>(null)
  const post = ref<Post | null>(null)
  const pending = ref(false)
  const error = ref<Error | null>(null)

  const fetchPosts = async () => {
    pending.value = true
    error.value = null

    try {
      posts.value = await $fetch('/api/posts')
    } catch (err: any) {
      error.value = err
      console.error('获取文章列表失败:', err)
    } finally {
      pending.value = false
    }
  }

  const fetchPost = async (id: number) => {
    pending.value = true
    error.value = null
    post.value = null

    try {
      post.value = await $fetch(`/api/post/${id}`)
    } catch (err: any) {
      error.value = err
      console.error(`获取文章ID ${id} 失败:`, err)
    } finally {
      pending.value = false
    }
  }

  const searchPosts = async (query: string) => {
    pending.value = true
    error.value = null

    try {
      // 这里假设后端提供了搜索接口
      // 实际项目中可以创建一个真实的搜索API
      const allPosts = await $fetch<Post[]>('/api/posts')
      const q = query.toLowerCase()

      posts.value = allPosts.filter(
        post =>
          post.title.toLowerCase().includes(q) ||
          post.content.toLowerCase().includes(q) ||
          post.author.toLowerCase().includes(q) ||
          post.tags?.some(tag => tag.toLowerCase().includes(q))
      )
    } catch (err: any) {
      error.value = err
      console.error('搜索文章失败:', err)
    } finally {
      pending.value = false
    }
  }

  return {
    posts,
    post,
    pending,
    error,
    fetchPosts,
    fetchPost,
    searchPosts,
  }
}

export { usePosts }
