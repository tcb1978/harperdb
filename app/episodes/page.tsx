import { listEpisodes } from "../actions";
import EntityList from "../components/EntityList";
import { EntityBasePath, EntityTitle } from '../enums';
import { EpisodeType } from "../types";

export default async function Page() {
  const episodes: EpisodeType[] = await listEpisodes();
  return (
    <EntityList
      title={EntityTitle.Episodes}
      items={episodes}
      basePath={EntityBasePath.Episodes}
    />
  );
}
