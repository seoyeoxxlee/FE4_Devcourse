import { useState } from "react";

export default function TodoEditor({addTodo}: {addTodo: (text: string) => void;}) {

  const [text, setText] = useState("");
  // input 요소에서 텍스트가 변경될 때 호출
  const textChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value); // e.target.value -> 입력 필드의 현재 값(사용자가 입력하는 값이 text 상태에 실시간으로 반영)
  };

  // 폼이 제출될 때 호출 (enter키 눌러서 폼 제출 가능)
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 페이지 새로고침/ 폼 제출 방지
    addTodo(text); // 부모 컴포넌트에서 전달된 addTodo 함수를 호출하여, 현재 입력된 text를 전달
    setText(""); // 입력 필드 초기화
  };

  return (
    // 폼 제출 시 submitHandler 실행
    <form className="flex p-4" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Enter a new todo"
        className="flex-grow p-2 border rounded-l-md focus:outline-none"
        value={text}
        onChange={textChangeHandler}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
      >
        Add
      </button>
    </form>
  );
}
