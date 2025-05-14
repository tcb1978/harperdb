import { FC } from "react";
import { BasePath, RedirectPath, Title } from "../enums";
import { EntityType } from "../types";
import GenericFavoriteButton from "./GenericFavoriteButton";
import JsonIDEBlock from "./JsonIDEBlock";
import { ScrollArea } from "./ui/scroll-area";


type FavoriteListProps = {
  apiUrl: string;
  title: typeof Title.Characters | typeof Title.Locations | typeof Title.Episodes;
  routeBase: typeof BasePath.Characters | typeof BasePath.Locations | typeof BasePath.Episodes;
};


const FavoriteList: FC<FavoriteListProps> = async ({
  apiUrl,
  title,
  routeBase
}) => {
  const res = await fetch(apiUrl, { cache: "no-store" });
  const data: EntityType = await res.json();
  const items = Array.isArray(data) ? data : data?.data ?? [];

  if (!items?.length) {
    return (
      <JsonIDEBlock
        data={items}
        emptyMessage={`No favorite ${title}`}
      />
    );
  }

  return (
    <>
      <h1 className="py-4 text-2xl font-bold text-amber-300">Favorite {title}</h1>
      <ScrollArea className="h-80 max-h-[60vh] w-full rounded-md border p-4 bg-gray-800">
        <ul>
          {items.map((item) => (
            <li key={item.id} className="p-4">
              <GenericFavoriteButton
                id={item.refId}
                name={item.name}
                whichFavorite={routeBase}
                redirectTo={RedirectPath[title]}
                method="DELETE"
              >
                Remove {item.name}
              </GenericFavoriteButton>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </>
  );
};

export default FavoriteList;