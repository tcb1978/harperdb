import React, { Suspense } from "react";
import { DOMAIN_URL } from "../../constants";
import { EntityBasePath, EntityTitle } from "../../enums";

const FavoriteListPage = React.lazy(() => import("../../components/FavoriteListPage"));

export default function Page() {
  return (
    <Suspense fallback={<div>Loading favorites...</div>}>
      <FavoriteListPage
        apiUrl={`${DOMAIN_URL}/api/favorites/locations`}
        title={EntityTitle.Locations}
        routeBase={EntityBasePath.Locations}
      />
    </Suspense>
  );
}
