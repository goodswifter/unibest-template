#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// 获取当前文件的目录
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 查找 Element Plus 库中的 strings.mjs 文件
function findStringsFile() {
  const basePath = path.resolve(__dirname, '../node_modules')
  const possiblePaths = [
    path.join(basePath, 'element-plus/es/utils/strings.mjs'),
    path.join(basePath, '.pnpm/element-plus@*/node_modules/element-plus/es/utils/strings.mjs'),
  ]

  for (const pattern of possiblePaths) {
    if (pattern.includes('*')) {
      // 处理 pnpm 路径模式
      const pnpmDir = path.join(basePath, '.pnpm')
      if (fs.existsSync(pnpmDir)) {
        const dirs = fs.readdirSync(pnpmDir)
        for (const dir of dirs) {
          if (dir.startsWith('element-plus@')) {
            const filePath = path.join(
              pnpmDir,
              dir,
              'node_modules/element-plus/es/utils/strings.mjs'
            )
            if (fs.existsSync(filePath)) {
              return filePath
            }
          }
        }
      }
    } else if (fs.existsSync(pattern)) {
      return pattern
    }
  }

  return null
}

// 修复文件
function fixFile() {
  const filePath = findStringsFile()

  if (!filePath) {
    console.log('未找到 Element Plus 的 strings.mjs 文件')
    return
  }

  console.log(`找到文件：${filePath}`)

  // 读取原始文件内容
  const content = fs.readFileSync(filePath, 'utf8')

  // 检查是否在打包时出现问题
  if (content.match(/const\s+hyphenate\s*=.*?\s*const\s+hyphenate\s*=/s)) {
    // 修复重复声明
    const fixed = content.replace(
      /(const\s+hyphenate\s*=.*?;)(?:\s*const\s+hyphenate\s*=.*?;)/s,
      '$1'
    )

    // 写回文件
    fs.writeFileSync(filePath, fixed, 'utf8')
    console.log('成功修复了 Element Plus 中的重复声明问题')
  } else if (content.includes('export { camelize, hyphenate, hyphenate as kebabCase }')) {
    // 这种导出方式可能在编译时导致问题，尝试修改导出方式
    try {
      // 复制我们准备好的修复版本
      const fixedContent = fs.readFileSync(
        path.resolve(__dirname, '../public/element-plus-fix/strings.mjs'),
        'utf8'
      )
      fs.writeFileSync(filePath, fixedContent, 'utf8')
      console.log('已替换为修复版本的 strings.mjs 文件')
    } catch (err) {
      console.log('尝试替换文件失败:', err)
    }
  } else {
    console.log('未找到预期的重复声明模式，尝试使用补丁方法修复')
    // 尝试使用 patch-package
    try {
      // 复制我们准备好的修复版本
      const fixedContent = fs.readFileSync(
        path.resolve(__dirname, '../public/element-plus-fix/strings.mjs'),
        'utf8'
      )
      fs.writeFileSync(filePath, fixedContent, 'utf8')
      console.log('已替换为修复版本的 strings.mjs 文件')
    } catch (err) {
      console.log('替换失败，原始内容:', content)
    }
  }
}

// 执行修复
fixFile()
