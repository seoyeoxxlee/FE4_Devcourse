<script>
export default {
  name: 'Problem_3',
  data() {
    return {
      age: 25,
    };
  },
};
</script>

<template>
  <div>
    <input type="range" v-model="age" min="1" max="100" />
    <p>{{ age }}</p>
  </div>
</template>
<style scoped>
  
</style>