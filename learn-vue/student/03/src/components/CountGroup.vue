<script>
import CountButtons from './CountButtons.vue'
import CountDisplay from './CountDisplay.vue'

export default {
  name: 'CountGroup',
  components: {
    CountDisplay,
    CountButtons,
  },
}
</script>

<template>
  <CountDisplay />
  <CountButtons />
</template>

<style scoped></style>