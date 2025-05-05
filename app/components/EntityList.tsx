import Link from "next/link";
import { BasePath, Title } from "../enums";
import { CharacterType, EpisodeType, LocationType } from "../types";
import { ScrollArea } from "./ui/scroll-area";

type EntityListProps = {
  title: typeof Title[keyof typeof Title];
  items: EpisodeType[] | CharacterType[] | LocationType[];
  basePath: typeof BasePath[keyof typeof BasePath];
};

const EntityList: React.FC<EntityListProps> = ({
  title,
  items,
  basePath
}) => {
  return (
    <ScrollArea className="h-80 max-h-[60vh] w-full rounded-md border p-4 bg-gray-800">
      <ul role="list">
        {items.map((item) => (
          <li
            key={item.id}
            className="text-white transition-colors hover:text-amber-300"
            role="listitem"
          >
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