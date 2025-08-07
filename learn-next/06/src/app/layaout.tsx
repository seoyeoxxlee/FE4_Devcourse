import Link from "next/link";

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <nav>
          <ul>
            <li>
              <Link href={"/server"}>/server</Link>
            </li>
            <li>
              <Link href={"/client"}>/client</Link>
            </li>
          </ul>
        </nav>
      </body>
    </html>
  );
}
