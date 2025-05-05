import React, { FC, ReactNode, Suspense } from "react";
import "../output.css";
import Navigation from "./Navigation";

const SSEEntityListener = React.lazy(() => import("./SSEEntityListener"));

type EntityLayoutProps = {
  children: ReactNode;
  entityType: "characters" | "locations" | "episodes";
};

const EntityLayout: FC<EntityLayoutProps> = ({ children, entityType }) => (
  <html lang="en" suppressHydrationWarning>
    <body>
      <div className="bg-black grid items-center justify-items-center min-h-screen gap-2 p-20 font-[family-name:var(--font-geist-sans)] ">
        <Navigation />
        <main className="flex items-center justify-center w-full max-w-4xl xs:flex-col lg:flex-row">
          <section>{children}</section>
          <section>
            <Suspense fallback={<div>Loading live stream...</div>}>
              <SSEEntityListener entityType={entityType} />
            </Suspense>
          </section>
        </main>
      </div>
    </body>
  </html>
);

export default EntityLayout;