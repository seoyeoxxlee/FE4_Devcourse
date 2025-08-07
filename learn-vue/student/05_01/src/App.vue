<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router';

const router = useRoute()
</script>

  
<template>
  <nav style="display: flex; gap: 10px;">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink :to="{ name: 'about'}">About</RouterLink>
    <!-- <RouterLink :to="{ name: 'productDetail', parmas: {orderId: '10'}}">Detail 1</RouterLink> -->
    <RouterLink to="/detail/2">Detail 2</RouterLink>

    <RouterLink to="/product/1">Product 1</RouterLink>
    <RouterLink to="/product/2">Product 2</RouterLink>

    <button @click="router.push('/about')">클릭</button>
    <button @click="router.replace('/about')">클릭</button>
    <button @click="router.go('-1')">클릭</button>
  </nav>
  
  <h1>a</h1>
  <RouterView name="header"/>
  <h1>b</h1>
  <RouterView name="default"/>
  <h1>c</h1>
  <RouterView name="footer"/>

  <RouterView />
</template>
  
<style scoped>
  
</style>