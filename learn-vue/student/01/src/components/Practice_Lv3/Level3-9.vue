<script>
export default {
  name: 'Level3-9',
  data() {
    return {
      items: ["Item 1", "Item 2", "Item 3"],
    };
  },
};
</script>

<template>
<!-- 
  <ul>
    <li v-for="(item, index) in items" :key="index">
      <strong v-if="index === 0">{{ item }}</strong>
      <span v-else>{{ item }}</span>
    </li>
  </ul>
   -->
  <li v-for="(item, index) in items" :key="index" :style="{ fontWeight: index === 0 ? 'bold' : 'normal'}">
    {{ items }}
  </li>
</template>

<style scoped></style>