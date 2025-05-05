import { useEffect, useState } from "react";
import { CharacterType, EpisodeType, LocationType } from "../types";

type EntityType = CharacterType | LocationType | EpisodeType;

export function useSSEEntities(entityType: "characters" | "locations" | "episodes") {
  const [entities, setEntities] = useState<EntityType[]>([]);

  useEffect(() => {
    const es = new EventSource(`/api/${entityType}/stream`);
    es.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setEntities(Array.isArray(data) ? data : []);
      } catch {
        setEntities([]);
      }
    };
    return () => es.close();
  }, [entityType]);

  return entities;
}