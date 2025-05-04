import Link from "next/link";
import { getCharacterById } from "../../actions";
import AddToFavoriteButton from "../../components/AddToFavoriteButton";

export default async function Page({ params }) {
  const character = await getCharacterById(params.id);

  if (!character) {
    return <p>Character not found.</p>;
  }

  console.log(character.episode);

  return (
    <section>
      <h1>{character.name}</h1>
      <p>
        <img src={character.image} alt={character.name} />
      </p>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Type: {character.type}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin?.name}</p>
      <p>Location: {character.location?.name}</p>
      <p>Created: {new Date(character.created).toLocaleDateString()}</p>
      <AddToFavoriteButton
        id={character.id}
        name={character.name}
        whichFavorite="characters"
        redirectTo="/favorites/characters"
      />
      <p>
        <Link href="/characters">Back to Characters</Link>
      </p>
    </section>
  );
}
