<script setup>
import { useCountStore } from '@/stores/count'
// import { storeToRefs } from 'pinia'
const countStore = useCountStore()
// const { count } = storeToRefs(countStore)
const { decrement, reset, increment } = countStore
</script>
<template>
  <button @click="decrement">감소</button>
  <button @click="reset">0</button>
  <button @click="increment">증가</button>
</template>
<style scoped></style>