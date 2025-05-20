<script>
export default {
  name: 'Level3-10',
  data() {
    return {
      items: ['Apple', 'Banana', 'Orange'],
    };
  },
};
</script>

<template>
  <ul>
    <li v-for="item in items" :key="item">
      {{ item }} // {{ item.length }}
    </li>
   </ul>
</template>

<style scoped></style>