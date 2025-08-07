"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({
    error, reset
}: {
    error: Error; 
    reset: () => void;
}) {
    const router = useRouter(); // () 호출 추가!

    const reload = () => {
        startTransition(() => {
            router.refresh(); // 이제 정상
            reset();
        });
    };

    return (
        <>
            <h1>Error: {error.message}</h1>
            <button onClick={reload}>reset</button>
        </>
    );
}
