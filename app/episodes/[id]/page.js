import { getEpisodeById } from "../../actions";
import EntityDetail from "../../components/EntityDetail";

export default async function Page({ params }) {
  const episode = await getEpisodeById(params.id);

  return (
    <EntityDetail
      entity={episode}
      entityType="Episode"
      backPath="/episodes"
      fields={["air_date", "episode"]}
      favoriteRedirect="/favorites/episodes"
    />
  );
}
