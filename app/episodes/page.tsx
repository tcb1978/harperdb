import React, { Suspense } from "react";
import { listEpisodes } from "../actions";
import { EntityBasePath, EntityTitle } from '../enums';
import { EpisodeType } from "../types";

const EntityList = React.lazy(() => import("../components/EntityList"));

export default async function Page() {
  const episodes: EpisodeType[] = await listEpisodes();
  return (
    <Suspense fallback={<div>Loading episodes...</div>}>
      <EntityList
        title={EntityTitle.Episodes}
        items={episodes}
        basePath={EntityBasePath.Episodes}
      />
    </Suspense>
  );
}
