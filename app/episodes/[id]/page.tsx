import { getEpisodeById } from "../../actions";
import EntityDetail from "../../components/EntityDetail";
import { EntityBackPath, EntityRedirectPath, EntityType } from "../../enums";


export default async function Page({ params }) {
  const episode = await getEpisodeById(params.id);

  return (
    <EntityDetail
      entityType={EntityType.Episode}
      entity={episode}
      backPath={EntityBackPath.Episodes}
      fields={["air_date", "episode"]}
      redirectPath={EntityRedirectPath.Episodes}
    />
  );
}
