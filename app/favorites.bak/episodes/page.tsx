import FavoriteListPage from "../../components/FavoriteListPage";
import { EntityBasePath, EntityTitle } from "../../enums";

export default async function Page() {
  return (
    <FavoriteListPage
      apiUrl="/api/favorites/episodes"
      title={EntityTitle.Episodes}
      routeBase={EntityBasePath.Episodes}
    />
  );
}
