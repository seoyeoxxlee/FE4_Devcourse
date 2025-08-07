<script>
import TodoListItem from "./TodoListItem.vue";

export default {
  data() {
    return {};
  },
  components: {
    TodoListItem,
  },
  props: {
    todos: {
      type: Array,
    },
  },
  emits: ["toggleTodo", "deleteTodo"],
  methods: {
    toggleTodo(id) {
      this.$emit("toggleTodo", id)
    },
    deleteTodo(id) {
      this.$emit("deleteTodo", id)
    },
  },
};
</script>

<template>
  <ul class="divide-y divide-gray-200">
    <TodoListItem 
      v-for="todo in todos" 
      :key="todo.id" 
      :todo="todo" 
      @toggle-todo="todo" 
      @delete-todo="deleteTodo"
    />
  </ul>
</template>

<style></style>
