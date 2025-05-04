"use client";
import { FC } from "react";
import { useSSECharacters } from "../hooks/useSSECharacters";
import { Separator } from "./ui/separator";


const SSECharacterListener: FC = () => {
  const characters = useSSECharacters();

  return (
    <>
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
      <Separator />
    </>
  );
};

export default SSECharacterListener;