<script>
import TodoEditor from "./TodoEditor.vue";
import TodoHeader from "./TodoHeader.vue";
import TodoList from "./TodoList.vue";

export default {
  components: {
    TodoHeader,
    TodoEditor,
    TodoList,
  },
  data() {
    return {
      todos: [], // const [todo, setTodo] = useState<T>([])
    }
  },
  // 새로고침 해도 유지되도록
  watch: {
    todos: {
      deep: true,
      handler(newTodos) {
        sessionStorage.setItem("todos", JSON.stringify(newTodos));
      },
    },
  },
  // sessionStorage 복원
  mounted() {
    const saved = sessionStorage.getItem("todos");
    if (saved) {
      this.todos = JSON.parse(saved);
    }
  },
  
  methods: {
    addTodo(text) {
      this.todos.push({
        id: Date.now(),
        text,
        done: false,
      });
    },
    toggleTodo(id) {
      this.todos = this.todos.map((todo) => todo.id === id ? {...todo, done: !todo.done} : todo);
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
};
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
