export async function generateMetadata({params} : {params: Promise<{commentId: string}>
}) {
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    const {commentId} = await params;
    return {
        title: `commentId -${commentId}`,
    }
}

export default function layout ({children} : {children: React.ReactNode}) {
  return (
    <>
        <head>Comment Header</head>
        {children}
        <footer>Comment Footer</footer>
    </>
  );
}