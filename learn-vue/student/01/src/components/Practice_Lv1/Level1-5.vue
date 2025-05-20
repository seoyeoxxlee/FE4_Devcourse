<script>
export default {
  name: 'Level1-5',
  data() {
    return {
      isVisible: true,
    };
  },
};
</script>

<template>
  <h1 v-show="isVisible === true">Now you see me ;)</h1>
</template>

<style scoped></style>