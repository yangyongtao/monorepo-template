import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 全局引入css
import './script/commonUI/entry.css'
import commonUI from "./script/commonUI/common-ui.mjs"

const app = createApp(App)

app.use(createPinia())
app.use(router)


// 全局引入通用UI组件库
app.use(commonUI)

app.mount('#app')
