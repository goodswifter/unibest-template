<template>
  <div class="p-4">
    <h1 class="mb-24 text-2xl font-bold">测试页面导航</h1>
    <el-row :gutter="20">
      <el-col v-for="(item, index) in menuItems" :key="index" :span="8">
        <el-card mb-16>
          <template #header>
            <div class="card-header">
              <span>{{ item.title }}</span>
            </div>
          </template>
          <div>
            <el-button type="primary" @click="() => goToPage(item.path)">
              进入{{ item.title }}
            </el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
const menuItems = [
  { title: '列表页面', path: '/test/list' },
  { title: '表单页面', path: '/test/form' },
  { title: '详情页面', path: '/test/detail' },
]

const goToPage = path => {
  navigateTo(path)
}
</script>
