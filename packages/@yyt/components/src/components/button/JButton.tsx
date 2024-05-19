import { defineComponent } from 'vue'

export default defineComponent({
  name: 'JSXButton',
  render() {
    return (
      <>
        <button onClick={this.handleClick}>JSXButton</button>
      </>
    )
  },
  methods: {
    handleClick() {
      console.log('JSXButton')
    }
  }
})
