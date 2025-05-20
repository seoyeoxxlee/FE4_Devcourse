<script>
export default {
  name: 'Level4-2',
  data() {
    return {
      products: [
        { name: "노트북", price: 100000 },
        { name: "모니터", price: 45000 },
        { name: "스마트폰", price: 60000 },
      ],
    };
  },
};
</script>

<template>
  <ul>
    <li v-for="product in products.filter((product) => product.price > 50000)" :key="product.name">
      {{ product.name }} - {{ product.price }}
    </li>
  </ul>
</template>

<style scoped></style>