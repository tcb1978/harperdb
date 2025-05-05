"use client";
import { usePathname } from "next/navigation";
import React, { Suspense } from "react";

const SSEEntityListener = React.lazy(() => import("./SSEEntityListener"));

const entityTypes = ["characters", "locations", "episodes"] as const;

const DynamicSSEEntityListener = () => {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <>
        {entityTypes.map((type) => (
          <section key={type}>
            <Suspense fallback={<div>Loading live stream...</div>}>
              <SSEEntityListener entityType={type} />
            </Suspense>
          </section>
        ))}
      </>
    );
  }

  const found = entityTypes.find((type) => pathname.includes(type));
  if (found) {
    return (
      <section>
        <Suspense fallback={<div>Loading live stream...</div>}>
          <SSEEntityListener entityType={found} />
        </Suspense>
      </section>
    );
  }

  return null;
};

export default DynamicSSEEntityListener;