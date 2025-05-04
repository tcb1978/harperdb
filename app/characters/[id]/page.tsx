import { getCharacterById } from "../../actions";
import EntityDetail from "../../components/EntityDetail";
import { EntityBackPath, EntityRedirectPath, EntityType } from "../../enums";


type PageProps = {
  params: { id: string; };
};

export default async function Page({ params }: PageProps) {
  const character = await getCharacterById(params.id);

  return (
    <EntityDetail
      entityType={EntityType.Character}
      entity={character}
      backPath={EntityBackPath.Characters}
      fields={["status", "species", "type", "gender"]}
      redirectPath={EntityRedirectPath.Characters}
    >
      <p>
        <img src={character.image} alt={character.name} />
      </p>
      <p>Origin: {character.origin?.name}</p>
      <p>Location: {character.location?.name}</p>
      <p>Created: {new Date(character.created).toLocaleDateString()}</p>
    </EntityDetail>
  );
}