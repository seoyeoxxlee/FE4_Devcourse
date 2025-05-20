<script>
export default {
  name: 'Level3-8',
  data() {
    return {
      categorys: [
        { name: "Fruits", items: ["Apple", "Banana"] },
        { name: "Vegetables", items: ["Carrot", "Broccoli"] },
      ],
    };
  },
};
</script>

<!-- 이중 for문 -->
<template>
  <ul>
    <li v-for="category in categorys" :key="category.name">
      {{ category.name }}
      <ul>
        <li v-for="item in category.items" :key="item">
          {{ item }}
        </li>
      </ul>
    </li>
  </ul>
</template>

<style scoped></style>