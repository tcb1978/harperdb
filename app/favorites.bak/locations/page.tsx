import FavoriteListPage from "../../components/FavoriteListPage";
import { EntityBasePath, EntityTitle } from "../../enums";

export default async function Page() {
  return (
    <FavoriteListPage
      apiUrl="/api/favorites/locations"
      title={EntityTitle.Locations}
      routeBase={EntityBasePath.Locations}
    />
  );
}
