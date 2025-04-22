// 상태 -> 시간이 지남에 따라 변할 수 있는 데이트럴 의미
// useState, useReducer -> 리액트 훅
// 상태 변수(리액트 변수)

// const [state, setState] = useState<Type>(초기값)
// state-> 상태 변수
// setState -> 상태 업데이트 함수

import { useState } from "react";

export default function Count () {
    const [count, setCount] = useState<number>(0); // [현재 상태 값, 상태 값 업데이트]
    const clickHandler = () => {
        // 상태 업데이트 함수(값) -> 상태 변수는 '값'으로 업데이트 된다.
        setCount(count + 1); // 비동기
        // 상태 업데이트 함수(콜백함수)
        setCount((count) => count + 1);
    };

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={clickHandler}>증가</button>
        </>
    );
}