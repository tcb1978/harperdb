export const dynamic = "force-dynamic";
import FavoriteList from "@/components/FavoriteList";
import { BasePath, Title } from "enums";
import { DOMAIN_URL } from "../../../../constants";

const FavoriteEpisodes = () => {
  return (
    <FavoriteList
      apiUrl={`${DOMAIN_URL}/api/favorites/episodes`}
      title={Title.Episodes}
      routeBase={BasePath.Episodes}
    />
  );
};

export default FavoriteEpisodes;