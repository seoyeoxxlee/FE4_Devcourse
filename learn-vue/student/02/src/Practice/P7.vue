<script>
export default {
  name: 'Problem_7',
  data() {
    return {
      gender: 'male',
    };
  },
};
</script>

<template>
  <div>
    <label>
      <input v-model="gender" type="radio" name="gender" value="male" />
      <input v-model="gender" type="radio" name="gender" value="female" />
    </label>
    <p>{{ gender }}</p>
  </div>
</template>
<style scoped>
  
</style>