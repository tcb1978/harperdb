import { notFound } from "next/navigation";
import React, { Suspense } from "react";
import { getEpisodeById } from "../../actions";
import { EntityBackPath, EntityRedirectPath, EntityType } from "../../enums";
import { EpisodeType } from "../../types";

const EntityDetail = React.lazy(() => import("../../components/EntityDetail"));

type PageProps = {
  params: { id: string; };
};

export default async function Page({ params: { id } }: PageProps) {
  const episode: EpisodeType | null = await getEpisodeById(id);

  if (!episode) {
    notFound();
  }

  return (
    <Suspense fallback={<div>Loading details...</div>}>
      <EntityDetail
        entityType={EntityType.Episode}
        entity={episode}
        backPath={EntityBackPath.Episodes}
        fields={["air_date", "episode"]}
        redirectPath={EntityRedirectPath.Episodes}
      />
    </Suspense>
  );
}
