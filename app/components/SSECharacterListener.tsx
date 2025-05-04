"use client";
import { FC, useEffect, useState } from "react";
import { CharacterType } from "../types";


const SSECharacterListener: FC = () => {
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

  return (
    <div>
      <h3>Live Character Stream (SSE)</h3>
      <ul>
        {characters.length === 0 ? (
          <li>No favorite characters</li>
        ) : (
          characters.map((data) => (
            <li key={data.id}>
              <strong>{data.name}</strong> (ID: {data.refId ?? data.id})<br />
              Type: {data.type ?? "N/A"}<br />
              Created: {data.created ? new Date(data.created).toLocaleString() : "N/A"}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default SSECharacterListener;