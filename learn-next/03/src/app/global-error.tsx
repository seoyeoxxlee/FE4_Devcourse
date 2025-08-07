"use client"

export default function GlobalError ({error, reset} : {
    error: Error & {digest?: string};
    reset: () => void;
}) {
  return (
    // global-error must include html and body tag
    <html>
        <body>
            <h2>{error.message}</h2>
            <button onClick={() => reset()}>Try again</button>
        </body>
    </html>

  );
}