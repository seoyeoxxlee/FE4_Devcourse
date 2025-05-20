<script>
export default {
  name: 'Level3-4',
  data() {
    return {
      items: ["Apple", "Banana", "Orange", "Grapes"],
    };
  },
};
</script>

<template>
  <ul>
    <li v-for="item in items.filter((item) => item.includes('a'))" :key="item">
      {{ item }}
    </li>
  </ul>
</template>

<style scoped></style>