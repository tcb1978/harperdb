export const dynamic = "force-dynamic";
import { getCharacterById } from "actions";
import EntityDetail from "components/EntityDetail";
import { Avatar, AvatarFallback, AvatarImage } from "components/ui/avatar";
import { Label } from "components/ui/label";
import { BackPath, EntityType, RedirectPath } from "enums";
import { notFound } from "next/navigation";
import { FC } from "react";
import { CharacterType } from "types";

type CharacterByIDPageProps = {
  id: string;
};

const CharacterByIDPage: FC<CharacterByIDPageProps> = async ({ id }) => {
  const character: CharacterType | null = await getCharacterById(id);

  if (!character) {
    notFound();
  }

  const getInitials = (fullName: string) => {
    return fullName
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  return (
    <EntityDetail
      entityType={EntityType.Character}
      entity={character}
      backPath={BackPath.Characters}
      fields={["status", "species", "type", "gender"]}
      redirectPath={RedirectPath.Characters}
    >
      <Avatar>
        <AvatarImage src={character.image} alt={character.name} />
        <AvatarFallback>
          {getInitials(character.name)}
        </AvatarFallback>
      </Avatar>
      <Label>Origin: {character.origin?.name}</Label>
      <Label>Location: {character.location?.name}</Label>
      <Label>Created: {new Date(character.created).toLocaleDateString()}</Label>
    </EntityDetail>
  );
};

export default CharacterByIDPage;