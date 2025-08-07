import { Metadata } from "next";
import Link from "next/link";

export const metadata : Metadata = {
  title: "Metadata example",
  description: "This is my example of writing static metadata"
}

export default function MetadataExample () {

  // dummy data
  const example = [
    { id: "1", title: "One" },
    { id: "2", title: "Two" },
    { id: "3", title: "Three" },
  ]
  return (
    <div>
      <h1>MetadataExample Component</h1>
      {/* MetadataExample 폴더 내부에 동적 컴포넌트 추가할 예정 */}
      <ul>
        {example.map((item) => (
          <li key={item.id}>
            <Link href={`/metadata-example/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}