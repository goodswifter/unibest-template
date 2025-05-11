┌─pages 主包-壳子-主要作为一个映射，不写业务逻辑，所有业务都写在子包里，减轻主包体积
│ ├─home
│ │ └─index.vue 首页
│ ├─product 商品
│ │ └─index.vue 商品
│ ├─shop-cart 购物车
│ │ └─index.vue 商品
│ ├─info
│ │ └─index.vue 资讯
│ ├─mine
│ │ └─index.vue 我的
├─pages-main-sub 主包-子包
│ ├─api
│ ├─types
│ ├─home.ts
│ ├─home.ts
│ ├─pages
│ ├─home
│ │ └─index.vue 首页
│ ├─product 商品
│ │ └─index.vue 商品
│ ├─shop-cart 购物车
│ │ └─index.vue 商品
│ ├─info
│ │ └─index.vue 资讯
│ ├─mine
│ │ └─index.vue 我的
├─pages-components 组件-子包， preload 预家在子包内容
├─pages-\*\*\* 其他子包，子包名以pages-开头，方便统一管理，需要preload
├─layouts 布局-子包，所有页面都适用layouy布局
│ ├─default.vue 默认布局, 底层统一封装 toast等工具，为了解决页面间切换时，toast不消失的问题，小程序toast单行
│ │ 显示问题，需要单独处理
├─static 存放应用引用的本地静态资源（如图片、视频等）的目录，注意：静态资源都应存放于此目录，理论上都走cdn
├─uni_modules 存放uni_module 详见
├─platforms 存放各平台专用页面的目录，详见
├─nativeplugins App原生语言插件 详见
├─nativeResources App端原生资源目录
│ ├─android Android原生资源目录 详见
| └─ios iOS原生资源目录 详见
├─hybrid App端存放本地html文件的目录，详见
└─uni.scss 内置的常用样式变量
