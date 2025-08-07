import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCountStore = defineStore('count', () => {
  const count = ref(10)
  const doubleCount = computed(() => count.value * 2)
  const increment = () => (count.value += 1)
  const decrement = () => (count.value -= 1)
  const reset = () => (count.value = 0)

  return {
    count,
    increment,
    decrement,
    reset,
    doubleCount,
  }
})