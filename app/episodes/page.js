import { listEpisodes } from "../actions";
import EntityList from "../components/EntityList";

export default async function Page() {
  const episodes = await listEpisodes();
  return <EntityList title="Episodes" items={episodes} basePath="episodes" />;
}
