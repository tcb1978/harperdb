import Link from "next/link";
import AddToFavoriteButton from "./AddToFavoriteButton";

export default function EntityDetail({ entity, entityType, backPath, fields, favoriteRedirect }) {
  if (!entity) return <p>{entityType} not found.</p>;

  return (
    <section>
      <h1>{entity.name}</h1>
      {fields.map((field) => (
        <p key={field}>
          {field[0].toUpperCase() + field.slice(1)}: {entity[field]}
        </p>
      ))}
      <AddToFavoriteButton
        id={entity.id}
        name={entity.name}
        whichFavorite={entityType.toLowerCase() + "s"}
        redirectTo={favoriteRedirect}
      />
      <p>
        <Link href={backPath}>Back to {entityType}s</Link>
      </p>
    </section>
  );
}