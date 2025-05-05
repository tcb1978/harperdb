"use client";
import { FC } from "react";
import { useSSEEntities } from "../hooks/useSSEEntities";
import JsonIDEBlock from "./JsonIDEBlock";
import { Separator } from "./ui/separator";

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
    <div className=''>
      <h3 className="text-amber-300">
        Live {title ?? entityType.charAt(0).toUpperCase() + entityType.slice(1)} Stream (SSE)
      </h3>
      <Separator className="my-4" />
      <JsonIDEBlock
        data={entities}
        emptyMessage={`No favorite ${entityType}`}
      />
    </div>
  );
};

export default SSEEntityListener;