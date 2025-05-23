<script>
export default {
  name: 'OptionCount',
  data() {
    return {
        count: 0,
    };
  },
  computed: {
    doubleCount() {
        return this.count * 2
    },
  },
  methods: {
    decrement() {
        this.count -= 1
    },
    reset() {
        this.count = 0
    },
    increment() {
        this.count += 1
    },
  }
};
</script>
  
<template>
  <h1>Option Count: {{ count }}</h1>
  <button @click="decrement">-</button>
  <button @click="reset">0</button>
  <button @click="increment">+</button>
</template>
  
<style scoped>
</style>