import { getLocationById } from "../../actions";
import EntityDetail from "../../components/EntityDetail";
import { EntityBackPath, EntityRedirectPath, EntityType } from "../../enums";

type PageProps = {
  params: { id: string; };
};

export default async function Page({ params }: PageProps) {
  const location = await getLocationById(params.id);

  if (!location) {
    return <p>Location not found</p>;
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
