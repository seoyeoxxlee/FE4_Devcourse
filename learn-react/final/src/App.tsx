import { useEffect } from "react";
import CountButtons from "./components/CountButtons";
import CountDisplay from "./components/CountDisplay";
import { useCountStore } from "./stores/countStore";

export default function App() {
  
  // const count = useCountStore((state) => state.count);

  useEffect(() => {
    const unsubscribe = useCountStore.subscribe(
      (state) => state.count,
      (newCount) => {
        console.log("new count: ", newCount);
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <CountDisplay/>
      <CountButtons/>
    </>
  );
}
