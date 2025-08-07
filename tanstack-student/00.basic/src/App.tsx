import { useState } from "react";
import Card from "./components/Card";

export default function App() {
  const [isShow, setIsShow] = useState(true);
  return (
    <>
      {isShow && <Card />}
      <button onClick={() => setIsShow((show) => !show)}>display</button>
    </>
  );
}
