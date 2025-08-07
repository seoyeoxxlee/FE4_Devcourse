import Link from "next/link";

export default function MarketingLayout ({children} : {children: React.ReactNode}) {
  return (
    <div>
      <header>
        <nav>
          <Link href={'/'}>Home</Link>
          <Link href={'/'}>About</Link>
          <Link href={'/'}>Contact</Link>
        </nav>
      </header>

      <main>
        {children}
      </main>
    </div>
  );
}