import FavoriteListPage from "../../components/FavoriteListPage";
import { BasePath, Title } from "../../enums";

export default async function Page() {
  return (
    <FavoriteListPage
      apiUrl="/api/favorites/episodes"
      title={Title.Episodes}
      routeBase={BasePath.Episodes}
    />
  );
}
