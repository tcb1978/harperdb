import { FC } from "react";
import { EntityBasePath, EntityRedirectPath, EntityTitle } from "../enums";
import { EntityType } from "../types";
import GenericFavoriteButton from "./GenericFavoriteButton";
import { ScrollArea } from "./ui/scroll-area";

type FavoriteListPageProps = {
  apiUrl: string;
  title: EntityTitle.Characters | EntityTitle.Locations | EntityTitle.Episodes;
  routeBase: EntityBasePath.Characters | EntityBasePath.Locations | EntityBasePath.Episodes;
};

const FavoriteListPage: FC<FavoriteListPageProps> = async ({
  apiUrl,
  title,
  routeBase
}) => {
  const res = await fetch(apiUrl, { cache: "no-store" });
  const data: EntityType = await res.json();


  const items = Array.isArray(data) ? data : data?.data;

  return (
    <>
      <h1 className="text-2xl font-bold text-amber-300 py-4">Favorite {title}</h1>
      <ScrollArea className="h-80 max-h-[60vh] w-full rounded-md border p-4 bg-gray-800">
        <ul>
          {items?.map((item) => (
            <li key={item.id} className="p-4">
              <GenericFavoriteButton
                id={item.refId}
                name={item.name}
                whichFavorite={routeBase}
                redirectTo={EntityRedirectPath[title]}
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

export default FavoriteListPage;