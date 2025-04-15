export default function App() {
  // JSX
  // Javascript + XML 형태의 확장 문법
  // 0. JSX는 HTML과 굉장히 유사하다. -> 그럼 뭐가 다르냐?

  // 1. JSX는 오직 하나의 루트 요소만을 반환해야 한다.
  // 2. JSX는 모든 태그를 닫아줘야 한다. -> 콘텐츠가 없는 빈 태그일지라도.. ex) <br />, <link />, etc
  // 3. JSX의 태그의 속성은 카멜 케이스로 사용해야 한다. maxlength (X) -> maxLength (O)
  // 4. JSX의 표현식은 중괄호 안에서 사용할 수 있다. ex) maxLength = {3}, {2 + 3}
  // 5. JSX의 인라인 스타일은 객체로 작성한다. <div style={color: "red", textDecoration: "underline"}>haha</div>
  // 6. JSX의 주석은 {/* 중괄호를 사용한다. */}

  return (
    <div>
      <div>Hello, World!</div>
      <div>Hello, World!</div>
    </div>
  );
}