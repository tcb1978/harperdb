import Link from "next/link";
import RemoveFromFavoriteButton from "../../components/RemoveFromFavoriteButton";

export default async function Page() {
  const res = await fetch("http://localhost:3000/api/favorites/episodes", {
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
        <p>No favorite episodes</p>
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
    <section>
      <h1>Favorite Episodes</h1>
      <p>
        <Link href="/">Home</Link>
      </p>
      <ul>
        {(data.data || data).map((episode) => (
          <li key={episode.id}>
            <Link href={`/episodes/${episode.refId}`}>{episode.name}</Link>
            <RemoveFromFavoriteButton
              id={episode.refId}
              name={episode.name}
              whichFavorite="episodes"
              redirectTo="/favorites/episodes"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
