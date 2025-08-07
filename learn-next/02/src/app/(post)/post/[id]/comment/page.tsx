export default async function CommnetDetail ({params} : {params:Promise<{commentId : string}>}) {
  const { commentId } = await params;
    return (
    <>
      <h1>CommentDetail - {commentId} Component</h1>
    </>
  );
}



