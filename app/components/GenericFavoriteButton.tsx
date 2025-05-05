"use client";
import { useRouter } from "next/navigation";
import { FC, ReactNode, useCallback, useState } from "react";
import { EntityBasePath, EntityRedirectPath } from "../enums";
import { CharacterType, EpisodeType, LocationType } from "../types";
import { Button } from "./ui/button";

type GenericFavoriteButtonProps = {
  id: CharacterType["refId"] | LocationType["refId"] | EpisodeType["refId"];
  name: CharacterType["name"] | LocationType["name"] | EpisodeType["name"];
  whichFavorite: EntityBasePath.Characters | EntityBasePath.Locations | EntityBasePath.Episodes;
  redirectTo: EntityRedirectPath.Characters | EntityRedirectPath.Locations | EntityRedirectPath.Episodes;
  method: "POST" | "DELETE";
  children: ReactNode;
  variant?: "default" | "destructive";
};

const GenericFavoriteButton: FC<GenericFavoriteButtonProps> = ({
  id,
  name,
  whichFavorite,
  redirectTo,
  method,
  children,
  variant,
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleFavorite = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/favorites/${whichFavorite}`, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refId: id, name }),
      });
      if (!res.ok) {
        alert(`Failed to ${method === "POST" ? "add to" : "remove from"} favorites. Please try again.`);
        throw new Error(`Failed to ${method === "POST" ? "add" : "remove"} favorite`);
      }
    } catch (err) {
      console.error(`Error updating favorites: ${err}`);
    } finally {
      setLoading(false);
      if (redirectTo) {
        router.push(redirectTo);
        router.refresh();
      }
    }
  }, [id, name, whichFavorite, redirectTo, method, router]);

  return (
    <Button
      className="w-full"
      onClick={handleFavorite}
      aria-label={`${children} ${name} to favorites`}
      variant={variant ?? (method === "POST" ? "default" : "destructive")}
      disabled={loading}
    >
      {children}
    </Button>
  );
};

export default GenericFavoriteButton;