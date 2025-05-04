import Link from "next/link";
import { EntityBasePath, EntityTitle } from "../enums";
import { CharacterType, EpisodeType, LocationType } from "../types";

type EntityListProps = {
  title: EntityTitle;
  items: EpisodeType[] | CharacterType[] | LocationType[];
  basePath: EntityBasePath;
};

const EntityList: React.FC<EntityListProps> = ({
  title,
  items,
  basePath
}) => {
  return (
    <section>
      <p>
        <Link href="/">Back to home</Link>
      </p>
      <h1>{title}</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link href={`/${basePath}/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default EntityList;