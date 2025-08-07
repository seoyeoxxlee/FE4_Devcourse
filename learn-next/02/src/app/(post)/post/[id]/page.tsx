export default async function PostDetail ({params} : {params:Promise<{id : string}>}) {
  const { id } = await params;
    return (
    <>
      <h1>PostDetail - {id} Component</h1>
    </>
  );
}


// /post/1/comment/1
// /post/1/comment/2
// /post/2/comment/1

// /docs/data-fetch/get-method
// /docs/routing/dynamic-routes
// /docs/routing/catch-all-segment
// /docs/rendering/streaming-rendering
// /docs-find-docs