import { notFound } from "next/navigation";
import React, { Suspense } from "react";
import { getCharacterById } from "../../actions";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Label } from "../../components/ui/label";
import { EntityBackPath, EntityRedirectPath, EntityType } from "../../enums";
import { CharacterType } from "../../types";
const EntityDetail = React.lazy(() => import("../../components/EntityDetail"));


type PageProps = {
  params: { id: string; };
};

export default async function Page({ params: { id } }: PageProps) {
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
    <Suspense fallback={<div>Loading details...</div>}>
      <EntityDetail
        entityType={EntityType.Character}
        entity={character}
        backPath={EntityBackPath.Characters}
        fields={["status", "species", "type", "gender"]}
        redirectPath={EntityRedirectPath.Characters}
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
    </Suspense>
  );
}