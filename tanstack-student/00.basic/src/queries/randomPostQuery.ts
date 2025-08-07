const fetchRandomPost = async () => {
  return await (await fetch("https://dummyjson.com/quotes/random")).json();
};

export const createRandomPostQuery = () => {
  return {
    queryKey: ["randomPost"],
    queryFn: fetchRandomPost,
    // staleTime: 1000 * 10,
    // gcTime: 1000 * 20,
    refetchOnMount: false, // true
    refetchOnWindowFocus: false, // true
  };
};
