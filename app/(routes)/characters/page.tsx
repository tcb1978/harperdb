export const dynamic = "force-dynamic";
import { listCharacters } from "actions";
import GroovyCarousel from "components/GroovyCarousel";
import { EntityTitle } from 'enums';
import { CharacterType } from "types";

export default async function Page() {
  const characters: CharacterType[] | null = await listCharacters();
  return (
    <>
      <h1 className="py-4 text-2xl font-bold text-amber-300">
        {EntityTitle.Characters}
      </h1>
      <GroovyCarousel characters={characters} />
    </>
  );
}
