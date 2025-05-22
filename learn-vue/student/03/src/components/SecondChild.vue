<script>
export default {
  name: 'SecondChild',
  data() {
    return {};
  },
  emits: ['greet', 'printHello'],
  props: {
    myCustomValue: {
        type: String,
    },
  },
}
</script>
  
<template>
  <h1>SecondChild</h1>
  <button @click="$emit('printHello', {name: 'sucoding', age: 30})">클릭1</button>
</template>
  
<style scoped>
</style>