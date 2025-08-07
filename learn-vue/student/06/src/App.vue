<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <nav style="position: fixed; top: 0;">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>

  <RouterView />
</template>

<style scoped>
</style>
