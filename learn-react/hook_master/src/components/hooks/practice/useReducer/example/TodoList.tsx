import { useReducer } from "react";

type Todo = {
  id: number;
  text: string;
  done: boolean;
}

type TodoAction = 
  | { 
      type: "ADD";
      payload: string
    }
  | { 
      type: "TOGGLE";
      payload: number
    }
  | { 
      type: "DELETE";
      payload: number
    };

function todosReducer(state: Todo[], action: TodoAction): Todo[] {
  switch (action.type) {
    case "ADD":
      return [...state, {id: Date.now(), text: action.payload, done: false,}];
    case "TOGGLE":
      return state.map((todo) => todo.id === action.payload ? {...todo, done: !todo.done} : todo);
    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

type InputAction =
  | {
      type: "SET_INPUT";
      payload: string
    }
  | {
      type: "CLEAR"
    };

function inputReducer(state: string, action: InputAction): string {
  switch (action.type) {
    case "SET_INPUT":
      return action.payload;
    case "CLEAR":
      return "";
    default:
      return state;
  }
}


export default function TodoList() {

  const [todos, todosDispatch] = useReducer(todosReducer, []);
  const [input, inputDispatch] = useReducer(inputReducer, "");

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;
    todosDispatch({type: "ADD", payload: input});
    inputDispatch({type: "CLEAR"}); // 입력란 비워주기
  };

  return (
    <div className="space-y-4">
      <form onSubmit={submitHandler} className="flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => inputDispatch({type: "SET_INPUT", payload: e.target.value})}
          className="flex-1 px-3 py-2 border rounded"
          placeholder="Add a new todo"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Add
        </button>
      </form>

      <ul className="space-y-2">
        {todos.map((todo) => ( 
          <li
            key={todo.id} 
            className="flex items-center justify-between p-3 bg-gray-50 rounded"
          >
            <div className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                className="h-4 w-4 text-blue-600" 
                onChange={() => todosDispatch({type: "TOGGLE", payload: todo.id})}
              />
              <span className={todo.done ? "line-through text-gray-400" : ""}>{todo.text}</span>
            </div>

            <button 
              className="text-red-500 hover:text-red-600"
              onClick={() => todosDispatch({type: "DELETE", payload: todo.id})}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p className="text-center text-gray-500">No todos yet. Add some!</p>
      )}
    </div>
  );
}
