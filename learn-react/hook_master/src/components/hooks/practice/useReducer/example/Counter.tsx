import { useReducer } from "react";

type Action = 
  | {
      type: "INCREMENT";
      payload: number;
    }  
  | {
      type: "DECREMENT";
      payload: number;
    }
  | {
      type: "RESET";
    };

function countReducer(state: number, action: Action) {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - action.payload;
    case "RESET":
      return 0;
    default:
      return state;
  }
}

type StepAction = {
  type: "SET_STEP";
  payload: number;
};

function stepReducer(state: number, action: StepAction) {
  switch (action.type) {
    case "SET_STEP":
      return action.payload;
    default:
      return state;
  }
}

export default function Counter() {
  const [count, countDispatch] = useReducer(countReducer, 0); // count 숫자
  const [step, stepDispatch] = useReducer(stepReducer, 1); // step 숫자

  return (
    <div className="space-y-4">
      <div className="text-center">
        <span className="text-4xl font-bold text-blue-600">{count}</span>
      </div>

      <div className="flex justify-center space-x-2">
        <button 
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          onClick={() => countDispatch({ type: "DECREMENT", payload: step})}
        >
          Decrease
        </button>

        <button 
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
          onClick={() => countDispatch({ type: "RESET" })}
        >
          Reset
        </button>

        <button 
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          onClick={() => countDispatch({ type: "INCREMENT", payload: step})}
        >
          Increase
        </button>
      </div>

      <div className="flex items-center justify-center space-x-2">
        <span className="text-sm text-gray-600">Step:</span>
        <select 
          className="border rounded px-2 py-1"
          value={step}
          // select 요소의 값이 바뀌었을 때, e.target.value는 string 타입이라서 Number() 숫자로 바꿔줌.
          onChange={(e) => stepDispatch({ type: "SET_STEP", payload: Number(e.target.value)})}
        >
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="100">100</option>
        </select>
      </div>
    </div>
  );
}
