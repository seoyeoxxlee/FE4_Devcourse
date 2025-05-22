<script>
import CountGroup from './components/CountGroup.vue'

export default {
  name: 'App',
  components: {
    CountGroup,
  },
  data() {
    return {
      count: 0,
    }
  },
  provide() {
    return {
      count: () => this.count,
      increment: this.increment,
      reset: this.reset,
      decrement: this.decrement,
      incrementByAmount: this.incrementByAmount,
    }
  },
  methods: {
    decrement() {
      this.count -= 1
    },
    reset() {
      this.count = 0
    },
    increment() {
      console.log('increment')
      this.count += 1
    },
    incrementByAmount(amonut) {
      this.count += amonut
    },
  },
}
</script>
<template>
  <CountGroup />
</template>
<style scoped></style>