import React, { Suspense } from "react";
import { listLocations } from "../actions";
import { EntityBasePath, EntityTitle } from '../enums';
import { LocationType } from "../types";

const EntityList = React.lazy(() => import("../components/EntityList"));

export default async function Page() {
  const locations: LocationType[] = await listLocations();
  return (
    <Suspense fallback={<div>Loading locations...</div>}>
      <EntityList
        title={EntityTitle.Locations}
        items={locations}
        basePath={EntityBasePath.Locations}
      />
    </Suspense>
  );
}
