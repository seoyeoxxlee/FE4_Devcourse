export async function generateMetadata({
    params,
} : {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;
    const item = await (await fetch(`http://localhost:8080/items/${id}`))
    .json();
    return {
        title: item.description,
    };
}

export default async function page ({
    params,
} : { 
    params: Promise<{id : string}>
}) {
    const { id } = await params;
    const item = await (await fetch(`http://localhost:8080/items/${id}`))
    .json();
  return (
    <>
      <h1>page Component</h1>
      <pre>{JSON.stringify(item, null, 2)}</pre>
    </>
  );
}