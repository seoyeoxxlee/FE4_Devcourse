import { useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

// 일반 객체는 interface
// 타입별칭 type -> todo.d.ts
export default function Todo() {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  // 함수의 캡슐화
  // 새로운 할 일을 기존 todos 배열에 추가
  const addTodo = (text: string) => {
    setTodos((todos) => [
      ...todos,
      { 
        // 고유 ID값을 주기 위해 랜덤값으로 부여
        id: Math.random(),
        text,
        done: false,
      },
    ]);
  };

  // 전달받은 id를 가진 todo의 done 상태 반전
  const toggleTodo = (id: number) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  // id가 일치하는 항목만 제외하고 배열 다시 생성 -> 해당 todo 삭제
  const deleteTodo = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="w-[350px] max-w-md mx-auto shadow-lg rounded-lg overflow-hidden bg-white">
      <TodoHeader />
      <TodoList 
        todos={todos} 
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo} />
      <TodoEditor addTodo={addTodo} />
    </div>
  );
}
