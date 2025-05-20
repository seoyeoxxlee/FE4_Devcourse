<script>
export default {
  name: 'Level3-7',
  data() {
    return {
      items: ["Apple", "Banana", "Grapes"],
    };
  },
};
</script>

<template>
  <ul>
    <li v-for="fruit in items" :key="fruit">
      <span v-if="fruit === 'Apple'" style="color: red">{{ fruit }}</span>
      <span v-else style="color: green">{{ fruit }}</span>
    </li>
  </ul>
</template>

<style scoped></style>