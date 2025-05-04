import Link from "next/link";
import { FC } from "react";
import { EntityBasePath, EntityRedirectPath, EntityTitle } from "../enums";
import { EntityType } from "../types";
import RemoveFromFavoriteButton from "./RemoveFromFavoriteButton";

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

  if (
    !data || (Array.isArray(data) && data.length === 0)
  ) {
    return (
      <>
        <p>
          <Link href="/">Home</Link>
        </p>
        <p>No favorite {title.toLowerCase()}</p>
      </>
    );
  }
  if (!Array.isArray(data) && "error" in data) {
    return (
      <>
        <p>
          <Link href="/">Home</Link>
        </p>
        <p>{data.error}</p>
      </>
    );
  }

  const items = Array.isArray(data) ? data : data.data;

  return (
    <section>
      <h1>Favorite {title}</h1>
      <p>
        <Link href="/">Home</Link>
      </p>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link href={`/${routeBase}/${item.refId}`}>{item.name}</Link>
            <RemoveFromFavoriteButton
              id={item.refId}
              name={item.name}
              whichFavorite={routeBase}
              redirectTo={EntityRedirectPath[title]}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FavoriteListPage;