"use client";
import { usePathname } from "next/navigation";
import SSEEntityListener from "./SSEEntityListener";

const entityTypes = ["characters", "locations", "episodes"] as const;

const DynamicSSEEntityListener = () => {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <>
        {entityTypes.map((type) => (
          <section key={type}>
            <SSEEntityListener entityType={type} />
          </section>
        ))}
      </>
    );
  }

  const found = entityTypes.find((type) => pathname.includes(type));
  if (found) {
    return (
      <section>
        <SSEEntityListener entityType={found} />
      </section>
    );
  }

  return null;
};

export default DynamicSSEEntityListener;