import { getEpisodeById } from "../../actions";
import EntityDetail from "../../components/EntityDetail";
import { EntityBackPath, EntityRedirectPath, EntityType } from "../../enums";

type PageProps = {
  params: { id: string; };
};

export default async function Page({ params }: PageProps) {
  const episode = await getEpisodeById(params.id);

  if (!episode) {
    return <p>Episode not found</p>;
  }

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
