"use client"
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function page () {

  const router = useRouter();
  console.log(router);

  const pathName = usePathname();
  console.log("현재 경로: ", pathName);
  
  const searchParams = useSearchParams();
  console.log("searchParams: ", searchParams);
  console.log(searchParams.getAll('name'));
  console.log(searchParams.has('name'));

  const handleNavigate = () => {
    router.push("/");
  }

  return (
    <div>
      <h1>Profile component - client</h1>
      <button onClick={handleNavigate}>Navigate to home page</button>
    </div>
  );
}