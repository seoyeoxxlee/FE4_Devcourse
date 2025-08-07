<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
</script>
  
<template>
  <h1>DetailView: {{ route.params.id }}</h1>
</template>
  
<style scoped>
  
</style>