export const dynamic = "force-dynamic";
import FavoriteListPage from "components/FavoriteListPage";
import { BasePath, Title } from "enums";
import { DOMAIN_URL } from "../../../../constants";

const CharacterByIDPage = () => {
  return (
    <FavoriteListPage
      apiUrl={`${DOMAIN_URL}/api/favorites/characters`}
      title={Title.Characters}
      routeBase={BasePath.Characters}
    />
  );
};

export default CharacterByIDPage;
