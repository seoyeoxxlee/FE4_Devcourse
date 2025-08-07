"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RegisterClient () {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, [router])

  return (
    <>
      <h1>RegisterClient Component</h1>
      {/* <button onClick={() => router.push("/")}>홈으로</button> */}
    </>
  );
}