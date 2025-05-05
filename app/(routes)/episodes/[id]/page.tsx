export const dynamic = "force-dynamic";
import { getEpisodeById } from "actions";
import EntityDetail from "components/EntityDetail";
import { BackPath, EntityType, RedirectPath } from "enums";
import { notFound } from "next/navigation";
import { EpisodeType } from "types";

type PageProps = {
  params: { id: string; };
};

export default async function Page({ params: { id } }: PageProps) {
  const episode: EpisodeType | null = await getEpisodeById(id);

  if (!episode) {
    notFound();
  }

  return (
    <EntityDetail
      entityType={EntityType.Episode}
      entity={episode}
      backPath={BackPath.Episodes}
      fields={["air_date", "episode"]}
      redirectPath={RedirectPath.Episodes}
    />
  );
}
