import { useLoaderData } from "react-router";

export default function Detail () {
  const post = useLoaderData();
  return (
    <>
      <h1>Detail Component</h1>
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </>
  );
}