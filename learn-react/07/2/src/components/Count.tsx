import { useEffect, useState } from "react";
// 사이드 이펙트 (side effect) -> 화면을 렌더링 하는 것 이외의 모든 부가적인 작업.
// useEffect -> 리액트에서 사이드 이펙트를 수행할 때 시점을 제공하는 훅

// useEffect는 사이드 이펙트를 수행할 수 있는 시점 3가지를 제공한다.
// 1. 컴포넌트가 생성될 때 (mount) - 컴포넌트의 리렌더링에 전혀 영향을 받지 않음.
// 2. 컴포넌트의 상태 값이 변경될 때 (update)
// 3. 컴포넌트가 해제될 때 (unmount) - 컴포넌트의 리렌더링에 전혀 영향을 받지 않음.

// useEffect는 콜백함수와 의존성 배열을 전달한다.
// 의존성 배열이 빈 배열일 경우 최초 1회만 전달

// 특정 상태나 어떤 값을 전달해주고 싶을 때 useEffect훅의 의존성 배열에 값을 넣어 사용할 수 있다?

// 컴포넌트가 해제될 때 (언마운트)
export default function Count () {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // 마운트 (컴포넌트 생성 시점 & 최초 1회만 실행됨. 빈 의존성 배열 반환)
  useEffect(() => {
    console.log("Count Mounted");

    // 언마운트 (컴포넌트가 삭제될 때 딱 한 번만 제공. 마운트함수 내부에 작성)
    return () => {
        console.log("Count UnMounted");
    }
  }, []);

  // 업데이트 (의존성 배열에 감시하고 싶은 데이터를 넣음. 의존성 배열에는 여러 개의 값을 넣을 수도 있음)
  useEffect(() => {
    console.log("count change:" + count);
    console.log("name change:" + name);
  }, [count, name]);


  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(() => count + 1)}>증가</button>
      <button onClick={() => setName("안녕하세요")}>인사</button>
    </>
  );
}