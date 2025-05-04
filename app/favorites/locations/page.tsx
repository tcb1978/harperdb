import FavoriteListPage from "../../components/FavoriteListPage";
import { EntityBasePath, EntityTitle } from "../../enums";

export default function Page() {
  return (
    <FavoriteListPage
      apiUrl="http://localhost:3000/api/favorites/locations"
      title={EntityTitle.Locations}
      routeBase={EntityBasePath.Locations}
    />
  );
}
