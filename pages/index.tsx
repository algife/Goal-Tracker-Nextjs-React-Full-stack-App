import Link from "next/link";

// --------------------

export default function Home() {
  // return <span>This page is never displayed due to a redirect</span>;

  return (
    <ul>
      <li>
        <Link href="/goals">Goals Page</Link>
      </li>
      <li>
        <Link href="/About">About Page</Link>
      </li>
      <li>
        <Link href="/goals/1">Goal #1 Details Page</Link>
      </li>
    </ul>
  );
}
