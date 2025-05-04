import { EntityBasePath, EntityRedirectPath } from "../enums";
import { CharacterType, EpisodeType, LocationType } from "../types";
import GenericFavoriteButton from "./GenericFavoriteButton";

type AddToFavoriteButtonProps = {
  id: CharacterType["refId"] | LocationType["refId"] | EpisodeType["refId"];
  name: CharacterType["name"] | LocationType["name"] | EpisodeType["name"];
  whichFavorite: EntityBasePath.Characters | EntityBasePath.Locations | EntityBasePath.Episodes;
  redirectTo: EntityRedirectPath.Characters | EntityRedirectPath.Locations | EntityRedirectPath.Episodes;
};

const AddToFavoriteButton: React.FC<AddToFavoriteButtonProps> = (props) => (
  <GenericFavoriteButton {...props} method="POST">
    Add to Favorites
  </GenericFavoriteButton>
);

export default AddToFavoriteButton;