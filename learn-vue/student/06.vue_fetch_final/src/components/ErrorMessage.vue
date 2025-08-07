<script setup>

defineProps({
    message: String,
    retry: Function,
})
</script>
  
<template>
    <div>
        <h1>Error</h1>
        <h2>{{ message }}</h2>
        <button @click="retry">retry</button>
    </div>
</template>
  
<style scoped>
  
</style>