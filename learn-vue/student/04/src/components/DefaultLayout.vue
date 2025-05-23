<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {};
  },
};
</script>
  
<template>
    a
    <slot name="header"></slot>
    b
    <slot name="main"></slot>
    c
    <slot name="footer"></slot>
    d
</template>
  
<style scoped>
</style>