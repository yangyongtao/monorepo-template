import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'GButton',
  render() {
    return h('button', { onClick: this.handleClick }, 'TButton')
  },
  methods: {
    handleClick() {
      console.log('TButton')
    }
  }
})
