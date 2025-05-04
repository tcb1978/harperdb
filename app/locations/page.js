import { listLocations } from "../actions";
import EntityList from "../components/EntityList";

export default async function Page() {
  const locations = await listLocations();
  return (
    <EntityList title="Locations" items={locations} basePath="locations" />
  );
}
