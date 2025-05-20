<script>
export default {
  name: 'Level3-2',
  data() {
    return {
      items: { name: "홍길동", age: 25, job: "개발자" },
    };
  },
};
</script>

<template>
      <h1 v-for="(value, key) in items" :key="key">
        {{ key }} : {{ value }}
      </h1>
</template>

<style scoped>
  
</style>