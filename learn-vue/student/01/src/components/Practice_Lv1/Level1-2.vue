<script>
export default {
  name: 'Level1-2',
  data() {
    return {
      weather: 'sunny'
    };
  },
};
</script>

<template>
  <h1 v-if="weather === 'sunny'">It's sunny ☀️</h1>
  <h1 v-else-if="weather === 'rainy'">It's rainy ☔</h1>
  <h1 v-else>It's cloudy ⛅</h1>
</template>

<style scoped>
  
</style>