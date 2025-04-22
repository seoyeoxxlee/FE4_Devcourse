import { useRef, useState } from "react";

// useRef - 값이 유지가 되면서 컴포넌트를 리렌더링할 필요가 없을 때

export default function App() {
  const isSubmitting = useRef(false);

  const [email, setEmail] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);

  const [pw, setPw] = useState("");
  const pwRef = useRef<HTMLInputElement>(null); // HTML -> HTMLInputElement 로 수정

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting.current) return;

    if (!email) {
      alert("이메일을 입력해주세요");
      emailRef.current?.focus();
      return;
    }

    if (!pw) {
      alert("비밀번호를 입력해주세요");
      pwRef.current?.focus();
      return;
    }

    isSubmitting.current = true;

    console.log("로그인됨");

    setTimeout(() => {
      isSubmitting.current = false;
    }, 2000);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-64 mx-auto mt-10">
        <input
          ref={emailRef}
          type="text"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-2 py-1 rounded"
        />
        <input
          ref={pwRef}
          type="password"
          placeholder="비밀번호"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          className="border px-2 py-1 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white rounded px-3 py-1">
          로그인
        </button>
      </form>
    </>
  );
}
