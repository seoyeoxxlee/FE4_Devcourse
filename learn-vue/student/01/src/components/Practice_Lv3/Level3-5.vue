<script>
export default {
  name: 'Level3-5',
  data() {
    return {
      items: ["Save", "Cancel", "Delete"],
    };
  },
};
</script>

<template>
  <button v-for="text in items" :key="text">{{ text }}</button>
</template>

<style scoped></style>