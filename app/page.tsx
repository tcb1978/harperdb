import Link from "next/link";
import { FC } from "react";

const Page: FC = () => {
  return (
    <>
      <section>
        <h1>Rick and Morty</h1>
      </section>
      <ul>
        <li>
          <Link href="/characters">All Characters</Link>
        </li>
        <li>
          <Link href="/episodes">All Episodes</Link>
        </li>
        <li>
          <Link href="/locations">All Locations</Link>
        </li>
        <li>
          <Link href="/favorites">All Favorites</Link>
        </li>
      </ul>
    </>
  );
};

export default Page;
