export const dynamic = "force-dynamic";
import { getLocationById } from "actions";
import EntityDetail from "components/EntityDetail";
import { EntityBackPath, EntityRedirectPath, EntityType } from "enums";
import { notFound } from "next/navigation";
import { LocationType } from "types";

type PageProps = {
  params: { id: string; };
};

export default async function Page({ params: { id } }: PageProps) {
  const location: LocationType | null = await getLocationById(id);

  if (!location) {
    notFound();
  }

  return (
    <EntityDetail
      entity={location}
      entityType={EntityType.Location}
      backPath={EntityBackPath.Locations}
      fields={["type", "dimension"]}
      redirectPath={EntityRedirectPath.Locations}
    />
  );
}
