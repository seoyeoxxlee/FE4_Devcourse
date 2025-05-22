<script>
import CountButtons from './CountButtons.vue';
import CountDisplay from './CountDisplay.vue';

export default {
  name: 'CountGroup',
  components: {
    CountDisplay,
    CountButtons,
  },
  props: {
    count: {
        type: Number,
    },
  },
  emits: ['increment', 'reset', 'decrement'],
}
</script>
  
<template>
    <CountDisplay :count="count"/>
    <CountButtons 
        @increment="$emit('increment')"
        @reset="$emit('reset')"
        @decrement="$emit('decrement')"
    />
</template>
  
<style scoped>
</style>