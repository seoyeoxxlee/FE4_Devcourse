<script>
export default {
  name: 'Level2-1',
  data() {
    return {
      status: 'loading'
    };
  },
};
</script>

<template>
  <h1 v-if="status === 'loading'">데이터를 로딩 중입니다...</h1>
  <h1 v-else-if="status === 'error'">에러가 발생했습니다.</h1>
  <h1 v-else-if="status === 'success'">데이터 로딩 완료!</h1>
  <h1 v-else-if="status === 'idle'">대기중</h1>
</template>

<style scoped></style>