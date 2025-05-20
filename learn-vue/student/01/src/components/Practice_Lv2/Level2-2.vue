<script>
export default {
  name: 'Level2-2',
  data() {
    return {
      isHtml: true,
      htmlContent: "<b>HTML을 사용한 텍스트</b>",
      plainContent: "HTML을 사용하지 않은 텍스트",
    };
  },
};
</script>

<template>
  <h1 v-if="isHtml" v-html="htmlContent"></h1>
  <h1 v-else v-text="plainContent"></h1>
</template>

<style scoped></style>