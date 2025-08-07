import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(url);
        if (!res.ok) throw new Error("Network request is failed");
        const data = await res.json();
        setData(data);
      } catch (e) {
        setError(e instanceof Error ? e.message : "unknown error");
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, [url]);

  return { data, isLoading, error };
};
