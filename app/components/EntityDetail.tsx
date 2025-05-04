import Link from "next/link";
import {
  EntityBackPath,
  EntityBasePath,
  EntityRedirectPath,
  EntityType
} from "../enums";
import { CharacterType, EpisodeType, LocationType } from '../types';
import AddToFavoriteButton from "./AddToFavoriteButton";

type EntityDetailProps = {
  entity: CharacterType | EpisodeType | LocationType | null;
  entityType: EntityType.Character | EntityType.Location | EntityType.Episode;
  backPath: EntityBackPath.Characters | EntityBackPath.Locations | EntityBackPath.Episodes;
  fields: string[];
  redirectPath: EntityRedirectPath.Characters | EntityRedirectPath.Locations | EntityRedirectPath.Episodes;
  children?: React.ReactNode;
};

const EntityDetail: React.FC<EntityDetailProps> = ({
  entity,
  entityType,
  backPath,
  fields,
  redirectPath,
  children,
}) => {
  if (!entity) return <p>{entityType} not found.</p>;


  const entityTypeToBasePath: Record<EntityType, EntityBasePath> = {
    [EntityType.Character]: EntityBasePath.Characters,
    [EntityType.Location]: EntityBasePath.Locations,
    [EntityType.Episode]: EntityBasePath.Episodes,
  };

  return (
    <section>
      <h1>{entity.name}</h1>
      {children}
      {fields.map((field) => (
        <p key={field}>
          {field[0].toUpperCase() + field.slice(1)}: {entity[field as keyof typeof entity]}
        </p>
      ))}
      <AddToFavoriteButton
        id={entity.id}
        name={entity.name}
        whichFavorite={entityTypeToBasePath[entityType]}
        redirectTo={redirectPath}
      />
      <p>
        <Link href={backPath}>Back to {entityType}s</Link>
      </p>
    </section>
  );
};

export default EntityDetail;