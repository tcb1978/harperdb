import Link from "next/link";

export default async function Page() {
  return (
    <>
      <section>
        <h1>Favorites</h1>
      </section>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/favorites/characters">Characters</Link>
        </li>
        <li>
          <Link href="/favorites/episodes">Episodes</Link>
        </li>
        <li>
          <Link href="/favorites/locations">Locations</Link>
        </li>
      </ul>
    </>
  );
}
