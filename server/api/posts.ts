export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: '如何使用Nuxt 3',
      content: 'Nuxt 3是一个强大的Vue框架...',
      author: '张三',
      createdAt: '2023-01-15',
    },
    {
      id: 2,
      title: 'Nuxt 3中的数据获取',
      content: '在Nuxt 3中，我们可以使用多种方式获取数据...',
      author: '李四',
      createdAt: '2023-02-20',
    },
    {
      id: 3,
      title: 'Nuxt 3组件开发',
      content: 'Nuxt 3提供了强大的组件系统...',
      author: '王五',
      createdAt: '2023-03-25',
    },
  ]
})
