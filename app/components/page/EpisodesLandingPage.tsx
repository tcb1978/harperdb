import { listEpisodes } from "actions";
import EntityList from "components/EntityList";
import { BasePath, Title } from "enums";
import { EpisodeType } from "types";

const EpisodesLandingPage = async () => {
  const episodes: EpisodeType[] = await listEpisodes();
  return (
    <EntityList
      title={Title.Episodes}
      items={episodes}
      basePath={BasePath.Episodes}
    />
  );
};

export default EpisodesLandingPage;