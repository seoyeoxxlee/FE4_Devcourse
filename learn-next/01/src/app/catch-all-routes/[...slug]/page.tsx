export default async function ProductFilter ({
  params
} : {
  params: Promise<{ slug: string[] }>
}) {
  const {slug} = await params;
  console.log(slug);
  return (
    <div>
      <h1>Product Filter</h1>
    </div>
  );
}      