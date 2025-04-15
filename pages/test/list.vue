<template>
  <div class="p-4">
    <h2 mb-4 text-xl font-bold>列表页面</h2>
    <el-table :data="tableData" w-full>
      <el-table-column prop="date" label="日期" width="180" />
      <el-table-column prop="name" label="姓名" width="180" />
      <el-table-column prop="address" label="地址" />
    </el-table>
    <div mt-16>
      <el-button @click="addItem">添加项目</el-button>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'TestList',
})

const tableData = ref([
  {
    date: '2024-04-15',
    name: '张三',
    address: '北京市朝阳区',
  },
  {
    date: '2024-04-16',
    name: '李四',
    address: '上海市浦东新区',
  },
])

const addItem = () => {
  tableData.value.push({
    date: new Date().toISOString().split('T')[0],
    name: '新用户',
    address: '新地址',
  })
}
</script>
