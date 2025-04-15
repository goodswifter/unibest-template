<template>
  <div class="py-8">
    <h1 class="mb-8 text-center text-3xl font-bold">UnoCSS 功能展示</h1>
    <el-input v-model="input" placeholder="请输入内容" />
    <UnoDemo />
  </div>
</template>

<script setup lang="ts">
definePageMeta({ keepalive: false })

const input = ref('')
</script>
