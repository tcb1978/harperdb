import Link from "next/link";
import { EntityBasePath, EntityTitle } from "../enums";
import { CharacterType, EpisodeType, LocationType } from "../types";
import { ScrollArea } from "./ui/scroll-area";

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
    <ScrollArea className="h-80 max-h-[60vh] w-full rounded-md border p-4 bg-gray-800">
      <ul>
        {items.map((item) => (
          <li key={item.id} className="text-white transition-colors hover:text-amber-300">
            <Link
              href={`/${basePath}/${item.id}`}
              aria-label={`Link to ${title} ${item.name}`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </ScrollArea>
  );
};

export default EntityList;