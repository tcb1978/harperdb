import Link from "next/link";
import RemoveFromFavoriteButton from "../../components/RemoveFromFavoriteButton";

export default async function Page() {
  const res = await fetch("http://localhost:3000/api/favorites/characters", {
    cache: "no-store",
  });
  const data = await res.json();

  if (
    !data ||
    (Array.isArray(data) && data.length === 0) ||
    (data.data && data.data.length === 0)
  ) {
    return (
      <>
        <p>
          <Link href="/">Home</Link>
        </p>
        <p>No favorite characters</p>
      </>
    );
  }
  if (data.error) {
    return (
      <>
        <p>
          <Link href="/">Home</Link>
        </p>
        <p>{data.error}</p>
      </>
    );
  }

  return (
    <>
      <main>
        <section>
          <h1>Favorite Characters</h1>
          <p>
            <Link href="/">Home</Link>
          </p>
          <ul>
            {(data.data || data).map((character) => (
              <li key={character.id}>
                <Link href={`/characters/${character.refId}`}>
                  {character.name}
                </Link>
                <RemoveFromFavoriteButton
                  id={character.refId}
                  name={character.name}
                  whichFavorite="characters"
                  redirectTo="/favorites/characters"
                />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
