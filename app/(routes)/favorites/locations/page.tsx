export const dynamic = "force-dynamic";
import FavoriteListPage from "components/FavoriteListPage";
import { BasePath, Title } from "enums";
import { DOMAIN_URL } from "../../../constants";

export default function Page() {
  return (
    <FavoriteListPage
      apiUrl={`${DOMAIN_URL}/api/favorites/locations`}
      title={Title.Locations}
      routeBase={BasePath.Locations}
    />
  );
}