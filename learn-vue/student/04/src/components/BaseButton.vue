<script>
export default {
  name: 'BaseButton',
  data() {
    return {
      text: 'Login',
    };
  },
};
</script>
  
<template>
    <button>
        <slot :text>
          <span>클릭</span>
        </slot>
    </button>
</template>
  
<style scoped>
span {
  color: orange;
}
</style>