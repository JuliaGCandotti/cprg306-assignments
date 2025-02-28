import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <li>
        <Link href="/week-2">Go to Week-2 page</Link>
      </li>
      <li>
        <Link href="/week-3">Go to Week-3 page</Link>
      </li>
      <li>
        <Link href="/week-4">Go to Week-4 page</Link>
      </li>
      <li>
        <Link href="/week-5">Go to week-5 page</Link>
      </li>
      <li>
        <Link href="/week-6">Go to week-6 page</Link>
      </li>
    </div>
  );
}
