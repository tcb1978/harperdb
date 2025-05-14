export const dynamic = "force-dynamic";
import FavoriteList from "@/components/FavoriteList";
import { BasePath, Title } from "enums";
import { DOMAIN_URL } from "../../../../constants";

const FavoriteLocations = () => {
  return (
    <FavoriteList
      apiUrl={`${DOMAIN_URL}/api/favorites/locations`}
      title={Title.Locations}
      routeBase={BasePath.Locations}
    />
  );
};

export default FavoriteLocations;