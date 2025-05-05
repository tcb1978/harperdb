import { FC, ReactNode } from "react";
import "../output.css";
import Navigation from "./Navigation";
import SSEEntityListener from "./SSEEntityListener";

type EntityLayoutProps = {
  children: ReactNode;
  entityType: "characters" | "locations" | "episodes";
};

const EntityLayout: FC<EntityLayoutProps> = ({ children, entityType }) => (
  <html lang="en" suppressHydrationWarning>
    <body>
      <div className="bg-black grid items-center justify-items-center min-h-screen gap-2 p-20 font-[family-name:var(--font-geist-sans)] ">
        <Navigation />
        <main className="flex xs:flex-col lg:flex-row items-center justify-center w-full max-w-4xl">
          <section>{children}</section>
          <section>
            <SSEEntityListener entityType={entityType} />
          </section>
        </main>
      </div>
    </body>
  </html>
);

export default EntityLayout;