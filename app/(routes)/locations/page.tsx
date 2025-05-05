export const dynamic = "force-dynamic";
import { listLocations } from "actions";
import EntityList from "components/EntityList";
import { EntityBasePath, EntityTitle } from "enums";
import { LocationType } from "types";

export default async function Page() {
  const locations: LocationType[] = await listLocations();
  return (
    <EntityList
      title={EntityTitle.Locations}
      items={locations}
      basePath={EntityBasePath.Locations}
    />
  );
}
