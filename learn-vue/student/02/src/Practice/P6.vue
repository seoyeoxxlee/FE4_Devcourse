<script>
export default {
  name: 'Problem_6',
  data() {
    return {
      selectedItems: [],
    };
  },
};
</script>

<template>
  <div>
    <label> <input type="checkbox" v-model="selectedItems" value="apple" /> apple </label>
    <label> <input type="checkbox" v-model="selectedItems" value="banana" /> banana </label>
    <label> <input type="checkbox" v-model="selectedItems" value="orange" /> orange </label>
    <p>{{ selectedItems.join(', ') }}</p>
  </div>
</template>
<style scoped>
  
</style>