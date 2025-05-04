import Link from "next/link";
import RemoveFromFavoriteButton from "../../components/RemoveFromFavoriteButton";

export default async function Page() {
  const res = await fetch("http://localhost:3000/api/favorites/locations", {
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
        <p>No favorite locations</p>
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
      <h1>Favorite Locations</h1>
      <p>
        <Link href="/">Home</Link>
      </p>
      <ul>
        {(data.data || data).map((location) => (
          <li key={location.id}>
            <Link href={`/locations/${location.refId}`}>{location.name}</Link>
            <RemoveFromFavoriteButton
              id={location.refId}
              name={location.name}
              whichFavorite="locations"
              redirectTo="/favorites/locations"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
