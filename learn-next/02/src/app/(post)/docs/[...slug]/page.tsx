export default async function CatchAllSegment ({params} : {params: Promise<{slug: string[]}>}) {
  const {slug} = await params;
    return (
    <>
    {slug.length === 2 && (
        <h1>
            feature {slug[0]}, concepts {slug[1]}
        </h1>
    )}
    {slug.length === 1 && <h1>feature {slug[0]}</h1>}
    </>
  );
}