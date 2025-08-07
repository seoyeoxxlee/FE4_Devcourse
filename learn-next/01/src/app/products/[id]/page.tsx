export default async function page ({params} : {params: Promise<{id: string}>}) {
  const { id } = await params;
  return (
    <>
      <h1>Detail Component</h1>
      <p>Product ID: {id}</p>
    </>
  );
}