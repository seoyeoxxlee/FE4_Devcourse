"use client"

import { useRouter } from "next/navigation";

export default function NotFoundPage () {

  const router = useRouter();
  return (
    <div>
      <h1>The page you are looking for is not exist</h1>
      <button onClick={() => router.push("/")}>Go to Homepage</button>
    </div>
  );
}