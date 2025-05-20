<script>
export default {
  name: 'Level3-3',
  data() {
    return {
      items: ["사과", "바나나", "오렌지"],
    };
  },
};
</script>

<template>
  <ul>
    <li v-for="(value, index) in items" :key="value">
      {{ index }} - {{ value }}
    </li>
  </ul>
</template>

<style scoped></style>