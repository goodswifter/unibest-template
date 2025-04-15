export default defineEventHandler(event => {
  const id = parseInt(event?.context?.params?.id ?? '')

  const posts = [
    {
      id: 1,
      title: '如何使用Nuxt 3',
      content:
        'Nuxt 3是一个强大的Vue框架，它提供了许多内置功能，使得开发Vue应用变得更加简单和高效。本文将介绍Nuxt 3的核心特性，包括路由系统、数据获取、组件自动导入等。通过本文的学习，您将能够快速掌握Nuxt 3的基础知识。',
      author: '张三',
      createdAt: '2023-01-15',
      tags: ['Nuxt', 'Vue', '前端'],
    },
    {
      id: 2,
      title: 'Nuxt 3中的数据获取',
      content:
        '在Nuxt 3中，我们可以使用多种方式获取数据，包括useAsyncData、useFetch和$fetch等API。这些方法各有特点，适用于不同的场景。本文将详细介绍这些数据获取方法的使用场景和最佳实践，帮助您在Nuxt 3应用中高效地处理数据流。',
      author: '李四',
      createdAt: '2023-02-20',
      tags: ['Nuxt', '数据获取', 'API'],
    },
    {
      id: 3,
      title: 'Nuxt 3组件开发',
      content:
        'Nuxt 3提供了强大的组件系统，它支持自动导入组件，使得组件的使用变得非常简便。此外，Nuxt 3还提供了多种组件通信方式，包括props、emit、provide/inject等。本文将详细介绍Nuxt 3组件的开发流程和最佳实践，帮助您构建高效、可维护的组件库。',
      author: '王五',
      createdAt: '2023-03-25',
      tags: ['Nuxt', '组件', '前端架构'],
    },
  ]

  const post = posts.find(p => p.id === id)

  if (!post) {
    throw createError({
      statusCode: 404,
      message: `未找到ID为${id}的文章`,
    })
  }

  return post
})
