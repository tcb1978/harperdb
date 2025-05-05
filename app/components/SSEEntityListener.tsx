"use client";
import { FC } from "react";
import { useSSEEntities } from "../hooks/useSSEEntities";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";

const jsonStyles = {
  background: "#1e1e1e",
  color: "#d4d4d4",
  fontFamily: "Fira Mono, Menlo, Monaco, Consolas, monospace",
  fontSize: "1rem",
  borderRadius: "0.5rem",
  padding: "1rem",
  marginTop: "1rem",
  overflowX: "auto" as const,
  boxShadow: "0 2px 8px #0003",
  border: "1px solid #333",
};

type SSEEntityListenerProps = {
  entityType: "characters" | "locations" | "episodes";
  title?: string;
};

const SSEEntityListener: FC<SSEEntityListenerProps> = ({ entityType, title }) => {
  const entities = useSSEEntities(entityType);

  if (!entities) {
    return null;
  }

  return (
    <ScrollArea className="max-h-[500px] h-2/6 w-full pl-4">
      <h3 className="text-amber-300">
        Live {title ?? entityType.charAt(0).toUpperCase() + entityType.slice(1)} Stream (SSE)
      </h3>
      <Separator className="my-4" />
      <div style={jsonStyles}>
        {entities.length === 0 ? (
          <span style={{ color: "#6a9955" }}>No favorite {entityType}</span>
        ) : (
          <pre style={{ margin: 0 }}>
            {JSON.stringify(entities, null, 2)}
          </pre>
        )}
      </div>
    </ScrollArea>
  );
};

export default SSEEntityListener;