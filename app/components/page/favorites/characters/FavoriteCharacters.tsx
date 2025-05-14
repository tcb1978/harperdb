export const dynamic = "force-dynamic";
import { BasePath, Title } from "enums";
import { DOMAIN_URL } from "../../../../constants";
import FavoriteList from "../../../FavoriteList";

const FavoriteCharacters = () => {
  return (
    <FavoriteList
      apiUrl={`${DOMAIN_URL}/api/favorites/characters`}
      title={Title.Characters}
      routeBase={BasePath.Characters}
    />
  );
};

export default FavoriteCharacters;
