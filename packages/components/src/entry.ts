import type { App } from 'vue'
import elbutton from './components/button/ELButton.vue'
import gbutton from './components/button/GButton.vue'
import tbutton from './components/button/TButton'
import jbutton from './components/button/JButton.tsx'

// 导出单独组件
export { elbutton, gbutton, tbutton, jbutton }

// 实现 install 方法
export default {
  install(app: App): void {
    app.component('eleButton', elbutton)
    app.component('gButton', gbutton)
    app.component(tbutton.name as string, tbutton)
    app.component(jbutton.name as string, jbutton)
  }
}
