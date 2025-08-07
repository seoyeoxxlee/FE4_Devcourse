<script setup>
import TodoListItem from "./TodoListItem.vue";
import { useTodoStore } from "@/stores/todo";

const todoStore = useTodoStore();


</script>

<template>
  <ul class="divide-y divide-gray-200">
    <TodoListItem 
      v-for="todo in todoStore.todos" 
      :key="todo.id" 
      :todo="todo" 
    />
  </ul>
</template>

<style></style>
