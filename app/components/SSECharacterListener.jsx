"use client";
import { useEffect, useState } from "react";

const SSECharacterListener = () => {
  const [characters, setCharacters] = useState([]);

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
              <strong>{data.name}</strong> (ID: {data.refId})<br />
              Type: {data.type}<br />
              Created: {new Date(data.created).toLocaleString()}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default SSECharacterListener;