import { listCharacters } from "../actions";
import EntityList from "../components/EntityList";
import { EntityBasePath, EntityTitle } from '../enums';
import { CharacterType } from "../types";

export default async function Page() {
  const characters: CharacterType[] = await listCharacters();
  return (
    <>
      <h1 className="text-2xl font-bold text-amber-300 py-4">
        {EntityTitle.Characters}
      </h1>
      <EntityList
        title={EntityTitle.Characters}
        items={characters}
        basePath={EntityBasePath.Characters}
      />
    </>
  );
}
