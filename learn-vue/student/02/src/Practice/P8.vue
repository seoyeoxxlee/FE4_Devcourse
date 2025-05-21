<script>
export default {
  name: 'Problem_8',
  data() {
    return {
      selectedColor: '#ffffff',
    };
  },
};
</script>
<template>
  <div>
    <input type="color" v-model="selectedColor" />
    <div
      :style="{
        width: '100px',
        height: '100px',
        border: '1px solid black',
        backgroundColor: selectedColor,
      }"
    ></div>
    <p>{{ selectedColor }}</p>
  </div>
</template>
<style scoped>
  
</style>