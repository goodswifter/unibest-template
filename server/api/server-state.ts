export default defineEventHandler(() => {
  return {
    time: new Date().toLocaleString('zh-CN'),
    randomNumber: Math.floor(Math.random() * 1000),
    message: '这是服务器生成的状态数据',
  }
})
