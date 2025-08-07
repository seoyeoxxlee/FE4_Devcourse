<script setup>
const props = defineProps({
  todo: {
    type: Object
  },
});

const emit = defineEmits(["toggelTodo", "deleteTodo"]);
</script>

<template>
  <li
    class="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors"
  >
    <div class="flex items-center">
      <input
        type="checkbox"
        :class="`mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400`"
        :checked="props.todo.done"
        @change="$emit('toggleTodo', props.todo.id)"
      />
      <span>{{ props.todo.text }}</span>
    </div>
    <button 
      class="text-red-500 hover:text-red-700 ml-4" 
      @click="$emit('deleteTodo', props.todo.id)"
    >
      Delete
    </button>
  </li>
</template>
