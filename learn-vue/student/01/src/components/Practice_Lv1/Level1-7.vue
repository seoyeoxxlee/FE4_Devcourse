<script>
export default {
  name: 'Level1-7',
  data() {
    return {
      isGreeting: false,
    };
  },
};
</script>

<template>
  <h1 v-if="isGreeting">Hello</h1>
  <h1 v-else>Goodbye</h1>
</template>

<style scoped></style>