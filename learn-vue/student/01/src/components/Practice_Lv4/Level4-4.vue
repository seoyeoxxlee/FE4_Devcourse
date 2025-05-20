<script>
export default {
  name: 'Level4-4',
  data() {
    return {
      tasks: [
        { title: "Vue 공부하기", completed: false },
        { title: "프로젝트 작업", completed: true },
        { title: "운동하기", completed: false },
      ],
    };
  },
};
</script>

<template>
  <ul>
    <li v-for="task in tasks" :key="task.title">
      <label> <input type="checkbox" :checked="task.completed" /> {{ task.title }} </label>
    </li>
  </ul>
</template>

<style scoped></style>