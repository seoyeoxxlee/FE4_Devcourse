<script setup>
import { useCountStore } from '@/stores/count'

const countStore = useCountStore()
</script>
<template>
  <h1>Count: {{ countStore.count }}</h1>
</template>
<style scoped></style>