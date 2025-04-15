<template>
  <div class="prettier-demo">
    <h2 class="title">Prettier 格式化演示</h2>
    <div v-for="item in items" :key="item.id" class="item">
      <div class="item-header">{{ item.title }}</div>
      <p class="item-content">{{ item.content }}</p>
      <div class="item-footer">
        <button class="btn" @click="handleClick(item)">点击我</button>
        <span v-if="item.selected" class="selected">已选择</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  { id: 1, title: '第一项', content: '这是第一项的内容', selected: false },
  { id: 2, title: '第二项', content: '这是第二项的内容', selected: false },
  { id: 3, title: '第三项', content: '这是第三项的内容', selected: false },
])

const handleClick = (item: any) => {
  item.selected = !item.selected
}
</script>

<style scoped>
.prettier-demo {
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
}

.title {
  font-size: 24px;
  margin-bottom: 16px;
  color: #333;
}

.item {
  margin-bottom: 16px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.item-header {
  font-weight: bold;
  margin-bottom: 8px;
}

.item-content {
  margin-bottom: 12px;
  color: #666;
}

.item-footer {
  display: flex;
  align-items: center;
  gap: 12px;
}

.btn {
  padding: 6px 12px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.selected {
  color: #4caf50;
  font-weight: bold;
}
</style>
