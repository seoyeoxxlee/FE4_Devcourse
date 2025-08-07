<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';


const posts = ref([])
const error = ref(null)
const loading = ref(true)

onMounted(async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    posts.value = response.data
  } catch (e) {
    error.value = e
  } finally {
    loading.value = false
  }
})

</script>
  
<template>
  <h1>AboutView</h1>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">{{ error }}</div>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <strong>{{ post.title }}</strong>
      <p>{{ post.body }}</p>
    </li>
  </ul>
</template>
  
<style scoped>
  
</style>