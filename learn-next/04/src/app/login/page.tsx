import { redirect } from "next/navigation";


export default function Login () {
  const user = null;
  if (!user) {
    redirect("/");
  }
  return (
    <>
      <h1>Login</h1>
    </>
  );
}