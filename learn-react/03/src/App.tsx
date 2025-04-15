import styled from "styled-components";
import Sub from "./components/Sub"

// CSS-IN-JS
// JS 형식으로 CSS 속성을 JSX 내부에 작성함
// CSS를 런타임에 동적으로 생성해서 적용하는 원리
const Title = styled.h1`
  font-size: 50px;
  color: red;
`

const Button = styled.button<{ $primary?: boolean; }>`
  /* Adapt the colors based on primary prop */
  background: ${props => props.$primary ? "#BF4F74" : "white"};
  color: ${props => props.$primary ? "white" : "#BF4F74"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;


export default function App () {
  return (
    <>
      <Title>App Component</Title>
      <Button $primary>My Button</Button>
      <Sub />
    </>
  );
}