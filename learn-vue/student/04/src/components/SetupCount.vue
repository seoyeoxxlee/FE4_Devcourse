<script>
import { computed, ref } from 'vue';

export default {
  name: 'SetupCount',
  setup() {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    const decrement = () => (count.value -= 1)
    const reset = () => (count.value -= 0)
    const increment = () => (count.value += 1)
    return {
        count, 
        doubleCount,
        decrement,
        reset,
        increment,
    }
  }
};
</script>
  
<template>
    <h1>Setup Count: {{ count }}</h1>
    <button @click="decrement">-</button>
    <button @click="reset">0</button>
    <button @click="increment">+</button>
</template>
  
<style scoped>
</style>