import { getLocationById } from "../../actions";
import EntityDetail from "../../components/EntityDetail";

export default async function Page({ params }) {
  const location = await getLocationById(params.id);

  return (
    <EntityDetail
      entity={location}
      entityType="Location"
      backPath="/locations"
      fields={["type", "dimension"]}
      favoriteRedirect="/favorites/locations"
    />
  );
}
