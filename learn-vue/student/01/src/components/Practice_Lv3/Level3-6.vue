<script>
export default {
  name: 'Level3-6',
  data() {
    return {
      items: [
        { model: "Tesla Model S", price: 79999 },
        { model: "BMW X5", price: 60999 },
        { model: "Audi Q7", price: 54999 },
      ],
    };
  },
};
</script>

<template>
  <ul>
    <li v-for="(itemObj, index) in items" :key="index">
      <span>{{ itemObj.model }}</span>
      <span> - </span>
      <span>{{ itemObj.price }}</span>
    </li>
  </ul>
</template>

<style scoped></style>