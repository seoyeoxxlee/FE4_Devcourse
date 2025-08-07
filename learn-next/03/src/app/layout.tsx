import "./globals.css";
import Link from "next/link";


export default function RootLayout () {
  return (
    <html>
      <body>
        <nav>
          <ul>
            <li>
              <Link href="/about">about</Link>
            </li>
            <li>
              <Link href="/about">about</Link>
            </li>
          </ul>
        </nav>
      </body>
    </html>
  );
}