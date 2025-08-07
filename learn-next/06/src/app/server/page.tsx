export default async function Server () {
  const posts = await (
    await fetch('https://jsonplaceholder.typicode.com/posts')
  ).json();
  return (
    <>
      <h1>Server Component</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </>
  );
}