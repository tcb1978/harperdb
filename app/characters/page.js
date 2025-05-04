import { listCharacters } from "../actions";
import EntityList from "../components/EntityList";

export default async function Page() {
  const characters = await listCharacters();
  return (
    <EntityList title="Characters" items={characters} basePath="characters" />
  );
}
