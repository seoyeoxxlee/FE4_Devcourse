const fetchPosts = async () => {
  return await (
    await fetch("https://jsonplaceholder.typicode.com/posts")
  ).json();
};

export const createPostQuery = () => {
  return {
    queryKey: ["posts"],
    queryFn: fetchPosts,
    // staleTime: 1000 * 10,
    // gcTime: 1000 * 20,
    refetchOnMount: false, // true
    refetchOnWindowFocus: false, // true
  };
};
