<script>

import axios from 'axios';

export default {
  name: 'DataView',
  data() {
    return {
        posts: [],
        loading: true,
        error: null,
    };
  },
  async beforeRouteEnter(to, from, next) {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        next((vm) => {
            vm.posts = response.data
            vm.loading = false
        })
    } catch (e) {
        next((vm) => {
            vm.error = e
            vm.loading = false
        })
    }
  },
};
</script>
  
<template>
    <h1>DataFetch</h1>
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