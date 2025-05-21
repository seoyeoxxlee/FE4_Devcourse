<script>
export default {
  name: 'Problem_2',
  data() {
    return {
      isChecked: false,
    };
  },
};
</script>

<template>
  <p>{{ isChecked ? '동의' : '비동의' }}</p>

  <label>
    <input type="checkbox" v-model="isChecked" /> 
    약관에 동의합니다
  </label>
</template>
<style scoped>
  
</style>
