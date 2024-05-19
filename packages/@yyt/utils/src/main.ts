import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { fooA } from '@/utils'

// 测试使用
fooA()

createApp(App).mount('#app')
