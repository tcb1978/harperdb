import { ReactNode } from "react";
import DynamicSSEEntityListener from "./components/DynamicSSEEntityListener";
import Navigation from "./components/Navigation";
import "./output.css";


export const metadata = {
  title: "HarperDB Next.js Application",
};

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <html lang="en" suppressHydrationWarning>
    <body>
      <div className="bg-black grid items-center justify-items-center min-h-screen gap-2 p-20 font-[family-name:var(--font-geist-sans)] ">
        <Navigation />
        <main>
          <div className="flex xs:flex-col lg:flex-row items-center justify-center w-full max-w-4xl">
            <section>{children}</section>
            <div className="flex flex-col gap-4">
              <DynamicSSEEntityListener />
            </div>
          </div>
        </main>
      </div>
    </body>
  </html>
);

export default Layout;
