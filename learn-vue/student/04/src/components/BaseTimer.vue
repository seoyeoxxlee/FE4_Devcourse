<script>
export default {
  name: 'BaseTimer',
  data() {
    return {
        count: 0,
        interval: null,
    };
  },
  created() {
    setInterval(() => {
        this.count += 1
    }, 1000)
  },
  beforeUnmount() {
    clearInterval(this.interval) // 메모리 누수 방지
  }
};
</script>
  
<template>
  <h1>Count: {{ count }}</h1>
</template>
  
<style scoped>
</style>