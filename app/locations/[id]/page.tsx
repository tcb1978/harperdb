import { notFound } from "next/navigation";
import React, { Suspense } from "react";
import { getLocationById } from "../../actions";
import { EntityBackPath, EntityRedirectPath, EntityType } from "../../enums";
import { LocationType } from "../../types";

const EntityDetail = React.lazy(() => import("../../components/EntityDetail"));

type PageProps = {
  params: { id: string; };
};

export default async function Page({ params: { id } }: PageProps) {
  const location: LocationType | null = await getLocationById(id);

  if (!location) {
    notFound();
  }

  return (
    <Suspense fallback={<div>Loading details...</div>}>
      <EntityDetail
        entity={location}
        entityType={EntityType.Location}
        backPath={EntityBackPath.Locations}
        fields={["type", "dimension"]}
        redirectPath={EntityRedirectPath.Locations}
      />
    </Suspense>
  );
}
