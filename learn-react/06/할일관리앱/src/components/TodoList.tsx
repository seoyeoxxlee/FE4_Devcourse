import TodoListItem from "./TodoListItem";

export default function TodoList({
  todos,
  toggleTodo,
  deleteTodo,
}: {
  todos: TodoItem[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}) {
  
  return (
    <ul className="divide-y divide-gray-200">
      {/* && -> 조건부 렌더링 
        todos가 존재할 때만 todos.map(...)실행
        todos 배열을 순회하면서 <TodoListItem />을 여러 개 생성
      */}
      {todos && todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
      ))}
    </ul>
  );
}
