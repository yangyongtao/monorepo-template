import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

/** 旧方式，以直接打包文件引入的办法引入公共组件库 */
// 全局引入css
// import './script/commonUI/entry.css'
// import commonUI from "./script/commonUI/common-ui.mjs"

// 新的引入方式，但是这种方式存在缺点，这种方式内的vite.config.ts会失效，即自动引入失效
//  如果使用了eleUI,主程序也必须引入eleUI
import commonUI from 'components'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(ElementPlus)
// 全局引入通用UI组件库
app.use(commonUI)

app.mount('#app')
