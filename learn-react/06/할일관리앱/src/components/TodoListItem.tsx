import { twMerge } from "tailwind-merge";

export default function TodoListItem({
  todo,
  toggleTodo,
  deleteTodo,
}: {
  todo: TodoItem;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}) {

  return (
    // 할 일 목록 렌더링
    <li className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors">
      <div className="flex items-center">
        {/* 체크박스 */}
        <input
          type="checkbox"
          className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
          checked={todo.done}
          onChange={() => toggleTodo(todo.id)}
        />
        {/* 할 일 텍스트 완료시 line-through 처리 */}
        <span className={twMerge(todo.done && "line-through")}>
          {todo.text}
        </span>
      </div>
      
      {/* 삭제 버튼 */}
      <button
        className="text-red-500 hover:text-red-700 ml-4"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </li>
  );
}
