<script>
import Problem_1 from './Practice/P1.vue'
import Problem_2 from './Practice/P2.vue'
import Problem_3 from './Practice/P3.vue'
import Problem_4 from './Practice/P4.vue'
import Problem_5 from './Practice/P5.vue'
import Problem_6 from './Practice/P6.vue'
import Problem_7 from './Practice/P7.vue'
import Problem_8 from './Practice/P8.vue'

export default {
  name: "App",
  data() {
    return {
      current: "01",
    };
  },
  computed: {
    currentComponent() {
      switch (this.current) {
        case "1":
          return Problem_1;
        case "2":
          return Problem_2;
        case "3":
          return Problem_3;
        case "4":
          return Problem_4;
        case "5":
          return Problem_5;
        case "6":
          return Problem_6; 
        case "7":
          return Problem_7; 
        case "8":
          return Problem_8; 
        default:
          return null;
      }
    },
  },
};
</script>

<template>
  <div>
    <h2>연습문제 - 폼 요소 제어하기</h2>
    <select v-model="current">
      <option disabled value="">연습문제</option>
      <option value="1">문제 1</option>
      <option value="2">문제 2</option>
      <option value="3">문제 3</option>
      <option value="4">문제 4</option>
      <option value="5">문제 5</option>
      <option value="6">문제 6</option>
      <option value="7">문제 7</option>
      <option value="8">문제 8</option>
    </select>

    <component :is="currentComponent" />
  </div>
</template>

<style scoped></style>