export default function Child ({
    message,
    count,
    fruits,
    user,
    isLoggedIn,
    clickFunction,
    name = "홍길동",
    value,
    style,
    Header,
    Content,
    Footer,
}: {
    message: string;
    count: number;
    fruits: string[];
    user: {name: string, age: number};
    isLoggedIn: boolean;
    clickFunction:() => void;
    name?: string;
    value: string | number | unknown[];
    // style: {fontSize: string, color: string};
    style: React.CSSProperties; // 범용적으로 이렇게 스타일 형식을 받아 올 수도 있다.
    Header: React.ReactNode; // ReactNode로 타입 지정 해주어야 한다..
    Content: React.ReactNode;
    Footer: React.ReactNode;
}) {
  return (
    <>
      <h1>{message}</h1>
      <h1>{count}</h1>
      <h1>{JSON.stringify(fruits, null, 2)}</h1>
      <h1>{JSON.stringify(user, null, 2)}</h1>
      <h1>{isLoggedIn ? '로그인 됨' : '로그인 안 됨'}</h1>

      <button onClick={clickFunction}>click me</button>
      <h1>{name}</h1>
      <h1>{JSON.stringify(value)}</h1> {/* unknown 배열 타입일 때 JSON.stringfy() 적용해 주어야 한다. */}

      <h1 style={style}>style</h1>
      {Header}
      {Content}
      {Footer}
    </>
  );
}