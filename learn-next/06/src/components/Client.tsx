"use client"

import { useEffect, useState } from "react";

export default function Client () {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) =>{
      setPosts(data);
      setIsLoading(false);
    });
  })
  return (
    <>
      <h1>Client Component</h1>
      {isLoading ? (
        <p>로딩 중...</p>
      ) : (
        <pre>{JSON.stringify(posts, null, 2)}</pre>
      )}
    </>
  );
}