<script>
import CountGroup from './components/CountGroup.vue';

export default {
  name: 'App',
  components: {
    CountGroup,
  },
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count += 1
    },
    reset() {
      this.count = 0
    },
    decrement() {
      this.count -= 1
    },
  }
};
</script>
  
<template>
  <CountGroup 
    :count="count"
    @increment="increment" 
    @reset="reset" 
    @decrement="decrement"
  />
</template>
  
<style scoped>
</style>