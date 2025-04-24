<template>
  <div>
    <h2 class="mb-16 cursor-pointer text-2xl font-bold" bg-red>UnoCSS 演示1</h2>

    <div class="space-y-32">
      <!-- 颜色系统 -->
      <section>
        <h3 class="mb-8 text-xl font-semibold">颜色系统</h3>
        <div class="flex gap-8">
          <div
            v-for="i in 9"
            :key="i"
            class="h-10 w-10 flex items-center justify-center rounded text-white shadow"
            :class="`bg-primary-${i * 100} `"
          >
            {{ i * 100 }}
          </div>
        </div>
      </section>

      <!-- 按钮 -->
      <section>
        <h3 class="mb-8 text-xl font-semibold">按钮</h3>
        <div class="flex gap-16">
          <button class="btn">按钮</button>
          <button class="btn bg-red-500 hover:bg-red-600">红色按钮</button>
          <button class="btn bg-green-500 hover:bg-green-600">绿色按钮</button>
          <button class="btn" disabled>禁用按钮</button>
        </div>
      </section>

      <!-- 响应式设计 -->
      <section>
        <h3 class="mb-8 text-xl font-semibold">响应式设计</h3>
        <div
          class="w-full bg-gray-200 p-16 lg:bg-yellow-200 md:bg-green-200 sm:bg-blue-200 xl:bg-purple-200 lg:p-40 md:p-32 sm:p-24"
        >
          <p class="text-center">调整窗口大小查看颜色变化</p>
        </div>
      </section>

      <!-- 属性模式 -->
      <section>
        <h3 class="mb-8 text-xl font-semibold">属性模式</h3>
        <div
          bg="blue-500 hover:blue-700"
          text="white center"
          p="y-16 x-24"
          border="rounded"
          cursor="pointer"
          class="mx-auto max-w-xs"
        >
          使用属性模式添加样式
        </div>
      </section>

      <!-- 图标 -->
      <section>
        <h3 class="mb-8 text-xl font-semibold">图标</h3>
        <div class="flex gap-16 text-2xl">
          <div class="i-carbon-home"></div>
          <div class="i-carbon-user"></div>
          <div class="i-carbon-settings"></div>
          <div class="i-carbon-cloud"></div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.btn {
  --at-apply: bg-primary-500 'hover:bg-primary-600' text-white px-4 py-2 rounded;
}
</style>
