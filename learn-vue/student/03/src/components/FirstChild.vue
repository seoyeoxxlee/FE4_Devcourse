<script>
export default {
  name: 'FirstChild',
  data() {
    return {};
  },
  props: {
    name:  {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
      default() {
        return 10;
      },
      validator(value) {
        return value > 50;
      }
    },
    email: {
      type: String, 
      validator(value) {
        return value.includes('@') // @ trus !@ false
      },
    },
  },
};
</script>
  
<template>
  <h1>FirstChild</h1>
  <h1>{{ name }}</h1>
  <h1>{{ age }}</h1>
</template>
  
<style lang="scss" scoped>
</style>