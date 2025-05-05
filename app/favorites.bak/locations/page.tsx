import FavoriteListPage from "../../components/FavoriteListPage";
import { BasePath, Title } from "../../enums";

export default async function Page() {
  return (
    <FavoriteListPage
      apiUrl="/api/favorites/locations"
      title={Title.Locations}
      routeBase={BasePath.Locations}
    />
  );
}
