import { listLocations } from "actions";
import EntityList from "components/EntityList";
import { BasePath, Title } from "enums";
import { LocationType } from "types";

const LocationsLandingPage = async () => {
  const locations: LocationType[] = await listLocations();
  return (
    <EntityList
      title={Title.Locations}
      items={locations}
      basePath={BasePath.Locations}
    />
  );
};

export default LocationsLandingPage;