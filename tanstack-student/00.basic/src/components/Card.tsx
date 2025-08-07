import { useQuery } from '@tanstack/react-query';
import { createRandomPostQuery } from "../queries/randomPostQuery";
import { createPostQuery } from "../queries/postQuery";

export default function Card() {
  const { data, refetch } = useQuery(createRandomPostQuery());
  const { data: post, refetch: postRefetch } = useQuery(createPostQuery());

  return (
    <>
      <h1>random post</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={() => refetch()}>refetch</button>
      <h1>post</h1>
      <pre>{JSON.stringify(post, null, 2)}</pre>
      <button onClick={() => postRefetch()}>postRefetch</button>
    </>
  );
}
