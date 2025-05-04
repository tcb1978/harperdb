import { listCharacters } from "../actions";
import EntityList from "../components/EntityList";
import { EntityBasePath, EntityTitle } from '../enums';
import { CharacterType } from "../types";

export default async function Page() {
  const characters: CharacterType[] = await listCharacters();
  return (
    <EntityList
      title={EntityTitle.Characters}
      items={characters}
      basePath={EntityBasePath.Characters}
    />
  );
}
