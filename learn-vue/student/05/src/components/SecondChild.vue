<script setup>
import { inject } from 'vue';


const count = inject('count')
const increment = inject('increment')
</script>
  
<template>
  <h1>SecondChild: {{ count }}</h1>
  <button @click="increment">증가ㅏ</button>
</template>
  
<style scoped>
  
</style>