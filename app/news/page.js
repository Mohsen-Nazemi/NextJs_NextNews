import Link from "next/link";

export default function NewsPage() {
  return (
    <ul>
      <li>
        <Link href="/news/first-news">new number 1</Link>
      </li>
      <li>
        <Link href="/news/second-news">new number 2</Link>
      </li>
      <li>
        <Link href="/news/third-news">new number 3</Link>
      </li>
    </ul>
  );
}
