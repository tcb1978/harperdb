export const dynamic = "force-dynamic";
import FavoriteListPage from "components/FavoriteListPage";
import { BasePath, Title } from "enums";
import { DOMAIN_URL } from "../../../../constants";

const EpisodesByIDPage = () => {
  return (
    <FavoriteListPage
      apiUrl={`${DOMAIN_URL}/api/favorites/episodes`}
      title={Title.Episodes}
      routeBase={BasePath.Episodes}
    />
  );
};

export default EpisodesByIDPage;