import Link from "next/link";

export default function EntityList({ title, items, basePath }) {
  return (
    <section>
      <p>
        <Link href="/">Back to home</Link>
      </p>
      <h1>{title}</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link href={`/${basePath}/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}