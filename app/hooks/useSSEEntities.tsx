import { useEffect, useState } from "react";
import { CharacterType, EpisodeType, LocationType } from "../types";

type EntityType = CharacterType | LocationType | EpisodeType;

// In a more complex application, you might want to use a more sophisticated state management solution (like Redux or Zustand) or even a library like React Query for data fetching and caching.
// But for this simple example, we'll just use local state and the built-in fetch API.
// I would separate the the enities each into there own hooks to separate concerns and allow for more unique logic.
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