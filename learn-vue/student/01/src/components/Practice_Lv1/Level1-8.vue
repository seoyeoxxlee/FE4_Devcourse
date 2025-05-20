<script>
export default {
  name: 'Level1-8',
  data() {
    return {
      status: "fail"
    };
  },
};
</script>

<template>
  <h1 v-if="status === 'loggedIn'">로그인 중</h1>
  <h1 v-else-if="status === 'loginRequired'">로그인 필요</h1>
  <h1 v-else>비밀번호 오류</h1>
</template>

<style scoped></style>