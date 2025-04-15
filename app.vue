<template>
  <NuxtLayout>
    <header class="bg-white shadow-sm">
      <nav class="mx-auto px-4 container">
        <ul class="flex list-none gap-5 p-4">
          <li>
            <NuxtLink to="/" class="text-primary-600 hover:text-primary-800 transition-colors">
              首页
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/test" class="text-primary-600 hover:text-primary-800 transition-colors">
              测试
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/uno" class="text-primary-600 hover:text-primary-800 transition-colors">
              UnoCSS
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/prettier"
              class="text-primary-600 hover:text-primary-800 transition-colors"
            >
              Prettier
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <main class="mx-auto px-4 py-8 container">
      <NuxtPage :keepalive="{ include: ['TestList', 'TestForm', 'TestDetail'] }" />
    </main>
  </NuxtLayout>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
</style>
