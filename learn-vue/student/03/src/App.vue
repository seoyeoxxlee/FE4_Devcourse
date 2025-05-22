<script>
import CountButtons from './components/CountButtons.vue';
import CountDisplay from './components/CountDisplay.vue';

export default {
  name: 'App',
  components: {
    CountDisplay,
    CountButtons,
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
  <CountDisplay :count="count"/>
  <CountButtons @increment="increment" @reset="reset" @decrement="decrement"/>
</template>
  
<style scoped>
</style>