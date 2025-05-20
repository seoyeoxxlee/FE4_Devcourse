<script>
export default {
  name: 'Level3-1',
  data() {
    return {
      items: ["사과", "바나나", "오렌지"],
    };
  },
};
</script>

<template>
  <ul>
    <li v-for="(value, index) in items" :key="index">
      {{ value }}
    </li>
  </ul>
</template>

<style scoped></style>