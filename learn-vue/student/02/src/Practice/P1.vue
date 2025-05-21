<script>
export default {
  name: 'Problem_1',
  data() {
    return {
      name: '',
    };
  },
  methods: {
    handleNameChange(e) {
      this.name = e.target.value
    },
  }
};
</script>

<template>
  <div></div>
  <input type="text" :value="name" @input="handleNameChange" placeholder="이름을 입력하세요" />
  <p>이름: {{ name }}</p>
</template>
<style scoped>
  
</style>