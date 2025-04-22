import { useReducer } from "react";
import { CounterReducer } from "../reducer/CounterReducer";

// state -> 상태값
// action -> 함수 내부에서 상태를 변경하기 위해서 참조할 수 있는 데이터
// Reducer의 필수조건 -> 무엇인가를 return 해주어야 하고, 그렇지 않을 거라면 에러를 던져줘야 한다.


export default function Reducer () {
    // count - 상태 값
    // dispatch - 액션 발생 함수
    const [count, dispatch] = useReducer(CounterReducer, {count: 0});

    return (
        <>
        <h1>Count: {count.count}</h1>
        <button onClick={() => dispatch({type:"DECREMENT"})}>-</button>
        <button onClick={() => dispatch({type:"RESET"})}>0</button>
        <button onClick={() => dispatch({type:"INCREMENT"})}>+</button>
        </>
    );
}