import { useEffect, useState } from "react";
import { CharacterType } from "../types";

export const useSSECharacters = () => {
  const [characters, setCharacters] = useState<CharacterType[]>([]);

  useEffect(() => {
    const es = new EventSource("/api/characters/stream");
    es.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setCharacters(Array.isArray(data) ? data : []);
      } catch {
        setCharacters([]);
      }
    };
    return () => es.close();
  }, []);

  return characters;
};