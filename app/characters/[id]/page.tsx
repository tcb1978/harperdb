import { getCharacterById } from "../../actions";
import EntityDetail from "../../components/EntityDetail";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Label } from "../../components/ui/label";
import { EntityBackPath, EntityRedirectPath, EntityType } from "../../enums";


type PageProps = {
  params: { id: string; };
};

export default async function Page({ params }: PageProps) {
  const character = await getCharacterById(params.id);

  if (!character) {
    return <p>Character not found</p>;
  }

  return (
    <>
      <EntityDetail
        entityType={EntityType.Character}
        entity={character}
        backPath={EntityBackPath.Characters}
        fields={["status", "species", "type", "gender"]}
        redirectPath={EntityRedirectPath.Characters}
      >
        <Avatar>
          <AvatarImage src={character.image} alt={character.name} />
          <AvatarFallback>character.name</AvatarFallback>
        </Avatar>

        <Label>Origin: {character.origin?.name}</Label>
        <Label>Location: {character.location?.name}</Label>
        <Label>Created: {new Date(character.created).toLocaleDateString()}</Label>
      </EntityDetail>
    </>
  );
}