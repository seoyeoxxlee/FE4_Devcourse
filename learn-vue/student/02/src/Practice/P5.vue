<script>
export default {
  name: 'Problem_5',
  data() {
    return {
      selectedOption: 'apple',
    };
  },
};
</script>

<template>
  <div>
    <select v-model="selectedOption">
      <option value="apple">apple</option>
      <option value="banana">banana</option>
      <option value="orange">orange</option>
    </select>
    <p>Selected Fruit: {{ selectedOption }}</p>
  </div>
</template>
<style scoped>
  
</style>