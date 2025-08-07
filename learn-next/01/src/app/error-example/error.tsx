'use client'

import { useEffect } from "react";

export default function ErrorExampleFallbackUI ({
  error, reset
} : {
  error : Error & {digest?: string},
  reset : () => void
}) {

  useEffect(() => {
    // sent a report to your error loggin service
  }, [error])
  return (
    <div>
      <p>{error?.message || 'An error occured'}</p>
    </div>
  );
}