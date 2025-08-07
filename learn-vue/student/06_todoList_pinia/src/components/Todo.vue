<script setup>
import { onMounted, ref, watch } from 'vue';
import TodoHeader from './TodoHeader.vue';
import TodoEditor from './TodoEditor.vue';
import TodoList from './TodoList.vue';

</script>

<template>
  <div class="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
    <TodoHeader />
    <TodoEditor @add-todo="addTodo"/>
    <TodoList 
      :todos="todos" 
      @toggle-todo="toggleTodo" 
      @delete-todo="deleteTodo"
    />
  </div>
</template>

<style></style>
