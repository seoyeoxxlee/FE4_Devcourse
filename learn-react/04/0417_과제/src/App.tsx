import Login from "./components/Login";
import Signin from "./components/Signin";

export default function App() {
  const email = "";
  const password = "";
  const agree = true;
  const name = "";
  return (
    <>
      <div className="min-h-screen flex justify-center items-center gap-2 bg-white">
        <Login email={email} password={password} agree={agree} />
        <Signin name={name} email={email} password={password} agree={agree} />
      </div>
    </>
  );
} 
