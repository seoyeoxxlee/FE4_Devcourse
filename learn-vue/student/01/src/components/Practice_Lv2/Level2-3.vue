<script>
export default {
  name: 'Level2-1',
  data() {
    return {
      role: "admin"
    };
  },
};
</script>

<template>
  <h1 v-if="role==='admin'">관리자</h1>
  <h1 v-else-if="role==='editor'">편집자</h1>
  <h1 v-if="role==='viewer'">읽기 전용</h1>
</template>

<style scoped></style>