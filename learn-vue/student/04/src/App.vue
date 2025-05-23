<script>
import OptionCount from './components/OptionCount.vue';
import SetupAliasCount from './components/SetupAliasCount.vue';
import SetupCount from './components/SetupCount.vue';

export default {
  name: 'App',
  data() {
    return {
      text: 'SignUp'
    };
  },
  components: {
    OptionCount,
    SetupCount,
    SetupAliasCount,
  }
};
</script>
  
<template>
  <OptionCount />
  <SetupCount />
  <SetupAliasCount />
</template>
  
<style scoped></style>