export const dynamic = "force-dynamic";
import FavoriteListPage from "components/FavoriteListPage";
import { BasePath, Title } from "enums";
import { DOMAIN_URL } from "../../../../constants";

const LocationByIDPage = () => {
  return (
    <FavoriteListPage
      apiUrl={`${DOMAIN_URL}/api/favorites/locations`}
      title={Title.Locations}
      routeBase={BasePath.Locations}
    />
  );
};

export default LocationByIDPage;