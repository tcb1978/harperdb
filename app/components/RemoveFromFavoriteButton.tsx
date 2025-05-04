"use client";
import { EntityBasePath, EntityRedirectPath } from "../enums";
import { CharacterType, EpisodeType, LocationType } from "../types";
import GenericFavoriteButton from "./GenericFavoriteButton";

type RemoveFromFavoriteButtonProps = {
  id: CharacterType["refId"] | LocationType["refId"] | EpisodeType["refId"];
  name: CharacterType["name"] | LocationType["name"] | EpisodeType["name"];
  whichFavorite: EntityBasePath.Characters | EntityBasePath.Locations | EntityBasePath.Episodes;
  redirectTo: EntityRedirectPath.Characters | EntityRedirectPath.Locations | EntityRedirectPath.Episodes;
};

const RemoveFromFavoriteButton: React.FC<RemoveFromFavoriteButtonProps> = (props) => (
  <GenericFavoriteButton {...props} method="DELETE">
    Remove
  </GenericFavoriteButton>
);

export default RemoveFromFavoriteButton;