import Uni from '@dcloudio/vite-plugin-uni'
import dayjs from 'dayjs'
// @see https://uni-helper.js.org/vite-plugin-uni-pages
import UniPages from '@uni-helper/vite-plugin-uni-pages'
// @see https://uni-helper.js.org/vite-plugin-uni-layouts
import UniLayouts from '@uni-helper/vite-plugin-uni-layouts'
// @see https://github.com/uni-helper/vite-plugin-uni-platform
// 需要与 @uni-helper/vite-plugin-uni-pages 插件一起使用
import UniPlatform from '@uni-helper/vite-plugin-uni-platform'
// @see https://github.com/uni-helper/vite-plugin-uni-manifest
import UniManifest from '@uni-helper/vite-plugin-uni-manifest'
// @see https://unocss.dev/
import { visualizer } from 'rollup-plugin-visualizer'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import ViteRestart from 'vite-plugin-restart'
import { copyNativeRes } from './copy-native-res'
import { type PluginOption } from 'vite'

type GetPluginsListProps = {
  mode: string
  UNI_PLATFORM: string
}

export const getPluginsList = ({ mode, UNI_PLATFORM }: GetPluginsListProps): PluginOption[] => {
  return [
    UniPages({
      exclude: ['**/components/**/**.*'],
      routeBlockLang: 'json5', // 虽然设了默认值，但是vue文件还是要加上 lang="json5", 这样才能很好地格式化
      // homePage 通过 vue 文件的 route-block 的type="home"来设定
      // pages 目录为 src/pages，分包目录不能配置在pages目录下
      subPackages: ['src/pages-sub', 'src/pages-shared'], // 是个数组，可以配置多个，但是不能为pages里面的目录
      dts: 'typings/uni-pages.d.ts',
    }),
    UniLayouts(),
    UniPlatform(),
    UniManifest(),
    // UniXXX 需要在 Uni 之前引入
    Uni(),
    {
      // 临时解决 dcloudio 官方的 @dcloudio/uni-mp-compiler 出现的编译 BUG
      // 参考 github issue: https://github.com/dcloudio/uni-app/issues/4952
      // 自定义插件禁用 vite:vue 插件的 devToolsEnabled，强制编译 vue 模板时 inline 为 true
      name: 'fix-vite-plugin-vue',
      configResolved(config) {
        const plugin = config.plugins.find(p => p.name === 'vite:vue')
        if (plugin && plugin.api && plugin.api.options) {
          plugin.api.options.devToolsEnabled = false
        }
      },
    } as any,
    UnoCSS(),
    AutoImport({
      imports: ['vue', 'uni-app', 'pinia', { 'nutui-uniapp/composables': ['useToast'] }],
      dts: 'typings/auto-import.d.ts',
      dirs: ['src/hooks', 'src/enum', 'src/pages-sub/enum'], // 自动导入 hooks
      eslintrc: { enabled: true },
      vueTemplate: true, // default false
    }),

    ViteRestart({
      // 通过这个插件，在修改vite.config.js文件则不需要重新运行也生效配置
      restart: ['vite.config.js'],
    }),
    // h5环境增加 BUILD_TIME 和 BUILD_BRANCH
    UNI_PLATFORM === 'h5' && {
      name: 'html-transform',
      transformIndexHtml(html) {
        return html.replace('%BUILD_TIME%', dayjs().format('YYYY-MM-DD HH:mm:ss'))
      },
    },
    // 打包分析插件，h5 + 生产环境才弹出
    UNI_PLATFORM === 'h5' &&
      mode === 'production' &&
      visualizer({
        filename: './node_modules/.cache/visualizer/stats.html',
        open: true,
        gzipSize: true,
        brotliSize: true,
      }),
    // 只有在 app 平台时才启用 copyNativeRes 插件
    UNI_PLATFORM === 'app' && copyNativeRes(),
  ]
}
