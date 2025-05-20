<script>
export default {
  name: 'Level2-1',
  data() {
    return {
      status: "inCart", //"inCart", "purchased", "abandoned"
    };
  },
};
</script>

<template>
  <h1 v-if="status === 'inCart'">장바구니에 상품이 있습니다.</h1>
  <h1 v-else-if="status === 'purchased'">구매 완료</h1>
  <h1 v-else-if="status === 'abandoned'">구매가 취소되었습니다.</h1>
</template>

<style scoped></style>