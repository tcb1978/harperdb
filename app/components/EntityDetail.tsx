import Link from "next/link";
import {
  EntityBackPath,
  EntityBasePath,
  EntityRedirectPath,
  EntityType
} from "../enums";
import { CharacterType, EpisodeType, LocationType } from '../types';
import GenericFavoriteButton from "./GenericFavoriteButton";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "./ui/card";
import { Label } from "./ui/label";

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
    <Card className="w-[550px]">
      <CardHeader>
        <CardTitle>{entity.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid items-center w-full gap-4">
          <div className="flex flex-col space-y-1.5">
            {children}
            {fields.map((field) => (
              <Label key={field}>
                {field[0].toUpperCase() + field.slice(1)}: {entity[field as keyof typeof entity]}
              </Label>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex flex-col">
          <GenericFavoriteButton
            id={entity.id}
            name={entity.name}
            whichFavorite={entityTypeToBasePath[entityType]}
            redirectTo={redirectPath}
            method="POST"
            variant="default"
          >
            Add {entity.name}
          </GenericFavoriteButton>
          <Button variant="outline" className="mt-2">
            <Link
              href={backPath}
              aria-label={`Back to ${entityType}s`
              }>Back to {entityType}s</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default EntityDetail;