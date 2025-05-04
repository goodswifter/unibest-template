import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import prettier from 'eslint-plugin-prettier'
import importPlugin from 'eslint-plugin-import'
import unusedImports from 'eslint-plugin-unused-imports'
import { createRequire } from 'module'
import unocss from '@unocss/eslint-config/flat'
import eslintIgnore from './eslint.ignore.mjs'

const require = createRequire(import.meta.url)
const autoImportGlobals = require('./.eslintrc-auto-import.json')

export default [
  pluginJs.configs.recommended,
  // 原来的extends替换为如下模式
  ...tseslint.configs.recommended,
  // ...pluginVue.configs['flat/essential'], // Vue 基础规则
  // ...pluginVue.configs['flat/recommended'], // Vue 推荐规则
  ...pluginVue.configs['flat/strongly-recommended'], // Vue 强烈推荐规则
  unocss,
  // languageOptions：配置如何检查 js 代码
  {
    // 1.1 处理 与 JavaScript 相关的配置项
    files: ['src/**/*.{js,ts,vue}'],
    ignores: eslintIgnore,
    languageOptions: {
      // 1.11 定义可用的全局变量
      globals: {
        ...globals.node,
        ...globals.browser,
        ...autoImportGlobals.globals,
      },
      // 1.12 扩展
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },
  {
    ignores: eslintIgnore,
    plugins: { prettier, importPlugin, unusedImports },
    rules: {
      // ----------------------  prettier  ----------------------
      'prettier/prettier': 'warn',

      // eslint（https://eslint.org/docs/latest/rules）
      'no-var': 'error', // 要求使用 let 或 const 而不是 var
      'no-undef': 'off', // 允许使用未定义的变量
      'no-unused-vars': 'off',
      'no-multiple-empty-lines': ['warn', { max: 1 }], // 不允许多个空行
      'no-console': 'off',
      'no-debugger': 'error',
      'no-unexpected-multiline': 'error', // 禁止空余的多行
      'no-useless-escape': 'off', // 禁止不必要的转义字符,
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'function', next: 'function' }, // 在函数和函数之间添加空行
        { blankLine: 'always', prev: 'function', next: 'expression' }, // 在函数和表达式之间添加空行
        { blankLine: 'always', prev: 'expression', next: 'function' }, // 在表达式和函数之间添加空行
        { blankLine: 'always', prev: 'block-like', next: 'block-like' }, // 在块级语句之间添加空行
      ],

      // typeScript (https://typescript-eslint.io/rules)
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_', // 忽略 _ 开头的参数
          caughtErrors: 'all', // 忽略所有错误
          caughtErrorsIgnorePattern: '^_', // 忽略 _ 开头的错误
          varsIgnorePattern: '^_', // 忽略 _ 开头的变量
          ignoreRestSiblings: true, // 忽略剩余参数
        },
      ], // 禁止定义未使用的变量
      '@typescript-eslint/prefer-ts-expect-error': 'error', // 禁止使用 @ts-ignore
      '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-namespace': 'off', // 禁止使用自定义 TypeScript 模块和命名空间。
      '@typescript-eslint/semi': 'off',
      // 允许 isShowToast && ElMessage.success('删除成功') 这种写法
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',

      // eslint-plugin-vue (https://eslint.vuejs.org/rules/)
      'vue/multi-word-component-names': 'off', // 要求组件名称始终为 "-" 链接的单词
      'vue/no-mutating-props': 'off', // 不允许组件 prop的改变
      'vue/attribute-hyphenation': 'error', // 对模板中的自定义组件强制执行属性命名样式
      'vue/attributes-order': 'error', // 强制属性顺序
      'vue/padding-line-between-blocks': 'error', // 强制块之间的间距
      'vue/no-empty-component-block': 'error', // 禁止空的组件块报错
      // ✅ 强制 template > script > style
      'vue/block-order': ['error', { order: ['template', 'script', 'style'] }],
      // ✅ 强制单行属性
      'vue/max-attributes-per-line': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/html-indent': 'off',
      'vue/one-component-per-file': 'off',
      'vue/component-definition-name-casing': 'off',

      // unocss (https://unocss.dev/config/rules)
      // 'unocss/order-attributify': 'error', // 强制unocss属性顺序

      // 其他配置
      'importPlugin/newline-after-import': 'error', // 在 import 语句后需要换行
      // 强制单标签格式
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always', // 对于 void 元素使用单标签格式
            normal: 'never', // 非 void 元素不允许使用单标签格式
            component: 'always', // 自定义组件总是使用单标签格式
          },
          svg: 'always', // 对于 SVG 元素使用单标签格式
          math: 'always', // 对于 MathML 元素使用单标签格式
        },
      ],
      'unusedImports/no-unused-imports': 'warn', // 自动移除import中未使用的变量和参数
    },
  },
]
